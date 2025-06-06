
import { Route, Switch } from "wouter";
import Index from "@/pages/Index";
import Login from "@/pages/Login";
import Posts from "@/pages/Posts";
import Messages from "@/pages/Messages";
import Profile from "@/pages/Profile";
import UserProfile from "@/pages/UserProfile";
import Wallet from "@/pages/Wallet";
import Cart from "@/pages/Cart";
import Settings from "@/pages/Settings";
import NotFound from "@/pages/NotFound";

export const AppRoutes = () => (
  <Switch>
    <Route path="/" component={Index} />
    <Route path="/login" component={Login} />
    <Route path="/posts" component={Posts} />
    <Route path="/messages" component={Messages} />
    <Route path="/profile" component={Profile} />
    <Route path="/user/:userId" component={UserProfile} />
    <Route path="/wallet" component={Wallet} />
    <Route path="/cart" component={Cart} />
    <Route path="/settings" component={Settings} />
    <Route component={NotFound} />
  </Switch>
);
