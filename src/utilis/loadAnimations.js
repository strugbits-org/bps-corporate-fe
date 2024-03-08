// import { React, useCallback, useState } from "react";

//  // Animations Load
//  const numberOfCollections = 8;
//  const [animationsLoaded, setAnimationsLoaded] = useState(false);
//  const [collectionLoaded, setCollectionLoaded] = useState(0);

//  const handleCollectionLoaded = useCallback(() => {
//    setCollectionLoaded((prevCount) => prevCount + 1);
//    if ((collectionLoaded + 1) >= numberOfCollections && !animationsLoaded) {
//      setTimeout(() => {
//        document.querySelector(".initScript").click();
//      }, 200);
//      setAnimationsLoaded(true);
//      setCollectionLoaded(0);
//    }
//  }, [collectionLoaded]);
//  // Animations Load

//  export default handleCollectionLoaded;