"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navigation from './Navigation';


const ImageModal = ({ src, alt, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={onClose}>
    <div className="relative w-full h-full max-w-4xl max-h-4xl" onClick={e => e.stopPropagation()}>
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="contain"
      />
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2"
      >
        Close
      </button>
    </div>
  </div>
);

const TimelineEvent = ({ date, description, images, index }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className={`flex flex-col md:flex-row items-center mb-16 ${isEven ? 'md:flex-row-reverse' : ''}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className={`w-full md:w-1/2 ${isEven ? 'md:pl-8' : 'md:pr-8'}`}>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="font-bold text-lg text-black mb-2">{date}</h3>
          <p className="text-black">{description}</p>
        </div>
      </div>
      <div className="w-full md:w-1/2 mt-4 md:mt-0">
        <div className="grid grid-cols-2 gap-2">
          {images && images.map((img, imgIndex) => (
            <div 
              key={imgIndex} 
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer"
              onClick={() => setSelectedImage(img)}
            >
              <Image
                src={img}
                alt={`Event image ${imgIndex + 1}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
        </div>
      </div>
      {selectedImage && (
        <ImageModal
          src={selectedImage}
          alt="Full size image"
          onClose={() => setSelectedImage(null)}
        />
      )}
    </motion.div>
  );
};

const TimelineSection = ({ title, events }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-8">
      <button
        className="w-full text-left font-bold text-xl mb-4 bg-white p-4 rounded shadow-md hover:bg-gray-100 transition-colors duration-200 text-black"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
      </button>
      {isOpen && (
        <div>
          {events.map((event, index) => (
            <TimelineEvent
              key={index}
              date={event.date}
              description={event.description}
              images={event.images}
              index={index}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const Timeline = () => {
  const timelineData = [
    {
      title: "Divestment Movements at Princeton in 2010/2011",
      events: [
        {
          date: "December, 2010",
          description: "Boycott Sabra Hummus Campaign 2010: Princeton Committee on Palestine puts forth an undergraduate student referendum calling for the student government to ask the university’s dining services for “an alternative brand of hummus in addition to Sabra.” ",
          images: ['/placeholder1.jpg', '/placeholder2.jpg']
        },
      ]
    },
    {
      title: "Divestment Movements at Princeton in 2014",
      events: [
        {
          date: "August 14th, 2014",
          description: "Over 600 protesters gather in Scudder Plaza after a march down Nassau St. organized by Princeton for Palestine protesting",
          images: ['/placeholder3.jpg', '/placeholder4.jpg']
        },
        {
          date: "October 13th, 2014",
          description: "Commemoration of all those who perished during Israel's conduct of Operation Cast Lead (flags put on Frist North lawn)",
          images: ['/placeholder5.jpg', '/placeholder6.jpg']
        },
        {
          date: "November 4th, 2014",
          description: "Princeton Committee on Palestine creates a Gaza Memorial outside the Frist Campus Center and invites the Princeton University Community to write letters to families who lost children over the summer.",
          images: ['/placeholder7.jpg', '/placeholder8.jpg']
        },
        {
          date: "Night of November 4th/5th, 2014",
          description: "Princeton Committee on Palestine’s Gaza Memorial is Vandalized. Hundreds of flags were uprooted, broken and torn.",
          images: ['/placeholder9.jpg', '/placeholder10.jpg']
        },
        {
          date: "November 5th, 2014",
          description: "48 Tenured Princeton University Processors publish an open letter calling on the University to divest from companies that profit from or contribute to the Israeli military occupation of the West Bank and siege on Gaza.",
          images: ['/placeholder11.png', '/placeholder12.png']
        },
        {
          date: "December 11th, 2014",
          description: "Student petition with signatures from 504 undergraduate and 72 graduate students presented to the Resources Committee on December 11th, 2014",
          images: ['/placeholder13.png', '/placeholder14.png']
        },
      ]
    },

    {
      title: "Divestment Movements at Princeton Before 2022",
      events: [
        {
          date: "May 13th, 2015",
          description: "Princeton students vote against Divestment referendum: After a three-day voting period, undergraduate students last month rejected a call for the University to divest from companies that are “complicit in the Israeli occupation of the West Bank and blockade of the Gaza Strip” by a 1,067–965 vote. About 39 percent of students voted.",
          images: ['/placeholder15.png', '/placeholder16.png']
        },
        {
          date: "November 9, 2021",
          description: "“Palestinian Right of Return Panel” hosted by PCP with Lamis Deek, Palestinian human rights attorney and founder of Al-Awda: The Palestinian Right to Return Coalition NY, and other Palestinian speakers. The event was well-attended and held in Lewis Library 120. The speakers shared their stories as Palestinians living in diaspora without equitable access to their Israeli-occupied homeland. Lamis was verbally attacked by zionist attendees after the event. PCP hosted a dinner with Palestinian food after with members and the speakers.",
          images: ['/placeholder17.png', '/placeholder18.png']
        },
        {
          date: "November 20, 2021",
          description: "A Child’s View from Gaza outdoor art exhibit held on Frist South Lawn hosted by PCP and co-sponsored with the Alliance of Jewish Progressives and Jewish Voices for Peace Central Jersey Chapter. This exhibit featured works from a children’s art therapy class in Gaza after the zionist bombardment and invasion of Gaza called “Operation Cast Lead” in December 2008-January 2009. Over 50 students, faculty, and community members attended. ",
          images: ['/placeholder19.jpg', '/placeholder20.jpg']
        },


        // more events to be added as needed
      ]
    },
    {
      title: "Caterpillar Divestment Movement in 2022",
      events: [
        {
          date: "January 26, 2022",
          description: "SPEAR x PCP teach-in on Angela Davis’ “Freedom is a Constant Struggle: Ferguson, Palestine, and the Foundations of a Movement” held in East Pyne 010 with generous attendance. This event was held as part of a week of solidarity with Palestinian political prisoners drawing connections between American and Palestinian political prisoners.",
          images: ['/placeholder21.jpg', '/placeholder22.png']
        },
        {
          date: "February 24, 2022",
          description: "Princeton Committee on Palestine holds protest outside Center for Jewish Life against University-affiliated internships in “Israel.” The organizers protested that the University is funding, facilitating, and supporting programs located in occupied historic Palestine (‘48) where Palestinians are not able to return to or travel. The protestors held signs correcting the zionist names of Palestinian cities with the Palestinian names and encouraged their classmates to reject interning on stolen land.",
          images: ['/placeholder.jpg', '/placeholder.jpg']
        },
        {
          date: "Spring 2022",
          description: "Weekly Keffiyeh Thursdays hosted by PCP to show solidarity with Palestine. Members gathered at 4:30pm every Thursday for a photo wearing keffiyehs outside of Frist Campus Center",
          images: ['/placeholder.jpg', '/placeholder.jpg']
        },
        {
          date: "March 27, 2022",
          description: "USG debates language of referendum regarding Princeton’s Caterpillar machinery use after Princeton Committee on Palestine proposes USG referendum calling on Princeton to stop using Caterpillar construction machinery. USG senators who were present and former members of Tigers for Israel attempted to strike down the referendum and amend its language. After over an hour and a half after discussion of referendum language, the Senate voted to approve the referendum language. It approved the referendum language with twelve members voting in favor, five abstaining, and five opposing.",
          images: ['/placeholder.jpg', '/placeholder.jpg']
        },
        {
          date: "April 5, 2022",
          description: "Princeton Committee on Palestine proposes USG referendum calling on Princeton to stop using Caterpillar construction machinery in all ongoing and future campus construction projects given the violent role that Caterpillar machinery plays in the mass demolition and destruction of Palestinian homes, the murdering of Palestinians and pro-Palestine activists in Palestine, and its role in the Prison Industrial Complex. They encouraged students to vote YES on USG Referendum Question No. 3 on April 11-13, 2022.",
          images: ['/placeholder.jpg', '/placeholder.jpg']
        },
        {
          date: "April 6, 2022",
          description: "Princeton Committee on Palestine (PCP) and Students for Prison Education, Abolition, and Reform (SPEAR) host Caterpillar Referendum Teach-In joined by Craig and Cindy Corrie, the parents of Rachel Corrie, a protestor who was murdered by a Caterpillar bulldozer while protesting the demolition of Palestinian homes in Rafah, Gaza in 2003 along with Rutgers professor David Letwin. This event was held in Whig Senate Chamber and over a hundred students were in attendance. The room was full.",
          images: ['/placeholder.jpg', '/placeholder.jpg']
        },
        {
          date: "April 7, 2022",
          description: "The Alliance for Jewish Progressives publishes Op-Ed in support of the Caterpillar referendum in the Daily Princetonian: As the Alliance of Jewish Progressives, we support dissociation from Caterpillar.",
          images: ['/placeholder.jpg', '/placeholder.jpg']
        },
        {
          date: "April 2022",
          description: "National pro-Israel groups spend over $1K on sponsored ads denouncing USG referendum and encouraging students to vote “no” utilizing facebook and instagram ads. These groups included Alums for Campus Fairness (ACF) and Israel War Room (IWR).",
          images: ['/placeholder.jpg', '/placeholder.jpg']
        },
        {
          date: "April 12, 2022",
          description: "Post on PCP Instagram encouraging students to take pictures of Caterpillar machines on campus and post with the hashtag #BuildingPrincetonDestroyingPalestine",
          images: ['/placeholder.jpg', '/placeholder.jpg']
        },
        {
          date: "April 13, 2022",
          description: "Preliminary results of the election after voting is closed show Caterpillar referendum passes on USG ballot with 52.2% of the vote. PCP makes a victory post on instagram. That night, one objection to election management is submitted to USG by Myles, arguing that exclusion of the 424 “abstain” votes from the total vote tally in calculating the majority is unfair.",
          images: ['/placeholder.jpg', '/placeholder.jpg']
        },
        {
          date: "April 14-15, 2022",
          description: "Various zionist media platforms falsely claim that the Caterpillar referendum failed to pass and dox the USG elections manager by posting his full name and face online. At least one group named Israel War Room spends $800-$899 on facebook ads spreading misinformation.",
          images: ['/placeholder.jpg', '/placeholder.jpg']
        },
        {
          date: "April 17, 2022",
          description: "A member of PCP and a member of the Alliance for Jewish Progressives publish op-ed condemning the objections to void the Caterpillar referendum: “Abstaining from common sense: the antidemocratic push to void the Caterpillar referendum”",
          images: ['/placeholder.jpg', '/placeholder.jpg']
        },
        {
          date: "April 18, 2022",
          description: "Four USG senate members submit an appeal to the USG that contested “the actions of Chief Elections Manager,” claiming he misinformed Tigers for Israel (TFI) President about how abstentions are counted in the referendum’s overall vote tally. The USG holds special meeting to discuss appeal regarding Caterpillar referendum and votes on the appeal.",
          images: ['/placeholder.jpg', '/placeholder.jpg']
        },
        {
          date: "April 20, 2022",
          description: "USG Senate makes public that it voted 15-5 to uphold the appeal over the Caterpillar referendum. While upholding the appeal, USG also said in the email that by the rules of the USG Constitution, the referendum passes. As a result, the senate withholds a statement to University for or against referendum, which is procedure. Instead, they submit 2022 USG decision on the Referendum to university officials.",
          images: ['/placeholder.jpg', '/placeholder.jpg']
        },
        {
          date: "April 22, 2022",
          description: "Princeton University president Christopher L. Eisgruber ’83 sends email to Undergraduate Student Government (USG) President Mayu Takeuchi ’23 and USG Secretary Charlotte Selover ’25 in the morning of Friday, April 22 making clear that the university will not pursue any actions in response to Referendum No. 3 and will not divest from Caterpillar despite majority student body approval of referendum calling for divestment from Caterpillar.",
          images: ['/placeholder.jpg', '/placeholder.jpg']
        },
        {
          date: "May 17, 2022",
          description: "Princeton Committee on Palestine holds Nakba Day vigil for Al Jazeera journalist Shireen Abu Akleh who was murdered by the “Israeli” Occupation Forces",
          images: ['/placeholder.jpg', '/placeholder.jpg']
        },
      ]
    },
    {
      title: "Planning Encampment and Planning Documents Leak in 2024",
      events: [
        {
          date: "April 17th, 2024",
          description: "Columbia University Gaza Solidarity Encampment goes live",
          images: ['/placeholder.jpg', '/placeholder.jpg']
        },
        {
          date: "April 18th & 19th, 2024",
          description: "Members of Princeton Israeli Apartheid Divest (PIAD) visit the Columbia University Gaza Solidarity Encampment",
          images: ['/placeholder.jpg', '/placeholder.jpg']
        },
        {
          date: "April 20th, 2024",
          description: "First meeting with Princeton’s Chapter of Students for Justice in Palestine (SJP) and PIAD, First task was gathering people who were determined as “red”, who would be willing to be suspended and/or arrested for the cause. It also consisted of 8 or 9 people who gave themselves 24 hours to see if they could recruit 50 people to take on “red” roles. ",
          images: ['/placeholder.jpg', '/placeholder.jpg']
        },

        {
          date: "April 24, 2024",
          description: "8:18 AM: National Review publishes an article by Abigail Anthony revealing that Princeton University students are preparing to establish an anti-Israel protest encampment. ",
          images: ['/placeholder.jpg', '/placeholder.jpg']
        },
        {
          date: "April 24, 2024",
          description: "10:08 AM: University Vice President for Campus Life W. Rochelle Calhoun sends an email to all undergraduates, about two hours after the National Review article was published, reiterating the school's free-expression policies, warning students about the consequences of setting up an encampment, and Stating that individuals involved in unlawful disruptive conduct who refuse to stop after a warning will be arrested and immediately barred from campus.",
          images: ['/placeholder.jpg', '/placeholder.jpg']
        },
        {
          date: "April 24, 2024",
          description: "12:43 PM: The Daily Princetonian publishes an article by Miriam Waldvogel confirming the leak and independently verifying the documents. The article adds that no tents had been erected in the Nassau Hall area at the time of publication and that the documents did not specify a timeline for when the encampment might begin.",
          images: ['/placeholder.jpg', '/placeholder.jpg']
        },
        {
          date: "April 24, 2024",
          description: "Evening: Organizers affirm their plan to continue with the demonstration despite the administration's warnings.",
          images: ['/placeholder.jpg', '/placeholder.jpg']
        },
        {
          date: "April 25, 2024",
          description: "Early morning: Students begin the sit-in on McCosh Courtyard, implementing plans revealed in the leaked documents. At 7:00 AM, Protesters enter McCosh Courtyard and begin erecting tents.",
          images: ['/placeholder.jpg', '/placeholder.jpg']
        },
        {
          date: "April 25, 2024",
          description: "At 7:03 AM, Princeton Public Safety (PSAFE) issues its first warning to protesters.",
          images: ['/placeholder.jpg', '/placeholder.jpg']
        },
        {
          date: "April 25, 2024",
          description: "At 7:06 AM, Two graduate students, Achinthya Sivalingam and Hassan Sayed, are arrested by PSAFE.",
          images: ['/placeholder.jpg', '/placeholder.jpg']
        },
      ]
    },
    {
      title: "First Part of Encampment (and Clio Hall Occupation) until Bargaining Team Met with the Administration (2024)",
      events: [
        {
          date: "May 6, 2024",
          description: "First Bargaining Meeting: The first bargaining meeting between the encampment organizers and Princeton University administrators takes place. The meeting sets the stage for ongoing negotiations and discussions.",
          images: ['/placeholder.jpg', '/placeholder.jpg']
        },
      ]
    },
    {
      title: "Second Part of Encampment after First Bargaining Meeting (2024)",
      events: [
        {
          date: "May 7, 2024",
          description: "March on Campus: Demonstrators march on campus and rally in front of Nassau Hall. “We’re speaking out in solidarity with Palestine,” said Urvi, a first-year Ph.D. student.",
          images: ['/placeholder.jpg', '/placeholder.jpg']
        },
      ]
    },
    {
      title: "2024 Nakba Day and Encampment Closure",
      events: [
        {
          date: "Monday, May 13th, 6:08pm",
          description: "Eisgruber sends out an email saying, “Finally, we are now letting the protestors know that they need to clear Cannon Green and respect the University’s need for it and other common spaces, so that the University may prepare for and produce end-of-year events.  The sit-in makes it impossible to ready the green for Class Day and other events and has required large amounts of time from University staff members who have served selflessly, seven days a week, and are now needed for other purposes.” Throughout the evening and night, organizers strategize about maintaining the camp without putting protestors at risk.",
          images: ['/placeholder.jpg', '/placeholder.jpg']
        },
        {
          date: "Tuesday, May 14th, Morning",
          description: "Campus administrative officials and administration repeatedly come to the perimeter of the encampment, urging protestors to shut down camp. These interactions are filmed by organizers. Organizers tell administrative officials that they will begin packing up some items, but inform them that this process is difficult if admin continues to interfere. The administration offers assistance in dismantling or moving camp items and organizers decline. The art station is moved so that facilities workers can use the space closest to Nassau Hall. Signs saying “space closed” are placed by admin on the perimeter of the lawn. Unsure of the implications of the signs, encampment members arrive to be legal observers should anything escalate.",
          images: ['/placeholder.jpg', '/placeholder.jpg']
        },
        {
          date: "Tuesday, May 14th, around 1.30pm",
          description: "Several organizers meet with the Dean of Undergraduate Studies and inform him that the following day, Wednesday, is Nakba Day and there will be full programming. Organizers do not submit an official end time of camp. In the late afternoon/early evening, organizers receive a stern email stating that the encampment is not permitted.",
          images: ['/placeholder.jpg', '/placeholder.jpg']
        },
        {
          date: "Wednesday, May 15th",
          description: "Nakba Day programming is held all day and after a closing vigil, protestors clean up all remaining encampment items (around 9pm)",
          images: ['/placeholder.jpg', '/placeholder.jpg']
        },
      ]
    },
    {
      title: "2024 Reunions",
      events: [
        {
          date: "May 23, 24",
          description: "Princeton Rally for Divestment: March from Nassau Hall to the Louis A Simpson International building where the CPUC meeting on divestment was being held. ",
          images: ['/placeholder.jpg', '/placeholder.jpg']
        },
      ]
    },

  ];

  console.log("Timeline Data:", timelineData); // Debugging log

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center text-black">Princeton Palestine Solidarity Timeline</h1>
        {timelineData.map((section, index) => (
          <TimelineSection key={index} title={section.title} events={section.events} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;