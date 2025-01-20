import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { Footer } from "@/components/Footer";

const FAQ = () => {
  const faqs = [
    {
      question: "What is the main idea behind the establishment of Simplex?",
      answer: "Simplex is a cryptocurrency investment company established in 2018. The wide array of services we offer were specifically designed to assist Trading holders in making good investment decisions. We are a London-based company that possesses a group of investment professionals covering many industries, ranging from engineering to advanced computer technology. Our group of professionals are widely versed in cryptocurrency techniques as well and can expertly answer any question you might have concerning cryptocurrency investment.",
    },
    {
      question: "Are investment returns guaranteed? Or are there certain risks I should be aware of?",
      answer: "You already made a good decision by deciding to join our investor community. Simplex Doesn't Offer any Guarantey Because Online Earning is Fully Risky, all thanks to our overall ideology and company concept. In addition, our company is made up of certified professionals in various fields such as Crypto Trading, cryptocurrency finance and security. Our goal is to provide a seamless investment experience based on expert project management. As a security measure, we secure your data with Full Security, thereby making sure that your data is well encrypted and will never be made available to any third party. In addition, our servers are dedicated and DDoS protected, so you won't have any problem using our services anytime from wherever you are in the world.",
    },
    {
      question: "Where do the funds come from for the lucrative interest rates?",
      answer: "As a result of cryptocurrency trading market, we have the ability to provide an interest rate that's higher than what's usually obtainable in the average market. Moreover, the fact that we are always spreading our reach as far as we can globally helps us in reaching new heights.",
    },
    {
      question: "What are the requirements to become a member?",
      answer: "You have to be at least 18 years old before you're allowed to become a member. In addition to this, you must agree to our Terms of Service. Anybody from anywhere in the world can join. Even if you live in the desert, as long as you have an internet connection, you're free to join.",
    },
    {
      question: "How many accounts are allowed per person?",
      answer: "No more than one account is allowed per person. Multiple account openings is against our internal users policy and might result in membership termination.",
    },
    {
      question: "When does my account start generating interest?",
      answer: "Your account will start receiving interest from the elapse of the first hour after a deposit is made. For example, if your deposit is made at 8:08pm, the first interest will be added at 9:08pm, the second one by 10:08pm and so on.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept BitCoin, PerfectMoney, Jaz Cash, Easypaias, Paymax, to deposit with us.",
    },
    {
      question: "How long do deposits take to process?",
      answer: "All deposits will be added instantly except bitcoin need to credited automatically after three confirmations on the BitCoin network.",
    },
    {
      question: "Is there a maximum deposit limit?",
      answer: "No, there is no limit as a maximum amount, you can deposit as much as you wish.",
    },
    {
      question: "How do I withdraw my funds?",
      answer: "To withdraw your funds, please go to the withdrawal section of your personal account and request a withdrawal.",
    },
    {
      question: "What's the withdrawal processing time?",
      answer: "All withdrawals will be processed before the elapse of 24 hours. You can contact us about your pending withdrawal.",
    },
    {
      question: "Can I withdraw to a different e-currency account?",
      answer: "No, all payments are done in the e-currency of the same payment system that was used for the investment. We do not exchange currencies when paying out in order to avoid dispute and make balanced conditions for all payment processors.",
    },
    {
      question: "What are the withdrawal fees?",
      answer: "NO, 0% fees while withdrawing their funds.",
    },
    {
      question: "What are the minimum withdrawal amounts?",
      answer: "The minimum withdrawal amount is Rs1100 (Bitcoin min withdrawal is 10$ and also Perfectmoney).",
    },
    {
      question: "Do you process withdrawals on weekends?",
      answer: "Yes, we process withdrawal requests Every after 7days.",
    },
    {
      question: "How can I change my password?",
      answer: "You can change your password directly through edit account section on your member area.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary-dark via-purple-900 to-primary text-white py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Find answers to common questions about Simplex's cryptocurrency investment platform
            </p>
          </motion.div>
        </div>
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FAQ;