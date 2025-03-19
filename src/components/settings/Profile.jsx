import { User } from "lucide-react";
import SettingSection from "./SettingSection";
import ButtonLogin from "./button";
const Profile = () => {
  const handleClick = () => {};
  return (
    <SettingSection icon={User} title={"Profile"}>
      <div className="flex flex-col sm:flex-row items-center mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-100">John Doe</h3>
          <p className="text-gray-400">john.doe@example.com</p>
        </div>
      </div>

      <ButtonLogin />
    </SettingSection>
  );
};
export default Profile;
