import React from "react";
import MovieCard from "./MovieCard";


const Catalog = () => {
  const movies = [
    {
      title: "Border Collie",
      imageurl:
        "https://www.psy.pl/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2005/02/shutterstock_34564123-e1500379419296.jpg.webp",
      description:
        "Border collie to pies o ogromnym temperamencie i wesołym usposobieniu. Zaskakuje jego podwójna natura: w pracy ze stadem owiec jest stanowczy, a wobec właściciela niezwykle oddany. Z natury przyjacielski i łagodny border collie nie nadaje się na stróża. Nie jest agresywny w stosunku do ludzi. W liniach pracujących zdarzają się osobniki mniej ufne, ale wynika to raczej ze specyfiki ich zajęć, a nie z wad charakteru.",
      advantages: [
        " Oddany i przywiązany do właściciela",
        "  Łagodny i przyjazny",
        " Wyjątkowo inteligentny i pojętny",
        "   Tolerancyjny wobec innych psów",
        " Świetny sportowiec",
      ],
      disadvantages: [
        "Wymaga dużo ruchu połączonego z ćwiczeniami i regularnych treningów",
        "Nachalny w okazywaniu uczuć",
        "Nie znosi samotności",
        "Może niszczyć",
        "Ma skłonności do reaktywności",
      ],
    },
    {
      title: "Owczarek niemiecki",
      description:
        "Owczarek niemiecki ma duży temperament, powinien być zrównoważony, pewny siebie, opanowany i łagodny, o ile nie zostanie sprowokowany. Nerwowość, agresję czy tchórzostwo uznaje się za wady charakteru i psy o takich cechach nie powinny być wykorzystywane w hodowli. Przedstawiciel tej rasy chętnie się podporządkowuje właścicielowi, przy czym samce mają z reguły silniejsze charaktery, a suki są bardziej uległe.",
      imageurl:
        "https://www.psy.pl/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2017/02/DSC_7140-k-taru%C5%82ka-e1486678465911-2.jpg.webp",
      advantages: [
        " Przywiązany do rodziny",
        " Szybko się uczy",
        " Nadaje się do wszechstronnego szkolenia",
        " Można z nim uprawiać psie sporty",
        " Świetny stróż i obrońca",
        " Podporządkowuje się właścicielowi",
        " Dobrze dogaduje się z dziećmi",
        " Może dzielić dom z innymi psami i zwierzętami domowymi",
        "Łatwy w pielęgnacji",
      ],
      disadvantages: [
        "  Dość hałaśliwy",
        " Obficie linieje",
        "  Bardzo silny",
        " Wymaga zajęcia umysłowego",
      ],
    },
    {
      title: "Billy",
      description:
        "Billy to duży pies gończy o jasnym umaszczeniu. Jako typowy gończy, billy jest łagodny wobec ludzi, także obcych, nie nadaje się więc na stróża. To dobry towarzysz dzieci, wobec których jest delikatny i cierpliwy. W stosunku do obcych psów zwykle nie jest zaczepny, choć zdarzają się konflikty między psami tej samej płci, ponieważ billy w grupie lubią ustalić sobie hierarchię. Ze względu na silny instynkt łowiecki może być niebezpieczny wobec małych zwierząt domowych i tych spotykanych na zewnątrz.",
      imageurl:
        "https://www.psy.pl/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2009/01/billy5-864x575.jpg.webp",
      advantages: [
        "Niekłopotliwy w pielęgnacji",
        " Zdrowy i odporny",
        "Dość podatny na szkolenie",
        " Lubi dzieci",
      ],
      disadvantages: [
        " Wymaga dużo ruchu i zajęcia",
        " Ma silny instynkt łowiecki",
        " Jest uparty i dosyć niezależny",
        " Wymaga konsekwentnego wychowania",
      ],
    },
    {
      title: "Mops",
      description:
        "Od swego pojawienia się mops wzbudzał skrajne uczucia – jedni go podziwiali, inni uważali za wybryk natury. Choć ma zatroskany wyraz pyska, mops jest psem pogodnym i pełnym życia. Niech nas też nie zwiedzie jego przysadzista sylwetka – mops to zwierzak obdarzony sporym temperamentem.",
      imageurl:
        "https://www.psy.pl/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2010/05/shutterstock_206706229-e1486561003481-864x575.jpg.webp",
      advantages: [
        " Inteligentny i wesoły",
        "  Łagodny i towarzyski",
        " Przywiązany do rodziny",
        " Dobry przyjaciel dzieci",
        " Tolerancyjny wobec psów i innych zwierząt",
        "Nadaje się do małego mieszkania",
        " Nie potrzebuje dużo ruchu",
      ],
      disadvantages: [
        "Linieje przez cały rok",
        "Jest mało odporny na upały",
        "Bywa uparty",
        " Chrapie",
        "Często miewa alergie",
      ],
    },
    {
      title: "Chin Japoński ",
      description:
        "Chin japoński to pies wesoły, zrównoważony i ciekawski. Jest posłuszny, choć czasem potrafi się obrazić. Na przemian spokojny i pełen temperamentu, psotny i dystyngowany umie znaleźć się w każdej sytuacji. Doskonale wyczuwa nastroje panujące w rodzinie i dostosowuje do nich swoje zachowanie. Lubi być blisko opiekunów, jest czuły, ale się nie narzuca. Takim samym uczuciem darzy wszystkich domowników.",
      imageurl:
        "https://www.psy.pl/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2009/01/shutterstock_391320796-e1527166028646-864x574.jpg.webp",
      advantages: [
        " Mocno przywiązany do właściciela, ale nie natrętny",
        " Łagodny i przyjacielski",
        " Dobry przyjaciel dzieci",
        " Toleruje inne psy i zwierzęta domowe",
        " Niedrogi w utrzymaniu",
        " Łatwy w pielęgnacji",
        " Nie wymaga wiele ruchu",
        " Nadaje się do małego mieszkania",

      ],
      disadvantages: [
        "Wrażliwy na upały",
        "Może mieć problemy z oczami",
      ],
    },
    {
      title: "Chihuahua",
      description:
        "Chihuahua to duży pies w niewielkim opakowaniu. Nie jest zabawką i nie powinien być tak traktowany. To psiak wesoły i przyjacielski. Jest bardzo wrażliwy i mocno przywiązany do właściciela, którego nie odstępuje na krok. Chihuahua lubi być w centrum zainteresowania i przesiadywać na kolanach. Ignorowany przez dłuższy czas, upomina się o należną mu uwagę. Zwykle największym uczuciem darzy wybraną osobę, ale jest miły również dla pozostałych domowników.",
      imageurl:
        "https://www.psy.pl/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2017/04/shutterstock_458223577-864x575.jpg.webp",
      advantages: [
        " Bardzo przywiązany do właściciela",
        " Wesoły, łagodny i przyjacielski",
        " Aktywny i ruchliwy",
        "  Dobry przyjaciel dla starszych dzieci",
        "  Dogada się z innymi psami i zwierzętami domowymi",
        " Łatwy w pielęgnacji",
        " Nie jest kosztowny w utrzymaniu",
        " Długowieczny",
      ],
      disadvantages: [
        " Bywa zadziorny wobec obcych psów",
        "  Samce miewają skłonność do znaczenia pomieszczeń i przedmiotów",
        " Lubi szczekać",
      ],
    },
    {
      title: "Nowofunland",
      description:
        "Nowofundland to pies spokojny, zrównoważony, cierpliwy, odważny i pozbawiony agresji. Najlepiej będzie się czuł w domu z ogrodem, ale musi mieć zapewniony stały dostęp do środka. Bardzo przywiązany do rodziny, wymaga bliskiego kontaktu z człowiekiem. Nowofundland bez problemu zniesie nieobecność pana przez kilka godzin, ale odizolowanie go na stałe w kojcu może źle wpłynąć na jego psychikę. Nieszczęśliwy, samotny nowofundland skutecznie uprzykrzy życie domownikom i sąsiadom.",
      imageurl:
        "https://www.psy.pl/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2005/03/shutterstock_34532893-864x575.jpg.webp",
      advantages: [
        " Bardzo przywiązany do właściciela",
        " Łagodny i tolerancyjny",
        " Doskonały przyjaciel dzieci",
        " Akceptuje inne czworonogi",
        "  Inteligentny, szybko się uczy",
        "  Chętnie współpracuje, jeśli postępuje się z nim spokojnie i konsekwentnie",
      ],
      disadvantages: [
        "  Jego utrzymanie sporo kosztuje",
        "  Wymaga pracochłonnej i systematycznej pielęgnacji",
        "  Czasem mocno się ślini",
        "  Wnosi do domu dużo błota",
      ],
    },
    {
      title: "Carin Terrier",
      description:
        "Cairn terrier to pies o radosnym usposobieniu, energiczny i silny. Cechują go duży temperament i zdecydowany charakter. Jest pewny siebie, lecz nieagresywny, towarzyski i przyjazny w  stosunku do ludzi. Bardzo przywiązuje się do właściciela, ale nie jest natrętny. Potrafi cierpliwie czekać, aż ten znajdzie dla niego czas. Nie znaczy to jednak, że można go zostawić samemu sobie czy izolować od rodziny, bo wtedy cairn terrier bywa nieposłuszny i szuka wrażeń na własną łapę. Łatwo adaptuje się do nowych warunków, więc można go wszędzie z sobą zabrać.",
      imageurl:
        "https://www.psy.pl/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2017/03/cairn-terrier-864x575.jpg.webp",
      advantages: [
        " Przywiązany do właściciela, ale nie natrętny",
        " Dobry towarzysz starszych dzieci",
        " Czujny i spostrzegawczy",
        " Może uprawiać niektóre sporty i brać udział w próbach pracy",
        " Nadaje się do mieszkania, jeśli ma odpowiednią ilość ruchu",
        " Prawidłowo pielęgnowany nie gubi sierści",
      ],
      disadvantages: [
        " Wymaga systematycznych zabiegów pielęgnacyjnych",
        " Ma skłonności do gonienia małych zwierząt i szybko poruszających się obiektów",
        " Uparty i niezależny",
      ],
    },
    {
      title: "Shiba",
      description:
        "Podobnie jak inne azjatyckie rasy psów, shiba (shiba inu) obdarzona jest bardzo silnym charakterem. Określana jest nawet jako „wielki pies w małym ciele”. Psy tej rasy są inteligentne, niezwykle sprytne i lubią stawiać na swoim. Ich wychowanie wymaga więc dużo konsekwencji i cierpliwości. Źle prowadzona shiba, której opiekunowie nie potrafią postawić jasnych granic, nie omieszka posunąć się do agresji, by osiągnąć upatrzony przez siebie cel. Nie jest więc łatwym psem, a kupując ją do domu z dzieckiem, należy zwracać szczególną uwagę na odpowiednie wychowanie.",
      imageurl:
        "https://www.psy.pl/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2006/08/shiby_dwie-864x575.jpg.webp",
      advantages: [
        " Zdrowy, odporny i długowieczny",
        " Dosyć łatwy w pielęgnacji",
        "  Niekłopotliwy w domu",
        "  Ekonomiczny w utrzymaniu",
        " Skory do zabawy i energiczny",

      ],
      disadvantages: [
        " Uardzo uparty i niezależny",
        " Uywa agresywny wobec innych psów",
        " Ua silny instynkt łowiecki",
      ],
    },

  ];

  return (
    <div className="catalog">
      {movies.map((m, index) => (
        <MovieCard movie={m} key={index} />
      ))}
    </div>
  );
};

export default Catalog;

// Title
// advantages
// Description
// disadvantages
// Image
