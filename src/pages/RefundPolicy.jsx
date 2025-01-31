import React from "react";

class RefundPolicy extends React.Component {
  render() {
    return (
      <>
        <div className="flex flex-col gap-10 px-10 md:px-60 my-5">
          <div className="flex flex-col gap-6 my-8">
            <h1 className="text-2xl md:text-4xl font-bold">
              Returns & Refunds Policy
            </h1>
            <p className="text-base md:text-lg">
              At innotraniee, we understand the importance of your satisfaction.
              You are entitled to request a cancellation of your subscription or
              service order within 30 days, without needing to provide a reason.
              <br />
              <br />
              The cancellation deadline is 30 calendar days from the date of
              purchase or the date you first gained access to the service.
              <br />
              <br />
              To exercise your right to cancellation, you must inform us clearly
              of your decision. You can notify us via email at&nbsp;
              <a
                href="mailto:innotraniee@gmail.com"
                className="text-blue-500 underline"
              >
                innotraniee@gmail.com
              </a>
              .
              <br />
              <br />
              We will process your refund no later than 30 days after confirming
              your cancellation request. Refunds will be issued using the
              original method of payment, and no additional fees will be
              incurred for the refund.
              <br />
              <br />
              <strong>Conditions for Refunds:</strong>
              <br />
              To be eligible for a refund, the following conditions must be met:
              <ul className="list-disc list-inside ml-4">
                <li>
                  The cancellation request is made within 30 days of purchase.
                </li>
                <li>
                  No significant portion of the service has been consumed or
                  completed (e.g., live sessions attended, substantial course
                  materials downloaded, etc.).
                </li>
              </ul>
              <br />
              <strong>Non-Refundable Services:</strong>
              <ul className="list-disc list-inside ml-4">
                <li>
                  Services that have already been fully delivered or completed.
                </li>
                <li>
                  Customized or personalized services that were created
                  specifically for you.
                </li>
                <li>
                  Any digital service that has been accessed, consumed, or
                  downloaded fully.
                </li>
              </ul>
              <br />
              We reserve the right to deny refund requests if the above
              conditions are not met.
              <br />
              <br />
              <strong>Refund Processing:</strong>
              <br />
              Refunds are processed through the same payment method used for the
              purchase. Please allow some time for the refund to appear in your
              account, as processing times may vary depending on your payment
              provider.
              <br />
              <br />
              <strong>Gifts:</strong>
              <br />
              If the service was purchased as a gift and was marked as such
              during checkout, refunds will be issued as store credit or a gift
              certificate. If the gift was not marked, the refund will be
              processed to the original purchaser.
              <br />
              <br />
              <strong>Contact Us:</strong>
              <br />
              If you have any questions about our Returns and Refunds Policy,
              please feel free to reach out to us at&nbsp;
              <a
                href="mailto:innotraniee@gmail.com"
                className="text-blue-500 underline"
              >
                innotraniee@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </>
    );
  }
}
export default RefundPolicy;
