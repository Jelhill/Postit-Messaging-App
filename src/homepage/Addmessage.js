import React from "react";
import nnamdi from "../Images/nnamdi.jpg";

export const Addmessage = () => {
  return (
          <div>
           <div className="compo-1">
                <div className="sub-compo">
                  <div className="post">
                  <img src={nnamdi} alt='user' />
                      <h5>Okorie Nnamdi</h5>
                    </div>  
                    <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Laudantium perferendis tempore neque fuga! Nobis inventore, odio
                      aliquam animi repellendus magnam sunt, tempora quibusdam, ducimus
                      consequatur est qui placeat hic sapiente libero cupiditate! Vitae
                      qui quaerat dolores placeat, ab dignissimos velit.
                    </p>
                </div>
            </div>
            <form className='addmessage'>
      <div className='medialine'>
        <input
          type='text'
          className='form-control'
          placeholder='Type your message here...'
          aria-label='Type your message here...'
          aria-describedby='basic-addon'
        />
        <button className='input-group-text' id='basic-addon'>
          <svg
            className='bi bi-cursor-fill'
            width='1em'
            height='1em'
            viewBox='0 0 16 16'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              d='M14.082 2.182a.5.5 0 01.103.557L8.528 15.467a.5.5 0 01-.917-.007L5.57 10.694.803 8.652a.5.5 0 01-.006-.916l12.728-5.657a.5.5 0 01.556.103z'
              clip-rule='evenodd'
            />
          </svg>
        </button>
        <button className='input-group-text' id='basic-addon'>
          <svg
            className='bi bi-paperclip'
            width='1em'
            height='1em'
            viewBox='0 0 16 16'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              d='M4.5 3a2.5 2.5 0 015 0v9a1.5 1.5 0 01-3 0V5a.5.5 0 011 0v7a.5.5 0 001 0V3a1.5 1.5 0 10-3 0v9a2.5 2.5 0 005 0V5a.5.5 0 011 0v7a3.5 3.5 0 11-7 0V3z'
              clip-rule='evenodd'
            />
          </svg>
        </button>
      </div>
    </form>
          </div>   
  );
};

export default Addmessage;
