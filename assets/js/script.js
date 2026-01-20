const aircrafts = [
    {
        id: 101,
        name: "F-22 Raptor",
        country: "USA",
        region: "american",
        price: "$150,000,000",
        image: "assets/images/aircrafts/f22.png",
        description: "Stealth Air Superiority Fighter. The ultimate air dominance fighter.",
        status: "In Stock"
    },
    {
        id: 102,
        name: "F-35 Lightning II",
        country: "USA",
        region: "american",
        price: "$80,000,000",
        image: "assets/images/aircrafts/f35.png",
        description: "Stealth Multirole Fighter. Advanced sensor fusion and stealth.",
        status: "In Stock"
    },
    {
        id: 103,
        name: "F-15 Eagle / Strike Eagle",
        country: "USA",
        region: "american",
        price: "$100,000,000",
        image: "assets/images/aircrafts/F15.png",
        description: "Air Superiority/Strike Fighter. Legendary combat record.",
        status: "In Stock"
    },
    {
        id: 104,
        name: "F-16 Fighting Falcon",
        country: "USA",
        region: "american",
        price: "$60,000,000",
        image: "assets/images/aircrafts/f16.png",
        description: "Multirole Fighter. The world's most popular fighter.",
        status: "In Stock"
    },
    {
        id: 105,
        name: "A-10 Thunderbolt II",
        country: "USA",
        region: "american",
        price: "$45,000,000",
        image: "assets/images/aircrafts/A10.png",
        description: "Close Air Support/Ground Attack. Famous for its GAU-8 Avenger cannon.",
        status: "In Stock"
    },
    {
        id: 106,
        name: "B-2 Spirit",
        country: "USA",
        region: "american",
        price: "$2,000,000,000",
        image: "assets/images/aircrafts/B2.png",
        description: "Stealth Strategic Bomber. Capable of penetrating dense air defenses.",
        status: "In Stock"
    },
    {
        id: 107,
        name: "B-52 Stratofortress",
        country: "USA",
        region: "american",
        price: "$84,000,000",
        image: "assets/images/aircrafts/B52.png",
        description: "Strategic Heavy Bomber. Long-range subsonic jet-powered strategic bomber.",
        status: "In Stock"
    },
    {
        id: 108,
        name: "C-17 Globemaster III",
        country: "USA",
        region: "american",
        price: "$218,000,000",
        image: "assets/images/aircrafts/C17.png",
        description: "Strategic Transport. Large military transport aircraft.",
        status: "In Stock"
    },
    {
        id: 109,
        name: "AH-64 Apache",
        country: "USA",
        region: "american",
        price: "$50,000,000",
        image: "assets/images/aircrafts/Apache.png",
        description: "Attack Helicopter. The world's most advanced multi-role combat helicopter.",
        status: "In Stock"
    },
    {
        id: 110,
        name: "F/A-18 Super Hornet",
        country: "USA",
        region: "american",
        price: "$70,000,000",
        image: "assets/images/aircrafts/FA 18.png",
        description: "Twin-engine carrier-capable multirole fighter. The backbone of the US Navy carrier air wing.",
        status: "In Stock"
    },

    // 2. Russia
    {
        id: 201,
        name: "Sukhoi Su-57",
        country: "Russia",
        region: "russian",
        price: "$100,000,000",
        image: "assets/images/aircrafts/Su57.png",
        description: "Stealth Multirole Fighter. Fifth-generation fighter aircraft.",
        status: "In Stock"
    },
    {
        id: 202,
        name: "Sukhoi Su-35",
        country: "Russia",
        region: "russian",
        price: "$85,000,000",
        image: "assets/images/aircrafts/Su35.png",
        description: "Air Superiority Fighter. Flanker-E, super-maneuverable.",
        status: "In Stock"
    },
    {
        id: 203,
        name: "Sukhoi Su-34",
        country: "Russia",
        region: "russian",
        price: "$36,000,000",
        image: "assets/images/aircrafts/Su34.png",
        description: "Fighter-Bomber/Strike Aircraft. Designed for tactical deployment.",
        status: "In Stock"
    },
    {
        id: 204,
        name: "MiG-31 Foxhound",
        country: "Russia",
        region: "russian",
        price: "$60,000,000",
        image: "assets/images/aircrafts/Mig31.png",
        description: "Supersonic Interceptor. One of the fastest combat jets in the world.",
        status: "In Stock"
    },
    {
        id: 205,
        name: "Tupolev Tu-160",
        country: "Russia",
        region: "russian",
        price: "$270,000,000",
        image: "assets/images/aircrafts/Tu160.png",
        description: "Supersonic Strategic Bomber. The 'White Swan'.",
        status: "In Stock"
    },
    {
        id: 206,
        name: "Tupolev Tu-95",
        country: "Russia",
        region: "russian",
        price: "$30,000,000",
        image: "assets/images/aircrafts/Tu95.png",
        description: "Strategic Turboprop Bomber. Distinctive contra-rotating propellers.",
        status: "In Stock"
    },
    {
        id: 207,
        name: "Ilyushin Il-76",
        country: "Russia",
        region: "russian",
        price: "$50,000,000",
        image: "assets/images/aircrafts/Ilyushin Il-76.png",
        description: "Strategic Airlifter. Heavy transport aircraft.",
        status: "In Stock"
    },
    {
        id: 208,
        name: "Kamov Ka-52 Alligator",
        country: "Russia",
        region: "russian",
        price: "$16,000,000",
        image: "assets/images/aircrafts/Kamov Ka-52 Alligator.png",
        description: "Attack Helicopter. Distinctive coaxial rotor system.",
        status: "In Stock"
    },
    {
        id: 209,
        name: "Mil Mi-28 Havoc",
        country: "Russia",
        region: "russian",
        price: "$18,000,000",
        image: "assets/images/aircrafts/Mil MI28.png",
        description: "Attack Helicopter. Anti-armor attack helicopter.",
        status: "In Stock"
    },
    {
        id: 210,
        name: "Mil Mi-24/35 Hind",
        country: "Russia",
        region: "russian",
        price: "$12,000,000",
        image: "assets/images/aircrafts/Mil Mi-24.png",
        description: "Attack Helicopter/Transport Gunship. The 'Flying Tank'.",
        status: "In Stock"
    },

    // 3. India
    {
        id: 301,
        name: "HAL Tejas",
        country: "India",
        region: "indian",
        price: "$40,000,000",
        image: "assets/images/aircrafts/HAL Tejas.png",
        description: "Indigenous Light Combat Aircraft. Delta wing multirole fighter.",
        status: "In Stock"
    },
    {
        id: 302,
        name: "Sukhoi Su-30MKI",
        country: "India",
        region: "indian",
        price: "$60,000,000",
        image: "assets/images/aircrafts/Su30 MKI.png",
        description: "Air Superiority Fighter. Indian variant with thrust vectoring.",
        status: "In Stock"
    },
    {
        id: 303,
        name: "Dassault Rafale (Indian)",
        country: "India",
        region: "indian",
        price: "$115,000,000",
        image: "assets/images/aircrafts/Dassault Rafale (Indian).png",
        description: "Multirole Fighter. customized for Indian requirements.",
        status: "In Stock"
    },
    {
        id: 304,
        name: "SEPECAT Jaguar",
        country: "India",
        region: "indian",
        price: "$20,000,000",
        image: "assets/images/aircrafts/SEPECAT Jaguar.png",
        description: "Deep Penetration Strike Aircraft. Specialized ground attack.",
        status: "In Stock"
    },
    {
        id: 305,
        name: "HAL Prachand",
        country: "India",
        region: "indian",
        price: "$15,000,000",
        image: "assets/images/aircrafts/HAL Prachand.png",
        description: "Indigenous Light Combat Helicopter. High-altitude warfare capable.",
        status: "In Stock"
    },
    {
        id: 306,
        name: "HAL Dhruv",
        country: "India",
        region: "indian",
        price: "$10,000,000",
        image: "assets/images/aircrafts/HAL Dhruv.png",
        description: "Indigenous Utility Helicopter. Advanced multi-role helicopter.",
        status: "In Stock"
    },
    {
        id: 307,
        name: "Netra AEW&C",
        country: "India",
        region: "indian",
        price: "$80,000,000",
        image: "assets/images/aircrafts/Netra AEW&C.png",
        description: "Indigenous Airborne Early Warning. Mounted on Embraer platform.",
        status: "In Stock"
    },
    {
        id: 308,
        name: "HAL Kiran",
        country: "India",
        region: "indian",
        price: "$5,000,000",
        image: "assets/images/aircrafts/HAL Kiran.png",
        description: "Intermediate Jet Trainer. Used for training pilots.",
        status: "In Stock"
    },
    {
        id: 309,
        name: "HAL AMCA",
        country: "India",
        region: "indian",
        price: "$110,000,000 (Est)",
        image: "assets/images/aircrafts/AMCA.png",
        description: "Indigenous Advanced Medium Combat Aircraft. 5th Gen Stealth Multirole Fighter.",
        status: "Coming Soon"
    },
    {
        id: 310,
        name: "DRDO Rustom-II (Tapas)",
        country: "India",
        region: "indian",
        price: "$15,000,000",
        image: "assets/images/aircrafts/DRDO Rustom-II (Tapas).png",
        description: "Indigenous MALE UAV. Currently in development/testing.",
        status: "In Stock"
    },

    // 4. France (European)
    {
        id: 401,
        name: "Dassault Rafale",
        country: "France",
        region: "european",
        price: "$115,000,000",
        image: "assets/images/aircrafts/Dassault Rafale.png",
        description: "Omnirole Fighter. Operated by Air Force & Navy.",
        status: "In Stock"
    },
    {
        id: 402,
        name: "Dassault Mirage 2000D/5",
        country: "France",
        region: "european",
        price: "$30,000,000",
        image: "assets/images/aircrafts/Dassault Mirage 2000D.png",
        description: "Multirole Fighter. Iconic delta wing design.",
        status: "In Stock"
    },
    {
        id: 403,
        name: "Airbus A330 MRTT",
        country: "France",
        region: "european",
        price: "$250,000,000",
        image: "assets/images/aircrafts/Airbus A330 MRTT.png",
        description: "Multi-Role Tanker Transport. Aerial refueling and transport.",
        status: "In Stock"
    },
    {
        id: 404,
        name: "Airbus A400M Atlas",
        country: "France",
        region: "european",
        price: "$180,000,000",
        image: "assets/images/aircrafts/Airbus A400M Atlas.png",
        description: "Tactical/Strategic Airlifter. Modern military transport.",
        status: "In Stock"
    },
    {
        id: 405,
        name: "Breguet Atlantique 2",
        country: "France",
        region: "european",
        price: "$50,000,000",
        image: "assets/images/aircrafts/Breguet Atlantique 2.png",
        description: "Maritime Patrol. Long-range patrol aircraft.",
        status: "In Stock"
    },
    {
        id: 406,
        name: "Eurocopter Tiger",
        country: "France",
        region: "european",
        price: "$40,000,000",
        image: "assets/images/aircrafts/Eurocopter Tiger.png",
        description: "Attack Helicopter. Advanced European attack helicopter.",
        status: "In Stock"
    },
    {
        id: 407,
        name: "NHIndustries NH90",
        country: "France",
        region: "european",
        price: "$45,000,000",
        image: "assets/images/aircrafts/NHIndustries NH90.png",
        description: "Utility/Naval Helicopter. Modern multi-role helicopter.",
        status: "In Stock"
    },
    {
        id: 408,
        name: "Dassault-Breguet Alpha Jet",
        country: "France",
        region: "european",
        price: "$10,000,000",
        image: "assets/images/aircrafts/Dassault-Breguet Alpha Jet.png",
        description: "Advanced Trainer/Light Attack. Co-developed with Germany.",
        status: "In Stock"
    },
    {
        id: 409,
        name: "Boeing E-3F Sentry",
        country: "France",
        region: "european",
        price: "$270,000,000",
        image: "assets/images/aircrafts/Boeing E-3F Sentry.png",
        description: "AWACS. French specific systems.",
        status: "In Stock"
    },
    {
        id: 410,
        name: "Eurocopter AS532 Cougar",
        country: "France",
        region: "european",
        price: "$25,000,000",
        image: "assets/images/aircrafts/Eurocopter AS532 Cougar.png",
        description: "Transport Helicopter. Military version of Super Puma.",
        status: "In Stock"
    },

    // 5. United Kingdom (European)
    {
        id: 501,
        name: "Eurofighter Typhoon FGR4",
        country: "United Kingdom",
        region: "european",
        price: "$117,000,000",
        image: "assets/images/aircrafts/Eurofighter Typhoon FGR4.png",
        description: "Multirole Fighter. The backbone of RAF combat air power.",
        status: "In Stock"
    },
    {
        id: 502,
        name: "F-35B Lightning II",
        country: "United Kingdom",
        region: "european",
        price: "$115,000,000",
        image: "assets/images/aircrafts/F-35B Lightning II.png",
        description: "STOVL Stealth Fighter. Operated from Queen Elizabeth class carriers.",
        status: "In Stock"
    },
    {
        id: 503,
        name: "BAE Systems Hawk T2",
        country: "United Kingdom",
        region: "european",
        price: "$25,000,000",
        image: "assets/images/aircrafts/BAE Systems Hawk T2.png",
        description: "Advanced Jet Trainer. Used for training fast-jet pilots.",
        status: "In Stock"
    },
    {
        id: 504,
        name: "Boeing Chinook",
        country: "United Kingdom",
        region: "european",
        price: "$38,000,000",
        image: "assets/images/aircrafts/Boeing Chinook.png",
        description: "Heavy-lift Helicopter. Distinctive tandem rotor heavy lift.",
        status: "In Stock"
    },
    {
        id: 505,
        name: "AgustaWestland Apache AH-64E",
        country: "United Kingdom",
        region: "european",
        price: "$50,000,000",
        image: "assets/images/aircrafts/AgustaWestland Apache AH-64E.png",
        description: "Attack Helicopter. Latest standard of the Apache.",
        status: "In Stock"
    },
    {
        id: 506,
        name: "Airbus Voyager",
        country: "United Kingdom",
        region: "european",
        price: "$200,000,000",
        image: "assets/images/aircrafts/Airbus Voyager.png",
        description: "Tanker/Transport. Military version of A330.",
        status: "In Stock"
    },
    {
        id: 507,
        name: "Boeing RC-135W Rivet Joint",
        country: "United Kingdom",
        region: "european",
        price: "$220,000,000",
        image: "assets/images/aircrafts/Boeing RC-135W Rivet Joint.png",
        description: "Signals Intelligence. Strategic sensing platform.",
        status: "In Stock"
    },
    {
        id: 508,
        name: "Boeing P-8A Poseidon",
        country: "United Kingdom",
        region: "european",
        price: "$175,000,000",
        image: "assets/images/aircrafts/Boeing P-8A Poseidon.png",
        description: "Maritime Patrol. Anti-submarine and anti-surface warfare.",
        status: "In Stock"
    },
    {
        id: 509,
        name: "AgustaWestland AW159 Wildcat",
        country: "United Kingdom",
        region: "european",
        price: "$35,000,000",
        image: "assets/images/aircrafts/AgustaWestland AW159 Wildcat.png",
        description: "Naval/Utility Helicopter. Developed from the Lynx.",
        status: "In Stock"
    },
    {
        id: 510,
        name: "Beechcraft Shadow R1",
        country: "United Kingdom",
        region: "european",
        price: "$15,000,000",
        image: "assets/images/aircrafts/Beechcraft Shadow R1.png",
        description: "ISTAR aircraft. Intelligence, Surveillance, Target Acquisition.",
        status: "In Stock"
    },

    // 6. China
    {
        id: 601,
        name: "Chengdu J-20",
        country: "China",
        region: "chinese",
        price: "$110,000,000",
        image: "assets/images/aircrafts/Chengdu J-20.png",
        description: "Stealth Air Superiority Fighter. Mighty Dragon.",
        status: "In Stock"
    },
    {
        id: 602,
        name: "Chengdu J-10C",
        country: "China",
        region: "chinese",
        price: "$45,000,000",
        image: "assets/images/aircrafts/Chengdu J-10C.png",
        description: "Multirole Fighter. Vigorous Dragon.",
        status: "In Stock"
    },
    {
        id: 603,
        name: "Shenyang J-16",
        country: "China",
        region: "chinese",
        price: "$80,000,000",
        image: "assets/images/aircrafts/Shenyang J-16.png",
        description: "Strike Fighter. Hidden Dragon.",
        status: "In Stock"
    },
    {
        id: 604,
        name: "Shenyang J-15",
        country: "China",
        region: "chinese",
        price: "$65,000,000",
        image: "assets/images/aircrafts/Shenyang J-15.png",
        description: "Carrier-based Fighter. Flying Shark.",
        status: "In Stock"
    },
    {
        id: 605,
        name: "Xian H-6K",
        country: "China",
        region: "chinese",
        price: "$40,000,000",
        image: "assets/images/aircrafts/Xian H-6K.png",
        description: "Strategic Bomber. Modernized version of Tu-16.",
        status: "In Stock"
    },
    {
        id: 606,
        name: "Xian Y-20",
        country: "China",
        region: "chinese",
        price: "$160,000,000",
        image: "assets/images/aircrafts/Xian Y-20.png",
        description: "Strategic Heavy Transport. Chubby Girl.",
        status: "In Stock"
    },
    {
        id: 607,
        name: "Shaanxi KJ-500",
        country: "China",
        region: "chinese",
        price: "$100,000,000",
        image: "assets/images/aircrafts/Shaanxi KJ-500.png",
        description: "Airborne Early Warning & Control. Fixed radar dish.",
        status: "In Stock"
    },
    {
        id: 608,
        name: "CAIC Z-10",
        country: "China",
        region: "chinese",
        price: "$20,000,000",
        image: "assets/images/aircrafts/CAIC Z-10.png",
        description: "Attack Helicopter. Fierce Thunderbolt.",
        status: "In Stock"
    },
    {
        id: 609,
        name: "Harbin Z-20",
        country: "China",
        region: "chinese",
        price: "$15,000,000",
        image: "assets/images/aircrafts/Harbin Z-20.png",
        description: "Utility Helicopter. Divine Eagle.",
        status: "In Stock"
    },
    {
        id: 610,
        name: "Xian JH-7",
        country: "China",
        region: "chinese",
        price: "$30,000,000",
        image: "assets/images/aircrafts/Xian JH-7.png",
        description: "Fighter-Bomber. Flying Leopard.",
        status: "In Stock"
    },

    // 7. Europe (Pan-European & Others)
    {
        id: 701,
        name: "Eurofighter Typhoon",
        country: "Europe (Joint)",
        region: "european",
        price: "$117,000,000",
        image: "assets/images/aircrafts/Eurofighter Typhoon.png",
        description: "Joint project: UK, Germany, Italy, Spain. Swing-role combat aircraft.",
        status: "In Stock"
    },
    {
        id: 702,
        name: "Panavia Tornado",
        country: "Europe (Joint)",
        region: "european",
        price: "$50,000,000",
        image: "assets/images/aircrafts/Panavia Tornado.png",
        description: "Variable-sweep wing fighter. Ground attack specialist.",
        status: "In Stock"
    },
    {
        id: 703,
        name: "Saab JAS 39 Gripen",
        country: "Sweden",
        region: "european",
        price: "$60,000,000",
        image: "assets/images/aircrafts/Saab JAS 39 Gripen.png",
        description: "Multirole Fighter. Cost-effective and versatile.",
        status: "In Stock"
    },
    {
        id: 704,
        name: "Saab GlobalEye",
        country: "Sweden",
        region: "european",
        price: "$240,000,000",
        image: "assets/images/aircrafts/Saab GlobalEye.png",
        description: "Airborne Early Warning & Control. Erieye ER radar.",
        status: "In Stock"
    },
    {
        id: 705,
        name: "Leonardo M-346 Master",
        country: "Italy",
        region: "european",
        price: "$25,000,000",
        image: "assets/images/aircrafts/Leonardo M-346 Master.png",
        description: "Advanced Jet Trainer. Transonic advanced trainer.",
        status: "In Stock"
    },
    {
        id: 706,
        name: "Leonardo AW101 Merlin",
        country: "Italy/UK",
        region: "european",
        price: "$40,000,000",
        image: "assets/images/aircrafts/Leonardo AW101 Merlin.png",
        description: "Heavy Utility/Naval Helicopter. Search and rescue operations.",
        status: "In Stock"
    },
    {
        id: 707,
        name: "Airbus C-295",
        country: "Spain",
        region: "european",
        price: "$28,000,000",
        image: "assets/images/aircrafts/Airbus C-295.png",
        description: "Tactical Transport. Versatile turboprop transport.",
        status: "In Stock"
    },
    {
        id: 708,
        name: "Aero L-159 ALCA",
        country: "Czech Republic",
        region: "european",
        price: "$14,000,000",
        image: "assets/images/aircrafts/Aero L-159 ALCA.png",
        description: "Light Attack/Trainer. Advanced Light Combat Aircraft.",
        status: "In Stock"
    },
    {
        id: 709,
        name: "Pilatus PC-21",
        country: "Switzerland",
        region: "european",
        price: "$10,000,000",
        image: "assets/images/aircrafts/Pilatus PC-21.png",
        description: "Advanced Turboprop Trainer. Jet-like handling.",
        status: "In Stock"
    },
    {
        id: 710,
        name: "nEUROn",
        country: "Europe (Pan-European)",
        region: "european",
        price: "$N/A (Prototype)",
        image: "assets/images/aircrafts/nEUROn.png",
        description: "Experimental Unmanned Combat Aerial Vehicle. Stealth UCAV demonstrator.",
        status: "Coming Soon"
    }
];

// Login Handling
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        if (name && email) {
            // Validation: Must contain '@' and at least one letter
            const hasAtSymbol = email.includes('@');
            const hasLetter = /[a-zA-Z]/.test(email);

            if (!hasAtSymbol || !hasLetter) {
                alert('Please enter a valid email address containing "@" and at least one letter.');
                return;
            }

            const userProfile = {
                name: name,
                email: email
            };
            localStorage.setItem('user_profile', JSON.stringify(userProfile));
            window.location.href = 'index.html';
        }
    });
}

// Listing Handling
const grid = document.getElementById('aircraftGrid');
const filterBtns = document.querySelectorAll('.filter-btn');

function renderAircrafts(filter = 'all') {
    if (!grid) return;

    grid.innerHTML = '';

    const filtered = filter === 'all' ? aircrafts : aircrafts.filter(craft => craft.region === filter);

    filtered.forEach(craft => {
        const card = document.createElement('div');
        card.className = 'card';
        let buttonHtml;
        let badgeClass = 'badge';

        if (craft.status === 'Coming Soon') {
            buttonHtml = `<button class="btn btn-primary" disabled style="opacity: 0.5; cursor: not-allowed;">Coming Soon</button>`;
            badgeClass += ' badge-warning';
        } else {
            buttonHtml = `<button class="btn btn-primary" onclick="addToCart(${craft.id})">Add to Cart</button>`;
        }
        const imgSrc = craft.image;

        card.innerHTML = `
            <div class="card-image-container">
                <img src="${imgSrc}" alt="${craft.name}" class="card-img" onerror="this.onerror=null; this.src='https://placehold.co/600x400/0a0a15/00d4ff?text=${craft.name.replace(/[^a-zA-Z0-9]/g, '+')}'">
            </div>
            <div class="card-body">
                <div class="card-country">${craft.country}</div>
                <h3 class="card-title">${craft.name}</h3>
                <div class="card-price">${craft.price}</div>
                <p style="color: #a0a0b0; font-size: 0.9rem; margin-bottom: 1rem; min-height: 40px;">${craft.description}</p>
                <div class="card-actions">
                    ${buttonHtml}
                    <span class="${badgeClass}">${craft.status}</span>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}
if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');
            renderAircrafts(filterValue);
        });
    });
}
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('aircraftGrid')) {
        renderAircrafts();
    }

    // Profile Page Handling
    const profileName = document.getElementById('profileName');
    const profileEmail = document.getElementById('profileEmail');

    if (profileName && profileEmail) {
        const storedProfile = localStorage.getItem('user_profile');
        if (storedProfile) {
            const profile = JSON.parse(storedProfile);
            profileName.textContent = profile.name;
            profileEmail.textContent = profile.email;
        } else {
            // Redirect to login if not logged in
            window.location.href = 'login.html';
        }


    }

    // Logout Handling (for all buttons)
    const allLogoutBtns = document.querySelectorAll('.logout-btn');
    allLogoutBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            localStorage.removeItem('user_profile');
            window.location.href = 'login.html';
        });
    });



    // Cart Logic
    const cartBtn = document.getElementById('cartBtn');
    const cartModal = document.getElementById('cartModal');
    const closeCartBtn = document.querySelector('.cart-close');
    const cartItemsContainer = document.getElementById('cartItemsContainer');
    const checkoutBtn = document.getElementById('checkoutBtn');
    const cartCount = document.getElementById('cartCount');

    // Load Cart
    let cart = JSON.parse(localStorage.getItem('user_cart')) || [];
    updateCartCount();

    if (cartBtn && cartModal) {
        cartBtn.addEventListener('click', () => {
            updateCartUI();
            cartModal.classList.add('active');
        });

        if (closeCartBtn) {
            closeCartBtn.addEventListener('click', () => {
                cartModal.classList.remove('active');
            });
        }
    }

    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) {
                alert('Your cart is empty!');
                return;
            }
            alert('Thank you for your purchase! Your fleet is on its way.');
            cart = [];
            localStorage.setItem('user_cart', JSON.stringify(cart));
            updateCartUI();
            updateCartCount();
            cartModal.classList.remove('active');
        });
    }

    window.addToCart = function (id) {
        const aircraft = aircrafts.find(a => a.id === id);
        if (aircraft) {
            cart.push(aircraft);
            localStorage.setItem('user_cart', JSON.stringify(cart));
            updateCartCount();
            alert(`${aircraft.name} added to cart!`);
        }
    };

    window.removeFromCart = function (index) {
        cart.splice(index, 1);
        localStorage.setItem('user_cart', JSON.stringify(cart));
        updateCartUI();
        updateCartCount();
    };

    function updateCartCount() {
        if (cartCount) {
            cartCount.textContent = cart.length;
        }
    }

    function parsePrice(priceStr) {
        return parseInt(priceStr.replace(/[^0-9]/g, '')) || 0;
    }

    function formatPrice(price) {
        return '$' + price.toLocaleString();
    }

    function updateCartUI() {
        if (!cartItemsContainer) return;

        cartItemsContainer.innerHTML = '';
        let subtotal = 0;

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p style="text-align: center; color: var(--text-muted); margin: 2rem 0;">Your cart is empty.</p>';
        } else {
            cart.forEach((item, index) => {
                const itemPrice = parsePrice(item.price);
                subtotal += itemPrice;

                const itemEl = document.createElement('div');
                itemEl.className = 'cart-item';
                itemEl.innerHTML = `
                    <div class="cart-item-info">
                        <h4>${item.name}</h4>
                        <div class="cart-item-price">${item.price}</div>
                    </div>
                    <button class="remove-item-btn" onclick="removeFromCart(${index})">Remove</button>
                `;
                cartItemsContainer.appendChild(itemEl);
            });
        }

        const cartSubtotal = document.getElementById('cartSubtotal');
        const cartDiscountRow = document.getElementById('cartDiscountRow');
        const cartDiscount = document.getElementById('cartDiscount');
        const cartFinalTotal = document.getElementById('cartFinalTotal');

        if (cartSubtotal) cartSubtotal.textContent = formatPrice(subtotal);

        let finalTotal = subtotal;
        let discount = 0;

        if (subtotal > 100000000) {
            discount = subtotal * 0.10;
            finalTotal = subtotal - discount;
            if (cartDiscountRow) cartDiscountRow.style.display = 'flex';
            if (cartDiscount) cartDiscount.textContent = '-' + formatPrice(discount);
        } else {
            if (cartDiscountRow) cartDiscountRow.style.display = 'none';
        }

        if (cartFinalTotal) cartFinalTotal.textContent = formatPrice(finalTotal);
    }
});
