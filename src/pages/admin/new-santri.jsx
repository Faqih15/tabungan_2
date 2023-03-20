import CardSettings from "components/Cards/CardSettings.jsx";
import Admin from "layouts/layoutAdmin.jsx";

function Settings() {
  return (
    <>
      <Admin>
        <div className="flex flex-wrap mt-4 relative lg:ml-32">
          <div className="w-full lg:w-8/12">
            <CardSettings />
            {/* bg-orange-400 */}
          </div>
        </div>
      </Admin>
    </>
  );
}
export default Settings;

