const RESULTS_MAP = {
    'egocentrico': {
    title: 'Egocentrico ma conscio delle tue capacità',
    contents: "Siete motivati dalla voglia di raggiungere i vostri obiettivi e di dimostrare il vostro valore, ma al contempo potreste avere difficoltà a riconoscere i meriti degli altri e a collaborare in modo efficace. La vostra forte fiducia in voi stessi può essere un grande vantaggio, ma è importante ricordare che il successo non si ottiene sempre da soli. Essere più aperti alla collaborazione e al riconoscimento degli altri potrebbe essere un'ottima opportunità per imparare nuove cose e migliorare come persona.",
    },
    'empatico': {
        title: 'Empatico e premuroso',
        contents: "Siete ottimisti e fiduciosi della vostra abilità di migliorare le cose, che siano esse un gruppo di persone, un processo lavorativo, o voi stessi. E' difficile decidere se siete introversi o estroversi. Avete tanti libri che intendete leggere, e la prossima settimana ne inizierete uno. Quando vi svegliate la mattina, avete difficoltà a ricordare cosa avete letto. Vi piace il suono della pioggia ma non starci in mezzo. Avete paura di non riuscire a fare abbastanza, mente tutti pensano che facciate più di loro.",
    },
    'aperto': {
        title: 'Aperto al nuovo',
        contents: "Trovate energia nel fare le cose che ritenete importanti, e diventate irrequieti se vi sembra di essere sempre la stessa persona. Siete bravi ad articolare le idee. Gli orologi sono una delle cose che vi piacciono di meno. Vi separate sempre dal vostro gruppo per esplorare un posto nuovo, e fortunatamente avete un ottimo senso dell'orientamento. Avete un talento nascosto che pochi conoscono, ma tranquilli, manterrò il segreto.",
    },
    'nostalgico': {
        title: 'Ammiratore del passato, sentimentale, sognatore',
        contents: "Potreste essere molto attratti dalle tradizioni e dalla cultura del passato, e sentirvi a vostro agio in contesti che richiamano un'epoca passata. Siete probabilmente delle persone molto romantiche e sentimentali, che amano immergersi nei propri sogni e nella propria immaginazione. Potreste avere una grande passione per l'arte e la letteratura, e cercare spesso di trovare ispirazione nelle opere dei grandi artisti del passato. In generale, siete delle persone molto sensibili e intuitive, che cercano di trovare il bello e il positivo in ogni cosa che fanno. La vostra personalità potrebbe essere molto ricca di sfumature, e potreste avere una grande capacità di empatia e di comprensione verso gli altri.",
    },
    'creativo': {
        title: 'La creatività è il tuo motore',
        contents: "Siete aperti alle nuove idee e avete la capacità di pensare in modo non convenzionale. La vostra creatività potrebbe spingervi ad esplorare nuovi modi di fare le cose, a cercare soluzioni originali ai problemi e a trovare bellezza in luoghi inaspettati. Potreste avere una grande passione per l'arte, la musica, la scrittura o altre forme di espressione creativa. In generale, la vostra personalità potrebbe essere molto colorata e ricca di sfumature, proprio come le vostre idee e le vostre creazioni.",
    },
    'ambizioso': {
    title: 'Niente è fuori dalla tua portata',
    contents: "Credete fermamente che non esistano limiti alla vostra capacità di raggiungere i propri obiettivi e siete disposti a fare qualsiasi cosa per raggiungerli. Potreste avere un forte senso di fiducia in voi stessi, e una grande resilienza che vi aiuta ad affrontare le sfide con coraggio e tenacia. La vostra personalità potrebbe essere molto ambiziosa, e probabilmente avete un'immensa voglia di successo e di realizzazione personale. In generale, siete delle persone molto coraggiose e decise, che non si fermano di fronte alle difficoltà, e che credono fermamente nelle proprie capacità di raggiungere qualsiasi obiettivo si prefissino.",
    },
    'malevolo': {
    title: "Non c'è peggior nemico di me stesso",
    contents: "Potreste essere molto esigenti con voi stessi, e avere un'alta dose di auto-coscienza. Potreste sentirvi spesso insoddisfatti dei vostri risultati, anche quando gli altri vi vedono come dei successi. In generale, siete probabilmente una persona molto riflessiva e profonda, che si interroga spesso sul proprio posto nel mondo e sulle proprie scelte di vita. Potreste avere un forte senso di responsabilità, e cercare sempre di fare del vostro meglio, anche se questo significa superare i propri limiti. In ogni caso, potrebbe essere importante ricordare che l'autocritica e l'auto-miglioramento possono essere positivi, ma solo se bilanciati da una dose di auto-comprensione e di auto-compassione."
    },
    'bridgespammer': {
    title: 'Spammo carte come ponti verso la vittoria',
    contents: "Siete pronti a fare tutto il necessario per raggiungere i vostri obiettivi, e non avete problemi a prendere rischi per ottenere ciò che desiderate. Siete molto concentrati sui risultati e sulle vittorie, e siete disposti a utilizzare tutte le risorse a vostra disposizione per ottenere il successo. Allo stesso tempo, siete probabilmente molto abili nel trovare soluzioni creative e non convenzionali per superare gli ostacoli, e siete in grado di pensare in modo rapido e strategico quando le cose si fanno difficili. In generale, siete una persona molto competitiva e determinata, che cerca costantemente di migliorare le proprie prestazioni e di superare i propri limiti.",
    },
    'ingenuo': {
    title: 'Simpatico e innocente, senza malizia',
    contents: "Potresti essere considerato da molti come una persona piacevole e accogliente, poiché tendi a mostrare gentilezza e affetto verso gli altri. La tua innocenza può farti sembrare un po' ingenuo in alcune situazioni, ma la tua sincerità e la tua natura amichevole sono apprezzate da coloro che ti conoscono.Potresti anche essere un po' sensibile e potresti facilmente farti coinvolgere dalle emozioni degli altri. Tuttavia, la tua personalità amichevole e accogliente ti aiuta a creare relazioni positive con le persone intorno a te. Inoltre, la tua natura innocente e senza malizia può farti sembrare un po' ingenuo o inesperto in alcune situazioni, ma questo non significa che tu sia poco intelligente o incapace. Infatti, potresti essere molto creativo e avere un'immaginazione vivace, che ti aiuta a vedere il mondo in modo unico e interessante.",
    }
    };