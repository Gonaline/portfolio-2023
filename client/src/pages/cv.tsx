import {
  FunctionComponentElement,
  ReactElement,
  useEffect,
  useContext,
} from 'react';
import GlobalCtx from '../context/globalCtx';
import { PAGE } from '../enums/page.enum';
import Left from '../components/left';
import pageData from '../data/pages';
import cvData from '../data/cv';
import { CvStyle } from '../style/cv/cvStyle';

const Cv = (): FunctionComponentElement<ReactElement> => {
  const { setPageData } = useContext(GlobalCtx);

  useEffect(() => {
    setPageData(pageData[PAGE.CV]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Left />
      <CvStyle>
        <div className='part'>
          <div className='title'>
            <h4>EXPÉRIENCES PROFESSIONNELLES</h4>
          </div>

          <div className='jobsTechnos'>
            <div className='jobs'>
              {cvData.jobs.map((job) => (
                <div className='text' key={job.id}>
                  <h5 className='name'>
                    {job.name}
                    {job.detail && (
                      <em className='detail'>{` | ${job.detail}`}</em>
                    )}
                  </h5>
                  <p className='datesLocation'>
                    {job.location ? (
                      <em>
                        {`${job.dates} | `}
                        <em className='location'>{job.location}</em>
                      </em>
                    ) : (
                      <em>{job.dates}</em>
                    )}
                  </p>
                  {job.assignments && (
                    <p className='assignments'>{`${job.assignments}`}</p>
                  )}
                  {job.languages && (
                    <em className='languages'>{`${job.languages}`}</em>
                  )}
                </div>
              ))}
            </div>

            <div className='technos'>
              {cvData.technos.map((t) => (
                <div key={t.id}>
                  <img
                    className={t.ratio}
                    src={require(`../assets/pictures/${PAGE.CV_PATH}/${t.img}`)}
                    alt={t.img}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='part formations'>
          <div className='title'>
            <h4>FORMATION</h4>
          </div>
          {cvData.formations.map((formation) => (
            <div className='text' key={formation.id}>
              <h5 className='name'>{formation.name}</h5>
              <p className='datesLocation'>
                {formation.location ? (
                  <em>
                    {`${formation.dates} | `}
                    <em className='location'>{formation.location}</em>
                  </em>
                ) : (
                  <em>{formation.dates}</em>
                )}
              </p>
              {formation.assignments &&
                formation.assignments.map((e) => (
                  <div key={e.id} className='detail'>
                    {e.link ? (
                      <a
                        className='name'
                        href={e.link}
                        target='_blank'
                        rel='noreferrer'
                      >
                        <p>
                          {`${e.name}`}
                          <em>{` | ${e.object}`}</em>
                        </p>
                      </a>
                    ) : (
                      <p className='name'>
                        {e.name}
                        <em>{` | ${e.object}`}</em>
                      </p>
                    )}

                    {e.languages && (
                      <p>
                        <em className='projectLanguages'>{e.languages}</em>
                      </p>
                    )}
                  </div>
                ))}
            </div>
          ))}
        </div>

        <div className='part skills'>
          <div className='title'>
            <h4>COMPÉTENCES</h4>
          </div>
          <div className='text'>
            <div>
              <h5>LOGICIELS</h5>
              {cvData.skills.softwares.map((ss) => (
                <p key={ss}>{ss}</p>
              ))}
            </div>
            <div>
              <h5>PERSONNELLES</h5>
              {cvData.skills.personal.map((sp) => (
                <p key={sp}>{sp}</p>
              ))}
            </div>
            <div>
              <h5>LANGUE</h5>
              {cvData.skills.language.map((sl) => (
                <p key={sl}>{sl}</p>
              ))}
            </div>
          </div>
        </div>

        <div className='part hobbies'>
          <div className='title'>
            <h4>CENTRES D’INTÉRÊT</h4>
          </div>
          <div className='text'>
            {cvData.hobbies.map((h) => (
              <div key={h.id}>
                {h.link ? (
                  <a href={h.link} target='_blank' rel='noreferrer'>
                    <p>{`${h.name}`}</p>
                  </a>
                ) : (
                  <p className='name'>{h.name}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </CvStyle>
    </>
  );
};
export default Cv;
