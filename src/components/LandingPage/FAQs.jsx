import Link from "next/link";
import React from "react";

const FAQs = () => {
  return (
    <section className="relative py-14" id="faqs">
      <div className="landing_container">
        <div className="text-center mb-20">
          <h2
            data-title="FAQs"
            className="relative uppercase text-4xl max-lg:text-2xl font-bold z-10 before:content-[attr(data-title)]  before:absolute before:left-[50%] before:translate-x-[-50%] before:top-[50%] before:translate-y-[-50%] before:text-[100px] before:text-light-blue before:-z-10 before:opacity-5 before:whitespace-nowrap"
          >
            FAQs
          </h2>
        </div>
        <div className="join join-vertical w-full">
          <div className="collapse collapse-arrow join-item border border-white">
            <input type="radio" name="my-accordion" defaultChecked />
            <div className="collapse-title font-medium">
              What is the $ENTY token? 
            </div>
            <div className="collapse-content">
              <p>
                The $ENTY token is an fully decentralized & burnable utility
                ERC20 token deployed at Polygon Mainnet used for the whole
                EntyLabs ecosystem!
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-white">
            <input type="radio" name="my-accordion" />
            <div className="collapse-title font-medium">
              Where can I find out the details on the timing and stages of the
              project?
            </div>
            <div className="collapse-content">
              <p>
                We ensure that we always publish all project information on our
                social media channels in a timely manner! On our website site,
                like:{" "}
                <Link
                  href="https://enterapp.io/"
                  target="_blank"
                  rel="noReferrer"
                  className="text-white"
                >
                  www.enterapp.io
                </Link>{" "}
                There is always the most important information!
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-white">
            <input type="radio" name="my-accordion" />
            <div className="collapse-title font-medium">
              How will our Presale works?
            </div>
            <div className="collapse-content">
              <p>
                Our Presale will be conducted in 3 different stages (Rounds),
                means Round 1, 2 and 3 and will be accessible to everyone!
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-white">
            <input type="radio" name="my-accordion" />
            <div className="collapse-title font-medium">
              When does the $ENTY Token presale first stage start?
            </div>
            <div className="collapse-content">
              <p>
                We will announce the start of the first presale stage (round 1)
                early in the announcement
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-white">
            <input type="radio" name="my-accordion" />
            <div className="collapse-title font-medium">
              How exactly does the EntyLabs Launchpad work?
            </div>
            <div className="collapse-content">
              <p>
                $ENTY sales are processed through the web3 EntyLabs Launchpad,
                which runs on smart contracts. In the EntyLabs Launchpad you can
                select the appropriate cryptocurrency (MATIC, USDT, USDC or you
                use the CARD option) for which you can buy $ENTY, then specify
                the desired amount of $ENTY, connect your decentralized wallet
                and confirm the purchase transaction!
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-white">
            <input type="radio" name="my-accordion" />
            <div className="collapse-title font-medium">
              How can I get the purchased $ENTY by the presale?
            </div>
            <div className="collapse-content">
              <p>
                You will automatically receive your $ENTY tokens when purchasing
                at the various presale stages through the presale smart
                contract!
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-white">
            <input type="radio" name="my-accordion" />
            <div className="collapse-title font-medium">
              Is the $ENTY Token fully decentralized and burnable?
            </div>
            <div className="collapse-content">
              <p>
                Yes, the $ENTY Token is absolutely decentralized and burnable
                without any reflactions!
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-white">
            <input type="radio" name="my-accordion" />
            <div className="collapse-title font-medium">
              Do I need to complete KYC verification before I can buy $ENTY
              tokens?
            </div>
            <div className="collapse-content">
              <p>
                Yes, this is mandatory, because of the European Money Laundering
                Laws! The KYC verification process will be quick and absolutely
                secure by your data!
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-white">
            <input type="radio" name="my-accordion" />
            <div className="collapse-title font-medium">
              Does EntyLabs CEO & Founder pass KYC (Identity Verification)?
            </div>
            <div className="collapse-content">
              <p>
                Yes, the CEO had to confirm his identity through an official KYC
                procedure at{" "}
                <Link
                  href="https://coredo.eu/"
                  target="_blank"
                  rel="noReferrer"
                  className="text-white"
                >
                  coredo.eu!
                </Link>
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-white">
            <input type="radio" name="my-accordion" />
            <div className="collapse-title font-medium">
              Where can I find more information about the core Team by EntyLabs?
            </div>
            <div className="collapse-content">
              <p>
                You can find more information about the core team{" "}
                <Link
                  href="https://entylabs.gitbook.io/entylabs-docs/team-impressum-legal-contact"
                  target="_blank"
                  rel="noReferrer"
                  className="text-white"
                >
                  HERE!
                </Link>
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-white">
            <input type="radio" name="my-accordion" />
            <div className="collapse-title font-medium">
              Does the $ENTY token sale rounds have vesting?
            </div>
            <div className="collapse-content">
              <p>
                Yes, absolutely! This is important and we want to prevent a pump
                & dump effect in a secure way!!
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-white">
            <input type="radio" name="my-accordion" />
            <div className="collapse-title font-medium">
              What&apos;s are my benefits to be participate by the presale
              itself?
            </div>
            <div className="collapse-content">
              <p>
                We think that we would like to give our early Investors, who
                will place great trust in us and support us in our project from
                the very beginning, an above-average reward of exactly
                guaranteed 50x on the investment!
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-white">
            <input type="radio" name="my-accordion" />
            <div className="collapse-title font-medium">
              Is EntyLabs a Registered Company with Various Crypto-Related
              Licenses?
            </div>
            <div className="collapse-content">
              <p>
                Yes absolutely! Entylabs is actually Globalentylabs s.r.o (LTD)
                based in the Czech Republic, Europe! Founded in 2023! Has all
                the necessary licenses to be able to carry out a legal
                international ICO presale! At this point we would like to
                briefly point out that there are various jurisdictions in which
                people living in these jurisdictions are NOT allowed to
                participate in an ICO! Everyone has to find out for themselves
                (DYOR)
              </p>
            </div>
          </div>
        </div>
        <div className="relative text-center mt-5">
          <Link
            href="https://entylabs.gitbook.io/enterapp.io/fundamentals/faqs"
            target="_blank"
            rel="noreferrer"
            className="inline-block relative py-2 px-6 text-sm bg-white text-black rounded-badge font-medium hover:text-white hover:bg-light-blue transition duration-300"
          >
            More FAQs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
