import UnsplashReact, {
  Base64Uploader,
  withDefaultProps,
} from "unsplash-react";
import "./WallpaperDataShow.css"

const MY_ACCESS_KEY = "WqDpKTnRaRLgHVyNOExPGeSFVdujHOpYhl4jWJ2w3L4";
const MY_SECRET_KEY = "wl4gRWE6FgygtlF9koseXM5_Yr1Ta_cipZ8WV2zkeTw";
function WallpaperDataShow() {
  const loadings = () => {
    alert("not responce API");
  };

  return (
    <>
      <div className="App">
      <div className="wallpaper_img">
        <UnsplashReact
          photoRatio={7 / 12}
          onFinishedUploading={loadings}
          secretkey={MY_SECRET_KEY}
          accessKey={MY_ACCESS_KEY}
          columns={8}
          Uploader={withDefaultProps(Base64Uploader, { name: "event[logo]" })}
        />
      </div>
      </div>
    </>
  );
}

export default WallpaperDataShow;
