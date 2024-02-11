import React from 'react'
import { Carousel } from 'react-carousel-minimal';
import "./header.scss"

function Header() {
    const data = [
        {
            image: "https://sonxeber.az/uploads/ss_319451_1707294230_1570438530_zelzele.jpg",
            caption: "<h5>Mütəxəssislərdən XƏBƏRDARLIQ: 7 bal gücündə zəlzələ...</h5><h3><p>8 fevral</p></h3>"
        },
        {
            image: "https://sonxeber.az/uploads/4ff85be5918c867d0e540d1d36a1cb7a.png",
            caption: "<h5>Alimlərdən yeni elmi fərziyyə: Yer vaxtilə düz olub</h5><h3><p>5 fevral</p></h3>"
        },
        {
            image: "https://sonxeber.az/uploads/416364504_396355489735082_5253939928919956191_n.jpg",
            caption: "<h5>Kişi çoxmərtəbəli binanın eyvanından paraşütlə tullandı</h5><h3><p>9 fevral</p></h3>"
        },
        {
          image: "https://sonxeber.az/uploads/4ff85be5918c867d0e540d1d36a1cb7a.png",
          caption: "<h5>Alimlərdən yeni elmi fərziyyə: Yer vaxtilə düz olub</h5><h3><p>10 fevral</p></h3>"
      },
    ]

    const captionStyle = {
        fontSize: '1.5em',
        fontWeight: 'bold',
        width:" max-content"
    }



    return (
        <div>
                <Carousel
                    data={data}
                    width="100vw"
                    height="650px"
                    captionStyle={captionStyle}
                    captionPosition="bottom"
                    pauseIconColor="white"
                    pauseIconSize="40px"
                    slideImageFit="cover"
                    style={{
                        textAlign: "center",
                        maxWidth: "100vw",
                        maxHeight: "650px",
                    }}
                />
        </div>
    )
}

export default Header


