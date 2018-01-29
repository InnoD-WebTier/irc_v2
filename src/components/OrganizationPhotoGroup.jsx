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
          name="AHS"
          description="Non-partisan debate organization that inspires and educates
          students in the importance of American leadership in the world"
          img={bmun}
        />
        <OrganizationPhoto
          name="BMUN"
          description="Berkeley Model United Nations is a student-run organization
          on the UC Berkeley campus the runs the world's premier -- and very first --
          United Nations simulation."
          img={bmun}
        />
        <OrganizationPhoto
          name="UCBMUN"
          description="A student run organization on the UC Berkeley campus dedicated
            to planning and hosting the biggest high school Model United Nations conference
            on the West Coast, and the oldest conference in the nation."
          img={ucbmun}
        />
        <OrganizationPhoto
          name="SIP"
          description="An honors society for international studies that promotes and rewards
          scholarship and service among students and faculty in higher education so as to
          foster creative performance and integrity in the conduct of world affairs."
          img={sip}
        />
        <OrganizationPhoto
          name="Delta Phi Epsilon"
          description="UC Berkeley’s only co-ed professional Foreign Service and
          international relations fraternity."
          img={dps}
        />
        <OrganizationPhoto
          name="Amnesty International"
          description="Amnesty International undertakes research and action focused
           on preventing and ending grave abuses of the rights to physical and mental
            integrity, freedom of conscience and expression, and freedom from
            discrimination, within the context of its work to promote all human rights."
          img={amnesty}
        />
      </div>
    </div>
  );
};

export default OrganizationPhotoGroup;
