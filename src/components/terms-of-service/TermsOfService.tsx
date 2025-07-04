import React from 'react';

const TermsOfService: React.FC = () => {
    return (
        <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 text-center">Användarvillkor</h1>
                <div className="mt-8 prose prose-indigo lg:prose-lg text-gray-600 mx-auto m-5">
                    <p>
                        Dessa användarvillkor ("Villkor") reglerar din användning av denna webbplats som tillhandahålls av Johan Tyrevall, som driver verksamheten under namnet "Podcat". Genom att använda webbplatsen godkänner du dessa Villkor.
                    </p>

                    <h2 className="font-bold text-lg">1. Användning av tjänsten</h2>
                    <p>
                        Du förbinder dig att följa tillämpliga lagar och att inte använda webbplatsen för olagliga eller skadliga ändamål. Otillåten användning, inklusive spridning av skadlig kod eller försök till intrång, kan leda till att din åtkomst blockeras.
                    </p>

                    <h2 className="font-bold text-lg">2. Immateriella rättigheter</h2>
                    <p>
                        Allt innehåll på webbplatsen – inklusive texter, bilder, grafik och logotyper – tillhör Podcat eller dess licensgivare och skyddas av upphovsrättslagar. Användning utöver vad som tillåts enligt svensk lag kräver skriftligt tillstånd.
                    </p>

                    <h2 className="font-bold text-lg">3. Ansvarsbegränsning</h2>
                    <p>
                        Webbplatsen tillhandahålls "i befintligt skick" utan några garantier. Podcat ansvarar inte för direkta eller indirekta skador som uppstår vid användning av webbplatsen eller dess innehåll.
                    </p>

                    <h2 className="font-bold text-lg">4. Länkar till tredje part</h2>
                    <p>
                        Webbplatsen kan innehålla länkar till externa webbplatser. Podcat ansvarar inte för innehållet eller integritetspolicyn på dessa webbplatser och frånsäger sig allt ansvar för skada som kan uppstå vid användning av dem.
                    </p>

                    <h2 className="font-bold text-lg">5. Ändringar av villkor</h2>
                    <p>
                        Podcat förbehåller sig rätten att när som helst uppdatera eller ändra dessa Villkor. Ändringar träder i kraft vid publicering på denna sida. Vi rekommenderar att du regelbundet granskar villkoren.
                    </p>

                    <h2 className="font-bold text-lg">6. Tillämplig lag och tvistlösning</h2>
                    <p>
                        Dessa Villkor regleras av svensk lag. Tvister ska i första hand lösas genom dialog. Om tvist inte kan lösas i samförstånd avgörs den av svensk domstol med Stockholms tingsrätt som första instans.
                    </p>

                    <h2 className="font-bold text-lg">7. Kontakt</h2>
                    <p>
                        Vid frågor om dessa Villkor, vänligen kontakta oss på hej@podcat.se.
                    </p>

                    <hr />
                    <p className="text-sm text-lg">
                        Dessa villkor är senast uppdaterade: {new Date().toLocaleDateString('sv-SE')}.
                    </p>

                </div>
            </div>
        </div>
    );
};

export default TermsOfService; 