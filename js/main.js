const ROUTES = {
    home: "index.html",
    about: "pages/about.html",
    contact: "pages/contact.html",
    properties: "pages/properties.html",
    propertyDetail: "pages/show-property.html",
    schedule: "pages/schedule.html",
    login: "pages/login.html",
    register: "pages/register.html"
};

const FEATURED_CARDS = [
    { title: "Skyline Penthouse", location: "Manhattan, New York", beds: "3 Beds", baths: "3 Baths", area: "2,500 sqft", image: "assets/images/listing-skyline.png" },
    { title: "Mediterranean Villa", location: "Beverly Hills, CA", beds: "6 Beds", baths: "7 Baths", area: "7,800 sqft", image: "assets/images/listing-mediterranean.png" },
    { title: "Modern Condo", location: "Miami Beach, FL", beds: "2 Beds", baths: "2 Baths", area: "1,800 sqft", image: "assets/images/listing-modern-condo.png" },
    { title: "Contemporary Townhouse", location: "Austin, TX", beds: "3 Beds", baths: "2 Baths", area: "2,200 sqft", image: "assets/images/listing-contemporary-townhouse.png" },
    { title: "Lakefront Paradise", location: "Lake Tahoe, NV", beds: "5 Beds", baths: "5 Baths", area: "5,400 sqft", image: "assets/images/listing-lakefront.png" },
    { title: "Downtown Luxury", location: "Chicago, IL", beds: "4 Beds", baths: "4 Baths", area: "3,800 sqft", image: "assets/images/listing-downtown-luxury.png" }
];

const LUXURY_CARDS = [
    { title: "Coastal Manor", location: "Malibu, CA", beds: "5 Beds", baths: "5 Baths", area: "5,600 sqft", image: "assets/images/listing-coastal-manor.png" },
    { title: "Ridge Estate", location: "Asheville, NC", beds: "4 Beds", baths: "4 Baths", area: "4,100 sqft", image: "assets/images/listing-ridge-estate.png" },
    { title: "Desert Vista Reserve", location: "Scottsdale, AZ", beds: "5 Beds", baths: "4 Baths", area: "4,500 sqft", image: "assets/images/listing-desert-vista.png" },
    { title: "Penthouse Prime", location: "New York, NY", beds: "3 Beds", baths: "3 Baths", area: "2,900 sqft", image: "assets/images/listing-penthouse-prime.png" },
    { title: "Penthouse Signature", location: "Miami, FL", beds: "3 Beds", baths: "3 Baths", area: "2,700 sqft", image: "assets/images/listing-penthouse-signature.png" },
    { title: "Townhouse Elite", location: "Austin, TX", beds: "4 Beds", baths: "3 Baths", area: "3,300 sqft", image: "assets/images/listing-townhouse-elite.png" }
];

const TRENDING_CARDS = [
    { title: "Skyline Premium", location: "Manhattan, New York", beds: "3 Beds", baths: "3 Baths", area: "2,600 sqft", image: "assets/images/listing-skyline-premium.png" },
    { title: "Oceanview Modern", location: "Santa Monica, CA", beds: "5 Beds", baths: "5 Baths", area: "5,000 sqft", image: "assets/images/listing-ocean-modern.png" },
    { title: "Condo Elevate", location: "Miami Beach, FL", beds: "2 Beds", baths: "2 Baths", area: "1,900 sqft", image: "assets/images/listing-condo-elevate.png" },
    { title: "Townhouse Urban", location: "Austin, TX", beds: "3 Beds", baths: "2 Baths", area: "2,250 sqft", image: "assets/images/listing-townhouse-urban.png" },
    { title: "Townhouse Grand", location: "Seattle, WA", beds: "4 Beds", baths: "3 Baths", area: "3,100 sqft", image: "assets/images/listing-townhouse-grand.png" },
    { title: "Urban Residence", location: "Chicago, IL", beds: "3 Beds", baths: "2 Baths", area: "2,100 sqft", image: "assets/images/listing-urban-residence.png" }
];

const NEW_LISTINGS_CARDS = [
    { title: "Harbor Penthouse", location: "San Diego, CA", beds: "3 Beds", baths: "3 Baths", area: "2,450 sqft", image: "assets/images/property-penthouse.png" },
    { title: "Coastal Retreat", location: "Napa Valley, CA", beds: "4 Beds", baths: "3 Baths", area: "3,200 sqft", image: "assets/images/property-coastal.png" },
    { title: "Modern Bay Condo", location: "Miami, FL", beds: "2 Beds", baths: "2 Baths", area: "1,750 sqft", image: "assets/images/property-condo.png" },
    { title: "Contemporary Residence", location: "Dallas, TX", beds: "4 Beds", baths: "3 Baths", area: "3,500 sqft", image: "assets/images/property-townhouse.png" },
    { title: "Mediterranean Estate", location: "Beverly Hills, CA", beds: "5 Beds", baths: "5 Baths", area: "5,300 sqft", image: "assets/images/property-mediterranean.png" },
    { title: "Masterpiece Villa", location: "Scottsdale, AZ", beds: "5 Beds", baths: "4 Baths", area: "4,850 sqft", image: "assets/images/property-masterpiece.png" }
];

const TOP_PROPERTIES_CARDS = [
    { image: "assets/images/a-10.png" },
    { image: "assets/images/top-property-2.png" },
    { image: "assets/images/top-property-3.png" },
    { image: "assets/images/top-property-4.png" },
    { image: "assets/images/top-property-5.png" },
    { image: "assets/images/top-property-6.png" },
    { image: "assets/images/top-property-7.png" },
    { image: "assets/images/top-property-8.png" },
    { image: "assets/images/top-property-9.png" },
    { image: "assets/images/top-property-10.png" }
];

const TOP_LUXURY_ESTATE_CARDS = [
    { image: "assets/images/aa-120.png" },
    { image: "assets/images/gg-120.png" },
    { image: "assets/images/hh-120.png" },
    { image: "assets/images/ii-120.png" },
    { image: "assets/images/jj-120.png" },
    { image: "assets/images/cc-120.png" },
    { image: "assets/images/bb-120.png" },
    { image: "assets/images/ff-120.png" },
    { image: "assets/images/dd-120.png" },
    { image: "assets/images/ee-120.png" }
];

const EXCLUSIVE_SPOTLIGHT_CARDS = [
    {
        title: "Serene Villa in Lonavala",
        location: "Lonavala, Maharashtra",
        beds: "4 Beds",
        baths: "5 Baths",
        area: "6,200 sqft",
        price: "₹ 12,500,000",
        image: "assets/images/spotlight-manhattan.png",
        description: "A beautiful villa offering breathtaking views and luxurious amenities. Perfect for a peaceful getaway."
    },
    {
        title: "Modern Apartment in Pune",
        location: "Koregaon Park, Pune",
        beds: "3 Beds",
        baths: "3 Baths",
        area: "2,800 sqft",
        price: "₹ 28,900,000",
        image: "assets/images/spotlight-beverly.png",
        description: "A stunning, modern apartment in the heart of Pune, featuring state-of-the-art facilities and elegant design."
    }
];



const BROWSE_CATEGORY_CARDS = [
    { icon: "assets/icons/category-house.svg", label: "Houses", count: "1,234 Properties" },
    { icon: "assets/icons/category-apartment.svg", label: "Apartments", count: "856 Properties" },
    { icon: "assets/icons/category-penthouse.svg", label: "Penthouse", count: "342 Properties" },
    { icon: "assets/icons/category-villa.svg", label: "Villas", count: "567 Properties" },
    { icon: "assets/icons/category-estate.svg", label: "Estates", count: "423 Properties" },
    { icon: "assets/icons/category-exclusive.svg", label: "Exclusive", count: "189 Properties" }
];

const WHY_CHOOSE_STATS = [
    { icon: "assets/icons/why-luxury.svg", value: "5,000+", title: "Luxury Properties", subtitle: "Exclusive listings worldwide" },
    { icon: "assets/icons/why-clients.svg", value: "10,000+", title: "Happy Clients", subtitle: "Trusted by thousands" },
    { icon: "assets/icons/why-experience.svg", value: "25+", title: "Years Experience", subtitle: "Industry leadership" },
    { icon: "assets/icons/why-value.svg", value: "$50B+", title: "Property Value", subtitle: "Total transactions" }
];

const NEWSLETTER_SECTION = {
    icon: "assets/icons/newsletter-mail.svg",
    prefix: "Never Miss a",
    highlight: "Property",
    description: "Get exclusive access to new luxury listings, market insights, and special offers delivered directly to your inbox.",
    placeholder: "Enter your email address",
    button: "Subscribe",
    note: "Join 50,000+ subscribers. Unsubscribe anytime."
};

const HERO_SLIDES = [
    {
        title: "Modern Luxury Villa",
        description: "Experience unparalleled luxury in this stunning 5-bedroom contemporary masterpiece. Featuring panoramic views, infinity pool, and state-of-the-art smart home technology.",
        price: "4,500,000",
        location: "Beverly Hills, CA",
        image: "assets/images/hero-villa.png"
    },
    {
        title: "Pinnacle Heights Estate",
        description: "Perched atop the city's highest point, this architectural marvel offers 360-degree views, a private vineyard, and a world-class spa facility.",
        price: "8,900,000",
        location: "Kalyani Nagar, Pune",
        image: "assets/images/Modern Luxury villa one.avif"
    },
    {
        title: "Azure Shoreline Mansion",
        description: "A breathtaking coastal sanctuary featuring private beach access, custom-built yacht dock, and floor-to-ceiling windows capturing every sunset.",
        price: "12,750,000",
        location: "Alibaug, Maharashtra",
        image: "assets/images/Modern Luxury villa two.avif"
    },
    {
        title: "Elysian Garden Manor",
        description: "A seamless blend of classical elegance and modern comfort, set amidst 5 acres of landscaped English gardens with a private lake and guest house.",
        price: "6,200,000",
        location: "Lonavala, Maharashtra",
        image: "assets/images/Modern Luxury villa three.avif"
    }
];

function initHeroSlider() {
    const heroSection = document.getElementById("hero-slider");
    if (!heroSection) return;

    const img1 = document.getElementById("hero-img-1");
    const img2 = document.getElementById("hero-img-2");
    const titleElement = document.getElementById("hero-title");
    const descElement = document.getElementById("hero-description");
    const priceElement = document.getElementById("hero-price");
    const locationElement = document.getElementById("hero-location");
    const contentItems = document.querySelectorAll(".hero-content-item");
    const dotsContainer = document.getElementById("hero-dots");
    const dots = dotsContainer ? dotsContainer.querySelectorAll("[data-slide]") : [];

    let currentIndex = 0;
    let slideInterval;
    let activeImg = img1;
    let inactiveImg = img2;

    const updateSlide = (index) => {
        const slide = HERO_SLIDES[index];
        if (!slide) return;

        // 1. Fade out current content
        contentItems.forEach(item => item.classList.remove("active"));

        // 2. Prepare next image
        inactiveImg.src = routeWithBase(slide.image);
        inactiveImg.alt = slide.title;
        inactiveImg.classList.remove("animate-hero-zoom");

        // 3. Start crossfade and entry after content is halfway faded out
        setTimeout(() => {
            // Crossfade images
            activeImg.style.opacity = "0";
            inactiveImg.style.opacity = "0.85";
            inactiveImg.classList.add("animate-hero-zoom");

            // Swap active/inactive pointers
            [activeImg, inactiveImg] = [inactiveImg, activeImg];

            // Update text content
            if (titleElement) titleElement.textContent = slide.title;
            if (descElement) descElement.textContent = slide.description;
            if (priceElement) priceElement.innerHTML = `&#8377; ${slide.price}`;
            if (locationElement) locationElement.textContent = slide.location;

            // Trigger staggered entry
            contentItems.forEach(item => item.classList.add("active"));
        }, 600);

        // Update Dots
        dots.forEach((dot, i) => {
            dot.classList.toggle("bg-white", i === index);
            dot.classList.toggle("bg-white/40", i !== index);
        });

        currentIndex = index;
    };

    const nextSlide = () => {
        let nextIndex = (currentIndex + 1) % HERO_SLIDES.length;
        updateSlide(nextIndex);
    };

    const startInterval = () => {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 7000); // Slightly longer for smooth feel
    };

    // Initial zoom for first slide
    if (img1) img1.classList.add("animate-hero-zoom");

    // Dot click listeners
    dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
            if (i === currentIndex) return;
            updateSlide(i);
            startInterval();
        });
    });

    startInterval();
}

const PROPERTY_SECTIONS = [
    { title: "Featured Properties", type: "detail-overlay", cards: FEATURED_CARDS },
    { title: "Luxury Estates", type: "detail-overlay", cards: LUXURY_CARDS },
    { title: "Trending Now", type: "detail-overlay", cards: TRENDING_CARDS },
    { title: "New Listings", type: "detail-overlay", cards: NEW_LISTINGS_CARDS },
    { title: "Top 10 Properties", type: "top-properties", cards: TOP_PROPERTIES_CARDS },
    { title: "Top 10 Luxury estates", type: "top-luxury", cards: TOP_LUXURY_ESTATE_CARDS },
    {
        title: "Exclusive Spotlight",
        subtitle: "Hand-picked extraordinary properties for the most discerning buyers",
        type: "exclusive-spotlight",
        cards: EXCLUSIVE_SPOTLIGHT_CARDS
    },
    {
        prefix: "Browse by",
        highlight: "Category",
        subtitle: "Find your perfect property across our diverse collection",
        type: "browse-category",
        cards: BROWSE_CATEGORY_CARDS
    },
    {
        prefix: "Why Choose",
        highlight: "Redfinix",
        subtitle: "Leading the luxury real estate market with unmatched expertise and exclusive properties",
        type: "why-choose",
        cards: WHY_CHOOSE_STATS
    },
    {
        type: "newsletter-subscribe",
        ...NEWSLETTER_SECTION
    }
];

const DEFAULT_PROPERTY_DETAIL = {
    title: "Modern Luxury Villa",
    location: "Beverly Hills, CA",
    beds: "4",
    baths: "3",
    area: "2500",
    price: "4,500,000",
    image: "assets/images/hero-villa.png",
    agentName: "Sarash Johnson",
    agentPhone: "+91 9876365357",
    agentEmail: "sarashjohnson@realests.com"
};

function extractCount(value, fallback) {
    const match = String(value || "").match(/\d[\d,]*/);
    if (!match) {
        return fallback;
    }

    return match[0].replace(/,/g, "");
}

function extractPrice(value, fallback) {
    const cleaned = String(value || "").replace(/[^\d,]/g, "");
    return cleaned || fallback;
}

function getPropertyDetailPayload(card = {}, overrides = {}) {
    return {
        title: overrides.title || card.title || DEFAULT_PROPERTY_DETAIL.title,
        location: overrides.location || card.location || DEFAULT_PROPERTY_DETAIL.location,
        beds: extractCount(overrides.beds || card.beds, DEFAULT_PROPERTY_DETAIL.beds),
        baths: extractCount(overrides.baths || card.baths, DEFAULT_PROPERTY_DETAIL.baths),
        area: extractCount(overrides.area || card.area, DEFAULT_PROPERTY_DETAIL.area),
        price: extractPrice(overrides.price || card.price, DEFAULT_PROPERTY_DETAIL.price),
        image: overrides.image || card.image || DEFAULT_PROPERTY_DETAIL.image,
        description: overrides.description || card.description || DEFAULT_PROPERTY_DETAIL.description,
        agentName: overrides.agentName || card.agentName || DEFAULT_PROPERTY_DETAIL.agentName,
        agentPhone: overrides.agentPhone || card.agentPhone || DEFAULT_PROPERTY_DETAIL.agentPhone,
        agentEmail: overrides.agentEmail || card.agentEmail || DEFAULT_PROPERTY_DETAIL.agentEmail
    };
}

function buildPropertyDetailHref(card, overrides = {}) {
    const params = new URLSearchParams(getPropertyDetailPayload(card, overrides));
    return `${routeWithBase(ROUTES.propertyDetail)}?${params.toString()}`;
}

function detailPropertyCardTemplate(card, layout) {
    const imageSrc = routeWithBase(card.image);
    const bedIcon = routeWithBase("assets/icons/bed.svg");
    const bathIcon = routeWithBase("assets/icons/bath.svg");
    const areaIcon = routeWithBase("assets/icons/area.svg");

    if (layout === "outside") {
        return `
            <article data-slider-item class="group min-w-0 shrink-0 basis-[84%] transition-transform duration-300 hover:-translate-y-1 sm:basis-[48%] lg:basis-[32%] xl:basis-[24%]">
                <div class="block">
                    <div class="relative overflow-hidden rounded-2xl ring-1 ring-zinc-200 shadow-sm transition-shadow duration-300 group-hover:shadow-lg">
                        <img src="${imageSrc}" alt="${card.title}" class="h-44 w-full object-cover transition duration-500 group-hover:scale-105" />
                    </div>
                    <div class="mt-2">
                        <h3 class="text-sm font-semibold text-zinc-900">${card.title}</h3>
                        <p class="text-xs text-zinc-500">${card.location}</p>
                        <div class="mt-2 flex flex-wrap items-center gap-3 text-[11px] text-zinc-600">
                            <span class="inline-flex items-center gap-1"><img src="${bedIcon}" alt="" class="h-5 w-5 shrink-0" />${card.beds}</span>
                            <span class="inline-flex items-center gap-1"><img src="${bathIcon}" alt="" class="h-4 w-4 shrink-0" />${card.baths}</span>
                            <span class="inline-flex items-center gap-1"><img src="${areaIcon}" alt="" class="h-4 w-4 shrink-0" />${card.area}</span>
                        </div>
                    </div>
                </div>
            </article>
        `;
    }

    return `
        <article data-slider-item class="group min-w-0 shrink-0 basis-[84%] transition-transform duration-300 hover:-translate-y-1 sm:basis-[48%] lg:basis-[32%] xl:basis-[24%]">
            <div class="block">
                <div class="relative overflow-hidden rounded-2xl ring-1 ring-zinc-200 shadow-sm transition-shadow duration-300 group-hover:shadow-lg">
                    <img src="${imageSrc}" alt="${card.title}" class="h-44 w-full object-cover opacity-85 transition duration-500 group-hover:scale-105" />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                    <div class="absolute inset-x-0 bottom-0 p-3">
                        <h3 class="text-sm font-semibold text-white">${card.title}</h3>
                        <p class="text-xs text-zinc-200">${card.location}</p>
                        <div class="mt-2 flex flex-wrap items-center gap-3 text-[11px] text-zinc-100">
                            <span class="inline-flex items-center gap-1"><img src="${bedIcon}" alt="" class="h-5 w-5 shrink-0 brightness-0 invert" />${card.beds}</span>
                            <span class="inline-flex items-center gap-1"><img src="${bathIcon}" alt="" class="h-4 w-4 shrink-0 brightness-0 invert" />${card.baths}</span>
                            <span class="inline-flex items-center gap-1"><img src="${areaIcon}" alt="" class="h-4 w-4 shrink-0 brightness-0 invert" />${card.area}</span>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    `;
}

function detailSectionTemplate(section, layout) {
    const cards = section.cards.map((card) => detailPropertyCardTemplate(card, layout)).join("");

    return `
        <div data-slider>
            <h2 class="mb-5 text-center text-3xl font-bold text-zinc-900 sm:text-4xl">${section.title}</h2>
            <div class="relative">
                <button data-slider-prev type="button" class="absolute left-1 top-1/2 z-20 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-2xl leading-none text-zinc-700 shadow-md ring-1 ring-zinc-200 transition hover:bg-white" aria-label="Previous ${section.title}">&lsaquo;</button>
                <button data-slider-next type="button" class="absolute right-1 top-1/2 z-20 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-2xl leading-none text-zinc-700 shadow-md ring-1 ring-zinc-200 transition hover:bg-white" aria-label="Next ${section.title}">&rsaquo;</button>
                <div class="overflow-hidden" data-slider-viewport>
                    <div class="flex gap-4 transition-transform duration-300 ease-out" data-slider-track>
                        ${cards}
                    </div>
                </div>
            </div>
        </div>
    `;
}

function topPropertyCardTemplate(card, index) {
    const imageSrc = routeWithBase(card.image);
    const rank = index + 1;
    const detailHref = buildPropertyDetailHref(card, {
        title: `Top Property ${rank}`,
        location: "Premium Location",
        beds: "4 Beds",
        baths: "4 Baths",
        area: "4,200 sqft"
    });

    return `
        <article data-slider-item class="group relative min-w-0 shrink-0 basis-[62%] pl-9 transition-transform duration-300 hover:-translate-y-1 sm:basis-[40%] sm:pl-10 md:basis-[30%] lg:basis-[calc((100%-5rem)/4)] lg:pl-12 xl:basis-[calc((100%-5rem)/4)]">
            <span class="pointer-events-none absolute left-0 top-1/2 z-0 -translate-y-1/2 text-[6.4rem] leading-none font-black text-zinc-950 sm:text-[7rem] lg:text-[8rem]">${rank}</span>
            <div class="relative z-10 block h-72 w-full overflow-hidden rounded-2xl ring-1 ring-zinc-200 shadow-sm transition-shadow duration-300 group-hover:shadow-xl">
                <img src="${imageSrc}" alt="Top property ${rank}" class="absolute inset-0 h-full w-full object-cover" />
                <a href="${detailHref}" class="absolute inset-x-3 bottom-3 inline-flex h-10 items-center justify-center rounded-full bg-red-600 px-4 text-sm font-semibold text-white whitespace-nowrap text-center transition hover:bg-red-700 sm:h-11 sm:text-base">
                    View Details
                </a>
            </div>
        </article>
    `;
}

function topLuxuryCardTemplate(card, index) {
    const imageSrc = routeWithBase(card.image);
    const rank = index + 1;

    return `
        <article data-slider-item class="group relative min-w-0 shrink-0 basis-[62%] pl-9 transition-transform duration-300 hover:-translate-y-1 sm:basis-[40%] sm:pl-10 md:basis-[30%] lg:basis-[calc((100%-5rem)/4)] lg:pl-12 xl:basis-[calc((100%-5rem)/4)]">
            <div class="relative block h-72 w-full overflow-hidden rounded-2xl ring-1 ring-zinc-200 shadow-sm transition-shadow duration-300 group-hover:shadow-xl">
                <img src="${imageSrc}" alt="Top luxury estate ${rank}" class="h-full w-full object-cover" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <span class="absolute bottom-2 left-2 text-[5.6rem] leading-none font-black text-white/95 drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)] sm:text-[6rem] lg:text-[6.4rem]">${rank}</span>
            </div>
        </article>
    `;
}

function exclusiveSpotlightCardTemplate(card, index) {
    const imageSrc = routeWithBase(card.image);
    const bedIcon = routeWithBase("assets/icons/bed.svg");
    const bathIcon = routeWithBase("assets/icons/bath.svg");
    const areaIcon = routeWithBase("assets/icons/area.svg");
    const locationIcon = routeWithBase("assets/icons/contact-location.svg");
    const cardThemeClass = card.theme === "red" ? "bg-[#AF0B00]" : "bg-zinc-600";
    const panelHeightClass = index === 0 ? "md:min-h-[280px] lg:min-h-[300px]" : "md:min-h-[252px] lg:min-h-[272px]";
    const priceClass = "text-lg sm:text-xl lg:text-2xl";
    const detailHref = buildPropertyDetailHref(card);

    return `
        <article class="group overflow-hidden rounded-2xl ${cardThemeClass} text-white ring-1 ring-black/10 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div class="grid md:grid-cols-[41%_59%] ${panelHeightClass}">
                <div class="min-h-44 overflow-hidden sm:min-h-48 md:h-full">
                    <img src="${imageSrc}" alt="${card.title}" class="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div class="flex flex-col justify-center p-3 sm:p-4 lg:p-5">
                    <h3 class="text-xl font-bold leading-tight sm:text-2xl lg:text-3xl">${card.title}</h3>
                    <p class="mt-2 text-xs leading-relaxed text-white/90 sm:text-sm lg:text-base">${card.description}</p>
                    <p class="mt-2 inline-flex items-center gap-2 text-sm text-white/95 sm:text-base">
                        <img src="${locationIcon}" alt="" class="h-4 w-4 shrink-0 brightness-0 invert" />
                        ${card.location}
                    </p>
                    <div class="mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-white/95 sm:text-base">
                        <span class="inline-flex items-center gap-2"><img src="${bedIcon}" alt="" class="h-4 w-4 shrink-0 brightness-0 invert" />${card.beds}</span>
                        <span class="inline-flex items-center gap-2"><img src="${bathIcon}" alt="" class="h-4 w-4 shrink-0 brightness-0 invert" />${card.baths}</span>
                        <span class="inline-flex items-center gap-2"><img src="${areaIcon}" alt="" class="h-4 w-4 shrink-0 brightness-0 invert" />${card.area}</span>
                    </div>
                    <div class="mt-3.5 flex flex-wrap items-center justify-between gap-3">
                        <p class="${priceClass} font-bold tracking-tight">${card.price}</p>
                        <a href="${detailHref}" class="inline-flex h-10 min-w-[140px] items-center justify-center rounded-full bg-red-600 px-6 text-sm font-semibold text-white transition hover:bg-red-700 sm:h-11 sm:min-w-[160px] sm:text-base">
                            View Details
                        </a>
                    </div>
                </div>
            </div>
        </article>
    `;
}

function exclusiveSpotlightSectionTemplate(section) {
    const cards = section.cards.map((card, index) => exclusiveSpotlightCardTemplate(card, index)).join("");

    return `
        <section>
            <div class="mb-5 text-center">
                <h2 class="text-3xl font-bold text-zinc-900 sm:text-4xl">
                    <span>Exclusive </span><span class="text-red-600">Spotlight</span>
                </h2>
                <p class="mt-2 text-lg text-zinc-500">${section.subtitle}</p>
            </div>
            <div class="space-y-4 sm:space-y-5">
                ${cards}
            </div>
        </section>
    `;
}

function browseCategoryCardTemplate(card) {
    const iconSrc = routeWithBase(card.icon);

    return `
        <article class="group rounded-2xl border border-zinc-300 bg-white px-1.5 py-4 text-center shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md sm:px-2 sm:py-5">
            <div class="mx-auto mb-3 inline-flex items-center justify-center">
                <img src="${iconSrc}" alt="" class="h-8 w-8 shrink-0" />
            </div>
            <h3 class="text-base font-bold text-zinc-900 sm:text-lg">${card.label}</h3>
            <p class="mt-1 text-xs text-zinc-500 sm:text-sm">${card.count}</p>
        </article>
    `;
}

function browseCategorySectionTemplate(section) {
    const cards = section.cards.map((card) => browseCategoryCardTemplate(card)).join("");

    return `
        <section>
            <div class="mb-7 text-center">
                <h2 class="text-3xl font-bold text-zinc-900 sm:text-4xl">
                    <span>${section.prefix} </span><span class="text-red-600">${section.highlight}</span>
                </h2>
                <p class="mt-2 text-lg text-zinc-500">${section.subtitle}</p>
            </div>
            <div class="grid grid-cols-3 gap-4 sm:grid-cols-6">
                ${cards}
            </div>
        </section>
    `;
}

function whyChooseCardTemplate(card) {
    const iconSrc = routeWithBase(card.icon);

    return `
        <article class="group rounded-2xl border border-zinc-300 bg-white p-4 text-center shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md sm:p-5">
            <div class="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-red-600 transition-colors">
                <img src="${iconSrc}" alt="" class="h-6 w-6 shrink-0 brightness-0 invert" />
            </div>
            <p class="text-xl font-bold tracking-tight text-red-600 sm:text-2xl">${card.value}</p>
            <h3 class="mt-2 text-base font-semibold text-zinc-900 sm:text-lg">${card.title}</h3>
            <p class="mt-1 text-xs text-zinc-500 sm:text-sm">${card.subtitle}</p>
        </article>
    `;
}

function whyChooseSectionTemplate(section) {
    const cards = section.cards.map((card) => whyChooseCardTemplate(card)).join("");

    return `
        <section>
            <div class="mb-7 text-center">
                <h2 class="text-3xl font-bold text-zinc-900 sm:text-4xl">
                    <span>${section.prefix} </span><span class="text-red-600">${section.highlight}</span>
                </h2>
                <p class="mt-2 text-lg text-zinc-500">${section.subtitle}</p>
            </div>
            <div class="grid grid-cols-2 gap-4 sm:grid-cols-4">
                ${cards}
            </div>
        </section>
    `;
}

function newsletterSubscribeSectionTemplate(section) {
    const iconSrc = routeWithBase(section.icon);

    return `
        <section>
            <div class="rounded-2xl border border-zinc-400/80 bg-zinc-50 px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
                <div class="mx-auto max-w-5xl text-center">
                    <img src="${iconSrc}" alt="" class="mx-auto h-10 w-10 shrink-0" />
                    <h2 class="mt-4 text-3xl font-bold text-zinc-900 sm:text-4xl">
                        <span>${section.prefix} </span><span class="text-red-600">${section.highlight}</span>
                    </h2>
                    <p class="mx-auto mt-4 max-w-4xl text-base leading-relaxed text-zinc-600 sm:text-xl">
                        ${section.description}
                    </p>
                    <form class="mx-auto mt-7 flex w-full max-w-4xl flex-col items-center gap-4 sm:flex-row sm:items-stretch" action="#" method="post">
                        <input type="email" name="email" placeholder="${section.placeholder}" class="h-12 w-full rounded-2xl border border-zinc-500 bg-white px-5 text-sm text-zinc-700 outline-none transition placeholder:text-zinc-500 focus:border-red-500 sm:basis-[64%] sm:flex-none sm:text-lg" required />
                        <button type="submit" class="inline-flex h-12 min-w-[190px] items-center justify-center rounded-full bg-red-600 px-7 text-base font-medium text-white transition hover:bg-red-700 sm:min-w-[220px] sm:text-xl">
                            ${section.button}
                        </button>
                    </form>
                    <p class="mt-7 text-sm text-zinc-500 sm:text-lg">${section.note}</p>
                </div>
            </div>
        </section>
    `;
}

function propertySectionTemplate(section) {
    if (section.type === "detail-outside") {
        return detailSectionTemplate(section, "outside");
    }

    if (section.type === "detail-overlay") {
        return detailSectionTemplate(section, "overlay");
    }

    if (section.type === "exclusive-spotlight") {
        return exclusiveSpotlightSectionTemplate(section);
    }

    if (section.type === "browse-category") {
        return browseCategorySectionTemplate(section);
    }

    if (section.type === "why-choose") {
        return whyChooseSectionTemplate(section);
    }

    if (section.type === "newsletter-subscribe") {
        return newsletterSubscribeSectionTemplate(section);
    }

    const cardTemplate = section.type === "top-properties" ? topPropertyCardTemplate : topLuxuryCardTemplate;
    const cards = section.cards.map((card, index) => cardTemplate(card, index)).join("");

    const isTopSection = section.type === "top-properties" || section.type === "top-luxury";
    const trackGapClass = isTopSection ? "gap-7 lg:gap-8" : "gap-4";
    const trackPadClass = isTopSection ? "px-4 sm:px-5 lg:px-6" : "";

    return `
        <div data-slider>
            <h2 class="mb-5 text-center text-3xl font-bold text-zinc-900 sm:text-4xl">${section.title}</h2>
            <div class="relative">
                <button data-slider-prev type="button" class="absolute left-1 top-1/2 z-20 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-xl leading-none text-zinc-700 shadow-md ring-1 ring-zinc-200 transition hover:bg-white" aria-label="Previous ${section.title}">&lsaquo;</button>
                <button data-slider-next type="button" class="absolute right-1 top-1/2 z-20 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-xl leading-none text-zinc-700 shadow-md ring-1 ring-zinc-200 transition hover:bg-white" aria-label="Next ${section.title}">&rsaquo;</button>
                <div class="overflow-hidden" data-slider-viewport>
                    <div class="flex ${trackPadClass} ${trackGapClass} transition-transform duration-300 ease-out" data-slider-track>
                        ${cards}
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderHomePropertySections() {
    const container = document.getElementById("home-property-sections");
    if (!container) {
        return;
    }

    container.innerHTML = PROPERTY_SECTIONS.map((section) => propertySectionTemplate(section)).join("");
}

function initPropertySliders(scope = document) {
    const sliders = scope.querySelectorAll("[data-slider]");
    if (!sliders.length) {
        return;
    }

    sliders.forEach((slider) => {
        const viewport = slider.querySelector("[data-slider-viewport]");
        const track = slider.querySelector("[data-slider-track]");
        const prev = slider.querySelector("[data-slider-prev]");
        const next = slider.querySelector("[data-slider-next]");
        const items = Array.from(slider.querySelectorAll("[data-slider-item]"));

        if (!viewport || !track || !prev || !next || !items.length) {
            return;
        }

        let index = 0;
        let maxIndex = 0;
        let step = 0;

        const setButtonState = (button, disabled) => {
            button.disabled = disabled;
            button.classList.toggle("opacity-40", disabled);
            button.classList.toggle("cursor-not-allowed", disabled);
        };

        const updatePosition = () => {
            track.style.transform = `translateX(-${index * step}px)`;
            setButtonState(prev, index === 0);
            setButtonState(next, index >= maxIndex);
        };

        const updateMetrics = () => {
            const style = window.getComputedStyle(track);
            const gap = parseFloat(style.columnGap || style.gap || "0");
            const itemWidth = items[0].getBoundingClientRect().width;

            if (!itemWidth) {
                return;
            }

            step = itemWidth + gap;
            const visibleCount = Math.max(1, Math.floor((viewport.clientWidth + gap) / step));
            maxIndex = Math.max(0, items.length - visibleCount);

            if (index > maxIndex) {
                index = maxIndex;
            }

            updatePosition();
        };

        prev.addEventListener("click", () => {
            if (index === 0) {
                return;
            }
            index -= 1;
            updatePosition();
        });

        next.addEventListener("click", () => {
            if (index >= maxIndex) {
                return;
            }
            index += 1;
            updatePosition();
        });

        window.addEventListener("resize", updateMetrics);
        updateMetrics();
    });
}

function getBasePath() {
    return document.body.dataset.base || ".";
}

function routeWithBase(path) {
    const base = getBasePath();
    if (base === ".") {
        return `./${path}`;
    }

    return `${base}/${path}`;
}

function applyRouteLinks(scope) {
    scope.querySelectorAll("[data-route]").forEach((link) => {
        const routeKey = link.dataset.route;
        const routePath = ROUTES[routeKey];
        if (!routePath) {
            return;
        }

        link.setAttribute("href", routeWithBase(routePath));
    });
}

function applyAssetSources(scope) {
    scope.querySelectorAll("[data-asset]").forEach((item) => {
        const assetPath = item.dataset.asset;
        if (!assetPath) {
            return;
        }

        item.setAttribute("src", routeWithBase(assetPath));
    });
}

async function loadComponent(targetId, componentPath, onLoaded) {
    const target = document.getElementById(targetId);
    if (!target) {
        return;
    }

    try {
        const response = await fetch(routeWithBase(componentPath));
        if (!response.ok) {
            return;
        }

        target.innerHTML = await response.text();
        applyRouteLinks(target);
        applyAssetSources(target);

        if (onLoaded) {
            onLoaded(target);
        }
    } catch (error) {
        // silently fail
    }
}

function initMobileNav(scope) {
    const toggle = scope.querySelector("[data-nav-toggle]");
    const navMenu = scope.querySelector("[data-nav]");

    if (!toggle || !navMenu) {
        return;
    }

    const isDesktop = () => window.innerWidth >= 1024;

    const closeMenu = () => {
        navMenu.classList.add("hidden");
        toggle.setAttribute("aria-expanded", "false");
    };

    toggle.addEventListener("click", () => {
        const isHidden = navMenu.classList.contains("hidden");

        if (isHidden) {
            navMenu.classList.remove("hidden");
            toggle.setAttribute("aria-expanded", "true");
            return;
        }

        closeMenu();
    });

    navMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            if (window.innerWidth < 1024) {
                closeMenu();
            }
        });
    });

    document.addEventListener("click", (event) => {
        if (isDesktop()) {
            return;
        }

        if (!navMenu.classList.contains("hidden") && !scope.contains(event.target)) {
            closeMenu();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenu();
        }
    });

    window.addEventListener("resize", () => {
        if (isDesktop()) {
            closeMenu();
        }
    });
}

function initNavbar(scope) {
    scope.classList.add("sticky", "top-0", "z-50");
    initMobileNav(scope);
}

function initPropertyDetailPage() {
    const detailRoot = document.querySelector("[data-property-detail]");
    if (!detailRoot) {
        return;
    }

    const params = new URLSearchParams(window.location.search);
    const payload = getPropertyDetailPayload({
        title: params.get("title"),
        location: params.get("location"),
        beds: params.get("beds"),
        baths: params.get("baths"),
        area: params.get("area"),
        price: params.get("price"),
        image: params.get("image"),
        agentName: params.get("agentName"),
        agentPhone: params.get("agentPhone"),
        agentEmail: params.get("agentEmail"),
        description: params.get("description")
    });

    const textBindings = [
        ["detail-title", payload.title],
        ["detail-location", payload.location],
        ["detail-beds", payload.beds],
        ["detail-baths", payload.baths],
        ["detail-area", payload.area],
        ["detail-agent-name", payload.agentName],
        ["detail-agent-phone", payload.agentPhone],
        ["detail-agent-email", payload.agentEmail]
    ];

    textBindings.forEach(([id, value]) => {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = value;
        }
    });

    const priceElement = document.getElementById("detail-price");
    if (priceElement) {
        priceElement.textContent = `\u20B9 ${payload.price}`;
    }

    const imageElement = document.getElementById("detail-image");
    if (imageElement) {
        imageElement.setAttribute("src", routeWithBase(payload.image));
        imageElement.setAttribute("alt", payload.title);
    }

    const descriptionElement = document.getElementById("detail-description");
    if (descriptionElement && payload.description) {
        descriptionElement.textContent = payload.description;
    }

    const backLink = document.getElementById("detail-back-link");
    if (backLink) {
        backLink.setAttribute("href", routeWithBase(ROUTES.properties));
    }
}

document.addEventListener("DOMContentLoaded", () => {
    loadComponent("navbar", "components/navbar.html", initNavbar);
    loadComponent("footer", "components/footer.html");
    renderHomePropertySections();
    initPropertySliders();
    initPropertyDetailPage();
    initHeroSlider();
});
