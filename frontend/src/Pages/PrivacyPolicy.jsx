import React from 'react';
import BackgroundVideo from '../Secondary Components/BackgroundVideo';
import FirstNav from '../Header_Navs_Footer/FirstNav';
import SecondNav from '../Header_Navs_Footer/SecondNav';
import Footer from '../Header_Navs_Footer/Footer';
import CatalogItem from '../Secondary Components/CatalogItem';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



function PrivacyPolicy() {
  const { isEnglish } = useSelector((store) => store.lang);
  function scrollToTop() {
    window.scrollTo(0, 0);
  }
  scrollToTop(); 
  return (
    <>
      <div style={{paddingTop: '80px', paddingBottom: '80px'}}>
        <Container style={{padding: '40px 20px'}}>
          <div style={{width: '100%', textAlign: 'center', marginBottom: '20px'}}>
            <Link to='/' className='returntohome'>{isEnglish ? 'Return to Home page' : 'Повернутися на Головну'}</Link>
          </div>
          {isEnglish ? 
            <Row> 
              <h1 style={{color: '#000', fontFamily: 'Courier New, Courier, monospace', marginBottom: '30px'}}>PRIVACY POLICY</h1>
              <p style={{fontFamily: 'Courier New, Courier, monospace'}}>We care about the protection of your personal data, so we process them in accordance with all the requirements of the legislation of Ukraine, as well as - where possible - the legislation of the European Union. By using our website, you automatically consent to the processing of your personal data in accordance with this policy.</p>
              <div >
                <h4 style={{color: '#000', fontFamily: 'Courier New, Courier, monospace', marginTop: '30px', fontWeight: '600'}}>DATA PROCESSING</h4>
                <ul style={{paddingLeft: '30px'}}>
                  <li style={{color: '#1d1d1d', fontFamily: 'Courier New, Courier, monospace', fontWeight: '500', listStyleType: 'unset', fontSize: '16px', marginBottom: '20px'}}>When you visit our Site <a href="https://glamour-42ebc6e636b8.herokuapp.com/">LINK</a> (next - the Site), place an order on it, follow our news and updates, We ask you to provide us with your personal data, in particular, your name, surname, father's name, e-mail address, phone number and delivery address.</li>
                  <li style={{color: '#1d1d1d', fontFamily: 'Courier New, Courier, monospace', fontWeight: '500', listStyleType: 'unset', fontSize: '16px', marginBottom: '20px'}}>In the future, we may store information about: the product you selected, the product you ordered, the date of the order and the date of payment for the prod</li>
                  <li style={{color: '#1d1d1d', fontFamily: 'Courier New, Courier, monospace', fontWeight: '500', listStyleType: 'unset', fontSize: '16px', marginBottom: '20px'}}>We will use your personal data for the following purposes:
                    <ul style={{paddingLeft: '40px'}}>
                      <li style={{color: '#1d1d1d', fontFamily: 'Courier New, Courier, monospace', fontWeight: '500', listStyleType: 'dot', fontSize: '16px', }}>processing your orders, sales and delivery of our products to you;</li>
                      <li style={{color: '#1d1d1d', fontFamily: 'Courier New, Courier, monospace', fontWeight: '500', listStyleType: 'dot', fontSize: '16px', marginBottom: '20px'}}>communication with you</li>
                    </ul>
                  </li>
                  <li style={{color: '#1d1d1d', fontFamily: 'Courier New, Courier, monospace', fontWeight: '500', listStyleType: 'unset', fontSize: '16px', marginBottom: '20px'}}>We also collect information (in particular, about your IP address, the pages of the Site that you have visited) to compile and analyze statistical data and the security of our Site.</li>
                  <li style={{color: '#1d1d1d', fontFamily: 'Courier New, Courier, monospace', fontWeight: '500', listStyleType: 'unset', fontSize: '16px', marginBottom: '20px'}}>All your personal data is processed by the Individual Taras Ihorovych Ralets (next - FD) (35500, Ukraine, Radyvyliv, Pochaivska St. 89) In accordance with the legislation of Ukraine, the FD Ralets Taras Ihorovych is the owner of personal data, and according to the legislation of the European Union - their controller.</li>
                  <li style={{color: '#1d1d1d', fontFamily: 'Courier New, Courier, monospace', fontWeight: '500', listStyleType: 'unset', fontSize: '16px', marginBottom: '20px'}}>For marketing purposes, as well as for delivery services, personal data may be transferred to third parties. Such third parties process your data in accordance with our instructions, but in accordance with the privacy policies of those parties. Please note that servers with information placed on them may be located outside of Ukraine.</li>
                  <li style={{color: '#1d1d1d', fontFamily: 'Courier New, Courier, monospace', fontWeight: '500', listStyleType: 'unset', fontSize: '16px', marginBottom: '20px'}}>The grounds for processing your personal data may be:
                    <ul style={{paddingLeft: '40px'}}>
                      <li style={{color: '#1d1d1d', fontFamily: 'Courier New, Courier, monospace', fontWeight: '500', listStyleType: 'dot', fontSize: '16px'}}>your order of our goods (the basis is the conclusion and execution of the contract, as well as the preliminary actions necessary for its conclusion);</li>
                      <li style={{color: '#1d1d1d', fontFamily: 'Courier New, Courier, monospace', fontWeight: '500', listStyleType: 'dot', fontSize: '16px'}}>your explicit consent to the processing of your personal data by us or by a third party (consent to processing is the basis)</li>
                      <li style={{color: '#1d1d1d', fontFamily: 'Courier New, Courier, monospace', fontWeight: '500', listStyleType: 'dot', fontSize: '16px'}}>commercial activity (this activity is our legitimate interest and the basis for collecting personal data).</li>
                    </ul>
                  </li>
                  <li style={{color: '#1d1d1d', fontFamily: 'Courier New, Courier, monospace', fontWeight: '500', listStyleType: 'unset', fontSize: '16px', marginBottom: '20px'}}>For example, your personal data related to the purchase and delivery of goods will be processed within 90 (ninety) calendar days from the date of the order.</li>
                  <li style={{color: '#1d1d1d', fontFamily: 'Courier New, Courier, monospace', fontWeight: '500', listStyleType: 'unset', fontSize: '16px', marginBottom: '20px'}}>The terms of processing of your personal data by third parties are not established by us and depend entirely on the rules approved by them.</li>
                </ul>
              </div>

              <div>
                <h4 style={{color: '#000', fontFamily: 'Courier New, Courier, monospace', marginTop: '30px', fontWeight: '600'}}>THE RIGHTS</h4>
                <ul style={{paddingLeft: '30px'}}>
                  <li style={{color: '#1d1d1d', fontFamily: 'Courier New, Courier, monospace', fontWeight: '500', listStyleType: 'unset', fontSize: '16px', marginBottom: '20px'}}>You can always refer to the official text of the law at the following link: http://zakon3.rada.gov.ua/laws/show/2297-17.</li>
                  <li style={{color: '#1d1d1d', fontFamily: 'Courier New, Courier, monospace', fontWeight: '500', listStyleType: 'unset', fontSize: '16px', marginBottom: '20px'}}>You have the right to:
                    <ul style={{paddingLeft: '40px'}}>
                      <li style={{color: '#1d1d1d', fontFamily: 'Courier New, Courier, monospace', fontWeight: '500', listStyleType: 'dot', fontSize: '16px'}}>know the source from which your data is collected, where it is stored, for what purpose it is processed, as well as the company that "manages" the processing of such data and its location (place of residence);</li>
                      <li style={{color: '#1d1d1d', fontFamily: 'Courier New, Courier, monospace', fontWeight: '500', listStyleType: 'dot', fontSize: '16px'}}>receive information from us about the terms of access to data, including information about the persons to whom your data may be transferred;</li>
                      <li style={{color: '#1d1d1d', fontFamily: 'Courier New, Courier, monospace', fontWeight: '500', listStyleType: 'dot', fontSize: '16px'}}>access your personal data. In particular, you can submit a request to us to confirm the fact of processing your personal data, as well as request and receive a copy of your personal data. We will consider such requests within 30 calendar days.</li>
                      <li style={{color: '#1d1d1d', fontFamily: 'Courier New, Courier, monospace', fontWeight: '500', listStyleType: 'dot', fontSize: '16px'}}>submit a claim with an objection to the processing of your personal data. Such a claim must be motivated;</li>
                      <li style={{color: '#1d1d1d', fontFamily: 'Courier New, Courier, monospace', fontWeight: '500', listStyleType: 'dot', fontSize: '16px'}}>request the modification or deletion of your personal data if such data is processed illegally or is unreliable. Such a demand must be motivated;</li>
                      <li style={{color: '#1d1d1d', fontFamily: 'Courier New, Courier, monospace', fontWeight: '500', listStyleType: 'dot', fontSize: '16px'}}>protect your personal data from illegal processing and accidental loss, destruction, etc.;</li>
                      <li style={{color: '#1d1d1d', fontFamily: 'Courier New, Courier, monospace', fontWeight: '500', listStyleType: 'dot', fontSize: '16px'}}>apply to a court authorized by the Verkhovna Rada of Ukraine on human rights or use other means of protection - if you believe that your rights have been violated;</li>
                      <li style={{color: '#1d1d1d', fontFamily: 'Courier New, Courier, monospace', fontWeight: '500', listStyleType: 'dot', fontSize: '16px'}}>implement a clause to restrict the processing of your personal data when providing consent to processing. Such a disclaimer may refer, for example, to the period of personal data processing or their volume;</li>
                      <li style={{color: '#1d1d1d', fontFamily: 'Courier New, Courier, monospace', fontWeight: '500', listStyleType: 'dot', fontSize: '16px'}}>revoke the consent you previously gave to the processing of your personal data. You do not have the right to withdraw consent only if such consent was the only basis for the processing of your personal data. For example, if we process your data in order to deliver goods to you (ie to fulfill our obligation to you), you cannot withdraw your consent or we will not be able to deliver them;</li>
                      <li style={{color: '#1d1d1d', fontFamily: 'Courier New, Courier, monospace', fontWeight: '500', listStyleType: 'dot', fontSize: '16px'}}>know how the automatic processing of your personal data (if any) works, as well as protection against an "automated" decision that may have consequences for you (if the decision is made by software).</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div>
                <h4 style={{color: '#000', fontFamily: 'Courier New, Courier, monospace', marginTop: '30px', fontWeight: '600'}}>SECURITY</h4>
                <ul style={{paddingLeft: '30px'}}>
                  <li style={{color: '#1d1d1d', fontFamily: 'Courier New, Courier, monospace', fontWeight: '500', listStyleType: 'unset', fontSize: '16px', marginBottom: '20px'}}>We value your personal data, so we take their processing seriously. We use adequate methods of protecting personal data and provide limited access to them.</li>
                </ul>
              </div>

              <div>
                <h4 style={{color: '#000', fontFamily: 'Courier New, Courier, monospace', marginTop: '30px', fontWeight: '600'}}>LINKS</h4>
                <ul style={{paddingLeft: '30px'}}>
                  <li style={{color: '#1d1d1d', fontFamily: 'Courier New, Courier, monospace', fontWeight: '500', listStyleType: 'unset', fontSize: '16px', marginBottom: '20px'}}>On our website, we may post links to our social media pages. In this case, we do not set the rules for the processing of your personal data that can be collected in social networks, and we cannot be responsible for such processing. For more detailed information, you can familiarize yourself with the privacy rules of the relevant social networks.</li>
                </ul>
              </div>

              <div>
                <h4 style={{color: '#000', fontFamily: 'Courier New, Courier, monospace', marginTop: '30px', fontWeight: '600'}}>CONTACTS</h4>
                <ul style={{paddingLeft: '30px'}}>
                  <li style={{color: '#1d1d1d', fontFamily: 'Courier New, Courier, monospace', fontWeight: '500', listStyleType: 'unset', fontSize: '16px', marginBottom: '20px'}}>If you have any questions about the processing of your personal data or you want to remove your data from the mailing list or other databases, you can contact us at any time using any of the following contacts:</li>
                </ul>
              </div>

              <div style={{marginTop: '30px', color: '#000', fontFamily: 'Courier New, Courier, monospace'}}>
                <b>Natural person:</b> Ralets Taras Ihorovych
              </div>

              <div style={{marginTop: '30px', color: '#000', fontFamily: 'Courier New, Courier, monospace'}}>
                <b>E-mail:</b> sickbenocouture@gmail.com
              </div>

              <div style={{marginTop: '30px', color: '#000', fontFamily: 'Courier New, Courier, monospace'}}>
                <b>Phone: </b> +380955354564
              </div>
            </Row>
            :
            <Row> 
              <h1 style={{color: '#000', fontFamily: 'Courier New, Courier, monospace', marginBottom: '30px'}}>ПОЛІТИКА КОНФІДЕНЦІЙНОСТІ І ПРАВИЛА ОБРОБКИ ПЕРСОНАЛЬНИХ ДАНИХ</h1>
              <p style={{fontFamily: 'Courier New, Courier, monospace'}}>Ми дбаємо про захист ваших персональних даних, тому ми обробляємо їх відповідно до всіх вимог законодавства України, а також – там, де це можливо – законодавства Європейського Союзу. Користуючись нашим веб-сайтом, ви автоматично даєте згоду на обробку Ваших персональних даних відповідно до цієї політики.</p>
              <div >
                <h4 style={{color: '#000', fontFamily: 'Courier New, Courier, monospace', marginTop: '30px', fontWeight: '600'}}>ОБРОБКА ДАНИХ</h4>
                <ul style={{paddingLeft: '30px'}}>
                  <li style={{color: '#1d1d1d', fontFamily: 'Courier New, Courier, monospace', fontWeight: '500', listStyleType: 'unset', fontSize: '16px', marginBottom: '20px'}}>Коли ви відвідуєте наш Сайт LINK (далі - Сайт), розміщуєте на ньому замовлення , слідкуйте за нашими новинами та оновленнями, Ми просимо Вас надати нам свої персональні дані, зокрема своє ім'я, прізвище,-батька, адресу електронної пошти, номер телефону та адресу доставки.</li>
                  <li style={{color: '#1d1d1d', fontFamily: 'Courier New, Courier, monospace', fontWeight: '500', listStyleType: 'unset', fontSize: '16px', marginBottom: '20px'}}>У майбутньому ми можемо зберігати інформацію про: обраний вами товар, замовлений вами товар, дату замовлення та дату оплати товару.</li>
                  <li style={{color: '#1d1d1d', fontFamily: 'Courier New, Courier, monospace', fontWeight: '500', listStyleType: 'unset', fontSize: '16px', marginBottom: '20px'}}>Ми будемо використовувати ваші персональні дані для наступних цілей:
                    <ul style={{paddingLeft: '40px'}}>
                      <li style={{color: '#1d1d1d', fontFamily: 'Courier New, Courier, monospace', fontWeight: '500', listStyleType: 'dot', fontSize: '16px', }}>обробка ваших замовлень, продажів та доставки вам наших продуктів;</li>
                      <li style={{color: '#1d1d1d', fontFamily: 'Courier New, Courier, monospace', fontWeight: '500', listStyleType: 'dot', fontSize: '16px', marginBottom: '20px'}}>спілкування з вами.</li>
                    </ul>
                  </li>
                  <li style={{color: '#1d1d1d', fontFamily: 'Courier New, Courier, monospace', fontWeight: '500', listStyleType: 'unset', fontSize: '16px', marginBottom: '20px'}}>Ми також збираємо інформацію (зокрема, про вашу IP-адресу, сторінки Сайту, які ви відвідували) для складання та аналізу статистичних даних та безпеки нашого Сайту.</li>
                  <li style={{color: '#1d1d1d', fontFamily: 'Courier New, Courier, monospace', fontWeight: '500', listStyleType: 'unset', fontSize: '16px', marginBottom: '20px'}}>Всі ваші персональні дані обробляються Фізичною особою Ралець Тарас Ігорович (далі - ФО) (35500, Україна, Радивилів, вул Почаївська 89) Відповідно до законодавства України, ФО Ралець Тарас Ігорович є власником персональних даних, а відповідно до законодавства Європейського Союзу – їх контролером.</li>
                  <li style={{color: '#1d1d1d', fontFamily: 'Courier New, Courier, monospace', fontWeight: '500', listStyleType: 'unset', fontSize: '16px', marginBottom: '20px'}}>У маркетингових цілях, а також для послуг доставки персональні дані можуть передаватися третім особам. Такі треті особи обробляють ваші дані відповідно до наших вказівок, але відповідно до політики конфіденційності зазначених сторін. Зауважте, що сервери з розміщеною на них інформацією можуть бути розташовані за межами України.</li>
                  <li style={{color: '#1d1d1d', fontFamily: 'Courier New, Courier, monospace', fontWeight: '500', listStyleType: 'unset', fontSize: '16px', marginBottom: '20px'}}>Підставами для обробки ваших персональних даних можуть бути:
                    <ul style={{paddingLeft: '40px'}}>
                      <li style={{color: '#1d1d1d', fontFamily: 'Courier New, Courier, monospace', fontWeight: '500', listStyleType: 'dot', fontSize: '16px'}}>замовлення вами наших товарів (підставою є укладення та виконання договору, а також попередні дії, необхідні для його укладання);</li>
                      <li style={{color: '#1d1d1d', fontFamily: 'Courier New, Courier, monospace', fontWeight: '500', listStyleType: 'dot', fontSize: '16px'}}>ваша явна згода на обробку нами або третьою стороною ваших персональних даних (підставою є згода на обробку)</li>
                      <li style={{color: '#1d1d1d', fontFamily: 'Courier New, Courier, monospace', fontWeight: '500', listStyleType: 'dot', fontSize: '16px'}}>комерційна діяльність (ця діяльність - це наш законний інтерес та підстава для збору персональних даних).</li>
                    </ul>
                  </li>
                  <li style={{color: '#1d1d1d', fontFamily: 'Courier New, Courier, monospace', fontWeight: '500', listStyleType: 'unset', fontSize: '16px', marginBottom: '20px'}}>Наприклад, ваші персональні дані, пов'язані з придбанням та доставкою товарів, оброблятимуться протягом 90 (дев'яноста) календарних днів з дати замовлення.</li>
                  <li style={{color: '#1d1d1d', fontFamily: 'Courier New, Courier, monospace', fontWeight: '500', listStyleType: 'unset', fontSize: '16px', marginBottom: '20px'}}>Умови обробки ваших персональних даних третіми особами не встановлюються нами та повністю залежать від затверджених ними правил.</li>
                </ul>
              </div>

              <div>
                <h4 style={{color: '#000', fontFamily: 'Courier New, Courier, monospace', marginTop: '30px', fontWeight: '600'}}>ПРАВА</h4>
                <ul style={{paddingLeft: '30px'}}>
                  <li style={{color: '#1d1d1d', fontFamily: 'Courier New, Courier, monospace', fontWeight: '500', listStyleType: 'unset', fontSize: '16px', marginBottom: '20px'}}>Ви завжди можете звернутися до офіційного тексту закону за таким посиланням: http://zakon3.rada.gov.ua/laws/show/2297-17.</li>
                  <li style={{color: '#1d1d1d', fontFamily: 'Courier New, Courier, monospace', fontWeight: '500', listStyleType: 'unset', fontSize: '16px', marginBottom: '20px'}}>Ви маєте право:
                    <ul style={{paddingLeft: '40px'}}>
                      <li style={{color: '#1d1d1d', fontFamily: 'Courier New, Courier, monospace', fontWeight: '500', listStyleType: 'dot', fontSize: '16px'}}>знати джерело, з якого збираються ваші дані, де вони зберігаються, з якою метою вони обробляються, а також підприємство, яке «керує» обробкою таких даних, та його місцезнаходження (місце проживання);</li>
                      <li style={{color: '#1d1d1d', fontFamily: 'Courier New, Courier, monospace', fontWeight: '500', listStyleType: 'dot', fontSize: '16px'}}>отримувати від нас інформацію про умови доступу до даних, включаючи інформацію про осіб, яким ваші дані можуть бути передані;</li>
                      <li style={{color: '#1d1d1d', fontFamily: 'Courier New, Courier, monospace', fontWeight: '500', listStyleType: 'dot', fontSize: '16px'}}>отримати доступ до ваших персональних даних. Зокрема, ви можете подати нам запит щодо підтвердження факту обробки ваших персональних даних, а також запросити та отримати копію ваших персональних даних. Ми розглянемо такі запити протягом 30 календарних днів.</li>
                      <li style={{color: '#1d1d1d', fontFamily: 'Courier New, Courier, monospace', fontWeight: '500', listStyleType: 'dot', fontSize: '16px'}}>подати претензію із запереченням щодо обробки ваших персональних даних. Така претензія має бути мотивованою;</li>
                      <li style={{color: '#1d1d1d', fontFamily: 'Courier New, Courier, monospace', fontWeight: '500', listStyleType: 'dot', fontSize: '16px'}}>вимагати зміни або видалення ваших персональних даних, якщо такі дані обробляються незаконно або недостовірні. Така вимога має бути мотивованою;</li>
                      <li style={{color: '#1d1d1d', fontFamily: 'Courier New, Courier, monospace', fontWeight: '500', listStyleType: 'dot', fontSize: '16px'}}>захистити ваші персональні дані від незаконної обробки та випадкової втрати, знищення тощо;</li>
                      <li style={{color: '#1d1d1d', fontFamily: 'Courier New, Courier, monospace', fontWeight: '500', listStyleType: 'dot', fontSize: '16px'}}>звертатися до суду, уповноваженого Верховної Ради України з прав людини або використовувати інші засоби захисту - якщо ви вважаєте, що ваші права були порушені;</li>
                      <li style={{color: '#1d1d1d', fontFamily: 'Courier New, Courier, monospace', fontWeight: '500', listStyleType: 'dot', fontSize: '16px'}}>здійснити застереження, щоб обмежити обробку ваших персональних даних при наданні згоди на обробку. Таке застереження може стосуватися, наприклад, періоду обробки персональних даних або їх обсягу;</li>
                      <li style={{color: '#1d1d1d', fontFamily: 'Courier New, Courier, monospace', fontWeight: '500', listStyleType: 'dot', fontSize: '16px'}}>відкликати згоду, яку ви раніше давали на обробку ваших персональних даних. Ви не маєте права відкликати згоду лише в тому випадку, якщо така згода була єдиною підставою для обробки ваших персональних даних. Наприклад, якщо ми обробляємо ваші дані для того, щоб доставити вам товари (тобто, щоб виконати наше зобов'язання перед вами), ви не можете відкликати свою згоду, інакше ми не зможемо їх доставити;</li>
                      <li style={{color: '#1d1d1d', fontFamily: 'Courier New, Courier, monospace', fontWeight: '500', listStyleType: 'dot', fontSize: '16px'}}>знати, як функціонує автоматична обробка ваших персональних даних (якщо є), а також захист від «автоматизованого» рішення, яке може мати наслідки для вас (якщо рішення приймається програмним забезпеченням).</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div>
                <h4 style={{color: '#000', fontFamily: 'Courier New, Courier, monospace', marginTop: '30px', fontWeight: '600'}}>БЕЗПЕКА</h4>
                <ul style={{paddingLeft: '30px'}}>
                  <li style={{color: '#1d1d1d', fontFamily: 'Courier New, Courier, monospace', fontWeight: '500', listStyleType: 'unset', fontSize: '16px', marginBottom: '20px'}}>Ми цінуємо ваші персональні дані, тому ми серйозно ставимося до їхньої обробки. Ми використовуємо адекватні методи захисту персональних даних та забезпечуємо обмежений доступ до них.</li>
                </ul>
              </div>

              <div>
                <h4 style={{color: '#000', fontFamily: 'Courier New, Courier, monospace', marginTop: '30px', fontWeight: '600'}}>ПОСИЛАННЯ</h4>
                <ul style={{paddingLeft: '30px'}}>
                  <li style={{color: '#1d1d1d', fontFamily: 'Courier New, Courier, monospace', fontWeight: '500', listStyleType: 'unset', fontSize: '16px', marginBottom: '20px'}}>На нашому Сайті ми можемо розміщувати посилання на наші сторінки в соціальних мережах. У цьому випадку ми не встановлюємо правила обробки ваших персональних даних, які можна збирати на соціальних мережах, і ми не можемо нести відповідальність за таку обробку. Для отримання більш детальної інформації ви можете ознайомитися з правилами конфіденційності відповідних соціальних мереж.</li>
                </ul>
              </div>

              <div>
                <h4 style={{color: '#000', fontFamily: 'Courier New, Courier, monospace', marginTop: '30px', fontWeight: '600'}}>КОНТАКТИ</h4>
                <ul style={{paddingLeft: '30px'}}>
                  <li style={{color: '#1d1d1d', fontFamily: 'Courier New, Courier, monospace', fontWeight: '500', listStyleType: 'unset', fontSize: '16px', marginBottom: '20px'}}>Якщо у вас виникли питання щодо обробки ваших персональних даних або ви хочете видалити свої дані зі списку розсилки або інших баз даних, ви можете у будь-який час зв'язатися з нами будь-яким із наступних контактів:</li>
                </ul>
              </div>

              <div style={{marginTop: '30px', color: '#000', fontFamily: 'Courier New, Courier, monospace'}}>
                <b>Фізична особа:</b> Ралець Тарас Ігорович
              </div>

              <div style={{marginTop: '30px', color: '#000', fontFamily: 'Courier New, Courier, monospace'}}>
                <b>E-mail:</b> sickbenocouture@gmail.com
              </div>

              <div style={{marginTop: '30px', color: '#000', fontFamily: 'Courier New, Courier, monospace'}}>
                <b>Телефон: </b> +380955354564
              </div>
            </Row>
          }
        </Container>
      </div>
    </>
  )
}

export default PrivacyPolicy
