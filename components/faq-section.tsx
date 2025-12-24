"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Who can participate in Build & Grow AI Hackathon?",
    answer:
      "Anyone with a passion for technology can participate! Whether you're a student, professional developer, or tech enthusiast, you're welcome to join. Teams can have 2-4 members.",
  },
  {
    question: "What is the team size?",
    answer:
      "Teams should consist of 2-4 members. You can form your team before registration or find teammates at the event. Solo participation is also allowed for the Open Innovation track.",
  },
  {
    question: "Is this hackathon beginner-friendly?",
    answer:
      "We have tracks for all skill levels. Our mentors and workshops will help beginners get started, while advanced tracks challenge experienced developers.",
  },
  {
    question: "Is there any registration fee?",
    answer:
      "No, Build & Grow AI Hackathon is completely free to attend. We provide food, beverages, swag, and all necessary resources during the event.",
  },
  {
    question: "What should I bring to the hackathon?",
    answer:
      "Bring your laptop, charger, valid ID, and enthusiasm! We'll provide internet, power outlets, food, and a great atmosphere for coding.",
  },
  {
    question: "What are the prizes?",
    answer:
      "We have a total prize pool of ₹5 lakhs distributed across different tracks. Winners also get Google Cloud credits, exclusive swag, and mentorship opportunities.",
  },
]

export default function FAQSection() {
  return (
    <section className="relative z-10 py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground text-lg">Got questions? We've got answers</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glassmorphism border-border/50 rounded-xl px-6 data-[state=open]:border-primary/50 transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary transition-colors hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
