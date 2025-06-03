// src/pages/PrivacyPolicyPage.jsx (of waar je je pagina componenten plaatst)
import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      {" "}
      {/* Basis container voor leesbaarheid */}
      <h1 className="text-3xl font-bold mb-6 text-center">
        Privacybeleid TracShot.eu
      </h1>
      <p className="mb-4">
        <strong>Laatst bijgewerkt:</strong>{" "}
        <span className="text-red-500 font-semibold">[03/06/2025]</span>
      </p>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">1. Wie zijn wij?</h2>
        <p className="mb-2">
          Deze website, tracshot.eu (hierna "Website"), wordt beheerd door het
          TracShot team (hierna "wij", "ons", "onze"). TracShot is ontstaan als
          een project van studenten in het kader van de cursus Business
          Development, met als doel het ontwikkelen van technologie om de
          schietsportervaring te verbeteren.
        </p>
        <p className="mb-2">
          Voor vragen over dit privacybeleid of over de verwerking van uw
          persoonsgegevens kunt u contact met ons opnemen via:
        </p>
        <ul className="list-disc list-inside mb-2 pl-4">
          <li>
            <strong>E-mailadres:</strong>{" "}
            <span className="text-red-500 font-semibold">
              [Vul hier JULLIE contact e-mailadres in, bijvoorbeeld het
              e-mailadres van de Google Form beheerder of een team e-mailadres]
            </span>
          </li>
          <li className="text-red-500 font-semibold">
            (Optioneel): Andere contactgegevens [bv. een link naar een
            contactpagina als die er is naast het Google Form]
          </li>
        </ul>
        <p>
          Wij zijn de verwerkingsverantwoordelijke voor de persoonsgegevens die
          via deze Website en de daaraan gekoppelde diensten (zoals het Google
          Form) worden verzameld.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">
          2. Welke persoonsgegevens verzamelen wij en waarom?
        </h2>

        <h3 className="text-xl font-semibold mt-4 mb-2">
          a. Bij het invullen van ons Google Form (Community):
        </h3>
        <ul className="list-disc list-inside mb-2 pl-4">
          <li>
            <strong>Gegevens:</strong> Wij verzamelen uw e-mailadres wanneer u
            dit vrijwillig verstrekt via het Google Form waarnaar wij linken
            voor community-doeleinden.
          </li>
          <li>
            <strong>Doel:</strong> Het doel van het verzamelen van uw
            e-mailadres is om u op de hoogte te houden van TracShot,
            nieuwsbrieven te sturen, u uit te nodigen voor onze community en/of
            u te informeren over updates en ontwikkelingen van ons project.
          </li>
          <li>
            <strong>Rechtsgrond:</strong> Wij verwerken deze gegevens op basis
            van uw expliciete toestemming, die u geeft door uw e-mailadres in te
            vullen en het formulier te verzenden. U kunt uw toestemming te allen
            tijde intrekken (zie punt 5).
          </li>
          <li>
            <strong>Google Forms:</strong> Voor het verzamelen van deze
            e-mailadressen maken wij gebruik van Google Forms, een dienst van
            Google LLC. Wanneer u het Google Form invult, worden uw gegevens
            verwerkt door Google. Wij raden u aan het privacybeleid van Google
            te raadplegen:{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              https://policies.google.com/privacy
            </a>
            .
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2">
          b. Bij het bezoeken van onze Website:
        </h3>
        <ul className="list-disc list-inside mb-2 pl-4">
          <li>
            <strong>IP-adres:</strong> Uw IP-adres kan tijdelijk worden
            geregistreerd door onze webserver.
            <ul className="list-circle list-inside ml-4">
              <li>
                <strong>Doel:</strong> Dit is technisch noodzakelijk voor het
                functioneren van de website (om de content aan u te kunnen
                tonen) en voor beveiligingsdoeleinden (bv. het detecteren en
                voorkomen van misbruik).
              </li>
              <li>
                <strong>Rechtsgrond:</strong> Ons gerechtvaardigd belang om een
                functionele en veilige website aan te bieden.
              </li>
            </ul>
          </li>
          <li>
            <strong>Serverlogs:</strong> Onze server kan standaard logs
            bijhouden (zoals bezochte pagina's, browsertype, tijdstip van
            bezoek).
            <ul className="list-circle list-inside ml-4">
              <li>
                <strong>Doel:</strong> Statistische analyse (anoniem, indien
                mogelijk), het oplossen van technische problemen en beveiliging.
              </li>
              <li>
                <strong>Rechtsgrond:</strong> Ons gerechtvaardigd belang.
              </li>
            </ul>
          </li>
          <li>
            <strong>Cookies:</strong>
            <p className="text-red-500 font-semibold">
              [Kies één of pas aan: "Op dit moment gebruikt onze website geen
              cookies." / "Op dit moment gebruikt onze website enkel strikt
              noodzakelijke functionele cookies die geen toestemming vereisen."
              / "Onze website gebruikt cookies voor [specificeer: bv. anonieme
              analyse via Google Analytics, etc.]"]
            </p>
            <p className="text-red-500 font-semibold">
              [Indien cookies gebruikt worden die geen strikt noodzakelijke
              cookies zijn:] Voor het plaatsen van niet-noodzakelijke cookies
              vragen wij uw voorafgaande toestemming via onze cookiebanner. U
              kunt uw cookievoorkeuren te allen tijde beheren.
            </p>
            <p className="text-red-500 font-semibold">
              [Verwijs eventueel naar een aparte Cookie Policy als die er is, of
              geef hier meer details over de gebruikte cookies: naam, doel,
              type, bewaartermijn.]
            </p>
            <p className="text-red-500 font-semibold">
              U dient dit gedeelte zeer zorgvuldig na te kijken en aan te vullen
              op basis van de daadwerkelijke cookies die uw website plaatst.
              Controleer dit via uw browserontwikkelaarstools of met een online
              cookie-scanner.
            </p>
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2">
          c. Gegevens gerelateerd aan de app-download:
        </h3>
        <p>
          Onze Website bevat links naar externe app stores (zoals de Google Play
          Store of Apple App Store) waar u de TracShot app kunt downloaden.
          Wanneer u op deze links klikt, verlaat u onze Website. Deze app stores
          hebben hun eigen privacybeleid en gebruiksvoorwaarden. Ook de TracShot
          app zelf zal een eigen privacybeleid hebben dat de gegevensverwerking
          binnen de app beschrijft. Wij zijn niet verantwoordelijk voor het
          privacybeleid of de praktijken van deze externe platformen of de app
          zelf.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">
          3. Hoe lang bewaren wij uw gegevens?
        </h2>
        <ul className="list-disc list-inside mb-2 pl-4">
          <li>
            <strong>E-mailadressen (via Google Form):</strong> Wij bewaren uw
            e-mailadres zolang u deel wilt uitmaken van onze community of totdat
            u uw toestemming intrekt, of totdat het TracShot project significant
            wijzigt of beëindigd wordt.{" "}
            <span className="text-red-500 font-semibold">
              Wij zullen periodiek [bv. jaarlijks] nagaan of de gegevens nog
              relevant zijn voor het doel waarvoor ze verzameld zijn.
            </span>
          </li>
          <li>
            <strong>Serverlogs/IP-adressen:</strong> Deze worden doorgaans voor
            een korte periode bewaard{" "}
            <span className="text-red-500 font-semibold">
              [Specificeer periode indien bekend, bv. "gedurende X
              dagen/maanden"]
            </span>{" "}
            voor beveiligings- en technische doeleinden, tenzij een langere
            bewaring noodzakelijk is (bv. bij een veiligheidsincident).
          </li>
          <li>
            <strong>Cookies:</strong> De bewaartermijn van cookies varieert per
            cookie. Zie onze{" "}
            <span className="text-red-500 font-semibold">
              [Cookie Policy / het cookie-gedeelte hierboven]
            </span>{" "}
            voor details.
          </li>
        </ul>
        <p className="text-red-500 font-semibold">
          U dient de bewaartermijnen concreet te maken en af te stemmen op uw
          daadwerkelijke processen en wettelijke verplichtingen.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">
          4. Met wie delen wij uw gegevens?
        </h2>
        <p className="mb-2">
          Wij delen uw persoonsgegevens niet met derden, behalve:
        </p>
        <ul className="list-disc list-inside mb-2 pl-4">
          <li>
            <strong>Google LLC:</strong> Voor het gebruik van Google Forms (als
            verwerker van de e-mailadressen die u via het formulier indient).
          </li>
          <li>
            <strong>Hostingprovider:</strong> Onze website hostingprovider kan
            toegang hebben tot serverlogs en IP-adressen als onderdeel van de
            hostingdiensten.{" "}
            <span className="text-red-500 font-semibold">
              [Noem eventueel de naam van de hostingprovider en het land waar
              data wordt opgeslagen, indien relevant]
            </span>
            .
          </li>
          <li>
            <strong>Wettelijke verplichting:</strong> Als wij wettelijk
            verplicht zijn om gegevens te delen (bv. op verzoek van
            gerechtelijke autoriteiten).
          </li>
        </ul>
        <p>Wij verkopen uw persoonsgegevens nooit aan derden.</p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">
          5. Uw rechten als betrokkene
        </h2>
        <p className="mb-2">
          U heeft de volgende rechten met betrekking tot uw persoonsgegevens:
        </p>
        <ul className="list-disc list-inside mb-2 pl-4">
          <li>
            <strong>Recht op inzage:</strong> U kunt een kopie opvragen van de
            gegevens die wij over u hebben.
          </li>
          <li>
            <strong>Recht op rectificatie:</strong> U kunt vragen om onjuiste
            gegevens te corrigeren.
          </li>
          <li>
            <strong>
              Recht op gegevenswissing ("recht om vergeten te worden"):
            </strong>{" "}
            U kunt vragen om uw gegevens te verwijderen onder bepaalde
            voorwaarden.
          </li>
          <li>
            <strong>Recht op beperking van de verwerking:</strong> U kunt vragen
            om de verwerking van uw gegevens te beperken.
          </li>
          <li>
            <strong>Recht op overdraagbaarheid van gegevens:</strong> U kunt
            vragen om uw gegevens in een gestructureerd, gangbaar en
            machineleesbaar formaat te ontvangen (indien van toepassing).
          </li>
          <li>
            <strong>Recht van bezwaar:</strong> U kunt bezwaar maken tegen de
            verwerking van uw gegevens op basis van ons gerechtvaardigd belang.
          </li>
          <li>
            <strong>Recht om toestemming in te trekken:</strong> Indien de
            verwerking gebaseerd is op uw toestemming (zoals voor de e-mails via
            het Google Form), kunt u deze toestemming te allen tijde intrekken.
            Dit doet geen afbreuk aan de rechtmatigheid van de verwerking vóór
            de intrekking.
          </li>
        </ul>
        <p className="mb-2">
          Om deze rechten uit te oefenen, kunt u contact met ons opnemen via de
          contactgegevens in punt 1. Wij kunnen u vragen om uw identiteit te
          bewijzen voordat wij aan uw verzoek voldoen.
        </p>
        <p>
          U heeft ook het recht om een klacht in te dienen bij de
          toezichthoudende autoriteit als u van mening bent dat onze verwerking
          van uw persoonsgegevens in strijd is met de privacywetgeving. Voor
          België is dit de Gegevensbeschermingsautoriteit (GBA).
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">
          6. Beveiliging van uw gegevens
        </h2>
        <p>
          Wij nemen redelijke technische en organisatorische maatregelen om uw
          persoonsgegevens te beschermen tegen verlies, misbruik, onbevoegde
          toegang of openbaarmaking.{" "}
          <span className="text-red-500 font-semibold">
            [Overweeg hier kort te noemen welke soort maatregelen, bv. "Dit
            omvat bijvoorbeeld het gebruik van beveiligde verbindingen (SSL/TLS)
            voor onze website." Wees echter voorzichtig met het geven van te
            veel detail die misbruikt kan worden.]
          </span>
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">
          7. Wijzigingen aan dit privacybeleid
        </h2>
        <p>
          Wij kunnen dit privacybeleid van tijd tot tijd wijzigen. De meest
          recente versie is altijd beschikbaar op onze Website. Wij raden u aan
          dit beleid regelmatig te raadplegen. Bij belangrijke wijzigingen
          zullen wij u proberen hierover actief te informeren.
        </p>
      </section>
      <hr className="my-8" />
      <p className="text-sm text-gray-600">
        <strong className="text-red-500">BELANGRIJKE DISCLAIMER:</strong> De
        inhoud van dit document is een concept en dient uitsluitend ter
        illustratie. Het is geen juridisch advies. U dient deze tekst zorgvuldig
        aan te passen aan uw specifieke situatie en (sterk aanbevolen) te laten
        nakijken door een juridisch expert voordat u deze op uw website plaatst.
      </p>
    </div>
  );
};

export default PrivacyPolicyPage;
