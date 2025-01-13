import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Twitter, TextIcon as Telegram } from "lucide-react"

export function CommunitySection() {
  return (
    <section id="community" className="py-20 bg-[#f8f8f8]">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Join Our Community</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <Twitter className="w-12 h-12 mx-auto text-blue-400" />
                <h3 className="text-xl font-bold">Twitter</h3>
                <p className="text-neutral-500 dark:text-neutral-400">Follow us for the latest updates and announcements</p>
                <a href="https://x.com/pnut_eclipse/status/1870553913226899831?s=46">
                  <Button variant="outline" className="w-full">
                    Follow @Pnut_eclipse
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <Telegram className="w-12 h-12 mx-auto text-blue-500" />
                <h3 className="text-xl font-bold">Telegram</h3>
                <p className="text-neutral-500 dark:text-neutral-400">Join our active community on Telegram</p>
                <a href="https://t.me/+BebKF1xcCW01NjE0">
                  <Button variant="outline" className="w-full">
                    Join Telegram
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
          <Card className="md:col-span-2 lg:col-span-1">
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <h3 className="text-xl font-bold">Contract Address</h3>
                <p className="text-neutral-500 break-all dark:text-neutral-400">Coming soon</p>
                <Button variant="outline" className="w-full">
                  Copy Address
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

