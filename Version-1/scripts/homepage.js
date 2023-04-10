let productArr = [
    {image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-planters-3-7-inch-9-cm-round-egg-ceramic-pot-white-16968461811852_600x600.jpg?v=1634207925',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Round Egg Ceramic Pot (White) (set of 2)',
    strikedPrice:400,
    Price:250,
    category:'CERAMIC POTS'},
    {image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-combo-packs-pots-9-1-inch-23-cm-ronda-no-2320-round-plastic-planters-with-3-tier-hanging-kit-red-green-yellow-16968542552204_600x600.jpg?v=1634210954',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Round Plastic Planters With 3 tier Hanging Kit (Red,Green,Yellow) ',
    strikedPrice:2000,
    Price:1500,
    category:'HANGING PLANTERS'},
    {image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-planters-6-3-inch-16-cm-square-grow-bag-white-16968513880204_600x600.jpg?v=1634210830',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Square Grow Bag (White) (set of 5)',
    strikedPrice:600,
    Price:250,
    category:'GROW BAG'},
    {image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-planters-3-inch-8-cm-handi-shape-round-ceramic-pot-yellow-16968466792588_600x600.jpg?v=1634208193',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Handi Shape Ceramic Pot (Yellow) (set of 2)',
    strikedPrice:350,
    Price:200,
    category:'CERAMIC POTS'},
    {image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-planters-4-3-inch-11-cm-buddha-marble-finish-ceramic-pot-white-16968478359692_600x600.jpg?v=1634208431',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Buddha Marble Finish Ceramic Pot (White)',
    strikedPrice:600,
    Price:500,
    category:'CERAMIC POTS'},
    {image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-planters-8-5-inch-22-cm-eco-friendly-jute-grow-bag-brown-16968535867532_600x600.jpg?v=1634212759',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Eco Friendly Jute Grow Bag (Brown)',
    strikedPrice:300,
    Price:150,
    category:'GROW BAG'},
    {image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-planters-9-8-inch-25-cm-sml-015-diamond-hanging-fiberglass-planter-golden-color-16968540356748_600x600.png?v=1601350582',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'SML-015 Diamond Hanging Fiberglass Planter (Gold color)',
    strikedPrice:1300,
    Price:899,
    category:'HANGING PLANTERS'},
    {image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-planters-3-inch-8-cm-handi-shape-round-ceramic-pot-red-16968466169996_600x600.jpg?v=1634208184',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Handi Shape Ceramic Pot (Red) (set of 2)',
    strikedPrice:350,
    Price:200,
    category:'CERAMIC POTS'},
    {image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-planters-12-inch-30-cm-round-grow-bag-green-16968405450892_600x600.jpg?v=1634206102',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Round Grow Bag (Green) (set of 4)',
    strikedPrice:700,
    Price:550,
    category:'GROW BAG'},
    {image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-planters-6-5-inch-17-cm-aching-hanging-round-metal-pot-with-chain-pink-16968509915276_600x600.jpg?v=1634209943',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Aching Hanging Round Metal Pot With Chain (Pink) (set of 2)',
    strikedPrice:800,
    Price:499,
    category:'HANGING PLANTERS'},
    {image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-planters-18-inch-46-cm-rectangle-grow-bag-green-16968438939788_600x600.jpg?v=1634207009',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Rectangle Grow Bag (Green) (set of 5)',
    strikedPrice:850,
    Price:599,
    category:'GROW BAG'},
    {image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-combo-packs-pots-7-1-inch-18-cm-corsica-no-18-hanging-round-plastic-pots-mix-color-pack-of-six-16968525480076_600x600.jpg?v=1634210178',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Corsica no.18 hanging Round Plastic Pots (Multi-Color) (pack of 6)',
    strikedPrice:650,
    Price:449,
    category:'HANGING PLANTERS'},
    {image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-plants-pomegranate-annar-anar-grafted-plant-16969218064524_600x600.jpg?v=1646287095',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Pomegranate Tree - Sapling',
    strikedPrice:450,
    Price:250,
    category:'FRUIT PLANTS'},
    {image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-seeds-tomato-marglobe-organic-vegetable-seeds-16969383641228_600x600.jpg?v=1634205137',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Tomato - Organic Seeds',
    strikedPrice:200,
    Price:85,
    category:'SEEDS'},
    {image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-plants-scented-rose-any-variety-any-color-plant-16969300738188_600x600.jpg?v=1634228099',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Scented Rose Plant (Any color, Any variety)',
    strikedPrice:350,
    Price:215,
    category:'FLOWERING PLANTS'},
    {image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-plants-fig-tree-anjeer-fruit-common-fig-fruit-plant-16968860139660_305x305.jpg?v=1634219606',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Fig Tree - Sapling',
    strikedPrice:450,
    Price:350,
    category:'FRUIT PLANTS'},
    {image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-seeds-krishna-tulsi-tulsi-black-0-5-kg-seeds-112929_600x600.png?v=1679750449',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Tulsi Seeds (Black)',
    strikedPrice:150,
    Price:75,
    category:'SEEDS'},
    {image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-torenia-purple-plant_600x600.jpg?v=1634230460',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Torenia Plant (Purple)',
    strikedPrice:300,
    Price:199,
    category:'FLOWERING PLANTS'},
    {image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-plants-guava-tree-amrud-psidium-guajava-sardar-l49-grown-through-seeds-plant-16968910831756_396x396.jpg?v=1634220909',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Guava Tree - Sapling',
    strikedPrice:450,
    Price:300,
    category:'FRUIT PLANTS'},
    {image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-seeds-peas-azad-p-3-desi-vegetable-seeds-16969165766796_600x600.jpg?v=1634204516',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Peas Seeds',
    strikedPrice:50,
    Price:25,
    category:'SEEDS'},
    {image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-category-aster-plants_396x396.jpg?v=1634213990',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Aster Plant (Violet)',
    strikedPrice:199,
    Price:100,
    category:'FLOWERING PLANTS'},
    {image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-mango-tree-kesar-grafted-plant_396x396.jpg?v=1634223741',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Mango Tree (Alphonso) - Sapling',
    strikedPrice:750,
    Price:599,
    category:'FRUIT PLANTS'},
    {image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-plants-hibiscus-gudhal-flower-peach-double-plant-16968931115148_600x600.jpg?v=1634221736',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Hibiscus Plant (Peach)',
    strikedPrice:300,
    Price:150,
    category:'FLOWERING PLANTS'},
    {image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-seeds-fenugreek-indian-small-leaf-microgreen-seeds-16968854929548_540x540_205ddc53-13e4-4add-8fef-778ff3f78994_600x600.jpg?v=1634203856',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Fenugreek - Micro Seeds',
    strikedPrice:140,
    Price:80,
    category:'SEEDS'},
    {image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-fertilizer-bone-meal-powder-250-gm-for-garden_396x396.jpg?v=1634214743',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Bone Meal Powder - 500g',
    strikedPrice:250,
    Price:200,
    category:'FERTILIZER'},
    {image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-neem-raksha-pure-neem-oil-for-insect-pest-control-100-ml-image-2_396x396.jpg?v=1634224748',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Pure Neem Oil (For Insect and Pest control) - 100ml',
    strikedPrice:250,
    Price:150,
    category:'FERTILIZER'},
    {image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-soil-and-fertilizers-nutrient-rich-general-purpose-potting-soil-mix-10-kg-16969045966988_396x396.jpg?v=1634224988',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'General Purpose Potting Soil Mix - 5kg',
    strikedPrice:450,
    Price:299,
    category:'SOIL'},
    {image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-cocopeat-block-900-g_396x396.jpg?v=1634216408',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Coco Peat Block -900g',
    strikedPrice:180,
    Price:140,
    category:'SOIL'},
    {image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-combo-packs-tools-basic-garden-tool-kit-gardening-tools-16968613363852_305x305.jpg?v=1634214058',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Basic Garden Tool Kit',
    strikedPrice:695,
    Price:556,
    category:'GARDENING TOOLS'},
    {image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-gardening-tools-hand-printed-round-metal-watering-can-red-gardening-tool-16968521089164_600x600.jpg?v=1634221032',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Hand Printed round Metal Watering Can (Red)',
    strikedPrice:500,
    Price:356,
    category:'GARDENING TOOLS'},
    {image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-gardening-tools-bonsai-set-no-1025-gardening-tools-16968648360076_396x396.jpg?v=1634214773',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Bonsai Set',
    strikedPrice:400,
    Price:259,
    category:'GARDENING TOOLS'},
    {image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-gardening-tools-pressure-sprayer-1-5-ltr-gardening-tool-16969224683660_600x600.jpg?v=1634226866',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Pressure sprayer (1.5 ltr)',
    strikedPrice:300,
    Price:199,
    category:'GARDENING TOOLS'},
    {image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-healthly-vegetables-grown-at-home-kitchen-garden-pack_600x600.jpg?v=1634221534',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Kitchen Garden Pack (Seeds with Pots)',
    strikedPrice:350,
    Price:199,
    category:'GARDEN KITS'},
    {image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-gardening-accessories-green-artificial-grass-6-5-x-4-ft-1-9-x-1-2-m-16968904638604_396x396.jpg?v=1634220793',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Artificial Green Grass(6.5X4ft)',
    strikedPrice:1500,
    Price:1000,
    category:'GARDENING ACCESSORIES'},
    {image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-pebbles-garden-pebbles-aqua-green-color-small-1-kg-16968870723724_305x305.jpg?v=1634219881',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Garden Pebbles (Aqua Green color,Small) - 1 kg',
    strikedPrice:400,
    Price:299,
    category:'GARDENING ACCESSORIES'},
    {image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-combo-packs-pebbles-diy-stone-decor-ideas-for-water-features-16981363982476_600x600.jpg?v=1634218129',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Stone Decor For Water Features',
    strikedPrice:1150,
    Price:999,
    category:'GARDENING ACCESSORIES'},
    {image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-garden-essential-plant-food-and-protection-kit-309425_396x396.jpg?v=1679750046',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'garden Essential Plant Food and Protection Kit',
    strikedPrice:795,
    Price:599,
    category:'GARDEN KITS'},
    {image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-plants-ficus-bonsai-in-ceramic-pot-16968856273036_305x305.jpg?v=1634219439',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Ficus Bonsai in Ceramic Pot',
    strikedPrice:795,
    Price:620,
    category:'BONSAI PLANTS'},
    {image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-banyan-tree-plant_396x396.jpg?v=1634214221',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Banyan Tree Bonsai Plant',
    strikedPrice:2500,
    Price:1899,
    category:'BONSAI PLANTS'},
    {image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-metal-planter-stand-zig-zag-2-4-x-5-ft-0-7-x-1-5-m_91f84e2e-128d-4874-aa57-5493304cb21e_600x600.jpg?v=1634223907',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Metal Planter Stand (2.4X5ft)',
    strikedPrice:2800,
    Price:2299,
    category:'PLANT STAND'},
    {image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-wooden-planter-stand-big-rack-17-places-4-x-3-8-ft-1-2-x-1-1-m_27c30909-a3ad-464f-9e6e-22582a4f3c72_600x600.jpg?v=1634231453',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Wooden Planter Stand (17 Places,4X3.8 ft) ',
    strikedPrice:4500,
    Price:3499,
    category:'PLANT STAND'},
    {image:'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-metal-planter-stand-arc-2-x-5-ft-0-6-x-1-5-m_600x600.jpg?v=1634223922',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Metal Planter Stand (Arc,2X5 ft)',
    strikedPrice:5000,
    Price:3999,
    category:'PLANT STAND'},
]

localStorage.setItem('productData',JSON.stringify(productArr))
displayProducts(productArr)
function displayProducts(productArr){
    document.querySelector('#allProducts').innerHTML = ''
    productArr.forEach(function(el){
        let oneProduct = document.createElement('div')
        oneProduct.setAttribute('class','product')
        let data = document.createElement('div')
        data.setAttribute('class','data')
        data.addEventListener('click',function(){
            showProduct(el)
        })
        let image = document.createElement('img')
        image.setAttribute('src',el.image)
        let stars = document.createElement('img')
        stars.setAttribute('src',el.rating)
        stars.setAttribute('id','rating')
        let name = document.createElement('p')
        name.innerText = el.name
        let strikedPrice = document.createElement('p')
        strikedPrice.style.color = '#50504b'
        strikedPrice.innerText ='RS: '+ el.strikedPrice + '.00'
        let price = document.createElement('p')
        price.innerText ='RS: ' + el.Price + '.00'
        let cost = document.createElement('div')
        let cartbtn = document.createElement('button')
        cartbtn.setAttribute('class','cart')
        cartbtn.innerText = 'ADD TO CART'
        cartbtn.addEventListener('click',function(){
            addToCart(el)
        })
        cost.append(strikedPrice,price)
        data.append(image,stars,name,cost)
        oneProduct.append(data,cartbtn)
        document.querySelector('#allProducts').append(oneProduct)
    })
}

document.querySelector('#filter').addEventListener('change',handleFilter)

function handleFilter(){
    let selected = document.querySelector('#filter').value;
    let filterArr = productArr.filter(function(el){
        return el.category ==selected
    })
    if(selected==''){
        displayProducts(productArr)
    }else{
        displayProducts(filterArr)
    }
}
document.querySelector('#sort').addEventListener('change',handleSort)
function handleSort(){
    let selected = document.querySelector('#sort').value
    console.log(selected);
    if(selected == 'ASCENDING'){
        productArr.sort(function(a,b){
            let x = a.name.toUpperCase()
            let y = b.name.toUpperCase()
            if(x > y) return 1;
            if(x < y) return -1
            return 0;
        })
        console.log(productArr);
        displayProducts(productArr)
    }
    if(selected == ''){
        displayProducts(productArr)
    }
    if(selected == 'DESCENDING'){
        productArr.sort(function(a,b){
            let x = a.name.toUpperCase()
            let y = b.name.toUpperCase()
            if(x > y) return -1;
            if(x < y) return 1
            return 0;
        })
        displayProducts(productArr)
    }
    if(selected == 'LOW - HIGH'){
        productArr.sort(function(a,b){
            if(a.Price>b.Price) return 1;
            if(a.Price<b.Price) return -1
            return 0
        })
        console.log(productArr);
        displayProducts(productArr)
    }
    if(selected == 'HIGH - LOW'){
        productArr.sort(function(a,b){
         
            if(a.Price>b.Price) return -1;
            if(a.Price<b.Price) return 1
            return 0
        })
        displayProducts(productArr)
    }
    
}
let cartArr =JSON.parse(localStorage.getItem('cartEle'))|| []

function addToCart(el){
    cartArr.push(el)
    localStorage.setItem('cartEle',JSON.stringify(cartArr))
    location.reload()
}
let proDescription ;
function showProduct(el){
proDescription = el
localStorage.setItem('descriptionOfOneProduct',JSON.stringify(proDescription))
window.location.href = 'description.html'
}