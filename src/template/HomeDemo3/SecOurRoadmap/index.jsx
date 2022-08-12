import SectionHeading from '../../../components/SectionHeading'
import Timeline from './Timeline'

const SecOurRoadmap = ({data , img}) => {

  return (
    <section className="roadmap section-padding-100" style={{background: `url(${img}) center center / cover no-repeat`, backgroundSize: 'cover'}} id="roadmap">
        <SectionHeading
            title='Our PROJECT Roadmap'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.'
        />
        <div className="container-fluid">
          <div className="row">
            <div className="section_5-content">
              <div className="section_5-slider-trumb" />
              <div id="section_5-slider-circle">
               
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}

export default SecOurRoadmap;