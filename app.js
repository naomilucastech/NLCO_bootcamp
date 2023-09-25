const headText = [
  "THIS IS NOT A TRAINING.",
  "IT IS NOT A COURSE.",
  "ITS PRIMARY PURPOSE IS NOT TO TEACH YOU SKILLS.",
  "A JOB PROGRAM DESIGNED TO HELP YOU FIND MEANINGFUL WORK.",
  "TAKE CHARGE OF YOUR CAREER TODAY!",
  "APPLICATION CLOSES: 11TH OCTOBER 2023",
  "BOOTCAMP STARTS 23RD OCTOBER 2023",
];

const bodyText = [
  "It is an intervention designed for those who have run out of options.",
  "It will force you out of complacency. It will demand answers from you.",
  "It will cause you to question your beliefs. It will stretch you.",
  "If you are tired of searching without success, employed but unhappy, or STUCK; you are in the right place.",
  "Show up for yourself. Apply now!.",
  "It is highly competitive. Less than 30% of Applicants are selected per cohort. Apply early!",
  "The Employment Bootcamp is new, disruptive and brutally effective. Show up for yourself",
];

const facilitators = [
  {
    name: "Alex Ohai",
    image: "./assets/facilitators/alex.jpg",
    url: "https://www.linkedin.com/in/alexnnekaohai/",
    title: "Head, HR, 9 Payment Service Bank",
  },
  {
    name: "Anthony Otuya Ndubishi",
    image: "./assets/facilitators/anthony.jpg",
    url: "https://www.linkedin.com/in/anthonyotuyandubishi/",
    title: "Managing Partner, Crossview Solutions Intl Ltd",
  },
  {
    name: "Ese Oraka",
    image: "./assets/facilitators/ese.jpg",
    url: "https://www.linkedin.com/in/eseoraka/",
    title: "Partner, Adelphi Innovation Consulting",
  },
  // {
  //   name: "J’odie",
  //   image: "./assets/facilitators/jodie.jpg",
  //   url: "https://www.instagram.com/jodiegreat/",
  //   title: "Musician and Author",
  // },
  {
    name: "Kaelo Ajuluchukwu",
    image: "./assets/facilitators/kaelo.png",
    url: "https://www.linkedin.com/in/%E2%80%98kaelo-ajuluchukwu-b0a95948/",
    title: "Associate General Counsel, Meta",
  },
  {
    name: "Kathleen Ndongmo",
    image: "./assets/facilitators/kathleen.jpg",
    url: "https://www.linkedin.com/in/kathleenndongmo/",
    title: "Digital Content Manager, Viamo",
  },
  {
    name: "Maryam Aliko Mohammed",
    image: "./assets/facilitators/mariam.jpg",
    url: "https://www.linkedin.com/in/maryamalikomohammed/",
    title: "CEO, Modalali",
  },
  {
    name: "Mayowa Adegoke",
    image: "./assets/facilitators/mayowa.jpg",
    url: "https://www.linkedin.com/in/mayowaadegoke/",
    title: "International journalist and Public Speaker",
  },
  {
    name: "Olusola John",
    image: "./assets/facilitators/olusola.jpg",
    url: "https://www.linkedin.com/in/johnolusola/",
    title: "Founder, Careerwise",
  },
  {
    name: "Segun Lawal",
    image: "./assets/facilitators/segun.jpg",
    url: "https://www.linkedin.com/in/segunlawal-100q007/",
    title: "Founder, Spirit of David",
  },
  {
    name: "Toluwase Olaniyan",
    image: "./assets/facilitators/Toluwase.jpg",
    url: "https://www.linkedin.com/in/toluwase-olaniyan/",
    title: "CEO, Worden",
  },
  {
    name: "Folakemi Onamade",
    image: "./assets/facilitators/folakeme.jpg",
    url: "https://www.linkedin.com/in/folakemi-onamade-737336162/",
    title: "Learning Delivery, Naomi Lucas",
  },
  {
    name: "Aisha Bukar",
    image: "./assets/facilitators/aisha.jpg",
    url: "https://www.linkedin.com/in/aisha-bukar",
    title: "Resident Facilitator, Naomi Lucas",
  },
  {
    name: "Peace Eze",
    image: "./assets/facilitators/peace.jpg",
    url: "https://www.linkedin.com/in/peace-eze",
    title: "Resident Facilitator, Naomi Lucas",
  },
];

const assessors = [
  {
    name: "Victor Kehinde",
    image: "kehinde.jpg",
    url: "https://www.linkedin.com/in/demindsurgeon",
    title: "CEO, Epitome Innovation",
  },
  {
    name: "Osho Ademola Joel",
    image: "osho.jpg",
    url: "https://www.linkedin.com/in/oshoademolajoel",
    title: "CEO, Supretec.com and oshoademolajoel.com",
  },
  {
    name: "Ijeoma Igbaji",
    image: "ijeoma.jpg",
    url: "https://www.linkedin.com/in/ijeoma-igbaji",
    title: "Founder, TEODORO NG",
  },
  {
    name: "Akan Ebong",
    image: "ebong.jpg",
    url: "https://www.linkedin.com/in/akanebong",
    title: "Team Lead, Vestcraft Technologies Limited",
  },
  {
    name: "Obinna Igwebuike",
    image: "obinna.jpg",
    url: "https://www.linkedin.com/in/obinnaigwebuike/",
    title: "Co-Founder & Commercial Development Lead, kliqr",
  },
  {
    name: "Christiana Lamba",
    image: "christiana.jpg",
    url: "https://www.linkedin.com/in/christiana-lamba-911150b3",
    title: "Team Lead, LeMakarios Hub",
  },
  {
    name: "Henrietta Ogu",
    image: "henrietta.jpg",
    url: "https://www.linkedin.com/in/henrietta-ogu/",
    title: "Project Manager, Volition Capital",
  },
  {
    name: "Olaronke Ariyibi-Sodade",
    image: "olaronke.jpg",
    url: "https://www.linkedin.com/in/olaronke-ariyibi",
    title: "Business Development Manager, Sparke",
  },
  {
    name: "Omale Akoji-Omale",
    image: "omale.jpg",
    url: "https://www.linkedin.com/in/omale-akoji-omale-b1a71830",
    title: "CEO, WoodsWorth Furniture Limited",
  },
  {
    name: "Raquel Kasham Daniel",
    image: "kashim.jpg",
    url: "https://www.linkedin.com/in/raqueldaniel",
    title: "Co-founder, Bambini Africa",
  },
  {
    name: "Glorie Okorie",
    image: "glorie.jpg",
    url: "https://www.linkedin.com/in/gloria-okorie-644ba035",
    title: "Program/Innovation Lead, Impact Hub Lagos",
  },
  {
    name: "Oyewo Olalekan Joseph",
    image: "oyewo.jpg",
    url: "https://www.linkedin.com/in/oyewo-olalekan-7289aa4b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BY%2BzMOPU9RuSIoq8LeduMCQ%3D%3D",
    title: "HR Business Partner Haven Square Ltd.",
  },
  {
    name: "Ese Oraka",
    image: "ese.jpg",
    url: "https://www.linkedin.com/in/eseoraka?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bc1efe8DmQ1K37ShMJ5WjpQ%3D%3D",
    title: "Partner, Adelphi Innovation Consulting",
  },
  {
    name: "Temitope Akinkunmi",
    image: "temitope.jpg",
    url: "https://www.linkedin.com/in/temitope-akinkunmi-41188384",
    title: "CEO, Fisibul Networks Int’l",
  },
  {
    name: "Olumide Campbell",
    image: "olumide.jpg",
    url: "https://www.linkedin.com/in/olumide-campbell-5ba50310?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BvfJXSYkOTRuylnt%2B9bx4NA%3D%3D",
    title: "Executive Director, Etu Odi Ltd.",
  },
  {
    name: "Dare Akinfosile",
    image: "dare.jpg",
    url: "https://www.linkedin.com/in/akinfosiledarejoseph",
    title: "Emergency Response, HSE Specialist, Green Africa",
  },
  {
    name: "Ayodeji Jeremiah",
    image: "ayodeji.jpg",
    url: "https://www.linkedin.com/in/ayodejijeremiah1973",
    title: "Management Consultant",
  },
  {
    name: "Fortune Onyemuwa",
    image: "fortune.jpg",
    url: "https://www.linkedin.com/in/fortunebolt",
    title: "Product Design Lead, Kominiti",
  },
];

const quotes = [
  {
    name: "Anita Imogu",
    quote: `I'm genuinely amazed at the insights I've gained so far. Can't wait to see how this knowledge will transform my career and life. Kudos to The Employment Bootcamp team for curating such impactful content!`,
    image: "anita.jpg",
  },
  {
    name: "Emmanuel Damilola Arowolo",
    quote: `This program aligns perfectly with my ongoing journey of self-improvement and development. I'm incredibly thankful for this opportunity and genuinely excited about completing the other seven levels of the program, as each step promises to bring fresh insights and tools to help me flourish in my career.`,
    image: "emmanuel.jpg",
  },
  {
    name: "Grace Chinadindu Kalu",
    quote: `One of the reasons why I haven't posted is because I didn't know how to put myself out there as a Creative. Today, I'm here to show up and I won't do this, without acknowledging the force behind the new me. The Employment Bootcamp has been a blessing!`,
    image: "grace.jpg",
  },
  {
    name: "Igoje Michael",
    quote: `This journey of self-discovery has shaped my life's perspective, my thought process and my worldview with everything consciously centering around my values.`,
    image: "igoje.jpg",
  },
  {
    name: "John Nwachukwu Kanu",
    quote: `Level 4 talked about writing rewarding CVs and Cover Letters. This particular level made me see the major reason why I haven't been selected for any role, despite my many applications. We got to understand the major things employers or recruiters look out for in the recruiting process.`,
    image: "john.jpg",
  },
  {
    name: "Joseph Awara",
    quote: `Unlike the millions of boring learning platforms around, this particular learning game is something totally different and special. It was designed with the intention of bringing fun to you while you progress through the different learning levels and challenges in the game. It will really push you to discard what doesn't work, and then relearn new real world skills to stand out and be the champion of your life. `,
    image: "joseph.jpeg",
  },
  {
    name: "Sufyan Ibrahim",
    quote: `As I reflect on my experience, I'm amazed by how much I've grown. This phase of the bootcamp has not only equipped me with tangible skills but has also boosted my confidence. I am eager to implement these strategies as I take the next steps in my professional journey.`,
    image: "sufyan.jpg",
  },
  {
    name: "Yakub Abdulmalik",
    quote: `The employment bootcamp live sessions have been very exciting. They are basically cheat code sessions. These insights are powerful tools to keep in your arsenal as you tackle the ups and downs of job search. My expectations are always exceeded and leave with more than I thought I would gain. Every session I feel like I have learnt so much, only until the next session where I am blown away again.`,
    image: "yakub.jpg",
  },
];

const bottomQuote = {
  name: "Comfort Johnson",
  quote: `This is not a typical online bootcamp – it's a personalized and transformational experience unlike any other I've attended. This is a safe space to let your guards down, get help, and get it right.`,
  image: "comfort.jpg",
};

$(document).ready(function (e) {
  const div = $("#bannerDiv");
  const facilitatorsDiv = $("div#facilitatorsRow");
  const assessorsRow = $("div#assessorsRow");
  const owlContainer = $("div#quotesContainer");
  const h2 = div.find("h2");
  const p = div.find("p");
  let index = 0;
  const formdata = {};

  quotes.forEach((quote, index) => {
    const quoteBaseURL = "./assets/quotes";
    const html = `<div class="row mt-sm-3 mt-2 justify-content-center testimonial-wrapper">
    <div class="col-md-3 text-center">
      <img
        src="${quoteBaseURL}/${quote.image}"
        class="img-fluid" style="width: 150px; height: 150px; border-radius: 50%; margin: auto;"
      />
      <p style="font-size: 23px" class="mt-3"><strong>${quote.name}</strong></p>
    </div>
    <div class="col-md-8 text-center text-sm-start testimonialText" style="padding-bottom: 50px">
      ${quote.quote}
    </div>
    <div class="row justify-content-center">
          <div class="col-md-8 text-center">
            <button
              id="applyNowCTA"
              class="btn btn-dark btn-block"
            >
              Apply Now
            </button>
          </div>
        </div>
  </div>`;

    owlContainer.append(html);
  });

  assessors.forEach((assessor, index) => {
    const assessorBaseUrl = "./assets/assessors";
    const html = `<div>
    <a href="${assessor.url}" target="_blank">
    <img src="${assessorBaseUrl}/${assessor.image}" alt="Facilitator" loading="lazy" class="img-fluid facilitatorImage" />
    <br /> 
    <p class="text-center"><strong>${assessor.name}</strong><br/>${assessor.title}</p>
    </a>
    </div>`;

    assessorsRow.append(html);
  });

  facilitators.forEach((facilitator, index) => {
    const html = `
    <div>
    <a href="${facilitator.url}" target="_blank">
    <img src="${facilitator.image}" alt="Facilitator" loading="lazy" class="img-fluid facilitatorImage" />
    <br /> 
    <p class="text-center"><strong>${facilitator.name}</strong><br/>${facilitator.title}</p>
    </a>
    </div>`;
    facilitatorsDiv.append(html);
  });

  function fadeInText() {
    if (index == headText.length - 1) {
      index = 0;
    } else {
      index++;
    }

    h2.text(headText[index]);
    p.text(bodyText[index]);
    h2.fadeIn("slow", function (e) {
      p.fadeIn("slow");
      setTimeout(() => {
        h2.fadeOut("5000");
        fadeInText();
      }, 5000);
    });
  }

  function initOwl() {
    $(".testimonial-owl").owlCarousel({
      loop: true,
      margin: 10,
      // nav: true,
      autoplay: true,
      autoHeight: true,
      autoplaySpeed: 2000,
      autoplayTimeout: 10000,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });

    $(".facilitators-owl").owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      dots: false,
      autoplay: true,
      autoplaySpeed: 1000,
      autoplayTimeout: 3000,
      responsive: {
        0: {
          items: 2,
        },
        600: {
          items: 4,
        },
        1000: {
          items: 8,
        },
      },
    });

    $(".assessors-owl").owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      dots: false,
      autoplay: true,
      autoplaySpeed: 1000,
      autoplayTimeout: 3000,
      responsive: {
        0: {
          items: 2,
        },
        600: {
          items: 4,
        },
        1000: {
          items: 8,
        },
      },
    });
  }

  const isFullNameValid = (name) => {
    if (name !== null) {
      return true;
    }
    return false;
  };

  const isEmailValid = (email) => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const isPhoneValid = (phone) => {
    const re = /^(?:\+234|234|0)[789]\d{9}$/;
    return re.test(phone);
  };

  const getName = (name) => {
    return name.split(" ");
  };

  $("button#applyNowCTA").on("click", (e) => {
    e.preventDefault();

    const url = "https://forms.gle/zMripX5mecAwL3849";

    window.open(url, "_blank");

    // window.location.href = "https://forms.gle/zMripX5mecAwL3849";
  });

  $("button#submitContactDetails").on("click", (e) => {
    const button = $("button#submitContactDetails");
    const form = $("form#contactDetailsForm");
    const nameInput = form.find("input#fullNameInput");
    const emailInput = form.find("input#emailInput");
    const phoneInput = form.find("input#phoneNumberInput");
    const loader = $("div#loadingSpinner");

    if (!isFullNameValid(nameInput.val())) {
      nameInput.next().text("Full name is invalid");
      return;
    } else {
      formdata.name = nameInput.val();
      nameInput.next().text();
    }

    if (!isEmailValid(emailInput.val())) {
      emailInput.next().text("Email address is invalid");
      return;
    } else {
      formdata.email = emailInput.val();
      emailInput.next().text();
    }

    if (!isPhoneValid(phoneInput.val())) {
      phoneInput.next().text("Phone number is invalid");
      return;
    } else {
      formdata.phone = phoneInput.val();
      phoneInput.next().text();
    }

    $(form).fadeOut("slow");
    $(loader).fadeIn("slow", () => {
      const baseUrl = "https://credentials.naomilucas.xyz";
      const url = baseUrl + "/api/save-contact";

      console.log("FORMDATA", formdata);

      $.ajax({
        url: url,
        type: "POST",
        data: JSON.stringify(formdata),
        contentType: "application/json",
        success: function (data) {
          button.hide();
          $(loader).fadeOut("slow");
          $("div.detailsSaved").fadeIn("slow");
          window.location.href = "https://forms.gle/zMripX5mecAwL3849";

          console.log("Success:", data);
        },
        error: function (xhr, status, error) {
          // $(form).fadeIn("slow");
          // nameInput.next().text("Error: Could not save data");
          window.location.href = "https://forms.gle/zMripX5mecAwL3849";
          console.error("Error:", error);
        },
      });
    });
  });

  fadeInText();
  initOwl();
});
