"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"

export function TokenomicsSection() {
  const data = [
    { name: "Liquidity pool", value: 80, color: "#1a237e" },
    { name: "Airdrop / Marketing", value: 15, color: "#c1f7c1" },
    { name: "Team", value: 5, color: "#d32f2f" }
  ]

  return (
    <section id="tokenomics" className="py-20 bg-white">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 font-comic"
        >
          Nutty Tokenomics
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="font-comic">Token Distribution</CardTitle>
              </CardHeader>
              <CardContent className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={data}
                      cx="50%"
                      cy="50%"
                      outerRadius={150}
                      dataKey="value"
                      labelLine={false}
                      label={({ name, value }) => `${name}: ${value}%`}
                    >
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {data.map((item, index) => (
              <motion.div 
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <h3 className="text-xl font-bold mb-2 font-comic" style={{ color: item.color }}>
                  {item.name}: {item.value}%
                </h3>
                <p className="text-neutral-500 dark:text-neutral-400">
                  {item.name === "Community" && "The majority goes to our fellow inmates - the community that believes in financial freedom!"}
                  {item.name === "Airdrop / Marketing" && "For breaking more squirrels out of the traditional financial system."}
                  {item.name === "Team" && "A small nut stash for the masterminds behind great escape."}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

