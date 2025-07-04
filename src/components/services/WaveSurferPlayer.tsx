import React, { useEffect, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faVolumeUp } from '@fortawesome/free-solid-svg-icons';

interface WaveSurferPlayerProps {
  src: string;
  peaksUrl?: string;
}

const formatTime = (seconds: number) => {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
};

const WaveSurferPlayer: React.FC<WaveSurferPlayerProps> = ({ src, peaksUrl }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const waveSurferRef = useRef<WaveSurfer | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    let isMounted = true;

    const loadWaveform = async () => {
      let peaksData = undefined;

      if (peaksUrl) {
        try {
          const response = await fetch(peaksUrl);
          peaksData = await response.json();
        } catch (err) {
          console.warn('Failed to load peaks JSON:', err);
        }
      }

      if (containerRef.current && isMounted) {
        const waveSurfer = WaveSurfer.create({
          container: containerRef.current,
          waveColor: '#a3a3a3',
          progressColor: '#43BFA3',
          height: 32,
          barWidth: 2,
          cursorColor: '#43BFA3',
        });

        waveSurferRef.current = waveSurfer;

        waveSurfer.load(src, peaksData).catch((e) => {
          if (e.name !== 'AbortError') {
            console.error('WaveSurfer load error:', e);
          }
        });
  
      waveSurfer.on('play', () => setIsPlaying(true));
      waveSurfer.on('pause', () => setIsPlaying(false));
      waveSurfer.on('finish', () => setIsPlaying(false));
      waveSurfer.on('audioprocess', () => {
        setCurrentTime(waveSurfer.getCurrentTime());
      });
      waveSurfer.on('interaction', () => {
        setCurrentTime(waveSurfer.getCurrentTime());
      });
      waveSurfer.on('ready', () => {
        const peaks = waveSurfer.exportPeaks();
        console.log(JSON.stringify(peaks)); // Copy this
        setDuration(waveSurfer.getDuration());
      });
  
      waveSurfer.setVolume(volume);
    }
  };

  loadWaveform();

  return () => {
    isMounted = false;
    waveSurferRef.current?.destroy();
  };
}, [src, peaksUrl]);
  

  useEffect(() => {
    if (waveSurferRef.current) {
      waveSurferRef.current.setVolume(volume);
    }
  }, [volume]);

  const handlePlayPause = () => {
    if (waveSurferRef.current) {
      waveSurferRef.current.playPause();
    }
  };

  // const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (waveSurferRef.current && duration) {
  //     const seekTo = parseFloat(e.target.value) / duration;
  //     waveSurferRef.current.seekTo(seekTo);
  //   }
  // };

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseFloat(e.target.value));
  };

  return (
    <div className="flex items-center border-1 border-gray-300 rounded-4xl p-4 w-full max-w-3xl">
      {/* Play/Pause Button */}
      <button
        onClick={handlePlayPause}
        className="text-gray-600 flex items-center justify-center w-10 h-10"
        aria-label={isPlaying ? 'Pause' : 'Play'}
      >
        {isPlaying ? (
          <FontAwesomeIcon icon={faPause} size="xl" className='hover:text-black cursor-pointer' />
        ) : (
          <FontAwesomeIcon icon={faPlay} size="xl" className='hover:text-black cursor-pointer' />
        )}
      </button>
      {/* Time */}
      <span className="w-12 text-center text-gray-600 ">{formatTime(currentTime)}</span>
      {/* Waveform */}
      <div className="flex-1 mx-4">
        <div
          ref={containerRef}
          className="w-75"
        />
        {/* Progress Bar */ }
        {/* <input
          type= "range"
          min={0}
          max={duration}
          value={currentTime}
          step="0.01"
          onChange={handleSeek}
          className="w-full accent-[#43BFA3]"
        /> */}
      </div>
      {/* Duration */}
      <span className="w-12 text-center text-gray-600">{formatTime(duration)}</span>
      {/* Volume */}
      <div className="flex items-center ml-4">
        <FontAwesomeIcon icon={faVolumeUp} className="mr-2 text-gray-600" />
        <input
          type="range"
          min={0}
          max={1}
          step="0.01"
          value={volume}
          onChange={handleVolume}
          className="accent-[#43BFA3] w-16 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default WaveSurferPlayer; 