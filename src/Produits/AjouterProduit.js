import { useState } from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';

export default function Explere() {
    const dispatch=useDispatch()
    const [newTitle, setNewTitle] = useState('');
    const [newAvis, setNewAvis] = useState(null);
    const [newLieu, setNewLieu] = useState('');
    const [newLoyer, setNewLoyer] = useState('');
    const [newVoyageurs, setNewVoyageurs] = useState(null);
    const [newChambres, setNewChambres] = useState(null);
    const [newLits, setNewLits] = useState(null);
    const [newSallesDeBain, setNewSallesDeBain] = useState(null);
    const [newToilette, setNewToilette] = useState(null);
    const [newPrix, setNewPrix] = useState(null);
    const [newStartDate, setNewStartDate] = useState(new Date());
    const [newEndDate, setNewEndDate] = useState(new Date());
    const [fichierSelectionne1, setFichierSelectionne1] = useState(null);
    const [fichierSelectionne2, setFichierSelectionne2] = useState(null);
    const [fichierSelectionne3, setFichierSelectionne3] = useState(null);
    const [fichierSelectionne4, setFichierSelectionne4] = useState(null);
    const [fichierSelectionne5, setFichierSelectionne5] = useState(null);
    const [category, setCategory] = useState("Campagne");
    const nav =useNavigate();

    const [panoramicViews, setPanoramicViews] = useState([ {
        "Vues panoramiques": [
            { value: "Vue sur la montagne", type: false, icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "24px", width: "24px", fill: "currentcolor" }}><path d="M28 2a2 2 0 0 1 2 1.85V28a2 2 0 0 1-1.85 2H4a2 2 0 0 1-2-1.85V4a2 2 0 0 1 1.85-2H4zm-5.92 20H9.92L4 27.91V28h24v-.09zM28 4H4v21.08l12-12 12 12zM16 15.91 11.91 20h8.17zM22 7a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path></svg> },
            { value: "Vue sur le jardin", type: false, icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "24px", width: "24px", fill: "currentcolor" }}><path d="M16 1a5 5 0 0 1 5 5 5 5 0 0 1 0 10 5 5 0 0 1-4 4.9v4.29A9.04 9.04 0 0 1 23.95 22a8.94 8.94 0 0 1 3.74.81l.31.15v2.33A6.96 6.96 0 0 0 23.95 24a6.88 6.88 0 0 0-6.93 5.87l-.02.15v.1a1 1 0 0 1-.88.87L16 31a1 1 0 0 1-.97-.77l-.02-.12A6.95 6.95 0 0 0 7.97 24 6.96 6.96 0 0 0 4 25.23v-2.31a9.16 9.16 0 0 1 11 2.3V20.9a5 5 0 0 1-4-4.68V16h-.22a5 5 0 0 1 0-10H11v-.22A5 5 0 0 1 16 1zm2.86 14.1a4.98 4.98 0 0 1-5.72 0l-.07.23a3 3 0 1 0 5.85 0zM11 8a3 3 0 1 0 .67 5.93l.23-.07A4.98 4.98 0 0 1 11 11c0-1.06.33-2.05.9-2.86l-.23-.07A3.01 3.01 0 0 0 11 8zm10 0c-.23 0-.45.03-.67.07l-.23.07c.57.8.9 1.8.9 2.86a4.98 4.98 0 0 1-.9 2.86l.23.07A3 3 0 1 0 21 8zm-5 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-5a3 3 0 0 0-2.93 3.67l.07.23a4.98 4.98 0 0 1 5.72 0l.07-.23A3 3 0 0 0 16 3z"></path></svg> },
            { value: "Vue sur la vallée", type: false, icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "24px", width: "24px", fill: "currentcolor" }}><path d="M28 2a2 2 0 0 1 2 1.85V28a2 2 0 0 1-1.85 2H4a2 2 0 0 1-2-1.85V4a2 2 0 0 1 1.85-2H4zm-5.92 20H9.92L4 27.91V28h24v-.09zM28 4H4v21.08l12-12 12 12zM16 15.91 11.91 20h8.17zM22 7a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path></svg> },
            { value: "Sèche-cheveux", type: false, icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "24px", width: "24px", fill: "currentcolor" }}><path d="M14 27v.2a4 4 0 0 1-3.8 3.8H4v-2h6.15a2 2 0 0 0 1.84-1.84L12 27zM10 1c.54 0 1.07.05 1.58.14l.38.07 17.45 3.65a2 2 0 0 1 1.58 1.79l.01.16v6.38a2 2 0 0 1-1.43 1.91l-.16.04-13.55 2.83 1.76 6.5A2 2 0 0 1 15.87 27l-.18.01h-3.93a2 2 0 0 1-1.88-1.32l-.05-.15-1.88-6.76A9 9 0 0 1 10 1zm5.7 24-1.8-6.62-1.81.38a9 9 0 0 1-1.67.23h-.33L11.76 25zM10 3a7 7 0 1 0 1.32 13.88l.33-.07L29 13.18V6.8L11.54 3.17A7.03 7.03 0 0 0 10 3zm0 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"></path></svg> },
            { value: "Produits de nettoyage", type: false, icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "24px", width: "24px", fill: "currentcolor" }}><path d="M16 1c4.26 0 7.6 4.44 7.97 10h.91a2 2 0 0 1 2 2v.22l-1.79 16A2 2 0 0 1 23.26 31l-.16.01H8.9a2 2 0 0 1-1.97-1.62l-.02-.16L6.44 25H5a2 2 0 0 1-2-1.85V14a5 5 0 0 1 4.78-5h.52c.94-4.62 4-8 7.7-8zm8.21 18H17v4a2 2 0 0 1-1.85 2h-6.7l.45 4h14.2zM15 21H5v2h10zm0-10H8a3 3 0 0 0-3 2.82V19h10zm9.88 2H17v4h7.44zM16 3c-2.52 0-4.8 2.44-5.65 6H15a2 2 0 0 1 2 1.85V11h4.96c-.34-4.55-2.95-8-5.96-8z"></path></svg> },
            { value: "Shampoing EcoStore (New Zealand made all natural)", type: false, icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "24px", width: "24px", fill: "currentcolor" }}><path d="M20 1v2h-3v2h1a2 2 0 0 1 2 1.85V9a4 4 0 0 1 4 3.8V27a4 4 0 0 1-3.8 4H12a4 4 0 0 1-4-3.8V13a4 4 0 0 1 3.8-4h.2V7a2 2 0 0 1 1.85-2H15V3H8V1zm2 21H10v5a2 2 0 0 0 1.85 2H20a2 2 0 0 0 2-1.85V27zm0-6H10v4h12zm-2-5h-8a2 2 0 0 0-2 1.85V14h12v-1a2 2 0 0 0-2-2zm-2-4h-4v2h4z"></path></svg> },
            { value: "Après-shampoing EcoStore (New Zealand made , all natural)", type: false, icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "24px", width: "24px", fill: "currentcolor" }}><path d="M20 1v2h-3v2h1a2 2 0 0 1 2 1.85V9a4 4 0 0 1 4 3.8V27a4 4 0 0 1-3.8 4H12a4 4 0 0 1-4-3.8V13a4 4 0 0 1 3.8-4h.2V7a2 2 0 0 1 1.85-2H15V3H8V1zm2 21H10v5a2 2 0 0 0 1.85 2H20a2 2 0 0 0 2-1.85V27zm0-6H10v4h12zm-2-5h-8a2 2 0 0 0-2 1.85V14h12v-1a2 2 0 0 0-2-2zm-2-4h-4v2h4z"></path></svg> },
            { value: "Savon pour le corps", type: false, icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "24px", width: "24px", fill: "currentcolor" }}><path d="M18 1v2h-7v2h1a2 2 0 0 1 2 1.85V9.1a5 5 0 0 1 4 4.67V28a3 3 0 0 1-2.82 3H5a3 3 0 0 1-3-2.82V14a5 5 0 0 1 4-4.9V7a2 2 0 0 1 1.85-2H9V3H6V1h12zm-2 15.06c-1.14.15-2.08.6-3.58 1.55l-.34.23C9.63 19.41 8.29 20 6 20a9 9 0 0 1-2-.22V28a1 1 0 0 0 .88 1H15a1 1 0 0 0 1-.88V16.06zM27 13a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm-14-2H7a3 3 0 0 0-3 2.82v3.89A6.85 6.85 0 0 0 6 18c1.63 0 2.64-.36 4.4-1.46l.64-.4c2.01-1.32 3.28-1.93 4.96-2.09V14a3 3 0 0 0-3-3zm14 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM25 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM12 7H8v2h4V7zm13-3a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path></svg> },
            { value: "Douche extérieure", type: false, icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "24px", width: "24px", fill: "currentcolor" }}><path d="M7 1a3 3 0 0 0-3 2.82V31h2V4a1 1 0 0 1 .88-1H18a1 1 0 0 1 1 .88V5h-5a1 1 0 0 0-1 .88V9h-3v2h19V9h-2V6a1 1 0 0 0-.88-1H21V4a3 3 0 0 0-2.82-3H7zm13 28a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm5 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-10 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm5-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm5 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-10 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm5-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm5 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-10 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm5-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm5 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-10 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm5-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-5 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm10 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM15 7h10v2H15V7z"></path></svg> },
            { value: "Eau chaude ", type: false, icon: <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "24px", width: "24px", fill: "currentcolor" }}><path d="m4 2v2h2l.001 2h-1.001c-1.1045695 0-2 .8954305-2 2v16.3846154c0 3.0720253 2.20424471 5.6153846 5 5.6153846h16c2.7957553 0 5-2.5433593 5-5.6153846v-9.3846154h-2l.0006267 2.2441864c-.2957862.1662973-.6415947.2556548-1.0003023.2558136-.3770726-.0001668-.7397707-.0987428-1.0448826-.2813581l-.147435-.0980881-.0698054-.0542225-.0669618-.0575717c-.1674894-.1516722-.3473184-.2870627-.5370123-.4056091-.1267551-.0791722-.2576057-.1507019-.3921007-.2145789l-.2041007-.0899647c-.4828805-.1966888-1.005996-.2986069-1.537908-.2986069-.1521835 0-.3034078.0083174-.453179.0247859l-.2234033.0307902c-.658505.1092272-1.2810008.3778141-1.8035225.7911936l-.1911344.1617761c-.3493432.3161496-.8261929.4912319-1.3293208.4914542-.5021258-.0002223-.9789755-.1753046-1.3283187-.4914542-.7261733-.6571745-1.6832835-1.0085458-2.6712392-1.0085458-.9878365 0-1.9453342.3515135-2.6706493 1.008332-.3497754.3163381-.8267557.4914457-1.3290263.491668-.502832-.0002223-.97980321-.1753492-1.32908476-.4912404-.72578749-.6572461-1.68328523-1.0087596-2.67112174-1.0087596-.34005846 0-.67646247.0416292-1.00105227.1230294l.00093437-8.1230294h4v2h2v-2c0-1.1045695-.8954305-2-2-2h-.999l-.001-2.001 2 .001v-2zm22.0003242 17.4999999c.3396204-.0001501.6755904-.0417799.9997827-.1230407v5.0076562c0 2.0259877-1.3775842 3.6153845-3.0001069 3.6153845h-16c-1.62252271 0-3-1.5893968-3-3.6153845l-.00148637-6.1285018c.29592169-.1666518.64208407-.2561137 1.00160427-.2561137.5026133 0 .97950576.1750753 1.32911493.4916681.72598912.6565871 1.68280283 1.0078952 2.67109137 1.0083319.9877-.0004367 1.9445263-.3517037 2.6710333-1.0087595.3491367-.3161652.8260292-.4912405 1.3286425-.4912405.5028479 0 .9795643.1750107 1.3292324.4914543.725724.6567679 1.6826278 1.008109 2.6713278 1.0085457.987581-.0004368 1.9447946-.351846 2.6704432-1.0085457.3496467-.3164242.826354-.4914543 1.3288787-.4914543.5028479 0 .9795643.1750107 1.3292324.4914543.6698295.6061843 1.5369688.9522395 2.4431705 1.0022354zm-8.0059505-15.50004556-1.999421.00109132c.0017379 1.66765868-.3914074 2.67484348-1.6096005 4.57626989l-.4357339.67326735c-1.1985316 1.8730246-1.7578573 3.1084741-1.9072678 4.7489216l2.013841.0007885c.1565646-1.2622433.6616712-2.2705308 1.7787146-3.9820993l.243287-.37580218c1.405662-2.19695557 1.9189882-3.50550246 1.9161806-5.64243718zm3.0005862.00002214c-.0019426 1.6881104-.3993036 2.69826243-1.6537336 4.66840333l-.3870791.60284703c-1.2033592 1.89238746-1.7606515 3.11545826-1.9109072 4.72843796h2.0148819c.1395749-1.0872185.5479182-1.9947141 1.4095297-3.3786139l.7616667-1.19781229c1.2938583-2.07979737 1.7634695-3.36210955 1.7656416-5.42219097zm5 0c-.0019426 1.6881104-.3993036 2.69826243-1.6537336 4.66840333l-.3870791.60284703c-1.2033592 1.89238746-1.7606515 3.11545826-1.9109072 4.72843796h2.0148819c.1395749-1.0872185.5479182-1.9947141 1.4095297-3.3786139l.7616667-1.19781229c1.2938583-2.07979737 1.7634695-3.36210955 1.7656416-5.42219097z"></path></svg> },
            { value: "Gel douche", type: false, icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "24px", width: "24px", fill: "currentcolor" }}><path d="M18 1v2h-7v2h1a2 2 0 0 1 2 1.85V9.1a5 5 0 0 1 4 4.67V28a3 3 0 0 1-2.82 3H5a3 3 0 0 1-3-2.82V14a5 5 0 0 1 4-4.9V7a2 2 0 0 1 1.85-2H9V3H6V1h12zm-2 15.06c-1.14.15-2.08.6-3.58 1.55l-.34.23C9.63 19.41 8.29 20 6 20a9 9 0 0 1-2-.22V28a1 1 0 0 0 .88 1H15a1 1 0 0 0 1-.88V16.06zM27 13a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm-14-2H7a3 3 0 0 0-3 2.82v3.89A6.85 6.85 0 0 0 6 18c1.63 0 2.64-.36 4.4-1.46l.64-.4c2.01-1.32 3.28-1.93 4.96-2.09V14a3 3 0 0 0-3-3zm14 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM25 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM12 7H8v2h4V7zm13-3a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path></svg> },
        ],
        "Chambre et linge": [
            { value: "Lave-linge (Gratuit) dans le bâtiment", type: false, icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "24px", width: "24px", fill: "currentcolor" }}><path d="M26.29 2a3 3 0 0 1 2.96 2.58c.5 3.56.75 7.37.75 11.42s-.25 7.86-.75 11.42a3 3 0 0 1-2.79 2.57l-.17.01H5.7a3 3 0 0 1-2.96-2.58C2.25 23.86 2 20.05 2 16s.25-7.86.75-11.42a3 3 0 0 1 2.79-2.57L5.7 2zm0 2H5.72a1 1 0 0 0-1 .86A80.6 80.6 0 0 0 4 16c0 3.96.24 7.67.73 11.14a1 1 0 0 0 .87.85l.11.01h20.57a1 1 0 0 0 1-.86c.48-3.47.72-7.18.72-11.14 0-3.96-.24-7.67-.73-11.14A1 1 0 0 0 26.3 4zM16 7a9 9 0 1 1 0 18 9 9 0 0 1 0-18zm-5.84 7.5c-.34 0-.68.02-1.02.07a7 7 0 0 0 13.1 4.58 9.09 9.09 0 0 1-6.9-2.37l-.23-.23a6.97 6.97 0 0 0-4.95-2.05zM16 9a7 7 0 0 0-6.07 3.5h.23c2.26 0 4.44.84 6.12 2.4l.24.24a6.98 6.98 0 0 0 6.4 1.9A7 7 0 0 0 16 9zM7 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></svg> },
            { value: "Lit pour bébé : disponible sur demande", type: false, icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "24px", width: "24px", fill: "currentcolor" }}><path d="M26.29 2a3 3 0 0 1 2.96 2.58c.5 3.56.75 7.37.75 11.42s-.25 7.86-.75 11.42a3 3 0 0 1-2.79 2.57l-.17.01H5.7a3 3 0 0 1-2.96-2.58C2.25 23.86 2 20.05 2 16s.25-7.86.75-11.42a3 3 0 0 1 2.79-2.57L5.7 2zm0 2H5.72a1 1 0 0 0-1 .86A80.6 80.6 0 0 0 4 16c0 3.96.24 7.67.73 11.14a1 1 0 0 0 .87.85l.11.01h20.57a1 1 0 0 0 1-.86c.48-3.47.72-7.18.72-11.14 0-3.96-.24-7.67-.73-11.14a1 1 0 0 0-.87-.85zM16 7a9 9 0 1 1 0 18 9 9 0 0 1 0-18zm0 2a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm-4.8 5.58c1.36.2 2.64.8 3.68 1.75l.46.45a8.97 8.97 0 0 0 4.62 2.28 5.02 5.02 0 0 1-2.01 1.55 10.98 10.98 0 0 1-4.26-2.65 4.96 4.96 0 0 0-2.66-1.38 4.68 4.68 0 0 1 .17-2zm3.09-3.28c1.34.55 2.58 1.36 3.64 2.42a4.97 4.97 0 0 0 3 1.44 4.99 4.99 0 0 1-.07 2 6.97 6.97 0 0 1-4.11-1.8l-.47-.45a8.96 8.96 0 0 0-4.07-2.17 5 5 0 0 1 2.08-1.44zM7 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></svg> },
            { value: "Équipements de base", type: false, icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "24px", width: "24px", fill: "currentcolor" }}><path d="M11 1v7l1.9 20.82v.17a2.01 2.01 0 0 1-1.81 2 2 2 0 0 1-.18.01H2.92a2.01 2.01 0 0 1-1.82-2v-.09l1.9-21V1zm6 0h.15a2 2 0 0 1 1.84 1.84L19 3v7.12l-2 8V31h-2V17.96l.03-.16.03-.16L16.72 11H13V1zm11 0a2 2 0 0 1 2 1.85V29a2 2 0 0 1-1.85 2H21v-2h7v-2h-7v-2h7v-2h-7v-2h7v-2h-7v-2h7v-2h-7v-2h7v-2h-7V9h7V7h-7V5h7V3h-7V1zM9.09 9H4.9L3.1 29h7.81v-.06zM17 3h-2v6h2zM9 3H5v4h4z"></path></svg> },
            { value: "Cintres", type: false, icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "24px", width: "24px", fill: "currentcolor" }}><path d="M16 2a5 5 0 0 1 1.66 9.72 1 1 0 0 0-.65.81l-.01.13v.81l13.23 9.05a3 3 0 0 1 1.3 2.28v.2a3 3 0 0 1-3 3H3.47a3 3 0 0 1-1.69-5.48L15 13.47v-.81a3 3 0 0 1 1.82-2.76l.17-.07a3 3 0 1 0-3.99-3V7h-2a5 5 0 0 1 5-5zm0 13.21L2.9 24.17A1 1 0 0 0 3.46 26h25.07a1 1 0 0 0 .57-1.82z"></path></svg> },
            { value: "Réfrigérateur Mitsubishi with vegetable bin , freezer and ice maker. 370 litre", type: false, icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "24px", width: "24px", fill: "currentcolor" }}><path d="M19.59 2a2 2 0 0 1 1.28.47l.13.12L29.41 11a2 2 0 0 1 .58 1.24l.01.17V25a5 5 0 0 1-4.78 5H4a2 2 0 0 1-2-1.85V7a5 5 0 0 1 4.78-5H7zM7 4a3 3 0 0 0-3 2.82V21a3 3 0 0 0 2.82 3H26v2H7a4.98 4.98 0 0 1-3-1v3h21a3 3 0 0 0 3-2.82V22H6v-2h22v-6h-5a5 5 0 0 1-5-4.78V4zm20.59 8L20 4.42V9a3 3 0 0 0 2.82 3H23z"></path></svg> },
            { value: "Draps", type: false, icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "24px", width: "24px", fill: "currentcolor" }}><path d="M19.59 2a2 2 0 0 1 1.28.47l.13.12L29.41 11a2 2 0 0 1 .58 1.24l.01.17V25a5 5 0 0 1-4.78 5H4a2 2 0 0 1-2-1.85V7a5 5 0 0 1 4.78-5H7zM7 4a3 3 0 0 0-3 2.82V21a3 3 0 0 0 2.82 3H26v2H7a4.98 4.98 0 0 1-3-1v3h21a3 3 0 0 0 3-2.82V22H6v-2h22v-6h-5a5 5 0 0 1-5-4.78V4zm20.59 8L20 4.42V9a3 3 0 0 0 2.82 3H23z"></path></svg> },
            { value: "Oreillers et couvertures supplémentaires", type: false, icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "24px", width: "24px", fill: "currentcolor" }}><path d="M26.8 4a3 3 0 0 0-1.87.83l-.02.02-.11-.02A47.19 47.19 0 0 0 7.94 4.7l-.85.15-.02-.02A3 3 0 0 0 2 7v.21a3 3 0 0 0 .56 1.54l.03.03-.05.28a44.99 44.99 0 0 0 0 13.88l.05.28-.03.03A3 3 0 0 0 5 28h.2a3 3 0 0 0 1.87-.83l.02-.02.11.02a47.19 47.19 0 0 0 16.86.13l.85-.15.02.02A3 3 0 0 0 30 25v-.21a3 3 0 0 0-.56-1.54l-.03-.03.05-.28c.71-4.74.72-9.16 0-13.88l-.05-.28.03-.03A3 3 0 0 0 27 4h-.2zm.2 2a1 1 0 0 1 .68 1.74l-.4.36.09.54a43.3 43.3 0 0 1 0 14.72l-.1.54.4.36a1 1 0 1 1-1.52 1.27l-.37-.6-.68.15a45.29 45.29 0 0 1-18.2 0l-.68-.14-.37.59a1 1 0 1 1-1.52-1.27l.4-.36-.1-.54a43.25 43.25 0 0 1 0-14.72l.1-.54-.4-.36a1 1 0 1 1 1.52-1.27l.37.6.68-.15a45.29 45.29 0 0 1 18.2 0l.68.14.37-.59A1 1 0 0 1 27 6z"></path></svg> },
            { value: "Stores", type: false, icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "24px", width: "24px", fill: "currentcolor" }}><path d="M1 2V0h30v2h-2v18a2 2 0 0 1-1.85 2H17v2.17a3 3 0 1 1-2 0V22H5a2 2 0 0 1-2-1.85V2zm15 24a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM27 2H5v18h22z"></path></svg> },
            { value: "Fer à repasser", type: false, icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "24px", width: "24px", fill: "currentcolor" }}><path d="M12 28a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-6-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM16.03 3h.3a12.5 12.5 0 0 1 11.82 9.48l.07.3 1.73 7.79.03.14A2 2 0 0 1 28.15 23H2.1a2 2 0 0 1-1.85-1.84v-7.38a5 5 0 0 1 4.77-4.77L5.25 9h9V5h-14V3zm11.53 16H2.25v2H28zM16.24 5v6H5.07a3 3 0 0 0-2.82 2.82V17H27.1l-.84-3.78-.07-.28a10.5 10.5 0 0 0-9.6-7.92L16.32 5z"></path></svg> },
            { value: "Chauffage radiant", type: false, icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "24px", width: "24px", fill: "currentcolor" }}><path d="M16 2a5 5 0 0 1 1.66 9.72 1 1 0 0 0-.65.81l-.01.13v.81l13.23 9.05a3 3 0 0 1 1.3 2.28v.2a3 3 0 0 1-3 3H3.47a3 3 0 0 1-1.69-5.48L15 13.47v-.81a3 3 0 0 1 1.82-2.76l.17-.07a3 3 0 1 0-3.99-3V7h-2a5 5 0 0 1 5-5zm0 13.21L2.9 24.17A1 1 0 0 0 3.46 26h25.07a1 1 0 0 0 .57-1.82z"></path></svg> },
            { value: "Détecteur de fumée", type: false, icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "24px", width: "24px", fill: "currentcolor" }}><path d="M16 2a5 5 0 0 1 1.66 9.72 1 1 0 0 0-.65.81l-.01.13v.81l13.23 9.05a3 3 0 0 1 1.3 2.28v.2a3 3 0 0 1-3 3H3.47a3 3 0 0 1-1.69-5.48L15 13.47v-.81a3 3 0 0 1 1.82-2.76l.17-.07a3 3 0 1 0-3.99-3V7h-2a5 5 0 0 1 5-5zm0 13.21L2.9 24.17A1 1 0 0 0 3.46 26h25.07a1 1 0 0 0 .57-1.82z"></path></svg> },
            { value: "Espace de rangement pour les vêtements : armoire", type: false, icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "24px", width: "24px", fill: "currentcolor" }}><path d="M25 1a3 3 0 0 1 3 2.82V26a3 3 0 0 1-2.82 3H25v2h-2v-2H9v2H7v-2a3 3 0 0 1-3-2.82V4a3 3 0 0 1 2.82-3H25zm1 20H6v5a1 1 0 0 0 .88 1H25a1 1 0 0 0 1-.88V21zm-10 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm9-20h-8v16h9V4a1 1 0 0 0-.88-1H25zM15 3H7a1 1 0 0 0-1 .88V19h9V3zm-3 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm8 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></svg> },
        ],
        "Divertissement": [
            { value: "TV HD 42\" avec Netflix", type: false, icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "24px", width: "24px", fill: "currentcolor" }}><path d="M9 29v-2h2v-2H6a5 5 0 0 1-5-4.78V8a5 5 0 0 1 4.78-5H26a5 5 0 0 1 5 4.78V20a5 5 0 0 1-4.78 5H21v2h2v2zm10-4h-6v2h6zm7-20H6a3 3 0 0 0-3 2.82V20a3 3 0 0 0 2.82 3H26a3 3 0 0 0 3-2.82V8a3 3 0 0 0-2.82-3z"></path></svg> },
            { value: "Livres et de quoi lire", type: false, icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "24px", width: "24px", fill: "currentcolor" }}><path d="M1.67 2.68A2 2 0 0 1 4.1.72l.14.04L16.01 4.3 27.78.91a2 2 0 0 1 2.53 1.63l.02.14v23.25a2 2 0 0 1-1.27 1.85l-.15.06-12.62 3.78a1 1 0 0 1-.46.03l-.12-.03L3.1 27.84a2 2 0 0 1-1.42-1.75v-.17zm2 0v23.24L16 29.62l12.33-3.7V2.82L16.28 6.3a1 1 0 0 1-.46.03l-.1-.03zm21.66 17.48v2.08L16 25.04v-2.08zm0-6v2.08L16 19.04v-2.08zm0-6v2.08L16 13.04v-2.08z"></path></svg> },
        ],
        "Famille": [
            { value: "Espace de travail dédié", type: false, icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "24px", width: "24px", fill: "currentcolor" }}><path d="M3 3v4h26V3h2v18a5 5 0 0 1-4 4.9V30h-2v-4H7v4H5v-4.1a5 5 0 0 1-4-4.68V3zm6 6H7v15h2zm4 0h-2v15h2zm4 0h-2v15h2zm4 0h-2v15h2zm4 0h-2v15h2zM5 9H3v12a3 3 0 0 0 2 2.83zm24 0h-2v14.83a3 3 0 0 0 2-2.65V21z"></path></svg> },
            { value: "Cuisine", type: false, icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "24px", width: "24px", fill: "currentcolor" }}><path d="M16 1a7 7 0 0 1 7 6.76V15a2 2 0 0 1-1.5 1.94L23.85 31h-2.03l-2.33-14H12.5l-2.33 14H8.15l2.35-14.06A2 2 0 0 1 9 15.16V8a7 7 0 0 1 7-7zm0 2a5 5 0 0 0-5 4.78V15h10V8a5 5 0 0 0-5-5zm9 6v2h-8v5h-2v-5H7V9z"></path></svg> },
            { value: "Jeux de société ", type: false, icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "24px", width: "24px", fill: "currentcolor" }}><path d="M18 2a3 3 0 0 1 3 2.82V15h2a3 3 0 0 1 3 2.82V27a3 3 0 0 1-2.82 3H14a3 3 0 0 1-3-2.82V17H9a3 3 0 0 1-3-2.82V5a3 3 0 0 1 2.82-3H18zm5 15h-9a1 1 0 0 0-1 .88V27a1 1 0 0 0 .88 1H23a1 1 0 0 0 1-.88V18a1 1 0 0 0-.88-1H23zm-7 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm5 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-5-5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm5 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM18 4H9a1 1 0 0 0-1 .88V14a1 1 0 0 0 .88 1H18a1 1 0 0 0 1-.88V5a1 1 0 0 0-.88-1H18zm-2 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-5-5a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></svg> },
        ],
        "Chauffage et climatisation": [
            { value: "Climatisation centrale", type: false, icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "24px", width: "24px", fill: "currentcolor" }}><path d="M17 1v4.03l4.03-2.32 1 1.73L17 7.34v6.93l6-3.47V5h2v4.65l3.49-2.02 1 1.74L26 11.38l4.03 2.33-1 1.73-5.03-2.9L18 16l6 3.46 5.03-2.9 1 1.73L26 20.62l3.49 2.01-1 1.74L25 22.35V27h-2v-5.8l-6-3.47v6.93l5.03 2.9-1 1.73L17 26.97V31h-2v-4.03l-4.03 2.32-1-1.73 5.03-2.9v-6.93L9 21.2V27H7v-4.65l-3.49 2.02-1-1.74L6 20.62l-4.03-2.33 1-1.73L8 19.46 14 16l-6-3.46-5.03 2.9-1-1.73L6 11.38 2.51 9.37l1-1.74L7 9.65V5h2v5.8l6 3.47V7.34l-5.03-2.9 1-1.73L15 5.03V1z"></path></svg> },
            { value: "Vaisselle et couverts", type: false, icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "24px", width: "24px", fill: "currentcolor" }}><path d="M31 6v2h-1v23h-6V13H8v18H2V8H1V6zm-15.37 9 .96.7c3.32 2.42 5.14 5.06 5.38 7.93l.02.28v.21l.01.14c0 3.18-2.7 5.74-6 5.74a5.9 5.9 0 0 1-5.99-5.39v-.21l-.01-.15a9.3 9.3 0 0 1 1.64-4.99l.22-.34.68-.98 1.24.79zM28 8H4v21h2V13a2 2 0 0 1 1.7-1.98l.15-.01L8 11h16a2 2 0 0 1 2 1.85V29h2zM16 25.36l-.1.09c-.61.65-.9 1.23-.9 1.72 0 .42.41.83 1 .83s1-.4 1-.83c0-.45-.24-.97-.76-1.56l-.15-.16zm.35-7.32-1.77 3.56-1.46-.93-.15.27a7.28 7.28 0 0 0-.94 2.75l-.02.29-.01.26v.12c.03.92.4 1.76 1.03 2.4.14-1.14.86-2.24 2.1-3.33l.23-.2.64-.53.64.53c1.38 1.16 2.19 2.32 2.33 3.53A3.6 3.6 0 0 0 20 24.49l.01-.22V24c-.1-1.86-1.12-3.7-3.13-5.5l-.27-.24zM31 2v2H1V2z"></path></svg> },
            { value: "Chauffage central", type: false, icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "24px", width: "24px", fill: "currentcolor" }}><path d="M16 0a5 5 0 0 1 5 4.78v12.98l.26.21a7.98 7.98 0 0 1 2.72 5.43l.02.3v.3a8 8 0 1 1-13.25-6.04l.25-.2V5A5 5 0 0 1 15.56.02l.22-.01zm0 2a3 3 0 0 0-3 2.82V18.78l-.43.3a6 6 0 1 0 7.06.15l-.2-.16-.43-.3V11h-4V9h4V7h-4V5h4a3 3 0 0 0-3-3zm1 11v7.13A4 4 0 0 1 16 28a4 4 0 0 1-1-7.87V13zm-1 9a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path></svg> },
        ],
        "Sécurité à la maison": [
            { value: "Détecteur de fumée", type: false, icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "24px", width: "24px", fill: "currentcolor" }}><path d="M16 1a15 15 0 1 1 0 30 15 15 0 0 1 0-30zm0 2a13 13 0 1 0 0 26 13 13 0 0 0 0-26zm-4.9 14a5 5 0 0 0 3.9 3.9v2.03A7 7 0 0 1 9.07 17zm9.8 0h2.03A7 7 0 0 1 17 22.93V20.9a5 5 0 0 0 3.9-3.9zM16 13a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm1-5.93A7 7 0 0 1 22.93 15H20.9a5 5 0 0 0-3.9-3.9zm-2 0v2.03a5 5 0 0 0-3.9 3.9H9.07A7 7 0 0 1 15 9.07zM23 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></svg> },
            { value: "Extincteur", type: false, icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "24px", width: "24px", fill: "currentcolor" }}><path d="M7 28H5V15a11 11 0 0 1 8.06-10.6 3 3 0 0 1 4.63-1.88L20.35.24l1.3 1.52L19.04 4H23v2h-4.17A3 3 0 0 1 17 7.83v.24a7 7 0 0 1 5.98 6.45l.02.24V30a2 2 0 0 1-1.85 2H11a2 2 0 0 1-2-1.85V24H7zm9-18a5 5 0 0 0-4.98 4.57l-.02.22V30h10V14.82A5 5 0 0 0 16 10zm-2.65-3.6A9 9 0 0 0 7 14.73V22h2v-7.26a7 7 0 0 1 6-6.67v-.24a3.01 3.01 0 0 1-1.65-1.43zM16 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path></svg> },
            { value: "Kit de premiers secours", type: false, icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "24px", width: "24px", fill: "currentcolor" }}><path d="M26 3a5 5 0 0 1 5 4.78V24a5 5 0 0 1-4.78 5H6a5 5 0 0 1-5-4.78V8a5 5 0 0 1 4.78-5H6zm0 2H6a3 3 0 0 0-3 2.82V24a3 3 0 0 0 2.82 3H26a3 3 0 0 0 3-2.82V8a3 3 0 0 0-2.82-3zm-7 4v4h4v6h-4v4h-6v-4H9v-6h4V9zm-2 2h-2v4h-4v2h4v4h2v-4h4v-2h-4z"></path></svg> },
        ],
        "Internet et bureau": [
            { value: "Wifi", type: false, icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "24px", width: "24px", fill: "currentcolor" }}><path d="M16 20.33a3.67 3.67 0 1 1 0 7.34 3.67 3.67 0 0 1 0-7.34zm0 2a1.67 1.67 0 1 0 0 3.34 1.67 1.67 0 0 0 0-3.34zM16 15a9 9 0 0 1 8.04 4.96l-1.51 1.51a7 7 0 0 0-13.06 0l-1.51-1.51A9 9 0 0 1 16 15zm0-5.33c4.98 0 9.37 2.54 11.94 6.4l-1.45 1.44a12.33 12.33 0 0 0-20.98 0l-1.45-1.45A14.32 14.32 0 0 1 16 9.66zm0-5.34c6.45 0 12.18 3.1 15.76 7.9l-1.43 1.44a17.64 17.64 0 0 0-28.66 0L.24 12.24c3.58-4.8 9.3-7.9 15.76-7.9z"></path></svg> },
            { value: "Espace de travail dédié", type: false, icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "24px", width: "24px", fill: "currentcolor" }}><path d="M26 2a1 1 0 0 1 .92.61l.04.12 2 7a1 1 0 0 1-.85 1.26L28 11h-3v5h6v2h-2v13h-2v-2.54a3.98 3.98 0 0 1-1.73.53L25 29H7a3.98 3.98 0 0 1-2-.54V31H3V18H1v-2h5v-4a1 1 0 0 1 .88-1h.36L6.09 8.4l1.82-.8L9.43 11H12a1 1 0 0 1 1 .88V16h10v-5h-3a1 1 0 0 1-.99-1.16l.03-.11 2-7a1 1 0 0 1 .84-.72L22 2h4zm1 16H5v7a2 2 0 0 0 1.7 1.98l.15.01L7 27h18a2 2 0 0 0 2-1.85V18zm-16-5H8v3h3v-3zm14.24-9h-2.49l-1.43 5h5.35l-1.43-5z"></path></svg> },
        ],
        "Caractéristiques de l'emplacement": [
            { value: "Table à manger", type: false, icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "24px", width: "24px", fill: "currentcolor" }}><path d="M31 9v21h-2v-7h-6v7h-2v-7a2 2 0 0 1 1.85-2H29V9h2zM3 9v12h6a2 2 0 0 1 2 1.85V30H9v-7H3v7H1V9h2zm14-2v2.08a6 6 0 0 1 5 5.7V15h5v2H17v13h-2V17H5v-2h5a6 6 0 0 1 5-5.92V7h2zm-1 4a4 4 0 0 0-4 3.8v.2h8a4 4 0 0 0-4-4z"></path></svg> },
            { value: "Café", type: false, icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "24px", width: "24px", fill: "currentcolor" }}><path d="M25 2a1 1 0 0 1 .94.65l.03.1 1 4A1 1 0 0 1 26.11 8L26 8h-9v2h-2V8H5v20h3a5 5 0 0 1-.72-4.66l.1-.26 2.52-6.04-1.8-3.6a1 1 0 0 1 .78-1.43L9 12h14a1 1 0 0 1 .94 1.34l-.05.1L22.62 16H24a5 5 0 0 1 5 4.78V25h-2v-4a3 3 0 0 0-2.82-3H22.5l2.12 5.08A5 5 0 0 1 24 28h3v2H4a1 1 0 0 1-1-.88V3a1 1 0 0 1 .88-1H4zM12.65 22a6.64 6.64 0 0 0-2.91.63l-.5 1.22a3 3 0 0 0-.2.68l-.03.23L9 25a3 3 0 0 0 2.82 3h8.19l.23-.01a3 3 0 0 0 2.6-2.02c-1.7-.12-2.93-.67-4.84-1.9l-.37-.23c-2.14-1.4-3.18-1.84-4.98-1.84zm7.68-4h-8.66l-.92 2.19a9.06 9.06 0 0 1 1.9-.19c2.19 0 3.51.52 5.75 1.95l.38.25c1.74 1.13 2.74 1.62 4.03 1.76l-.04-.11zm1.05-4H10.62l1 2h8.76zm2.84-10H5v2h19.72z"></path></svg> },
            { value: "Équipements de cuisine de base", type: false, icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "24px", width: "24px", fill: "currentcolor" }}><path d="M26 1a5 5 0 0 1 5 5c0 6.39-1.6 13.19-4 14.7V31h-2V20.7c-2.36-1.48-3.94-8.07-4-14.36v-.56A5 5 0 0 1 26 1zm-9 0v18.12c2.32.55 4 3 4 5.88 0 3.27-2.18 6-5 6s-5-2.73-5-6c0-2.87 1.68-5.33 4-5.88V1zM2 1h1c4.47 0 6.93 6.37 7 18.5V21H4v10H2zm14 20c-1.6 0-3 1.75-3 4s1.4 4 3 4 3-1.75 3-4-1.4-4-3-4zM4 3.24V19h4l-.02-.96-.03-.95C7.67 9.16 6.24 4.62 4.22 3.36L4.1 3.3zm19 2.58v.49c.05 4.32 1.03 9.13 2 11.39V3.17a3 3 0 0 0-2 2.65zm4-2.65V17.7c.99-2.31 2-7.3 2-11.7a3 3 0 0 0-2-2.83z"></path></svg> },
            { value: "Réfrigérateur", type: false, icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "24px", width: "24px", fill: "currentcolor" }}><path d="M25 1a2 2 0 0 1 2 1.85V29a2 2 0 0 1-1.85 2H7a2 2 0 0 1-2-1.85V3a2 2 0 0 1 1.85-2H7zm0 10H7v18h18zm-15 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM25 3H7v6h18zM10 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></svg> },
            { value: "Four à micro-ondes", type: false, icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "24px", width: "24px", fill: "currentcolor" }}><path d="M29 3a2 2 0 0 1 2 1.85V27a2 2 0 0 1-1.85 2H3a2 2 0 0 1-2-1.85V5a2 2 0 0 1 1.85-2H3zm0 2H3v22h26zm-6 2v18H5V7zm-2 2H7v14h3a4.97 4.97 0 0 1-1-2.72V17h10v3a4.98 4.98 0 0 1-1 3h3zm-4 10h-6v1a3 3 0 0 0 2.65 2.98l.17.01.18.01a3 3 0 0 0 3-2.82V20zm9-8a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></svg> },
            { value: "Cuisine", type: false, icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "24px", width: "24px", fill: "currentcolor" }}><path d="M26 1a5 5 0 0 1 5 5c0 6.39-1.6 13.19-4 14.7V31h-2V20.7c-2.36-1.48-3.94-8.07-4-14.36v-.56A5 5 0 0 1 26 1zm-9 0v18.12c2.32.55 4 3 4 5.88 0 3.27-2.18 6-5 6s-5-2.73-5-6c0-2.87 1.68-5.33 4-5.88V1zM2 1h1c4.47 0 6.93 6.37 7 18.5V21H4v10H2zm14 20c-1.6 0-3 1.75-3 4s1.4 4 3 4 3-1.75 3-4-1.4-4-3-4zM4 3.24V19h4l-.02-.96-.03-.95C7.67 9.16 6.24 4.62 4.22 3.36L4.1 3.3zm19 2.58v.49c.05 4.32 1.03 9.13 2 11.39V3.17a3 3 0 0 0-2 2.65zm4-2.65V17.7c.99-2.31 2-7.3 2-11.7a3 3 0 0 0-2-2.83z"></path></svg> },
            { value: "Vaisselle et couverts", type: false, icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "24px", width: "24px", fill: "currentcolor" }}><path d="M29 1v2a13 13 0 0 0-.3 26h.3v2a15 15 0 0 1-.31-30zM3 1h2v6h2V1h2v6h2V1h2v9a5 5 0 0 1-4 4.9V31H7V14.9a5.01 5.01 0 0 1-3.98-4.44L3 10.22V10zm26 6v2a7 7 0 0 0-.24 14H29v2a9 9 0 0 1-.27-18zM11 9H5v1.15a3 3 0 0 0 6 .03V10z"></path></svg> },
            { value: "Congélateur", type: false, icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "24px", width: "24px", fill: "currentcolor" }}><path d="M25 1a2 2 0 0 1 2 1.85V29a2 2 0 0 1-1.85 2H7a2 2 0 0 1-2-1.85V3a2 2 0 0 1 1.85-2H7zm0 10H7v18h18zm-15 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM25 3H7v6h18zM10 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></svg> },
            { value: "Lave-vaisselle", type: false, icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "24px", width: "24px", fill: "currentcolor" }}><path d="M28 2a2 2 0 0 1 2 1.85V28a2 2 0 0 1-1.85 2H4a2 2 0 0 1-2-1.85V4a2 2 0 0 1 1.85-2H4zm0 10H4v16h24zm-2 2v4a3 3 0 0 1-2 2.83V24h2v2h-6v-2h2v-3.17a3 3 0 0 1-2-2.65V14zm-14 0a6 6 0 1 1 0 12 6 6 0 0 1 0-12zm0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm12 0h-2v2a1 1 0 0 0 .77.97l.11.02.12.01a1 1 0 0 0 1-.88V18zm4-12H4v6h24zm-6 2v2H10V6zM7 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></svg> },
            { value: "Cuisinière à induction Unique", type: false, icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "24px", width: "24px", fill: "currentcolor" }}><path d="M27 0a2 2 0 0 1 2 1.85V28a2 2 0 0 1-1.85 2H5a2 2 0 0 1-2-1.85V2a2 2 0 0 1 1.85-2H5zm0 2H5v26h22zm-3 22a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-5.33 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-5.34 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM8 24a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm13-10a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm-10 0a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm10 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-10 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM21 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM11 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm10 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM11 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path></svg> },
            { value: "Four Simple", type: false, icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "24px", width: "24px", fill: "currentcolor" }}><path d="M28 2a2 2 0 0 1 2 1.85V28a2 2 0 0 1-1.85 2H4a2 2 0 0 1-2-1.85V4a2 2 0 0 1 1.85-2H4zm0 10H4v16h24zm-2 2v12H6V14zm-2 2H8v8h16zm4-12H4v6h24zm-3 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-6 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-6 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM7 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></svg> },
            { value: "Bouilloire électrique", type: false, icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "24px", width: "24px", fill: "currentcolor" }}><path d="M26 28v2H6v-2h20zM16 1a8.64 8.64 0 0 1 7.83 5H28a1 1 0 0 1 1 1.08c-.3 3.87-1.58 6.45-3.9 7.56l.9 10.27a1 1 0 0 1-.88 1.08L25 26H7a1 1 0 0 1-1-.97v-.12L7.4 8.9c.02-.3.06-.6.12-.89H5a1 1 0 0 0-1 .88V19H2V9a3 3 0 0 1 2.82-3h3.35A8.64 8.64 0 0 1 16 1zm6.43 7H9.57a6.65 6.65 0 0 0-.14.7l-.04.36L8.1 24h15.82L22.6 9.06A6.67 6.67 0 0 0 22.43 8zm-5.45 3a9.82 9.82 0 0 1-2.7 5.78l-.23.24A6.96 6.96 0 0 0 12.07 21h-2.02a8.96 8.96 0 0 1 2.36-5.16l.23-.23A7.99 7.99 0 0 0 14.97 11h2.01zm4 0 .02.5a9.6 9.6 0 0 1-2.72 6.28l-.23.24A6.97 6.97 0 0 0 16.28 21h-2.06a8.96 8.96 0 0 1 2.19-4.16l.22-.23C18.09 15.16 19 13.2 19 11.5a4.94 4.94 0 0 0-.03-.5h2.01zm5.9-3h-2.4l.1.63.02.26.3 3.51c.99-.79 1.64-2.16 1.96-4.17l.03-.23zM16 3a6.63 6.63 0 0 0-5.55 3h11.1a6.63 6.63 0 0 0-5.04-2.98L16.23 3H16z"></path></svg> },
            { value: "Cafetière : cafetière filtre, cafetière à piston, machine à café Keurig", type: true, icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "24px", width: "24px", fill: "currentcolor" }}><path d="M25 2a1 1 0 0 1 .94.65l.03.1 1 4A1 1 0 0 1 26.11 8L26 8h-9v2h-2V8H5v20h3a5 5 0 0 1-.72-4.66l.1-.26 2.52-6.04-1.8-3.6a1 1 0 0 1 .78-1.43L9 12h14a1 1 0 0 1 .94 1.34l-.05.1L22.62 16H24a5 5 0 0 1 5 4.78V25h-2v-4a3 3 0 0 0-2.82-3H22.5l2.12 5.08A5 5 0 0 1 24 28h3v2H4a1 1 0 0 1-1-.88V3a1 1 0 0 1 .88-1H4zM12.65 22a6.64 6.64 0 0 0-2.91.63l-.5 1.22a3 3 0 0 0-.2.68l-.03.23L9 25a3 3 0 0 0 2.82 3h8.19l.23-.01a3 3 0 0 0 2.6-2.02c-1.7-.12-2.93-.67-4.84-1.9l-.37-.23c-2.14-1.4-3.18-1.84-4.98-1.84zm7.68-4h-8.66l-.92 2.19a9.06 9.06 0 0 1 1.9-.19c2.19 0 3.51.52 5.75 1.95l.38.25c1.74 1.13 2.74 1.62 4.03 1.76l-.04-.11zm1.05-4H10.62l1 2h8.76zm2.84-10H5v2h19.72z"></path></svg> },
            { value: "Verres à vin", type: false, icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "24px", width: "24px", fill: "currentcolor" }}><path d="m9.24 3-.2.4a20.37 20.37 0 0 0-1.7 5.02v.03A9 9 0 0 1 10.16 8c2.26 0 4.44.84 6.12 2.4l.24.24a6.98 6.98 0 0 0 4.95 2.05 6.99 6.99 0 0 0 3.53-.95v-.23a19.57 19.57 0 0 0-2.04-8.1l-.2-.41H9.24zm.92 7a7 7 0 0 0-3.11.73C7 11.15 7 11.57 7 12a9 9 0 0 0 9 9c4.06 0 7.7-3.14 8.72-6.92a9 9 0 0 1-3.25.6 8.98 8.98 0 0 1-6.13-2.4l-.23-.23A6.97 6.97 0 0 0 10.16 10zm13.8-9 .29.52A21.78 21.78 0 0 1 27 12c0 5.4-4.53 10.4-10 10.95V29h6v2H9v-2h6v-6.04A11 11 0 0 1 5 12c0-3.6.92-7.09 2.75-10.48L8.04 1h15.92z"></path></svg> },
            { value: "Grille-pain", type: false, icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "24px", width: "24px", fill: "currentcolor" }}><path d="M20.93 2a3.93 3.93 0 0 1 3.93 3.93c0 .87-.29 1.7-.83 2.4l-.03.04V10a5 5 0 0 1 5 4.78V27a2 2 0 0 1-1.85 2H26v1h-2v-1H8v1H6v-1H5a2 2 0 0 1-2-1.85V17H1v-2h2a5 5 0 0 1 4.78-5H8V8.38a3.93 3.93 0 0 1 0-4.9l.14-.17.15-.16a3.93 3.93 0 0 1 2.56-1.14l.22-.01h9.86zM24 12H8a3 3 0 0 0-3 2.82V27h22V15a3 3 0 0 0-2.82-3H24zM8 23a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM20.93 4h-9.86a1.93 1.93 0 0 0-1.36 3.3 1 1 0 0 1 .28.57L10 8v2h12V8a1 1 0 0 1 .12-.48l.07-.1.08-.1.12-.13a1.93 1.93 0 0 0-1.31-3.18L20.93 4z"></path></svg> },
            { value: "Plaques de cuisson", type: false, icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "24px", width: "24px", fill: "currentcolor" }}><path d="M4 25c.51 0 .94.5 1 1v2h22v-2c0-.51.5-1 1-1h3v2h-2v2c0 .51-.5 1-1 1H4c-.5 0-1-.5-1-1v-2H1v-2zm16-10a5.7 5.7 0 0 1 5.67 5.2l.18 2.6a3 3 0 0 1-2.79 3.2H9.14a3 3 0 0 1-3-3l.17-2.57A5.93 5.93 0 0 1 12 15zm-5 2h-2v3h-2v-2.83a3.83 3.83 0 0 0-2.67 3.19A21.5 21.5 0 0 0 8.14 23c0 .51.36.94.86 1h14c.51-.04.83-.45.86-.95a343.57 343.57 0 0 0-.17-2.48 3.83 3.83 0 0 0-2.69-3.4V20h-2v-3h-2v3h-2zm9-15h2c0 2.06-.48 3.34-1.77 5.42l-.75 1.19c-1.06 1.7-1.44 2.68-1.48 4.15V13h-2c0-2.16.52-3.47 1.95-5.73l.57-.88c1.06-1.7 1.44-2.68 1.47-4.15zm-5 0h2c0 2.06-.48 3.34-1.77 5.42l-.75 1.19c-1.06 1.7-1.44 2.68-1.48 4.15V13h-2c0-2.16.52-3.47 1.95-5.73l.57-.88c1.06-1.7 1.44-2.68 1.47-4.15zm-5 0h2c0 2.06-.48 3.34-1.77 5.42l-.75 1.19c-1.06 1.7-1.44 2.68-1.48 4.15V13h-2c0-2.16.51-3.47 1.95-5.73l.57-.88c1.06-1.7 1.44-2.68 1.47-4.15z"></path></svg> },
            { value: "Blender", type: false, icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "24px", width: "24px", fill: "currentcolor" }}><path d="M23 1a1 1 0 0 1 1 .88V6l-.02.2-2.9 14.53a5 5 0 0 1 2.31 3.4l.04.25.56 4.5a1 1 0 0 1-.87 1.11L23 30H9a1 1 0 0 1-1-1v-.12l.57-4.5a5 5 0 0 1 2.36-3.65L8.18 7H7a1 1 0 0 0-1 .88V15H4V8a3 3 0 0 1 2.82-3H8V2a1 1 0 0 1 .88-1H23zm-9.5 21a3 3 0 0 0-2.92 2.45l-.03.18-.42 3.37h11.74l-.42-3.37a3 3 0 0 0-2.62-2.6L18.5 22h-5zm2.5 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm5.78-17H10.22l2.6 13H15v-9h2v9h2.18l2.6-13zM22 3H10v2h12V3z"></path></svg> },
            { value: "Ustensiles de barbecue", type: false, icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "24px", width: "24px", fill: "currentcolor" }}><path d="M13 2h2c0 2.06-.48 3.34-1.77 5.42l-.75 1.19C11.6 10 11.2 10.9 11.06 12H9.04c.1-1.07.38-1.97.9-3H6a10 10 0 0 0 20 .28V9h-3.77a7.44 7.44 0 0 0-1.17 3h-2.02c.15-1.61.71-2.84 1.91-4.73l.57-.88c1.11-1.79 1.47-2.78 1.47-4.4h2c0 1.93-.4 3.17-1.5 5L28 7v2c0 .68-.06 1.35-.17 2H30v2h-2.68a12.04 12.04 0 0 1-5.9 6.7l4.5 9.89-1.83.82-2-4.41H17v4h-2v-4H9.92L7.9 30.41l-1.82-.82 4.49-9.88A12.04 12.04 0 0 1 4.68 13H2v-2h2.17A12.06 12.06 0 0 1 4 9.3V7h7.13l.39-.6c1.11-1.8 1.47-2.8 1.47-4.4zm-.57 18.46L10.83 24H15v-3.04a11.95 11.95 0 0 1-2.57-.5zm4.57.5V24h4.17l-1.6-3.54c-.69.21-1.4.37-2.13.45zM18 2h2c0 2.06-.48 3.35-1.77 5.42l-.75 1.19C16.6 10 16.2 10.9 16.06 12h-2.02c.15-1.62.71-2.84 1.91-4.74l.57-.88C17.63 4.6 17.99 3.61 17.99 2z"></path></svg> },

        ],
        "Extérieur": [

            { value: "Entrée privée", type: false, icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "24px", width: "24px", fill: "currentcolor" }}><path d="M25 1a2 2 0 0 1 2 1.85V29h2v2H3v-2h2V3a2 2 0 0 1 1.85-2H7zm0 2H7v26h18zm-3 12a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></svg> },
            { value: "Laverie automatique à proximité", type: false, icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "24px", width: "24px", fill: "currentcolor" }}><path d="M24 1a2 2 0 0 1 2 1.85V5h2a2 2 0 0 1 2 1.85V28a3 3 0 0 1-3 3H5a3 3 0 0 1-3-2.82V3a2 2 0 0 1 1.85-2H4zm4 6h-2v21a1 1 0 0 0 2 .12V28zM8 3H4v25a1 1 0 0 0 .88 1H24V3h-4a6 6 0 0 1-12 .23zm6 22a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-4.67a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-4.66a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM14 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4-8h-8a4 4 0 0 0 8 .2z"></path></svg> },
            { value: "Patio ou balcon : privé(e)", type: false, icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "24px", width: "24px", fill: "currentcolor" }}><path d="M23 1a2 2 0 0 1 2 1.85V19h4v2h-2v8h2v2H3v-2h2v-8H3v-2h4V3a2 2 0 0 1 1.85-2H9zM9 21H7v8h2zm4 0h-2v8h2zm4 0h-2v8h2zm4 0h-2v8h2zm4 0h-2v8h2zm-10-8H9v6h6zm8 0h-6v6h6zM15 3H9v8h6zm8 0h-6v8h6z"></path></svg> },
            { value: "Mobilier d'extérieur", type: false, icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "24px", width: "24px", fill: "currentcolor" }}><path d="M29 15v16h-2v-6h-6v6h-2v-6.15a2 2 0 0 1 1.84-1.84L21 23h6v-8zM5 15v8h6a2 2 0 0 1 2 1.85V31h-2v-6H5v6H3V15zM16 1a15 15 0 0 1 13.56 8.57 1 1 0 0 1-.8 1.42l-.1.01H17v8h8v2h-8v10h-2V21H7v-2h8v-8H3.35a1 1 0 0 1-.95-1.32l.04-.1A15 15 0 0 1 16 1zm0 2A13 13 0 0 0 5.4 8.47l-.2.28-.16.25h21.92l-.17-.25a13 13 0 0 0-10.1-5.73L16.34 3z"></path></svg> },
            { value: "Barbecue", type: false, icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "24px", width: "24px", fill: "currentcolor" }}><path d="M13 2h2c0 2.06-.48 3.34-1.77 5.42l-.75 1.19C11.6 10 11.2 10.9 11.06 12H9.04c.1-1.07.38-1.97.9-3H6a10 10 0 0 0 20 .28V9h-3.77a7.44 7.44 0 0 0-1.17 3h-2.02c.15-1.61.71-2.84 1.91-4.73l.57-.88c1.11-1.79 1.47-2.78 1.47-4.4h2c0 1.93-.4 3.17-1.5 5L28 7v2c0 .68-.06 1.35-.17 2H30v2h-2.68a12.04 12.04 0 0 1-5.9 6.7l4.5 9.89-1.83.82-2-4.41H17v4h-2v-4H9.92L7.9 30.41l-1.82-.82 4.49-9.88A12.04 12.04 0 0 1 4.68 13H2v-2h2.17A12.06 12.06 0 0 1 4 9.3V7h7.13l.39-.6c1.11-1.8 1.47-2.8 1.47-4.4zm-.57 18.46L10.83 24H15v-3.04a11.95 11.95 0 0 1-2.57-.5zm4.57.5V24h4.17l-1.6-3.54c-.69.21-1.4.37-2.13.45zM18 2h2c0 2.06-.48 3.35-1.77 5.42l-.75 1.19C16.6 10 16.2 10.9 16.06 12h-2.02c.15-1.62.71-2.84 1.91-4.74l.57-.88C17.63 4.6 17.99 3.61 17.99 2z"></path></svg> },
        ],
        "Parking et installations": [
            { value: "Parking gratuit sur place", type: false, icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "24px", width: "24px", fill: "currentcolor" }}><path d="M11 6v2H9.62l2 4h10.24L20.3 8H17V6h4a1 1 0 0 1 .88.53l.05.11 3.62 9.38a5 5 0 1 1-1.92.58l-.53-1.36-7.44 6.51a1 1 0 0 1-.54.24L15 22h-4.1A5 5 0 0 1 1 21a5 5 0 0 1 6.3-4.83l1.8-3.62a1 1 0 0 1 .36-.4L7.38 8H5V6zM6 18a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm20 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm-15.5-3.76-1.41 2.83A5 5 0 0 1 10.9 20h2.48zM21.48 14h-8.86l2.7 5.4z"></path></svg> },
            { value: "Parking gratuit sur place", type: false, icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "24px", width: "24px", fill: "currentcolor" }}><path d="M26 19a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 18a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm20.7-5 .41 1.12A4.97 4.97 0 0 1 30 18v9a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2H8v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9c0-1.57.75-2.96 1.89-3.88L4.3 13H2v-2h3v.15L6.82 6.3A2 2 0 0 1 8.69 5h14.62c.83 0 1.58.52 1.87 1.3L27 11.15V11h3v2h-2.3zM6 25H4v2h2v-2zm22 0h-2v2h2v-2zm0-2v-5a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v5h24zm-3-10h.56L23.3 7H8.69l-2.25 6H25zm-15 7h12v-2H10v2z"></path></svg> },
        ]

        }
    ])

    const handleChangementFichier1 = (e) => {
        setFichierSelectionne1(e.target.files[0].name);
    };
    const handleChangementFichier2 = (e) => {
        setFichierSelectionne2(e.target.files[0].name);
    };
    const handleChangementFichier3 = (e) => {
        setFichierSelectionne3(e.target.files[0].name);
    };
    const handleChangementFichier4 = (e) => {
        setFichierSelectionne4(e.target.files[0].name);
    };
    const handleChangementFichier5 = (e) => {
        setFichierSelectionne5(e.target.files[0].name);
    };
    const handleClick = () => {
        if (newTitle && newAvis && newLieu && newLoyer && newVoyageurs && newChambres && newLits && newSallesDeBain && newToilette && newStartDate && newEndDate){
            const newObject = {
                id: uuidv4(),
                title: newTitle,
                images: [fichierSelectionne1, fichierSelectionne2, fichierSelectionne3, fichierSelectionne4, fichierSelectionne5],
                avis: newAvis,
                lieu: newLieu,
                loyer: newLoyer,
                forme: {
                    voyageurs: newVoyageurs,
                    chambres: newChambres,
                    lits: newLits,
                    'salles de bain': newSallesDeBain,
                    toilette: newToilette
                },
                date: [newStartDate, newEndDate],
                prix: newPrix,
                description: panoramicViews[0]
            };


            if (category === "Campagne") {
                console.log(newObject.images[1])

                dispatch({ type: "ADD_PRODUCT_COMPAGNE", payload: newObject });
            } else if (category === "Villes_emblematiques") {
                dispatch({ type: "ADD_PRODUCT_Villes_emblematiques", payload: newObject });
            } else if (category === "Ville") {
                dispatch({ type: "ADD_PRODUCT_Ville", payload: newObject });
            } else {
                dispatch({ type: "ADD_PRODUCT_Desert", payload: newObject });
            }
            nav(`/${category}`)
        }else{
            Swal.fire({
                icon: "warning",
                title: "Tous Les informations Sont Obligatoires",
            });
        }
        
    };




    
    const handleCheckboxChange = (category, index) => {
        setPanoramicViews((prevViews) => {
            const updatedViews = [...prevViews];
            const categoryIndex0 = updatedViews.findIndex((cat) => Object.keys(cat)[1] === category);
            const categoryIndex1 = updatedViews.findIndex((cat) => Object.keys(cat)[0] === category);
            const categoryIndex2 = updatedViews.findIndex((cat) => Object.keys(cat)[2] === category);
            const categoryIndex3 = updatedViews.findIndex((cat) => Object.keys(cat)[3] === category);
            const categoryIndex4 = updatedViews.findIndex((cat) => Object.keys(cat)[4] === category);
            const categoryIndex5 = updatedViews.findIndex((cat) => Object.keys(cat)[5] === category);
            const categoryIndex7 = updatedViews.findIndex((cat) => Object.keys(cat)[7] === category);
            const categoryIndex8 = updatedViews.findIndex((cat) => Object.keys(cat)[8] === category);
            const categoryIndex9 = updatedViews.findIndex((cat) => Object.keys(cat)[6] === category);
            const categoryIndex10 = updatedViews.findIndex((cat) => Object.keys(cat)[9] === category);


            if (categoryIndex0 !== -1) {
                const item = updatedViews[categoryIndex0][category][index];
                if (item) {
                    item.type = !item.type;
                    return updatedViews;
                }
            }
            if (categoryIndex7 !== -1) {
                const item = updatedViews[categoryIndex7][category][index];
                if (item) {
                    item.type = !item.type;
                    return updatedViews;
                }
            }
            if (categoryIndex9 !== -1) {
                const item = updatedViews[categoryIndex9][category][index];
                if (item) {
                    item.type = !item.type;
                    return updatedViews;
                }
            }
            if (categoryIndex8 !== -1) {
                const item = updatedViews[categoryIndex8][category][index];
                if (item) {
                    item.type = !item.type;
                    return updatedViews;
                }
            }
            if (categoryIndex1 !== -1) {
                const item = updatedViews[categoryIndex1][category][index];
                if (item) {
                    item.type = !item.type;
                    return updatedViews;
                }
            }
            if (categoryIndex2 !== -1) {
                const item = updatedViews[categoryIndex2][category][index];
                if (item) {
                    item.type = !item.type;
                    return updatedViews;
                }
            }
            if (categoryIndex3 !== -1) {
                const item = updatedViews[categoryIndex3][category][index];
                if (item) {
                    item.type = !item.type;
                    return updatedViews;
                }
            }
            if (categoryIndex4 !== -1) {
                const item = updatedViews[categoryIndex4][category][index];
                if (item) {
                    item.type = !item.type;
                    return updatedViews;
                }
            }
            if (categoryIndex5 !== -1) {
                const item = updatedViews[categoryIndex5][category][index];
                if (item) {
                    item.type = !item.type;
                    return updatedViews;
                }
            }
            if (categoryIndex10 !== -1) {
                const item = updatedViews[categoryIndex10][category][index];
                if (item) {
                    item.type = !item.type;
                    return updatedViews;
                }
            }
            
            return prevViews;
        });
    };



    return (
        <div >
            <div className='parentone'>
                    <div className='PartieForm'>
                        <label className='labelProduit'>
                            Category:
                        </label>
                        <select value={category} onChange={(e) => setCategory(e.target.value)} className='inputProduct'>
                                <option value="Campagne">Campagne</option>
                                <option value="Villes_emblematiques">Villes Emblematiques</option>
                                <option value="Ville">Ville</option>
                                <option value="Desert">Desert</option>
                            </select>
                        <br />
                    <label htmlFor="Title" className='labelProduit'>Title :</label>
                        <input
                        className='inputProduct'
                            type="text"
                            placeholder="Title..."
                            value={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)}
                        />
                        <div>
                                <label className="file-label">
                                <ion-icon name="add-circle"></ion-icon> close photo
                                <input type="file" onChange={handleChangementFichier1}  />
                                </label>
                                
                                
                                <label className="file-label">                            
                                <ion-icon name="add-circle"></ion-icon> close photo
                                <input type="file" onChange={handleChangementFichier2} className='inputProduct' />
                                </label>
                                
                                <label className="file-label">
                                    <ion-icon name="add-circle"></ion-icon> close photo
                                    <input type="file" onChange={handleChangementFichier3} className='inputProduct' />
                                </label>
                                    
                                <label className="file-label"> 
                                    <ion-icon name="add-circle"></ion-icon> close photo
                                    <input type="file" onChange={handleChangementFichier4} className='inputProduct' />
                                </label>
                                    
                                <label className="file-label"> 
                                    <ion-icon name="add-circle"></ion-icon> close photo
                                    <input type="file" onChange={handleChangementFichier5} className='inputProduct' />
                                </label>
                        </div>
                        <label htmlFor="Avis" className='labelProduit'>Avis :</label>
                        <input
                            className='inputProduct'
                            type="text"
                            placeholder="Avis..."
                            value={newAvis}
                            onChange={(e) => setNewAvis(e.target.value)}
                        /> <br />
                    
                        <label htmlFor="lieu" className='labelProduit'>lieu :</label>
                        <input
                            className='inputProduct'
                            type="text"
                            placeholder="lieu..."
                            value={newLieu}
                            onChange={(e) => setNewLieu(e.target.value)}
                        /> <br />
                    </div>
                <div className='PartieForm'>
                    
                        <label htmlFor="Loyer" className='labelProduit'>Loyer :</label>
                        <input
                            className='inputProduct'
                            type="text"
                            placeholder="Loyer..."
                            value={newLoyer}
                            onChange={(e) => setNewLoyer(e.target.value)}
                        /> <br />
                        <h3>forme</h3>
                        
                        <label htmlFor="Voyageurs" className='labelProduit' >Voyageurs :</label>
                        <input
                            className='inputProduct'
                            type="number"
                            value={newVoyageurs}
                            onChange={(e) => setNewVoyageurs(parseInt(e.target.value, 10))}
                        /> <br />

                        <label className='labelProduit' htmlFor="chambres">chambres :</label>
                        <input
                            className='inputProduct'
                            type="number"
                            value={newChambres}
                            onChange={(e) => setNewChambres(e.target.value)}
                        /> <br />
                    
                        <label htmlFor="lits" className='labelProduit'>lits :</label>
                        <input
                            className='inputProduct'
                            type="number"
                            value={newLits}
                            onChange={(e) => setNewLits(e.target.value)}
                        /> <br />
                        
                        <label htmlFor="newSallesDeBain" className='labelProduit'>Salles De Bain :</label>
                        <input
                            className='inputProduct'
                            type="number"
                            value={newSallesDeBain}
                            onChange={(e) => setNewSallesDeBain(e.target.value)}
                            /> <br />
                        
                        <label htmlFor="newSallesDeBain" className='labelProduit'>Toilete :</label>
                        <input
                            className='inputProduct'
                            type="number"
                            value={newToilette}
                            onChange={(e) => setNewToilette(e.target.value)}
                            /> <br />
                        
                            <label className='labelProduit'>Start Date:</label>
                            <input
                                className='inputProduct'
                                type="date"
                                value={newStartDate.toISOString().split('T')[0]}
                                onChange={(e) => setNewStartDate(new Date(e.target.value))}
                                /> <br />
                            <label className='labelProduit'>End Date:</label>
                            <input type="date" className='inputProduct' value={newEndDate.toISOString().split('T')[0]} onChange={(e) => setNewEndDate(new Date(e.target.value))} />
                            <br />
                            <label htmlFor="newSallesDeBain" className='labelProduit'>Prix :</label>
                            <input
                                className='inputProduct'
                                type="number"
                                value={newPrix}
                                onChange={(e) => setNewPrix(e.target.value)}
                            /> <br />
                    </div>
                </div>


            <div className='corusol1'>
                <div>
                    <div className='child'>

                <h1>Vues panoramiques</h1>

                {panoramicViews[0]['Vues panoramiques'].map((item, i) => (
                    <div key={i} >
                        <label>
                            <input
                                type="checkbox"
                                value={item.value}
                                checked={item.type}
                                onChange={() => handleCheckboxChange('Vues panoramiques', i)}
                            />

                            {item.value}
                        </label>
                    </div>
                ))}

            </div>
                    <div className='child'>
                <h1>Chambre et linge</h1>

                {panoramicViews[0]['Chambre et linge'].map((item, i) => (
                    <div key={i}>
                        <label>
                            <input
                                type="checkbox"
                                value={item.value}
                                checked={item.type}
                                onChange={() => handleCheckboxChange('Chambre et linge',i)}

                            />
                            {item.value}
                        </label>
                    </div>
                ))}

            </div>
                    <div className='child'>
                <h1>Divertissement</h1>

                {panoramicViews[0]['Divertissement'].map((item, i) => (
                    <div key={i}>
                        <label>
                            <input
                                type="checkbox"
                                value={item.value}
                                checked={item.type}
                                onChange={() => handleCheckboxChange('Divertissement',i)}

                            />
                            {item.value}
                        </label>
                    </div>
                ))}

            </div>
                    <div className='child'>
                <h1>Famille</h1>

                {panoramicViews[0]['Famille'].map((item, i) => (
                    <div key={i}>
                        <label>
                            <input
                                type="checkbox"
                                value={item.value}
                                checked={item.type}
                                onChange={() => handleCheckboxChange('Famille',i)}

                            />
                            {item.value}
                        </label>
                    </div>
                ))}

            </div>
                <div className='child'>
                <h1>Sécurité à la maison</h1>

                {panoramicViews[0]['Sécurité à la maison'].map((item, i) => (
                    <div key={i}>
                        <label>
                            <input
                                type="checkbox"
                                value={item.value}
                                checked={item.type}
                                onChange={() => handleCheckboxChange('Sécurité à la maison',i)}

                            />
                            {item.value}
                        </label>
                    </div>
                ))}

            </div>
                </div>
                <div>
                    <div className='child'>
                <h1>Internet et bureau</h1>

                {panoramicViews[0]['Internet et bureau'].map((item, i) => (
                    <div key={i}>
                        <label>
                            <input
                                type="checkbox"
                                value={item.value}
                                checked={item.type}
                                onChange={() => handleCheckboxChange('Internet et bureau',i)}

                            />
                            {item.value}
                        </label>
                    </div>
                ))}

            </div>
                    <div className='child'>
                <h1>Caractéristiques de l'emplacement</h1>

                {panoramicViews[0]["Caractéristiques de l'emplacement"].map((item, i) => (
                    <div key={i}>
                        <label>
                            <input
                                type="checkbox"
                                value={item.value}
                                checked={item.type}
                                onChange={() => handleCheckboxChange("Caractéristiques de l'emplacement",i)}

                            />
                            {item.value}
                        </label>
                    </div>
                ))}

            </div>
                    <div className='child'>
                <h1>Extérieur</h1>

                {panoramicViews[0]["Extérieur"].map((item, i) => (
                    <div key={i}>
                        <label>
                            <input
                                type="checkbox"
                                value={item.value}
                                checked={item.type}
                                onChange={() => handleCheckboxChange("Extérieur",i)}

                            />
                            {item.value}
                        </label>
                    </div>
                ))}

            </div>
                    <div className='child'>
                <h1>Parking et installations</h1>

                {panoramicViews[0]["Parking et installations"].map((item, i) => (
                    <div key={i}>
                        <label style={{margin:'5px',padding:'10px',fontWeight:"bold"}}>
                            <input
                                style={{marginRight:"10px"}}
                                type="checkbox"
                                value={item.value}
                                checked={item.type}
                                onChange={() => handleCheckboxChange("Parking et installations",i)}
                            />
                            {item.value}
                        </label>
                    </div>
                ))}

            </div>
        </div>

    </div>
            <div className="d-grid gap-2 " style={{margin:'10px auto', width:'400px'}}>                <Button type='submit' variant="primary" size="lg" onClick={handleClick}>
                    Ajouter
                </Button>
            </div>

    

        </div>
    );
}
