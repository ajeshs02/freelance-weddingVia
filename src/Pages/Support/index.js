import React from 'react'
import './Support.scss'
import { Helmet } from 'react-helmet'

const Support = () => {
  return (
    <div className="support-wrapper main-padding ">
      <Helmet>
        <title>WeddingVia Support: Get Your Questions Answered!</title>
        <meta
          name="description"
          content="Need help using WeddingVia Matrimony ? Find answers to common questions, troubleshooting tips, and helpful resources on our dedicated support page."
          data-react-helmet="true"
        />
      </Helmet>
      <h1>Support</h1>
      <div className="row">
        <div className="col-md-5 sticky">
          <div className="contect-us-form">
            <h2>We're here to make your search for love easier.</h2>
            <p>
              Support team is available 24/7 to answer your questions and help
              you find the perfect match.
            </p>
            <form>
              <input type={'text'} className="text-box" />
              <input type={'text'} className="text-box" />
              <input type={'text'} className="text-box" />
              <textarea
                className="text-area"
                placeholder="Tell us how we can help"
                maxlength="5000"
                id="message"
                name="message"
                data-name="field"
              ></textarea>
              <div className="text-center">
                <button
                  class="yollow-btn butn__new"
                  data-bs-toggle="modal"
                  data-bs-target="#start-the-journey"
                >
                  <span>Send</span>
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="col-md-7">
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <strong>Can I change the display name on my profile?</strong>
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p>
                    Yes, you can change the name, you can also hide the profile
                    information such as profile photo contact number etc… You
                    can change the name three times in a profile’s lifetime. If
                    you have trouble changing it via WeddingVia app, please send
                    your request to help@weddingvia.com
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <strong>
                    Can I change the privacy settings of my photos?
                  </strong>
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p>
                    Yes you can. Please go to Settings – profile to alter
                    display preferences.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <strong>
                    Is multiple registration possible with the same phone?!
                  </strong>
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p>
                    No, unfortunately you cannot create different accounts with
                    the same Email, but a contact number can be used for
                    multiple profiles.
                  </p>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse4"
                  aria-expanded="false"
                  aria-controls="collapse4"
                >
                  <strong>Do you show my phone number to everyone?</strong>
                </button>
              </h2>
              <div
                id="collapse4"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p>
                    No, mobile numbers are displayed to the interested parties
                    and members of Weddingvia.com™.com only. With the premium
                    plan purchase the member is entitled for advanced primary
                    measures and hence contact numbers can also be issued only
                    on interest acceptance.
                  </p>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse5"
                  aria-expanded="false"
                  aria-controls="collapse5"
                >
                  <strong>
                    I am unable to upload profile photo(s), or my photos are not
                    getting approved.
                  </strong>
                </button>
              </h2>
              <div
                id="collapse5"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p>
                    Members can upload 15 images and 1 profile video. It's
                    unusual that your photos are not getting uploaded. Please
                    find the guidelines for photo/video uploads here. If you
                    have trouble uploading via WeddingVia app, please send your
                    request to help@weddingvia.com
                  </p>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse6"
                  aria-expanded="false"
                  aria-controls="collapse6"
                >
                  <strong>
                    I have uploaded the photos, but still not reflecting on my
                    page.
                  </strong>
                </button>
              </h2>
              <div
                id="collapse6"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p>
                    This might happen due to the rejection of uploaded pictures,
                    Please follow the guidelines for photo/video uploads here.
                  </p>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse7"
                  aria-expanded="false"
                  aria-controls="collapse7"
                >
                  <strong>I am unable to delete the photo uploaded.</strong>
                </button>
              </h2>
              <div
                id="collapse7"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p>
                    This is highly unusual, please send your request to
                    help@weddingvia.com and will be happy to help.
                  </p>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse8"
                  aria-expanded="false"
                  aria-controls="collapse8"
                >
                  <strong>
                    Can I upload PDF format files for my horoscope?
                  </strong>
                </button>
              </h2>
              <div
                id="collapse8"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p>
                    No, horoscopes in the WeddingVia app are automatically
                    created with the help of third party sources. We make use of
                    the users date of birth and location details to
                    automatically generate horoscope data.
                  </p>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse9"
                  aria-expanded="false"
                  aria-controls="collapse9"
                >
                  <strong>Why is my profile inactive?</strong>
                </button>
              </h2>
              <div
                id="collapse9"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p>
                    A user profile automatically gets inactive if there is no
                    usage of services for 90 days. The same account and its
                    privileges can be revoked within 365 days of inactivity by
                    contacting the support if you have forgotten the login
                    credentials.
                  </p>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse10"
                  aria-expanded="false"
                  aria-controls="collapse10"
                >
                  <strong>Why is my profile suspended?</strong>
                </button>
              </h2>
              <div
                id="collapse10"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p>
                    Oh! we are sorry to hear that, there can be several reasons
                    for the suspension of your profile. Please read the Terms of
                    Use for better understanding regarding the suspension of
                    services. Once your account is reportedly suspended, you can
                    reach out to the support team and we will be happy to sort
                    it out for you.
                  </p>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse11"
                  aria-expanded="false"
                  aria-controls="collapse11"
                >
                  <strong>Can I know who has visited my profile?</strong>
                </button>
              </h2>
              <div
                id="collapse11"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p>
                    Yes you can, there are notifications sent to your account on
                    profile visits.
                  </p>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse12"
                  aria-expanded="false"
                  aria-controls="collapse12"
                >
                  <strong>I am unable to get an OTP to my phone/email.</strong>
                </button>
              </h2>
              <div
                id="collapse12"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p>
                    This is an unusual situation. As weddingvia.com serves
                    globally, we send out verification codes to your provided
                    mobile also to your email. The same usually gets reflected
                    on your end within 5 minutes from the action. If you are not
                    able to receive the same please check the credentials you
                    have provided. If it’s a problem with our end, please feel
                    free to reach out to help@weddingvia.com.
                  </p>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse13"
                  aria-expanded="false"
                  aria-controls="collapse13"
                >
                  <strong>
                    My profile was deleted some time ago, can I retrieve it now?
                  </strong>
                </button>
              </h2>
              <div
                id="collapse13"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p>
                    Unfortunately no. When a deletion of profile is performed,
                    your profile, data and associated information immediately
                    gets removed from our database/search displays. However in a
                    situation of ‘Inactivity or Hold’ your profile information
                    will be available to reactivate/avail our services for the
                    next 90 days from Inactivity/Hold status.
                  </p>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse14"
                  aria-expanded="false"
                  aria-controls="collapse14"
                >
                  <strong>
                    Can I register on behalf of a relative or a friend?
                  </strong>
                </button>
              </h2>
              <div
                id="collapse14"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p>
                    Yes you can! Go ahead and register a profile for your loved
                    one
                  </p>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseT15"
                  aria-expanded="false"
                  aria-controls="collapseT15"
                >
                  <strong>
                    My Region / caste / country / state / district / city is not
                    listed in the registration form.
                  </strong>
                </button>
              </h2>
              <div
                id="collapseT15"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p>
                    We are constantly striving to improve our services
                    delivered. You can let us know the improvements by creating
                    an issue at help@weddingvia.com and we will do the needful
                    on the new data enrollment to our systems.
                  </p>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse16"
                  aria-expanded="false"
                  aria-controls="collapse16"
                >
                  <strong>
                    Can you please provide your customer care Email?
                  </strong>
                </button>
              </h2>
              <div
                id="collapse16"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p>
                    Our first hand issue resolver channel is our support center
                    and you can reach out to the team by creating an issue at
                    help@weddingvia.com.
                  </p>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse17"
                  aria-expanded="false"
                  aria-controls="collapse17"
                >
                  <strong>
                    How do I escalate an issue if the support center help is
                    unsatisfactory?
                  </strong>
                </button>
              </h2>
              <div
                id="collapse17"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p>
                    At Weddingvia.com™, we are trying to set a benchmark on
                    services provided. At any point if you are unsatisfied with
                    the resolution provided you can send an improvement to
                    help@weddingvia.com.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Support
