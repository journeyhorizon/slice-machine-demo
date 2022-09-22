import css from './styles.module.scss';

type TIntroVideo = {
  slice?: any;
};

const IntroVideo: React.FC<TIntroVideo> = ({ slice }) => {
  return (
    <div className={css.root}>
      <div className={css.videoContainer}>
        <div className={css.videoWrapper}>
          {slice.primary?.video && (
            <video
              src={slice.primary.video.url}
              controls
              width="100%"
              height="100%"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default IntroVideo;
