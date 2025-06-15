import React from 'react'
import Test1 from "../assets/test1.jpg"
import Test2 from "../assets/test2.jpg"
import Test3 from "../assets/test3.jpg"
import Test4 from "../assets/test4.jpg"

function Testimonilas() {
  const features = [
    {
      icon: <img src={Test1} className="w-28 rounded-full h-28 text-blue-600" />,
      title: "Chala Magarsa",
      desc: "Our marriage was broken, and we were about to separate. We attended a family seminar at Araara Church. Through the teaching and prayers, God restored our love and healed our home. Today, we serve together as a family in the church..",
    },
    {
      icon: <img src={Test2} className="w-28 h-28 text-blue-600 rounded-full" />,
      title: "Ilhem mohammed",
      desc: "For over six years, I couldn’t walk without support. Doctors gave up, but I came to a healing service at Araara Church in Nekemte. After prayer from the minister, I felt strength return to my legs. I stood up and walked on my own. Today, I walk freely. God healed me!.",
    },
    {
      icon: <img src={Test3} className="w-28 h-28 rounded-full  text-blue-600" />,
      title: "Burtukan Tola ",
      desc: "I had suffered from severe back pain for over eight years. No treatment helped. One Sunday at Araara Church, during worship, the minister prayed for healing. I felt sudden relief, and the pain disappeared instantly. Since that day, I’ve been completely healed and serving joyfully in the choir.",
    },
    {
      icon: <img src={Test4} className="w-28 h-28 rounded-full  text-yellow-600" />,
      title: "Eden Abdisa",
      desc: "I was tormented for years—nightmares, voices, fear. My family tried everything. But at an Araara Church crusade, a minister prayed over me. I felt something leave my body. Since then, I’ve had peace. Jesus delivered me completely..",
    }
  ];

  return (
    <div id="dhugabahuu" className="scroll-mt-25 mt-15">
    <section  className=" w-full bg-gray-50 py-12 px-4 md:px-8">
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold">Life-Changing Testimonies and Deliverance.</h1>
        <h4 className="text-lg text-gray-700 mt-3">
        Transformation Through the Power of God at Araara Church.
        </h4>
      </div>

      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-white  rounded-2xl p-6 h-[380px] w-full shadow-md hover:shadow-xl transition duration-300 text-center"
          >
            <div className="flex justify-center mb-4">{f.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800">{f.title}</h3>
            <p className="text-gray-700  leading-relaxed  mt-3 text-sm">{f.desc}</p>

          </div>
        ))}
      </div>
      </section>
      </div>
  );
}

export default Testimonilas