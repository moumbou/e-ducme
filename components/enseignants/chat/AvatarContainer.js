import React from "react";
import Avatar from "./Avatar";

function AvatarContainer() {

    const pictures = [
        'https://scontent.fqsf1-2.fna.fbcdn.net/v/t39.30808-1/270735956_109055164985529_4377866657108584528_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=109&ccb=1-5&_nc_sid=7206a8&_nc_ohc=d-UfwwdCT9sAX8binNj&tn=D1gOjRBcEx9FlyHz&_nc_ht=scontent.fqsf1-2.fna&oh=00_AT_W8qaQhPAvV_9RP4VGkDS722Y7v0G31rqd50yxunDZSw&oe=624FB707',
        'https://scontent.fqsf1-2.fna.fbcdn.net/v/t39.30808-6/274549034_488697262837135_303227310687084933_n.jpg?stp=c12.0.64.64a_cp0_dst-jpg_p64x64&_nc_cat=109&ccb=1-5&_nc_sid=70495d&_nc_ohc=Eq6Kn-xUXtUAX9U9nsr&tn=D1gOjRBcEx9FlyHz&_nc_ht=scontent.fqsf1-2.fna&oh=00_AT8A00bvz--YCpvUXG8aglFczk6ZbdCHrmNzbMDTf-Z2lg&oe=624F407B',
        'https://avatars.githubusercontent.com/u/60050570?v=4',
    ]

  return (
    <div target="member-container">
        {
            pictures.map((val, i) => {
                const length = pictures.length
                if(!i) return <Avatar translate={length >= 4 ? 150 : (length - 1) * 50} src={val} key={i} />
                if(i <= 3 && length <= 3) return <Avatar translate={i == 1 && length > 2 ? 50 : 0} src={val} key={i} />
                if(i <= 3 && length >= 4) return <Avatar translate={i == 1 && length > 2 ? 100 : 50} src={val} key={i} />
            })
        }
        <div target="list-length" style={{ display: `${pictures.length - 3 > 0 ? 'block' : 'none'}` }} data-counter={`+${pictures.length - 3}`}></div>
    </div>
  );
}

export default AvatarContainer;
