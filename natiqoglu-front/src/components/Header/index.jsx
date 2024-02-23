import React from "react";
import { Carousel } from "react-carousel-minimal";
import "./header.scss";

function Header() {
  const data = [
    {
      image:
        "https://cdn.oxu.az/uploads/W1siZiIsIjIwMjQvMDIvMTIvMTQvNDAvMTcvMGE4M2FkM2UtZTk2Mi00ZTg4LWE2NTUtMmYwZGQzZWRmMWZhL3JlYmVub2stdi0zLWdvZGEtZ2xhdm5heWEuanBnIl0sWyJwIiwiZW5jb2RlIiwianBnIiwiLXF1YWxpdHkgODAiXSxbInAiLCJ0aHVtYiIsIjYyMHg0MTMjIl1d?sha=c918955ceb3b0dd0",
      caption:
        "<h3><p>8 fevral</p></h3><h5>Azərbaycanda uşaqlara verilən qəribə adlar - Siratullox, İton, Zeytunə, İyad...</h5>",
    },
    {
      image: "https://cdn.oxu.az/uploads/W1siZiIsIjIwMjQvMDIvMTIvMTEvNDUvNDEvNjkwNDRjNzYtZGRhNS00OTg0LWI1ZWUtZmUzMDIyMzA2MmU5L2poYWhhYWFhLmpwZWciXSxbInAiLCJlbmNvZGUiLCJqcGciLCItcXVhbGl0eSA4MCJdLFsicCIsInRodW1iIiwiNjIweDQxMyMiXV0?sha=df144c9d550aae77",
      caption:
        "<h3><p>5 fevral</p></h3><h5>Masallıda sıradan bir gün . . .</h5>",
    },
    {
      image:
        "https://sonxeber.az/uploads/416364504_396355489735082_5253939928919956191_n.jpg",
      caption:
        "<h3><p>9 fevral</p></h3><h5>Kişi çoxmərtəbəli binanın eyvanından paraşütlə tullandı</h5>",
    },
  ];

  const captionStyle = {
    fontSize: "1.5em",
    fontWeight: "bold",
    padding:"0px",
    margin:"0px"
  };

  return (
    <div>
      <div id="header">
        <Carousel
          data={data}
          width="850px"
          height="550px"
          captionStyle={captionStyle}
          slideBackgroundColor="black"
          captionPosition="bottom"
          pauseIconColor="white"
          pauseIconSize="40px"
          slideImageFit="cover"
          padding="0px"
          margin="0px"
          style={{
            textAlign: "center",
            maxWidth: "850px",
            maxHeight: "550px",
            margin: "40px auto",
            padding:"0px"
          }}
        />
      </div>
    </div>
  );
}

export default Header;
