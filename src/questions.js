export const Questiondata = {
    "1": {
        "1": {
            question: "What is the nearest place to your house?",
            description: "List is in geographical order from north to south. Choose the place closest to your house. This will determine the Seismic Hazard Factor for your location.",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Location",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "17",
            col_input: "4",
            options: ["Kaitaia", "Paihia/Russell", "Kaikohe", "Whangarei", "Dargaville", "Warkworth", "Auckland", "Manukau City", "Waiuku", "Pukekohe", "Thames", "Paeroa", "Waihi", "Huntly", "Ngaruawahia", "Morrinsville", "Te Aroha", "Tauranga", "Mount Maunganui", "Hamilton", "Cambridge", "Te Awamutu", "Matamata", "Te Puke", "Putaruru", "Tokoroa", "Otorohanga", "Te Kuiti", "Mangakino", "Rotorua", "Kawerau", "Whakatane", "Opotiki", "Ruatoria", "Murupara", "Taupo", "Taumarunui", "Turangi", "Gisborne", "Wairoa", "New Plymouth", "Inglewood", "Stratford", "Opunake", "Hawera", "Patea", "Raetihi", "Ohakune", "Waiouru", "Napier", "Hastings", "Whanganui", "Waipawa", "Waipukurau", "Taihape", "Marton", "Bulls", "Feilding", "Palmerston North", "Dannevirke", "Woodville", "Pahiatua", "Foxton/Foxton Beach", "Levin", "Otaki", "Waikanae", "Paraparaumu", "Masterton", "Porirua", "Wellington CBD (north of Basin Reserve)", "Wellington", "Hutt Valley (South of Taita Gorge)", "Upper Hutt", "Eastbourne (Point Howard)", "Wainuiomata", "Takaka", "Motueka", "Nelson", "Picton", "Blenheim", "St Arnaud", "Westport", "Reefton", "Murchison", "Springs Junction", "Hanmer Springs", "Seddon", "Ward", "Cheviot", "Greymouth", "Kaikoura", "Harihari", "Hokitika", "Fox Glacier", "Franz Josef", "Otira", "Arthur's Pass", "Rangiora", "Darfield", "Akaroa", "Christchurch", "Geraldine", "Ashburton", "Fairlie", "Temuka", "Timaru", "Mt Cook", "Twizel", "Waimate", "Cromwell", "Wanaka", "Arrowtown", "Alexandra", "Queenstown", "Milford Sound", "Palmerston", "Oamaru", "Dunedin", "Mosgiel", "Riverton", "Te Anau", "Gore", "Winton", "Balclutha", "Mataura", "Bluff", "Invercargill", "Oban"]
        },
        "2": {
            question: "How steep is your site",
            description: "Think about walking up the steepest bit and how you would describe it.",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Steepness",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "22",
            col_input: "4",
            options: ["Flat", "Gentle", "Steep", "Very steep"]
        },
        "3": {
            question: "What is the foundation soil?",
            description: "Foundation soil",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Foundation soil",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "23",
            col_input: "4",
            options: ["Sand", "Gravel", "Clay", "Rock"]
        },
        "4": {
            question: "How liquefaction-prone is your site?",
            description: "Choose 'Moderate' if not sure or no data available from Council.",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Liquefaction",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "25",
            col_input: "4",
            options: ["None / Small", "Moderate", "High"]
        },
        "5": {
            question: "When was the house built or most recently re-modelled?",
            description: "Choose the date that applies to most of the house.  Choose date of latest significant structural upgrade",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "House built",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "29",
            col_input: "5",
            options: ["Before 1935", "1935 - 65", "1965 - 76", "1976 - 92", "1992 - 2004", "2004-"]
        },
        "6": {
            question: "Who was responsible for the structural design?",
            description: "",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Structural designer",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "30",
            col_input: "5",
            options: ["Engineer or Architect", "Group Housing", "LBP Builder", "Non-LBP builder", "Not known"]
        },
        "7": {
            question: "How would you describe the overall construction?",
            description: "Overall Construction",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Overall constuction",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "31",
            col_input: "5",
            options: ["Solid", "Average", "Below average"]
        },
        "8": {
            question: "What type of foundations does your house have?",
            description: "(Structure at and below the lowest level – ground level if no basement or basement level). You can choose more than one.",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Foundations",
            current_route: "check_question",
            next_route: "option_question",
            row_input: "58",
            col_input: "4",
            options: ["Brick (URM)", "Slab", "Timber piles", "Concrete piles", "Engineered poles", "Concrete / Concrete block walls"]
        },
        "9": {
            question: "What is the Roof Structure?",
            description: "",
            img: {
                "title": "",
                "img_name": "Quakestar_280px.png"
    
            },
            route: "optionform",
            subject: "Roof structure",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "55",
            col_input: "7",
            options: ["Timber trusses / joists", "Steel truss/beams", "Concrete beams / slab", "Other"]
        },
        "10": {
            question: "Do you have any Chimneys, if so what is the material?",
            description: "Failure of these represents a safety hazard and can add significantly to damage. The Strength and Damage scores may be affected. Click on the relevant ones. If you have more than one material, choose the heaviest one.",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Chimney material",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "88",
            col_input: "5",
            options: ["None", "Brick", "Block", "Lightweight"]
        },
        "11": {
            question: "Do you have any Parapets, if so what is the material?",
            description: "Failure of these represents a safety hazard and can add significantly to damage. The Strength and Damage scores may be affected. Click on the relevant ones. If you have more than one material, choose the heaviest one.",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Parapets material",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "89",
            col_input: "5",
            options: ["None ", "Brick ", "Block ", "Lightweight "]
        },
        "12": {
            question: "Do you have any Veneers, if so what is the material?",
            description: "Failure of these represents a safety hazard and can add significantly to damage. The Strength and Damage scores may be affected. Click on the relevant ones. If you have more than one material, choose the heaviest one.",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Veneer material",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "90",
            col_input: "5",
            options: ["None", "Brick", "Block", "Lightweight"]
        },
        "13": {
            question: "What is the structure at Ground Floor Level?",
            description: "",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Ground floor support",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "55",
            col_input: "7",
            options: ["Timber trusses / joists", "Steel truss / beams", "Concrete beams / slab", "Other"]
        },
        "14": {
            question: "What are the X-direction bracing walls made of at the Ground floor?",
            description: "",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "X-direction bracing walls",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "55",
            col_input: "5",
            options: ["Structural steel", "Ply", "Gib / Plasterboard", "Concrete Block", "Concrete", "Brick (URM)"]
        },
        "15": {
            question: "What are the Y-direction bracing walls made of at the Ground floor?",
            description: "",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Y-direction bracing walls",
            current_route: "option_question",
            next_route: "clad_question",
            row_input: "55",
            col_input: "6",
            options: ["Structural steel ", "Ply ", "Gib / Plasterboard ", "Concrete Block ", "Concrete ", "Brick (URM) "]
        },
        "16": {
            question: "What is the cladding on the roof?",
            description: "You can select more than one.",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            options: ["Steel sheet (Examples: Corrugated iron, long-run metal or similar weight)", "Heavy tiles (Examples: Clay, concrete or similar weight)", "Light tiles (Examples: Metal tiles, wooden shingles)", "Membrane roof (Example: Torch-on membrane on plywood sheets)", "Concrete slab with waterproof coating or membrane."],
            route: "cladform",
            subject: "Roof cladding",
            current_route: "check_question",
            next_route: "clad_question",
            inputs: {
                "Steel sheet (Examples: Corrugated iron, long-run metal or similar weight)": {
                    row_input: "37",
                    col_input: "4"
                },
                "Heavy tiles (Examples: Clay, concrete or similar weight)": {
                    row_input: "37",
                    col_input: "5"
                },
                "Light tiles (Examples: Metal tiles, wooden shingles)": {
                    row_input: "37",
                    col_input: "6"
                },
                "Membrane roof (Example: Torch-on membrane on plywood sheets)": {
                    row_input: "37",
                    col_input: "7"
                },
                "Concrete slab with waterproof coating or membrane.": {
                    row_input: "37",
                    col_input: "8"
                }
            }
        },
        "17": {
            question: "What cladding materials are used on the Ground Floor?",
            description: "You can select more than one.",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            options: ["Concrete ", "Timber (Example: weatherboards) ", "Concrete block ", "Brick or brick veneer ", "Stucco / Monolithic or similar "],
            route: "cladform",
            subject: "Ground floor cladding",
            current_route: "check_question",
            next_route: "text_question",
            inputs: {
                Concrete: {
                    row_input: "42",
                    col_input: "4"
                },
                "Timber (Example: weatherboards)": {
                    row_input: "42",
                    col_input: "5"
                },
                "Concrete block": {
                    row_input: "42",
                    col_input: "6"
                },
                "Brick or brick veneer": {
                    row_input: "42",
                    col_input: "7"
                },
                "Stucco / Monolithic or similar": {
                    row_input: "42",
                    col_input: "8"
                }
            }
        },
        "18": {
            question: "What is the area of the Ground Floor in square metres?",
            description: "Enter two dimensions to define the approximate area of each floor.  For example entering 10 in X and 12 in Y will mean 120 sq m of floor area.  It does not matter what the actual shape of the floor is – as long as the total areas match.",
            img: {
                title: "",
                img_name: "Floor_area.png"
            },
            route: "textform",
            subject: "Ground floor area",
            current_route: "text_question",
            next_route: "text_question",
            x: {
                row_input: "67",
                col_input: "5"
            },
            y: {
                row_input: "67",
                col_input: "6"
            }
        },
        "19": {
            question: "What is the area of the Roof in square metres?",
            description: "Enter two dimensions to define the approximate area of each floor.  For example entering 10 in X and 12 in Y will mean 120 sq m of floor area.  It does not matter what the actual shape of the floor is – as long as the total areas match.",
            img: {
                title: "",
                img_name: "Floor_area.png"
            },
            route: "textform",
            subject: "Roof area",
            current_route: "text_question",
            next_route: "text_question",
            x: {
                row_input: "64",
                col_input: "5"
            },
            y: {
                row_input: "64",
                col_input: "6"
            }
        },
        "20": {
            question: "What is the total length of all bracing walls at Ground level in metres?",
            description: "Choose a direction parallel to any selected wall. Call that Direction X. Direction Y is at right angles. For each floor, add up the total length of full-height walls in each direction. They must be longer than 1 metre with no windows, doors or large holes. These walls will help brace your house to resist earthquake loads. Enter the total length in each direction (X and Y) for each floor.",
            img: {
                title: "",
                img_name: "Walls.png"
            },
            route: "textform",
            subject: "Length of Ground floor bracing walls",
            current_route: "text_question",
            next_route: "results",
            x: {
                row_input: "74",
                col_input: "5"
            },
            y: {
                row_input: "74",
                col_input: "6"
            }
        },
        "21": {
            question: "Are your bracing walls off-centre at any level? ",
            description: "Think about each level and each direction and select the worst off-centre situation. Regular: bracing walls in both directions are well distributed - not mostly on one side.   Moderate: bracing walls significantly off centre in at least one direction.   Severe: bracing walls mostly on one side in at least one direction.",
            img: {
                title: "",
                img_name: ""
            },
            route: "option_question",
            subject: "Irregularities",
            current_route: "option_question",
            next_route: "results",
            options: ["Regular", "Moderate", "Severe"]

        },
        "22": {
            question: "",
            description: "",
            img: {
                title: "",
                img_name: ""
            },
            route: "results",
            current_route: "results"
         

        }
    },
    "2": {
        "1": {
            question: "What is the nearest place to your house?",
            description: "List is in geographical order from north to south. Choose the place closest to your house. This will determine the Seismic Hazard Factor for your location.",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Location",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "17",
            col_input: "4",
            options: ["Kaitaia", "Paihia/Russell", "Kaikohe", "Whangarei", "Dargaville", "Warkworth", "Auckland", "Manukau City", "Waiuku", "Pukekohe", "Thames", "Paeroa", "Waihi", "Huntly", "Ngaruawahia", "Morrinsville", "Te Aroha", "Tauranga", "Mount Maunganui", "Hamilton", "Cambridge", "Te Awamutu", "Matamata", "Te Puke", "Putaruru", "Tokoroa", "Otorohanga", "Te Kuiti", "Mangakino", "Rotorua", "Kawerau", "Whakatane", "Opotiki", "Ruatoria", "Murupara", "Taupo", "Taumarunui", "Turangi", "Gisborne", "Wairoa", "New Plymouth", "Inglewood", "Stratford", "Opunake", "Hawera", "Patea", "Raetihi", "Ohakune", "Waiouru", "Napier", "Hastings", "Whanganui", "Waipawa", "Waipukurau", "Taihape", "Marton", "Bulls", "Feilding", "Palmerston North", "Dannevirke", "Woodville", "Pahiatua", "Foxton/Foxton Beach", "Levin", "Otaki", "Waikanae", "Paraparaumu", "Masterton", "Porirua", "Wellington CBD (north of Basin Reserve)", "Wellington", "Hutt Valley (South of Taita Gorge)", "Upper Hutt", "Eastbourne (Point Howard)", "Wainuiomata", "Takaka", "Motueka", "Nelson", "Picton", "Blenheim", "St Arnaud", "Westport", "Reefton", "Murchison", "Springs Junction", "Hanmer Springs", "Seddon", "Ward", "Cheviot", "Greymouth", "Kaikoura", "Harihari", "Hokitika", "Fox Glacier", "Franz Josef", "Otira", "Arthur's Pass", "Rangiora", "Darfield", "Akaroa", "Christchurch", "Geraldine", "Ashburton", "Fairlie", "Temuka", "Timaru", "Mt Cook", "Twizel", "Waimate", "Cromwell", "Wanaka", "Arrowtown", "Alexandra", "Queenstown", "Milford Sound", "Palmerston", "Oamaru", "Dunedin", "Mosgiel", "Riverton", "Te Anau", "Gore", "Winton", "Balclutha", "Mataura", "Bluff", "Invercargill", "Oban"]
        },
        "2": {
            question: "How steep is your site",
            description: "Think about walking up the steepest bit and how you would describe it.",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Steepness",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "22",
            col_input: "4",
            options: ["Flat", "Gentle", "Steep", "Very steep"]
        },
        "3": {
            question: "What is the foundation soil?",
            description: "Foundation soil",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Foundation soil",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "23",
            col_input: "4",
            options: ["Sand", "Gravel", "Clay", "Rock"]
        },
        "4": {
            question: "How liquefaction-prone is your site?",
            description: "Choose 'Moderate' if not sure or no data available from Council.",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Liquefaction",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "25",
            col_input: "4",
            options: ["None / Small", "Moderate", "High"]
        },
        "5": {
            question: "When was the house built or most recently re-modelled?",
            description: "Choose the date that applies to most of the house.  Choose date of latest significant structural upgrade",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "House built",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "29",
            col_input: "5",
            options: ["Before 1935", "1935 - 65", "1965 - 76", "1976 - 92", "1992 - 2004", "2004-"]
        },
        "6": {
            question: "Who was responsible for the structural design?",
            description: "",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Structural designer",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "30",
            col_input: "5",
            options: ["Engineer or Architect", "Group Housing", "LBP Builder", "Non-LBP builder", "Not known"]
        },
        "7": {
            question: "How would you describe the overall construction?",
            description: "Overall Construction",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Overall contruction",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "31",
            col_input: "5",
            options: ["Solid", "Average", "Below average"]
        },
        "8": {
            question: "What type of foundations does your house have?",
            description: "(Structure at and below the lowest level – ground level if no basement or basement level). You can choose more than one.",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Foundations",
            current_route: "check_question",
            next_route: "option_question",
            row_input: "58",
            col_input: "4",
            options: ["Brick (URM)", "Slab", "Timber piles", "Concrete piles", "Engineered poles", "Concrete / Concrete block walls"]
        },
        "9": {
            question: "What is the Roof Structure?",
            description: "",
            img: {
                "title": "",
                "img_name": "Quakestar_280px.png"
    
            },
            route: "optionform",
            subject: "Roof structure",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "55",
            col_input: "7",
            options: ["Timber trusses / joists", "Steel truss/beams", "Concrete beams / slab", "Other"]
        },
        "10": {
            question: "Do you have any Chimneys, if so what is the material?",
            description: "Failure of these represents a safety hazard and can add significantly to damage. The Strength and Damage scores may be affected. Click on the relevant ones. If you have more than one material, choose the heaviest one.",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Chimney material",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "88",
            col_input: "5",
            options: ["None", "Brick", "Block", "Lightweight"]
        },
        "11": {
            question: "Do you have any Parapets, if so what is the material?",
            description: "Failure of these represents a safety hazard and can add significantly to damage. The Strength and Damage scores may be affected. Click on the relevant ones. If you have more than one material, choose the heaviest one.",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Parapets material",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "89",
            col_input: "5",
            options: ["None ", "Brick ", "Block ", "Lightweight "]
        },
        "12": {
            question: "Do you have any Veneers, if so what is the material?",
            description: "Failure of these represents a safety hazard and can add significantly to damage. The Strength and Damage scores may be affected. Click on the relevant ones. If you have more than one material, choose the heaviest one.",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Venner material",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "90",
            col_input: "5",
            options: ["None", "Brick", "Block", "Lightweight"]
        },
        "13": {
            question: "What is the structure at Ground Floor Level?",
            description: "",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Ground floor support",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "55",
            col_input: "7",
            options: ["Timber trusses / joists", "Steel truss/beams", "Concrete beams / slab", "Other"]
        },
        "14": {
            question: "What structure (eg columns/walls) supports the First Floor Level?",
            description: "",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "First floor structure",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "54",
            col_input: "4",
            options: ["Timber framing", "Lightweight steel", "Structural steel", "Concrete Block", "Concrete", "Brick (URM)"]
        },
        "15": {
            question: "What is the structure at First Floor Level?",
            description: "",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "First floor support",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "54",
            col_input: "7",
            options: ["Timber trusses / joists", "Steel truss/beams", "Concrete beams / slab", "Concrete Block", "Other"]
        },
        "16": {
            question: "What are the X-direction bracing walls made of at the Ground floor?",
            description: "",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Ground floor X-direction walls",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "55",
            col_input: "5",
            options: ["Structural steel", "Ply", "Gib / Plasterboard", "Concrete Block", "Concrete", "Brick (URM)"]
        },
        "17": {
            question: "What are the Y-direction bracing walls made of at the Ground floor?",
            description: "",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Ground floor Y-direction walls",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "55",
            col_input: "6",
            options: ["Structural steel ", "Ply ", "Gib / Plasterboard ", "Concrete Block ", "Concrete ", "Brick (URM) "]
        },
        "18": {
            question: "What are the X-direction bracing walls made of at the First floor?",
            description: "",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "First floor X-direction walls",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "54",
            col_input: "5",
            options: ["Structural steel", "Ply", "Gib / Plasterboard ", "Concrete Block", "Concrete", "Brick (URM)"]
        },
        "19": {
            question: "What are the Y-direction bracing walls made of at the First floor?",
            description: "",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "First floor Y-direction walls",
            current_route: "option_question",
            next_route: "clad_question",
            row_input: "54",
            col_input: "6",
            options: ["Structural steel ", "Ply ", "Gib / Plasterboard ", "Concrete Block ", "Concrete ", "Brick (URM) "]
        },
        "20": {
            question: "What is the cladding on the roof?",
            description: "You can select more than one.",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            options: ["Steel sheet (Examples: Corrugated iron, long-run metal or similar weight)", "Heavy tiles (Examples: Clay, concrete or similar weight)", "Light tiles (Examples: Metal tiles, wooden shingles)", "Membrane roof (Example: Torch-on membrane on plywood sheets)", "Concrete slab with waterproof coating or membrane."],
            route: "cladform",
            subject: "Roof cladding",
            current_route: "check_question",
            next_route: "clad_question",
            inputs: {
                "Steel sheet (Examples: Corrugated iron, long-run metal or similar weight)": {
                    row_input: "37",
                    col_input: "4"
                },
                "Heavy tiles (Examples: Clay, concrete or similar weight)": {
                    row_input: "37",
                    col_input: "5"
                },
                "Light tiles (Examples: Metal tiles, wooden shingles)": {
                    row_input: "37",
                    col_input: "6"
                },
                "Membrane roof (Example: Torch-on membrane on plywood sheets)": {
                    row_input: "37",
                    col_input: "7"
                },
                "Concrete slab with waterproof coating or membrane.": {
                    row_input: "37",
                    col_input: "8"
                }
            }
        },
        "21": {
            question: "What cladding materials are used on the Ground Floor?",
            description: "You can select more than one.",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            options: ["Concrete ", "Timber (Example: weatherboards) ", "Concrete block ", "Brick or brick veneer ", "Stucco / Monolithic or similar "],
            route: "cladform",
            subject: "Ground floor cladding",
            current_route: "check_question",
            next_route: "clad_question",
            inputs: {
                Concrete: {
                    row_input: "42",
                    col_input: "4"
                },
                "Timber (Example: weatherboards)": {
                    row_input: "42",
                    col_input: "5"
                },
                "Concrete block": {
                    row_input: "42",
                    col_input: "6"
                },
                "Brick or brick veneer": {
                    row_input: "42",
                    col_input: "7"
                },
                "Stucco / Monolithic or similar": {
                    row_input: "42",
                    col_input: "8"
                }
            }
        },
        "22": {
            question: "What cladding materials are used on the First Floor?",
            description: "You can select more than one.",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            options: ["Concrete", "Timber (Example: weatherboards)", "Concrete block", "Brick or brick veneer", "Stucco / Monolithic or similar"],
            route: "cladform",
            subject: "First floor cladding",
            current_route: "check_question",
            next_route: "text_question",
            inputs: {
                Concrete: {
                    row_input: "42",
                    col_input: "4"
                },
                "Timber (Example: weatherboards)": {
                    row_input: "42",
                    col_input: "5"
                },
                "Concrete block": {
                    row_input: "42",
                    col_input: "6"
                },
                "Brick or brick veneer": {
                    row_input: "42",
                    col_input: "7"
                },
                "Stucco / Monolithic or similar": {
                    row_input: "42",
                    col_input: "8"
                }
            }
        },
        "23": {
            question: "What is the area of the Ground Floor in square metres?",
            description: "Enter two dimensions to define the approximate area of each floor.  For example entering 10 in X and 12 in Y will mean 120 sq m of floor area.  It does not matter what the actual shape of the floor is – as long as the total areas match.",
            img: {
                title: "",
                img_name: "Floor_area.png"
            },
            route: "textform",
            subject: "Ground floor area",
            current_route: "text_question",
            next_route: "text_question",
            x: {
                row_input: "67",
                col_input: "5"
            },
            y: {
                row_input: "67",
                col_input: "6"
            }
        },
        "24": {
            question: "What is the area of the First Floor in square metres?",
            description: "Enter two dimensions to define the approximate area of each floor.  For example entering 10 in X and 12 in Y will mean 120 sq m of floor area.  It does not matter what the actual shape of the floor is – as long as the total areas match.",
            img: {
                title: "",
                img_name: "Floor_area.png"
            },
            route: "textform",
            subject: "First floor area",
            current_route: "text_question",
            next_route: "text_question",
            x: {
                row_input: "66",
                col_input: "6"
            },
            y: {
                row_input: "66",
                col_input: "6"
            }
        },
        "25": {
            question: "What is the area of the Roof in square metres?",
            description: "Enter two dimensions to define the approximate area of each floor.  For example entering 10 in X and 12 in Y will mean 120 sq m of floor area.  It does not matter what the actual shape of the floor is – as long as the total areas match.",
            img: {
                title: "",
                img_name: "Floor_area.png"
            },
            route: "textform",
            subject: "Roof area",
            current_route: "text_question",
            next_route: "text_question",
            x: {
                row_input: "64",
                col_input: "5"
            },
            y: {
                row_input: "64",
                col_input: "6"
            }
        },
        "26": {
            question: "What is the total length of all bracing walls at Ground level in metres?",
            description: "Choose a direction parallel to any selected wall. Call that Direction X. Direction Y is at right angles. For each floor, add up the total length of full-height walls in each direction. They must be longer than 1 metre with no windows, doors or large holes. These walls will help brace your house to resist earthquake loads. Enter the total length in each direction (X and Y) for each floor.",
            img: {
                title: "",
                img_name: "Floor_area.png"
            },
            route: "textform",
            subject: "Length of Ground floor bracing walls",
            current_route: "text_question",
            next_route: "text_question",
            x: {
                row_input: "74",
                col_input: "5"
            },
            y: {
                row_input: "74",
                col_input: "6"
            }
        },
        "27": {
            question: "What is the total length of all bracing walls at the First level in metres?",
            description: "Choose a direction parallel to any selected wall. Call that Direction X. Direction Y is at right angles. For each floor, add up the total length of full-height walls in each direction. They must be longer than 1 metre with no windows, doors or large holes. These walls will help brace your house to resist earthquake loads. Enter the total length in each direction (X and Y) for each floor.",
            img: {
                title: "",
                img_name: "Floor_area.png"
            },
            route: "textform",
            subject: "Length of First floor bracing walls",
            current_route: "text_question",
            next_route: "results",
            x: {
                row_input: "73",
                col_input: "5"
            },
            y: {
                row_input: "73",
                col_input: "6"
            }
        },
        "28": {
            question: "Are your bracing walls off-centre at any level? ",
            description: "Think about each level and each direction and select the worst off-centre situation. Regular: bracing walls in both directions are well distributed - not mostly on one side.   Moderate: bracing walls significantly off centre in at least one direction.   Severe: bracing walls mostly on one side in at least one direction.",
            img: {
                title: "",
                img_name: ""
            },
            route: "option_question",
            subject: "Irregularities",
            current_route: "option_question",
            next_route: "results",
            options: ["Regular", "Moderate", "Severe"]

        },
        "29": {
            question: "",
            description: "",
            img: {
                title: "",
                img_name: ""
            },
            route: "results",
            current_route: "results"
         

        }
    },
    "3": {
        "1": {
            question: "What is the nearest place to your house?",
            description: "List is in geographical order from north to south. Choose the place closest to your house. This will determine the Seismic Hazard Factor for your location.",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Location",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "17",
            col_input: "4",
            options: ["Kaitaia", "Paihia/Russell", "Kaikohe", "Whangarei", "Dargaville", "Warkworth", "Auckland", "Manukau City", "Waiuku", "Pukekohe", "Thames", "Paeroa", "Waihi", "Huntly", "Ngaruawahia", "Morrinsville", "Te Aroha", "Tauranga", "Mount Maunganui", "Hamilton", "Cambridge", "Te Awamutu", "Matamata", "Te Puke", "Putaruru", "Tokoroa", "Otorohanga", "Te Kuiti", "Mangakino", "Rotorua", "Kawerau", "Whakatane", "Opotiki", "Ruatoria", "Murupara", "Taupo", "Taumarunui", "Turangi", "Gisborne", "Wairoa", "New Plymouth", "Inglewood", "Stratford", "Opunake", "Hawera", "Patea", "Raetihi", "Ohakune", "Waiouru", "Napier", "Hastings", "Whanganui", "Waipawa", "Waipukurau", "Taihape", "Marton", "Bulls", "Feilding", "Palmerston North", "Dannevirke", "Woodville", "Pahiatua", "Foxton/Foxton Beach", "Levin", "Otaki", "Waikanae", "Paraparaumu", "Masterton", "Porirua", "Wellington CBD (north of Basin Reserve)", "Wellington", "Hutt Valley (South of Taita Gorge)", "Upper Hutt", "Eastbourne (Point Howard)", "Wainuiomata", "Takaka", "Motueka", "Nelson", "Picton", "Blenheim", "St Arnaud", "Westport", "Reefton", "Murchison", "Springs Junction", "Hanmer Springs", "Seddon", "Ward", "Cheviot", "Greymouth", "Kaikoura", "Harihari", "Hokitika", "Fox Glacier", "Franz Josef", "Otira", "Arthur's Pass", "Rangiora", "Darfield", "Akaroa", "Christchurch", "Geraldine", "Ashburton", "Fairlie", "Temuka", "Timaru", "Mt Cook", "Twizel", "Waimate", "Cromwell", "Wanaka", "Arrowtown", "Alexandra", "Queenstown", "Milford Sound", "Palmerston", "Oamaru", "Dunedin", "Mosgiel", "Riverton", "Te Anau", "Gore", "Winton", "Balclutha", "Mataura", "Bluff", "Invercargill", "Oban"]
        },
        "2": {
            question: "How steep is your site",
            description: "Think about walking up the steepest bit and how you would describe it.",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Steepness",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "22",
            col_input: "4",
            options: ["Flat", "Gentle", "Steep", "Very steep"]
        },
        "3": {
            question: "What is the foundation soil?",
            description: "Foundation soil",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Foundation soil",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "23",
            col_input: "4",
            options: ["Sand", "Gravel", "Clay", "Rock"]
        },
        "4": {
            question: "How liquefaction-prone is your site?",
            description: "Choose 'Moderate' if not sure or no data available from Council.",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Liquefaction",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "25",
            col_input: "4",
            options: ["None / Small", "Moderate", "High"]
        },
        "5": {
            question: "When was the house built or most recently re-modelled?",
            description: "Choose the date that applies to most of the house.  Choose date of latest significant structural upgrade",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "House built",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "29",
            col_input: "5",
            options: ["Before 1935", "1935 - 65", "1965 - 76", "1976 - 92", "1992 - 2004", "2004-"]
        },
        "6": {
            question: "Who was responsible for the structural design?",
            description: "",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Structural designer",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "30",
            col_input: "5",
            options: ["Engineer or Architect", "Group Housing", "LBP Builder", "Non-LBP builder", "Not known"]
        },
        "7": {
            question: "How would you describe the overall construction?",
            description: "Overall Construction",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Overall construction",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "31",
            col_input: "5",
            options: ["Solid", "Average", "Below average"]
        },
        "8": {
            question: "What type of foundations does your house have?",
            description: "(Structure at and below the lowest level – ground level if no basement or basement level). You can choose more than one.",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Foundations",
            current_route: "check_question",
            next_route: "option_question",
            row_input: "58",
            col_input: "4",
            options: ["Brick (URM)", "Slab", "Timber piles", "Concrete piles", "Engineered poles", "Concrete / Concrete block walls"]
        },
        "9": {
            question: "What is the Roof Structure?",
            description: "",
            img: {
                "title": "",
                "img_name": "Quakestar_280px.png"
    
            },
            route: "optionform",
            subject: "Roof structure",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "55",
            col_input: "7",
            options: ["Timber trusses / joists", "Steel truss/beams", "Concrete beams / slab", "Other"]
        },
        "10": {
            question: "Do you have any Chimneys, if so what is the material?",
            description: "Failure of these represents a safety hazard and can add significantly to damage. The Strength and Damage scores may be affected. Click on the relevant ones. If you have more than one material, choose the heaviest one.",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Chimney material",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "88",
            col_input: "5",
            options: ["None", "Brick", "Block", "Lightweight"]
        },
        "11": {
            question: "Do you have any Parapets, if so what is the material?",
            description: "Failure of these represents a safety hazard and can add significantly to damage. The Strength and Damage scores may be affected. Click on the relevant ones. If you have more than one material, choose the heaviest one.",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Parapet material",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "89",
            col_input: "5",
            options: ["None ", "Brick ", "Block ", "Lightweight "]
        },
        "12": {
            question: "Do you have any Veneers, if so what is the material?",
            description: "Failure of these represents a safety hazard and can add significantly to damage. The Strength and Damage scores may be affected. Click on the relevant ones. If you have more than one material, choose the heaviest one.",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Veneer material",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "90",
            col_input: "5",
            options: ["None", "Brick", "Block", "Lightweight"]
        },
        "13": {
            question: "What is the structure at Ground Floor Level?",
            description: "",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Ground floor support",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "55",
            col_input: "7",
            options: ["Timber trusses / joists", "Steel truss/beams", "Concrete beams / slab", "Other"]
        },
        "14": {
            question: "What structure (eg columns/walls) supports the First Floor?",
            description: "",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "First floor structure",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "54",
            col_input: "4",
            options: ["Timber framing", "Lightweight steel", "Structural steel", "Concrete Block", "Concrete", "Brick (URM)"]
        },
        "15": {
            question: "What is the structure at Frist Floor Level?",
            description: "",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "First floor support",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "54",
            col_input: "7",
            options: ["Timber trusses / joists", "Steel truss/beams", "Concrete beams / slab", "Other"]
        },
        "16": {
            question: "What structure (eg columns/walls) supports the Second Floor?",
            description: "",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Second floor structure",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "53",
            col_input: "4",
            options: ["Timber framing", "Lightweight steel", "Structural steel", "Concrete Block", "Concrete", "Brick (URM)"]
        },
        "17": {
            question: "What is the structure at Second Floor Level?",
            description: "",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Second floor support",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "53",
            col_input: "7",
            options: ["Timber trusses / joists", "Steel truss/beams", "Concrete beams / slab", "Other"]
        },
        "18": {
            question: "What are the X-direction bracing walls made of at the Ground floor?",
            description: "",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Ground floor X-direction bracing walls",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "55",
            col_input: "5",
            options: ["Structural steel", "Ply", "Gib / Plasterboard", "Concrete Block", "Concrete", "Brick (URM)"]
        },
        "19": {
            question: "What are the Y-direction bracing walls made of at the Ground floor?",
            description: "",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Ground floor Y-direction bracing walls",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "55",
            col_input: "6",
            options: ["Structural steel ", "Ply ", "Gib / Plasterboard ", "Concrete Block ", "Concrete ", "Brick (URM) "]
        },
        "20": {
            question: "What are the X-direction bracing walls made of at the First floor?",
            description: "",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "First floor X-direction bracing walls",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "54",
            col_input: "5",
            options: ["Structural steel", "Ply", "Gib / Plasterboard", "Concrete Block", "Concrete", "Brick (URM)"]
        },
        "21": {
            question: "What are the Y-direction bracing walls made of at the First floor?",
            description: "",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "First floor Y-direction bracing walls",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "54",
            col_input: "6",
            options: ["Structural steel ", "Ply ", "Gib / Plasterboard ", "Concrete Block ", "Concrete ", "Brick (URM) "]
        },
        "22": {
            question: "What are the X-direction bracing walls made of at the Second floor?",
            description: "",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Second floor X-direction bracing walls",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "53",
            col_input: "5",
            options: ["Structural steel", "Ply", "Gib / Plasterboard", "Concrete Block", "Concrete", "Brick (URM)"]
        },
        "23": {
            question: "What are the Y-direction bracing walls made of at the Second floor?",
            description: "",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Second floor Y-direction bracing walls",
            current_route: "option_question",
            next_route: "clad_question",
            row_input: "53",
            col_input: "6",
            options: ["Structural steel ", "Ply ", "Gib / Plasterboard ", "Concrete Block ", "Concrete ", "Brick (URM) "]
        },
        "24": {
            question: "What is the cladding on the roof?",
            description: "You can select more than one.",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            options: ["Steel sheet (Examples: Corrugated iron, long-run metal or similar weight)", "Heavy tiles (Examples: Clay, concrete or similar weight)", "Light tiles (Examples: Metal tiles, wooden shingles)", "Membrane roof (Example: Torch-on membrane on plywood sheets)", "Concrete slab with waterproof coating or membrane."],
            route: "cladform",
            subject: "Roof cladding",
            current_route: "check_question",
            next_route: "clad_question",
            inputs: {
                "Steel sheet (Examples: Corrugated iron, long-run metal or similar weight)": {
                    row_input: "37",
                    col_input: "4"
                },
                "Heavy tiles (Examples: Clay, concrete or similar weight)": {
                    row_input: "37",
                    col_input: "5"
                },
                "Light tiles (Examples: Metal tiles, wooden shingles)": {
                    row_input: "37",
                    col_input: "6"
                },
                "Membrane roof (Example: Torch-on membrane on plywood sheets)": {
                    row_input: "37",
                    col_input: "7"
                },
                "Concrete slab with waterproof coating or membrane.": {
                    row_input: "37",
                    col_input: "8"
                }
            }
        },
        "25": {
            question: "What cladding materials are used on the Ground Floor?",
            description: "You can select more than one.",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            options: ["Concrete ", "Timber (Example: weatherboards) ", "Concrete block ", "Brick or brick veneer ", "Stucco / Monolithic or similar "],
            route: "cladform",
            subject: "Ground floor cladding",
            current_route: "check_question",
            next_route: "clad_question",
            inputs: {
                Concrete: {
                    row_input: "42",
                    col_input: "4"
                },
                "Timber (Example: weatherboards)": {
                    row_input: "42",
                    col_input: "5"
                },
                "Concrete block": {
                    row_input: "42",
                    col_input: "6"
                },
                "Brick or brick veneer": {
                    row_input: "42",
                    col_input: "7"
                },
                "Stucco / Monolithic or similar": {
                    row_input: "42",
                    col_input: "8"
                }
            }
        },
        "26": {
            question: "What cladding materials are used on the First Floor?",
            description: "You can select more than one.",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            options: ["Concrete", "Timber (Example: weatherboards)", "Concrete block", "Brick or brick veneer", "Stucco / Monolithic or similar"],
            route: "cladform",
            subject: "First floor cladding",
            current_route: "check_question",
            next_route: "clad_question",
            inputs: {
                Concrete: {
                    row_input: "42",
                    col_input: "4"
                },
                "Timber (Example: weatherboards)": {
                    row_input: "42",
                    col_input: "5"
                },
                "Concrete block": {
                    row_input: "42",
                    col_input: "6"
                },
                "Brick or brick veneer": {
                    row_input: "42",
                    col_input: "7"
                },
                "Stucco / Monolithic or similar": {
                    row_input: "42",
                    col_input: "8"
                }
            }
        },
        "27": {
            question: "What cladding materials are used on the Second Floor?",
            description: "You can select more than one.",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            options: ["Concrete ", "Timber (Example: weatherboards) ", "Concrete block ", "Brick or brick veneer ", "Stucco / Monolithic or similar "],
            route: "cladform",
            subject: "Second floor cladding",
            current_route: "check_question",
            next_route: "text_question",
            inputs: {
                Concrete: {
                    row_input: "42",
                    col_input: "4"
                },
                "Timber (Example: weatherboards)": {
                    row_input: "42",
                    col_input: "5"
                },
                "Concrete block": {
                    row_input: "42",
                    col_input: "6"
                },
                "Brick or brick veneer": {
                    row_input: "42",
                    col_input: "7"
                },
                "Stucco / Monolithic or similar": {
                    row_input: "42",
                    col_input: "8"
                }
            }
        },
        "28": {
            question: "What is the area of the Ground Floor in square metres?",
            description: "Enter two dimensions to define the approximate area of each floor.  For example entering 10 in X and 12 in Y will mean 120 sq m of floor area.  It does not matter what the actual shape of the floor is – as long as the total areas match.",
            img: {
                title: "",
                img_name: "Floor_area.png"
            },
            route: "textform",
            subject: "Ground floor area",
            current_route: "text_question",
            next_route: "text_question",
            x: {
                row_input: "67",
                col_input: "5"
            },
            y: {
                row_input: "67",
                col_input: "6"
            }
        },
        "29": {
            question: "What is the area of the First Floor in square metres?",
            description: "Enter two dimensions to define the approximate area of each floor.  For example entering 10 in X and 12 in Y will mean 120 sq m of floor area.  It does not matter what the actual shape of the floor is – as long as the total areas match.",
            img: {
                title: "",
                img_name: "Floor_area.png"
            },
            route: "textform",
            subject: "First floor area",
            current_route: "text_question",
            next_route: "text_question",
            x: {
                row_input: "66",
                col_input: "6"
            },
            y: {
                row_input: "66",
                col_input: "6"
            }
        },
        "30": {
            question: "What is the area of the Second Floor in square metres?",
            description: "Enter two dimensions to define the approximate area of each floor.  For example entering 10 in X and 12 in Y will mean 120 sq m of floor area.  It does not matter what the actual shape of the floor is – as long as the total areas match.",
            img: {
                title: "",
                img_name: "Floor_area.png"
            },
            route: "textform",
            subject: "Second floor area",
            current_route: "text_question",
            next_route: "text_question",
            x: {
                row_input: "65",
                col_input: "6"
            },
            y: {
                row_input: "65",
                col_input: "6"
            }
        },
        "31": {
            question: "What is the area of the Roof in square metres?",
            description: "Enter two dimensions to define the approximate area of each floor.  For example entering 10 in X and 12 in Y will mean 120 sq m of floor area.  It does not matter what the actual shape of the floor is – as long as the total areas match.",
            img: {
                title: "",
                img_name: "Floor_area.png"
            },
            route: "textform",
            subject: "Roof area",
            current_route: "text_question",
            next_route: "text_question",
            x: {
                row_input: "64",
                col_input: "5"
            },
            y: {
                row_input: "64",
                col_input: "6"
            }
        },
        "32": {
            question: "What is the total length of all bracing walls at Ground level in metres?",
            description: "Choose a direction parallel to any selected wall. Call that Direction X. Direction Y is at right angles. For each floor, add up the total length of full-height walls in each direction. They must be longer than 1 metre with no windows, doors or large holes. These walls will help brace your house to resist earthquake loads. Enter the total length in each direction (X and Y) for each floor.",
            img: {
                title: "",
                img_name: "Walls.png"
            },
            route: "textform",
            subject: "Length of Ground floor bracing walls",
            current_route: "text_question",
            next_route: "text_question",
            x: {
                row_input: "74",
                col_input: "5"
            },
            y: {
                row_input: "74",
                col_input: "6"
            }
        },
        "33": {
            question: "What is the total length of all bracing walls at the First level in metres?",
            description: "Choose a direction parallel to any selected wall. Call that Direction X. Direction Y is at right angles. For each floor, add up the total length of full-height walls in each direction. They must be longer than 1 metre with no windows, doors or large holes. These walls will help brace your house to resist earthquake loads. Enter the total length in each direction (X and Y) for each floor.",
            img: {
                title: "",
                img_name: "Walls.png"
            },
            route: "textform",
            subject: "Length of First floor bracing walls",
            current_route: "text_question",
            next_route: "text_question",
            x: {
                row_input: "73",
                col_input: "5"
            },
            y: {
                row_input: "73",
                col_input: "6"
            }
        },
        "34": {
            question: "What is the total length of all bracing walls at the Second level in metres?",
            description: "Choose a direction parallel to any selected wall. Call that Direction X. Direction Y is at right angles. For each floor, add up the total length of full-height walls in each direction. They must be longer than 1 metre with no windows, doors or large holes. These walls will help brace your house to resist earthquake loads. Enter the total length in each direction (X and Y) for each floor.",
            img: {
                title: "",
                img_name: "Walls.png"
            },
            route: "textform",
            subject: "Length of Second floor bracing walls",
            current_route: "text_question",
            next_route: "results",
            x: {
                row_input: "72",
                col_input: "5"
            },
            y: {
                row_input: "72",
                col_input: "6"
            }
        },
        "35": {
            question: "Are your bracing walls off-centre at any level? ",
            description: "Think about each level and each direction and select the worst off-centre situation. Regular: bracing walls in both directions are well distributed - not mostly on one side.   Moderate: bracing walls significantly off centre in at least one direction.   Severe: bracing walls mostly on one side in at least one direction.",
            img: {
                title: "",
                img_name: ""
            },
            route: "option_question",
            subject: "Irregularities",
            current_route: "option_question",
            next_route: "results",
            options: ["Regular", "Moderate", "Severe"]

        },
        "36": {
            question: "",
            description: "",
            img: {
                title: "",
                img_name: ""
            },
            route: "results",
            current_route: "results"
         

        }
    },
    "1b": {
        "1": {
            question: "What is the nearest place to your house?",
            description: "List is in geographical order from north to south. Choose the place closest to your house. This will determine the Seismic Hazard Factor for your location.",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Location",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "17",
            col_input: "4",
            options: ["Kaitaia", "Paihia/Russell", "Kaikohe", "Whangarei", "Dargaville", "Warkworth", "Auckland", "Manukau City", "Waiuku", "Pukekohe", "Thames", "Paeroa", "Waihi", "Huntly", "Ngaruawahia", "Morrinsville", "Te Aroha", "Tauranga", "Mount Maunganui", "Hamilton", "Cambridge", "Te Awamutu", "Matamata", "Te Puke", "Putaruru", "Tokoroa", "Otorohanga", "Te Kuiti", "Mangakino", "Rotorua", "Kawerau", "Whakatane", "Opotiki", "Ruatoria", "Murupara", "Taupo", "Taumarunui", "Turangi", "Gisborne", "Wairoa", "New Plymouth", "Inglewood", "Stratford", "Opunake", "Hawera", "Patea", "Raetihi", "Ohakune", "Waiouru", "Napier", "Hastings", "Whanganui", "Waipawa", "Waipukurau", "Taihape", "Marton", "Bulls", "Feilding", "Palmerston North", "Dannevirke", "Woodville", "Pahiatua", "Foxton/Foxton Beach", "Levin", "Otaki", "Waikanae", "Paraparaumu", "Masterton", "Porirua", "Wellington CBD (north of Basin Reserve)", "Wellington", "Hutt Valley (South of Taita Gorge)", "Upper Hutt", "Eastbourne (Point Howard)", "Wainuiomata", "Takaka", "Motueka", "Nelson", "Picton", "Blenheim", "St Arnaud", "Westport", "Reefton", "Murchison", "Springs Junction", "Hanmer Springs", "Seddon", "Ward", "Cheviot", "Greymouth", "Kaikoura", "Harihari", "Hokitika", "Fox Glacier", "Franz Josef", "Otira", "Arthur's Pass", "Rangiora", "Darfield", "Akaroa", "Christchurch", "Geraldine", "Ashburton", "Fairlie", "Temuka", "Timaru", "Mt Cook", "Twizel", "Waimate", "Cromwell", "Wanaka", "Arrowtown", "Alexandra", "Queenstown", "Milford Sound", "Palmerston", "Oamaru", "Dunedin", "Mosgiel", "Riverton", "Te Anau", "Gore", "Winton", "Balclutha", "Mataura", "Bluff", "Invercargill", "Oban"]
        },
        "2": {
            question: "How steep is your site",
            description: "Think about walking up the steepest bit and how you would describe it.",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Steepness",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "22",
            col_input: "4",
            options: ["Flat", "Gentle", "Steep", "Very steep"]
        },
        "3": {
            question: "What is the foundation soil?",
            description: "Foundation soil",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Foundation soil",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "23",
            col_input: "4",
            options: ["Sand", "Gravel", "Clay", "Rock"]
        },
        "4": {
            question: "How liquefaction-prone is your site?",
            description: "Choose 'Moderate' if not sure or no data available from Council.",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Liquefaction",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "25",
            col_input: "4",
            options: ["None / Small", "Moderate", "High"]
        },
        "5": {
            question: "When was the house built or most recently re-modelled?",
            description: "Choose the date that applies to most of the house.  Choose date of latest significant structural upgrade",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "House built",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "29",
            col_input: "5",
            options: ["Before 1935", "1935 - 65", "1965 - 76", "1976 - 92", "1992 - 2004", "2004-"]
        },
        "6": {
            question: "Who was responsible for the structural design?",
            description: "",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Structural designer",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "30",
            col_input: "5",
            options: ["Engineer or Architect", "Group Housing", "LBP Builder", "Non-LBP builder", "Not known"]
        },
        "7": {
            question: "How would you describe the overall construction?",
            description: "Overall Construction",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Overall construction",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "31",
            col_input: "5",
            options: ["Solid", "Average", "Below average"]
        },
        "8": {
            question: "What type of foundations does your house have?",
            description: "(Structure at and below the lowest level – ground level if no basement or basement level). You can choose more than one.",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Foundations",
            current_route: "check_question",
            next_route: "option_question",
            row_input: "58",
            col_input: "4",
            options: ["Brick (URM)", "Slab", "Timber piles", "Concrete piles", "Engineered poles", "Concrete / Concrete block walls"]
        },
        "9": {
            question: "What is the Roof Structure?",
            description: "",
            img: {
                "title": "",
                "img_name": "Quakestar_280px.png"
    
            },
            route: "optionform",
            subject: "Roof structure",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "55",
            col_input: "7",
            options: ["Timber trusses / joists", "Steel truss/beams", "Concrete beams / slab", "Other"]
        },
        "10": {
            question: "Do you have any Chimneys, if so what is the material?",
            description: "Failure of these represents a safety hazard and can add significantly to damage. The Strength and Damage scores may be affected. Click on the relevant ones. If you have more than one material, choose the heaviest one.",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Chimney material",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "88",
            col_input: "5",
            options: ["None", "Brick", "Block", "Lightweight"]
        },
        "11": {
            question: "Do you have any Parapets, if so what is the material?",
            description: "Failure of these represents a safety hazard and can add significantly to damage. The Strength and Damage scores may be affected. Click on the relevant ones. If you have more than one material, choose the heaviest one.",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Parapet material",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "89",
            col_input: "5",
            options: ["None ", "Brick ", "Block ", "Lightweight "]
        },
        "12": {
            question: "Do you have any Veneers, if so what is the material?",
            description: "Failure of these represents a safety hazard and can add significantly to damage. The Strength and Damage scores may be affected. Click on the relevant ones. If you have more than one material, choose the heaviest one.",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Veneer material",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "90",
            col_input: "5",
            options: ["None", "Brick", "Block", "Lightweight"]
        },
        "13": {
            question: "What structure (eg columns/walls) supports the Ground Floor?",
            description: "",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Ground floor structure",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "55",
            col_input: "4",
            options: ["Timber framing", "Lightweight steel", "Structural steel", "Concrete Block", "Concrete", "Brick (URM)"]
        },
        "14": {
            question: "What is the structure at Ground Floor Level?",
            description: "",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Ground floor support",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "55",
            col_input: "7",
            options: ["Timber trusses / joists", "Steel truss/beams", "Concrete beams / slab", "Other"]
        },
        "15": {
            question: "What is the structure at Basement Floor Level?",
            description: "",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Basement floor support",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "56",
            col_input: "7",
            options: ["Timber trusses / joists", "Steel truss/beams", "Concrete beams / slab", "Earth", "Other"]
        },
        "16": {
            question: "What are the X-direction bracing walls made of at the Ground floor?",
            description: "",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Ground floor X-direction bracing walls",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "55",
            col_input: "5",
            options: ["Structural steel", "Ply", "Gib / Plasterboard", "Concrete Block", "Concrete", "Brick (URM)"]
        },
        "17": {
            question: "What are the Y-direction bracing walls made of at the Ground floor?",
            description: "",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Ground floor Y-direction bracing walls",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "55",
            col_input: "6",
            options: ["Structural steel ", "Ply ", "Gib / Plasterboard ", "Concrete Block ", "Concrete ", "Brick (URM) "]
        },
        "18": {
            question: "What are the X-direction bracing walls made of at the Basement floor?",
            description: "",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Basement floor X-direction bracing walls",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "56",
            col_input: "5",
            options: ["Structural steel", "Ply", "Gib / Plasterboard", "Concrete Block", "Concrete", "Brick (URM)"]
        },
        "19": {
            question: "What are the Y-direction bracing walls made of at the Basement floor?",
            description: "",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Basement floor Y-direction bracing walls",
            current_route: "option_question",
            next_route: "clad_question",
            row_input: "56",
            col_input: "6",
            options: ["Structural steel ", "Ply ", "Gib / Plasterboard ", "Concrete Block ", "Concrete ", "Brick (URM) "]
        },
        "20": {
            question: "What is the cladding on the roof?",
            description: "You can select more than one.",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            options: ["Steel sheet (Examples: Corrugated iron, long-run metal or similar weight)", "Heavy tiles (Examples: Clay, concrete or similar weight)", "Light tiles (Examples: Metal tiles, wooden shingles)", "Membrane roof (Example: Torch-on membrane on plywood sheets)", "Concrete slab with waterproof coating or membrane."],
            route: "cladform",
            subject: "Roof cladding",
            current_route: "check_question",
            next_route: "clad_question",
            inputs: {
                "Steel sheet (Examples: Corrugated iron, long-run metal or similar weight)": {
                    row_input: "37",
                    col_input: "4"
                },
                "Heavy tiles (Examples: Clay, concrete or similar weight)": {
                    row_input: "37",
                    col_input: "5"
                },
                "Light tiles (Examples: Metal tiles, wooden shingles)": {
                    row_input: "37",
                    col_input: "6"
                },
                "Membrane roof (Example: Torch-on membrane on plywood sheets)": {
                    row_input: "37",
                    col_input: "7"
                },
                "Concrete slab with waterproof coating or membrane.": {
                    row_input: "37",
                    col_input: "8"
                }
            }
        },
        "21": {
            question: "What cladding materials are used on the Ground Floor?",
            description: "You can select more than one.",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            options: ["Concrete ", "Timber (Example: weatherboards) ", "Concrete block ", "Brick or brick veneer ", "Stucco / Monolithic or similar "],
            route: "cladform",
            subject: "Ground floor cladding",
            current_route: "check_question",
            next_route: "clad_question",
            inputs: {
                Concrete: {
                    row_input: "42",
                    col_input: "4"
                },
                "Timber (Example: weatherboards)": {
                    row_input: "42",
                    col_input: "5"
                },
                "Concrete block": {
                    row_input: "42",
                    col_input: "6"
                },
                "Brick or brick veneer": {
                    row_input: "42",
                    col_input: "7"
                },
                "Stucco / Monolithic or similar": {
                    row_input: "42",
                    col_input: "8"
                }
            }
        },
        "22": {
            question: "What cladding materials are used on the Basement Floor?",
            description: "You can select more than one.",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            options: ["Concrete", "Timber (Example: weatherboards)", "Concrete block", "Brick or brick veneer", "Stucco / Monolithic or similar"],
            route: "cladform",
            subject: "Ground floor cladding",
            current_route: "check_question",
            next_route: "text_question",
            inputs: {
                Concrete: {
                    row_input: "42",
                    col_input: "4"
                },
                "Timber (Example: weatherboards)": {
                    row_input: "42",
                    col_input: "5"
                },
                "Concrete block": {
                    row_input: "42",
                    col_input: "6"
                },
                "Brick or brick veneer": {
                    row_input: "42",
                    col_input: "7"
                },
                "Stucco / Monolithic or similar": {
                    row_input: "42",
                    col_input: "8"
                }
            }
        },
        "23": {
            question: "What is the area of the Ground Floor in square metres?",
            description: "Enter two dimensions to define the approximate area of each floor.  For example entering 10 in X and 12 in Y will mean 120 sq m of floor area.  It does not matter what the actual shape of the floor is – as long as the total areas match.",
            img: {
                title: "",
                img_name: "Floor_area.png"
            },
            route: "textform",
            subject: "Ground floor area",
            current_route: "text_question",
            next_route: "text_question",
            x: {
                row_input: "67",
                col_input: "5"
            },
            y: {
                row_input: "67",
                col_input: "6"
            }
        },
        "24": {
            question: "What is the area of the Basement Floor in square metres?",
            description: "Enter two dimensions to define the approximate area of each floor.  For example entering 10 in X and 12 in Y will mean 120 sq m of floor area.  It does not matter what the actual shape of the floor is – as long as the total areas match.",
            img: {
                title: "",
                img_name: "Floor_area.png"
            },
            route: "textform",
            subject: "Basement floor area",
            current_route: "text_question",
            next_route: "text_question",
            x: {
                row_input: "68",
                col_input: "6"
            },
            y: {
                row_input: "68",
                col_input: "6"
            }
        },
        "25": {
            question: "What is the area of the Roof in square metres?",
            description: "Enter two dimensions to define the approximate area of each floor.  For example entering 10 in X and 12 in Y will mean 120 sq m of floor area.  It does not matter what the actual shape of the floor is – as long as the total areas match.",
            img: {
                title: "",
                img_name: "Floor_area.png"
            },
            route: "textform",
            subject: "Roof area",
            current_route: "text_question",
            next_route: "text_question",
            x: {
                row_input: "64",
                col_input: "5"
            },
            y: {
                row_input: "64",
                col_input: "6"
            }
        },
        "26": {
            question: "What is the total length of all bracing walls at Ground level in metres?",
            description: "Choose a direction parallel to any selected wall. Call that Direction X. Direction Y is at right angles. For each floor, add up the total length of full-height walls in each direction. They must be longer than 1 metre with no windows, doors or large holes. These walls will help brace your house to resist earthquake loads. Enter the total length in each direction (X and Y) for each floor.",
            img: {
                title: "",
                img_name: "Walls.png"
            },
            route: "textform",
            subject: "Length of Ground floor bracing walls",
            current_route: "text_question",
            next_route: "text_question",
            x: {
                row_input: "74",
                col_input: "5"
            },
            y: {
                row_input: "74",
                col_input: "6"
            }
        },
        "27": {
            question: "What is the total length of all bracing walls at the Basement level in metres?",
            description: "Choose a direction parallel to any selected wall. Call that Direction X. Direction Y is at right angles. For each floor, add up the total length of full-height walls in each direction. They must be longer than 1 metre with no windows, doors or large holes. These walls will help brace your house to resist earthquake loads. Enter the total length in each direction (X and Y) for each floor.",
            img: {
                title: "",
                img_name: "Walls.png"
            },
            route: "textform",
            subject: "Length of Basement floor bracing walls",
            current_route: "text_question",
            next_route: "results",
            x: {
                row_input: "75",
                col_input: "5"
            },
            y: {
                row_input: "75",
                col_input: "6"
            }
        },
        "28": {
            question: "Are your bracing walls off-centre at any level? ",
            description: "Think about each level and each direction and select the worst off-centre situation. Regular: bracing walls in both directions are well distributed - not mostly on one side.   Moderate: bracing walls significantly off centre in at least one direction.   Severe: bracing walls mostly on one side in at least one direction.",
            img: {
                title: "",
                img_name: ""
            },
            route: "option_question",
            subject: "Irregularities",
            current_route: "option_question",
            next_route: "results",
            options: ["Regular", "Moderate", "Severe"]

        },
        "29": {
            question: "",
            description: "",
            img: {
                title: "",
                img_name: ""
            },
            route: "results",
            current_route: "results"
         

        }
    },
    "2b": {
        "1": {
            question: "What is the nearest place to your house?",
            description: "List is in geographical order from north to south. Choose the place closest to your house. This will determine the Seismic Hazard Factor for your location.",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Location",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "17",
            col_input: "4",
            options: ["Kaitaia", "Paihia/Russell", "Kaikohe", "Whangarei", "Dargaville", "Warkworth", "Auckland", "Manukau City", "Waiuku", "Pukekohe", "Thames", "Paeroa", "Waihi", "Huntly", "Ngaruawahia", "Morrinsville", "Te Aroha", "Tauranga", "Mount Maunganui", "Hamilton", "Cambridge", "Te Awamutu", "Matamata", "Te Puke", "Putaruru", "Tokoroa", "Otorohanga", "Te Kuiti", "Mangakino", "Rotorua", "Kawerau", "Whakatane", "Opotiki", "Ruatoria", "Murupara", "Taupo", "Taumarunui", "Turangi", "Gisborne", "Wairoa", "New Plymouth", "Inglewood", "Stratford", "Opunake", "Hawera", "Patea", "Raetihi", "Ohakune", "Waiouru", "Napier", "Hastings", "Whanganui", "Waipawa", "Waipukurau", "Taihape", "Marton", "Bulls", "Feilding", "Palmerston North", "Dannevirke", "Woodville", "Pahiatua", "Foxton/Foxton Beach", "Levin", "Otaki", "Waikanae", "Paraparaumu", "Masterton", "Porirua", "Wellington CBD (north of Basin Reserve)", "Wellington", "Hutt Valley (South of Taita Gorge)", "Upper Hutt", "Eastbourne (Point Howard)", "Wainuiomata", "Takaka", "Motueka", "Nelson", "Picton", "Blenheim", "St Arnaud", "Westport", "Reefton", "Murchison", "Springs Junction", "Hanmer Springs", "Seddon", "Ward", "Cheviot", "Greymouth", "Kaikoura", "Harihari", "Hokitika", "Fox Glacier", "Franz Josef", "Otira", "Arthur's Pass", "Rangiora", "Darfield", "Akaroa", "Christchurch", "Geraldine", "Ashburton", "Fairlie", "Temuka", "Timaru", "Mt Cook", "Twizel", "Waimate", "Cromwell", "Wanaka", "Arrowtown", "Alexandra", "Queenstown", "Milford Sound", "Palmerston", "Oamaru", "Dunedin", "Mosgiel", "Riverton", "Te Anau", "Gore", "Winton", "Balclutha", "Mataura", "Bluff", "Invercargill", "Oban"]
        },
        "2": {
            question: "How steep is your site",
            description: "Think about walking up the steepest bit and how you would describe it.",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Steepness",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "22",
            col_input: "4",
            options: ["Flat", "Gentle", "Steep", "Very steep"]
        },
        "3": {
            question: "What is the foundation soil?",
            description: "Foundation soil",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Foundation soil",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "23",
            col_input: "4",
            options: ["Sand", "Gravel", "Clay", "Rock"]
        },
        "4": {
            question: "How liquefaction-prone is your site?",
            description: "Choose 'Moderate' if not sure or no data available from Council.",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Liquefaction",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "25",
            col_input: "4",
            options: ["None / Small", "Moderate", "High"]
        },
        "5": {
            question: "When was the house built or most recently re-modelled?",
            description: "Choose the date that applies to most of the house.  Choose date of latest significant structural upgrade",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "House built",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "29",
            col_input: "5",
            options: ["Before 1935", "1935 - 65", "1965 - 76", "1976 - 92", "1992 - 2004", "2004-"]
        },
        "6": {
            question: "Who was responsible for the structural design?",
            description: "",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Structural designer",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "30",
            col_input: "5",
            options: ["Engineer or Architect", "Group Housing", "LBP Builder", "Non-LBP builder", "Not known"]
        },
        "7": {
            question: "How would you describe the overall construction?",
            description: "Overall Construction",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Overall construction",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "31",
            col_input: "5",
            options: ["Solid", "Average", "Below average"]
        },
        "8": {
            question: "What type of foundations does your house have?",
            description: "(Structure at and below the lowest level – ground level if no basement or basement level). You can choose more than one.",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Foundations",
            current_route: "check_question",
            next_route: "option_question",
            row_input: "58",
            col_input: "4",
            options: ["Brick (URM)", "Slab", "Timber piles", "Concrete piles", "Engineered poles", "Concrete / Concrete block walls"]
        },
        "9": {
            question: "What is the Roof Structure?",
            description: "",
            img: {
                "title": "",
                "img_name": "Quakestar_280px.png"
    
            },
            route: "optionform",
            subject: "Roof structure",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "55",
            col_input: "7",
            options: ["Timber trusses / joists", "Steel truss/beams", "Concrete beams / slab", "Other"]
        },
        "10": {
            question: "Do you have any Chimneys, if so what is the material?",
            description: "Failure of these represents a safety hazard and can add significantly to damage. The Strength and Damage scores may be affected. Click on the relevant ones. If you have more than one material, choose the heaviest one.",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Chimney material",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "88",
            col_input: "5",
            options: ["None", "Brick", "Block", "Lightweight"]
        },
        "11": {
            question: "Do you have any Parapets, if so what is the material?",
            description: "Failure of these represents a safety hazard and can add significantly to damage. The Strength and Damage scores may be affected. Click on the relevant ones. If you have more than one material, choose the heaviest one.",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Parapet material",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "89",
            col_input: "5",
            options: ["None ", "Brick ", "Block ", "Lightweight "]
        },
        "12": {
            question: "Do you have any Veneers, if so what is the material?",
            description: "Failure of these represents a safety hazard and can add significantly to damage. The Strength and Damage scores may be affected. Click on the relevant ones. If you have more than one material, choose the heaviest one.",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Veneer material",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "90",
            col_input: "5",
            options: ["None", "Brick", "Block", "Lightweight"]
        },
        "13": {
            question: "What structure (eg columns/walls) supports the Ground Floor?",
            description: "",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Ground floor structure",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "55",
            col_input: "4",
            options: ["Timber framing", "Lightweight steel", "Structural steel", "Concrete Block", "Concrete", "Brick (URM)"]
        },
        "14": {
            question: "What is the structure at Ground Floor Level?",
            description: "",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Groumd floor support",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "55",
            col_input: "7",
            options: ["Timber trusses / joists", "Steel truss/beams", "Concrete beams / slabs", "Concrete Block", "Other"]
        },
        "15": {
            question: "What structure (eg columns/walls) supports the First Floor?",
            description: "",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "First floor structure",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "54",
            col_input: "4",
            options: ["Timber framing", "Lightweight steel", "Structural steel", "Concrete Block", "Concrete", "Brick (URM)"]
        },
        "16": {
            question: "What is the structure at First Floor Level?",
            description: "",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "First floor support",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "54",
            col_input: "7",
            options: ["Timber trusses / joists", "Steel truss/beams", "Concrete beams / slabs", "Concrete Block", "Other"]
        },
        "17": {
            question: "What is the structure at Basement Floor Level?",
            description: "",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Basement floor support",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "55",
            col_input: "7",
            options: ["Timber trusses / joists", "Steel truss/beams", "Concrete beams / slab", "Concrete Block", "Earth", "Other"]
        },
        "18": {
            question: "What are the X-direction bracing walls made of at the Ground floor?",
            description: "",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Ground floor X-direction bracing walls",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "55",
            col_input: "5",
            options: ["Structural steel", "Ply", "Gib / Plasterboard", "Concrete Block", "Concrete", "Brick (URM)"]
        },
        "19": {
            question: "What are the Y-direction bracing walls made of at the Ground floor?",
            description: "",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Ground floor Y-direction bracing walls",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "55",
            col_input: "6",
            options: ["Structural steel ", "Ply ", "Gib / Plasterboard ", "Concrete Block ", "Concrete ", "Brick (URM) "]
        },
        "20": {
            question: "What are the X-direction bracing walls made of at the First floor?",
            description: "",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "First floor X-direction bracing walls",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "54",
            col_input: "5",
            options: ["Structural steel", "Ply", "Gib / Plasterboard", "Concrete Block", "Concrete", "Brick (URM)"]
        },
        "21": {
            question: "What are the Y-direction bracing walls made of at the First floor?",
            description: "",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "First floor Y-direction bracing walls",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "54",
            col_input: "6",
            options: ["Structural steel ", "Ply ", "Gib / Plasterboard ", "Concrete Block ", "Concrete ", "Brick (URM) "]
        },
        "22": {
            question: "What are the X-direction bracing walls made of at the Basement floor?",
            description: "",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Basement floor X-direction bracing walls",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "56",
            col_input: "5",
            options: ["Structural steel", "Ply", "Gib / Plasterboard", "Concrete Block", "Concrete", "Brick (URM)"]
        },
        "23": {
            question: "What are the Y-direction bracing walls made of at the Basement floor?",
            description: "",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Basement floor Y-direction bracing walls",
            current_route: "option_question",
            next_route: "clad_question",
            row_input: "56",
            col_input: "6",
            options: ["Structural steel ", "Ply ", "Gib / Plasterboard ", "Concrete Block ", "Concrete ", "Brick (URM) "]
        },
        "24": {
            question: "What is the cladding on the roof?",
            description: "You can select more than one.",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            options: ["Steel sheet (Examples: Corrugated iron, long-run metal or similar weight)", "Heavy tiles (Examples: Clay, concrete or similar weight)", "Light tiles (Examples: Metal tiles, wooden shingles)", "Membrane roof (Example: Torch-on membrane on plywood sheets)", "Concrete slab with waterproof coating or membrane."],
            route: "cladform",
            subject: "Roof cladding",
            current_route: "check_question",
            next_route: "clad_question",
            inputs: {
                "Steel sheet (Examples: Corrugated iron, long-run metal or similar weight)": {
                    row_input: "37",
                    col_input: "4"
                },
                "Heavy tiles (Examples: Clay, concrete or similar weight)": {
                    row_input: "37",
                    col_input: "5"
                },
                "Light tiles (Examples: Metal tiles, wooden shingles)": {
                    row_input: "37",
                    col_input: "6"
                },
                "Membrane roof (Example: Torch-on membrane on plywood sheets)": {
                    row_input: "37",
                    col_input: "7"
                },
                "Concrete slab with waterproof coating or membrane.": {
                    row_input: "37",
                    col_input: "8"
                }
            }
        },
        "25": {
            question: "What cladding materials are used on the Ground Floor?",
            description: "You can select more than one.",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            options: ["Concrete ", "Timber (Example: weatherboards) ", "Concrete block ", "Brick or brick veneer ", "Stucco / Monolithic or similar "],
            route: "cladform",
            subject: "Ground floor cladding",
            current_route: "check_question",
            next_route: "clad_question",
            inputs: {
                Concrete: {
                    row_input: "42",
                    col_input: "4"
                },
                "Timber (Example: weatherboards)": {
                    row_input: "42",
                    col_input: "5"
                },
                "Concrete block": {
                    row_input: "42",
                    col_input: "6"
                },
                "Brick or brick veneer": {
                    row_input: "42",
                    col_input: "7"
                },
                "Stucco / Monolithic or similar": {
                    row_input: "42",
                    col_input: "8"
                }
            }
        },
        "26": {
            question: "What cladding materials are used on the First Floor?",
            description: "You can select more than one.",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            options: ["Concrete", "Timber (Example: weatherboards)", "Concrete block", "Brick or brick veneer", "Stucco / Monolithic or similar"],
            route: "cladform",
            subject: "First floor cladding",
            current_route: "check_question",
            next_route: "clad_question",
            inputs: {
                Concrete: {
                    row_input: "42",
                    col_input: "4"
                },
                "Timber (Example: weatherboards)": {
                    row_input: "42",
                    col_input: "5"
                },
                "Concrete block": {
                    row_input: "42",
                    col_input: "6"
                },
                "Brick or brick veneer": {
                    row_input: "42",
                    col_input: "7"
                },
                "Stucco / Monolithic or similar": {
                    row_input: "42",
                    col_input: "8"
                }
            }
        },
        "27": {
            question: "What cladding materials are used on the Basement Floor?",
            description: "You can select more than one.",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            options: ["Concrete ", "Timber (Example: weatherboards) ", "Concrete block ", "Brick or brick veneer ", "Stucco / Monolithic or similar "],
            route: "cladform",
            subject: "Basement floor cladding",
            current_route: "check_question",
            next_route: "text_question",
            inputs: {
                Concrete: {
                    row_input: "42",
                    col_input: "4"
                },
                "Timber (Example: weatherboards)": {
                    row_input: "42",
                    col_input: "5"
                },
                "Concrete block": {
                    row_input: "42",
                    col_input: "6"
                },
                "Brick or brick veneer": {
                    row_input: "42",
                    col_input: "7"
                },
                "Stucco / Monolithic or similar": {
                    row_input: "42",
                    col_input: "8"
                }
            }
        },
        "28": {
            question: "What is the area of the Ground Floor in square metres?",
            description: "Enter two dimensions to define the approximate area of each floor.  For example entering 10 in X and 12 in Y will mean 120 sq m of floor area.  It does not matter what the actual shape of the floor is – as long as the total areas match.",
            img: {
                title: "",
                img_name: "Walls.png"
            },
            route: "textform",
            subject: "Ground floor area",
            current_route: "text_question",
            next_route: "text_question",
            x: {
                row_input: "67",
                col_input: "5"
            },
            y: {
                row_input: "67",
                col_input: "6"
            }
        },
        "29": {
            question: "What is the area of the First Floor in square metres?",
            description: "Enter two dimensions to define the approximate area of each floor.  For example entering 10 in X and 12 in Y will mean 120 sq m of floor area.  It does not matter what the actual shape of the floor is – as long as the total areas match.",
            img: {
                title: "",
                img_name: "Floor_area.png"
            },
            route: "textform",
            subject: "First floor area",
            current_route: "text_question",
            next_route: "text_question",
            x: {
                row_input: "66",
                col_input: "6"
            },
            y: {
                row_input: "66",
                col_input: "6"
            }
        },
        "30": {
            question: "What is the area of the Basement Floor in square metres?",
            description: "Enter two dimensions to define the approximate area of each floor.  For example entering 10 in X and 12 in Y will mean 120 sq m of floor area.  It does not matter what the actual shape of the floor is – as long as the total areas match.",
            img: {
                title: "",
                img_name: "Floor_area.png"
            },
            route: "textform",
            subject: "Basement floor area",
            current_route: "text_question",
            next_route: "text_question",
            x: {
                row_input: "68",
                col_input: "6"
            },
            y: {
                row_input: "68",
                col_input: "6"
            }
        },
        "31": {
            question: "What is the area of the Roof in square metres?",
            description: "Enter two dimensions to define the approximate area of each floor.  For example entering 10 in X and 12 in Y will mean 120 sq m of floor area.  It does not matter what the actual shape of the floor is – as long as the total areas match.",
            img: {
                title: "",
                img_name: "Floor_area.png"
            },
            route: "textform",
            subject: "Roof area",
            current_route: "text_question",
            next_route: "text_question",
            x: {
                row_input: "64",
                col_input: "5"
            },
            y: {
                row_input: "64",
                col_input: "6"
            }
        },
        "32": {
            question: "What is the total length of all bracing walls at Ground level in metres?",
            description: "Choose a direction parallel to any selected wall. Call that Direction X. Direction Y is at right angles. For each floor, add up the total length of full-height walls in each direction. They must be longer than 1 metre with no windows, doors or large holes. These walls will help brace your house to resist earthquake loads. Enter the total length in each direction (X and Y) for each floor.",
            img: {
                title: "",
                img_name: "Floor_area.png"
            },
            route: "textform",
            subject: "Length of Ground floor bracing walls",
            current_route: "text_question",
            next_route: "text_question",
            x: {
                row_input: "74",
                col_input: "5"
            },
            y: {
                row_input: "74",
                col_input: "6"
            }
        },
        "33": {
            question: "What is the total length of all bracing walls at the First level in metres?",
            description: "Choose a direction parallel to any selected wall. Call that Direction X. Direction Y is at right angles. For each floor, add up the total length of full-height walls in each direction. They must be longer than 1 metre with no windows, doors or large holes. These walls will help brace your house to resist earthquake loads. Enter the total length in each direction (X and Y) for each floor.",
            img: {
                title: "",
                img_name: "Floor_area.png"
            },
            route: "textform",
            subject: "Length of First floor bracing walls",
            current_route: "text_question",
            next_route: "text_question",
            x: {
                row_input: "73",
                col_input: "5"
            },
            y: {
                row_input: "73",
                col_input: "6"
            }
        },
        "34": {
            question: "What is the total length of all bracing walls at the Basement level in metres?",
            description: "Choose a direction parallel to any selected wall. Call that Direction X. Direction Y is at right angles. For each floor, add up the total length of full-height walls in each direction. They must be longer than 1 metre with no windows, doors or large holes. These walls will help brace your house to resist earthquake loads. Enter the total length in each direction (X and Y) for each floor.",
            img: {
                title: "",
                img_name: "Floor_area.png"
            },
            route: "textform",
            subject: "Length of Basement floor bracing walls",
            current_route: "text_question",
            next_route: "results",
            x: {
                row_input: "75",
                col_input: "5"
            },
            y: {
                row_input: "75",
                col_input: "6"
            }
        },
        "35": {
            question: "Are your bracing walls off-centre at any level? ",
            description: "Think about each level and each direction and select the worst off-centre situation. Regular: bracing walls in both directions are well distributed - not mostly on one side.   Moderate: bracing walls significantly off centre in at least one direction.   Severe: bracing walls mostly on one side in at least one direction.",
            img: {
                title: "",
                img_name: ""
            },
            route: "option_question",
            subject: "Irregularities",
            current_route: "option_question",
            next_route: "results",
            options: ["Regular", "Moderate", "Severe"]

        },
        "36": {
            question: "",
            description: "",
            img: {
                title: "",
                img_name: ""
            },
            route: "results",
            current_route: "results"
         

        }
    },
    "3b": {
        "1": {
            question: "What is the nearest place to your house?",
            description: "List is in geographical order from north to south. Choose the place closest to your house. This will determine the Seismic Hazard Factor for your location.",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Location",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "17",
            col_input: "4",
            options: ["Kaitaia", "Paihia/Russell", "Kaikohe", "Whangarei", "Dargaville", "Warkworth", "Auckland", "Manukau City", "Waiuku", "Pukekohe", "Thames", "Paeroa", "Waihi", "Huntly", "Ngaruawahia", "Morrinsville", "Te Aroha", "Tauranga", "Mount Maunganui", "Hamilton", "Cambridge", "Te Awamutu", "Matamata", "Te Puke", "Putaruru", "Tokoroa", "Otorohanga", "Te Kuiti", "Mangakino", "Rotorua", "Kawerau", "Whakatane", "Opotiki", "Ruatoria", "Murupara", "Taupo", "Taumarunui", "Turangi", "Gisborne", "Wairoa", "New Plymouth", "Inglewood", "Stratford", "Opunake", "Hawera", "Patea", "Raetihi", "Ohakune", "Waiouru", "Napier", "Hastings", "Whanganui", "Waipawa", "Waipukurau", "Taihape", "Marton", "Bulls", "Feilding", "Palmerston North", "Dannevirke", "Woodville", "Pahiatua", "Foxton/Foxton Beach", "Levin", "Otaki", "Waikanae", "Paraparaumu", "Masterton", "Porirua", "Wellington CBD (north of Basin Reserve)", "Wellington", "Hutt Valley (South of Taita Gorge)", "Upper Hutt", "Eastbourne (Point Howard)", "Wainuiomata", "Takaka", "Motueka", "Nelson", "Picton", "Blenheim", "St Arnaud", "Westport", "Reefton", "Murchison", "Springs Junction", "Hanmer Springs", "Seddon", "Ward", "Cheviot", "Greymouth", "Kaikoura", "Harihari", "Hokitika", "Fox Glacier", "Franz Josef", "Otira", "Arthur's Pass", "Rangiora", "Darfield", "Akaroa", "Christchurch", "Geraldine", "Ashburton", "Fairlie", "Temuka", "Timaru", "Mt Cook", "Twizel", "Waimate", "Cromwell", "Wanaka", "Arrowtown", "Alexandra", "Queenstown", "Milford Sound", "Palmerston", "Oamaru", "Dunedin", "Mosgiel", "Riverton", "Te Anau", "Gore", "Winton", "Balclutha", "Mataura", "Bluff", "Invercargill", "Oban"]
        },
        "2": {
            question: "How steep is your site",
            description: "Think about walking up the steepest bit and how you would describe it.",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Steepness",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "22",
            col_input: "4",
            options: ["Flat", "Gentle", "Steep", "Very steep"]
        },
        "3": {
            question: "What is the foundation soil?",
            description: "Foundation soil",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Foundation soil",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "23",
            col_input: "4",
            options: ["Sand", "Gravel", "Clay", "Rock"]
        },
        "4": {
            question: "How liquefaction-prone is your site?",
            description: "Choose 'Moderate' if not sure or no data available from Council.",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Liquefaction",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "25",
            col_input: "4",
            options: ["None / Small", "Moderate", "High"]
        },
        "5": {
            question: "When was the house built or most recently re-modelled?",
            description: "Choose the date that applies to most of the house.  Choose date of latest significant structural upgrade",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "House built",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "29",
            col_input: "5",
            options: ["Before 1935", "1935 - 65", "1965 - 76", "1976 - 92", "1992 - 2004", "2004-"]
        },
        "6": {
            question: "Who was responsible for the structural design?",
            description: "",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Structural designer",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "30",
            col_input: "5",
            options: ["Engineer or Architect", "Group Housing", "LBP Builder", "Non-LBP builder", "Not known"]
        },
        "7": {
            question: "How would you describe the overall construction?",
            description: "Overall Construction",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Overall construction",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "31",
            col_input: "5",
            options: ["Solid", "Average", "Below average"]
        },
        "8": {
            question: "What type of foundations does your house have?",
            description: "(Structure at and below the lowest level – ground level if no basement or basement level). You can choose more than one.",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Foundations",
            current_route: "check_question",
            next_route: "option_question",
            row_input: "58",
            col_input: "4",
            options: ["Brick (URM)", "Slab", "Timber piles", "Concrete piles", "Engineered poles", "Concrete / Concrete block walls"]
        },
        "9": {
            question: "What is the Roof Structure?",
            description: "",
            img: {
                "title": "",
                "img_name": "Quakestar_280px.png"
    
            },
            route: "optionform",
            subject: "Roof structure",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "55",
            col_input: "7",
            options: ["Timber trusses / joists", "Steel truss/beams", "Concrete beams / slab", "Other"]
        },
        "10": {
            question: "Do you have any Chimneys, if so what is the material?",
            description: "Failure of these represents a safety hazard and can add significantly to damage. The Strength and Damage scores may be affected. Click on the relevant ones. If you have more than one material, choose the heaviest one.",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Chimney material",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "88",
            col_input: "5",
            options: ["None", "Brick", "Block", "Lightweight"]
        },
        "11": {
            question: "Do you have any Parapets, if so what is the material?",
            description: "Failure of these represents a safety hazard and can add significantly to damage. The Strength and Damage scores may be affected. Click on the relevant ones. If you have more than one material, choose the heaviest one.",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Parapet material",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "89",
            col_input: "5",
            options: ["None ", "Brick ", "Block ", "Lightweight "]
        },
        "12": {
            question: "Do you have any Veneers, if so what is the material?",
            description: "Failure of these represents a safety hazard and can add significantly to damage. The Strength and Damage scores may be affected. Click on the relevant ones. If you have more than one material, choose the heaviest one.",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Veneer material",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "90",
            col_input: "5",
            options: ["None", "Brick", "Block", "Lightweight"]
        },
        "13": {
            question: "What structure (eg columns/walls) supports the Ground Floor?",
            description: "",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Ground floor structure",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "55",
            col_input: "4",
            options: ["Timber framing", "Lightweight steel", "Structural steel", "Concrete Block", "Concrete", "Brick (URM)"]
        },
        "14": {
            question: "What is the structure at Ground Floor Level?",
            description: "",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Ground floor support",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "55",
            col_input: "7",
            options: ["Timber trusses / joists", "Steel truss/beams", "Concrete beams / slab", "Concrete Block", "Other"]
        },
        "15": {
            question: "What structure (eg columns/walls) supports the First Floor?",
            description: "",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "First floor structure",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "54",
            col_input: "4",
            options: ["Timber framing", "Lightweight steel", "Structural steel", "Concrete Block", "Concrete", "Brick (URM)"]
        },
        "16": {
            question: "What is the structure at First Floor Level?",
            description: "",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "First floor support",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "54",
            col_input: "7",
            options: ["Timber trusses / joists", "Steel truss/beams", "Concrete beams / slab", "Concrete Block", "Other"]
        },
        "17": {
            question: "What structure (eg columns/walls) supports the Second Floor?",
            description: "",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Second floor structure",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "53",
            col_input: "4",
            options: ["Timber framing", "Lightweight steel", "Structural steel", "Concrete Block", "Concrete", "Brick (URM)"]
        },
        "18": {
            question: "What is the structure at Second Floor Level?",
            description: "",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Ground floor support",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "53",
            col_input: "7",
            options: ["Timber trusses / joists", "Steel truss/beams", "Concrete beams / slab", "Concrete Block", "Other"]
        },
        "19": {
            question: "What is the structure at Basement Floor Level?",
            description: "",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Basement floor support",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "56",
            col_input: "7",
            options: ["Timber trusses / joists", "Steel truss/beams", "Concrete beams / slab", "Concrete Block", "Earth", "Other"]
        },
        "20": {
            question: "What are the X-direction bracing walls made of at the Ground floor?",
            description: "",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Ground floor X-direction bracing walls",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "55",
            col_input: "5",
            options: ["Structural steel", "Ply", "Gib / Plasterboard", "Concrete Block", "Concrete", "Brick (URM)"]
        },
        "21": {
            question: "What are the Y-direction bracing walls made of at the Ground floor?",
            description: "",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Ground floor Y-direction bracing walls",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "55",
            col_input: "6",
            options: ["Structural steel ", "Ply ", "Gib / Plasterboard ", "Concrete Block ", "Concrete ", "Brick (URM) "]
        },
        "22": {
            question: "What are the X-direction bracing walls made of at the First floor?",
            description: "",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "First floor X-direction bracing walls",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "54",
            col_input: "5",
            options: ["Structural steel", "Ply", "Gib / Plasterboard", "Concrete Block", "Concrete", "Brick (URM)"]
        },
        "23": {
            question: "What are the Y-direction bracing walls made of at the First floor?",
            description: "",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "First floor Y-direction bracing walls",
            next_route: "option_question",
            current_route: "option_question",
            row_input: "54",
            col_input: "6",
            options: ["Structural steel ", "Ply ", "Gib / Plasterboard ", "Concrete Block ", "Concrete ", "Brick (URM) "]
        },
        "24": {
            question: "What are the X-direction bracing walls made of at the Second floor?",
            description: "",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Second floor X-direction bracing walls",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "53",
            col_input: "5",
            options: ["Structural steel", "Ply", "Gib / Plasterboard", "Concrete Block", "Concrete", "Brick (URM)"]
        },
        "25": {
            question: "What are the Y-direction bracing walls made of at the Second floor?",
            description: "",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Second floor Y-direction bracing walls",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "53",
            col_input: "6",
            options: ["Structural steel ", "Ply ", "Gib / Plasterboard ", "Concrete Block ", "Concrete ", "Brick (URM) "]
        },
        "26": {
            question: "What are the X-direction bracing walls made of at the Basement floor?",
            description: "",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Basement floor X-direction bracing walls",
            current_route: "option_question",
            next_route: "option_question",
            row_input: "56",
            col_input: "5",
            options: ["Structural steel", "Ply", "Gib / Plasterboard", "Concrete Block", "Concrete", "Brick (URM)"]
        },
        "27": {
            question: "What are the Y-direction bracing walls made of at the Basement floor?",
            description: "",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            route: "optionform",
            subject: "Basement floor Y-direction bracing walls",
            current_route: "option_question",
            next_route: "clad_question",
            row_input: "56",
            col_input: "6",
            options: ["Structural steel ", "Ply ", "Gib / Plasterboard ", "Concrete Block ", "Concrete ", "Brick (URM) "]
        },
        "28": {
            question: "What is the cladding on the roof?",
            description: "You can select more than one.",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            options: ["Steel sheet (Examples: Corrugated iron, long-run metal or similar weight)", "Heavy tiles (Examples: Clay, concrete or similar weight)", "Light tiles (Examples: Metal tiles, wooden shingles)", "Membrane roof (Example: Torch-on membrane on plywood sheets)", "Concrete slab with waterproof coating or membrane."],
            route: "cladform",
            subject: "Roof cladding",
            current_route: "check_question",
            next_route: "clad_question",
            inputs: {
                "Steel sheet (Examples: Corrugated iron, long-run metal or similar weight)": {
                    row_input: "37",
                    col_input: "4"
                },
                "Heavy tiles (Examples: Clay, concrete or similar weight)": {
                    row_input: "37",
                    col_input: "5"
                },
                "Light tiles (Examples: Metal tiles, wooden shingles)": {
                    row_input: "37",
                    col_input: "6"
                },
                "Membrane roof (Example: Torch-on membrane on plywood sheets)": {
                    row_input: "37",
                    col_input: "7"
                },
                "Concrete slab with waterproof coating or membrane.": {
                    row_input: "37",
                    col_input: "8"
                }
            }
        },
        "29": {
            question: "What cladding materials are used on the Ground Floor?",
            description: "You can select more than one.",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            options: ["Concrete ", "Timber (Example: weatherboards) ", "Concrete block ", "Brick or brick veneer ", "Stucco / Monolithic or similar "],
            route: "cladform",
            subject: "Ground floor cladding",
            current_route: "check_question",
            next_route: "clad_question",
            inputs: {
                Concrete: {
                    row_input: "42",
                    col_input: "4"
                },
                "Timber (Example: weatherboards)": {
                    row_input: "42",
                    col_input: "5"
                },
                "Concrete block": {
                    row_input: "42",
                    col_input: "6"
                },
                "Brick or brick veneer": {
                    row_input: "42",
                    col_input: "7"
                },
                "Stucco / Monolithic or similar": {
                    row_input: "42",
                    col_input: "8"
                }
            }
        },
        "30": {
            question: "What cladding materials are used on the First Floor?",
            description: "You can select more than one.",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            options: ["Concrete", "Timber (Example: weatherboards)", "Concrete block", "Brick or brick veneer", "Stucco / Monolithic or similar"],
            route: "cladform",
            subject: "First floor cladding",
            current_route: "check_question",
            next_route: "clad_question",
            inputs: {
                Concrete: {
                    row_input: "42",
                    col_input: "4"
                },
                "Timber (Example: weatherboards)": {
                    row_input: "42",
                    col_input: "5"
                },
                "Concrete block": {
                    row_input: "42",
                    col_input: "6"
                },
                "Brick or brick veneer": {
                    row_input: "42",
                    col_input: "7"
                },
                "Stucco / Monolithic or similar": {
                    row_input: "42",
                    col_input: "8"
                }
            }
        },
        "31": {
            question: "What cladding materials are used on the Second Floor?",
            description: "You can select more than one.",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            options: ["Concrete ", "Timber (Example: weatherboards) ", "Concrete block ", "Brick or brick veneer ", "Stucco / Monolithic or similar "],
            route: "cladform",
            subject: "Second floor cladding",
            current_route: "check_question",
            next_route: "clad_question",
            inputs: {
                Concrete: {
                    row_input: "42",
                    col_input: "4"
                },
                "Timber (Example: weatherboards)": {
                    row_input: "42",
                    col_input: "5"
                },
                "Concrete block": {
                    row_input: "42",
                    col_input: "6"
                },
                "Brick or brick veneer": {
                    row_input: "42",
                    col_input: "7"
                },
                "Stucco / Monolithic or similar": {
                    row_input: "42",
                    col_input: "8"
                }
            }
        },
        "32": {
            question: "What cladding materials are used on the Basement Floor?",
            description: "You can select more than one.",
            img: {
                title: "",
                img_name: "Quakestar_280px.png"
            },
            options: ["Concrete", "Timber (Example: weatherboards)", "Concrete block", "Brick or brick veneer", "Stucco / Monolithic or similar"],
            route: "cladform",
            subject: "Basement floor cladding",
            current_route: "check_question",
            next_route: "text_question",
            inputs: {
                Concrete: {
                    row_input: "42",
                    col_input: "4"
                },
                "Timber (Example: weatherboards)": {
                    row_input: "42",
                    col_input: "5"
                },
                "Concrete block": {
                    row_input: "42",
                    col_input: "6"
                },
                "Brick or brick veneer": {
                    row_input: "42",
                    col_input: "7"
                },
                "Stucco / Monolithic or similar": {
                    row_input: "42",
                    col_input: "8"
                }
            }
        },
        "33": {
            question: "What is the area of the Ground Floor in square metres?",
            description: "Enter two dimensions to define the approximate area of each floor.  For example entering 10 in X and 12 in Y will mean 120 sq m of floor area.  It does not matter what the actual shape of the floor is – as long as the total areas match.",
            img: {
                title: "",
                img_name: "Floor_area.png"
            },
            route: "textform",
            subject: "Ground floor area",
            current_route: "text_question",
            next_route: "text_question",
            x: {
                row_input: "67",
                col_input: "5"
            },
            y: {
                row_input: "67",
                col_input: "6"
            }
        },
        "34": {
            question: "What is the area of the First Floor in square metres?",
            description: "Enter two dimensions to define the approximate area of each floor.  For example entering 10 in X and 12 in Y will mean 120 sq m of floor area.  It does not matter what the actual shape of the floor is – as long as the total areas match.",
            img: {
                title: "",
                img_name: "Floor_area.png"
            },
            route: "textform",
            subject: "First floor area",
            current_route: "text_question",
            next_route: "text_question",
            x: {
                row_input: "66",
                col_input: "6"
            },
            y: {
                row_input: "66",
                col_input: "6"
            }
        },
        "35": {
            question: "What is the area of the Second Floor in square metres?",
            description: "Enter two dimensions to define the approximate area of each floor.  For example entering 10 in X and 12 in Y will mean 120 sq m of floor area.  It does not matter what the actual shape of the floor is – as long as the total areas match.",
            img: {
                title: "",
                img_name: "Floor_area.png"
            },
            route: "textform",
            subject: "Second floor area",
            current_route: "text_question",
            next_route: "text_question",
            x: {
                row_input: "65",
                col_input: "6"
            },
            y: {
                row_input: "65",
                col_input: "6"
            }
        },
        "36": {
            question: "What is the area of the Basement Floor in square metres?",
            description: "Enter two dimensions to define the approximate area of each floor.  For example entering 10 in X and 12 in Y will mean 120 sq m of floor area.  It does not matter what the actual shape of the floor is – as long as the total areas match.",
            img: {
                title: "",
                img_name: "Floor_area.png"
            },
            route: "textform",
            subject: "Basement floor area",
            current_route: "text_question",
            next_route: "text_question",
            x: {
                row_input: "68",
                col_input: "6"
            },
            y: {
                row_input: "68",
                col_input: "6"
            }
        },
        "37": {
            question: "What is the area of the Roof in square metres?",
            description: "Enter two dimensions to define the approximate area of each floor.  For example entering 10 in X and 12 in Y will mean 120 sq m of floor area.  It does not matter what the actual shape of the floor is – as long as the total areas match.",
            img: {
                title: "",
                img_name: "Floor_area.png"
            },
            route: "textform",
            subject: "Roof area",
            current_route: "text_question",
            next_route: "text_question",
            x: {
                row_input: "64",
                col_input: "5"
            },
            y: {
                row_input: "64",
                col_input: "6"
            }
        },
        "38": {
            question: "What is the total length of all bracing walls at Ground level in metres?",
            description: "Choose a direction parallel to any selected wall. Call that Direction X. Direction Y is at right angles. For each floor, add up the total length of full-height walls in each direction. They must be longer than 1 metre with no windows, doors or large holes. These walls will help brace your house to resist earthquake loads. Enter the total length in each direction (X and Y) for each floor.",
            img: {
                title: "",
                img_name: "Walls.png"
            },
            route: "textform",
            subject: "Length of Ground floor bracing walls",
            current_route: "text_question",
            next_route: "text_question",
            x: {
                row_input: "74",
                col_input: "5"
            },
            y: {
                row_input: "74",
                col_input: "6"
            }
        },
        "39": {
            question: "What is the total length of all bracing walls at the First level in metres?",
            description: "Choose a direction parallel to any selected wall. Call that Direction X. Direction Y is at right angles. For each floor, add up the total length of full-height walls in each direction. They must be longer than 1 metre with no windows, doors or large holes. These walls will help brace your house to resist earthquake loads. Enter the total length in each direction (X and Y) for each floor.",
            img: {
                title: "",
                img_name: "Walls.png"
            },
            route: "textform",
            subject: "Length of First floor bracing walls",
            current_route: "text_question",
            next_route: "text_question",
            x: {
                row_input: "73",
                col_input: "5"
            },
            y: {
                row_input: "73",
                col_input: "6"
            }
        },
        "40": {
            question: "What is the total length of all bracing walls at the Second level in metres?",
            description: "Choose a direction parallel to any selected wall. Call that Direction X. Direction Y is at right angles. For each floor, add up the total length of full-height walls in each direction. They must be longer than 1 metre with no windows, doors or large holes. These walls will help brace your house to resist earthquake loads. Enter the total length in each direction (X and Y) for each floor.",
            img: {
                title: "",
                img_name: "Walls.png"
            },
            route: "textform",
            subject: "Length of Second floor bracing walls",
            current_route: "text_question",
            next_route: "text_question",
            x: {
                row_input: "72",
                col_input: "5"
            },
            y: {
                row_input: "72",
                col_input: "6"
            }
        },
        "41": {
            question: "What is the total length of all bracing walls at the Basement level in metres?",
            description: "Choose a direction parallel to any selected wall. Call that Direction X. Direction Y is at right angles. For each floor, add up the total length of full-height walls in each direction. They must be longer than 1 metre with no windows, doors or large holes. These walls will help brace your house to resist earthquake loads. Enter the total length in each direction (X and Y) for each floor.",
            img: {
                title: "",
                img_name: "Walls.png"
            },
            route: "textform",
            subject: "Length of Basement floor bracing walls",
            current_route: "text_question",
            next_route: "results",
            x: {
                row_input: "75",
                col_input: "5"
            },
            y: {
                row_input: "75",
                col_input: "6"
            }
        },
        "42": {
            question: "Are your bracing walls off-centre at any level? ",
            description: "Think about each level and each direction and select the worst off-centre situation. Regular: bracing walls in both directions are well distributed - not mostly on one side.   Moderate: bracing walls significantly off centre in at least one direction.   Severe: bracing walls mostly on one side in at least one direction.",
            img: {
                title: "",
                img_name: ""
            },
            route: "option_question",
            subject: "Irregularities",
            current_route: "option_question",
            next_route: "results",
            options: ["Regular", "Moderate", "Severe"]

        },
        "43": {
            question: "",
            description: "",
            img: {
                title: "",
                img_name: ""
            },
            route: "results",
            current_route: "results",
         

        }
    }
}