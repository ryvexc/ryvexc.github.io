const __DEVMODE = false;

if(!__DEVMODE) Render(body, [background, ProfileView, SkillView, ProjectsView ,SchoolView, NavbarView, FooterView]);
else Render(body, [ProfileView, SkillView, ProjectsView, SchoolView, NavbarView, FooterView]);

Render(body, [NavigationBar]);