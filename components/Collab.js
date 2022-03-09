import Image from 'next/image';

export default function Collab(props){
    return (
        <>
          <div className="work-div">
            <div className="flex justify-center">
              <Image src={props.src} height={900} width={1600} className="object-cover rounded-xl" alt={props.alt}/>
            </div>
            <div>
              <h2 className="text-center">{props.title}</h2>
              <p className="text-center">{props.content}</p> 
            </div>
          </div>
        </>
    )
}
