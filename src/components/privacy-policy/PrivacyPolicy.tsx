import React from 'react';

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 text-center">Integritetspolicy</h1>
                <div className="mt-8 prose prose-indigo lg:prose-lg text-gray-600 mx-auto m-5">
                    <p>
                        Denna integritetspolicy beskriver hur Podcat samlar in, använder och skyddar den information du ger oss när du använder vår webbplats.
                    </p>

                    <h2 className='font-bold text-lg'>Information vi samlar in</h2>
                    <h3 className='font-semibold'>Kontaktinformation</h3>
                    <p>Namn och e-postadress när du fyller i vårt kontaktformulär.</p>

                    <h3 className='font-semibold'>Användningsdata</h3>
                    <p>Information om hur du använder webbplatsen, såsom vilka sidor du besöker och hur länge. Detta samlas in anonymt via verktyg som Google Analytics.</p>

                    <h3 className='font-semibold'>Teknisk information</h3>
                    <p>IP-adress, webbläsartyp och operativsystem.</p>

                    <h2 className='font-bold text-lg'>Hur vi använder informationen</h2>
                    <p>
                        Informationen vi samlar in används för att:
                    </p>
                    <ul>
                        <li>Förstå dina behov och erbjuda en bättre service</li>
                        <li>Förbättra våra produkter och tjänster</li>
                        <li>Skicka e-post om våra tjänster eller annan information vi tror du kan finna intressant, om du har gett ditt samtycke</li>
                    </ul>

                    <h2 className='font-bold text-lg'>Säkerhet</h2>
                    <p>
                        Vi är engagerade i att säkerställa att din information är säker. För att förhindra obehörig åtkomst har vi infört lämpliga fysiska, elektroniska och administrativa rutiner för att skydda den information vi samlar in online.
                    </p>

                    <h2 className='font-bold text-lg'>Dina rättigheter enligt GDPR</h2>
                    <p>
                        Du har rätt att:
                    </p>
                    <ul>
                        <li>Begära en kopia av den information vi har om dig</li>
                        <li>Be oss korrigera felaktig information</li>
                        <li>Be oss radera din information ("rätten att bli bortglömd")</li>
                        <li>Invända mot hur vi behandlar dina uppgifter</li>
                    </ul>
                    <p>
                        Om du vill utöva någon av dessa rättigheter, vänligen kontakta oss på hej@podcat.se.
                    </p>
                    <h2 className='font-bold text-lg'>Personuppgiftsansvarig</h2>
                    <p>
                        Personuppgiftsansvarig är Johan Tyrevall, som driver verksamheten under namnet "Podcat". Organisationsnummer: Tillhandahålls på begäran. För frågor om integritet eller för att utöva dina rättigheter, kontakta oss på hej@podcat.se.
                    </p>

                    <h2 className='font-bold text-lg'>Rättslig grund för behandling</h2>
                    <p>
                        Vi behandlar dina personuppgifter baserat på samtycke, berättigat intresse samt, i vissa fall, för att uppfylla ett avtal eller rättslig förpliktelse.
                    </p>

                    <h2 className='font-bold text-lg'>Lagringstid</h2>
                    <p>
                        Vi sparar inte dina personuppgifter längre än nödvändigt. Uppgifter som lämnas via kontaktformulär raderas senast efter 12 månader om ingen fortsatt kommunikation sker.
                    </p>
                    <h2 className='font-bold text-lg'>Cookies</h2>
                    <p>
                        Vår webbplats använder cookies för att analysera trafik och förbättra din upplevelse. En cookie är en liten fil som ber om tillstånd att placeras på din dators hårddisk. Du kan välja att acceptera eller avvisa cookies.
                    </p>

                    <h2 className='font-bold text-lg'>Länkar till andra webbplatser</h2>
                    <p>
                        Vår webbplats kan innehålla länkar till andra webbplatser. Vi har ingen kontroll över dessa webbplatser och är inte ansvariga för skyddet och integriteten av information som du delar där.
                    </p>

                    <h2 className='font-bold text-lg'>Ändringar i denna policy</h2>
                    <p>
                        Vi kan komma att uppdatera denna policy från tid till annan. Vi rekommenderar att du regelbundet granskar denna sida för att vara nöjd med eventuella ändringar.
                    </p>
                    <hr />
                    <p className="text-sm text-lg">
                        Denna policy är senast uppdaterad: {new Date().toLocaleDateString('sv-SE')}.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy; 