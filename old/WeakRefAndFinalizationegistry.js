//  the user variable holds a strong reference to the object
let user = { name: "John" };

// copied the strong reference to the object into the admin variable
let admin = user;

// let's overwrite the value of the user variable
user = null;

// the object is still reachable through the admin variable


function fetchImg() {
    // abstract function for downloading images...
}

function weakRefCache(fetchImg) {
    const imgCache = new Map();

    const registry = new FinalizationRegistry((imgName) => { // (1)
        const cachedImg = imgCache.get(imgName);
        if (cachedImg && !cachedImg.deref()) imgCache.delete(imgName);
    });

    return (imgName) => {
        const cachedImg = imgCache.get(imgName);

        if (cachedImg?.deref()) {
            return cachedImg?.deref();
        }

        const newImg = fetchImg(imgName);
        imgCache.set(imgName, new WeakRef(newImg));
        registry.register(newImg, imgName); // (2)

        return newImg;
    };
}

const getCachedImg = weakRefCache(fetchImg);