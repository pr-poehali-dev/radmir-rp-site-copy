import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const servers = [
    { id: 1, name: 'Radmir RP #01', players: '850/1000', status: 'online', ping: '15ms' },
    { id: 2, name: 'Radmir RP #02', players: '720/1000', status: 'online', ping: '18ms' },
    { id: 3, name: 'Radmir RP #03', players: '920/1000', status: 'online', ping: '12ms' },
    { id: 4, name: 'Radmir RP #04', players: '650/1000', status: 'online', ping: '20ms' },
  ];

  const news = [
    { id: 1, title: 'Обновление 2.5 уже в игре!', date: '25 ноября 2024', category: 'Обновления' },
    { id: 2, title: 'Новые автомобили в автосалоне', date: '20 ноября 2024', category: 'Контент' },
    { id: 3, title: 'Скидки на донат-пакеты до 30%', date: '15 ноября 2024', category: 'Акции' },
  ];

  const team = [
    { name: 'Александр', role: 'Главный администратор', avatar: 'https://cdn.poehali.dev/projects/d8f30557-4244-4282-86c2-c0d14ccfd7eb/files/e1fee24c-c484-4424-9d0c-7742747c392b.jpg' },
    { name: 'Мария', role: 'Старший модератор', avatar: 'https://cdn.poehali.dev/projects/d8f30557-4244-4282-86c2-c0d14ccfd7eb/files/e1fee24c-c484-4424-9d0c-7742747c392b.jpg' },
    { name: 'Дмитрий', role: 'Разработчик', avatar: 'https://cdn.poehali.dev/projects/d8f30557-4244-4282-86c2-c0d14ccfd7eb/files/e1fee24c-c484-4424-9d0c-7742747c392b.jpg' },
    { name: 'Елена', role: 'Дизайнер', avatar: 'https://cdn.poehali.dev/projects/d8f30557-4244-4282-86c2-c0d14ccfd7eb/files/e1fee24c-c484-4424-9d0c-7742747c392b.jpg' },
  ];

  const rules = [
    { title: 'Уважение к игрокам', desc: 'Запрещены оскорбления, угрозы и любые формы дискриминации' },
    { title: 'Честная игра', desc: 'Использование читов, багов и эксплойтов строго запрещено' },
    { title: 'РП отыгрыш', desc: 'Соблюдайте ролевую игру и не нарушайте игровую атмосферу' },
    { title: 'Общение', desc: 'Используйте русский язык в игре и на форуме' },
  ];

  const donatPackages = [
    { name: 'Стартовый', price: '299₽', features: ['50,000 игровых денег', 'Премиум статус 7 дней', 'Эксклюзивный скин'] },
    { name: 'Продвинутый', price: '599₽', features: ['150,000 игровых денег', 'Премиум статус 30 дней', '3 эксклюзивных скина', 'Личный автомобиль'] },
    { name: 'VIP', price: '1299₽', features: ['500,000 игровых денег', 'VIP статус 90 дней', '10 эксклюзивных скинов', 'Личный дом и гараж', 'Приоритет в очереди'] },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center animate-glow">
                <Icon name="Gamepad2" size={24} className="text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                RADMIR RP
              </span>
            </div>
            <div className="hidden md:flex gap-6">
              {['home', 'servers', 'rules', 'donate', 'forum', 'news', 'team', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'servers' && 'Сервера'}
                  {section === 'rules' && 'Правила'}
                  {section === 'donate' && 'Донат'}
                  {section === 'forum' && 'Форум'}
                  {section === 'news' && 'Новости'}
                  {section === 'team' && 'Команда'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </div>
            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
              Играть сейчас
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-primary/20 text-primary border-primary/50">Онлайн: 3,142 игрока</Badge>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Добро пожаловать в{' '}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Radmir RP
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Лучший ролевой сервер с открытым миром. Создай свою историю, заводи друзей и достигай новых высот!
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                  <Icon name="Play" size={20} className="mr-2" />
                  Начать играть
                </Button>
                <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
                  <Icon name="Info" size={20} className="mr-2" />
                  Подробнее
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl rounded-full"></div>
              <img
                src="https://cdn.poehali.dev/projects/d8f30557-4244-4282-86c2-c0d14ccfd7eb/files/89bdc129-5d45-48c4-8a56-19807ec852c3.jpg"
                alt="Game Scene"
                className="relative rounded-2xl shadow-2xl border border-border"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="servers" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Наши сервера</h2>
            <p className="text-muted-foreground text-lg">Выбери сервер и начни своё приключение прямо сейчас</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servers.map((server, idx) => (
              <Card
                key={server.id}
                className="border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl">{server.name}</CardTitle>
                    <Badge className="bg-green-500/20 text-green-500 border-green-500/50">
                      <Icon name="Circle" size={8} className="mr-1 fill-current" />
                      {server.status}
                    </Badge>
                  </div>
                  <CardDescription>Пинг: {server.ping}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">Игроки</span>
                        <span className="font-medium">{server.players}</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all"
                          style={{ width: `${(parseInt(server.players.split('/')[0]) / 1000) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                      <Icon name="LogIn" size={16} className="mr-2" />
                      Подключиться
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="rules" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Правила сервера</h2>
            <p className="text-muted-foreground text-lg">Ознакомьтесь с основными правилами перед игрой</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {rules.map((rule, idx) => (
              <Card key={idx} className="border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Icon name="Shield" size={20} className="text-primary" />
                    </div>
                    {rule.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{rule.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="donate" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Донат пакеты</h2>
            <p className="text-muted-foreground text-lg">Поддержи проект и получи эксклюзивные преимущества</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {donatPackages.map((pkg, idx) => (
              <Card
                key={idx}
                className={`border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2 ${
                  idx === 2 ? 'border-primary shadow-lg shadow-primary/20' : ''
                }`}
              >
                <CardHeader>
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <CardDescription>
                    <span className="text-4xl font-bold text-foreground">{pkg.price}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-muted-foreground">
                        <Icon name="Check" size={16} className="text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${idx === 2 ? 'bg-gradient-to-r from-primary to-secondary' : ''}`}>
                    Купить
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="forum" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Форум сообщества</h2>
            <p className="text-muted-foreground text-lg">Общайся с другими игроками, делись опытом и получай помощь</p>
          </div>
          <Card className="max-w-4xl mx-auto border-border">
            <CardContent className="p-8">
              <Tabs defaultValue="recent" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-6">
                  <TabsTrigger value="recent">Последние темы</TabsTrigger>
                  <TabsTrigger value="popular">Популярные</TabsTrigger>
                  <TabsTrigger value="help">Помощь</TabsTrigger>
                </TabsList>
                <TabsContent value="recent" className="space-y-4">
                  {[
                    { title: 'Как купить дом в игре?', author: 'Игрок123', replies: 15, time: '2 часа назад' },
                    { title: 'Лучшие способы заработка для новичков', author: 'ProGamer', replies: 42, time: '5 часов назад' },
                    { title: 'Организация гонок в эти выходные', author: 'RaceKing', replies: 28, time: '1 день назад' },
                  ].map((topic, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-primary/50 transition-all cursor-pointer">
                      <div className="flex items-center gap-4">
                        <Icon name="MessageSquare" size={24} className="text-primary" />
                        <div>
                          <h4 className="font-medium">{topic.title}</h4>
                          <p className="text-sm text-muted-foreground">
                            {topic.author} • {topic.time}
                          </p>
                        </div>
                      </div>
                      <Badge variant="secondary">{topic.replies} ответов</Badge>
                    </div>
                  ))}
                </TabsContent>
                <TabsContent value="popular">
                  <p className="text-center text-muted-foreground py-8">Популярные темы загружаются...</p>
                </TabsContent>
                <TabsContent value="help">
                  <p className="text-center text-muted-foreground py-8">Раздел помощи загружается...</p>
                </TabsContent>
              </Tabs>
              <Button className="w-full mt-6 bg-gradient-to-r from-primary to-secondary">
                <Icon name="Plus" size={16} className="mr-2" />
                Создать тему
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="news" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Последние новости</h2>
            <p className="text-muted-foreground text-lg">Будь в курсе всех обновлений и событий</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {news.map((item) => (
              <Card key={item.id} className="border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20 cursor-pointer group">
                <CardHeader>
                  <Badge className="w-fit mb-2">{item.category}</Badge>
                  <CardTitle className="group-hover:text-primary transition-colors">{item.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <Icon name="Calendar" size={14} />
                    {item.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full justify-start text-primary">
                    Читать далее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Наша команда</h2>
            <p className="text-muted-foreground text-lg">Познакомься с людьми, которые делают сервер лучше каждый день</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {team.map((member, idx) => (
              <Card key={idx} className="border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20 text-center group">
                <CardContent className="pt-6">
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity"></div>
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="relative w-24 h-24 rounded-full border-2 border-primary mx-auto"
                    />
                  </div>
                  <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Связаться с нами</h2>
            <p className="text-muted-foreground text-lg">Есть вопросы? Мы всегда на связи!</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="border-border hover:border-primary/50 transition-all text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <h3 className="font-bold mb-2">Email</h3>
                <p className="text-muted-foreground">support@radmirrp.ru</p>
              </CardContent>
            </Card>
            <Card className="border-border hover:border-primary/50 transition-all text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="MessageCircle" size={24} className="text-secondary" />
                </div>
                <h3 className="font-bold mb-2">Discord</h3>
                <p className="text-muted-foreground">discord.gg/radmirrp</p>
              </CardContent>
            </Card>
            <Card className="border-border hover:border-accent/50 transition-all text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Send" size={24} className="text-accent" />
                </div>
                <h3 className="font-bold mb-2">Telegram</h3>
                <p className="text-muted-foreground">@radmirrp_official</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Gamepad2" size={16} className="text-primary-foreground" />
              </div>
              <span className="font-bold">RADMIR RP</span>
            </div>
            <p className="text-sm text-muted-foreground">© 2024 Radmir RP. Все права защищены.</p>
            <div className="flex gap-4">
              <Button size="sm" variant="ghost" className="hover:text-primary">
                <Icon name="Youtube" size={20} />
              </Button>
              <Button size="sm" variant="ghost" className="hover:text-primary">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button size="sm" variant="ghost" className="hover:text-primary">
                <Icon name="Twitter" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
