import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import { FaGooglePlusG } from 'react-icons/fa'
import { GrFacebookOption } from 'react-icons/gr'
import { TbBrandWhatsapp } from 'react-icons/tb'
import Titlecom from '../HOC/Titlecom'

const teamMembers = [
    {
        name: "Williamson",
        role: "Web Developer",
        img: "https://bestjquery.com/tutorial/our-team/demo68/images/img-1.jpg"
    },
    {
        name: "Jessica Doe",
        role: "Graphic Designer",
        img: "https://bestjquery.com/tutorial/our-team/demo68/images/img-1.jpg"
    },
    {
        name: "Jessica Doe",
        role: "UI/UX Designer",
        img: "https://bestjquery.com/tutorial/our-team/demo68/images/img-1.jpg"
    },
    {
        name: "Sophia Brown",
        role: "Marketing Manager",
        img: "https://bestjquery.com/tutorial/our-team/demo68/images/img-1.jpg"
    }
];

function Team() {
    return (
        <div className='our_team_bg my-5'>
            <div className="container py-5">
                <div className="d-flex flex-column align-items-center">
                    <Titlecom ftitle={"Our Team"} />
                </div>
                <div className="pera text-secondary text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae dolorum veniam qui consequatur sit ducimus autem repellat tempora, impedit modi iste perferendis illum voluptates deleniti repudiandae est assumenda doloribus omnis nam libero doloremque. Similique cupiditate, facilis explicabo ex eum quos.
                </div>
                <div className="row mt-5 mb-2">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="col-12 col-lg-3 col-md-6">
                            <div className="our-team overflow-hidden position-relative">
                                <img src={member.img} alt={member.name} />
                                <ul className="social">
                                    <li className="fs-5 text-white"><GrFacebookOption /></li>
                                    <li className="fs-5 text-white"><BsInstagram /></li>
                                    <li className="fs-5 text-white"><TbBrandWhatsapp /></li>
                                    <li className="fs-5 text-white"><FaGooglePlusG /></li>
                                </ul>
                                <div className="team-content text-uppercase">
                                    <h3 className="fstyle fs-5">{member.name}</h3>
                                    <span className="pera text-secondary">{member.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Team;