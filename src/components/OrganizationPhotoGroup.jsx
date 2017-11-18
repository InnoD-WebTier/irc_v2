import React from "react";
import '../styles/OrganizationPhoto.scss';
import '../styles/OrganizationPhotoGroup.scss';
import OrganizationPhoto from '../components/OrganizationPhoto';
import bmun from '../assets/images/BMUN.png';
import ucbmun from '../assets/images/UCBMUN.png';
import sip from '../assets/images/SIP.png';
import dps from '../assets/images/DPS.png';
import amnesty from '../assets/images/Amnesty.png';

const OrganizationPhotoGroup = () => {
  return (
    <div className='PhotoWrapper'>
      <div className='OrganizationPhotoGroup'>
        <OrganizationPhoto
          name="BMUN"
          description="Berkeley Model United Nations is a student-run organization
          on the UC Berkeley campus the runs the world's premier -- and very first --
          United Nations simulation."
          img={bmun}
        />
        <OrganizationPhoto
          name="UCBMUN"
          description="description here"
          img={ucbmun}
        />
        <OrganizationPhoto
          name="SIP"
          description="description here"
          img={sip}
        />
        <OrganizationPhoto
          name="Delta Phi Epsilon"
          description="description here"
          img={dps}
        />
        <OrganizationPhoto
          name="Amnesty International"
          description="description here"
          img={amnesty}
        />
      </div>
    </div>
  );
};

export default OrganizationPhotoGroup;
