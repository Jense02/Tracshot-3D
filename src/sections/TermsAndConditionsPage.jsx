// src/pages/TermsAndConditionsPage.jsx (of waar je je pagina componenten plaatst)
import React from "react";

const TermsAndConditionsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      {" "}
      {/* Basis container voor leesbaarheid */}
      <h1 className="text-3xl font-bold mb-6 text-center">
        Algemene Voorwaarden TracShot.eu
      </h1>
      <p className="mb-4">
        <strong>Laatst bijgewerkt:</strong>{" "}
        <span className="text-red-500 font-semibold">[03/06/2025]</span>
      </p>
      <p className="mb-4">
        Welkom bij tracshot.eu (de "Website"). Deze Algemene Voorwaarden
        beschrijven de regels voor het gebruik van onze Website. Door de Website
        te bezoeken en te gebruiken, gaat u akkoord met deze voorwaarden. Indien
        u niet akkoord gaat, dient u de Website niet te gebruiken.
      </p>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">
          1. Over TracShot en de Website
        </h2>
        <p>
          TracShot is ontstaan uit een studentenproject binnen de cursus
          Business Development. Ons doel is het revolutioneren van de
          schietsportervaring door middel van slimme technologie, AI en
          geavanceerde analyses om schutters te helpen hun prestaties te
          verbeteren. De Website dient ter informatie over het TracShot project
          en de TracShot app, en biedt links voor het downloaden van de app en
          een mogelijkheid om via een Google Form lid te worden van onze
          community (door het achterlaten van een e-mailadres).
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">
          2. Gebruik van de Website
        </h2>
        <ul className="list-disc list-inside mb-2 pl-4">
          <li>
            U stemt ermee in de Website alleen te gebruiken voor legitieme
            doeleinden en op een manier die geen inbreuk maakt op de rechten
            van, of het gebruik en genot van de Website door anderen beperkt of
            verhindert.
          </li>
          <li>
            Verboden gedrag omvat het lastigvallen of veroorzaken van leed of
            ongemak voor andere gebruikers, het verzenden van obscene of
            beledigende inhoud, of het verstoren van de normale dialoogstroom
            binnen de Website.
          </li>
        </ul>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">
          3. Intellectueel Eigendom
        </h2>
        <ul className="list-disc list-inside mb-2 pl-4">
          <li>
            Alle inhoud op deze Website, inclusief maar niet beperkt tot tekst,
            afbeeldingen, logo's (inclusief de naam "TracShot"), grafische
            vormgeving, en software, is eigendom van het TracShot team of haar
            licentiegevers en wordt beschermd door auteursrecht en andere
            intellectuele eigendomsrechten.
          </li>
          <li>
            U mag de inhoud enkel bekijken en downloaden voor persoonlijk,
            niet-commercieel gebruik, op voorwaarde dat u alle
            auteursrechtelijke en andere eigendomsvermeldingen intact laat.
          </li>
          <li>
            Elk ander gebruik, inclusief reproductie, wijziging, distributie, of
            herpublicatie, zonder voorafgaande schriftelijke toestemming van het
            TracShot team, is strikt verboden.
          </li>
          <li className="text-red-500 font-semibold">
            [Optioneel, indien relevant voor de credits:] Delen van deze website
            zijn mogelijk ontwikkeld met behulp van open-source componenten of
            met inspiratie/hulp van derden (zoals Javascript Mastery & Adrian
            Hajdin). Eventuele licenties van derden die van toepassing zijn op
            specifieke componenten blijven gerespecteerd. Credits hiervoor
            kunnen, indien van toepassing, elders op de site vermeld worden.
          </li>
        </ul>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">
          4. Links naar websites van derden
        </h2>
        <p>
          Onze Website bevat links naar websites van derden, zoals app stores
          (voor het downloaden van de TracShot app) en Google Forms. Deze links
          worden uitsluitend voor uw gemak aangeboden. Wij hebben geen controle
          over de inhoud van deze externe websites en zijn niet verantwoordelijk
          voor hun inhoud, beschikbaarheid, of hun privacybeleid of praktijken.
          Het opnemen van een link impliceert geen goedkeuring van de
          betreffende website. Het gebruik van websites van derden is op eigen
          risico.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">
          5. Disclaimer en Beperking van Aansprakelijkheid
        </h2>
        <ul className="list-disc list-inside mb-2 pl-4">
          <li>
            De informatie op deze Website wordt "as is" en "as available"
            aangeboden, zonder enige expliciete of impliciete garanties,
            inclusief maar niet beperkt tot garanties van verkoopbaarheid,
            geschiktheid voor een bepaald doel, of niet-inbreuk.
          </li>
          <li>
            Hoewel wij ernaar streven om accurate en actuele informatie te
            verstrekken, geven wij geen garanties met betrekking tot de
            nauwkeurigheid, volledigheid of actualiteit van de informatie op de
            Website.
          </li>
          <li>
            Aangezien TracShot is ontstaan als een studentenproject, wordt de
            Website en de gerelateerde app geleverd zonder enige garantie op
            continue beschikbaarheid of foutloze werking.
          </li>
          <li>
            Voor zover maximaal toegestaan door de toepasselijke wetgeving, is
            het TracShot team niet aansprakelijk voor enige directe, indirecte,
            incidentele, gevolg- of speciale schade (inclusief, maar niet
            beperkt tot, schade door verlies van winst, gegevensverlies of
            bedrijfsonderbreking) die voortvloeit uit het gebruik van, of het
            onvermogen tot gebruik van, de Website of de informatie hierop,
            zelfs als wij op de hoogte zijn gesteld van de mogelijkheid van
            dergelijke schade.
          </li>
        </ul>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">
          6. Wijzigingen aan de Voorwaarden
        </h2>
        <p>
          Wij behouden ons het recht voor om deze Algemene Voorwaarden op elk
          moment te wijzigen. Wijzigingen worden van kracht zodra ze op de
          Website zijn gepubliceerd. Het is uw verantwoordelijkheid om deze
          voorwaarden regelmatig te controleren. Voortgezet gebruik van de
          Website na dergelijke wijzigingen houdt in dat u akkoord gaat met de
          gewijzigde voorwaarden.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">
          7. Toepasselijk recht en Geschillenbeslechting
        </h2>
        <p>
          Deze Algemene Voorwaarden worden beheerst door en geïnterpreteerd in
          overeenstemming met{" "}
          <span className="text-red-500 font-semibold">
            [Belgisch recht – U dient dit te bevestigen of aan te passen]
          </span>
          . Eventuele geschillen die voortvloeien uit of verband houden met deze
          voorwaarden zullen worden voorgelegd aan de bevoegde rechtbanken van{" "}
          <span className="text-red-500 font-semibold">
            [Arrondissement/stad in België, bv. Dendermonde, Gent – U dient dit
            te bevestigen of aan te passen]
          </span>
          .
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">8. Contact</h2>
        <p>
          Voor vragen over deze Algemene Voorwaarden kunt u contact met ons
          opnemen via de contactgegevens vermeld in ons Privacybeleid.
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

export default TermsAndConditionsPage;
