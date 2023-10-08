

const Spekaer = ({Aspeaker}) => {
   const {id,name,designation,img,platform} = Aspeaker;
    return (
        <div className="speakerImg relative" >
            <img src={img} alt="" />
            <div className="speakerOverlay w-full h-full absolute left-0 top-0  opacity-0 ">
                <div className="speakerOverlayContent flex  ">
               <div className="justify-center items-center">
                
               <h2 className="text-xl font-semibold  ">{name}</h2>
               <p>{designation}</p>
               </div>
                 
                </div>
            </div>
        </div>
    );
};

export default Spekaer;