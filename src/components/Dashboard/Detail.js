import React, { useState } from 'react';
import Swal from 'sweetalert2';

import { doc, setDoc } from "firebase/firestore"; 
import { db } from '../../config/firestore'

const Detail = ({handleHomePage}) => {


  return (
   <>
    <div className="small-container">
    <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={handleHomePage}
          />
    </div>
    </>
  );
};

export default Detail;
