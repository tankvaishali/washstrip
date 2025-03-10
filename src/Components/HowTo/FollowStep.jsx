import React from 'react'

function FollowStep() {

    const steps = [
        {
            number: 1,
            title: "Take 20 Clothes In Washing Machine",
            image: "https://img.freepik.com/premium-photo/close-up-woman-putting-laundry-washing-machine_1048944-20471160.jpg?ga=GA1.1.949763891.1720709653",
            className: "Follow_letter_teal",
            titleClass: "Follow_Tittle_teal"
        },
        {
            number: 2,
            title: "Keep 1 Detergent Sheet In Machine",
            image: "https://klaaar.care/cdn/shop/files/3_e31f8284-dab4-4e11-90da-21b26a5243f0.png?v=1697717216&width=1445",
            className: "Follow_letter_green",
            titleClass: "Follow_Tittle_green"
        },
        {
            number: 3,
            title: "Run Washing Machine For 40-45 Min",
            image: "https://img.freepik.com/premium-photo/washing-machine-with-color-clothes-inside_599769-12.jpg?ga=GA1.1.949763891.1720709653",
            className: "Follow_letter_teal",
            titleClass: "Follow_Tittle_teal"
        },
        {
            number: 4,
            title: "Your Clothes Has Been Washed Out",
            image: "https://img.freepik.com/free-photo/woman-putting-dirty-clothes-washing-machine_23-2149117031.jpg?ga=GA1.1.949763891.1720709653",
            className: "Follow_letter_green",
            titleClass: "Follow_Tittle_green"
        }
    ];

    return (
        <>
            <div className='FollowStep_bg mb-5 py-5' style={{ marginTop: "120px" }}>
                <div className="container">
                    <div>
                        <h2 className='fstyle text-center text-white'>Steps To Follow</h2>
                    </div>
                    <div className='row mt-3'>
                        {steps.map((step, index) => (
                            <div key={index} className='col-12 col-lg-3 col-md-6 p-3'>
                                <div className='h-100'>
                                    <div className='d-flex flex-column align-items-center'>
                                        <h1 className={`${step.className} text-center rounded-circle fstyle text-white fw-bold d-flex justify-content-center align-items-center`}>
                                            {step.number}
                                        </h1>
                                    </div>
                                    <div className={`${step.titleClass} mt-3 mb-4 p-2 fw-bold pera text-white text-center`}>
                                        {step.title}
                                    </div>
                                    <div className='Follow_img rounded-3 p-2'>
                                        <img src={step.image} className='object-fit-cover' alt="" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default FollowStep