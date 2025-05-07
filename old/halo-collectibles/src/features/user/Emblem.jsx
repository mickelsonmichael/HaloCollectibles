import React from "react";

export default ({ gamertag }) => {
  var [image, setImage] = React.useState(null);

  React.useEffect(() => {
    if (gamertag && image === null) {
      fetch(
        `https://halocollectiblesapi.azurewebsites.net/api/GetEmblem?name=${gamertag}`
      ).then(async (response) => {
        if (response.ok) {
          setImage(await response.blob());
        }
      });
    }
  });

  if (!gamertag || image === null) {
    return null;
  }

  return (
    <div>
      <img
        src={URL.createObjectURL(image)}
        alt={gamertag}
        height="128"
        width="128"
      />
    </div>
  );
};
