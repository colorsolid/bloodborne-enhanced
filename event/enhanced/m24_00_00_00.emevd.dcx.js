// ==EMEVD==
// @docs    bb-common.emedf.json
// @compress    DCX_DFLT_10000_44_9
// @game    Bloodborne
// @string    "\u0000聖堂街A_邪神投げ開始\u0000聖堂街A_扉を閉じる領域侵入\u0000聖堂街A_ショートカット領域侵入\u0000聖堂街A_トラップ発動\u0000ボス_撃破\u0000PC情報_ボス撃破_聖女ビースト\u0000ボス_戦闘開始\u0000ボス戦_撃破時間\u0000PC情報_聖堂街A到達時\u0000N:\\SPRJ\\data\\Param\\event\\common.emevd\u0000\u0000\u0000\u0000\u0000"
// @linked    [220]
// @version    3.4.2
// ==/EMEVD==

const area_id = 24;
const block_id = 0;

const cathedral_ward_lamp_offset = 10;
const cathedral_ward_lamp_id = 2401950;
const cathedral_ward_lamp_kindle = 12110000 + (area_id * 100) + (block_id * 10);

const amelia_offset = 2;
const amelia_lamp_offset = 11;
const amelia_defeat = 12401800;
const amelia_return = 2401899;
const amelia_lamp_id = 2401951;
const amelia_lamp_kindle = 12110000 + (area_id * 100) + (block_id * 10) + 2;
const amelia_region = 2402802;
const amelia_id = 2400800;

// 3 main gates 2401220, 2401208, 2401207
// lamp door 2401202

// constructor
$Event(0, Default, function() {
    InitializeEvent(cathedral_ward_lamp_offset, 8500, 8500+cathedral_ward_lamp_offset, cathedral_ward_lamp_id, 72110404);
    InitializeEvent(amelia_lamp_offset, 8500, 8500+amelia_lamp_offset, amelia_lamp_id, 72110505);
    
    InitializeEvent(cathedral_ward_lamp_offset, 8100, 8100+cathedral_ward_lamp_offset, cathedral_ward_lamp_kindle);
    InitializeEvent(amelia_lamp_offset, 8100, 8100+amelia_lamp_offset, amelia_lamp_kindle);
    
    InitializeEvent(3, 7900, 10000000+amelia_return, amelia_return, area_id, block_id, 8500+cathedral_ward_lamp_offset);
    
    SetEventFlag(8900+amelia_offset, OFF);
    InitializeEvent(cathedral_ward_lamp_offset, 8300, cathedral_ward_lamp_id+2000, -1, cathedral_ward_lamp_kindle, cathedral_ward_lamp_id+6000, cathedral_ward_lamp_id+3000);
    
    if(EventFlag(amelia_defeat+13) && !EventFlag(amelia_defeat-1)) {
        if (EventFlag(amelia_defeat-2)) {
            SetEventFlag(amelia_defeat-2, OFF);
            InitializeEvent(amelia_offset, 7500, amelia_region, amelia_lamp_id+4000);
        }
        SetEventFlag(amelia_defeat+13, OFF);
        SetEventFlag(amelia_defeat, ON);
        InitializeEvent(amelia_lamp_offset, 8300, amelia_lamp_id+2000, 999, amelia_lamp_kindle, amelia_lamp_id+6000, amelia_lamp_id+3000);
        DummyPlayCutsceneAndWarpPlayer(amelia_lamp_id+4000, area_id, block_id);
    }
    else if (EventFlag(amelia_defeat+12) || EventFlag(amelia_defeat-1)) {
        if (EventFlag(amelia_defeat-2)) {
            SetEventFlag(amelia_defeat-2, OFF);
            InitializeEvent(amelia_offset, 7500, amelia_region, amelia_lamp_id+5000);
        }
        SetEventFlag(amelia_defeat, OFF);
        SetEventFlag(amelia_defeat+2, OFF);
        SetEventFlag(amelia_defeat+12, OFF);
        SetEventFlag(amelia_defeat+13, ON);
        SetEventFlag(amelia_defeat-1, OFF);
        SetEventFlag(8900+amelia_offset, ON);
        InitializeEvent(amelia_lamp_offset, 8300, amelia_lamp_id+2000, -1, amelia_lamp_kindle, amelia_lamp_id+6000, amelia_lamp_id+3000);
    }
    else {
        InitializeEvent(amelia_lamp_offset, 8300, amelia_lamp_id+2000, -1, amelia_lamp_kindle, amelia_lamp_id+6000, amelia_lamp_id+3000);
    }
    
    InitializeEvent(amelia_offset, 12102070, amelia_defeat+13, 0, 7417, amelia_id);
    
    InitializeEvent(amelia_offset, 8900, amelia_defeat-1, amelia_lamp_id+1000, amelia_defeat-2, 0, 0, amelia_lamp_id+5000, area_id, block_id);
    InitializeEvent(amelia_offset, 7700, amelia_defeat+11, amelia_defeat+12, amelia_lamp_id+1000, 824000);
    
    InitializeEvent(400, 12107000, 72110400, 2401950, 2412950);
    InitializeEvent(401, 12107000, 72110401, 2401950, 2412951);
    InitializeEvent(402, 12107000, 72110402, 2401950, 2412952);
    InitializeEvent(403, 12107000, 72110403, 2401950, 2412953);
    InitializeEvent(404, 12107000, 72110404, 2401950, 2402950);
    InitializeEvent(405, 12107000, 72110405, 2401950, 2402951);
    InitializeEvent(406, 12107000, 72110406, 2401950, 2422950);
    InitializeEvent(407, 12107000, 72110407, 2401950, 2422952);
    InitializeEvent(408, 12107000, 72110408, 2401950, 2422951);
    InitializeEvent(409, 12107000, 72110409, 2401950, 2302950);
    InitializeEvent(410, 12107000, 72110410, 2401950, 2302951);
    InitializeEvent(411, 12107000, 72110411, 2401950, 2302952);
    InitializeEvent(412, 12107000, 72110412, 2401950, 2202950);
    InitializeEvent(413, 12107000, 72110413, 2401950, 2202951);
    InitializeEvent(414, 12107000, 72110414, 2401950, 2702950);
    InitializeEvent(415, 12107000, 72110415, 2401950, 2702951);
    InitializeEvent(416, 12107000, 72110416, 2401950, 3202950);
    InitializeEvent(417, 12107000, 72110417, 2401950, 3202952);
    InitializeEvent(418, 12107000, 72110418, 2401950, 2802950);
    InitializeEvent(419, 12107000, 72110419, 2401950, 2802953);
    InitializeEvent(420, 12107000, 72110420, 2401950, 2802951);
    InitializeEvent(421, 12107000, 72110421, 2401950, 2802952);
    InitializeEvent(422, 12107000, 72110422, 2401950, 2502950);
    InitializeEvent(423, 12107000, 72110423, 2401950, 2502952);
    InitializeEvent(424, 12107000, 72110424, 2401950, 2502951);
    InitializeEvent(425, 12107000, 72110425, 2401950, 2112950);
    InitializeEvent(426, 12107000, 72110426, 2401950, 3202951);
    InitializeEvent(427, 12107000, 72110427, 2401950, 3202953);
    InitializeEvent(428, 12107000, 72110428, 2401950, 3302950);
    InitializeEvent(429, 12107000, 72110429, 2401950, 3302951);
    InitializeEvent(430, 12107000, 72110430, 2401950, 2602950);
    InitializeEvent(431, 12107000, 72110431, 2401950, 2602953);
    InitializeEvent(432, 12107000, 72110432, 2401950, 2602952);
    InitializeEvent(433, 12107000, 72110433, 2401950, 2602951);
    InitializeEvent(434, 12107000, 72110434, 2401950, 3402950);
    InitializeEvent(435, 12107000, 72110435, 2401950, 3402951);
    InitializeEvent(436, 12107000, 72110436, 2401950, 3402953);
    InitializeEvent(437, 12107000, 72110437, 2401950, 3402952);
    InitializeEvent(438, 12107000, 72110438, 2401950, 3502950);
    InitializeEvent(439, 12107000, 72110439, 2401950, 3502951);
    InitializeEvent(440, 12107000, 72110440, 2401950, 3502952);
    InitializeEvent(441, 12107000, 72110441, 2401950, 3602950);
    InitializeEvent(442, 12107000, 72110442, 2401950, 3602951);
    InitializeEvent(443, 12107000, 72110443, 2401950, 3602952);
    InitializeEvent(444, 12107000, 72110444, 2401950, 2902950);
    InitializeEvent(445, 12107000, 72110445, 2401950, 2902951);
    InitializeEvent(446, 12107000, 72110446, 2401950, 2902952);
    InitializeEvent(447, 12107000, 72110447, 2401950, 2902953);
    InitializeEvent(448, 12107000, 72110448, 2401950, 2902954);
    InitializeEvent(449, 12107000, 72110449, 2401950, 2902955);
    InitializeEvent(450, 12107000, 72110450, 2401950, 2902956);
    InitializeEvent(451, 12107000, 72110451, 2401950, 2902957);
    InitializeEvent(452, 12107000, 72110452, 2401950, 2902958);
    InitializeEvent(453, 12107000, 72110453, 2401950, 2902959);

    InitializeEvent(500, 12107000, 72110500, 2401951, 2412950);
    InitializeEvent(501, 12107000, 72110501, 2401951, 2412951);
    InitializeEvent(502, 12107000, 72110502, 2401951, 2412952);
    InitializeEvent(503, 12107000, 72110503, 2401951, 2412953);
    InitializeEvent(504, 12107000, 72110504, 2401951, 2402950);
    InitializeEvent(505, 12107000, 72110505, 2401951, 2402951);
    InitializeEvent(506, 12107000, 72110506, 2401951, 2422950);
    InitializeEvent(507, 12107000, 72110507, 2401951, 2422952);
    InitializeEvent(508, 12107000, 72110508, 2401951, 2422951);
    InitializeEvent(509, 12107000, 72110509, 2401951, 2302950);
    InitializeEvent(510, 12107000, 72110510, 2401951, 2302951);
    InitializeEvent(511, 12107000, 72110511, 2401951, 2302952);
    InitializeEvent(512, 12107000, 72110512, 2401951, 2202950);
    InitializeEvent(513, 12107000, 72110513, 2401951, 2202951);
    InitializeEvent(514, 12107000, 72110514, 2401951, 2702950);
    InitializeEvent(515, 12107000, 72110515, 2401951, 2702951);
    InitializeEvent(516, 12107000, 72110516, 2401951, 3202950);
    InitializeEvent(517, 12107000, 72110517, 2401951, 3202952);
    InitializeEvent(518, 12107000, 72110518, 2401951, 2802950);
    InitializeEvent(519, 12107000, 72110519, 2401951, 2802953);
    InitializeEvent(520, 12107000, 72110520, 2401951, 2802951);
    InitializeEvent(521, 12107000, 72110521, 2401951, 2802952);
    InitializeEvent(522, 12107000, 72110522, 2401951, 2502950);
    InitializeEvent(523, 12107000, 72110523, 2401951, 2502952);
    InitializeEvent(524, 12107000, 72110524, 2401951, 2502951);
    InitializeEvent(525, 12107000, 72110525, 2401951, 2112950);
    InitializeEvent(526, 12107000, 72110526, 2401951, 3202951);
    InitializeEvent(527, 12107000, 72110527, 2401951, 3202953);
    InitializeEvent(528, 12107000, 72110528, 2401951, 3302950);
    InitializeEvent(529, 12107000, 72110529, 2401951, 3302951);
    InitializeEvent(530, 12107000, 72110530, 2401951, 2602950);
    InitializeEvent(531, 12107000, 72110531, 2401951, 2602953);
    InitializeEvent(532, 12107000, 72110532, 2401951, 2602952);
    InitializeEvent(533, 12107000, 72110533, 2401951, 2602951);
    InitializeEvent(534, 12107000, 72110534, 2401951, 3402950);
    InitializeEvent(535, 12107000, 72110535, 2401951, 3402951);
    InitializeEvent(536, 12107000, 72110536, 2401951, 3402953);
    InitializeEvent(537, 12107000, 72110537, 2401951, 3402952);
    InitializeEvent(538, 12107000, 72110538, 2401951, 3502950);
    InitializeEvent(539, 12107000, 72110539, 2401951, 3502951);
    InitializeEvent(540, 12107000, 72110540, 2401951, 3502952);
    InitializeEvent(541, 12107000, 72110541, 2401951, 3602950);
    InitializeEvent(542, 12107000, 72110542, 2401951, 3602951);
    InitializeEvent(543, 12107000, 72110543, 2401951, 3602952);
    InitializeEvent(544, 12107000, 72110544, 2401951, 2902950);
    InitializeEvent(545, 12107000, 72110545, 2401951, 2902951);
    InitializeEvent(546, 12107000, 72110546, 2401951, 2902952);
    InitializeEvent(547, 12107000, 72110547, 2401951, 2902953);
    InitializeEvent(548, 12107000, 72110548, 2401951, 2902954);
    InitializeEvent(549, 12107000, 72110549, 2401951, 2902955);
    InitializeEvent(550, 12107000, 72110550, 2401951, 2902956);
    InitializeEvent(551, 12107000, 72110551, 2401951, 2902957);
    InitializeEvent(552, 12107000, 72110552, 2401951, 2902958);
    InitializeEvent(553, 12107000, 72110553, 2401951, 2902959);

    SetEventFlag(72110004, OFF);
    SetEventFlag(72110104, OFF);
    SetEventFlag(72110204, OFF);
    SetEventFlag(72110304, OFF);
    SetEventFlag(72110404, OFF);
    SetEventFlag(72110504, OFF);
    SetEventFlag(72110604, OFF);
    SetEventFlag(72110704, OFF);
    SetEventFlag(72110804, OFF);
    SetEventFlag(72110904, OFF);
    SetEventFlag(72111004, OFF);
    SetEventFlag(72111104, OFF);
    SetEventFlag(72111204, OFF);
    SetEventFlag(72111304, OFF);
    SetEventFlag(72111404, OFF);
    SetEventFlag(72111504, OFF);
    SetEventFlag(72111604, OFF);
    SetEventFlag(72111704, OFF);
    SetEventFlag(72111804, OFF);
    SetEventFlag(72111904, OFF);
    SetEventFlag(72112004, OFF);
    SetEventFlag(72112104, OFF);
    SetEventFlag(72112204, OFF);
    SetEventFlag(72112304, OFF);
    SetEventFlag(72112404, OFF);
    SetEventFlag(72112504, OFF);
    SetEventFlag(72112604, OFF);
    SetEventFlag(72112704, OFF);
    SetEventFlag(72112804, OFF);
    SetEventFlag(72112904, OFF);
    SetEventFlag(72113004, OFF);
    SetEventFlag(72113104, OFF);
    SetEventFlag(72113204, OFF);
    SetEventFlag(72113304, OFF);
    SetEventFlag(72113404, OFF);
    SetEventFlag(72113504, OFF);
    SetEventFlag(72113604, OFF);
    SetEventFlag(72113704, OFF);
    SetEventFlag(72113804, OFF);
    SetEventFlag(72113904, OFF);
    SetEventFlag(72114004, OFF);
    SetEventFlag(72114104, OFF);
    SetEventFlag(72114204, OFF);
    SetEventFlag(72114304, OFF);
    SetEventFlag(72114404, OFF);
    SetEventFlag(72114504, OFF);
    SetEventFlag(72114604, OFF);
    SetEventFlag(72114704, OFF);
    SetEventFlag(72114804, OFF);
    SetEventFlag(72114904, OFF);
    SetEventFlag(72115004, OFF);
    SetEventFlag(72115104, OFF);
    SetEventFlag(72115204, OFF);
    SetEventFlag(72115304, OFF);

    SetEventFlag(72110005, OFF);
    SetEventFlag(72110105, OFF);
    SetEventFlag(72110205, OFF);
    SetEventFlag(72110305, OFF);
    SetEventFlag(72110405, OFF);
    SetEventFlag(72110505, OFF);
    SetEventFlag(72110605, OFF);
    SetEventFlag(72110705, OFF);
    SetEventFlag(72110805, OFF);
    SetEventFlag(72110905, OFF);
    SetEventFlag(72111005, OFF);
    SetEventFlag(72111105, OFF);
    SetEventFlag(72111205, OFF);
    SetEventFlag(72111305, OFF);
    SetEventFlag(72111405, OFF);
    SetEventFlag(72111505, OFF);
    SetEventFlag(72111605, OFF);
    SetEventFlag(72111705, OFF);
    SetEventFlag(72111805, OFF);
    SetEventFlag(72111905, OFF);
    SetEventFlag(72112005, OFF);
    SetEventFlag(72112105, OFF);
    SetEventFlag(72112205, OFF);
    SetEventFlag(72112305, OFF);
    SetEventFlag(72112405, OFF);
    SetEventFlag(72112505, OFF);
    SetEventFlag(72112605, OFF);
    SetEventFlag(72112705, OFF);
    SetEventFlag(72112805, OFF);
    SetEventFlag(72112905, OFF);
    SetEventFlag(72113005, OFF);
    SetEventFlag(72113105, OFF);
    SetEventFlag(72113205, OFF);
    SetEventFlag(72113305, OFF);
    SetEventFlag(72113405, OFF);
    SetEventFlag(72113505, OFF);
    SetEventFlag(72113605, OFF);
    SetEventFlag(72113705, OFF);
    SetEventFlag(72113805, OFF);
    SetEventFlag(72113905, OFF);
    SetEventFlag(72114005, OFF);
    SetEventFlag(72114105, OFF);
    SetEventFlag(72114205, OFF);
    SetEventFlag(72114305, OFF);
    SetEventFlag(72114405, OFF);
    SetEventFlag(72114505, OFF);
    SetEventFlag(72114605, OFF);
    SetEventFlag(72114705, OFF);
    SetEventFlag(72114805, OFF);
    SetEventFlag(72114905, OFF);
    SetEventFlag(72115005, OFF);
    SetEventFlag(72115105, OFF);
    SetEventFlag(72115205, OFF);
    SetEventFlag(72115305, OFF);

    InitializeEvent(0, 12107100, 72100421, 2401950, 9021);
    InitializeEvent(1, 12107100, 72100422, 2401950, 9022);
    InitializeEvent(2, 12107100, 72100423, 2401950, 9023);
    InitializeEvent(3, 12107100, 72100424, 2401950, 9024);
    InitializeEvent(4, 12107100, 72100425, 2401950, 9025);
    InitializeEvent(5, 12107100, 72100426, 2401950, 9026);

    InitializeEvent(6, 12107100, 72100427, 2401951, 9021);
    InitializeEvent(7, 12107100, 72100428, 2401951, 9022);
    InitializeEvent(8, 12107100, 72100429, 2401951, 9023);
    InitializeEvent(9, 12107100, 72100430, 2401951, 9024);
    InitializeEvent(10, 12107100, 72100431, 2401951, 9025);
    InitializeEvent(11, 12107100, 72100432, 2401951, 9026);

    InitializeEvent(0, 12107200, 72100300, 2902950, 9001, 2901950);
    InitializeEvent(1, 12107200, 72100301, 2902951, 9002, 2901950);
    InitializeEvent(2, 12107200, 72100302, 2902952, 9003, 2901950);
    InitializeEvent(3, 12107200, 72100303, 2902953, 9004, 2901950);
    InitializeEvent(4, 12107200, 72100304, 2902954, 9005, 2901950);
    InitializeEvent(5, 12107200, 72100305, 2902955, 9006, 2901950);
    InitializeEvent(6, 12107200, 72100306, 2902956, 9007, 2901950);
    InitializeEvent(7, 12107200, 72100307, 2902957, 9008, 2901950);
    InitializeEvent(8, 12107200, 72100308, 2902958, 9009, 2901950);
    InitializeEvent(9, 12107200, 72100309, 2902959, 9010, 2901950);

    InitializeEvent(10, 12107200, 72100310, 2902950, 9001, 2901951);
    InitializeEvent(11, 12107200, 72100311, 2902951, 9002, 2901951);
    InitializeEvent(12, 12107200, 72100312, 2902952, 9003, 2901951);
    InitializeEvent(13, 12107200, 72100313, 2902953, 9004, 2901951);
    InitializeEvent(14, 12107200, 72100314, 2902954, 9005, 2901951);
    InitializeEvent(15, 12107200, 72100315, 2902955, 9006, 2901951);
    InitializeEvent(16, 12107200, 72100316, 2902956, 9007, 2901951);
    InitializeEvent(17, 12107200, 72100317, 2902957, 9008, 2901951);
    InitializeEvent(18, 12107200, 72100318, 2902958, 9009, 2901951);
    InitializeEvent(19, 12107200, 72100319, 2902959, 9010, 2901951);
    
    InitializeEvent(20, 7600, 2401999, 2403999);
    InitializeEvent(21, 7600, 2401998, 2403998);
    InitializeEvent(22, 7600, 2401997, 2403997);
    InitializeEvent(23, 7600, 2401996, 2403996);
    InitializeEvent(24, 7600, 2401995, 2403995);
    InitializeEvent(10, 7000, 2400950, 2401950, 999, 12407800, -1);
    
    InitializeEvent(11, 7000, 2400951, 2401951, 12401800, 12407820, amelia_defeat+13);
    InitializeEvent(amelia_offset, 8800, amelia_defeat+13, amelia_lamp_id-1000, amelia_lamp_id, amelia_lamp_id+3000);
    
    InitializeEvent(10, 7100, 72400200, 2401950);
    InitializeEvent(11, 7100, 72400201, 2401951);
    InitializeEvent(10, 7200, 72400100, 2401950, 2102950);
    InitializeEvent(11, 7200, 72400101, 2401951, 2102950);
    InitializeEvent(10, 7300, 72102400, 2401950);
    InitializeEvent(11, 7300, 72102401, 2401951);
    InitializeEvent(10, 12102220, 2401950, 2400950);
    InitializeEvent(11, 12102220, 2401951, 2400951);
    InitializeEvent(2, 9200, 2403900);
    InitializeEvent(2, 9220, 2400710, 12404220, 12404221, 2400, 24);
    InitializeEvent(2, 9240, 2400710, 12404220, 12404221, 12404222, 24);
    InitializeEvent(2, 9260, 2400710, 12404220, 12404221, 12404222, 24);
    InitializeEvent(2, 9280, 2400710, 12404220, 12404221, 2400, 12404223, 24);
    
    if (!EventFlag(12400160)) {
        SetEventFlag(2400, ON);
        SetEventFlag(2401, ON);
        SetEventFlag(2405, ON);
        SetEventFlag(2406, ON);
        SetEventFlag(2402, OFF);
        SetEventFlag(2407, OFF);
    } else {
        if (!EventFlag(12401800)) {
            SetEventFlag(2400, OFF);
            SetEventFlag(2401, OFF);
            SetEventFlag(2405, OFF);
            SetEventFlag(2406, OFF);
            SetEventFlag(2402, OFF);
            SetEventFlag(2407, OFF);
        } else {
            SetEventFlag(2400, ON);
            SetEventFlag(2401, ON);
            SetEventFlag(2405, OFF);
            SetEventFlag(2406, OFF);
            SetEventFlag(2402, ON);
            SetEventFlag(2407, OFF);
        }
    }
    DeleteMapSFX(2403910, false);
    InitializeEvent(0, 12404400, 12404440, 2403910, 12404420, 12404430, 12401800, 6001);
    InitializeEvent(0, 12404410, 0, 2400910, 2402910, 12404420, 12404430, 12404440, 12401800, 10567);
    InitializeEvent(0, 12404450, 2400910, 2402911, 12404420, 12404430, 12404800);
    InitializeEvent(0, 12404460, 2400910, 2402911, 2402800, 2402801, 101130, 12404450, 2402801);
    InitializeEvent(0, 12404490, 0);
    CreateObjectfollowingSFX(2401900, 200, 900130);
    CreateObjectfollowingSFX(2401901, 200, 900130);
    RegisterLadder(12400600, 12400601, 2401020);
    RegisterLadder(12400602, 12400603, 2401021);
    RegisterLadder(12400604, 12400605, 2401022);
    RegisterLadder(12400606, 12400607, 2401023);
    RegisterLadder(12400608, 12400609, 2401024);
    CreateBulletOwner(2400000);
    CreateBulletOwner(2402070);
    CreateBulletOwner(2402071);
    CreateBulletOwner(2402072);
    SetCharacterGravity(2400899, Disabled);
    SetCharacterMaphits(2400899, true);
    CreateDamagingObject(12400190, 2401017, 100, 6110, DamageTargetType.Character, 0.6, 0, 1);
    CreateDamagingObject(12400191, 2401018, 100, 6110, DamageTargetType.Character, 0.6, 0, 1);
    GotoIf(S0, !CharacterType(10000, TargetType.Alive));
    GotoIf(S0, !EventFlag(6646));
    SetEventFlag(12401999, ON);
S0:
    if (!EventFlag(12401999)) {
        DeactivateObject(2401501, Enabled);
        DeactivateObject(2401505, Disabled);
        SetObjactState(2401501, 9942, Enabled);
        SetObjactState(2401505, 9942, Disabled);
        InitializeEvent(4, 12400350, 2401501, 12400451);
    } else {
        DeactivateObject(2401501, Disabled);
        DeactivateObject(2401505, Enabled);
        SetObjactState(2401501, 9942, Disabled);
        SetObjactState(2401505, 9942, Enabled);
        InitializeEvent(5, 12400350, 2401505, 12400455);
    }
    GotoIf(S1, !CharacterType(10000, TargetType.Alive));
    GotoIf(S1, !EventFlag(6310));
    SetEventFlag(12401998, ON);
S1:
    if (!EventFlag(12401998)) {
        DeactivateObject(2401502, Enabled);
        DeactivateObject(2401508, Disabled);
        SetObjactState(2401502, 9942, Enabled);
        SetObjactState(2401508, 9942, Disabled);
        InitializeEvent(7, 12400350, 2401502, 12400452);
    } else {
        DeactivateObject(2401502, Disabled);
        DeactivateObject(2401508, Enabled);
        SetObjactState(2401502, 9942, Disabled);
        SetObjactState(2401508, 9942, Enabled);
        InitializeEvent(8, 12400350, 2401508, 12400458);
    }
    GotoIf(S2, !CharacterType(10000, TargetType.Alive));
    GotoIf(S2, !EventFlag(6311));
    SetEventFlag(12401997, ON);
S2:
    if (!EventFlag(12401997)) {
        DeactivateObject(2401504, Enabled);
        DeactivateObject(2401507, Disabled);
        SetObjactState(2401504, 9942, Enabled);
        SetObjactState(2401507, 9942, Disabled);
        InitializeEvent(9, 12400350, 2401504, 12400454);
    } else {
        DeactivateObject(2401504, Disabled);
        DeactivateObject(2401507, Enabled);
        SetObjactState(2401504, 9942, Disabled);
        SetObjactState(2401507, 9942, Enabled);
        InitializeEvent(10, 12400350, 2401507, 12400457);
    }
    InitializeEvent(0, 12400070, 2421201, 1, 2420020, 12420120);
    InitializeEvent(0, 12400080, 2401207, 12400177, 12400178, 2400050);
    InitializeEvent(1, 12400080, 2401207, 12400177, 12400178, 2400051);
    InitializeEvent(2, 12400080, 2401208, 12400157, 12405179, 2400050);
    InitializeEvent(3, 12400080, 2401208, 12400157, 12405179, 2400051);
    InitializeEvent(4, 12400080, 2401220, 12400160, 12400160, 2400031);
    InitializeEvent(5, 12400080, 2401209, 12400167, 12405175, 2400050);
    InitializeEvent(6, 12400080, 2401209, 12400167, 12405175, 2400051);
    InitializeEvent(0, 12400095, 2401095);
    InitializeEvent(0, 12400100, 2401040, 12400190, 9921, 19921);
    InitializeEvent(1, 12400100, 2401040, 12400191, 9921, 19921);
    InitializeEvent(0, 12400125, 0);
    InitializeEvent(0, 12400126, 0);
    InitializeEvent(0, 12400127, 0);
    InitializeEvent(0, 12400128, 0);
    InitializeEvent(0, 12400130, 2401204, 1, 12400112, 12400130);
    InitializeEvent(1, 12400130, 2401200, 2, 12400113, 12400131);
    InitializeEvent(2, 12400130, 2101201, 1, 12400102, 12400132);
    InitializeEvent(3, 12400130, 2101202, 2, 12400103, 12400133);
    InitializeEvent(5, 12400130, 2401211, 1, 12400190, 12400135);
    InitializeEvent(6, 12400130, 2401212, 1, 12400191, 12400136);
    InitializeEvent(7, 12400130, 2401201, 1, 12400114, 12400137);
    InitializeEvent(8, 12400130, 2401213, 2, 12400200, 12400138);
    InitializeEvent(0, 12400146, 0);
    InitializeEvent(0, 12400147, 0);
    InitializeEvent(0, 12400148, 0);
    InitializeEvent(0, 12400149, 0);
    InitializeEvent(0, 12400159, 0);
    InitializeEvent(0, 12400155, 0);
    InitializeEvent(0, 12400156, 0);
    InitializeEvent(0, 12400158, 0);
    InitializeEvent(0, 12400161, 0);
    InitializeEvent(0, 12400174, 0);
    InitializeEvent(0, 12400175, 0);
    InitializeEvent(0, 12400179, 2401015);
    InitializeEvent(1, 12400179, 2401016);
    InitializeEvent(0, 12400185, 0);
    InitializeEvent(2, 12400200, 2400344, 52400980);
    InitializeEvent(3, 12400200, 2400371, 52400960);
    InitializeEvent(4, 12400200, 2400372, 52400990);
    InitializeEvent(5, 12400200, 2400373, 52400970);
    InitializeEvent(6, 12400200, 2400374, 52400950);
    InitializeEvent(7, 12400200, 2400375, 52400940);
    InitializeEvent(0, 12400300, 0);
    InitializeEvent(0, 12400350, 2401500, 12400450);
    InitializeEvent(2, 12400350, 2401503, 12400453);
    InitializeEvent(3, 12400350, 2401504, 12400454);
    InitializeEvent(6, 12400350, 2401506, 12400456);
    InitializeEvent(0, 12400750, 0);
    InitializeEvent(0, 12400765, 0);
    InitializeEvent(0, 12400760, 0);
    InitializeEvent(0, 12400420, 0);
    InitializeEvent(0, 12400823, 0);
    InitializeEvent(0, 12400824, 0);
    InitializeEvent(0, 12400825, 0);
    InitializeEvent(0, 12400826, 0);
    InitializeEvent(0, 12400850, 2407020, 2407021, 2407022, 12400130, 0, 0, 0, 0);
    InitializeEvent(1, 12400850, 2407025, 2407026, 2407027, 12400132, 0, 0, 0, 0);
    InitializeEvent(2, 12400850, 2407028, 2407029, 2407030, 12400131, 0, 0, 0, 0);
    InitializeEvent(3, 12400850, 2406700, 2406701, 2406702, 12400133, 0, 0, 0, 0);
    InitializeEvent(0, 12400854, 0);
    InitializeEvent(0, 12400860, 0);
    InitializeEvent(0, 12405710, 0);
    InitializeEvent(0, 12400865, 2400660);
    InitializeEvent(1, 12400865, 2400661);
    InitializeEvent(0, 12400780, 2400360);
    InitializeEvent(1, 12400780, 2400361);
    InitializeEvent(2, 12400780, 2400362);
    InitializeEvent(3, 12400780, 2400363);
    InitializeEvent(0, 12400791, 2400360);
    InitializeEvent(1, 12400791, 2400361);
    InitializeEvent(2, 12400791, 2400363);
    InitializeEvent(0, 12400797, 0);
    InitializeEvent(1, 12405210, 2400116, 5696);
    InitializeEvent(2, 12405210, 2400122, 5696);
    InitializeEvent(4, 12405210, 2400125, 5696);
    InitializeEvent(5, 12405210, 2400127, 5696);
    InitializeEvent(7, 12405210, 2400161, 5696);
    InitializeEvent(0, 12405220, 2400137, 5552, 5553, 5554);
    InitializeEvent(1, 12405220, 2400210, 5555, 5556, 0);
    InitializeEvent(2, 12405220, 2400211, 5555, 5556, 0);
    InitializeEvent(0, 12404100, 2401900, 7405, 10012005);
    InitializeEvent(1, 12404100, 2401901, 7406, 10012006);
    RequestCharacterAICommand(2400420, 100, 0);
    InitializeEvent(1, 12405600, 2400400, 2402022, 1084227584, 0);
    InitializeEvent(2, 12405600, 2400400, 2402017, 1084227584, 0);
    InitializeEvent(3, 12405600, 2400126, 2402012, 1084227584, 0);
    InitializeEvent(4, 12405600, 2400127, 2402013, 1084227584, 0);
    InitializeEvent(5, 12405600, 2400128, 2402013, 1084227584, 0);
    InitializeEvent(6, 12405600, 2400136, 2402015, 1084227584, 0);
    InitializeEvent(7, 12405600, 2400137, 2402015, 1084227584, 0);
    InitializeEvent(8, 12405600, 2400125, 2404302, 1084227584, 0);
    InitializeEvent(10, 12405600, 2400231, 2404312, 1084227584, 0);
    InitializeEvent(11, 12405600, 2400508, 2404320, 1084227584, 0);
    InitializeEvent(12, 12405600, 2400508, 2404310, 1084227584, 0);
    InitializeEvent(13, 12405600, 2400120, 2402073, 1084227584, 0);
    InitializeEvent(14, 12405600, 2400121, 2402073, 1084227584, 0);
    InitializeEvent(15, 12405600, 2400392, 2402016, 1084227584, 0);
    InitializeEvent(18, 12405600, 2400401, 2402029, 1084227584, 0);
    InitializeEvent(19, 12405600, 2400401, 2402017, 1084227584, 0);
    InitializeEvent(20, 12405600, 2400106, 2404310, 1084227584, 0);
    InitializeEvent(22, 12405600, 2400122, 2402081, 1084227584, 0);
    InitializeEvent(23, 12405600, 2400116, 2404302, 1084227584, 0);
    InitializeEvent(24, 12405600, 2400211, 2402075, 1084227584, 0);
    InitializeEvent(0, 12405660, 0);
    InitializeEvent(0, 12405350, 2400391, 2402310, 2409015, 2403105, 2402311);
    InitializeEvent(0, 12405195, 0);
    InitializeEvent(0, 12405370, 2400210);
    InitializeEvent(1, 12405370, 2400211);
    InitializeEvent(0, 12405670, 2400203, 2404332, 2404301, 1084227584, 0);
    InitializeEvent(0, 12405330, 2400500);
    InitializeEvent(0, 12405360, 0);
    InitializeEvent(0, 12405365, 2400374, 2404087, 2403108);
    InitializeEvent(1, 12405365, 2400375, 2404086, 2403107);
    InitializeEvent(0, 12405850, 2400450, 2401652, 2402061, 10, 12405521);
    InitializeEvent(0, 12405810, 2400408, 2402022, 2404083, 10, 12405520);
    InitializeEvent(0, 12405820, 2400408, 2404083);
    InitializeEvent(1, 12405820, 2400450, 2402061);
    InitializeEvent(0, 12405840, 2400408, 10, 12405520);
    InitializeEvent(1, 12405840, 2400450, 10, 12405521);
    InitializeEvent(0, 12405240, 0);
    InitializeEvent(0, 12405241, 0);
    InitializeEvent(0, 12405680, 0);
    InitializeEvent(0, 12405682, 2400107, 2400002, 1086324736, 12405686, 0);
    InitializeEvent(2, 12405682, 2400109, 2400001, 1065353216, 12405688, 0);
    InitializeEvent(3, 12405682, 2400110, 2400004, 1065353216, 12405689, 0);
    InitializeEvent(0, 12405140, 0);
    InitializeEvent(0, 12405686, 2400107);
    InitializeEvent(2, 12405686, 2400109);
    InitializeEvent(3, 12405686, 2400110);
    InitializeEvent(0, 12405690, 0);
    InitializeEvent(0, 12405130, 2400107, 12405682, 0);
    InitializeEvent(1, 12405130, 2400111, 12405140, 0);
    InitializeEvent(2, 12405130, 2400109, 12405682, 2);
    InitializeEvent(3, 12405130, 2400110, 12405682, 3);
    InitializeEvent(4, 12405130, 2400106, 12405680, 0);
    InitializeEvent(41, 12405600, 2400410, 2402028, 1077936128, 0);
    InitializeEvent(42, 12405600, 2400420, 2402511, 1077936128, 0);
    InitializeEvent(43, 12405600, 2400423, 2402511, 1077936128, 0);
    InitializeEvent(44, 12405600, 2400501, 2402157, 1077936128, 0);
    InitializeEvent(45, 12405600, 2400502, 2402157, 1077936128, 0);
    InitializeEvent(46, 12405600, 2400503, 2402157, 1077936128, 0);
    InitializeEvent(47, 12405600, 2400504, 2402157, 1077936128, 0);
    InitializeEvent(48, 12405600, 2400505, 2402157, 1077936128, 0);
    InitializeEvent(49, 12405600, 2400506, 2402157, 1077936128, 0);
    InitializeEvent(50, 12405600, 2400507, 2402157, 1077936128, 0);
    InitializeEvent(0, 12405700, 0);
    InitializeEvent(0, 12405701, 2400398, 2404370);
    InitializeEvent(1, 12405701, 2400399, 2404371);
    InitializeEvent(52, 12405600, 2400600, 2402500, 1065353216, 0);
    InitializeEvent(53, 12405600, 2400601, 2402500, 1065353216, 0);
    InitializeEvent(54, 12405600, 2400602, 2402500, 1065353216, 0);
    InitializeEvent(55, 12405600, 2400603, 2402507, 1084227584, 0);
    InitializeEvent(56, 12405600, 2400603, 2402508, 1084227584, 0);
    InitializeEvent(0, 12405380, 2400604, 2402509, 2402502);
    InitializeEvent(0, 12406900, 2402103, 2402101, 20011001);
    InitializeEvent(1, 12406900, 2402104, 2402101, 20011001);
    InitializeEvent(3, 12406900, 2402107, 2402101, 20011001);
    InitializeEvent(4, 12406900, 2404301, 2402101, 20011001);
    InitializeEvent(0, 12405000, 2400205, 7010, 7013, 273150, 273140);
    InitializeEvent(1, 12405000, 2400156, 7014, 7018, 263252, 263251);
    InitializeEvent(0, 12405010, 2400205, 7012, 0, 273130);
    InitializeEvent(1, 12405010, 2400156, 7015, 1, 263250);
    InitializeEvent(0, 12405020, 2400207, 7010, 7013, 273120, 273110);
    InitializeEvent(1, 12405020, 2400126, 7010, 7013, 273120, 273110);
    InitializeEvent(2, 12405020, 2400203, 7010, 7013, 273120, 273110);
    InitializeEvent(4, 12405020, 2400119, 7010, 7013, 273120, 273110);
    InitializeEvent(0, 12405030, 2400207, 7012, 0, 273100);
    InitializeEvent(1, 12405030, 2400126, 7012, 1, 273100);
    InitializeEvent(2, 12405030, 2400203, 7012, 2, 273100);
    InitializeEvent(4, 12405030, 2400119, 7012, 4, 273100);
    InitializeEvent(0, 12405335, 0);
    InitializeEvent(1, 12405120, 2400156, 5569);
    InitializeEvent(2, 12405120, 2400162, 5569);
    InitializeEvent(3, 12405120, 2400220, 5557);
    InitializeEvent(4, 12405120, 2400116, 5557);
    InitializeEvent(5, 12405120, 2400114, 5557);
    InitializeEvent(6, 12405120, 2400127, 5557);
    InitializeEvent(8, 12405120, 2400139, 5557);
    InitializeEvent(9, 12405120, 2400137, 5557);
    InitializeEvent(0, 12405320, 0);
    InitializeEvent(0, 12405250, 12400168, 2406790, 12405175);
    InitializeEvent(0, 12405251, 12400177, 2406791, 12400178);
    InitializeEvent(1, 12405251, 12400157, 2406792, 12405179);
    InitializeEvent(0, 12405259, 0);
    InitializeEvent(0, 12405260, 0);
    InitializeEvent(0, 12405262, 0);
    InitializeEvent(0, 12400410, 0);
    InitializeEvent(0, 12405263, 0);
    InitializeEvent(0, 12405430, 2490, 2490, 7, 40, 12405500, 2400114);
    InitializeEvent(1, 12405430, 2491, 2491, 8, 40, 12405500, 2400114);
    InitializeEvent(2, 12405430, 2490, 2490, 7, 40, 12405501, 2400126);
    InitializeEvent(3, 12405430, 2491, 2491, 8, 40, 12405501, 2400126);
    InitializeEvent(6, 12405430, 2490, 2490, 7, 40, 12405503, 2400133);
    InitializeEvent(7, 12405430, 2491, 2491, 8, 40, 12405503, 2400133);
    InitializeEvent(8, 12405430, 2490, 2490, 7, 40, 12405504, 2400203);
    InitializeEvent(9, 12405430, 2491, 2491, 8, 40, 12405504, 2400203);
    InitializeEvent(10, 12405430, 2490, 2490, 7, 40, 12405505, 2400205);
    InitializeEvent(11, 12405430, 2491, 2491, 8, 40, 12405505, 2400205);
    InitializeEvent(14, 12405430, 2490, 2490, 7, 40, 12405507, 2400207);
    InitializeEvent(15, 12405430, 2491, 2491, 8, 40, 12405507, 2400207);
    InitializeEvent(16, 12405430, 2490, 2490, 7, 40, 12405508, 2400603);
    InitializeEvent(17, 12405430, 2491, 2491, 8, 40, 12405508, 2400603);
    InitializeEvent(0, 12405400, 2490, 2490, 7, 7003, 5907, 12405500, 12405530, 2400114);
    InitializeEvent(1, 12405400, 2491, 2491, 8, 7000, 5907, 12405500, 12405560, 2400114);
    InitializeEvent(2, 12405400, 2490, 2490, 7, 7003, 5907, 12405501, 12405531, 2400126);
    InitializeEvent(3, 12405400, 2491, 2491, 8, 7000, 5907, 12405501, 12405561, 2400126);
    InitializeEvent(6, 12405400, 2490, 2490, 7, 7003, 5907, 12405503, 12405533, 2400133);
    InitializeEvent(7, 12405400, 2491, 2491, 8, 7000, 5907, 12405503, 12405563, 2400133);
    InitializeEvent(8, 12405400, 2490, 2490, 7, 7003, 5907, 12405504, 12405534, 2400203);
    InitializeEvent(9, 12405400, 2491, 2491, 8, 7000, 5907, 12405504, 12405564, 2400203);
    InitializeEvent(10, 12405400, 2490, 2490, 7, 7003, 5907, 12405505, 12405535, 2400205);
    InitializeEvent(11, 12405400, 2491, 2491, 8, 7000, 5907, 12405505, 12405565, 2400205);
    InitializeEvent(14, 12405400, 2490, 2490, 7, 7003, 5907, 12405507, 12405537, 2400207);
    InitializeEvent(15, 12405400, 2491, 2491, 8, 7000, 5907, 12405507, 12405567, 2400207);
    InitializeEvent(16, 12405400, 2490, 2490, 7, 7003, 5907, 12405508, 12405538, 2400603);
    InitializeEvent(17, 12405400, 2491, 2491, 8, 7000, 5907, 12405508, 12405568, 2400603);
    InitializeEvent(0, 12405460, 10, 40, 12405530, 2400114, 2560);
    InitializeEvent(1, 12405460, 30, 40, 12405560, 2400114, 2817);
    InitializeEvent(2, 12405460, 10, 40, 12405531, 2400126, 2560);
    InitializeEvent(3, 12405460, 30, 40, 12405561, 2400126, 2817);
    InitializeEvent(6, 12405460, 10, 40, 12405533, 2400133, 2560);
    InitializeEvent(7, 12405460, 30, 40, 12405563, 2400133, 2817);
    InitializeEvent(8, 12405460, 10, 40, 12405534, 2400203, 2560);
    InitializeEvent(9, 12405460, 30, 40, 12405564, 2400203, 2817);
    InitializeEvent(10, 12405460, 10, 40, 12405535, 2400205, 2560);
    InitializeEvent(11, 12405460, 30, 40, 12405565, 2400205, 2817);
    InitializeEvent(14, 12405460, 10, 40, 12405537, 2400207, 2560);
    InitializeEvent(15, 12405460, 30, 40, 12405567, 2400207, 2817);
    InitializeEvent(16, 12405460, 10, 40, 12405538, 2400603, 2560);
    InitializeEvent(17, 12405460, 30, 40, 12405568, 2400603, 2817);
    InitializeEvent(0, 12405790, 2401150, 9802, 924110);
    InitializeEvent(1, 12405790, 2401151, 9801, 924110);
    InitializeEvent(2, 12405790, 2401152, 6001, 924113);
    InitializeEvent(3, 12405790, 2401153, 9802, 924110);
    InitializeEvent(4, 12405790, 2401154, 9801, 924113);
    InitializeEvent(0, 12405800, 2403310, 1439, 70000052, 9802);
    InitializeEvent(1, 12405800, 2403311, 1439, 70000053, 9801);
    InitializeEvent(2, 12405800, 2403312, 1439, 70000054, 6001);
    InitializeEvent(3, 12405800, 2403313, 1439, 70000072, 9802);
    InitializeEvent(4, 12405800, 2403314, 1439, 70000073, 9801);
    InitializeEvent(0, 12404842, 0);
    InitializeEvent(0, 12404843, 0);
    InitializeEvent(0, 12401800, 0);
    InitializeEvent(0, 12401801, 0);
    InitializeEvent(0, 12401802, 0);
    InitializeEvent(0, 12401803, 0);
    // InitializeEvent(0, 12401810, 0); // rematch amelia
    InitializeEvent(0, 12404840, 0);
    InitializeEvent(0, 12404841, 0);
    InitializeEvent(0, 12404802, 0);
    InitializeEvent(0, 12404803, 0);
    InitializeEvent(0, 12404804, 0);
    InitializeEvent(0, 12404805, 0);
    InitializeEvent(0, 12404807, 0);
    InitializeEvent(0, 12404808, 0);
    InitializeEvent(0, 12404830, 0);
    InitializeEvent(0, 12401804, 0);
    InitializeEvent(0, 12404810, 2400, 2400, 1, 80, 480, 490, 8020);
    InitializeEvent(1, 12404810, 2401, 2401, 2, 150, 481, 491, 8000);
    InitializeEvent(2, 12404810, 2402, 2402, 3, 150, 482, 492, 8010);
    InitializeEvent(3, 12404810, 2403, 2403, 4, 200, 483, 493, 8030);
    InitializeEvent(4, 12404810, 2404, 2404, 5, 200, 484, 494, 8040);
    InitializeEvent(0, 12404820, 480, 490, 2565);
    InitializeEvent(1, 12404820, 481, 491, 2822);
    InitializeEvent(2, 12404820, 482, 492, 3079);
    InitializeEvent(3, 12404820, 483, 493, 3336);
    InitializeEvent(4, 12404820, 484, 494, 3593);
    InitializeEvent(0, 12400800, 0);
    InitializeEvent(0, 12400801, 0);
    InitializeEvent(1, 12400840, 70000052, 6030, 2400860);
    InitializeEvent(2, 12400840, 70000053, 6030, 2400861);
    InitializeEvent(3, 12400840, 70000054, 6030, 2400862);
    InitializeEvent(4, 12400840, 70000072, 6030, 2400863);
    InitializeEvent(5, 12400840, 70000073, 6030, 2400864);
    InitializeEvent(6, 12400840, 72400513, 6030, 2400749);
    InitializeEvent(0, 12400849, 70000599, 6030, 2400869);
    InitializeEvent(0, 12400630, 2400765);
    InitializeEvent(1, 12400630, 2400730);
    InitializeEvent(2, 12400630, 2400754);
    InitializeEvent(3, 12400630, 2400757);
    InitializeEvent(4, 12400630, 2400750);
    InitializeEvent(5, 12400630, 2400770);
    InitializeEvent(6, 12400630, 2400772);
    InitializeEvent(7, 12400630, 2400774);
    InitializeEvent(8, 12400630, 2400700);
    InitializeEvent(0, 12400501, 0);
    InitializeEvent(0, 12400504, 0);
    InitializeEvent(0, 12400507, 0);
    InitializeEvent(0, 12400512, 0);
    InitializeEvent(0, 12400508, 0);
    InitializeEvent(0, 12400513, 0);
    InitializeEvent(0, 12400514, 0);
    InitializeEvent(0, 12400505, 0);
    InitializeEvent(0, 12400901, 0);
    InitializeEvent(0, 12400903, 0);
    InitializeEvent(0, 12400904, 0);
    InitializeEvent(0, 12400952, 0);
    InitializeEvent(0, 12400953, 0);
    InitializeEvent(0, 12400954, 0);
    InitializeEvent(0, 12400940, 2400770);
    InitializeEvent(1, 12400940, 2400774);
    InitializeEvent(0, 12400910, 2400770);
    InitializeEvent(1, 12400910, 2400772);
    InitializeEvent(2, 12400910, 2400774);
    InitializeEvent(0, 12400915, 2400770);
    InitializeEvent(1, 12400915, 2400772);
    InitializeEvent(2, 12400915, 2400774);
    InitializeEvent(0, 12400920, 2400770);
    InitializeEvent(1, 12400920, 2400774);
    InitializeEvent(0, 12400925, 2400770);
    InitializeEvent(1, 12400925, 2400772);
    InitializeEvent(2, 12400925, 2400774);
    InitializeEvent(0, 12400930, 2400770);
    InitializeEvent(1, 12400930, 2400774);
    InitializeEvent(0, 12400935, 2400770);
    InitializeEvent(1, 12400935, 2400774);
    InitializeEvent(0, 12400521, 0);
    InitializeEvent(0, 12400525, 0);
    InitializeEvent(0, 12400523, 0);
    InitializeEvent(0, 12400524, 0);
    InitializeEvent(0, 12400531, 0);
    InitializeEvent(0, 12400522, 0);
    InitializeEvent(0, 12400810, 2400750, 103085);
    InitializeEvent(1, 12400810, 2400754, 103088);
    InitializeEvent(2, 12400810, 2400757, 103088);
    InitializeEvent(3, 12400810, 2400758, 103089);
    InitializeEvent(0, 12400805, 2400750, 103080, 151);
    InitializeEvent(1, 12400805, 2400754, 103081, 152);
    InitializeEvent(2, 12400805, 2400757, 103081, 152);
    InitializeEvent(3, 12400805, 2400758, 103082, 153);
    InitializeEvent(0, 12400830, 2400750, 103086);
    InitializeEvent(1, 12400830, 2400754, 103086);
    InitializeEvent(2, 12400830, 2400757, 103086);
    InitializeEvent(3, 12400830, 2400758, 103086);
    InitializeEvent(0, 12400610, 0);
    InitializeEvent(0, 12400611, 0);
    InitializeEvent(0, 12405150, 2400755, 12405155);
    InitializeEvent(1, 12405150, 2400759, 12405156);
    InitializeEvent(0, 12400612, 2400755, 12405155);
    InitializeEvent(1, 12400612, 2400759, 12405156);
    InitializeEvent(0, 12400614, 2400755, 103076);
    InitializeEvent(1, 12400614, 2400759, 103076);
    InitializeEvent(0, 12400616, 2400755);
    InitializeEvent(1, 12400616, 2400759);
    InitializeEvent(0, 12400618, 2400755);
    InitializeEvent(1, 12400618, 2400759);
    InitializeEvent(0, 12400620, 2400755);
    InitializeEvent(1, 12400620, 2400759);
    InitializeEvent(0, 12400625, 2400755, 12405155);
    InitializeEvent(0, 12400627, 2400755, 12405155);
    InitializeEvent(1, 12400627, 2400759, 12405156);
    InitializeEvent(0, 12405157, 0);
    InitializeEvent(0, 12405158, 0);
    InitializeEvent(0, 12405159, 0);
    InitializeEvent(0, 12400561, 0);
    InitializeEvent(0, 12400563, 0);
    InitializeEvent(0, 12400564, 0);
    InitializeEvent(0, 12400565, 0);
    InitializeEvent(0, 12400566, 0);
    InitializeEvent(0, 12400567, 0);
    InitializeEvent(0, 12400569, 0);
    InitializeEvent(0, 12400570, 0);
    InitializeEvent(0, 12400571, 0);
    InitializeEvent(0, 12400572, 0);
    InitializeEvent(0, 12400568, 0);
    SetEventFlag(72400310, OFF);
    SetEventFlag(72400311, OFF);
    SetCharacterTeamType(2400700, TeamType.Ally);
    InitializeEvent(0, 12400701, 0);
    InitializeEvent(0, 12400702, 0);
    InitializeEvent(0, 12400703, 0);
    InitializeEvent(0, 12400704, 0);
    InitializeEvent(0, 12400705, 0);
    InitializeEvent(0, 12400706, 0);
    InitializeEvent(0, 12400707, 0);
    InitializeEvent(0, 12400708, 1164, 72400316, 1163, 1161, 0);
    InitializeEvent(1, 12400708, 1181, 72400317, 1190, 1183, 0);
    InitializeEvent(2, 12400708, 1304, 72400318, 1309, 1303, 1);
    InitializeEvent(3, 12400708, 1224, 72400319, 1223, 1222, 0);
    InitializeEvent(0, 12400713, 1164, 1163);
    InitializeEvent(1, 12400713, 1181, 1190);
    InitializeEvent(2, 12400713, 1304, 1309);
    InitializeEvent(3, 12400713, 1224, 1223);
    InitializeEvent(0, 12400720, 0);
    InitializeEvent(0, 12400721, 0);
    InitializeEvent(0, 12400722, 0);
    InitializeEvent(0, 12400723, 0);
    InitializeEvent(0, 12400728, 0);
    InitializeEvent(0, 12400729, 0);
    InitializeEvent(0, 12400730, 0);
    InitializeEvent(0, 12400731, 0);
    InitializeEvent(3, 12400732, 0);
    InitializeEvent(0, 12400737, 0);
    InitializeEvent(0, 12400738, 0);
    InitializeEvent(0, 12400580, 0);
    InitializeEvent(0, 12400581, 0);
    InitializeEvent(0, 12400582, 0);
    InitializeEvent(0, 12400401, 0);
    InitializeEvent(0, 12400402, 0);
    InitializeEvent(0, 12400403, 0);
    InitializeEvent(0, 12400591, 0);
    InitializeEvent(0, 12400592, 2400760, 72400475);
    InitializeEvent(1, 12400592, 2400763, 72400476);
    InitializeEvent(0, 12400593, 2400760, 1341, 72400475);
    InitializeEvent(1, 12400593, 2400763, 1345, 72400476);
    InitializeEvent(0, 12400594, 2400760, 1342);
    InitializeEvent(1, 12400594, 2400763, 1346);
    InitializeEvent(0, 12405271, 0);
    InitializeEvent(0, 12405272, 0);
    InitializeEvent(0, 12400990, 0);
    if (EventFlag(12401800)) {
        ActivateHit(2404121, Disabled);
    }
L0:
    NoOp();
});

// pre-constructor
$Event(50, Default, function() {
    ReproduceObjectDestruction(2404301, 1);
    SetCharacterAnimationState(2403950, Disabled);
    SetCharacterGravity(2403950, Disabled);
    SetCharacterMaphits(2403950, true);
    SetCharacterAnimationState(2403951, Disabled);
    SetCharacterGravity(2403951, Disabled);
    SetCharacterMaphits(2403951, true);
    SetCharacterAnimationState(2403952, Disabled);
    SetCharacterGravity(2403952, Disabled);
    SetCharacterMaphits(2403952, true);
    InitializeEvent(0, 12404000, 0);
    InitializeEvent(0, 12400500, 0);
    InitializeEvent(0, 12400560, 0);
    InitializeEvent(0, 12400900, 0);
    InitializeEvent(0, 12400520, 0);
    InitializeEvent(0, 12400622, 0);
    InitializeEvent(0, 12400624, 0);
    InitializeEvent(0, 12400629, 0);
    InitializeEvent(0, 12400650, 0);
    InitializeEvent(0, 12400700, 0);
    InitializeEvent(0, 12400590, 0);
    SetEventFlag(9432, OFF);
    SetCharacterAnimationState(2400899, Disabled);
    SetCharacterGravity(2400899, Disabled);
    SetCharacterMaphits(2400899, true);
    SetNetworkUpdateRate(2400899, true, CharacterUpdateFrequency.AlwaysUpdate);
    ChangeCharacterDispmask(2400899, 0, OFF);
    ChangeCharacterDispmask(2400899, 2, OFF);
    ChangeCharacterDispmask(2400899, 10, OFF);
    SetCharacterAnimationState(2400650, Disabled);
    SetCharacterGravity(2400650, Disabled);
    SetCharacterMaphits(2400650, true);
});

// SAN value judgment
$Event(12404000, Restart, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    if (PlayerInsightAmount() >= 50) {
        SetEventFlag(12404001, ON);
        SetEventFlag(12404002, ON);
        SetEventFlag(12404003, ON);
        EndEvent();
    }
L0:
    if (PlayerInsightAmount() >= 40) {
        SetEventFlag(12404001, ON);
        SetEventFlag(12404002, ON);
        EndEvent();
    }
L1:
    EndIf(PlayerInsightAmount() < 15);
    SetEventFlag(12404002, ON);
});

// Piece of Paper_Cathedral Street A_XX
$Event(12404100, Default, function(X0_4, X4_4, X8_4) {
    SetNetworkSyncState(Disabled);
    WaitFor(ActionButtonInArea(X4_4, X0_4));
    DisplayGenericDialog(X8_4, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
    RestartEvent();
});

// Door open process_XX
$Event(12400070, Default, function(X0_4, X4_4, X8_4, X12_4) {
    if (ThisEventSlot()) {
        ReproduceObjectAnimation(X0_4, X8_4);
        SetObjactState(X0_4, X12_4, Disabled);
        NotifySoundDampeningOfDoorEvent(X0_4, DoorState.DoorOpening);
        EndEvent();
    }
L0:
    WaitFor(ObjActEventFlag(X4_4));
    WaitFixedTimeSeconds(0);
});

// Message closed by device_XX
$Event(12400080, Default, function(X0_4, X4_4, X8_4, X12_4) {
    SetNetworkSyncState(Disabled);
    WaitFor(!EventFlag(X4_4) && !EventFlag(X8_4));
    act = ActionButtonInArea(X12_4, X0_4);
    flag = EventFlagState(CHANGE, TargetEventFlagType.EventFlag, X4_4);
    WaitFor(act || flag);
    if (!flag.Passed) {
        DisplayGenericDialog(10010160, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
    }
    RestartEvent();
});

// completely closed message_XX
$Event(12400095, Default, function(X0_4) {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12100849));
    WaitFor(ActionButtonInArea(2400040, X0_4));
    DisplayGenericDialog(10010171, PromptType.OKCANCEL, NumberofOptions.OneButton, 10000, 3);
    RestartEvent();
});

// Delete door action
$Event(12400100, Default, function(X0_4, X4_4, X8_4, X12_4) {
    if (!ThisEventSlot()) {
        WaitFor(ObjActEventFlag(X4_4));
    }
    SetObjactState(X0_4, X8_4, Disabled);
    SetObjactState(X0_4, X12_4, Disabled);
});

// square door
$Event(12400125, Default, function() {
    WaitFor((ObjActEventFlag(12400162) || ObjActEventFlag(12400163)) && !EventFlag(12400177) && !EventFlag(12400178));
    SetEventFlag(12400177, ON);
    SetEventFlag(12400178, ON);
    ForceAnimationPlayback(2401207, 1, false, false, false);
    WaitFixedTimeSeconds(1);
    CreateObjectfollowingSFX(2401207, 200, 920204);
    CreateObjectfollowingSFX(2401207, 201, 920205);
    WaitFixedTimeSeconds(3);
    SetEventFlag(12400178, OFF);
    SetObjactState(2401006, 2400000, Enabled);
    RestartEvent();
});

// Square Door_Close
$Event(12400126, Default, function() {
    WaitFor((ObjActEventFlag(12400162) || ObjActEventFlag(12400163)) && EventFlag(12400177) && !EventFlag(12400178));
    SetEventFlag(12400177, OFF);
    SetEventFlag(12400178, ON);
    ForceAnimationPlayback(2401207, 2, false, false, false);
    WaitFixedTimeSeconds(1);
    CreateObjectfollowingSFX(2401207, 200, 920204);
    CreateObjectfollowingSFX(2401207, 201, 920205);
    WaitFixedTimeSeconds(3);
    SetEventFlag(12400178, OFF);
    SetObjactState(2401006, 2400000, Enabled);
    RestartEvent();
});

// Square mechanism door_lever does not move
$Event(12400127, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(EventFlag(12400178) && ActionButtonInArea(7100, 2401006));
    DisplayGenericDialog(10010172, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
    RestartEvent();
});

// square mechanism door_initialization
$Event(12400128, Default, function() {
    if (!EventFlag(12400177)) {
        ReproduceObjectAnimation(2401207, 2);
        SetObjactState(2401006, 2400000, Enabled);
        EndEvent();
    }
L0:
    ReproduceObjectAnimation(2401207, 1);
    SetObjactState(2401006, 2400000, Enabled);
});

// save door state_XX
$Event(12400130, Default, function(X0_4, X4_4, X8_4, X12_4) {
    if (EventFlag(X12_4)) {
        ReproduceObjectAnimation(X0_4, X4_4);
        SetObjactState(X0_4, -1, Disabled);
        NotifySoundDampeningOfDoorEvent(X0_4, DoorState.DoorOpening);
        EndEvent();
    }
    WaitFor(ObjActEventFlag(X8_4));
    WaitFixedTimeFrames(0);
});

// church elevator initialization
$Event(12400146, Default, function() {
    flag = EventFlag(12400150);
    WaitFor(flag || !EventFlag(12400150));
    if (!flag.Passed) {
        ReproduceObjectAnimation(2401101, 15);
        SetObjactState(2401003, 2400000, Enabled);
        SetObjactState(2401004, 2400000, Disabled);
    } else {
        ReproduceObjectAnimation(2401101, 0);
        SetObjactState(2401003, 2400000, Disabled);
        SetObjactState(2401004, 2400000, Enabled);
    }
});

// Church elevator descends
$Event(12400147, Default, function() {
    if (!(EventFlag(12400150) && EventFlag(12400151))) {
        WaitFor(
            (EventFlag(12400150) && !EventFlag(12400151) && InArea(10000, 2402054))
                || (EventFlag(12400150) && !EventFlag(12400151) && ObjActEventFlag(12400161)));
    }
L0:
    SetEventFlag(12400151, ON);
    ForceAnimationPlayback(2401101, 1, false, true, false);
    ForceAnimationPlayback(2401101, 13, false, true, false);
    WaitFor(!AllPlayersInArea(2402055));
    ForceAnimationPlayback(2401101, 14, false, true, false);
    SetEventFlag(12400150, OFF);
    SetEventFlag(12400151, OFF);
    SetObjactState(2401003, 2400000, Enabled);
    SetObjactState(2401004, 2400000, Disabled);
    RestartEvent();
});

// Go up the church elevator
$Event(12400148, Default, function() {
    if (!(!EventFlag(12400150) && EventFlag(12400151))) {
        WaitFor(
            (!EventFlag(12400150) && !EventFlag(12400151) && InArea(10000, 2402055))
                || (!EventFlag(12400150) && !EventFlag(12400151) && ObjActEventFlag(12400160)));
    }
L0:
    SetEventFlag(12400151, ON);
    ForceAnimationPlayback(2401101, 16, false, true, false);
    ForceAnimationPlayback(2401101, 17, false, true, false);
    WaitFor(!AllPlayersInArea(2402054));
    ForceAnimationPlayback(2401101, 7, false, true, false);
    SetEventFlag(12400150, ON);
    SetEventFlag(12400151, OFF);
    SetObjactState(2401003, 2400000, Disabled);
    SetObjactState(2401004, 2400000, Enabled);
    RestartEvent();
});

// church elevator mechanism stuck
$Event(12400149, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(
        (EventFlag(12400150) && ActionButtonInArea(7100, 2401003))
            || (!EventFlag(12400150) && ActionButtonInArea(7100, 2401004))
            || (EventFlag(12400151) && ActionButtonInArea(7100, 2401003))
            || (EventFlag(12400151) && ActionButtonInArea(7100, 2401004)));
    DisplayGenericDialog(10010172, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
    RestartEvent();
});

// church root door
$Event(12400155, Default, function() {
    WaitFor((ObjActEventFlag(12400164) || ObjActEventFlag(12400165)) && !EventFlag(12400157) && !EventFlag(12405179));
    SetEventFlag(12400157, ON);
    SetEventFlag(12405179, ON);
    ForceAnimationPlayback(2401208, 1, false, false, false);
    WaitFixedTimeSeconds(1);
    CreateObjectfollowingSFX(2401208, 200, 920204);
    CreateObjectfollowingSFX(2401208, 201, 920205);
    WaitFixedTimeSeconds(3);
    SetEventFlag(12405179, OFF);
    SetObjactState(2401008, 2400000, Enabled);
    RestartEvent();
});

// Church Root Trick Door_Close
$Event(12400156, Default, function() {
    WaitFor((ObjActEventFlag(12400164) || ObjActEventFlag(12400165)) && EventFlag(12400157) && !EventFlag(12405179));
    SetEventFlag(12400157, OFF);
    SetEventFlag(12405179, ON);
    ForceAnimationPlayback(2401208, 2, false, false, false);
    WaitFixedTimeSeconds(1);
    CreateObjectfollowingSFX(2401208, 200, 920204);
    CreateObjectfollowingSFX(2401208, 201, 920205);
    WaitFixedTimeSeconds(3);
    SetEventFlag(12405179, OFF);
    SetObjactState(2401008, 2400000, Enabled);
    RestartEvent();
});

// Chapel door lever stuck
$Event(12400158, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(EventFlag(12405179) && ActionButtonInArea(7100, 2401008));
    DisplayGenericDialog(10010172, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
    RestartEvent();
});

// church door_initialization
$Event(12400159, Default, function() {
    if (!EventFlag(12400157)) {
        ReproduceObjectAnimation(2401208, 2);
        SetObjactState(2401008, 2400000, Enabled);
        EndEvent();
    }
L0:
    ReproduceObjectAnimation(2401208, 1);
    SetObjactState(2401008, 2400000, Enabled);
});

// Opening and closing the gates of the rotunda
$Event(12400760, Restart, function() {
    if (EventFlag(12400160)) {
        ForceAnimationPlayback(2400650, 7020, true, false, false);
        ReproduceObjectAnimation(2401220, 1);
        SetObjactState(2401014, 2400000, Disabled);
        EndEvent();
    }
L0:
    ForceAnimationPlayback(2400650, 7022, true, false, false);
    itemAct = !PlayerHasItem(ItemType.Goods, 4011) && ActionButtonInArea(2400030, 2401220);
    itemAct2 = PlayerHasItem(ItemType.Goods, 4011) && ActionButtonInArea(2400030, 2401220);
    WaitFor(itemAct || itemAct2 || ObjActEventFlag(12400170));
    if (!itemAct.Passed) {
        if (!itemAct2.Passed) {
            SetObjactState(2401014, 2400000, Disabled);
            ForceAnimationPlayback(2400650, 7024, false, false, false);
            WaitFixedTimeFrames(74);
            ForceAnimationPlayback(2400650, 7020, true, false, false);
            WaitFixedTimeFrames(31);
            ForceAnimationPlayback(2401220, 1, false, false, false);
            WaitFixedTimeFrames(30);
            CreateObjectfollowingSFX(2401220, 200, 920204);
            CreateObjectfollowingSFX(2401220, 201, 920205);
            SetEventFlag(12400160, ON);
            EndIf(EventFlag(12401800));
            SetEventFlag(2400, OFF);
            SetEventFlag(2401, OFF);
            SetEventFlag(2405, OFF);
            SetEventFlag(2406, OFF);
            EndEvent();
        }
L2:
        SetObjactState(2401014, 2400000, Disabled);
        RotateCharacter(10000, 2401014, 101310, false);
        WaitFixedTimeSeconds(1);
        ForceAnimationPlayback(2400650, 7023, false, false, false);
        ForceAnimationPlayback(2401014, 1, false, false, false);
        WaitFixedTimeFrames(105);
        ForceAnimationPlayback(2401220, 1, false, false, false);
        WaitFixedTimeFrames(24);
        ForceAnimationPlayback(2400650, 7022, true, false, false);
        WaitFixedTimeFrames(6);
        CreateObjectfollowingSFX(2401220, 200, 920204);
        CreateObjectfollowingSFX(2401220, 201, 920205);
        DisplayGenericDialog(10010174, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
        SetEventFlag(12400160, ON);
        EndIf(EventFlag(12401800));
        SetEventFlag(2400, OFF);
        SetEventFlag(2401, OFF);
        SetEventFlag(2405, OFF);
        SetEventFlag(2406, OFF);
        EndEvent();
    }
L1:
    DisplayGenericDialog(10010173, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
    RestartEvent();
});

// The gate lever in front of the plaza does not work
$Event(12400161, Restart, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(EventFlag(12400160) && ActionButtonInArea(7100, 2401014));
    DisplayGenericDialog(10010172, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
    RestartEvent();
});

// staircase door_initialization
$Event(12400174, Restart, function() {
    if (!EventFlag(12400168)) {
        SetEventFlag(12400167, ON);
    }
L0:
    NoOp();
});

// Staircase door
$Event(12400175, Default, function() {
    if (EventFlag(12400168)) {
        ReproduceObjectAnimation(2401209, 2);
        SetEventFlag(12400169, ON);
    } else {
L0:
        WaitFor(ObjActEventFlag(12400172) || ObjActEventFlag(12400173));
        SetEventFlag(12400167, OFF);
        SetEventFlag(12400169, ON);
        SetEventFlag(12400168, ON);
        SetEventFlag(12405175, ON);
        SetObjactState(2401015, 2400000, Disabled);
        SetObjactState(2401016, 2400000, Disabled);
        ForceAnimationPlayback(2401209, 2, false, false, false);
        WaitFixedTimeSeconds(1);
        CreateObjectfollowingSFX(2401209, 200, 920204);
        CreateObjectfollowingSFX(2401209, 201, 920205);
        WaitFixedTimeSeconds(3);
        SetEventFlag(12405175, OFF);
        SetObjactState(2401015, 2400000, Enabled);
        SetObjactState(2401016, 2400000, Enabled);
    }
L1:
    WaitFor(ObjActEventFlag(12400172) || ObjActEventFlag(12400173));
    SetEventFlag(12400167, ON);
    SetEventFlag(12400168, OFF);
    SetEventFlag(12405175, ON);
    SetObjactState(2401015, 2400000, Disabled);
    SetObjactState(2401016, 2400000, Disabled);
    ForceAnimationPlayback(2401209, 1, false, false, false);
    WaitFixedTimeSeconds(1);
    CreateObjectfollowingSFX(2401209, 200, 920204);
    CreateObjectfollowingSFX(2401209, 201, 920205);
    WaitFixedTimeSeconds(3);
    SetEventFlag(12400169, OFF);
    SetEventFlag(12405175, OFF);
    SetObjactState(2401015, 2400000, Enabled);
    SetObjactState(2401016, 2400000, Enabled);
    RestartEvent();
});

// Staircase door_lever does not move
$Event(12400179, Restart, function(X0_4) {
    SetNetworkSyncState(Disabled);
    WaitFor(EventFlag(12405175) && ActionButtonInArea(7100, X0_4));
    DisplayGenericDialog(10010172, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 0);
    RestartEvent();
});

// Activation of hidden door in ruins
$Event(12400185, Default, function() {
    if (ThisEvent()) {
        ReproduceObjectAnimation(2401012, 1);
        SetObjactState(2401013, 2400000, Disabled);
        EndEvent();
    }
L0:
    WaitFor(ObjActEventFlag(12400123));
    ForceAnimationPlayback(2401012, 1, false, false, false);
});

// Wandering Madness_XX
$Event(12400200, Default, function(X0_4, X4_4) {
    if (ThisEventSlot()) {
        ChangeCharacterEnableState(X0_4, Disabled);
        EndEvent();
    }
L0:
    chrFlag &= CharacterType(10000, TargetType.Alive);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        chrFlag &= EventFlag(X4_4);
    }
    WaitFor(chrFlag);
    WaitFixedTimeSeconds(0);
});

// Unlocked _XX
$Event(12400250, Default, function(X0_4, X4_4, X8_4) {
    EndIf(ThisEventSlot());
    WaitFor(ObjActEventFlag(X0_4));
    DisplayGenericDialog(X4_4, PromptType.OKCANCEL, NumberofOptions.OneButton, X8_4, 3);
});

// Time Zone Change_Cathedral District A
$Event(12400300, Default, function() {
    if (EventFlag(12100856)) {
        BatchSetEventFlags(12405000, 12405002, OFF);
        RandomlySetEventFlagInRange(12405000, 12405002, ON);
        WaitFixedTimeFrames(1);
    }
    if (!EventFlag(9802)) {
        GotoIf(L1, EventFlag(9801));
        if (!EventFlag(9800)) {
        }
L0:
        if (EventFlag(12100956) || EventFlag(12405000)) {
            ActivateMapPart(2404000, Enabled);
            ActivateMapPart(2404001, Disabled);
            ActivateMapPart(2404002, Disabled);
            ActivateMapPart(2404750, Disabled);
            ActivateMapPart(2404751, Disabled);
        }
        else if (EventFlag(12405001)) {
            ActivateMapPart(2404000, Disabled);
            ActivateMapPart(2404001, Enabled);
            ActivateMapPart(2404002, Disabled);
            ActivateMapPart(2404700, Disabled);
            ActivateMapPart(2404701, Disabled);
            DeleteMapSFX(2403400, false);
            DeleteMapSFX(2403401, false);
            DeleteMapSFX(2403402, false);
            DeleteMapSFX(2403403, false);
            DeleteMapSFX(2403404, false);
            DeleteMapSFX(2403405, false);
            DeleteMapSFX(2403406, false);
            DeleteMapSFX(2403407, false);
            DeleteMapSFX(2403408, false);
            DeleteMapSFX(2403409, false);
            DeleteMapSFX(2403410, false);
            DeleteMapSFX(2403411, false);
            DeleteMapSFX(2403412, false);
        }
        else {
            ActivateMapPart(2404000, Disabled);
            ActivateMapPart(2404001, Disabled);
            ActivateMapPart(2404002, Enabled);
            ActivateMapPart(2404700, Disabled);
            ActivateMapPart(2404701, Disabled);
        }
        ChangeCharacterEnableState(2400321, Disabled);
        ChangeCharacterEnableState(2400322, Disabled);
        Goto(L3);
L1:
        if (EventFlag(12100956) || EventFlag(12405001)) {
            ActivateMapPart(2404000, Disabled);
            ActivateMapPart(2404001, Enabled);
            ActivateMapPart(2404002, Disabled);
            ActivateMapPart(2404700, Disabled);
            ActivateMapPart(2404701, Disabled);
            DeleteMapSFX(2403400, false);
            DeleteMapSFX(2403401, false);
            DeleteMapSFX(2403402, false);
            DeleteMapSFX(2403403, false);
            DeleteMapSFX(2403404, false);
            DeleteMapSFX(2403405, false);
            DeleteMapSFX(2403406, false);
            DeleteMapSFX(2403407, false);
            DeleteMapSFX(2403408, false);
            DeleteMapSFX(2403409, false);
            DeleteMapSFX(2403410, false);
            DeleteMapSFX(2403411, false);
            DeleteMapSFX(2403412, false);
        }
        else if (EventFlag(12405000)) {
            ActivateMapPart(2404000, Enabled);
            ActivateMapPart(2404001, Disabled);
            ActivateMapPart(2404002, Disabled);
            ActivateMapPart(2404750, Disabled);
            ActivateMapPart(2404751, Disabled);
        }
        else {
            ActivateMapPart(2404000, Disabled);
            ActivateMapPart(2404001, Disabled);
            ActivateMapPart(2404002, Enabled);
            ActivateMapPart(2404700, Disabled);
            ActivateMapPart(2404701, Disabled);
        }
        ChangeCharacterEnableState(2400321, Enabled);
        ChangeCharacterEnableState(2400322, Enabled);
        SetCharacterBackreadState(2400350, true);
        SetCharacterBackreadState(2400351, true);
        SetCharacterBackreadState(2400352, true);
        SetCharacterBackreadState(2400220, true);
        SetCharacterBackreadState(2400116, true);
        SetCharacterBackreadState(2400125, true);
    } else {
L2:
        if (EventFlag(12100956) || EventFlag(12405002)) {
            ActivateMapPart(2404000, Disabled);
            ActivateMapPart(2404001, Disabled);
            ActivateMapPart(2404002, Enabled);
            ActivateMapPart(2404700, Disabled);
            ActivateMapPart(2404701, Disabled);
        }
        else if (EventFlag(12405000)) {
            ActivateMapPart(2404000, Enabled);
            ActivateMapPart(2404001, Disabled);
            ActivateMapPart(2404002, Disabled);
            ActivateMapPart(2404750, Disabled);
            ActivateMapPart(2404751, Disabled);
        }
        else {
            ActivateMapPart(2404000, Disabled);
            ActivateMapPart(2404001, Enabled);
            ActivateMapPart(2404002, Disabled);
            ActivateMapPart(2404700, Disabled);
            ActivateMapPart(2404701, Disabled);
            DeleteMapSFX(2403400, false);
            DeleteMapSFX(2403401, false);
            DeleteMapSFX(2403402, false);
            DeleteMapSFX(2403403, false);
            DeleteMapSFX(2403404, false);
            DeleteMapSFX(2403405, false);
            DeleteMapSFX(2403406, false);
            DeleteMapSFX(2403407, false);
            DeleteMapSFX(2403408, false);
            DeleteMapSFX(2403409, false);
            DeleteMapSFX(2403410, false);
            DeleteMapSFX(2403411, false);
            DeleteMapSFX(2403412, false);
        }
        ChangeCharacterEnableState(2400321, Enabled);
        ChangeCharacterEnableState(2400322, Enabled);
        SetCharacterBackreadState(2400350, true);
        SetCharacterBackreadState(2400351, true);
        SetCharacterBackreadState(2400352, true);
        SetCharacterBackreadState(2400220, true);
        SetCharacterBackreadState(2400116, true);
        SetCharacterBackreadState(2400125, true);
    }
L3:
    if (EventFlag(12102036) && EventFlag(12100856)) {
        Goto(L4);
    }
    WaitFor(
        EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 9800)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 9801)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 9802));
    RestartEvent();
L4:
    WaitFor(EventFlag(12102065));
    WaitFixedTimeSeconds(5);
    RestartEvent();
});

// Time Zone Change_An Evil God Appears in a Strange Moon Condition
$Event(12400765, Default, function() {
    if (!(EventFlag(9802) || EventFlag(12404001))) {
        DeactivateObject(2400898, Disabled);
        ForceAnimationPlayback(2400898, 0, true, false, false);
        ChangeCharacterDispmask(2400899, 0, OFF);
        ChangeCharacterDispmask(2400899, 2, OFF);
        ChangeCharacterDispmask(2400899, 10, OFF);
        SetSpEffect(2400899, 5686, false);
        SetEventFlag(12405263, ON);
        EndEvent();
    }
L0:
    DeactivateObject(2400898, Enabled);
    ForceAnimationPlayback(2400898, 0, true, false, false);
    ChangeCharacterDispmask(2400899, 0, ON);
    ChangeCharacterDispmask(2400899, 2, ON);
    ChangeCharacterDispmask(2400899, 10, ON);
    SetEventFlag(12405263, OFF);
});

// Treasure Chest_XX
$Event(12400350, Restart, function(X0_4, X4_4) {
    if (ThisEventSlot()) {
        ReproduceObjectAnimation(X0_4, 0);
        SetObjactState(X0_4, -1, Disabled);
        SetObjectTreasureState(X0_4, Enabled);
        EndEvent();
    }
L0:
    WaitFor(ObjActEventFlag(X4_4));
    WaitFixedTimeFrames(10);
    SetObjectTreasureState(X0_4, Enabled);
});

// gatekeeper_open door
$Event(12400401, Restart, function() {
    WaitFor(EventFlag(72400440));
    BatchSetEventFlags(1400, 1402, OFF);
    SetEventFlag(1401, ON);
    ForceAnimationPlayback(2401200, 1, false, true, false);
    SetEventFlag(12400131, ON);
    SaveRequest(0);
});

// Warp the conversation character because the gatekeeper opened the door
$Event(12400402, Default, function() {
    WaitFor(EventFlag(72400440));
    IssueShortWarpRequest(2400830, TargetEntityType.Area, 2402033, -1);
});

// Gatekeeper_Talk with the gate open, increase SAN value
$Event(12400403, Default, function() {
    EndIf(ThisEvent());
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(EventFlag(72400441));
    AwardItemLot(37000);
});

// Increase SAN value with Evil God Throw
$Event(12400410, Default, function() {
    EndIf(ThisEvent());
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(CharacterHasSpEffect(10000, 6421));
    InitializeEvent(0, 9350, 1);
});

// bells ring after nightfall
$Event(12400420, Default, function() {
    SetMapSoundState(2406831, Disabled);
    EndIf(ThisEvent());
    WaitFor(EventFlag(9801));
    WaitFixedTimeSeconds(4);
    SetMapSoundState(2406831, Enabled);
});

// Time Zone Change_Cathedral District B→A
$Event(12400750, Default, function() {
    SetMapSoundState(2406832, Disabled);
    if (!ThisEvent()) {
        WaitFor(ActionButtonInArea(7030, 2401210));
        SetEventFlag(9180, ON);
        WaitFixedTimeFrames(1);
        PlayCutsceneChangeTimePeriodAndWarpPlayer(24000020, CutscenePlayMode.Skippable, 2402200, 24, 0, 10000, 1);
        WaitFixedTimeFrames(1);
        SetEventFlag(9180, OFF);
        SetMapSoundState(2406832, Enabled);
    }
L0:
    ReproduceObjectAnimation(2401210, 2);
    NotifySoundDampeningOfDoorEvent(2401210, DoorState.DoorOpening);
});

// Warp from the Church of Abduction → City of Sacrifice
$Event(12400780, Restart, function(X0_4) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(
        !CharacterDead(X0_4)
            && CharacterDamagedBy(10000, X0_4)
            && HPRatio(10000) == 0
            && EventFlag(9401)
            && EventFlag(9404));
    SetEventFlag(9420, ON);
});

// Kidnapping Appearance
$Event(12400791, Restart, function(X0_4) {
    if (!EventFlag(9802)) {
        EndIf(EventFlag(9453));
    }
L0:
    SetCharacterBackreadState(X0_4, true);
});

// Kidnapper Appears_Enemy Replacement
$Event(12400797, Restart, function() {
    GotoIf(L0, EventFlag(9802));
    GotoIf(S0, !EventFlag(9453));
    SetCharacterBackreadState(2400350, true);
    SetCharacterBackreadState(2400351, true);
    SetCharacterBackreadState(2400352, true);
    EndEvent();
S0:
L0:
    SetCharacterBackreadState(2400362, true);
});

// AC connected elevator initialization
$Event(12400823, Default, function() {
    flag = EventFlag(12400827);
    WaitFor(flag || !EventFlag(12400827));
    if (!flag.Passed) {
        ReproduceObjectAnimation(2401102, 30);
        SetObjactState(2401104, 2400000, Enabled);
        SetObjactState(2401103, 2400000, Disabled);
    } else {
        ReproduceObjectAnimation(2401102, 0);
        SetObjactState(2401104, 2400000, Disabled);
        SetObjactState(2401103, 2400000, Enabled);
    }
});

// AC connected elevator going down
$Event(12400824, Default, function() {
    if (!(EventFlag(12400827) && EventFlag(12400828))) {
        WaitFor(
            (EventFlag(12400827) && !EventFlag(12400828) && InArea(10000, 2402058))
                || (EventFlag(12400827) && !EventFlag(12400828) && ObjActEventFlag(12400169)));
    }
L0:
    SetEventFlag(12400828, ON);
    ForceAnimationPlayback(2401102, 1, false, true, false);
    ForceAnimationPlayback(2401102, 28, false, true, false);
    WaitFor(!AllPlayersInArea(2402059));
    ForceAnimationPlayback(2401102, 29, false, true, false);
    SetEventFlag(12400827, OFF);
    SetEventFlag(12400828, OFF);
    SetObjactState(2401104, 2400000, Enabled);
    SetObjactState(2401103, 2400000, Disabled);
    RestartEvent();
});

// AC connected elevator going up
$Event(12400825, Default, function() {
    if (!(!EventFlag(12400827) && EventFlag(12400828))) {
        WaitFor(
            (!EventFlag(12400827) && !EventFlag(12400828) && InArea(10000, 2402059))
                || (!EventFlag(12400827) && !EventFlag(12400828) && ObjActEventFlag(12400168)));
    }
L0:
    SetEventFlag(12400828, ON);
    ForceAnimationPlayback(2401102, 31, false, true, false);
    ForceAnimationPlayback(2401102, 32, false, true, false);
    WaitFor(!AllPlayersInArea(2402058));
    ForceAnimationPlayback(2401102, 7, false, true, false);
    SetEventFlag(12400827, ON);
    SetEventFlag(12400828, OFF);
    SetObjactState(2401104, 2400000, Disabled);
    SetObjactState(2401103, 2400000, Enabled);
    RestartEvent();
});

// AC connected elevator device stuck
$Event(12400826, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(
        (EventFlag(12400827) && ActionButtonInArea(7100, 2401104))
            || (!EventFlag(12400827) && ActionButtonInArea(7100, 2401103))
            || (EventFlag(12400828) && ActionButtonInArea(7100, 2401104))
            || (EventFlag(12400828) && ActionButtonInArea(7100, 2401103)));
    DisplayGenericDialog(10010172, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
    RestartEvent();
});

// switch to new style_open door_XX
$Event(12400850, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    DeleteMapSFX(X0_4, false);
    DeleteMapSFX(X4_4, false);
    DeleteMapSFX(X8_4, false);
    if (EventFlag(X12_4)) {
        SpawnMapSFX(X4_4);
        SpawnMapSFX(X8_4);
        EndEvent();
    }
    WaitFor(ObjActEventFlag(X16_4));
    WaitFixedTimeSeconds(X20_4);
    SpawnMapSFX(X0_4);
    SpawnOneshotSFX(TargetEntityType.Area, X24_4, -1, X28_4);
    WaitFixedTimeSeconds(4);
    SpawnMapSFX(X4_4);
    SpawnMapSFX(X8_4);
});

// Change new style_Open door_Cathedral
$Event(12400854, Restart, function() {
    DeleteMapSFX(2406711, false);
    DeleteMapSFX(2406712, false);
    DeleteMapSFX(2406713, false);
    if (EventFlag(12400133)) {
        SpawnMapSFX(2406712);
        SpawnMapSFX(2406713);
        EndEvent();
    }
    WaitFor(ObjActEventFlag(12400112));
    WaitFixedTimeSeconds(6);
    SpawnMapSFX(2406711);
    SpawnOneshotSFX(TargetEntityType.Object, 2401204, 200, 920206);
    SpawnOneshotSFX(TargetEntityType.Object, 2401204, 201, 920207);
    WaitFixedTimeSeconds(4);
    SpawnMapSFX(2406712);
    SpawnMapSFX(2406713);
});

// Sleeping guy is about to wake up_XX
$Event(12405000, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    SetCharacterAIId(X0_4, X12_4);
    ForceAnimationPlayback(X0_4, X4_4, true, false, false);
    WaitFor(EntityInRadiusOfEntity(10000, X0_4, 3) || CharacterAIState(X0_4, AIStateType.Alert));
    SetCharacterAIId(X0_4, X16_4);
    ForceAnimationPlayback(X0_4, X8_4, true, false, false);
    WaitFor(CharacterAIState(X0_4, AIStateType.Normal));
    RestartEvent();
});

// something that is likely to happen will happen_XX
$Event(12405010, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    WaitFor(CharacterAIState(X0_4, AIStateType.Recognition) || CharacterAIState(X0_4, AIStateType.Combat));
    SetCharacterAIId(X0_4, X12_4);
    ForceAnimationPlayback(X0_4, X4_4, false, false, false);
    SetEventState(12405000, X8_4, EventEndType.End);
});

// Franken goes to bed at night_The sleeping guy is about to wake up_XX
$Event(12405020, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    WaitFor(EventFlag(9801));
    SetCharacterAIId(X0_4, X12_4);
    ForceAnimationPlayback(X0_4, X4_4, true, false, false);
    WaitFor(EntityInRadiusOfEntity(10000, X0_4, 1) || CharacterAIState(X0_4, AIStateType.Alert));
    SetCharacterAIId(X0_4, X16_4);
    ForceAnimationPlayback(X0_4, X8_4, true, false, false);
    WaitFor(CharacterAIState(X0_4, AIStateType.Normal));
    RestartEvent();
});

// Franken goes to bed at night_Who wakes up_XX
$Event(12405030, Default, function(X0_4, X4_4, X8_4, X12_4) {
    WaitFor(EventFlag(9801));
    WaitFor(CharacterAIState(X0_4, AIStateType.Recognition) || CharacterAIState(X0_4, AIStateType.Combat));
    SetCharacterAIId(X0_4, X12_4);
    ForceAnimationPlayback(X0_4, X4_4, false, false, false);
    SetEventState(12405020, X8_4, EventEndType.End);
});

// Back Alley_Fighting the church messenger wakes up the sleeping guy
$Event(12405060, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    SetCharacterAIId(X0_4, X12_4);
    ForceAnimationPlayback(X0_4, X4_4, true, false, false);
    areaChr = EntityInRadiusOfEntity(10000, X0_4, 3) && CharacterAIState(2400160, AIStateType.Combat);
    dmg = CharacterDamagedBy(X0_4, 10000);
    WaitFor(areaChr || dmg);
    SetCharacterAIId(X0_4, X16_4);
    if (!dmg.Passed) {
        ForceAnimationPlayback(X0_4, X8_4, false, false, false);
    }
});

// forced movement of crowd A_XX
$Event(12405080, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    WaitFor(EventFlag(X0_4));
    RequestCharacterAICommand(X4_4, 10, 0);
    SetCharacterHome(X4_4, X8_4);
    WaitFor(InArea(X4_4, X8_4) || EntityInRadiusOfEntity(X4_4, 10000, X12_4) || CharacterDamagedBy(X4_4, 10000));
    RequestCharacterAICommand(X4_4, -1, 0);
    RequestCharacterAIReplan(X4_4);
});

// set nest
$Event(12405100, Restart, function(X0_4, X4_4, X8_4) {
    area = InArea(10000, 2404306);
    flag = EventFlag(12405431);
    WaitFor((area || flag) && CharacterAIState(X0_4, AIStateType.Normal));
    SetCharacterAIState(X0_4, Disabled);
    if (!flag.Passed) {
        SetCharacterHome(X0_4, X4_4);
    }
    if (!area.Passed) {
        SetCharacterHome(X0_4, X8_4);
    }
    RequestCharacterAICommand(X0_4, 10, 0);
    SetCharacterAIState(X0_4, Enabled);
    RequestCharacterAIReplan(X0_4);
    WaitFor(InArea(X0_4, X4_4) || InArea(X0_4, X8_4));
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
});

// Fire Arrow Trap
$Event(12405110, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    WaitFor(!ObjectDestroyed(X12_4));
    SetEventFlag(X20_4, OFF);
    if (EventFlag(X20_4)) {
        ReproduceObjectAnimation(X4_4, 0);
    } else {
        objArea = !ObjectDestroyed(X12_4) && InArea(10000, X0_4);
        obj = ObjectDestroyed(X12_4);
        WaitFor(objArea || obj);
        GotoIf(S0, obj.Passed);
        GotoIf(S1, objArea.Passed);
    }
S0:
    ForceAnimationPlayback(X4_4, 0, false, true, false);
    EndEvent();
S1:
    PlaySE(X4_4, SoundType.oObject, 990100001);
    ForceAnimationPlayback(X4_4, 0, false, true, false);
    SetEventFlag(X20_4, ON);
    SpawnOneshotSFX(TargetEntityType.Object, X4_4, 101, 150005);
    DeleteMapSFX(X8_4, false);
    EndIf(obj.Passed);
    WaitFixedTimeSeconds(0.2);
    CreatePlaylog(X24_4);
    ShootBullet(2400000, X12_4, 101, 5071, 0, X16_4, 0);
    PlaySE(X12_4, SoundType.aEnvironmentalSound, 243007000);
    SpawnOneshotSFX(TargetEntityType.Object, X12_4, 101, 929208);
    WaitFixedTimeSeconds(0.7);
    ShootBullet(2400000, X12_4, 101, 5071, 0, X16_4, 0);
    PlaySE(X12_4, SoundType.aEnvironmentalSound, 243007000);
    SpawnOneshotSFX(TargetEntityType.Object, X12_4, 101, 929208);
    WaitFixedTimeSeconds(0.7);
    ShootBullet(2400000, X12_4, 101, 5071, 0, X16_4, 0);
    PlaySE(X12_4, SoundType.aEnvironmentalSound, 243007000);
    SpawnOneshotSFX(TargetEntityType.Object, X12_4, 101, 929208);
    WaitFixedTimeSeconds(3);
    WaitFor(!InArea(10000, X0_4) && !ObjectDestroyed(X12_4));
    SetEventFlag(X20_4, OFF);
    PlaySE(X12_4, SoundType.aEnvironmentalSound, 243007001);
    PlaySE(X4_4, SoundType.oObject, 990100001);
    ForceAnimationPlayback(X4_4, 1, false, true, false);
    RestartEvent();
});

// special effect settings
$Event(12405120, Default, function(X0_4, X4_4) {
    WaitFixedTimeFrames(1);
    SetSpEffect(X0_4, X4_4, false);
});

// Logic ON_XX when driving backwards into a back alley
$Event(12405130, Restart, function(X0_4, X4_4, X8_4) {
    WaitFor(
        (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, 2402151));
    SetCharacterAIState(X0_4, Enabled);
    SetEventState(X4_4, X8_4, EventEndType.End);
});

// Back alley crowd moves to sniping point
$Event(12405140, Restart, function() {
    if (ThisEvent()) {
        SetCharacterAIId(2400111, 263381);
        EndEvent();
    }
L0:
    WaitFor(CharacterBackreadStatus(2400111));
    SetCharacterAIState(2400111, Disabled);
    flag = EventFlag(12405681);
    chrFlagDmgArea = CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.WhitePhantom)
        || flag
        || HasDamageType(2400111, 10000, DamageType.Unspecified)
        || (chrFlagDmgArea && EntityInRadiusOfEntity(10000, 2400111, 5));
    WaitFor(chrFlagDmgArea);
    SetCharacterAIState(2400111, Enabled);
    EndIf(!flag.Passed);
    SetCharacterAIId(2400111, 263380);
    WaitFor(
        InArea(2400111, 2402046)
            || HasDamageType(2400111, 10000, DamageType.Unspecified)
            || EntityInRadiusOfEntity(10000, 2400111, 5));
    SetCharacterAIId(2400111, 263381);
    RequestCharacterAIReplan(2400111);
});

// Infected beggar_transform_XX
$Event(12405150, Default, function(X0_4, X4_4) {
    WaitFixedTimeFrames(10);
    if (ThisEventSlot()) {
        EndIf(EventFlag(1210));
        SetCharacterBackreadState(2400756, false);
        SetCharacterBackreadState(X0_4, true);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(X4_4));
    SetCharacterBackreadState(2400756, false);
    SetCharacterInvincibility(X0_4, Enabled);
    WaitFor(CharacterBackreadStatus(2400756));
    if (!CharacterType(10000, TargetType.Alive)) {
        WaitFixedTimeFrames(60);
        SetCharacterBackreadState(X0_4, true);
        EndEvent();
    }
L1:
    ForceAnimationPlayback(X0_4, 103073, false, true, false);
    SetCharacterBackreadState(X0_4, true);
    CharacterWarpRequest(2400756, TargetEntityType.Area, 2404507, -1);
    SetCharacterGravity(2400756, Enabled);
    ForceAnimationPlayback(2400756, 3030, false, false, false);
    SetCharacterAIState(2400756, Enabled);
    SetCharacterHome(2400756, 2404507);
    BatchSetEventFlags(1200, 1219, OFF);
    SetEventFlag(1207, ON);
    SetEventFlag(9432, ON);
    SaveRequest(0);
});

// Infected beggar_standup flag
$Event(12405157, Default, function() {
    WaitFor(CharacterHasSpEffect(2400755, 153) || CharacterHasSpEffect(2400759, 153));
    WaitFixedTimeFrames(0);
});

// Infected beggar_kill count is 1 or more flag
$Event(12405158, Default, function() {
    WaitFor(EventValue(72400372, 2) != 0);
    WaitFixedTimeFrames(0);
});

// Bloodline Hunting_Rise Judgment
$Event(12405159, Default, function() {
    WaitFor(CharacterHasSpEffect(2400760, 151));
    WaitFor(!CharacterHasSpEffect(2400760, 151));
    RestartIf(!CharacterBackreadStatus(2400760));
    SetEventFlag(12405160, ON);
});

// Stairs franken round trip switch
$Event(12405195, Restart, function() {
    area = InArea(2400203, 2402411);
    area2 = InArea(2400203, 2402412);
    WaitFor(area || area2);
    if (!area2.Passed) {
        WaitFor(InArea(2400203, 2402411));
        WaitFor(InArea(2400203, 2402406));
        if (!EventFlag(12400169)) {
            ChangeCharacterPatrolBehavior(2400203, 2403111);
        } else {
L0:
            ChangeCharacterPatrolBehavior(2400203, 2403112);
            RestartEvent();
        }
    }
L1:
    WaitFor(InArea(2400203, 2402412));
    WaitFor(InArea(2400203, 2402407));
    if (!EventFlag(12400169)) {
        ChangeCharacterPatrolBehavior(2400203, 2403110);
    } else {
L2:
        ChangeCharacterPatrolBehavior(2400203, 2403113);
    }
L3:
    RestartEvent();
});

// Enemies opening the lever only for the first time
$Event(12405200, Restart, function() {
    WaitFor(!EventFlag(12400168));
    WaitFixedTimeFrames(1);
    RequestObjactActivation(2401015, 2400000, -1, 2400113);
    RestartEvent();
});

// Church messenger changes appearance depending on SAN value
$Event(12405210, Restart, function(X0_4, X4_4) {
    EndIf(!EventFlag(12404002));
    ChangeCharacterDispmask(X0_4, 3, OFF);
    ChangeCharacterDispmask(X0_4, 4, ON);
    SetSpEffect(X0_4, X4_4, false);
});

// The messenger of the church changes appearance depending on the SAN value (scythe, cross)
$Event(12405220, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(!EventFlag(12404002));
    SetSpEffect(X0_4, X4_4, false);
    SetSpEffect(X0_4, X8_4, false);
    SetSpEffect(X0_4, X12_4, false);
});

// Staircase franken looks around
$Event(12405240, Restart, function() {
    area = InArea(2400203, 2404311) || InArea(10000, 2404311);
    chr = !CharacterTargetedBy(2400203, 10000);
    chr2 = CharacterTargetedBy(2400203, 10000);
    WaitFor(area && (chr || chr2) && !EventFlag(9801));
    PlaySE(2404290, SoundType.aEnvironmentalSound, 20011002);
    WaitFixedTimeFrames(40);
    EndIf(chr2.Passed);
    ForceAnimationPlayback(2400203, 3039, false, false, false);
});

// Apply a special effect to the messenger with the SAN value
$Event(12405241, Restart, function() {
    if (!EventFlag(12404003)) {
        SetCharacterBackreadState(2400650, true);
        EndEvent();
    }
L0:
    SetCharacterBackreadState(2400650, false);
});

// NavMesh Node Bank_XX
$Event(12405250, Restart, function(X0_4, X4_4, X8_4) {
    flag = !EventFlag(X0_4);
    flag2 = EventFlag(X0_4);
    WaitFor(flag || flag2);
    if (!flag2.Passed) {
        ModifyNavimeshConnectionBitflag(X4_4, NavimeshType.Solid, BitopType.Delete);
    } else {
        ModifyNavimeshConnectionBitflag(X4_4, NavimeshType.Solid, BitopType.Add);
    }
    WaitFor(EventFlag(X8_4));
    RestartEvent();
});

// NavMesh Node Bank_Reverse_XX
$Event(12405251, Restart, function(X0_4, X4_4, X8_4) {
    flag = EventFlag(X0_4);
    flag2 = !EventFlag(X0_4);
    WaitFor(flag || flag2);
    if (!flag2.Passed) {
        ModifyNavimeshConnectionBitflag(X4_4, NavimeshType.Solid, BitopType.Delete);
    } else {
        ModifyNavimeshConnectionBitflag(X4_4, NavimeshType.Solid, BitopType.Add);
    }
    WaitFor(EventFlag(X8_4));
    RestartEvent();
});

// Evil God Throw Blackout
$Event(12405259, Restart, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(CharacterHasEventMessage(2400899, 700) && CharacterHasSpEffect(10000, 5577));
    DisplayBanner(TextBannerType.StadiumLoss);
    RestartEvent();
});

// Evil god anime forced playback
$Event(12405260, Restart, function() {
    WaitFor(
        (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, 2402018));
    CreatePlaylog(2);
    ForceAnimationPlayback(2400899, 3000, false, false, false);
    WaitFixedTimeFrames(250);
    RestartEvent();
});

// Evil God Throw Animation Forced Playback
$Event(12405261, Restart, function() {
    WaitFor(CharacterDamagedBy(10000, 2402018));
    WaitFixedTimeSeconds(3);
    ForceAnimationPlayback(10000, 9580, false, true, false);
    RestartEvent();
});

// De-invisibility of Evil God when throwing Evil God
$Event(12405262, Restart, function() {
    WaitFor(EventFlag(12405263) && CharacterHasEventMessage(2400899, 10));
    ChangeCharacterDispmask(2400899, 0, ON);
    ChangeCharacterDispmask(2400899, 2, ON);
    ChangeCharacterDispmask(2400899, 10, ON);
    SetSpEffect(2400899, 5687, false);
    ClearSpEffect(2400899, 5686);
    WaitFor(CharacterHasEventMessage(2400899, 20));
    SetSpEffect(2400899, 5686, false);
    ClearSpEffect(2400899, 5687);
    RestartEvent();
});

// Go to DLC map with Evil God Throw
$Event(12405263, Restart, function() {
    WaitFor(CharacterHasEventMessage(2400899, 710) && PlayerHasItem(ItemType.Goods, 4311));
    SetCharacterImmortality(10000, Enabled);
    WaitFixedTimeFrames(30);
    SetEventFlag(9180, ON);
    WaitFixedTimeFrames(1);
    if (!HasMultiplayerState(MultiplayerState.Multiplayer)) {
        PlayCutsceneToPlayer(24000000, CutscenePlayMode.Skippable, 10000);
    } else {
L0:
        PlayCutsceneToPlayer(24000000, CutscenePlayMode.Unskippable, 10000);
    }
L1:
    WaitFixedTimeFrames(1);
    SetEventFlag(9180, OFF);
    EndIf(!CharacterType(10000, TargetType.Alive));
    SetEventFlag(12401000, ON);
    WarpPlayerToRespawnPoint(3402959);
});

// PlayLog_Cathedral Street A_Door closing area invasion
$Event(12405270, Restart, function() {
    WaitFor(InArea(10000, 2402190));
    CreatePlaylog(26);
});

// PlayLog_Cathedral Street A_Shortcut Area Invasion
$Event(12405271, Restart, function() {
    WaitFor(InArea(10000, 2402191));
    CreatePlaylog(56);
});

// PlayLog_Cathedral Street A_Trap Area Invasion
$Event(12405272, Restart, function() {
    WaitFor(InArea(10000, 2402192));
    CreatePlaylog(90);
});

// PlayLog_Cathedral Street A_Trap activation
$Event(12405273, Restart, function() {
    WaitFor(InArea(10000, 2402193));
    CreatePlaylog(2);
});

// change team type
$Event(12405289, Restart, function() {
    SetCharacterTeamType(2400000, TeamType.Human);
});

// Switch patrol information_region invasion
$Event(12405300, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    WaitFor(InArea(X0_4, X4_4));
    ChangeCharacterPatrolBehavior(X0_4, X8_4);
    SetEventFlag(X12_4, OFF);
});

// Switch cycle information_Return from back read
$Event(12405320, Restart, function() {
    WaitFor(EventFlag(12405300) || EventFlag(12405301) || EventFlag(12405302) || EventFlag(12405303));
    WaitFor(!CharacterBackreadStatus(2400300));
    WaitFor(CharacterBackreadStatus(2400300));
    flag = EventFlag(12405300);
    flag2 = EventFlag(12405301);
    flag3 = EventFlag(12405302);
    flag4 = EventFlag(12405303);
    WaitFor(flag || flag2 || flag3 || flag4);
    WaitFixedTimeSeconds(2);
    if (flag.Passed) {
        ChangeCharacterPatrolBehavior(2400300, 2403101);
        RestartEvent();
    }
    if (flag2.Passed) {
        ChangeCharacterPatrolBehavior(2400300, 2403102);
        RestartEvent();
    }
    if (flag3.Passed) {
        ChangeCharacterPatrolBehavior(2400300, 2403103);
        RestartEvent();
    }
    if (flag4.Passed) {
        ChangeCharacterPatrolBehavior(2400300, 2403104);
        RestartEvent();
    }
});

// Brain Eaters in the underground shopping center are on special standby_XX
$Event(12405330, Restart, function(X0_4) {
    ForceAnimationPlayback(X0_4, 7000, true, false, false);
    WaitFor(
        ((CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && EntityInRadiusOfEntity(X0_4, 10000, 4))
            || HasDamageType(X0_4, -1, DamageType.Unspecified));
    ForceAnimationPlayback(X0_4, 7001, false, false, false);
    RequestCharacterAIReplan(X0_4);
});

// wheelchair begins strafing
$Event(12405335, Restart, function() {
    WaitFor(CharacterBackreadStatus(2400421));
    SetCharacterAIState(2400421, Disabled);
    area = InArea(10000, 2402031);
    area2 = EntityInRadiusOfEntity(10000, 2400421, 5);
    WaitFor(area || area2);
    if (!area2.Passed) {
        ForceAnimationPlayback(2400421, 3011, false, false, false);
    }
    SetCharacterAIState(2400421, Enabled);
});

// Change enemy patrol information_2 areas_XX
$Event(12405350, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    if (!ThisEventSlot()) {
        WaitFor(
            (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
                && (InArea(10000, X4_4) || InArea(10000, X16_4)));
    }
L0:
    SetCharacterHome(X0_4, X8_4);
    ChangeCharacterPatrolBehavior(X0_4, X12_4);
    EndIf(ThisEventSlot());
    RequestCharacterAIReplan(X0_4);
});

// Wandering Madness (small) escapes along the route
$Event(12405360, Restart, function() {
    if (!ThisEventSlot()) {
        WaitFor(CharacterBackreadStatus(2400371));
        SetSpEffect(2400371, 5000, false);
        WaitFor(CharacterAIState(2400371, AIStateType.Combat));
    }
L0:
    SetCharacterHome(2400371, 2404085);
    ChangeCharacterPatrolBehavior(2400371, 2403106);
    WaitFor(InArea(2400371, 2404085));
    ClearSpEffect(2400371, 5000);
    RequestCharacterAICommand(2400371, -1, 0);
    RequestCharacterAIReplan(2400371);
});

// Wandering madness_Come out of the church and run away_XX
$Event(12405365, Restart, function(X0_4, X4_4, X8_4) {
    if (!ThisEventSlot()) {
        WaitFor(CharacterBackreadStatus(X0_4));
        SetSpEffect(X0_4, 5000, false);
        WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    }
L0:
    SetCharacterHome(X0_4, X4_4);
    ChangeCharacterPatrolBehavior(X0_4, X8_4);
    RequestCharacterAIReplan(X0_4);
    WaitFor(InArea(X0_4, X4_4));
    ClearSpEffect(X0_4, 5000);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
});

// Annihilate an enemy with a strange moon
$Event(12405370, Restart, function(X0_4) {
    WaitFor(EventFlag(9802));
    SetCharacterBackreadState(X0_4, true);
});

// Enemy_nest switch before connection
$Event(12405380, Default, function(X0_4, X4_4, X8_4) {
    WaitFor(CharacterAIState(X0_4, AIStateType.Recognition) || CharacterAIState(X0_4, AIStateType.Combat));
    SetCharacterHome(X0_4, X4_4);
    WaitFor(CharacterAIState(X0_4, AIStateType.Normal));
    SetCharacterHome(X0_4, X8_4);
    RestartEvent();
});

// Sacrifice connection NPC defeat_XX
$Event(12400865, Default, function(X0_4) {
    if (ThisEventSlot()) {
        SetCharacterBackreadState(X0_4, true);
        ChangeCharacterEnableState(X0_4, Disabled);
        ForceCharacterTreasure(X0_4);
        EndEvent();
    }
L0:
    WaitFor(CharacterDead(X0_4));
    WaitFixedTimeSeconds(0);
});

// Medical Society's Franken (axe) site damage_XX
$Event(12405400, Restart, function(X0_2, X4_4, X8_2, X12_4, X16_4, X20_4, X24_4, X28_4) {
    WaitFor(EventFlag(X20_4));
    hpDmgFlag = NPCPartHP(X28_4, X4_4) <= 0 && CharacterDamagedBy(X28_4, 10000) && EventFlag(X24_4);
    hpFlag = HPRatio(X28_4) <= 0 && EventFlag(X20_4);
    WaitFor(hpDmgFlag || hpFlag);
    EndIf(hpFlag.Passed);
    if (!EventFlag(X20_4)) {
        SetNPCPartHP(X28_4, X4_4, 1, false);
        RestartEvent();
    }
    CreateNPCPart(X28_4, X0_2, X8_2, 9999999, 1, 1, false, false);
    SetNPCPartSEAndSFX(X28_4, X4_4, 65, 65);
    RequestCharacterAnimationReset(X28_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X28_4, X12_4, false, false, false);
    WaitFor(CharacterHasEventMessage(X28_4, 400));
    SetSpEffect(X28_4, X16_4, false);
    SetEventFlag(X24_4, OFF);
    WaitFor(CharacterHasEventMessage(X28_4, 300));
    SetNPCPartHP(X28_4, X4_4, 80, true);
    SetNPCPartSEAndSFX(X28_4, X4_4, 64, 64);
    ClearSpEffect(X28_4, X16_4);
    RequestCharacterAICommand(X28_4, -1, 0);
    RequestCharacterAIReplan(X28_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Medical Association Franken (axe) site registration_XX
$Event(12405430, Restart, function(X0_2, X4_4, X8_2, X12_4, X16_4, X20_4) {
    WaitFor(EntityInRadiusOfEntity(X20_4, 10000, 10));
    CreateNPCPart(X20_4, X0_2, X8_2, X12_4, 1, 1, false, false);
    SetNPCPartSEAndSFX(X20_4, X4_4, 64, 64);
    SetEventFlag(X16_4, ON);
});

// Medical Association Franken (axe) Part destruction timing limit_XX
$Event(12405460, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_1, X17_1) {
    ChangeCharacterHitmask(X12_4, X16_1, OFF);
    ChangeCharacterHitmask(X12_4, X17_1, ON);
    WaitFor(CharacterHasEventMessage(X12_4, X0_4));
    SetEventFlag(X8_4, ON);
    ChangeCharacterHitmask(X12_4, X16_1, ON);
    ChangeCharacterHitmask(X12_4, X17_1, OFF);
    WaitFor(CharacterHasEventMessage(X12_4, X4_4));
    SetEventFlag(X8_4, OFF);
    RestartEvent();
});

// Generic Resident_SFX control
$Event(12405790, Restart, function(X0_4, X4_4, X8_4) {
    DeleteObjectfollowingSFX(X0_4, true);
    EndIf(EventFlag(X4_4));
    CreateObjectfollowingSFX(X0_4, 200, X8_4);
});

// General-purpose resident SE regeneration
$Event(12405800, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    SetMapSoundState(X0_4, Disabled);
    EndIf(EventFlag(X12_4));
    WaitFor(!EventFlag(X4_4) && !EventFlag(X8_4));
    SetMapSoundState(X0_4, Enabled);
    WaitFor(EventFlag(X4_4) || EventFlag(X8_4));
    SetMapSoundState(X0_4, Disabled);
    RestartEvent();
});

// Enemy starts moving to designated point_XX
$Event(12405810, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(EventFlag(X16_4));
    if (!ThisEventSlot()) {
        WaitFor(
            (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
                && InArea(10000, X4_4));
    }
L0:
    SetCharacterHome(X0_4, X8_4);
    RequestCharacterAICommand(X0_4, X12_4, 0);
    RequestCharacterAIReplan(X0_4);
});

// Enemy has moved to designated point_XX
$Event(12405820, Restart, function(X0_4, X4_4) {
    if (!ThisEventSlot()) {
        WaitFor(InArea(X0_4, X4_4));
    }
L0:
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
});

// Enemy stops moving to designated point_XX
$Event(12405840, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(EventFlag(X8_4));
    chr = CharacterAIState(X0_4, AIStateType.Recognition)
        || CharacterAIState(X0_4, AIStateType.Alert)
        || CharacterAIState(X0_4, AIStateType.Combat);
    flag = EventFlag(X8_4);
    WaitFor(chr || flag);
    EndIf(flag.Passed);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    chr2 = CharacterAIState(X0_4, AIStateType.Normal);
    flag2 = EventFlag(X8_4);
    WaitFor(chr2 || flag2);
    EndIf(flag2.Passed);
    RequestCharacterAICommand(X0_4, X4_4, 0);
    RequestCharacterAIReplan(X0_4);
    RestartEvent();
});

// Enemy avatar starts moving to designated point with OBJ destruction
$Event(12405850, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(EventFlag(X16_4));
    if (!ThisEventSlot()) {
        ForceAnimationPlayback(X0_4, 7013, true, false, false);
        WaitFor(ObjectDestroyed(X4_4) || EntityInRadiusOfEntity(10000, X0_4, 4) || CharacterDamagedBy(X0_4, 10000));
        WaitFixedTimeFrames(0);
        ForceAnimationPlayback(X0_4, 7012, false, false, false);
    }
L0:
    SetCharacterHome(X0_4, X8_4);
    ForceAnimationPlayback(X0_4, 7011, false, false, false);
    ForceAnimationPlayback(X0_4, 7012, false, false, false);
    RequestCharacterAICommand(X0_4, X12_4, 0);
    RequestCharacterAIReplan(X0_4);
});

// Defeat enemy avatar
$Event(12400860, Default, function() {
    if (EventFlag(12400861)) {
        ChangeCharacterEnableState(2400450, Disabled);
        EndEvent();
    }
L0:
    WaitFor(CharacterDead(2400450));
    if (!EventFlag(6333)) {
        AwardItemLot(75002400);
    } else {
        AwardItemLot(75002405);
    }
    SetEventFlag(12400861, ON);
});

// logic ON_XX
$Event(12405600, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    SetCharacterAIState(X0_4, Disabled);
    chr = CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom);
    areaChr = InArea(10000, X4_4) && chr;
    areaChr2 = EntityInRadiusOfEntity(10000, X0_4, X8_4) && chr;
    dmg = CharacterDamagedBy(X0_4, 10000);
    WaitFor(areaChr || areaChr2 || dmg);
    GotoIf(S0, areaChr2.Passed);
    GotoIf(S0, dmg.Passed);
    WaitFixedTimeSeconds(X12_4);
S0:
    SetCharacterAIState(X0_4, Enabled);
    WaitFixedTimeFrames(1);
    RequestCharacterAIReplan(X0_4);
});

// Logic ON_SC church messenger 2nd
$Event(12405660, Restart, function() {
    SetCharacterAIState(2400114, Disabled);
    WaitFor(
        InArea(2400122, 2404151)
            || CharacterDamagedBy(2400114, 10000)
            || ((CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
                && (InArea(10000, 2402082) || EntityInRadiusOfEntity(2400114, 10000, 5))));
    SetCharacterAIState(2400114, Enabled);
    RequestCharacterAIReplan(2400114);
});

// logic ON_XX_2 area monitoring
$Event(12405670, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    SetCharacterAIState(X0_4, Disabled);
    chr = CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom);
    WaitFor(
        (InArea(10000, X4_4) && chr)
            || (InArea(10000, X8_4) && chr)
            || (EntityInRadiusOfEntity(10000, X0_4, X12_4) && chr)
            || CharacterDamagedBy(X0_4, 10000));
    WaitFixedTimeSeconds(X16_4);
    SetCharacterAIState(X0_4, Enabled);
    WaitFixedTimeFrames(1);
    RequestCharacterAIReplan(X0_4);
});

// Logic ON_XX_ Start moving when the stair gate opens
$Event(12405675, Restart, function(X0_4) {
    SetCharacterAIState(X0_4, Disabled);
    WaitFor(InArea(10000, 2404332) || CharacterDamagedBy(X0_4, 10000) || EntityInRadiusOfEntity(X0_4, 10000, 3));
    SetCharacterAIState(X0_4, Enabled);
    WaitFixedTimeFrames(1);
    RequestCharacterAIReplan(X0_4);
});

// Calling for reinforcements in the back alley plaza_calling role
$Event(12405680, Restart, function() {
    WaitFor(CharacterTargetedBy(2400106, 10000));
    WaitFixedTimeFrames(1);
    ForceAnimationPlayback(2400106, 3010, false, true, false);
    WaitFixedTimeFrames(75);
    WaitFor(HPRatio(2400106) == 1);
    SetEventFlag(12405681, ON);
    ForceAnimationPlayback(2400106, 3009, false, true, false);
});

// Calling for reinforcements at the back alley plaza_Called role
$Event(12405682, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    SetCharacterAIState(X0_4, Disabled);
    SetCharacterAnimationState(X4_4, Disabled);
    dmg = CharacterDamagedBy(X0_4, 10000);
    chrArea = (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
        && EntityInRadiusOfEntity(X0_4, 10000, 10);
    WaitFor(dmg || chrArea || EventFlag(12405681));
    SetCharacterAIState(X0_4, Enabled);
    if (EventFlag(12405681)) {
        WaitFixedTimeSeconds(X8_4);
        SetEventPoint(X0_4, X4_4, 1);
        RequestCharacterAICommand(X0_4, 90, 0);
        RequestCharacterAIReplan(X0_4);
        WaitFor(
            EntityInRadiusOfEntity(X0_4, X4_4, 4)
                || ((CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
                    && EntityInRadiusOfEntity(X0_4, 10000, 3)));
        if (!chrArea.Passed) {
            SetSpEffect(X0_4, 4662, false);
            RequestCharacterAICommand(X0_4, -1, 0);
            RequestCharacterAIReplan(X0_4);
            WaitRandomTimeSeconds(1, 2);
            GotoIf(S0, EventFlag(X12_4));
            WaitRandomTimeSeconds(1, 2);
            GotoIf(S0, EventFlag(X12_4));
            WaitRandomTimeSeconds(1, 2);
            GotoIf(S0, EventFlag(X12_4));
        }
        WaitRandomTimeSeconds(1, 2);
        GotoIf(S0, EventFlag(X12_4));
    }
    WaitRandomTimeSeconds(1, 2);
    if (!EventFlag(X12_4)) {
        WaitRandomTimeSeconds(1, 2);
    }
S0:
    WaitFixedTimeSeconds(X16_4);
    ClearSpEffect(X0_4, 4662);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
});

// Reinforcements in the Back Alley Square_Battle Start Flag
$Event(12405686, Restart, function(X0_4) {
    WaitFor(
        ((CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && EntityInRadiusOfEntity(X0_4, 10000, 2))
            || HasDamageType(X0_4, 10000, DamageType.Unspecified)
            || CharacterAIState(X0_4, AIStateType.Recognition)
            || CharacterAIState(X0_4, AIStateType.Alert)
            || CharacterAIState(X0_4, AIStateType.Combat));
    WaitFixedTimeFrames(1);
});

// Back Alley Square_Stop at patrol point
$Event(12405690, Restart, function() {
    WaitFor(InArea(2400106, 2404111));
    SetSpEffect(2400106, 5002, false);
    WaitFor(InArea(2400106, 2404113));
    WaitFixedTimeFrames(30);
    ClearSpEffect(2400106, 5002);
    RestartEvent();
});

// lonely old woman_initialization
$Event(12400500, Default, function() {
    if (CharacterType(10000, TargetType.Alive)) {
        if (EventFlag(1193)) {
            BatchSetEventFlags(1180, 1199, OFF);
            SetEventFlag(1181, ON);
        }
L1:
        if (EventFlag(1181) && EventFlag(9801)) {
            BatchSetEventFlags(1180, 1199, OFF);
            SetEventFlag(1185, ON);
        }
L2:
        if (EventFlag(9467) && EventFlag(1185)) {
            BatchSetEventFlags(1180, 1199, OFF);
            SetEventFlag(1186, ON);
        }
L3:
        if (EventFlag(1186) && EventFlag(72400900)) {
            BatchSetEventFlags(1180, 1199, OFF);
            SetEventFlag(1187, ON);
        }
L9:
        if (EventFlag(1187) && EventFlag(72400919)) {
            if (!EventFlag(72400918)) {
                SetEventFlag(72400918, ON);
            } else {
                BatchSetEventFlags(1180, 1199, OFF);
                SetEventFlag(1188, ON);
            }
        }
L4:
        if (EventFlag(1188) && EventFlag(72400350)) {
            BatchSetEventFlags(1180, 1199, OFF);
            SetEventFlag(1189, ON);
        }
L5:
        SetEventFlag(72400348, OFF);
        SetEventFlag(72400356, OFF);
    }
L6:
    SetCharacterGravity(2400730, Disabled);
    SetCharacterMaphits(2400730, true);
    SetCharacterGravity(2400732, Disabled);
    SetCharacterMaphits(2400732, true);
    GotoIf(L0, EventFlag(1181));
    GotoIf(L0, EventFlag(1184));
    GotoIf(L5, EventFlag(1185));
    GotoIf(L0, EventFlag(1186));
    GotoIf(L0, EventFlag(1188));
    GotoIf(L1, EventFlag(1191));
    GotoIf(L2, EventFlag(1189));
    GotoIf(L3, EventFlag(1183));
    GotoIf(L4, EventFlag(1189));
    GotoIf(L4, EventFlag(1187));
    SetCharacterBackreadState(2400730, true);
    SetCharacterBackreadState(2400732, true);
    DeactivateObject(2400731, Disabled);
    EndEvent();
L0:
    SetCharacterBackreadState(2400730, false);
    SetCharacterBackreadState(2400732, true);
    DeactivateObject(2400731, Enabled);
    RequestObjectRestoration(2400731);
    ForceAnimationPlayback(2400730, 103060, true, false, true);
    IssueShortWarpRequest(2400730, TargetEntityType.Area, 2404501, -1);
    EndEvent();
L5:
    SetCharacterBackreadState(2400730, false);
    SetCharacterBackreadState(2400732, true);
    DeactivateObject(2400731, Enabled);
    ForceAnimationPlayback(2400730, 103066, true, false, true);
    IssueShortWarpRequest(2400730, TargetEntityType.Area, 2404501, -1);
    EndEvent();
L1:
    SetCharacterBackreadState(2400730, true);
    SetCharacterBackreadState(2400732, true);
    DeactivateObject(2400731, Enabled);
    RequestObjectRestoration(2400731);
    EzstateInstructionRequest(2400730, 3, 1);
    IssueShortWarpRequest(2400730, TargetEntityType.Area, 2404501, -1);
    ForceCharacterTreasure(2400730);
    EndEvent();
L2:
    SetCharacterBackreadState(2400730, true);
    SetCharacterBackreadState(2400732, false);
    DeactivateObject(2400731, Enabled);
    ReproduceObjectDestruction(2400731, 1);
    EzstateInstructionRequest(2400732, 10, 1);
    IssueShortWarpRequest(2400732, TargetEntityType.Area, 2404382, -1);
    ForceCharacterTreasure(2400732);
    EndEvent();
L3:
    SetCharacterBackreadState(2400730, false);
    SetCharacterBackreadState(2400732, true);
    DeactivateObject(2400731, Enabled);
    RequestObjectRestoration(2400731);
    EzstateInstructionRequest(2400730, 3, 1);
    IssueShortWarpRequest(2400730, TargetEntityType.Area, 2404501, -1);
    ForceCharacterTreasure(2400730);
    EndEvent();
L4:
    SetCharacterBackreadState(2400730, true);
    SetCharacterBackreadState(2400732, true);
    DeactivateObject(2400731, Enabled);
    ReproduceObjectDestruction(2400731, 1);
    EndEvent();
});

// lonely old woman_state change_dead
$Event(12400501, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    EndIf(EventFlag(1183));
    EndIf(EventFlag(1189));
    EndIf(EventFlag(1191));
    WaitFor(CharacterDead(2400730));
    BatchSetEventFlags(1180, 1199, OFF);
    SetEventFlag(1183, ON);
    SaveRequest(0);
});

// Lonely old woman_Blood control
$Event(12400505, Default, function() {
    GotoIf(L0, ThisEvent());
    GotoIf(L0, EventFlag(1191));
    ActivateMapPart(2404602, Disabled);
    WaitFor(EventFlag(6001));
    EndEvent();
L0:
    ActivateMapPart(2404602, Enabled);
    EndEvent();
});

// Lonely old woman_anime control_take damage
$Event(12400507, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(HasDamageType(2400730, -1, DamageType.Unspecified) && HPRatio(2400730) != 0);
    if (!EventFlag(1185)) {
        ForceAnimationPlayback(2400730, 103063, false, false, false);
        RestartEvent();
    }
L0:
    ForceAnimationPlayback(2400730, 103067, false, false, false);
    RestartEvent();
});

// lonely old woman_anime control_death
$Event(12400508, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(HPRatio(2400730) == 0);
    ForceAnimationPlayback(2400730, 103064, false, false, false);
});

// Lonely old woman_anime control_wait
$Event(12400512, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor((CharacterHasSpEffect(2400730, 151) || CharacterHasSpEffect(2400730, 153)) && HPRatio(2400730) != 0);
    if (!EventFlag(1185)) {
        GotoIf(L1, EventFlag(9432));
        ForceAnimationPlayback(2400730, 103060, false, false, false);
        Goto(L9);
L1:
        ForceAnimationPlayback(2400730, 103061, false, false, false);
    } else {
L0:
        ForceAnimationPlayback(2400730, 103066, false, false, false);
        Goto(L9);
    }
L9:
    WaitFixedTimeFrames(5);
    RestartEvent();
});

// Lonely old woman_anime control_terrified
$Event(12400513, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(
        EventFlag(9432) && (EventFlag(1181) || EventFlag(1184) || EventFlag(1186) || EventFlag(1187) || EventFlag(1188)));
    ForceAnimationPlayback(2400730, 103061, false, false, false);
    WaitFor(!EventFlag(9432));
    ForceAnimationPlayback(2400730, 103060, false, false, false);
    RestartEvent();
});

// Lonely old woman_Lone letter
$Event(12400514, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    GotoIf(L0, EventFlag(1187));
    GotoIf(L1, EventFlag(1189));
    EndEvent();
L0:
    WaitFor(ActionButtonInArea(2400020, 2400731));
    DisplayGenericDialog(14001000, PromptType.OKCANCEL, NumberofOptions.OneButton, 2400731, 3);
    SetEventFlag(72400919, ON);
    RestartEvent();
L1:
    WaitFor(ActionButtonInArea(2400020, 2400731));
    DisplayGenericDialog(14001001, PromptType.OKCANCEL, NumberofOptions.OneButton, 2400731, 3);
    RestartEvent();
});

// whore_initialization
$Event(12400520, Default, function() {
    if (CharacterType(10000, TargetType.Alive)) {
        if (EventFlag(1232)) {
            BatchSetEventFlags(1220, 1239, OFF);
            SetEventFlag(1224, ON);
        }
L0:
        if (EventFlag(1233)) {
            BatchSetEventFlags(1220, 1239, OFF);
            SetEventFlag(1223, ON);
        }
L1:
        if (EventFlag(9802) && EventFlag(1224)) {
            BatchSetEventFlags(1220, 1239, OFF);
            SetEventFlag(1225, ON);
        }
L2:
        if (EventFlag(1225) && EventFlag(9464)) {
            BatchSetEventFlags(1220, 1239, OFF);
            SetEventFlag(1226, ON);
        }
L3:
        if (EventFlag(1226) && EventFlag(9461)) {
            BatchSetEventFlags(1220, 1239, OFF);
            SetEventFlag(1228, ON);
        }
L5:
        if (EventFlag(1220) && EventFlag(9802)) {
            BatchSetEventFlags(1220, 1239, OFF);
            SetEventFlag(1234, ON);
        }
L6:
        NoOp();
    }
L7:
    SetCharacterGravity(2400750, Disabled);
    SetCharacterMaphits(2400750, true);
    SetCharacterGravity(2400754, Disabled);
    SetCharacterMaphits(2400754, true);
    SetCharacterGravity(2400757, Disabled);
    SetCharacterMaphits(2400757, true);
    GotoIf(L0, EventFlag(1220));
    GotoIf(L1, EventFlag(1224));
    GotoIf(L2, EventFlag(1225));
    GotoIf(L3, EventFlag(1226));
    GotoIf(L4, EventFlag(1228));
    GotoIf(L4, EventFlag(1229));
    GotoIf(L4, EventFlag(1235));
    GotoIf(L5, EventFlag(1222));
    GotoIf(L5, EventFlag(1230));
    GotoIf(L6, EventFlag(1231));
    DeactivateObject(2400748, Disabled);
    ActivateMapPart(2404601, Disabled);
    SetCharacterBackreadState(2400750, true);
    SetCharacterBackreadState(2400754, true);
    SetCharacterBackreadState(2400757, true);
    EndEvent();
L0:
    DeactivateObject(2400748, Disabled);
    ActivateMapPart(2404601, Disabled);
    SetCharacterBackreadState(2400750, true);
    SetCharacterBackreadState(2400754, true);
    SetCharacterBackreadState(2400757, true);
    EndEvent();
L1:
    DeactivateObject(2400748, Enabled);
    ActivateMapPart(2404601, Disabled);
    SetCharacterBackreadState(2400750, false);
    SetCharacterBackreadState(2400754, true);
    SetCharacterBackreadState(2400757, true);
    ForceAnimationPlayback(2400750, 103080, false, false, false);
    IssueShortWarpRequest(2400750, TargetEntityType.Area, 2404502, -1);
    EndEvent();
L2:
    DeactivateObject(2400748, Enabled);
    ActivateMapPart(2404601, Disabled);
    SetCharacterBackreadState(2400750, true);
    SetCharacterBackreadState(2400754, false);
    SetCharacterBackreadState(2400757, true);
    ForceAnimationPlayback(2400754, 103081, false, false, false);
    IssueShortWarpRequest(2400754, TargetEntityType.Area, 2404504, -1);
    EndEvent();
L3:
    DeactivateObject(2400748, Enabled);
    ActivateMapPart(2404601, Disabled);
    SetCharacterBackreadState(2400750, true);
    SetCharacterBackreadState(2400754, true);
    SetCharacterBackreadState(2400757, false);
    ForceAnimationPlayback(2400757, 103081, false, false, false);
    IssueShortWarpRequest(2400757, TargetEntityType.Area, 2404504, -1);
    EndEvent();
L4:
    DeactivateObject(2400748, Enabled);
    ActivateMapPart(2404601, Enabled);
    SetCharacterBackreadState(2400750, true);
    SetCharacterBackreadState(2400754, true);
    SetCharacterBackreadState(2400757, true);
    EndEvent();
L5:
    DeactivateObject(2400748, Enabled);
    ActivateMapPart(2404601, Disabled);
    SetCharacterBackreadState(2400750, false);
    ChangeCharacterEnableState(2400750, Enabled);
    SetCharacterBackreadState(2400754, true);
    ChangeCharacterEnableState(2400754, Disabled);
    SetCharacterBackreadState(2400757, true);
    ChangeCharacterEnableState(2400757, Disabled);
    EzstateInstructionRequest(2400750, 5, 1);
    IssueShortWarpRequest(2400750, TargetEntityType.Area, 2404502, -1);
    ForceCharacterTreasure(2400750);
    EndEvent();
L6:
    DeactivateObject(2400748, Enabled);
    ActivateMapPart(2404601, Disabled);
    SetCharacterBackreadState(2400750, true);
    ChangeCharacterEnableState(2400750, Disabled);
    SetCharacterBackreadState(2400754, true);
    ChangeCharacterEnableState(2400754, Disabled);
    SetCharacterBackreadState(2400757, true);
    ChangeCharacterEnableState(2400757, Disabled);
    ForceCharacterTreasure(2400750);
    EndEvent();
});

// whore_death
$Event(12400521, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    EndIf(EventFlag(1222));
    EndIf(EventFlag(1230));
    EndIf(EventFlag(1231));
    WaitFor(CharacterDead(2400750) || CharacterDead(2400754) || CharacterDead(2400757) || CharacterDead(2400758));
    BatchSetEventFlags(1220, 1239, OFF);
    SetEventFlag(1222, ON);
    SaveRequest(0);
});

// prostitute_blood control
$Event(12400522, Default, function() {
    GotoIf(L0, ThisEvent());
    GotoIf(L0, EventFlag(1230));
    GotoIf(L0, EventFlag(1231));
    ActivateMapPart(2404600, Disabled);
    WaitFor(EventFlag(6001));
    EndEvent();
L0:
    ActivateMapPart(2404600, Enabled);
    EndEvent();
});

// prostitute_moving to shelter
$Event(12400523, Default, function() {
    WaitFor(EventFlag(72400510));
    SetEventFlag(72400510, OFF);
    BatchSetEventFlags(1220, 1239, OFF);
    SetEventFlag(1232, ON);
});

// prostitute_moving to clinic
$Event(12400524, Default, function() {
    WaitFor(EventFlag(72400511));
    SetEventFlag(72400511, OFF);
    BatchSetEventFlags(1220, 1239, OFF);
    SetEventFlag(1233, ON);
});

// Prostitute_blood charity
$Event(12400525, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(EventFlag(72400499));
    SetEventFlag(72400499, OFF);
    if (EventFlag(72400950)) {
        if (EventFlag(72400951)) {
            if (EventFlag(72400952)) {
                if (EventFlag(72400953)) {
                    if (EventFlag(72400954)) {
                    }
L4:
                    SetEventFlag(72400954, ON);
                }
L3:
                SetEventFlag(72400953, ON);
            }
L2:
            SetEventFlag(72400952, ON);
        }
L1:
        SetEventFlag(72400951, ON);
    }
L0:
    SetEventFlag(72400950, ON);
    WaitFor(EventFlag(1304) || EventFlag(1305));
    if (EventFlag(72400940)) {
        if (EventFlag(72400941)) {
            if (EventFlag(72400942)) {
                if (EventFlag(72400943)) {
                    if (EventFlag(72400944)) {
                    }
L9:
                    SetEventFlag(72400944, ON);
                }
L8:
                SetEventFlag(72400943, ON);
            }
L7:
            SetEventFlag(72400942, ON);
        }
L6:
        SetEventFlag(72400941, ON);
    }
L5:
    SetEventFlag(72400940, ON);
});

// Prostitute_Blood Donation CD release
$Event(12400531, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    if (!PlayerHasItem(ItemType.Goods, 701)) {
        SetEventFlag(72400498, OFF);
        EndEvent();
    }
L0:
    EndEvent();
});

// Stubborn old man_initialization
$Event(12400560, Default, function() {
    if (CharacterType(10000, TargetType.Alive)) {
        if (EventFlag(1168)) {
            BatchSetEventFlags(1160, 1179, OFF);
            SetEventFlag(1164, ON);
        }
L0:
        if (EventFlag(1169)) {
            BatchSetEventFlags(1160, 1179, OFF);
            SetEventFlag(1163, ON);
        }
L1:
        if (EventFlag(9802) && EventFlag(1164)) {
            BatchSetEventFlags(1160, 1179, OFF);
            SetEventFlag(1165, ON);
        }
L2:
        if (EventFlag(1160) && EventFlag(9802)) {
            BatchSetEventFlags(1160, 1179, OFF);
            SetEventFlag(1170, ON);
        }
    }
L3:
    SetCharacterGravity(2400765, Disabled);
    SetCharacterMaphits(2400765, true);
    if (!EventFlag(1161)) {
        GotoIf(L1, EventFlag(1164));
        GotoIf(L1, EventFlag(1165));
        GotoIf(L3, EventFlag(1166));
        GotoIf(L2, EventFlag(1167));
        SetCharacterBackreadState(2400765, true);
        EndEvent();
L1:
        SetCharacterBackreadState(2400765, false);
        ForceAnimationPlayback(2400765, 103050, false, false, false);
        IssueShortWarpRequest(2400765, TargetEntityType.Area, 2404500, -1);
        EndEvent();
L3:
        SetCharacterBackreadState(2400765, true);
        EzstateInstructionRequest(2400765, 2, 1);
        IssueShortWarpRequest(2400765, TargetEntityType.Area, 2404500, -1);
        ForceCharacterTreasure(2400765);
        EndEvent();
    }
L4:
    SetCharacterBackreadState(2400765, false);
    EzstateInstructionRequest(2400765, 2, 1);
    IssueShortWarpRequest(2400765, TargetEntityType.Area, 2404500, -1);
    ForceCharacterTreasure(2400765);
    EndEvent();
});

// Obstinate old man_death
$Event(12400561, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    EndIf(EventFlag(1161));
    EndIf(EventFlag(1166));
    WaitFor(CharacterDead(2400765));
    BatchSetEventFlags(1160, 1179, OFF);
    SetEventFlag(1161, ON);
    SaveRequest(0);
});

// Stubborn Old Man_Prostitute & Nun Conversation Occurs
$Event(12400563, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    if (!EventFlag(72400330)) {
        WaitFor(
            (EventFlag(1304) || EventFlag(1305) || EventFlag(1306) || EventFlag(1307) || EventFlag(1308))
                && (EventFlag(1224) || EventFlag(1225) || EventFlag(1226) || EventFlag(1227)));
        SetEventFlag(72400330, ON);
    }
L0:
    WaitFor(
        (EventFlag(1312) || EventFlag(1303) || EventFlag(1317))
            || (EventFlag(1228)
                || EventFlag(1229)
                || EventFlag(1235)
                || EventFlag(1236)
                || EventFlag(1230)
                || EventFlag(1231)
                || EventFlag(1222)));
    SetEventFlag(72400330, OFF);
});

// Stubborn Old Man_Old Woman Conversation Occurs
$Event(12400564, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    if (!EventFlag(72400331)) {
        WaitFor(EventFlag(1188) && EventFlag(1164));
        SetEventFlag(72400331, ON);
    }
L0:
    WaitFor(EventFlag(1189) || EventFlag(1191) || EventFlag(1183));
    SetEventFlag(72400331, OFF);
});

// Stubborn Old Man_Blind Conversation Occurs
$Event(12400565, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    if (!EventFlag(72400332)) {
        WaitFor(
            EventFlag(1100)
                || EventFlag(1101)
                || EventFlag(1102)
                || EventFlag(1103)
                || EventFlag(1104)
                || EventFlag(1105));
        SetEventFlag(72400332, ON);
    }
L0:
    WaitFor(EventFlag(1108) || EventFlag(1106));
    SetEventFlag(72400332, OFF);
});

// Stubborn old man_moving to shelter
$Event(12400566, Default, function() {
    WaitFor(EventFlag(72400970));
    SetEventFlag(72400970, OFF);
    BatchSetEventFlags(1160, 1179, OFF);
    SetEventFlag(1168, ON);
    RestartEvent();
});

// Stubborn old man_moving to clinic
$Event(12400567, Default, function() {
    WaitFor(EventFlag(72400971));
    SetEventFlag(72400971, OFF);
    BatchSetEventFlags(1160, 1179, OFF);
    SetEventFlag(1169, ON);
    RestartEvent();
});

// Obstinate old man_Blood control
$Event(12400568, Default, function() {
    GotoIf(L0, ThisEvent());
    GotoIf(L0, EventFlag(1166));
    ActivateMapPart(2404603, Disabled);
    WaitFor(EventFlag(6001));
    EndEvent();
L0:
    ActivateMapPart(2404603, Enabled);
    EndEvent();
});

// Crooked old man_anime control_death
$Event(12400569, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    EndIf(EventFlag(1161));
    EndIf(EventFlag(1166));
    WaitFor(HPRatio(2400765) == 0);
    ForceAnimationPlayback(2400765, 103053, false, false, false);
});

// Obstinate old man_anime control_take damage
$Event(12400570, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(HasDamageType(2400765, -1, DamageType.Unspecified) && HPRatio(2400765) != 0);
    ForceAnimationPlayback(2400765, 103052, false, false, false);
    RestartEvent();
});

// Obstinate old man_anime control_after taking damage
$Event(12400571, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(CharacterHasSpEffect(2400765, 151) && HPRatio(2400765) != 0);
    if (!(EventFlag(9432) && !EventFlag(1165))) {
        ForceAnimationPlayback(2400765, 103050, false, false, false);
    } else {
L0:
        ForceAnimationPlayback(2400765, 103051, false, false, false);
        Goto(L9);
    }
L9:
    WaitFixedTimeFrames(5);
    RestartEvent();
});

// Crooked old man_anime control_frightened
$Event(12400572, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(EventFlag(9432) && !EventFlag(1165));
    ForceAnimationPlayback(2400765, 103051, false, false, false);
    WaitFor(!EventFlag(9432));
    ForceAnimationPlayback(2400765, 103050, false, false, false);
    RestartEvent();
});

// Saint of the Sacrifice Street_Start talking
$Event(12400580, Default, function() {
    EndIf(ThisEvent());
    area = InArea(10000, 2402280);
    flag = EventFlag(72400400);
    WaitFor(area || flag);
    EndIf(flag.Passed);
    SetMapSoundState(2403300, Enabled);
});

// Saint of Sacrifice Town_became Saint Beast
$Event(12400581, Default, function() {
    WaitFor(EventFlag(72400400));
    SetMapSoundState(2403300, Disabled);
});

// Saint of Sacrifice Town_Erase Candle Map Parts
$Event(12400582, Default, function() {
    ActivateMapPart(2404010, Enabled);
    WaitFor(EventFlag(12401802));
    ActivateMapPart(2404010, Disabled);
});

// Bloodline Hunt_Initialization
$Event(12400590, Default, function() {
    if (CharacterType(10000, TargetType.Alive)) {
        if (EventFlag(1340) && EventFlag(9801)) {
            BatchSetEventFlags(1340, 1359, OFF);
            SetEventFlag(1344, ON);
        }
L1:
        if (EventFlag(1351) && EventFlag(72500359)) {
            BatchSetEventFlags(1340, 1359, OFF);
            SetEventFlag(1343, ON);
        }
L2:
        SetEventFlag(72400471, OFF);
    }
L0:
    SetCharacterGravity(2400762, Disabled);
    SetCharacterMaphits(2400762, true);
    GotoIf(L0, EventFlag(1340));
    GotoIf(L1, EventFlag(1341));
    GotoIf(L2, EventFlag(1342));
    GotoIf(L3, EventFlag(1343));
    GotoIf(L4, EventFlag(1344));
    GotoIf(L5, EventFlag(1345));
    GotoIf(L6, EventFlag(1346));
    GotoIf(L4, EventFlag(1347));
    SetCharacterBackreadState(2400760, true);
    SetCharacterBackreadState(2400762, true);
    SetCharacterBackreadState(2400763, true);
    DeactivateObject(2400761, Disabled);
    EndEvent();
L0:
    SetCharacterBackreadState(2400760, false);
    SetCharacterBackreadState(2400762, true);
    SetCharacterBackreadState(2400763, true);
    DeactivateObject(2400761, Disabled);
    if (!EventFlag(12405160)) {
        ForceAnimationPlayback(2400760, 103020, true, false, true);
        EndEvent();
    }
L7:
    EndEvent();
L1:
    SetCharacterBackreadState(2400760, false);
    SetCharacterBackreadState(2400762, true);
    SetCharacterBackreadState(2400763, true);
    DeactivateObject(2400761, Disabled);
    SetCharacterTeamType(2400760, TeamType.HostileNPC);
    EndEvent();
L2:
    SetCharacterBackreadState(2400760, true);
    SetCharacterBackreadState(2400762, true);
    SetCharacterBackreadState(2400763, true);
    DeactivateObject(2400761, Disabled);
    ChangeCharacterEnableState(2400760, Disabled);
    ForceCharacterTreasure(2400760);
    EndEvent();
L3:
    SetCharacterBackreadState(2400760, true);
    SetCharacterBackreadState(2400762, false);
    SetCharacterBackreadState(2400763, true);
    DeactivateObject(2400761, Enabled);
    IssueShortWarpRequest(2400762, TargetEntityType.Area, 2404508, -1);
    EzstateInstructionRequest(2400762, 11, 1);
    ForceCharacterTreasure(2400762);
    EndEvent();
L4:
    SetCharacterBackreadState(2400760, true);
    SetCharacterBackreadState(2400762, true);
    SetCharacterBackreadState(2400763, false);
    DeactivateObject(2400761, Disabled);
    SetCharacterTeamType(2400763, TeamType.FriendlyNPC);
    EndEvent();
L5:
    SetCharacterBackreadState(2400760, true);
    SetCharacterBackreadState(2400762, true);
    SetCharacterBackreadState(2400763, false);
    DeactivateObject(2400761, Disabled);
    SetCharacterTeamType(2400763, TeamType.HostileNPC);
    EndEvent();
L6:
    SetCharacterBackreadState(2400760, true);
    SetCharacterBackreadState(2400762, true);
    SetCharacterBackreadState(2400763, true);
    DeactivateObject(2400761, Disabled);
    ChangeCharacterEnableState(2400763, Disabled);
    ForceCharacterTreasure(2400763);
    EndEvent();
});

// Invitation sent
$Event(12400591, Default, function() {
    WaitFor(EventFlag(72400465));
    SetEventFlag(72400465, OFF);
    BatchSetEventFlags(1340, 1359, OFF);
    SetEventFlag(1347, ON);
    SaveRequest(0);
});

// Bloodline Hunt_Attack count event_XX
$Event(12400592, Default, function(X0_4, X4_4) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    SetEventFlag(X4_4, OFF);
    WaitFor(HasDamageType(X0_4, 10000, DamageType.Unspecified));
    WaitFixedTimeFrames(1);
    WaitFor(HasDamageType(X0_4, 10000, DamageType.Unspecified));
    WaitFixedTimeFrames(1);
    WaitFor(HasDamageType(X0_4, 10000, DamageType.Unspecified));
    WaitFixedTimeFrames(1);
    SetEventFlag(X4_4, ON);
});

// Bloodline Hunt_Hostile_XX
$Event(12400593, Default, function(X0_4, X4_4, X8_4) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor((EventFlag(X8_4) || HPRatio(X0_4) <= 0.9) && HPRatio(X0_4) != 0);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    BatchSetEventFlags(1340, 1359, OFF);
    SetEventFlag(X4_4, ON);
    SaveRequest(0);
});

// Bloodline Hunt_Death_XX
$Event(12400594, Default, function(X0_4, X4_4) {
    EndIf(ThisEventSlot());
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(CharacterDead(X0_4));
    BatchSetEventFlags(1340, 1359, OFF);
    SetEventFlag(X4_4, ON);
    SaveRequest(0);
});

// Infected beggar_initialization
$Event(12400610, Default, function() {
    SetEventFlag(72400362, OFF);
    SetEventFlag(72400921, OFF);
    SetEventFlag(72400924, OFF);
    SetCharacterGravity(2400756, Disabled);
    ForceAnimationPlayback(2400756, 7002, true, false, false);
    SetCharacterAIState(2400756, Disabled);
    SetCharacterBackreadState(2400756, true);
    GotoIf(L0, EventFlag(1205));
    GotoIf(L1, EventFlag(1206));
    GotoIf(L1, EventFlag(1207));
    GotoIf(L3, EventFlag(1210));
    SetCharacterBackreadState(2400755, true);
    SetCharacterBackreadState(2400759, true);
    SetCharacterBackreadState(2400220, false);
    EndEvent();
L0:
    if (!(EventValue(72400372, 2) != 0 || EventFlag(12405158))) {
        SetCharacterBackreadState(2400755, true);
        SetCharacterBackreadState(2400759, false);
        SetCharacterBackreadState(2400220, true);
        if (!EventFlag(12405157)) {
            ForceAnimationPlayback(2400759, 103074, false, false, false);
            EndEvent();
        }
L5:
        ForceAnimationPlayback(2400759, 103072, false, false, false);
        EndEvent();
    }
L2:
    SetCharacterBackreadState(2400755, false);
    SetCharacterBackreadState(2400759, true);
    SetCharacterBackreadState(2400220, true);
    if (!EventFlag(12405157)) {
        ForceAnimationPlayback(2400755, 103074, false, false, false);
        EndEvent();
    }
L4:
    ForceAnimationPlayback(2400755, 103072, false, false, false);
    EndEvent();
L1:
    SetCharacterBackreadState(2400755, false);
    SetCharacterBackreadState(2400759, true);
    SetCharacterBackreadState(2400220, true);
    ForceAnimationPlayback(2400755, 103072, false, false, false);
    EndEvent();
L3:
    SetCharacterBackreadState(2400755, true);
    ChangeCharacterEnableState(2400755, Disabled);
    SetCharacterBackreadState(2400759, true);
    ChangeCharacterEnableState(2400759, Disabled);
    SetCharacterBackreadState(2400220, true);
    ChangeCharacterEnableState(2400220, Disabled);
    ForceCharacterTreasure(2400755);
    EndEvent();
});

// Infected Beggar_Death
$Event(12400611, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    EndIf(EventFlag(1210));
    WaitFor(CharacterDead(2400755) || CharacterDead(2400756) || CharacterDead(2400759));
    BatchSetEventFlags(1200, 1219, OFF);
    SetEventFlag(1210, ON);
    if (CharacterDead(2400756)) {
        SetEventFlag(9432, OFF);
    }
L0:
    SaveRequest(0);
});

// Infected Beggar_Transformation_XX
$Event(12400612, Default, function(X0_4, X4_4) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(HPRatio(X0_4) < 0.5 && HPRatio(X0_4) != 0);
    SetEventFlag(X4_4, ON);
});

// Infected Beggar_Animation Control_Death_XX
$Event(12400614, Default, function(X0_4, X4_4) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(HPRatio(X0_4) == 0 && CharacterHasSpEffect(X0_4, 155));
    ForceAnimationPlayback(X0_4, X4_4, false, false, false);
});

// Infected Beggar_Animation Control_Damage Taken_XX
$Event(12400616, Default, function(X0_4) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(HasDamageType(X0_4, 10000, DamageType.Unspecified) && HPRatio(X0_4) != 0 && HPRatio(X0_4) > 0.5);
    GotoIf(L0, CharacterHasSpEffect(X0_4, 153));
    GotoIf(L1, CharacterHasSpEffect(X0_4, 155));
    RestartEvent();
L0:
    ForceAnimationPlayback(X0_4, 103079, false, false, false);
    RestartEvent();
L1:
    ForceAnimationPlayback(X0_4, 103130, false, false, false);
    RestartEvent();
});

// Infected Beggar_Animation Control_Damage to Standby_XX
$Event(12400618, Default, function(X0_4) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(CharacterHasSpEffect(X0_4, 154));
    ForceAnimationPlayback(X0_4, 103072, false, false, false);
    RestartEvent();
});

// Infected Beggar_Animation Control_Standby transition to Standby_XX
$Event(12400620, Default, function(X0_4) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(CharacterHasSpEffect(X0_4, 156));
    ForceAnimationPlayback(X0_4, 103072, false, false, false);
});

// Infected beggar_to shelter state
$Event(12400622, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    if (!EventFlag(1208)) {
        EndEvent();
    }
L0:
    BatchSetEventFlags(1200, 1219, OFF);
    SetEventFlag(1205, ON);
});

// Infected Beggar_Infirmary status
$Event(12400623, Default, function() {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    if (!EventFlag(1209)) {
        EndEvent();
    }
L0:
    BatchSetEventFlags(1200, 1219, OFF);
    SetEventFlag(1204, ON);
});

// Infected Beggar_Satisfied
$Event(12400624, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    EndIf(!EventFlag(1205));
    WaitFor(
        (EventFlag(1106) || EventFlag(1108))
            && (EventFlag(1222)
                || EventFlag(1223)
                || EventFlag(1230)
                || EventFlag(1231)
                || EventFlag(1235)
                || EventFlag(1228)
                || EventFlag(1229)
                || EventFlag(1234))
            && (EventFlag(1303)
                || EventFlag(1308)
                || EventFlag(1309)
                || EventFlag(1315)
                || EventFlag(1310)
                || EventFlag(1312)
                || EventFlag(1316))
            && (EventFlag(1163) || EventFlag(1161) || EventFlag(1166) || EventFlag(1170))
            && (EventFlag(1183) || EventFlag(1190) || EventFlag(1189) || EventFlag(1191) || EventFlag(1195))
            && !EventFlag(72400934)
            && !EventFlag(72400935)
            && !EventFlag(72400936)
            && !EventFlag(72400937)
            && !EventFlag(72400938));
    BatchSetEventFlags(1200, 1219, OFF);
    SetEventFlag(1211, ON);
});

// Infected beggar_transformation (2nd time onwards)_XX
$Event(12400625, Default, function(X0_4, X4_4) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    EndIf(!EventFlag(1207));
    WaitFixedTimeFrames(30);
    WaitFor(
        (HasDamageType(X0_4, 10000, DamageType.Unspecified) || InArea(10000, 2404383))
            && EventFlag(1207)
            && CharacterBackreadStatus(X0_4)
            && HPRatio(X0_4) != 0);
    SetEventFlag(X4_4, ON);
});

// Infected beggar_transformation (attacked more than 3 times)_XX
$Event(12400627, Default, function(X0_4, X4_4) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(HasDamageType(X0_4, 10000, DamageType.Unspecified));
    WaitFixedTimeFrames(1);
    WaitFor(HasDamageType(X0_4, 10000, DamageType.Unspecified));
    WaitFixedTimeFrames(1);
    WaitFor(HasDamageType(X0_4, 10000, DamageType.Unspecified) && HPRatio(X0_4) != 0);
    SetEventFlag(X4_4, ON);
});

// Infected Beggar_Kill other NPCs
$Event(12400629, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    GotoIf(L6, !(EventFlag(1208) || EventFlag(1205) || EventFlag(1207)));
    GotoIf(L0, EventFlag(1208));
    GotoIf(L5, !EventFlag(72400360));
    GotoIf(L5, !AnyBatchEventFlags(70000200, 70000202));
L0:
    if (EventFlag(1164) || EventFlag(1165)) {
        BatchSetEventFlags(1160, 1179, OFF);
        SetEventFlag(1166, ON);
        SetEventFlag(72400934, ON);
    } else {
L1:
        if (EventFlag(1181) || EventFlag(1184) || EventFlag(1185) || EventFlag(1186) || EventFlag(1187) || EventFlag(1188)) {
            BatchSetEventFlags(1180, 1199, OFF);
            SetEventFlag(1191, ON);
            SetEventFlag(72400935, ON);
        } else {
L2:
            if (EventFlag(1304) || EventFlag(1305) || EventFlag(1306) || EventFlag(1307)) {
                BatchSetEventFlags(1300, 1319, OFF);
                SetEventFlag(1312, ON);
                SetEventFlag(72400936, ON);
            } else {
L3:
                if (EventFlag(1100)
                    || EventFlag(1101)
                    || EventFlag(1102)
                    || EventFlag(1103)
                    || EventFlag(1104)
                    || EventFlag(1105)) {
                    BatchSetEventFlags(1100, 1119, OFF);
                    SetEventFlag(1108, ON);
                    SetEventFlag(72400937, ON);
                } else {
L4:
                    GotoIf(L5, 
                        !(EventFlag(1224) || EventFlag(1225) || EventFlag(1226) || EventFlag(1228) || EventFlag(1229)));
                    BatchSetEventFlags(1220, 1239, OFF);
                    SetEventFlag(1231, ON);
                    SetEventFlag(72400938, ON);
                    Goto(L9);
                }
            }
        }
    }
L9:
    IncrementEventValue(72400375, 3, 7);
    IncrementEventValue(72400372, 2, 2);
    SetEventFlag(72400490, ON);
    GotoIf(L5, EventFlag(1208));
    EventValueOperation(70000200, 3, 1, 0, 1, CalculationType.Sub);
L5:
    EndEvent();
});

// NPC General Purpose_Set a frightened flag when you die
$Event(12400630, Default, function(X0_4) {
    GotoIf(L0, !CharacterType(10000, TargetType.Alive));
    WaitFor(HPRatio(X0_4) == 0 && HasDamageType(X0_4, 10000, DamageType.Unspecified));
    WaitFor(CharacterDead(X0_4));
    SetEventFlag(9432, ON);
    SetEventFlag(72400490, ON);
});

// Revenge_Initialization (Cathedral District A)
$Event(12400650, Default, function() {
    if (CharacterType(10000, TargetType.Alive)) {
        if (EventFlag(1362) && EventFlag(72400520)) {
            BatchSetEventFlags(1360, 1379, OFF);
            SetEventFlag(1363, ON);
        }
        if (EventFlag(72400524)) {
            BatchSetEventFlags(1360, 1379, OFF);
            SetEventFlag(1368, ON);
            SetEventFlag(1376, ON);
        }
    }
L0:
    GotoIf(L0, AnyBatchEventFlags(1373, 1375));
    GotoIf(L1, EventFlag(1372));
    GotoIf(L2, EventFlag(1371));
    GotoIf(L3, EventFlag(1370));
    GotoIf(L4, EventFlag(1369));
    GotoIf(L5, EventFlag(1368));
    GotoIf(L6, AnyBatchEventFlags(1365, 1367));
    GotoIf(L7, AnyBatchEventFlags(1362, 1364));
    GotoIf(L8, AnyBatchEventFlags(1360, 1361));
L0:
    SetCharacterBackreadState(2400900, true);
    SetCharacterBackreadState(2400902, true);
    SetCharacterBackreadState(2400903, true);
    Goto(L9);
L1:
    if (EventFlag(amelia_defeat+12)) {
        SetCharacterBackreadState(2400902, true);
        Goto(L9);
    }
    SetCharacterBackreadState(2400900, true);
    SetCharacterBackreadState(2400902, false);
    SetCharacterTeamType(2400902, TeamType.HostileNPC);
    SetCharacterBackreadState(2400903, true);
    Goto(L9);
L2:
    SetCharacterBackreadState(2400900, true);
    SetCharacterBackreadState(2400902, true);
    SetCharacterBackreadState(2400903, false);
    ForceAnimationPlayback(2400903, 103031, true, false, false);
    Goto(L9);
L3:
    SetCharacterBackreadState(2400900, true);
    SetCharacterBackreadState(2400902, true);
    SetCharacterBackreadState(2400903, false);
    ForceAnimationPlayback(2400903, 103031, true, false, false);
    Goto(L9);
L4:
    GotoIf(S0, !EventFlag(1705));
    SetCharacterBackreadState(2400900, true);
    SetCharacterBackreadState(2400902, false);
    SetCharacterTeamType(2400902, TeamType.HostileNPC);
    SetCharacterBackreadState(2400903, true);
    Goto(L9);
S0:
    GotoIf(S1, !EventFlag(1704));
    SetCharacterBackreadState(2400900, true);
    SetCharacterBackreadState(2400902, true);
    SetCharacterBackreadState(2400903, false);
    SetCharacterTeamType(2400903, TeamType.HostileNPC);
    Goto(L9);
S1:
    GotoIf(S2, !EventFlag(1701));
    SetCharacterBackreadState(2400900, false);
    SetCharacterTeamType(2400900, TeamType.HostileNPC);
    SetCharacterBackreadState(2400902, true);
    SetCharacterBackreadState(2400903, true);
    Goto(L9);
S2:
    GotoIf(S3, !EventFlag(1703));
    SetCharacterBackreadState(2400900, true);
    SetCharacterBackreadState(2400902, true);
    SetCharacterBackreadState(2400903, true);
    Goto(L9);
    if (EventFlag(1702)) {
S3:
        SetCharacterBackreadState(2400900, true);
        SetCharacterBackreadState(2400902, true);
        SetCharacterBackreadState(2400903, true);
        Goto(L9);
    }
    SetCharacterBackreadState(2400900, true);
    SetCharacterBackreadState(2400902, true);
    SetCharacterBackreadState(2400903, true);
    Goto(L9);
L5:
    SetCharacterBackreadState(2400900, true);
    ChangeCharacterEnableState(2400900, Disabled);
    SetCharacterBackreadState(2400902, true);
    ChangeCharacterEnableState(2400902, Disabled);
    SetCharacterBackreadState(2400903, true);
    ChangeCharacterEnableState(2400903, Disabled);
    GotoIf(S4, !EventFlag(1705));
    ForceCharacterTreasure(2400902);
    Goto(L9);
S4:
    GotoIf(S5, !EventFlag(1704));
    ForceCharacterTreasure(2400903);
    Goto(L9);
S5:
    GotoIf(S6, !EventFlag(1701));
    ForceCharacterTreasure(2400900);
    Goto(L9);
S6:
    GotoIf(S7, !EventFlag(1703));
    Goto(L9);
S7:
    GotoIf(S8, !EventFlag(1702));
    Goto(L9);
S8:
    Goto(L9);
L6:
    SetCharacterBackreadState(2400900, true);
    SetCharacterBackreadState(2400902, true);
    SetCharacterBackreadState(2400903, true);
    Goto(L9);
L7:
    SetCharacterBackreadState(2400900, false);
    ForceAnimationPlayback(2400900, 103030, true, false, false);
    SetCharacterBackreadState(2400902, true);
    SetCharacterBackreadState(2400903, true);
    Goto(L9);
L8:
    SetCharacterBackreadState(2400900, true);
    SetCharacterBackreadState(2400902, true);
    SetCharacterBackreadState(2400903, true);
    Goto(L9);
L9:
    InitializeEvent(0, 12400651, 0);
    InitializeEvent(0, 12400652, 0);
    InitializeEvent(0, 12400653, 0);
    InitializeEvent(0, 12400654, 0);
    InitializeEvent(0, 12400655, 0);
    InitializeEvent(0, 12400657, 0);
    InitializeEvent(0, 12400658, 0);
    InitializeEvent(0, 12400659, 0);
    InitializeEvent(0, 12400660, 0);
    InitializeEvent(0, 12400661, 0);
    InitializeEvent(0, 12400662, 0);
    InitializeEvent(0, 12400663, 0);
    InitializeEvent(0, 12400665, 0);
});

// Revenge_First Meeting (Church Street A)
$Event(12400651, Default, function() {
    WaitFor(EventFlag(1360) && CharacterType(10000, TargetType.Alive) && InArea(10000, 2404390));
    BatchSetEventFlags(1360, 1379, OFF);
    SetEventFlag(1362, ON);
    SetCharacterBackreadState(2400900, false);
    ForceAnimationPlayback(2400900, 103030, true, false, false);
    SetCharacterBackreadState(2400902, true);
    SetCharacterBackreadState(2400903, true);
});

// Avenger_Acquainted (Church Street A) (Henrik Appears)
$Event(12400652, Default, function() {
    WaitFor(EventFlag(1361) && CharacterType(10000, TargetType.Alive) && InArea(10000, 2404390));
    BatchSetEventFlags(1360, 1379, OFF);
    SetEventFlag(1363, ON);
    SetCharacterBackreadState(2400900, false);
    ForceAnimationPlayback(2400900, 103030, true, false, false);
    SetCharacterBackreadState(2400902, true);
    SetCharacterBackreadState(2400903, true);
});

// Avenger_Weak Blood Glue
$Event(12400653, Default, function() {
    EndIf(ThisEvent());
    ActivateMapPart(2404610, Disabled);
    WaitFor(EventFlag(1370));
    ActivateMapPart(2404610, Enabled);
});

// Avenger_Weakness 2
$Event(12400654, Default, function() {
    GotoIf(L0, !ThisEvent());
    SetCharacterBackreadState(2400901, true);
    ChangeCharacterEnableState(2400901, Disabled);
    ForceCharacterTreasure(2400901);
    EndEvent();
    EndIf(!CharacterType(10000, TargetType.Alive));
L0:
    if (EventFlag(amelia_defeat+13)) {
        ChangeCharacterEnableState(2400901, Disabled);
        EndEvent();
    }
    WaitFor(CharacterDead(2400901));
    EndIf(!EventFlag(1370));
    BatchSetEventFlags(1360, 1379, OFF);
    SetEventFlag(1371, ON);
});

// Appearance of Avenger_NPC2
$Event(12400655, Default, function() {
    EndIf(ThisEvent());
    SetCharacterBackreadState(2400901, true);
    EndIf(EventFlag(amelia_defeat+13));
    WaitFor(EventFlag(1370));
    SetCharacterBackreadState(2400901, false);
});

// Revenge_Darkness
$Event(12400656, Default, function() {
    EndIf(ThisEvent());
    WaitFor(CharacterType(10000, TargetType.Alive) && EventFlag(1374) && EventFlag(9802));
    BatchSetEventFlags(1360, 1379, OFF);
    SetEventFlag(1372, ON);
    SetCharacterBackreadState(2400900, true);
    SetCharacterBackreadState(2400902, false);
    SetCharacterTeamType(2400902, TeamType.HostileNPC);
    SetCharacterBackreadState(2400903, true);
});

// Avenger_Death (Cathedral District A)
$Event(12400657, Default, function() {
    EndIf(ThisEvent());
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(CharacterDead(2400900) || CharacterDead(2400902) || CharacterDead(2400903));
    if (!EventFlag(1369)) {
        BatchSetEventFlags(1700, 1705, OFF);
        if (AnyBatchEventFlags(1362, 1364)) {
            SetEventFlag(1701, ON);
        }
        if (AnyBatchEventFlags(1370, 1371)) {
            SetEventFlag(1704, ON);
        }
        if (EventFlag(1372)) {
            SetEventFlag(1705, ON);
        }
    }
    BatchSetEventFlags(1360, 1379, OFF);
    SetEventFlag(1368, ON);
    SaveRequest(0);
});

// Avenger_Hostile (Cathedral District A)
$Event(12400658, Default, function() {
    EndIf(ThisEvent());
    WaitFor(EventFlag(72400526));
    BatchSetEventFlags(1700, 1705, OFF);
    if (AnyBatchEventFlags(1362, 1364)) {
        SetEventFlag(1701, ON);
    }
    if (AnyBatchEventFlags(1370, 1371)) {
        SetEventFlag(1704, ON);
    }
    if (EventFlag(1372)) {
        SetEventFlag(1705, ON);
    }
    BatchSetEventFlags(1360, 1379, OFF);
    SetEventFlag(1369, ON);
    SetCharacterTeamType(2400900, TeamType.HostileNPC);
    SaveRequest(0);
});

// Avenger_Attack Count (Cathedral Street A)
$Event(12400659, Default, function() {
    EndIf(ThisEvent());
    WaitFor(CharacterDamagedBy(2400900, 10000));
    WaitFixedTimeFrames(1);
    WaitFor(CharacterDamagedBy(2400900, 10000));
    WaitFixedTimeFrames(1);
    WaitFor(CharacterDamagedBy(2400900, 10000));
    WaitFixedTimeFrames(1);
});

// Avenger_Temporarily absent (weakness route) (insurance)
$Event(12400660, Default, function() {
    EndIf(ThisEvent());
    WaitFor(EventFlag(1373));
    SetCharacterBackreadState(2400900, true);
    SetCharacterBackreadState(2400902, true);
    SetCharacterBackreadState(2400903, true);
});

// Avenger_Temporarily absent (Dark Fall Route) (Insurance)
$Event(12400661, Default, function() {
    EndIf(ThisEvent());
    WaitFor(EventFlag(1374));
    SetCharacterBackreadState(2400900, true);
    SetCharacterBackreadState(2400902, true);
    SetCharacterBackreadState(2400903, true);
});

// Avenger_Energy Conversation Control
$Event(12400662, Default, function() {
    WaitFor(EventFlag(1370) && EventFlag(72400530));
    ForceAnimationPlayback(2400903, 103034, true, false, false);
    WaitFor(!EventFlag(72400530));
    ForceAnimationPlayback(2400903, 103031, true, false, false);
    RestartEvent();
});

// Avenger_Dead by taking damage while weakened
$Event(12400663, Default, function() {
    EndIf(ThisEvent());
    WaitFor((EventFlag(1370) || EventFlag(1371)) && HasDamageType(2400903, 10000, DamageType.Unspecified));
    ForceAnimationPlayback(2400903, 103032, false, false, false);
    ForceCharacterDeath(2400903, true);
});

// Avenger_Position control after the start of Henrik battle
$Event(12400665, Default, function() {
    EndIf(ThisEvent());
    WaitFor(EventFlag(1365) || EventFlag(1366) || EventFlag(1367));
    SetCharacterBackreadState(2400900, true);
    SetCharacterBackreadState(2400902, true);
    SetCharacterBackreadState(2400903, true);
});

// Blind Man in Shelter_Initialization
$Event(12400700, Restart, function() {
    if (EventFlag(1106)) {
        ForceAnimationPlayback(2400700, 2250, false, false, false);
        ForceCharacterTreasure(2400700);
    }
L0:
    if (EventFlag(1108)) {
        SetCharacterBackreadState(2400700, true);
        ForceCharacterTreasure(2400700);
        ActivateMapPart(2404604, Enabled);
    }
L1:
    EndIf(!EventFlag(1109));
    SetEventFlag(1109, OFF);
});

// Receiving Blind Person in Shelter
$Event(12400701, Restart, function() {
    EndIf(ThisEvent());
    WaitFor(EventFlag(72400300));
    BatchSetEventFlags(1100, 1119, OFF);
    SetEventFlag(1101, ON);
});

// Blind Man in Shelter_Tragedy 1
$Event(12400702, Restart, function() {
    EndIf(ThisEvent());
    EndIf(EventFlag(1106));
    EndIf(EventFlag(1108));
    flag = AnyBatchEventFlags(12400720, 12400724);
    WaitFor(flag || EventFlag(1106) || EventFlag(1108));
    EndIf(!flag.Passed);
    BatchSetEventFlags(1100, 1119, OFF);
    SetEventFlag(1102, ON);
});

// Blind Man in Shelter_Tragedy 2
$Event(12400703, Restart, function() {
    EndIf(ThisEvent());
    EndIf(EventFlag(1106));
    EndIf(EventFlag(1108));
    flag = EventFlag(72400985);
    WaitFor(flag || EventFlag(1106) || EventFlag(1108));
    EndIf(!flag.Passed);
    BatchSetEventFlags(1100, 1119, OFF);
    SetEventFlag(1103, ON);
});

// Blind Man in Shelter_Request Success
$Event(12400704, Restart, function() {
    EndIf(ThisEvent());
    EndIf(EventFlag(1106));
    EndIf(EventFlag(1108));
    flag = EventFlag(1164) || EventFlag(1165) || EventFlag(1167);
    flag2 = EventFlag(1181) || EventFlag(1185) || EventFlag(1186) || EventFlag(1188);
    flag3 = EventFlag(1224) || EventFlag(1225) || EventFlag(1226);
    flag4 = EventFlag(1304) || EventFlag(1305) || EventFlag(1307) || EventFlag(1308);
    flag5 = EventFlag(1106) || EventFlag(1108);
    flag6 = flag && flag2 && flag3 && flag4;
    WaitFor(flag6 || flag5);
    EndIf(flag5.Passed);
    BatchSetEventFlags(1100, 1119, OFF);
    SetEventFlag(1104, ON);
});

// Blind Man in Shelter_Request Failed
$Event(12400705, Restart, function() {
    EndIf(ThisEvent());
    EndIf(EventFlag(1106));
    EndIf(EventFlag(1108));
    flag = !EventFlag(1164) && !EventFlag(1165) && !EventFlag(1167);
    flag2 = !EventFlag(1181) && !EventFlag(1185) && !EventFlag(1186) && !EventFlag(1188);
    flag3 = !EventFlag(1224) && !EventFlag(1225) && !EventFlag(1226);
    flag4 = !EventFlag(1304) && !EventFlag(1305) && !EventFlag(1307) && !EventFlag(1308);
    flag5 = EventFlag(1106) || EventFlag(1108);
    WaitFor(flag5 || ((flag || flag2 || flag3 || flag4) && AllBatchEventFlags(12400708, 12400711)));
    EndIf(flag5.Passed);
    BatchSetEventFlags(1100, 1119, OFF);
    SetEventFlag(1105, ON);
});

// Blind Man in Shelter_Death
$Event(12400706, Restart, function() {
    EndIf(EventFlag(1106));
L0:
    WaitFor(CharacterDead(2400700) && !EventFlag(1108));
    BatchSetEventFlags(1100, 1119, OFF);
    SetEventFlag(1106, ON);
    SaveRequest(0);
});

// Blind people in evacuation shelter_Counting the number of people evacuating
$Event(12400707, Restart, function() {
    WaitFor(EventValue(12400733, 3) >= 3);
    SetEventFlag(72400309, ON);
});

// shelter blind_protect residents_XX
$Event(12400708, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(ThisEventSlot());
    flag = EventFlag(X0_4);
    flag2 |= flag || EventFlag(X8_4) || EventFlag(X12_4);
    if (X16_4 == 1) {
        flag2 |= EventFlag(1315);
    }
    WaitFor(flag2);
    EndIf(!flag.Passed);
    IncrementEventValue(12400733, 3, 5);
    SetEventFlag(72400313, ON);
    BatchSetEventFlags(72400314, 72400319, OFF);
    SetEventFlag(X4_4, ON);
});

// Blind Man in Shelter_Last Evacuee_Determine Destination
$Event(12400713, Restart, function(X0_4, X4_4) {
    flag = EventFlag(X0_4);
    WaitFor(flag || EventFlag(X4_4));
    if (flag.Passed) {
        SetEventFlag(72400308, OFF);
        SetEventFlag(72400307, ON);
        EndEvent();
    }
L0:
    SetEventFlag(72400307, OFF);
    SetEventFlag(72400308, ON);
});

// Blind Man in Shelter_Tragedy 1_Identified Person_Old Man
$Event(12400720, Restart, function() {
    EndIf(ThisEvent());
    WaitFor(EventFlag(1161) || EventFlag(1166));
    SetEventFlag(12400724, ON);
    SetEventState(12400721, 0, EventEndType.End);
    SetEventState(12400722, 0, EventEndType.End);
    SetEventState(12400723, 0, EventEndType.End);
    SetEventState(12400728, 0, EventEndType.End);
});

// Blind Man in Shelter_Tragedy 1_Identified_Old Woman
$Event(12400721, Restart, function() {
    EndIf(ThisEvent());
    WaitFor(EventFlag(1183) || EventFlag(1189) || EventFlag(1191));
    SetEventFlag(12400725, ON);
    SetEventState(12400720, 0, EventEndType.End);
    SetEventState(12400722, 0, EventEndType.End);
    SetEventState(12400723, 0, EventEndType.End);
    SetEventState(12400729, 0, EventEndType.End);
});

// Blind Man in Shelter_Tragedy 1_Identified_Horse
$Event(12400722, Restart, function() {
    EndIf(ThisEvent());
    WaitFor(EventFlag(1222) || EventFlag(1230) || EventFlag(1231));
    SetEventFlag(12400726, ON);
    SetEventState(12400720, 0, EventEndType.End);
    SetEventState(12400721, 0, EventEndType.End);
    SetEventState(12400723, 0, EventEndType.End);
    SetEventState(12400730, 0, EventEndType.End);
});

// Blind Man in Shelter_Tragedy 1_Identified_Nun
$Event(12400723, Restart, function() {
    EndIf(ThisEvent());
    WaitFor(EventFlag(1303) || EventFlag(1312));
    SetEventFlag(12400727, ON);
    SetEventState(12400720, 0, EventEndType.End);
    SetEventState(12400721, 0, EventEndType.End);
    SetEventState(12400722, 0, EventEndType.End);
    SetEventState(12400731, 0, EventEndType.End);
});

// Blind Man in Shelter_Tragedy 2_Identified Person_Old Man
$Event(12400728, Restart, function() {
    EndIf(ThisEvent());
    WaitFor(AnyBatchEventFlags(12400720, 12400723));
    WaitFor(EventFlag(1161) || EventFlag(1166));
    SetEventFlag(72400985, ON);
    SetEventState(12400729, 0, EventEndType.End);
    SetEventState(12400730, 0, EventEndType.End);
    SetEventState(12400731, 0, EventEndType.End);
});

// Blind Man in Shelter_Tragedy 2_Identified_Old Woman
$Event(12400729, Restart, function() {
    EndIf(ThisEvent());
    WaitFor(AnyBatchEventFlags(12400720, 12400723));
    WaitFor(EventFlag(1183) || EventFlag(1189) || EventFlag(1191));
    SetEventFlag(72400985, ON);
    SetEventState(12400728, 0, EventEndType.End);
    SetEventState(12400730, 0, EventEndType.End);
    SetEventState(12400731, 0, EventEndType.End);
});

// Blind Man in Shelter_Tragedy 2_Identification_Horse
$Event(12400730, Restart, function() {
    EndIf(ThisEvent());
    WaitFor(AnyBatchEventFlags(12400720, 12400723));
    WaitFor(EventFlag(1222) || EventFlag(1230) || EventFlag(1231));
    SetEventFlag(72400985, ON);
    SetEventState(12400728, 0, EventEndType.End);
    SetEventState(12400729, 0, EventEndType.End);
    SetEventState(12400731, 0, EventEndType.End);
});

// Blind Man in Shelter_Tragedy 2_Identified_Nun
$Event(12400731, Restart, function() {
    EndIf(ThisEvent());
    WaitFor(AnyBatchEventFlags(12400720, 12400723));
    WaitFor(EventFlag(1303) || EventFlag(1312));
    SetEventFlag(72400985, ON);
    SetEventState(12400728, 0, EventEndType.End);
    SetEventState(12400729, 0, EventEndType.End);
    SetEventState(12400730, 0, EventEndType.End);
});

// Blind Man in Shelter_Beaten and unable to speak
$Event(12400732, Restart, function() {
    WaitFor(HasDamageType(2400700, -1, DamageType.Unspecified) && EventFlag(72400981));
    SetEventFlag(1109, ON);
});

// Blind man in shelter killed by beggar
$Event(12400737, Restart, function() {
    EndIf(EventFlag(1108));
    ActivateMapPart(2404604, Disabled);
L0:
    WaitFor(EventFlag(1108));
    ActivateMapPart(2404604, Enabled);
    ForceCharacterTreasure(2400700);
});

// Blind Man in Shelter_Frightened
$Event(12400738, Restart, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(EventFlag(9432));
    SetSpEffect(2400700, 5401, false);
    WaitFixedTimeFrames(1);
    ForceAnimationPlayback(2400700, 7000, false, false, false);
    WaitFor(!EventFlag(9432));
    SetSpEffect(2400700, 5402, false);
    WaitFixedTimeFrames(1);
    ForceAnimationPlayback(2400700, 0, false, false, false);
    RestartEvent();
});

// Prisoned Nun_initialization
$Event(12400900, Default, function() {
    if (CharacterType(10000, TargetType.Alive)) {
        if (EventFlag(1313)) {
            BatchSetEventFlags(1300, 1319, OFF);
            SetEventFlag(1304, ON);
        }
L1:
        if (EventFlag(72400942)
            && EventFlag(72400380)
            && (EventFlag(1304) || EventFlag(1305))
            && (EventFlag(1224) || EventFlag(1225) || EventFlag(1226) || EventFlag(1227))) {
            BatchSetEventFlags(1300, 1319, OFF);
            SetEventFlag(1306, ON);
            BatchSetEventFlags(1220, 1239, OFF);
            SetEventFlag(1230, ON);
            Goto(L2);
        }
L2:
        if (EventFlag(9802)) {
            GotoIf(L3, EventFlag(1304));
            GotoIf(L3, EventFlag(1305));
            GotoIf(L4, EventFlag(1306));
            Goto(L5);
L4:
            BatchSetEventFlags(1300, 1319, OFF);
            SetEventFlag(1308, ON);
            Goto(L5);
L3:
            BatchSetEventFlags(1300, 1319, OFF);
            SetEventFlag(1307, ON);
            Goto(L5);
        }
L5:
        SetEventFlag(72400393, OFF);
    }
L6:
    SetCharacterGravity(2400770, Disabled);
    SetCharacterMaphits(2400770, true);
    SetCharacterGravity(2400772, Disabled);
    SetCharacterMaphits(2400772, true);
    SetCharacterGravity(2400774, Disabled);
    SetCharacterMaphits(2400774, true);
    GotoIf(L0, EventFlag(1304));
    GotoIf(L0, EventFlag(1305));
    GotoIf(L4, EventFlag(1306));
    GotoIf(L1, EventFlag(1307));
    GotoIf(L2, EventFlag(1308));
    GotoIf(L3, EventFlag(1312));
    GotoIf(L5, EventFlag(1317));
    GotoIf(L6, EventFlag(1303));
    SetCharacterBackreadState(2400770, true);
    SetCharacterBackreadState(2400772, true);
    SetCharacterBackreadState(2400774, true);
    SetCharacterBackreadState(2400775, true);
    EndEvent();
L0:
    SetCharacterBackreadState(2400770, false);
    SetCharacterBackreadState(2400772, true);
    SetCharacterBackreadState(2400774, true);
    SetCharacterBackreadState(2400775, true);
    ForceAnimationPlayback(2400770, 103096, true, false, true);
    IssueShortWarpRequest(2400770, TargetEntityType.Area, 2404503, -1);
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    SetEventFlag(72400491, ON);
    EndEvent();
L4:
    SetCharacterBackreadState(2400770, true);
    SetCharacterBackreadState(2400772, true);
    SetCharacterBackreadState(2400774, false);
    SetCharacterBackreadState(2400775, true);
    ReproduceObjectDestruction(2400773, 1);
    ForceAnimationPlayback(2400774, 103096, true, false, true);
    IssueShortWarpRequest(2400774, TargetEntityType.Area, 2404503, -1);
    EndEvent();
L1:
    SetCharacterBackreadState(2400770, true);
    SetCharacterBackreadState(2400772, false);
    SetCharacterBackreadState(2400774, true);
    SetCharacterBackreadState(2400775, true);
    ForceAnimationPlayback(2400772, 103096, true, false, true);
    IssueShortWarpRequest(2400772, TargetEntityType.Area, 2404503, -1);
    EndEvent();
L2:
    SetCharacterBackreadState(2400770, true);
    SetCharacterBackreadState(2400772, true);
    SetCharacterBackreadState(2400774, true);
    SetCharacterBackreadState(2400775, false);
    ReproduceObjectDestruction(2400773, 1);
    SetCharacterAIState(2400775, Disabled);
    WarpCharacterAndSetFloor(2400775, TargetEntityType.Area, 2404381, -1, 2404100);
    SetCharacterTeamType(2400775, TeamType.HostileNPC);
    EndEvent();
L3:
    SetCharacterBackreadState(2400770, true);
    ChangeCharacterEnableState(2400770, Disabled);
    SetCharacterBackreadState(2400772, true);
    ChangeCharacterEnableState(2400772, Disabled);
    SetCharacterBackreadState(2400774, true);
    ChangeCharacterEnableState(2400774, Disabled);
    SetCharacterBackreadState(2400775, true);
    ChangeCharacterEnableState(2400775, Disabled);
    ReproduceObjectDestruction(2400773, 1);
    EzstateInstructionRequest(2400770, 8, 1);
    IssueShortWarpRequest(2400770, TargetEntityType.Area, 2404506, -1);
    WaitFixedTimeFrames(1);
    ForceCharacterTreasure(2400770);
    EndEvent();
L5:
    SetCharacterBackreadState(2400770, true);
    ChangeCharacterEnableState(2400770, Disabled);
    SetCharacterBackreadState(2400772, true);
    ChangeCharacterEnableState(2400772, Disabled);
    SetCharacterBackreadState(2400774, true);
    ChangeCharacterEnableState(2400774, Disabled);
    SetCharacterBackreadState(2400775, true);
    ChangeCharacterEnableState(2400775, Disabled);
    ReproduceObjectDestruction(2400773, 1);
    SetCharacterAIState(2400775, Disabled);
    WarpCharacterAndSetFloor(2400775, TargetEntityType.Area, 2404381, -1, 2404100);
    WaitFixedTimeFrames(1);
    ForceCharacterTreasure(2400775);
    EndEvent();
L6:
    SetCharacterBackreadState(2400770, false);
    ChangeCharacterEnableState(2400770, Enabled);
    SetCharacterBackreadState(2400772, true);
    ChangeCharacterEnableState(2400772, Disabled);
    SetCharacterBackreadState(2400774, true);
    ChangeCharacterEnableState(2400774, Disabled);
    SetCharacterBackreadState(2400775, true);
    ChangeCharacterEnableState(2400775, Disabled);
    ReproduceObjectDestruction(2400773, 1);
    EzstateInstructionRequest(2400770, 8, 1);
    IssueShortWarpRequest(2400770, TargetEntityType.Area, 2404506, -1);
    WaitFixedTimeFrames(1);
    ForceCharacterTreasure(2400770);
    EndEvent();
});

// Imprisoned Nun_Jealous of prostitutes
$Event(12400901, Default, function() {
    WaitFor(EventFlag(72400394));
    SetEventFlag(72400394, OFF);
    if (!(EventFlag(1304) && EventFlag(72400380))) {
        EndEvent();
    }
L0:
    BatchSetEventFlags(1300, 1319, OFF);
    SetEventFlag(1305, ON);
});

// Captive nun_animation control_end of glimpse_XX
$Event(12400940, Default, function(X0_4) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(EventFlag(72400955));
    WaitFor(CharacterHasSpEffect(X0_4, 157) && !EventFlag(72400955));
    ForceAnimationPlayback(X0_4, 103106, false, false, false);
    RestartEvent();
});

// Imprisoned nun _ death
$Event(12400903, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    EndIf(EventFlag(1317));
    EndIf(EventFlag(1312));
    EndIf(EventFlag(1303));
    WaitFor(CharacterDead(2400770) || CharacterDead(2400772) || CharacterDead(2400774) || CharacterDead(2400775));
    if (!EventFlag(1308)) {
        BatchSetEventFlags(1300, 1319, OFF);
        SetEventFlag(1303, ON);
        SaveRequest(0);
        EndEvent();
    }
L0:
    BatchSetEventFlags(1300, 1319, OFF);
    SetEventFlag(1317, ON);
    SaveRequest(0);
    EndEvent();
});

// Captive nun_attack
$Event(12400904, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor((EventFlag(1308) && InArea(10000, 2404380)) || HasDamageType(2400775, -1, DamageType.Unspecified));
    SetEventFlag(72400397, ON);
    SetCharacterAIState(2400775, Enabled);
});

// Imprisoned Nun_Animation Control_Damage Taken_XX
$Event(12400910, Default, function(X0_4) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(HasDamageType(X0_4, -1, DamageType.Unspecified) && HPRatio(X0_4) != 0);
    GotoIf(L0, CharacterHasSpEffect(X0_4, 151));
    GotoIf(L0, CharacterHasSpEffect(X0_4, 158));
    ForceAnimationPlayback(X0_4, 103134, false, false, false);
    RestartEvent();
L0:
    ForceAnimationPlayback(X0_4, 103098, false, false, false);
    WaitFixedTimeFrames(20);
    RestartEvent();
});

// Imprisoned nun_animation control_dead_XX
$Event(12400915, Default, function(X0_4) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    EndIf(EventFlag(1317));
    EndIf(EventFlag(1312));
    EndIf(EventFlag(1303));
    WaitFor(HPRatio(X0_4) == 0);
    if (!(CharacterHasSpEffect(X0_4, 151) || CharacterHasSpEffect(X0_4, 158))) {
        ForceAnimationPlayback(X0_4, 103135, false, false, false);
        EndEvent();
    }
L0:
    ForceAnimationPlayback(X0_4, 103099, false, false, false);
    EndEvent();
});

// Captive nun_anime control_begin glimpse_XX
$Event(12400920, Default, function(X0_4) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(!EventFlag(72400955));
    WaitFor(EventFlag(72400955));
    if (!CharacterHasSpEffect(X0_4, 151)) {
        ForceAnimationPlayback(X0_4, 103104, false, false, false);
        RestartEvent();
    }
L0:
    ForceAnimationPlayback(X0_4, 103101, false, false, false);
    WaitFor(CharacterHasSpEffect(X0_4, 152));
    ForceAnimationPlayback(X0_4, 103104, false, false, false);
    RestartEvent();
});

// Captive nun_animation control_damage animation end_XX
$Event(12400925, Default, function(X0_4) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor((CharacterHasSpEffect(X0_4, 153) || CharacterHasSpEffect(X0_4, 159)) && HPRatio(X0_4) != 0);
    if (!CharacterHasSpEffect(X0_4, 153)) {
        if (!CharacterHasSpEffect(X0_4, 159)) {
        }
L0:
        GotoIf(L1, EventFlag(9432) && !EventFlag(1307) && !EventFlag(1306));
        ForceAnimationPlayback(X0_4, 103102, true, false, false);
        Goto(L9);
L1:
        ForceAnimationPlayback(X0_4, 103103, true, false, false);
    } else {
L2:
        if (!(EventFlag(9432) && !EventFlag(1307) && !EventFlag(1306))) {
            ForceAnimationPlayback(X0_4, 103096, true, false, false);
        } else {
L3:
            ForceAnimationPlayback(X0_4, 103097, true, false, false);
            Goto(L9);
        }
    }
L9:
    WaitFixedTimeFrames(5);
    RestartEvent();
});

// Captive nun_animation control_waiting for a glimpse → waiting for standing_XX
$Event(12400930, Default, function(X0_4) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(CharacterHasSpEffect(X0_4, 156));
    ForceAnimationPlayback(X0_4, 103102, false, false, false);
    RestartEvent();
});

// Captive nun_animation_control_standby_XX
$Event(12400935, Default, function(X0_4) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(EntityInRadiusOfEntity(10000, X0_4, 5) && CharacterHasSpEffect(X0_4, 151) && HPRatio(X0_4) != 0);
    ForceAnimationPlayback(X0_4, 103101, false, true, false);
});

// Captive Nun_Blood on sitting OBJ
$Event(12400952, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    GotoIf(L0, ThisEvent());
    GotoIf(L0, EventFlag(1306));
    GotoIf(L0, EventFlag(1308));
    GotoIf(L0, EventFlag(1312));
    WaitFor(EventFlag(6001));
    EndEvent();
L0:
    RequestObjectDestruction(2400773, 1);
    EndEvent();
});

// Imprisoned nun_anime control_terrified
$Event(12400953, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(HPRatio(2400770) != 0 && HPRatio(2400774) != 0 && EventFlag(9432));
    if (!CharacterHasSpEffect(2400770, 151)) {
        ForceAnimationPlayback(2400770, 103103, false, false, false);
        WaitFor(!EventFlag(9432));
        ForceAnimationPlayback(2400770, 103102, false, false, false);
        RestartEvent();
    }
L0:
    ForceAnimationPlayback(2400770, 103097, false, false, false);
    WaitFor(!EventFlag(9432));
    ForceAnimationPlayback(2400770, 103096, false, false, false);
    RestartEvent();
});

// Prisoned Nun_Earth Alms CD Unlock
$Event(12400954, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    if (!PlayerHasItem(ItemType.Goods, 702)) {
        SetEventFlag(72400392, OFF);
        EndEvent();
    }
L0:
    EndEvent();
});

// NPC generic_PC killed NPC
$Event(12400800, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(
        (HasDamageType(2400765, 10000, DamageType.Unspecified) && HPRatio(2400765) == 0)
            || (HasDamageType(2400730, 10000, DamageType.Unspecified) && HPRatio(2400730) == 0)
            || (HasDamageType(2400750, 10000, DamageType.Unspecified) && HPRatio(2400750) == 0)
            || (HasDamageType(2400754, 10000, DamageType.Unspecified) && HPRatio(2400754) == 0)
            || (HasDamageType(2400757, 10000, DamageType.Unspecified) && HPRatio(2400757) == 0)
            || (HasDamageType(2400770, 10000, DamageType.Unspecified) && HPRatio(2400770) == 0)
            || (HasDamageType(2400772, 10000, DamageType.Unspecified) && HPRatio(2400772) == 0)
            || (HasDamageType(2400774, 10000, DamageType.Unspecified) && HPRatio(2400774) == 0)
            || (HasDamageType(2400700, 10000, DamageType.Unspecified) && HPRatio(2400700) == 0));
    SetEventFlag(9432, ON);
    SetEventFlag(72400490, ON);
});

// NPC Generic_State Consistency
$Event(12400801, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    if (EventFlag(1166)) {
        SetCharacterBackreadState(2400765, true);
        IssueShortWarpRequest(2400765, TargetEntityType.Area, 2404500, -1);
        ForceCharacterTreasure(2400765);
    }
L0:
    if (EventFlag(1191)) {
        SetCharacterBackreadState(2400730, true);
        SetCharacterBackreadState(2400732, true);
        DeactivateObject(2400731, Enabled);
        IssueShortWarpRequest(2400730, TargetEntityType.Area, 2404501, -1);
        ForceCharacterTreasure(2400730);
    }
L1:
    if (EventFlag(1231)) {
        DeactivateObject(2400748, Enabled);
        ActivateMapPart(2404601, Disabled);
        SetCharacterBackreadState(2400750, true);
        SetCharacterBackreadState(2400754, true);
        SetCharacterBackreadState(2400757, true);
        IssueShortWarpRequest(2400750, TargetEntityType.Area, 2404502, -1);
        ForceCharacterTreasure(2400750);
    }
L2:
    if (EventFlag(1230)) {
        DeactivateObject(2400748, Enabled);
        ActivateMapPart(2404601, Disabled);
        SetCharacterBackreadState(2400750, false);
        SetCharacterBackreadState(2400754, true);
        SetCharacterBackreadState(2400757, true);
        ForceAnimationPlayback(2400750, 103087, false, false, false);
        EzstateInstructionRequest(2400750, 5, 1);
        IssueShortWarpRequest(2400750, TargetEntityType.Area, 2404502, -1);
        ForceCharacterTreasure(2400750);
    }
L3:
    if (EventFlag(1312)) {
        SetCharacterBackreadState(2400770, true);
        SetCharacterBackreadState(2400772, true);
        SetCharacterBackreadState(2400774, true);
        SetCharacterBackreadState(2400775, true);
        IssueShortWarpRequest(2400770, TargetEntityType.Area, 2404506, -1);
        ForceCharacterTreasure(2400770);
    }
L4:
    GotoIf(L4, !EventFlag(1108));
    ActivateMapPart(2404604, Enabled);
    ForceCharacterTreasure(2400700);
    SetCharacterBackreadState(2400700, true);
L5:
    NoOp();
});

//NPC General Purpose_Animation Control_Damage Taken to Standby_XX
$Event(12400805, Default, function(X0_4, X4_4, X8_4) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(CharacterHasSpEffect(X0_4, X8_4) && HPRatio(X0_4) != 0);
    ForceAnimationPlayback(X0_4, X4_4, false, false, false);
    WaitFixedTimeFrames(5);
    RestartEvent();
});

//NPC General Purpose_Animation Control_Damage Taken_XX
$Event(12400810, Default, function(X0_4, X4_4) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(HPRatio(X0_4) != 0 && HasDamageType(X0_4, -1, DamageType.Unspecified));
    ForceAnimationPlayback(X0_4, X4_4, false, false, false);
    RestartEvent();
});

//NPC General Purpose_Animation Control_Death_XX
$Event(12400830, Default, function(X0_4, X4_4) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(HPRatio(X0_4) == 0);
    ForceAnimationPlayback(X0_4, X4_4, false, false, false);
});

// NPC general purpose_knock the door_XX
$Event(12400840, Default, function(X0_4, X4_4, X8_4) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    SetEventFlag(X0_4, OFF);
    WaitFor(!EventFlag(X0_4) && ActionButtonInArea(X4_4, X8_4));
    IssueShortWarpRequest(10000, TargetEntityType.Object, X8_4, 210);
    ForceAnimationPlayback(10000, 101320, false, false, false);
    WaitFixedTimeFrames(25);
    WaitFixedTimeFrames(20);
    SetEventFlag(X0_4, ON);
    WaitFor(!EventFlag(X0_4));
    RestartEvent();
});

// bridge door
$Event(12400849, Default, function(X0_4, X4_4, X8_4) {
    DeactivateObject(X8_4, Disabled);
    EndIf(EventFlag(12100949));
    WaitFor(EventFlag(12411700));
    DeactivateObject(X8_4, Enabled);
    EndIf(!CharacterType(10000, TargetType.Alive));
    SetEventFlag(X0_4, OFF);
    WaitFor(!EventFlag(X0_4) && ActionButtonInArea(X4_4, X8_4));
    IssueShortWarpRequest(10000, TargetEntityType.Object, X8_4, 210);
    ForceAnimationPlayback(10000, 101320, false, false, false);
    WaitFixedTimeFrames(25);
    DisplayBanner(TextBannerType.StadiumLoss);
    WaitFixedTimeFrames(20);
    SetPlayerRespawnPoint(2418089);
    WaitFixedTimeFrames(20);
    SetSpEffect(10000, 2101, false);
});

// survivor escapes
$Event(12405700, Restart, function() {
    chr = CharacterDead(2400393) && CharacterDead(2400410);
    chr2 = CharacterDead(2400393) && CharacterDead(2400396);
    chr3 = CharacterDead(2400410) && CharacterDead(2400396);
    WaitFor(chr || chr2 || chr3);
    GotoIf(L0, chr);
    GotoIf(L1, chr2);
    GotoIf(L2, chr3);
L0:
    RequestCharacterAICommand(2400396, 10, 0);
    SetCharacterHome(2400396, 2409007);
    RequestCharacterAIReplan(2400396);
L1:
    RequestCharacterAICommand(2400410, 10, 0);
    SetCharacterHome(2400410, 2409007);
    RequestCharacterAIReplan(2400410);
L2:
    RequestCharacterAICommand(2400393, 10, 0);
    SetCharacterHome(2400393, 2409007);
    RequestCharacterAIReplan(2400393);
    WaitFor(InArea(2400393, 2402030) || InArea(2400396, 2402030) || InArea(2400410, 2402030));
    WaitFor(
        EntityInRadiusOfEntity(2400393, 10000, 5)
            || EntityInRadiusOfEntity(2400396, 10000, 5)
            || EntityInRadiusOfEntity(2400410, 10000, 5));
    RequestCharacterAICommand(2400393, -1, 0);
    RequestCharacterAIReplan(2400393);
    RequestCharacterAICommand(2400396, -1, 0);
    RequestCharacterAIReplan(2400396);
    RequestCharacterAICommand(2400410, -1, 0);
    RequestCharacterAIReplan(2400410);
});

// Ready to fight_XX
$Event(12405701, Restart, function(X0_4, X4_4) {
    WaitFor(InArea(2400393, 2402030) || InArea(2400396, 2402030) || InArea(2400410, 2402030));
    RequestCharacterAICommand(X0_4, 10, 0);
    SetCharacterHome(X0_4, X4_4);
    RequestCharacterAIReplan(X0_4);
    WaitFor(InArea(10000, 2402030) && EntityInRadiusOfEntity(10000, X0_4, 5));
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
});

// Sealing the door in the first half of Cathedral Street C
$Event(12405710, Restart, function() {
    if (EventFlag(9453) || EventFlag(12409453)) {
        ReproduceObjectAnimation(2401202, 1);
        NotifySoundDampeningOfDoorEvent(2401202, DoorState.DoorOpening);
        EndEvent();
    }
L0:
    SetNetworkSyncState(Disabled);
    WaitFor(ActionButtonInArea(7000, 2401202));
    DisplayGenericDialog(10010171, PromptType.OKCANCEL, NumberofOptions.OneButton, 2401202, 5);
    RestartEvent();
});

//animation_target determination
$Event(12405750, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(ThisEventSlot());
    area = EntityInRadiusOfEntity(X0_4, 10000, X8_4);
    dmg = HasDamageType(X0_4, 10000, DamageType.Unspecified);
    WaitFor(area || dmg);
    EndIf(dmg.Passed);
    ForceAnimationPlayback(X0_4, X4_4, false, false, false);
});

// Boss defeated_Saint Beast
$Event(12401800, Default, function() {
    if (ThisEvent()) {
        SetMapSoundState(2403802, Disabled);
        SetMapSoundState(2403803, Disabled);
        ChangeCharacterEnableState(2400800, Disabled);
        DeactivateObject(2400801, Disabled);
        ForceCharacterDeath(2400800, false);
        DeactivateObject(2401800, Disabled);
        DeleteMapSFX(2403800, false);
        EndEvent();
    }
L0:
    WaitFor(CharacterDead(2400800));
    DisplayBanner(TextBannerType.DemonKilled);
    DeactivateObject(2401800, Disabled);
    DeleteMapSFX(2403800, true);
    SetLockcamSlotNumber(24, 0, 0);
    WaitFixedTimeSeconds(3);
    HandleBossDefeat(2400800);
    SetNetworkSyncState(Disabled);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        WaitFor(CharacterType(10000, TargetType.Alive));
        InitializeEvent(0, 9350, 3);
        AwardAchievement(15);
        if (!EventFlag(amelia_defeat+13)) {
            AwardItemLot(50000001);
        }
        SetEventFlag(2400, ON);
        SetEventFlag(2401, ON);
        SetEventFlag(9455, ON);
        SetEventFlag(2402, ON);
        SetEventFlag(72400512, ON);
        EndTimeMeasurement(2400000);
        EndTimeMeasurement(2400001);
        EndTimeMeasurement(2400010);
        CreatePlaylog(114);
        ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 126, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 126, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Weapon, 126, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Armor, 126, PlayLogMultiplayerType.HostOnly);
        if (EventFlag(amelia_defeat+13)) {
            AwardItemLot(17020);
            InitializeEvent(amelia_offset, 7800, amelia_lamp_id+1000, 824000);
        }
        EndEvent();
    }
L1:
    WaitFor(CharacterType(10000, TargetType.WhitePhantom));
    WaitFixedTimeSeconds(0);
    EndIf(HasMultiplayerState(MultiplayerState.Client));
});

// Boss Defeat SE Play_Saint Beast
$Event(12401801, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12401800));
    flag = EventFlag(12401800);
    WaitFor(flag || (!CharacterBackreadStatus(2400800) && HPRatio(2400800) <= 0));
    EndIf(flag.Passed);
    PlaySE(2402800, SoundType.cCharacterMotion, 0);
});

// Host Enters Boss Room_First Battle_Saint Beast
$Event(12401802, Default, function() {
    EndIf(EventFlag(12401800));
    DeactivateObject(2400801, Disabled);
    EndIf(ThisEvent());
    ChangeCharacterEnableState(2400800, Disabled);
    DeactivateObject(2400801, Enabled);
    SetObjectInvulnerability(2400801, Enabled);
    WaitFor(!EventFlag(12401800) && !ThisEvent() && CharacterType(10000, TargetType.Alive) && InArea(10000, 2402805));
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        IssueBossRoomEntryNotification(0);
    }
    SetEventFlag(12404223, ON);
    EndIf(CharacterType(10000, TargetType.BlackPhantom));
    SetEventFlag(9180, ON);
    WaitFixedTimeFrames(1);
    SetEventFlag(72400400, ON);
    if (!EventFlag(amelia_defeat+13) || EventFlag(12100866)) {
        if (!HasMultiplayerState(MultiplayerState.Multiplayer)) {
            PlayCutsceneToPlayer(24000060, CutscenePlayMode.Skippable, 10000);
        } else {
            PlayCutsceneToPlayer(24000060, CutscenePlayMode.Unskippable, 10000);
        }
    }
    WaitFixedTimeFrames(1);
    DeactivateObject(2400801, Disabled);
    SetEventFlag(9180, OFF);
    ChangeCharacterEnableState(2400800, Enabled);
    ForceAnimationPlayback(2400800, 7000, false, false, false);
    ForceAnimationPlayback(2400800, 7001, false, false, false);
    SetEventFlag(12404800, ON);
    EndIf(EventFlag(9301));
    InitializeEvent(0, 9350, 1);
    SetEventFlag(9301, ON);
});

// President's memory polyplay
$Event(12401803, Default, function() {
    DeleteMapSFX(2403413, false);
    EndIf(ThisEvent());
    if (!EventFlag(12401800)) {
        WaitFor(EventFlag(12401800));
    }
L0:
    SpawnMapSFX(2403413);
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(CharacterType(10000, TargetType.Alive) && ActionButtonInArea(2400010, 2401801));
    SetEventFlag(9180, ON);
    WaitFixedTimeFrames(1);
    DeleteMapSFX(2403413, true);
    PlayCutsceneChangeTimePeriodAndWarpPlayer(24000030, CutscenePlayMode.Skippable, -1, 24, 0, 10000, 2);
    WaitFixedTimeFrames(1);
    SetEventFlag(9180, OFF);
});

// Saint Beast_Staggered entry guest processing
$Event(12401804, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EventFlag(12404800));
    EndIf(HasMultiplayerState(MultiplayerState.Host));
    ChangeCharacterEnableState(2400800, Enabled);
    SetEventFlag(12404800, ON);
    SetEventFlag(12401802, ON);
});

// Host enters boss room_Rematch_Saint Beast
$Event(12404840, Default, function() {
    EndIf(EventFlag(12401800));
    if (!EventFlag(12401802)) {
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            DeactivateObject(2401800, Disabled);
            DeleteMapSFX(2403800, false);
        }
        WaitFor(!EventFlag(12401800) && EventFlag(12401802));
        DeactivateObject(2401800, Enabled);
        SpawnMapSFX(2403800);
    }
L0:
    flagChrAct = !EventFlag(12401800) && CharacterType(10000, TargetType.Alive) && ActionButtonInArea(2400800, 2401800);
    flag = EventFlag(12401800);
    WaitFor(flagChrAct || flag);
    EndIf(flag.Passed);
    RotateCharacter(10000, 2402800, 101130, false);
    chrArea = CharacterType(10000, TargetType.Alive) && InArea(10000, 2402801);
    chr = CharacterType(10000, TargetType.Alive) && ElapsedSeconds(2);
    WaitFor(chrArea || chr);
    if (!chr.Passed) {
        SetEventFlag(12404800, ON);
    }
    RestartEvent();
});

// Guest enters boss room_Saint Beast
$Event(12404841, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12401800));
    WaitFor(
        !EventFlag(12401800)
            && EventFlag(12401802)
            && EventFlag(12404800)
            && CharacterType(10000, TargetType.WhitePhantom)
            && ActionButtonInArea(2400800, 2401800));
    RotateCharacter(10000, 2402800, 101130, false);
    chrArea = CharacterType(10000, TargetType.WhitePhantom) && InArea(10000, 2402801);
    chr = CharacterType(10000, TargetType.WhitePhantom) && ElapsedSeconds(2);
    WaitFor(chrArea || chr);
    if (!chr.Passed) {
        SetEventFlag(12404801, ON);
    }
    RestartEvent();
});

// Disabled per fog wall in other world_Saint Beast
$Event(12404842, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EntityInRadiusOfEntity(10000, 2401800, 6));
    SetCharacterGravityMaphitStateExcludingOwnWorld(10000, Disabled);
    WaitFixedTimeFrames(6);
    RestartEvent();
});

// Disabled per fog wall in other world 2_Saint Beast
$Event(12404843, Default, function() {
    WaitFor(
        CharacterType(10000, TargetType.Alive)
            && !EntityInRadiusOfEntity(10000, 2401800, 6)
            && EntityInRadiusOfEntity(10000, 2401800, 12));
    SetCharacterGravityMaphitStateExcludingOwnWorld(10000, Enabled);
    WaitFixedTimeFrames(6);
    RestartEvent();
});

// Boss starts moving_Saint Beast
$Event(12404802, Default, function() {
    EndIf(EventFlag(12401800));
    SetCharacterAIState(2400800, Disabled);
    SetCharacterHPBarDisplay(2400800, Disabled);
    if (!ThisEvent()) {
        WaitFor(EventFlag(12404800) || EventFlag(amelia_defeat+13));
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            if (!EventFlag(12404223)) {
                IssueBossRoomEntryNotification(0);
            }
            SetNetworkUpdateAuthority(2400800, AuthorityLevel.Forced);
        }
    }
L0:
    SetEventFlag(12404223, ON);
    SetEventFlag(12404800, ON);
    GotoIf(L1, NumberOfCoopClients() == 0);
    GotoIf(L2, NumberOfCoopClients() == 1);
    GotoIf(L3, NumberOfCoopClients() == 2);
L1:
    Goto(L4);
L2:
    SetSpEffect(2400800, 7500, true);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2400800);
    Goto(L4);
L3:
    SetSpEffect(2400800, 7501, true);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2400800);
    Goto(L4);
L4:
    if (EventFlag(amelia_defeat+13)) {
        WaitFixedTimeSeconds(2);
    }
    SetCharacterAIState(2400800, Enabled);
    DisplayBossHealthBar(Enabled, 2400800, 0, 502000);
    ForceAnimationPlayback(2400800, 7002, false, false, false);
    CreatePlaylog(160);
    StartTimeMeasurement(2410010, 176, Enabled);
});

// Boss BGM ON_Saint Beast
$Event(12404803, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12401800));
    if (!ThisEvent()) {
        SetMapSoundState(2403802, Disabled);
        SetMapSoundState(2403803, Disabled);
        flagArea &= !EventFlag(12401800) && EventFlag(12404802);
        if (!HasMultiplayerState(MultiplayerState.Host)) {
            flagArea &= EventFlag(12404801);
        }
        flagArea &= InArea(10000, 2402802);
        WaitFor(flagArea);
        EnableBossMapSound(2403802, Enabled);
        chrFlagArea &= CharacterHasEventMessage(2400800, 100);
    }
L0:
    chrFlagArea &= !EventFlag(12401800) && EventFlag(12404802);
    if (!HasMultiplayerState(MultiplayerState.Host)) {
        chrFlagArea &= EventFlag(12404801);
    }
    chrFlagArea &= InArea(10000, 2402802);
    WaitFor(chrFlagArea);
    EnableBossMapSound(2403802, Disabled);
    WaitFixedTimeFrames(0);
    EnableBossMapSound(2403803, Enabled);
});

// Boss Camera_Saint Beast
$Event(12404804, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12401800));
    WaitFor(HPRatio(2400800) > 0 && EntityInRadiusOfEntity(10000, 2400800, 5.5));
    SetLockcamSlotNumber(24, 0, 1);
    WaitFor(HPRatio(2400800) > 0 && !EntityInRadiusOfEntity(10000, 2400800, 6));
    SetLockcamSlotNumber(24, 0, 0);
    RestartEvent();
});

// Boss BGM OFF_Saint Beast
$Event(12404805, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12401800));
    WaitFor(EventFlag(12401800));
    EnableBossMapSound(2403802, Disabled);
    EnableBossMapSound(2403803, Disabled);
    EnableBossMapSound(-1, Disabled);
});

// Boss Heat Up_Saint Beast
$Event(12404807, Default, function() {
    EndIf(EventFlag(12401800));
    WaitFor(HPRatio(2400800) < 0.5);
    RequestCharacterAICommand(2400800, 100, 1);
    RequestCharacterAIReplan(2400800);
    WaitFor(CharacterHasEventMessage(2400800, 100));
    RequestCharacterAICommand(2400800, -1, 1);
    RequestCharacterAIReplan(2400800);
});

// Boss Part Damage_Cross Soft_Saint Beast
$Event(12404808, Default, function() {
    EndIf(EventFlag(12401800));
    if (!ThisEvent()) {
        WaitFor(CharacterHasSpEffect(2400800, 482));
    }
L0:
    ChangeCharactersCloth(2400800, 15, 2);
});

// Boss Part Damage_Saint Beast_XX
$Event(12404810, Restart, function(X0_2, X4_4, X8_2, X12_4, X16_4, X20_4, X24_4) {
    EndIf(EventFlag(12401800));
    CreateNPCPart(2400800, X0_2, X8_2, X12_4, 1, 1, false, false);
    SetNPCPartSEAndSFX(2400800, X4_4, 72, 72);
    hp = NPCPartHP(2400800, X4_4) <= 0;
    hp2 = HPRatio(2400800) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(2400800, X0_2, X8_2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(2400800, X4_4, 73, 73);
    WaitFixedTimeFrames(1);
    RequestCharacterAnimationReset(2400800, Interpolation.Interpolated);
    ForceAnimationPlayback(2400800, X24_4, false, false, false);
    SetSpEffect(2400800, X16_4, false);
    ClearSpEffect(2400800, X20_4);
    RequestCharacterAIReplan(2400800);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(2400800, 1, 0);
    RequestCharacterAIReplan(2400800);
    WaitFor(CharacterHasEventMessage(2400800, 300));
    SetNPCPartHP(2400800, X4_4, -1, true);
    SetSpEffect(2400800, X20_4, false);
    ClearSpEffect(2400800, X16_4);
    RequestCharacterAICommand(2400800, -1, 0);
    RequestCharacterAIReplan(2400800);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Boss part damage effect_Saint Beast_XX
$Event(12404820, Default, function(X0_4, X4_4, X8_1, X9_1) {
    EndIf(EventFlag(12401800));
    WaitFor(CharacterHasSpEffect(2400800, X0_4) && !CharacterHasSpEffect(2400800, X4_4));
    ChangeCharacterDispmask(2400800, X9_1, OFF);
    ChangeCharacterDispmask(2400800, X8_1, ON);
    WaitFor(!CharacterHasSpEffect(2400800, X0_4) && CharacterHasSpEffect(2400800, X4_4));
    ChangeCharacterDispmask(2400800, X8_1, OFF);
    ChangeCharacterDispmask(2400800, X9_1, ON);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Saint Beast_Cannot be recovered during recovery action
$Event(12404830, Restart, function() {
    WaitFor(CharacterHasSpEffect(2400800, 2150) && CharacterHasSpEffect(2400800, 5639));
    ForceAnimationPlayback(2400800, 3035, false, false, false);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// play environmental sound
$Event(12406900, Restart, function(X0_4, X4_4, X8_4) {
    WaitFor(InArea(10000, X0_4));
    PlaySE(X4_4, SoundType.aEnvironmentalSound, X8_4);
    WaitFixedTimeFrames(1);
});

// Map First Entry_Play Log
$Event(12400990, Default, function() {
    EndIf(ThisEvent());
    WaitFor(PlayerStandingOnHit(2404101));
    ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 194, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 194, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.Weapon, 194, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.Armor, 194, PlayLogMultiplayerType.HostOnly);
});

// warp chair_warp animation play_XX
$Event(12407020, Default, function(X0_4, X4_4) {
    WaitFor(EventFlag(X0_4));
    IssueShortWarpRequest(10000, TargetEntityType.Object, X4_4, 200);
    ForceAnimationPlayback(10000, 101160, false, false, true);
    WaitFixedTimeSeconds(4);
    SetEventFlag(X0_4, OFF);
});

// warp chair_warp_XX
$Event(12407040, Default, function(X0_4, X4_4, X8_4) {
    WaitFor(EventFlag(X0_4));
    SetEventFlag(X0_4, OFF);
    WarpPlayerToRespawnPoint(X4_4);
    SetEventFlag(X8_4, ON);
});

// warp chair_initial activation effect_XX
$Event(12407050, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(EventFlag(X0_4));
    WaitFor(CharacterBackreadStatus(X4_4));
    IssueShortWarpRequest(X4_4, TargetEntityType.Object, X8_4, 250);
    ForceAnimationPlayback(X4_4, 101165, true, false, false);
    WaitFixedTimeSeconds(1);
    IssueShortWarpRequest(X4_4, TargetEntityType.Object, X8_4, 250);
    WaitFor(EventFlag(X0_4));
    ForceAnimationPlayback(X4_4, 101166, false, true, false);
    ChangeCharacterEnableState(X4_4, Disabled);
});

// warp chair_warp post-processing
$Event(12407000, Default, function() {
    if (!AnyBatchEventFlags(9001, 9010)) {
        EndEvent();
    }
    SetEventFlag(9210, ON);
    WaitFor(!EventFlag(9210));
    if (EventFlag(9001)) {
        SetEventFlag(12407811, ON);
        SetEventFlag(12407810, ON);
        SetPlayerRespawnPoint(2402950);
    }
    if (EventFlag(9002)) {
        SetEventFlag(12407831, ON);
        SetEventFlag(12407830, ON);
        SetPlayerRespawnPoint(2402951);
    }
    if (EventFlag(9003)) {
        SetEventFlag(12407851, ON);
        SetEventFlag(12407850, ON);
        SetPlayerRespawnPoint(2402952);
    }
    if (EventFlag(9004)) {
        SetEventFlag(12407871, ON);
        SetEventFlag(12407870, ON);
        SetPlayerRespawnPoint(2402953);
    }
    if (EventFlag(9005)) {
        SetEventFlag(12407891, ON);
        SetEventFlag(12407890, ON);
        SetPlayerRespawnPoint(2402954);
    }
    if (EventFlag(9006)) {
        SetEventFlag(12407911, ON);
        SetEventFlag(12407910, ON);
        SetPlayerRespawnPoint(2402955);
    }
    if (EventFlag(9007)) {
        SetEventFlag(12407931, ON);
        SetEventFlag(12407930, ON);
        SetPlayerRespawnPoint(2402956);
    }
    if (EventFlag(9008)) {
        SetEventFlag(12407951, ON);
        SetEventFlag(12407950, ON);
        SetPlayerRespawnPoint(2402957);
    }
    if (EventFlag(9009)) {
        SetEventFlag(12407971, ON);
        SetEventFlag(12407970, ON);
        SetPlayerRespawnPoint(2402958);
    }
    if (EventFlag(9010)) {
        SetEventFlag(12407991, ON);
        SetEventFlag(12407990, ON);
        SetPlayerRespawnPoint(2402959);
    }
    BatchSetEventFlags(9000, 9010, OFF);
});

// Holy Street_New NPC summons_Aim for the boss room_XX
$Event(12404450, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(ThisEventSlot());
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    SetEventPoint(X0_4, X4_4, 1);
    WaitFor(EventFlag(X8_4) && !EventFlag(X12_4) && EventFlag(X16_4));
    RequestCharacterAICommand(X0_4, 990, 0);
    RequestCharacterAIReplan(X0_4);
});

// Holy Street_New NPC Summoning_Summoning Judgment_Top Hat Hunter
$Event(12404400, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    if (!EventFlag(X0_4)) {
        SetEventFlag(X0_4, OFF);
        DeleteMapSFX(X4_4, true);
        WaitFor(
            PlayerHasItem(ItemType.Goods, 4312)
                && !EventFlag(X8_4)
                && !EventFlag(X12_4)
                && !EventFlag(X16_4)
                && NumberOfClientsOfType(ClientType.Coop) < 2
                && !EventFlag(2400)
                && !EventFlag(2401)
                && !EventFlag(X20_4)
                && HasMultiplayerState(MultiplayerState.Host));
    }
L0:
    SetEventFlag(X0_4, ON);
    SpawnMapSFX(X4_4);
    WaitFor(
        HasMultiplayerState(MultiplayerState.Host)
            && !(PlayerHasItem(ItemType.Goods, 4312)
                && !EventFlag(X8_4)
                && !EventFlag(X12_4)
                && !EventFlag(X16_4)
                && NumberOfClientsOfType(ClientType.Coop) < 2
                && !EventFlag(2400)
                && !EventFlag(2401)
                && !EventFlag(X20_4)));
    SetEventFlag(X0_4, OFF);
    DeleteMapSFX(X4_4, true);
    RestartEvent();
});

// Cathedral Street_New NPC Summon_Participate_XX
$Event(12404410, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    if (!EventFlag(X12_4)) {
        ChangeCharacterEnableState(X4_4, Disabled);
    }
    GotoIf(S0, EventFlag(X16_4));
    GotoIf(S1, HasMultiplayerState(MultiplayerState.Client) && EventFlag(X12_4));
S0:
    ChangeCharacterEnableState(X4_4, Disabled);
S1:
    EndIf(EventFlag(X24_4));
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        SetNetworkUpdateAuthority(X4_4, AuthorityLevel.Forced);
    }
    WaitFor(
        PlayerHasItem(ItemType.Goods, 4312)
            && !EventFlag(X12_4)
            && !EventFlag(X16_4)
            && EventFlag(X20_4)
            && !EventFlag(X24_4)
            && ActionButtonInArea(X28_4, X4_4));
    ForceAnimationPlayback(10000, 100111, false, false, false);
    SetSpEffect(10000, 4682, false);
    SummonNPC(X0_4, X4_4, X8_4, X12_4, X16_4);
    ClearSpEffect(10000, 9005);
    ClearSpEffect(10000, 9025);
    WaitFixedTimeSeconds(5);
    DisplayMessage(100051, 0);
    ActivateHit(2404120, Disabled);
});

// Cathedral Street_New NPC summons_Enter boss room_XX
$Event(12404460, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(EventFlag(X20_4) && InArea(X0_4, X4_4));
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    RotateCharacter(X0_4, X8_4, X16_4, true);
    RestartIf(!InArea(X0_4, X12_4));
    SetEventPoint(X0_4, X8_4, 1);
    RequestCharacterAICommand(X0_4, 990, 0);
    RequestCharacterAIReplan(X0_4);
    SetCharacterGravity(X0_4, Disabled);
    SetCharacterMaphits(X0_4, true);
    WaitFor(InArea(X0_4, X24_4));
    SetCharacterGravity(X0_4, Enabled);
    SetCharacterMaphits(X0_4, false);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
});

// Holy Street_New NPC summons_Disable throw during boss battle__Top Hat Hunter
$Event(12404490, Restart, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(
        HasMultiplayerState(MultiplayerState.Host) && EventFlag(12404420) && !EventFlag(12404430) && EventFlag(12404800));
    SetSpEffectAndUnknown200455(2400910, 35, false);
    WaitFixedTimeFrames(1);
    RestartEvent();
});
