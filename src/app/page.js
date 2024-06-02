import AccountDetails from "@/components/AccountDetails/AccountDetails";
import Attachments from "@/components/Attachments/Attachments";
import BusinessDetails from "@/components/BusniessDetails/BusinessDetails";
import MsmeDetails from "@/components/MsmeDetails/MsmeDetails";
import PageSettings from "@/components/PageSettings/PageSettings";
import SideNavbar from "@/components/SideNavbar/SideNavbar";
import Supply from "@/components/Supply/Supply";
import Tabs from "@/components/Tabs/Tabs";
import TopBar from "@/components/TopBar/TopBar";

export default function Home() {
  return (
    <div className="flex">
      <SideNavbar />
      <section className="w-full">
        <TopBar />
        <PageSettings />
        <section className="flex  gap-4 w-full justify-between mt-3">
          <Tabs>
            <BusinessDetails />
            <MsmeDetails />
            <Supply />
            <AccountDetails />
          </Tabs>
          <Attachments />
        </section>
      </section>
    </div>
  );
}
