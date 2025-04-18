// ==EMEVD==
// @docs    bb-common.emedf.json
// @compress    DCX_DFLT_10000_44_9
// @game    Bloodborne
// @string    "クリア時間_通し\u0000クリア時間_1プレイ\u0000ボス戦_撃破時間\u0000ボス_撃破\u0000PC情報_ボス撃破_月の落とし子\u0000ボス_戦闘開始\u0000PC情報_ボス撃破_月からの使者\u0000PC情報_聖堂街C到達時\u0000N:\\SPRJ\\data\\Param\\event\\common.emevd\u0000"
// @linked    [180]
// @version    3.4.2
// ==/EMEVD==

const area_id = 24;
const block_id = 2;

const upper_ward_lamp_offset = 20;
const upper_ward_lamp_id = 2421950;
const upper_ward_lamp_kindle = 12110000 + (area_id * 100) + (block_id * 10);

const celestial_emissary_lamp_offset = 21;
const celestial_emissary_offset = 12;
const celestial_emissary_defeat = 12421700;
const celestial_emissary_return = 2421799;
const celestial_emissary_lamp_id = 2421952;
const celestial_emissary_lamp_kindle = 12110000 + (area_id * 100) + (block_id * 10) + 2;
const celestial_emissary_region = 2422812;
const celestial_emissary_id = 2420811;

const ebrietas_lamp_offset = 22;
const ebrietas_offset = 13;
const ebrietas_defeat = 12421800;
const ebrietas_return = 2421899;
const ebrietas_lamp_id = 2421951;
const ebrietas_lamp_kindle = 12110000 + (area_id * 100) + (block_id * 10) + 4;
const ebrietas_region = 2422802;
const ebrietas_id = 2420800;

// front gate 2421200

// constructor
$Event(0, Default, function() {
    
    SetEventFlag(8900+celestial_emissary_offset, OFF);
    SetEventFlag(8900+ebrietas_offset, OFF);
    
    InitializeEvent(10, 7900, 10000000+celestial_emissary_return, celestial_emissary_return, area_id, block_id, 8500+upper_ward_lamp_offset);
    InitializeEvent(11, 7900, 10000000+ebrietas_return, ebrietas_return, area_id, block_id, 8500+upper_ward_lamp_offset);
    InitializeEvent(12, 7900, 10000000+ebrietas_return-2, ebrietas_return, area_id, block_id, 8500+celestial_emissary_lamp_offset);
    
    InitializeEvent(upper_ward_lamp_offset, 8500, 8500+upper_ward_lamp_offset, upper_ward_lamp_id, 72110606);
    InitializeEvent(celestial_emissary_lamp_offset, 8500, 8500+celestial_emissary_lamp_offset, celestial_emissary_lamp_id, 72110707);
    InitializeEvent(ebrietas_lamp_offset, 8500, 8500+ebrietas_lamp_offset, ebrietas_lamp_id, 72110808);
    
    InitializeEvent(upper_ward_lamp_offset, 8100, 8100+upper_ward_lamp_offset, upper_ward_lamp_kindle);
    InitializeEvent(celestial_emissary_lamp_offset, 8100, 8100+celestial_emissary_lamp_offset, celestial_emissary_lamp_kindle);
    InitializeEvent(ebrietas_lamp_offset, 8100, 8100+ebrietas_lamp_offset, ebrietas_lamp_kindle);
    
    InitializeEvent(upper_ward_lamp_offset, 8300, upper_ward_lamp_id+2000, -1, upper_ward_lamp_kindle, upper_ward_lamp_id+6000, upper_ward_lamp_id+3000);
    
    if(EventFlag(celestial_emissary_defeat+13) && ! EventFlag(celestial_emissary_defeat-1)) {
        if (EventFlag(celestial_emissary_defeat-2)) {
            SetEventFlag(celestial_emissary_defeat-2, OFF);
            InitializeEvent(celestial_emissary_offset, 7500, celestial_emissary_region, celestial_emissary_lamp_id+4000);
        }
        SetEventFlag(celestial_emissary_defeat+13, OFF);
        SetEventFlag(celestial_emissary_defeat, ON);
        InitializeEvent(celestial_emissary_lamp_offset, 8300, celestial_emissary_lamp_id+2000, 999, celestial_emissary_lamp_kindle, celestial_emissary_lamp_id+6000, celestial_emissary_lamp_id+3000);
        DummyPlayCutsceneAndWarpPlayer(celestial_emissary_lamp_id+4000, area_id, block_id);
    }
    else if (EventFlag(celestial_emissary_defeat+12) || EventFlag(celestial_emissary_defeat-1)) {
        if (EventFlag(celestial_emissary_defeat-2)) {
            SetEventFlag(celestial_emissary_defeat-2, OFF);
            InitializeEvent(celestial_emissary_offset, 7500, celestial_emissary_region, celestial_emissary_lamp_id+5000);
        }
        SetEventFlag(celestial_emissary_defeat, OFF);
        SetEventFlag(celestial_emissary_defeat+2, OFF);
        SetEventFlag(celestial_emissary_defeat+12, OFF);
        SetEventFlag(celestial_emissary_defeat+13, ON);
        SetEventFlag(celestial_emissary_defeat-1, OFF);
        SetEventFlag(8900+celestial_emissary_offset, ON);
        InitializeEvent(celestial_emissary_lamp_offset, 8300, celestial_emissary_lamp_id+2000, -1, celestial_emissary_lamp_kindle, celestial_emissary_lamp_id+6000, celestial_emissary_lamp_id+3000);
    }
    else {
        InitializeEvent(celestial_emissary_lamp_offset, 8300, celestial_emissary_lamp_id+2000, -1, celestial_emissary_lamp_kindle, celestial_emissary_lamp_id+6000, celestial_emissary_lamp_id+3000);
    }
    
    if(EventFlag(ebrietas_defeat+13) && !EventFlag(ebrietas_defeat-1)) {
        if (EventFlag(ebrietas_defeat-2)) {
            SetEventFlag(ebrietas_defeat-2, OFF);
            InitializeEvent(ebrietas_offset, 7500, ebrietas_region, ebrietas_lamp_id+4000);
        }
        SetEventFlag(ebrietas_defeat+13, OFF);
        SetEventFlag(ebrietas_defeat, ON);
        InitializeEvent(ebrietas_lamp_offset, 8300, ebrietas_lamp_id+2000, 999, ebrietas_lamp_kindle, ebrietas_lamp_id+6000, ebrietas_lamp_id+3000);
        DummyPlayCutsceneAndWarpPlayer(ebrietas_lamp_id+4000, area_id, block_id);
    }
    else if (EventFlag(ebrietas_defeat+12) || EventFlag(ebrietas_defeat-1)) {
        if (EventFlag(ebrietas_defeat-2)) {
            SetEventFlag(ebrietas_defeat-2, OFF);
            InitializeEvent(ebrietas_offset, 7500, ebrietas_region, ebrietas_lamp_id+5000);
        }
        SetEventFlag(ebrietas_defeat, OFF);
        SetEventFlag(ebrietas_defeat+2, ON);
        SetEventFlag(ebrietas_defeat+3000, ON);
        SetEventFlag(ebrietas_defeat+3002, ON);
        SetEventFlag(ebrietas_defeat+12, OFF);
        SetEventFlag(ebrietas_defeat+13, ON);
        SetEventFlag(ebrietas_defeat-1, OFF);
        SetEventFlag(8900+ebrietas_offset, ON);
        InitializeEvent(ebrietas_lamp_offset, 8300, ebrietas_lamp_id+2000, -1, ebrietas_lamp_kindle, ebrietas_lamp_id+6000, ebrietas_lamp_id+3000);
    }
    else {
        InitializeEvent(ebrietas_lamp_offset, 8300, ebrietas_lamp_id+2000, -1, ebrietas_lamp_kindle, ebrietas_lamp_id+6000, ebrietas_lamp_id+3000);
    }
    
    InitializeEvent(celestial_emissary_offset, 12102070, celestial_emissary_defeat+13, 0, 7459, celestial_emissary_id);
    InitializeEvent(ebrietas_offset, 12102070, ebrietas_defeat+13, 0, 7462, ebrietas_id);
    
    InitializeEvent(celestial_emissary_offset, 8900, celestial_emissary_defeat-1, celestial_emissary_lamp_id+1000, celestial_emissary_defeat-2, 0, 0, celestial_emissary_lamp_id+5000, area_id, block_id);
    InitializeEvent(ebrietas_offset, 8900, ebrietas_defeat-1, ebrietas_lamp_id+1000, ebrietas_defeat-2, 0, 0, ebrietas_lamp_id+5000, area_id, block_id);
    
    InitializeEvent(celestial_emissary_offset, 7700, celestial_emissary_defeat+11, celestial_emissary_defeat+12, celestial_emissary_lamp_id+1000, 824200);
    InitializeEvent(ebrietas_offset, 7700, ebrietas_defeat+11, ebrietas_defeat+12, ebrietas_lamp_id+1000, 824201);
    
    InitializeEvent(600, 12107000, 72110600, 2421950, 2412950);
    InitializeEvent(601, 12107000, 72110601, 2421950, 2412951);
    InitializeEvent(602, 12107000, 72110602, 2421950, 2412952);
    InitializeEvent(603, 12107000, 72110603, 2421950, 2412953);
    InitializeEvent(604, 12107000, 72110604, 2421950, 2402950);
    InitializeEvent(605, 12107000, 72110605, 2421950, 2402951);
    InitializeEvent(606, 12107000, 72110606, 2421950, 2422950);
    InitializeEvent(607, 12107000, 72110607, 2421950, 2422952);
    InitializeEvent(608, 12107000, 72110608, 2421950, 2422951);
    InitializeEvent(609, 12107000, 72110609, 2421950, 2302950);
    InitializeEvent(610, 12107000, 72110610, 2421950, 2302951);
    InitializeEvent(611, 12107000, 72110611, 2421950, 2302952);
    InitializeEvent(612, 12107000, 72110612, 2421950, 2202950);
    InitializeEvent(613, 12107000, 72110613, 2421950, 2202951);
    InitializeEvent(614, 12107000, 72110614, 2421950, 2702950);
    InitializeEvent(615, 12107000, 72110615, 2421950, 2702951);
    InitializeEvent(616, 12107000, 72110616, 2421950, 3202950);
    InitializeEvent(617, 12107000, 72110617, 2421950, 3202952);
    InitializeEvent(618, 12107000, 72110618, 2421950, 2802950);
    InitializeEvent(619, 12107000, 72110619, 2421950, 2802953);
    InitializeEvent(620, 12107000, 72110620, 2421950, 2802951);
    InitializeEvent(621, 12107000, 72110621, 2421950, 2802952);
    InitializeEvent(622, 12107000, 72110622, 2421950, 2502950);
    InitializeEvent(623, 12107000, 72110623, 2421950, 2502952);
    InitializeEvent(624, 12107000, 72110624, 2421950, 2502951);
    InitializeEvent(625, 12107000, 72110625, 2421950, 2112950);
    InitializeEvent(626, 12107000, 72110626, 2421950, 3202951);
    InitializeEvent(627, 12107000, 72110627, 2421950, 3202953);
    InitializeEvent(628, 12107000, 72110628, 2421950, 3302950);
    InitializeEvent(629, 12107000, 72110629, 2421950, 3302951);
    InitializeEvent(630, 12107000, 72110630, 2421950, 2602950);
    InitializeEvent(631, 12107000, 72110631, 2421950, 2602953);
    InitializeEvent(632, 12107000, 72110632, 2421950, 2602952);
    InitializeEvent(633, 12107000, 72110633, 2421950, 2602951);
    InitializeEvent(634, 12107000, 72110634, 2421950, 3402950);
    InitializeEvent(635, 12107000, 72110635, 2421950, 3402951);
    InitializeEvent(636, 12107000, 72110636, 2421950, 3402953);
    InitializeEvent(637, 12107000, 72110637, 2421950, 3402952);
    InitializeEvent(638, 12107000, 72110638, 2421950, 3502950);
    InitializeEvent(639, 12107000, 72110639, 2421950, 3502951);
    InitializeEvent(640, 12107000, 72110640, 2421950, 3502952);
    InitializeEvent(641, 12107000, 72110641, 2421950, 3602950);
    InitializeEvent(642, 12107000, 72110642, 2421950, 3602951);
    InitializeEvent(643, 12107000, 72110643, 2421950, 3602952);
    InitializeEvent(644, 12107000, 72110644, 2421950, 2902950);
    InitializeEvent(645, 12107000, 72110645, 2421950, 2902951);
    InitializeEvent(646, 12107000, 72110646, 2421950, 2902952);
    InitializeEvent(647, 12107000, 72110647, 2421950, 2902953);
    InitializeEvent(648, 12107000, 72110648, 2421950, 2902954);
    InitializeEvent(649, 12107000, 72110649, 2421950, 2902955);
    InitializeEvent(650, 12107000, 72110650, 2421950, 2902956);
    InitializeEvent(651, 12107000, 72110651, 2421950, 2902957);
    InitializeEvent(652, 12107000, 72110652, 2421950, 2902958);
    InitializeEvent(653, 12107000, 72110653, 2421950, 2902959);

    InitializeEvent(700, 12107000, 72110700, 2421952, 2412950);
    InitializeEvent(701, 12107000, 72110701, 2421952, 2412951);
    InitializeEvent(702, 12107000, 72110702, 2421952, 2412952);
    InitializeEvent(703, 12107000, 72110703, 2421952, 2412953);
    InitializeEvent(704, 12107000, 72110704, 2421952, 2402950);
    InitializeEvent(705, 12107000, 72110705, 2421952, 2402951);
    InitializeEvent(706, 12107000, 72110706, 2421952, 2422950);
    InitializeEvent(707, 12107000, 72110707, 2421952, 2422952);
    InitializeEvent(708, 12107000, 72110708, 2421952, 2422951);
    InitializeEvent(709, 12107000, 72110709, 2421952, 2302950);
    InitializeEvent(710, 12107000, 72110710, 2421952, 2302951);
    InitializeEvent(711, 12107000, 72110711, 2421952, 2302952);
    InitializeEvent(712, 12107000, 72110712, 2421952, 2202950);
    InitializeEvent(713, 12107000, 72110713, 2421952, 2202951);
    InitializeEvent(714, 12107000, 72110714, 2421952, 2702950);
    InitializeEvent(715, 12107000, 72110715, 2421952, 2702951);
    InitializeEvent(716, 12107000, 72110716, 2421952, 3202950);
    InitializeEvent(717, 12107000, 72110717, 2421952, 3202952);
    InitializeEvent(718, 12107000, 72110718, 2421952, 2802950);
    InitializeEvent(719, 12107000, 72110719, 2421952, 2802953);
    InitializeEvent(720, 12107000, 72110720, 2421952, 2802951);
    InitializeEvent(721, 12107000, 72110721, 2421952, 2802952);
    InitializeEvent(722, 12107000, 72110722, 2421952, 2502950);
    InitializeEvent(723, 12107000, 72110723, 2421952, 2502952);
    InitializeEvent(724, 12107000, 72110724, 2421952, 2502951);
    InitializeEvent(725, 12107000, 72110725, 2421952, 2112950);
    InitializeEvent(726, 12107000, 72110726, 2421952, 3202951);
    InitializeEvent(727, 12107000, 72110727, 2421952, 3202953);
    InitializeEvent(728, 12107000, 72110728, 2421952, 3302950);
    InitializeEvent(729, 12107000, 72110729, 2421952, 3302951);
    InitializeEvent(730, 12107000, 72110730, 2421952, 2602950);
    InitializeEvent(731, 12107000, 72110731, 2421952, 2602953);
    InitializeEvent(732, 12107000, 72110732, 2421952, 2602952);
    InitializeEvent(733, 12107000, 72110733, 2421952, 2602951);
    InitializeEvent(734, 12107000, 72110734, 2421952, 3402950);
    InitializeEvent(735, 12107000, 72110735, 2421952, 3402951);
    InitializeEvent(736, 12107000, 72110736, 2421952, 3402953);
    InitializeEvent(737, 12107000, 72110737, 2421952, 3402952);
    InitializeEvent(738, 12107000, 72110738, 2421952, 3502950);
    InitializeEvent(739, 12107000, 72110739, 2421952, 3502951);
    InitializeEvent(740, 12107000, 72110740, 2421952, 3502952);
    InitializeEvent(741, 12107000, 72110741, 2421952, 3602950);
    InitializeEvent(742, 12107000, 72110742, 2421952, 3602951);
    InitializeEvent(743, 12107000, 72110743, 2421952, 3602952);
    InitializeEvent(744, 12107000, 72110744, 2421952, 2902950);
    InitializeEvent(745, 12107000, 72110745, 2421952, 2902951);
    InitializeEvent(746, 12107000, 72110746, 2421952, 2902952);
    InitializeEvent(747, 12107000, 72110747, 2421952, 2902953);
    InitializeEvent(748, 12107000, 72110748, 2421952, 2902954);
    InitializeEvent(749, 12107000, 72110749, 2421952, 2902955);
    InitializeEvent(750, 12107000, 72110750, 2421952, 2902956);
    InitializeEvent(751, 12107000, 72110751, 2421952, 2902957);
    InitializeEvent(752, 12107000, 72110752, 2421952, 2902958);
    InitializeEvent(753, 12107000, 72110753, 2421952, 2902959);

    InitializeEvent(800, 12107000, 72110800, 2421951, 2412950);
    InitializeEvent(801, 12107000, 72110801, 2421951, 2412951);
    InitializeEvent(802, 12107000, 72110802, 2421951, 2412952);
    InitializeEvent(803, 12107000, 72110803, 2421951, 2412953);
    InitializeEvent(804, 12107000, 72110804, 2421951, 2402950);
    InitializeEvent(805, 12107000, 72110805, 2421951, 2402951);
    InitializeEvent(806, 12107000, 72110806, 2421951, 2422950);
    InitializeEvent(807, 12107000, 72110807, 2421951, 2422952);
    InitializeEvent(808, 12107000, 72110808, 2421951, 2422951);
    InitializeEvent(809, 12107000, 72110809, 2421951, 2302950);
    InitializeEvent(810, 12107000, 72110810, 2421951, 2302951);
    InitializeEvent(811, 12107000, 72110811, 2421951, 2302952);
    InitializeEvent(812, 12107000, 72110812, 2421951, 2202950);
    InitializeEvent(813, 12107000, 72110813, 2421951, 2202951);
    InitializeEvent(814, 12107000, 72110814, 2421951, 2702950);
    InitializeEvent(815, 12107000, 72110815, 2421951, 2702951);
    InitializeEvent(816, 12107000, 72110816, 2421951, 3202950);
    InitializeEvent(817, 12107000, 72110817, 2421951, 3202952);
    InitializeEvent(818, 12107000, 72110818, 2421951, 2802950);
    InitializeEvent(819, 12107000, 72110819, 2421951, 2802953);
    InitializeEvent(820, 12107000, 72110820, 2421951, 2802951);
    InitializeEvent(821, 12107000, 72110821, 2421951, 2802952);
    InitializeEvent(822, 12107000, 72110822, 2421951, 2502950);
    InitializeEvent(823, 12107000, 72110823, 2421951, 2502952);
    InitializeEvent(824, 12107000, 72110824, 2421951, 2502951);
    InitializeEvent(825, 12107000, 72110825, 2421951, 2112950);
    InitializeEvent(826, 12107000, 72110826, 2421951, 3202951);
    InitializeEvent(827, 12107000, 72110827, 2421951, 3202953);
    InitializeEvent(828, 12107000, 72110828, 2421951, 3302950);
    InitializeEvent(829, 12107000, 72110829, 2421951, 3302951);
    InitializeEvent(830, 12107000, 72110830, 2421951, 2602950);
    InitializeEvent(831, 12107000, 72110831, 2421951, 2602953);
    InitializeEvent(832, 12107000, 72110832, 2421951, 2602952);
    InitializeEvent(833, 12107000, 72110833, 2421951, 2602951);
    InitializeEvent(834, 12107000, 72110834, 2421951, 3402950);
    InitializeEvent(835, 12107000, 72110835, 2421951, 3402951);
    InitializeEvent(836, 12107000, 72110836, 2421951, 3402953);
    InitializeEvent(837, 12107000, 72110837, 2421951, 3402952);
    InitializeEvent(838, 12107000, 72110838, 2421951, 3502950);
    InitializeEvent(839, 12107000, 72110839, 2421951, 3502951);
    InitializeEvent(840, 12107000, 72110840, 2421951, 3502952);
    InitializeEvent(841, 12107000, 72110841, 2421951, 3602950);
    InitializeEvent(842, 12107000, 72110842, 2421951, 3602951);
    InitializeEvent(843, 12107000, 72110843, 2421951, 3602952);
    InitializeEvent(844, 12107000, 72110844, 2421951, 2902950);
    InitializeEvent(845, 12107000, 72110845, 2421951, 2902951);
    InitializeEvent(846, 12107000, 72110846, 2421951, 2902952);
    InitializeEvent(847, 12107000, 72110847, 2421951, 2902953);
    InitializeEvent(848, 12107000, 72110848, 2421951, 2902954);
    InitializeEvent(849, 12107000, 72110849, 2421951, 2902955);
    InitializeEvent(850, 12107000, 72110850, 2421951, 2902956);
    InitializeEvent(851, 12107000, 72110851, 2421951, 2902957);
    InitializeEvent(852, 12107000, 72110852, 2421951, 2902958);
    InitializeEvent(853, 12107000, 72110853, 2421951, 2902959);

    SetEventFlag(72110006, OFF);
    SetEventFlag(72110106, OFF);
    SetEventFlag(72110206, OFF);
    SetEventFlag(72110306, OFF);
    SetEventFlag(72110406, OFF);
    SetEventFlag(72110506, OFF);
    SetEventFlag(72110606, OFF);
    SetEventFlag(72110706, OFF);
    SetEventFlag(72110806, OFF);
    SetEventFlag(72110906, OFF);
    SetEventFlag(72111006, OFF);
    SetEventFlag(72111106, OFF);
    SetEventFlag(72111206, OFF);
    SetEventFlag(72111306, OFF);
    SetEventFlag(72111406, OFF);
    SetEventFlag(72111506, OFF);
    SetEventFlag(72111606, OFF);
    SetEventFlag(72111706, OFF);
    SetEventFlag(72111806, OFF);
    SetEventFlag(72111906, OFF);
    SetEventFlag(72112006, OFF);
    SetEventFlag(72112106, OFF);
    SetEventFlag(72112206, OFF);
    SetEventFlag(72112306, OFF);
    SetEventFlag(72112406, OFF);
    SetEventFlag(72112506, OFF);
    SetEventFlag(72112606, OFF);
    SetEventFlag(72112706, OFF);
    SetEventFlag(72112806, OFF);
    SetEventFlag(72112906, OFF);
    SetEventFlag(72113006, OFF);
    SetEventFlag(72113106, OFF);
    SetEventFlag(72113206, OFF);
    SetEventFlag(72113306, OFF);
    SetEventFlag(72113406, OFF);
    SetEventFlag(72113506, OFF);
    SetEventFlag(72113606, OFF);
    SetEventFlag(72113706, OFF);
    SetEventFlag(72113806, OFF);
    SetEventFlag(72113906, OFF);
    SetEventFlag(72114006, OFF);
    SetEventFlag(72114106, OFF);
    SetEventFlag(72114206, OFF);
    SetEventFlag(72114306, OFF);
    SetEventFlag(72114406, OFF);
    SetEventFlag(72114506, OFF);
    SetEventFlag(72114606, OFF);
    SetEventFlag(72114706, OFF);
    SetEventFlag(72114806, OFF);
    SetEventFlag(72114906, OFF);
    SetEventFlag(72115006, OFF);
    SetEventFlag(72115106, OFF);
    SetEventFlag(72115206, OFF);
    SetEventFlag(72115306, OFF);

    SetEventFlag(72110007, OFF);
    SetEventFlag(72110107, OFF);
    SetEventFlag(72110207, OFF);
    SetEventFlag(72110307, OFF);
    SetEventFlag(72110407, OFF);
    SetEventFlag(72110507, OFF);
    SetEventFlag(72110607, OFF);
    SetEventFlag(72110707, OFF);
    SetEventFlag(72110807, OFF);
    SetEventFlag(72110907, OFF);
    SetEventFlag(72111007, OFF);
    SetEventFlag(72111107, OFF);
    SetEventFlag(72111207, OFF);
    SetEventFlag(72111307, OFF);
    SetEventFlag(72111407, OFF);
    SetEventFlag(72111507, OFF);
    SetEventFlag(72111607, OFF);
    SetEventFlag(72111707, OFF);
    SetEventFlag(72111807, OFF);
    SetEventFlag(72111907, OFF);
    SetEventFlag(72112007, OFF);
    SetEventFlag(72112107, OFF);
    SetEventFlag(72112207, OFF);
    SetEventFlag(72112307, OFF);
    SetEventFlag(72112407, OFF);
    SetEventFlag(72112507, OFF);
    SetEventFlag(72112607, OFF);
    SetEventFlag(72112707, OFF);
    SetEventFlag(72112807, OFF);
    SetEventFlag(72112907, OFF);
    SetEventFlag(72113007, OFF);
    SetEventFlag(72113107, OFF);
    SetEventFlag(72113207, OFF);
    SetEventFlag(72113307, OFF);
    SetEventFlag(72113407, OFF);
    SetEventFlag(72113507, OFF);
    SetEventFlag(72113607, OFF);
    SetEventFlag(72113707, OFF);
    SetEventFlag(72113807, OFF);
    SetEventFlag(72113907, OFF);
    SetEventFlag(72114007, OFF);
    SetEventFlag(72114107, OFF);
    SetEventFlag(72114207, OFF);
    SetEventFlag(72114307, OFF);
    SetEventFlag(72114407, OFF);
    SetEventFlag(72114507, OFF);
    SetEventFlag(72114607, OFF);
    SetEventFlag(72114707, OFF);
    SetEventFlag(72114807, OFF);
    SetEventFlag(72114907, OFF);
    SetEventFlag(72115007, OFF);
    SetEventFlag(72115107, OFF);
    SetEventFlag(72115207, OFF);
    SetEventFlag(72115307, OFF);

    SetEventFlag(72110008, OFF);
    SetEventFlag(72110108, OFF);
    SetEventFlag(72110208, OFF);
    SetEventFlag(72110308, OFF);
    SetEventFlag(72110408, OFF);
    SetEventFlag(72110508, OFF);
    SetEventFlag(72110608, OFF);
    SetEventFlag(72110708, OFF);
    SetEventFlag(72110808, OFF);
    SetEventFlag(72110908, OFF);
    SetEventFlag(72111008, OFF);
    SetEventFlag(72111108, OFF);
    SetEventFlag(72111208, OFF);
    SetEventFlag(72111308, OFF);
    SetEventFlag(72111408, OFF);
    SetEventFlag(72111508, OFF);
    SetEventFlag(72111608, OFF);
    SetEventFlag(72111708, OFF);
    SetEventFlag(72111808, OFF);
    SetEventFlag(72111908, OFF);
    SetEventFlag(72112008, OFF);
    SetEventFlag(72112108, OFF);
    SetEventFlag(72112208, OFF);
    SetEventFlag(72112308, OFF);
    SetEventFlag(72112408, OFF);
    SetEventFlag(72112508, OFF);
    SetEventFlag(72112608, OFF);
    SetEventFlag(72112708, OFF);
    SetEventFlag(72112808, OFF);
    SetEventFlag(72112908, OFF);
    SetEventFlag(72113008, OFF);
    SetEventFlag(72113108, OFF);
    SetEventFlag(72113208, OFF);
    SetEventFlag(72113308, OFF);
    SetEventFlag(72113408, OFF);
    SetEventFlag(72113508, OFF);
    SetEventFlag(72113608, OFF);
    SetEventFlag(72113708, OFF);
    SetEventFlag(72113808, OFF);
    SetEventFlag(72113908, OFF);
    SetEventFlag(72114008, OFF);
    SetEventFlag(72114108, OFF);
    SetEventFlag(72114208, OFF);
    SetEventFlag(72114308, OFF);
    SetEventFlag(72114408, OFF);
    SetEventFlag(72114508, OFF);
    SetEventFlag(72114608, OFF);
    SetEventFlag(72114708, OFF);
    SetEventFlag(72114808, OFF);
    SetEventFlag(72114908, OFF);
    SetEventFlag(72115008, OFF);
    SetEventFlag(72115108, OFF);
    SetEventFlag(72115208, OFF);
    SetEventFlag(72115308, OFF);

    InitializeEvent(0, 12107100, 72100421, 2421950, 9021);
    InitializeEvent(1, 12107100, 72100422, 2421950, 9022);
    InitializeEvent(2, 12107100, 72100423, 2421950, 9023);
    InitializeEvent(3, 12107100, 72100424, 2421950, 9024);
    InitializeEvent(4, 12107100, 72100425, 2421950, 9025);
    InitializeEvent(5, 12107100, 72100426, 2421950, 9026);

    InitializeEvent(6, 12107100, 72100427, 2421951, 9021);
    InitializeEvent(7, 12107100, 72100428, 2421951, 9022);
    InitializeEvent(8, 12107100, 72100429, 2421951, 9023);
    InitializeEvent(9, 12107100, 72100430, 2421951, 9024);
    InitializeEvent(10, 12107100, 72100431, 2421951, 9025);
    InitializeEvent(11, 12107100, 72100432, 2421951, 9026);

    InitializeEvent(12, 12107100, 72100433, 2421952, 9021);
    InitializeEvent(13, 12107100, 72100434, 2421952, 9022);
    InitializeEvent(14, 12107100, 72100435, 2421952, 9023);
    InitializeEvent(15, 12107100, 72100436, 2421952, 9024);
    InitializeEvent(16, 12107100, 72100437, 2421952, 9025);
    InitializeEvent(17, 12107100, 72100438, 2421952, 9026);

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

    InitializeEvent(20, 12107200, 72100320, 2902950, 9001, 2901952);
    InitializeEvent(21, 12107200, 72100321, 2902951, 9002, 2901952);
    InitializeEvent(22, 12107200, 72100322, 2902952, 9003, 2901952);
    InitializeEvent(23, 12107200, 72100323, 2902953, 9004, 2901952);
    InitializeEvent(24, 12107200, 72100324, 2902954, 9005, 2901952);
    InitializeEvent(25, 12107200, 72100325, 2902955, 9006, 2901952);
    InitializeEvent(26, 12107200, 72100326, 2902956, 9007, 2901952);
    InitializeEvent(27, 12107200, 72100327, 2902957, 9008, 2901952);
    InitializeEvent(28, 12107200, 72100328, 2902958, 9009, 2901952);
    InitializeEvent(29, 12107200, 72100329, 2902959, 9010, 2901952);
    
    InitializeEvent(20, 7000, 2420950, 2421950, 999, 12427800, -1);
    
    InitializeEvent(21, 7000, 2420951, 2421951, 12421800, 12427820, ebrietas_defeat+13);
    InitializeEvent(ebrietas_offset, 8800, ebrietas_defeat+13, ebrietas_lamp_id-1000, ebrietas_lamp_id, ebrietas_lamp_id+3000);
    
    InitializeEvent(22, 7000, 2420952, 2421952, 12421700, 12427840, celestial_emissary_defeat+13);
    InitializeEvent(celestial_emissary_offset, 8800, celestial_emissary_defeat+13, celestial_emissary_lamp_id-1000, celestial_emissary_lamp_id, celestial_emissary_lamp_id+3000);
    
    InitializeEvent(20, 7100, 72420200, 2421950);
    InitializeEvent(21, 7100, 72420201, 2421951);
    InitializeEvent(22, 7100, 72420202, 2421952);
    InitializeEvent(20, 7200, 72420100, 2421950, 2102950);
    InitializeEvent(21, 7200, 72420101, 2421951, 2102950);
    InitializeEvent(22, 7200, 72420102, 2421952, 2102950);
    InitializeEvent(20, 7300, 72102420, 2421950);
    InitializeEvent(21, 7300, 72102421, 2421951);
    InitializeEvent(22, 7300, 72102422, 2421952);
    InitializeEvent(20, 12102220, 2421950, 2420950);
    InitializeEvent(21, 12102220, 2421951, 2420951);
    InitializeEvent(22, 12102220, 2421952, 2420952);
    DeleteMapSFX(2423910, false);
    InitializeEvent(0, 12424400, 12424440, 2423910, 12424420, 12424430, 12421800, 6001);
    InitializeEvent(0, 12424410, 0, 2420910, 2422910, 12424420, 12424430, 12424440, 12421800, 10566);
    InitializeEvent(0, 12424450, 2420910, 2422911, 12424420, 12424430, 12424800);
    InitializeEvent(0, 12424460, 2420910, 2422911, 2422800, 2422801, 101130, 12424450, 2422801);
    InitializeEvent(4, 9200, 2423900);
    InitializeEvent(4, 9220, 2420710, 12424220, 12424221, 2420, 536);
    InitializeEvent(4, 9240, 2420710, 12424220, 12424221, 12424222, 536);
    InitializeEvent(4, 9260, 2420710, 12424220, 12424221, 12424222, 536);
    InitializeEvent(4, 9280, 2420710, 12424220, 12424221, 2420, 12424700, 536);
    StartTimeMeasurement(2420000, 0, Enabled);
    StartTimeMeasurement(2420001, 18, Enabled);
    InitializeEvent(0, 12420990, 0);
    InitializeEvent(0, 12420400, 0);
    InitializeEvent(40, 7600, 2421999, 2423999);
    InitializeEvent(41, 7600, 2421998, 2423998);
    CreateDamagingObject(12420020, 2421230, 100, 6110, DamageTargetType.Character, 0.6, 0, 1);
    InitializeEvent(0, 12420123, 0);
    InitializeEvent(0, 12420124, 0);
    InitializeEvent(0, 12420140, 0);
    InitializeEvent(0, 12420150, 0);
    InitializeEvent(0, 12420151, 0);
    InitializeEvent(0, 12420152, 0);
    InitializeEvent(0, 12420153, 0);
    InitializeEvent(0, 12420156, 0);
    InitializeEvent(0, 12420850, 2427020, 2427021, 2427022, 12420130, 12420102, 1073741824, 2427000, 920200);
    InitializeEvent(1, 12420850, 2427025, 2427026, 2427027, 12420132, 12420110, 1077936128, 2427017, 920202);
    InitializeEvent(2, 12420850, 2427028, 2427029, 2427030, 12420131, 12420111, 1077936128, 2427016, 920203);
    InitializeEvent(0, 12420853, 0);
    InitializeEvent(0, 12420854, 0);
    InitializeEvent(0, 12420280, 2422500);
    InitializeEvent(1, 12420280, 2422501);
    InitializeEvent(0, 12420285, 2422502, 12420032);
    InitializeEvent(1, 12420285, 2422503, 12420033);
    InitializeEvent(0, 12420000, 2421201, 1, 2420020, 12420120);
    InitializeEvent(1, 12420000, 2421223, 1, 2420030, 12420121);
    InitializeEvent(0, 12420030, 12420120);
    InitializeEvent(2, 12420030, 12420126);
    InitializeEvent(3, 12420030, 12420127);
    InitializeEvent(0, 12420050, 2421100, 12421000, 9942);
    InitializeEvent(1, 12420050, 2421101, 12421001, 9942);
    SetMapSoundState(2423802, Disabled);
    SetMapSoundState(2423803, Disabled);
    SetMapSoundState(2423812, Disabled);
    SetMapSoundState(2423813, Disabled);
    CreateBulletOwner(2420801);
    InitializeEvent(0, 12424812, 0);
    InitializeEvent(0, 12424813, 0);
    InitializeEvent(0, 12421800, 0);
    InitializeEvent(0, 12421801, 0);
    InitializeEvent(0, 12421802, 0);
    InitializeEvent(0, 12424810, 0);
    InitializeEvent(0, 12424811, 0);
    InitializeEvent(0, 12424802, 0);
    InitializeEvent(0, 12424803, 0);
    InitializeEvent(0, 12424804, 0);
    InitializeEvent(0, 12424805, 0);
    InitializeEvent(0, 12424980, 0);
    InitializeEvent(0, 12424990, 0);
    InitializeEvent(0, 12421803, 0);
    InitializeEvent(0, 12424870, 2420, 2420, 5, 200, 480, 490, 8040);
    InitializeEvent(0, 12424871, 2421, 2421, 1, 200, 481, 491, 8010);
    InitializeEvent(1, 12424871, 2422, 2422, 2, 200, 482, 492, 8000);
    InitializeEvent(2, 12424871, 2423, 2423, 3, 200, 483, 493, 8030);
    InitializeEvent(3, 12424871, 2424, 2424, 4, 200, 484, 494, 8020);
    InitializeEvent(0, 12424712, 0);
    InitializeEvent(0, 12424713, 0);
    InitializeEvent(0, 12421700, 0);
    InitializeEvent(0, 12421701, 0);
    InitializeEvent(0, 12421702, 0);
    InitializeEvent(0, 12424710, 0);
    InitializeEvent(0, 12424711, 0);
    InitializeEvent(0, 12424702, 0);
    InitializeEvent(0, 12424703, 0);
    InitializeEvent(0, 12424704, 0);
    InitializeEvent(0, 12424705, 0);
    InitializeEvent(0, 12424790, 0);
    InitializeEvent(0, 12424780, 0);
    InitializeEvent(0, 12424791, 0);
    InitializeEvent(0, 12424792, 2420750);
    InitializeEvent(1, 12424792, 2420751);
    InitializeEvent(0, 12421703, 0);
    InitializeEvent(0, 12424785, 2420810, 2422816, 10, 12424702);
    InitializeEvent(1, 12424785, 2420811, 2422817, 20, 12424790);
    InitializeEvent(0, 12424784, 0);
    InitializeEvent(0, 12424787, 2420711, 2422816, 10, 12424702, 2420810);
    InitializeEvent(1, 12424787, 2420712, 2422816, 10, 12424702, 2420810);
    InitializeEvent(0, 12424795, 0);
    InitializeEvent(0, 12424770, 2423711, 2420711);
    InitializeEvent(1, 12424770, 2423712, 2420712);
    InitializeEvent(2, 12424770, 2423713, 2420713);
    InitializeEvent(5, 12424770, 2423716, 2420716);
    InitializeEvent(6, 12424770, 2423717, 2420717);
    InitializeEvent(8, 12424770, 2423719, 2420719);
    InitializeEvent(9, 12424770, 2423720, 2420720);
    InitializeEvent(12, 12424770, 2423720, 2420810);
L1:
    InitializeEvent(0, 12420300, 0);
    InitializeEvent(0, 12420320, 0);
    InitializeEvent(0, 12420310, 0);
    InitializeEvent(0, 12425200, 2420262);
    InitializeEvent(0, 12425210, 2420250);
    InitializeEvent(1, 12425210, 2420258);
    InitializeEvent(2, 12425210, 2420267);
    InitializeEvent(0, 12425225, 0);
    InitializeEvent(0, 12425221, 2420256);
    InitializeEvent(0, 12425250, 2420252, 1069547520, 2422659, 1091567616, 2422252, 20, 1, 1);
    InitializeEvent(0, 12425245, 0);
    SetEventFlag(12425246, OFF);
    InitializeEvent(0, 12425300, 2420451);
    InitializeEvent(0, 12425305, 2420452);
    InitializeEvent(0, 12425310, 2420352);
    InitializeEvent(1, 12425310, 2420375);
    InitializeEvent(2, 12425310, 2420376);
    InitializeEvent(3, 12425310, 2420387);
    InitializeEvent(4, 12425310, 2420388);
    InitializeEvent(0, 12425320, 2420380, 7012, 7013, 2422380);
    InitializeEvent(1, 12425320, 2420381, 7012, 7013, 2422381);
    InitializeEvent(2, 12425320, 2420382, 7012, 7013, 2422382);
    InitializeEvent(3, 12425320, 2420383, 7012, 7013, 2422383);
    InitializeEvent(4, 12425320, 2420384, 7012, 7013, 2422384);
    InitializeEvent(5, 12425320, 2420350, 7012, 7013, 2422350);
    InitializeEvent(6, 12425320, 2420351, 7012, 7013, 2422351);
    InitializeEvent(7, 12425320, 2420377, 7012, 7013, 2422377);
    InitializeEvent(8, 12425320, 2420357, 7012, 7013, 2422357);
    InitializeEvent(9, 12425320, 2420358, 7012, 7013, 2422358);
    InitializeEvent(10, 12425320, 2420359, 7012, 7013, 2422359);
    InitializeEvent(11, 12425320, 2420363, 7012, 7013, 2422363);
    InitializeEvent(12, 12425320, 2420364, 7012, 7013, 2422364);
    InitializeEvent(13, 12425320, 2420385, 7012, 7013, 2422385);
    InitializeEvent(14, 12425320, 2420386, 7012, 7013, 2422386);
    SetNetworkUpdateRate(2420811, true, CharacterUpdateFrequency.AlwaysUpdate);
    InitializeEvent(0, 12425500, 2420357, 1084227584, 1, 2422650, 0);
    InitializeEvent(1, 12425500, 2420358, 1084227584, 1, 2422650, 0);
    InitializeEvent(2, 12425500, 2420359, 1084227584, 1, 2422650, 0);
    InitializeEvent(3, 12425500, 2420363, 1084227584, 1, 2422650, 0);
    InitializeEvent(4, 12425500, 2420364, 1084227584, 1, 2422650, 0);
    InitializeEvent(5, 12425500, 2420251, 1084227584, 1, 2422251, 0);
    InitializeEvent(6, 12425500, 2420255, 1077936128, 1, 2422254, 0);
    InitializeEvent(7, 12425500, 2420255, 1077936128, 1, 2422255, 0);
    InitializeEvent(8, 12425500, 2420256, 1084227584, 1, 2422256, 0);
    InitializeEvent(9, 12425500, 2420377, 1084227584, 1, 2422656, 0);
    InitializeEvent(10, 12425500, 2420351, 1084227584, 1, 2422656, 0);
    InitializeEvent(11, 12425500, 2420385, 1084227584, 1, 2422650, 0);
    InitializeEvent(12, 12425500, 2420386, 1084227584, 1, 2422650, 0);
    InitializeEvent(13, 12425500, 2420259, 1084227584, 1, 2422259, 0);
    InitializeEvent(14, 12425500, 2420350, 1084227584, 1, 2422654, 0);
    InitializeEvent(15, 12425500, 2420380, 1084227584, 1, 2422654, 0);
    InitializeEvent(16, 12425500, 2420381, 1084227584, 1, 2422654, 0);
    InitializeEvent(17, 12425500, 2420382, 1084227584, 1, 2422654, 0);
    InitializeEvent(18, 12425500, 2420383, 1084227584, 1, 2422654, 0);
    InitializeEvent(19, 12425500, 2420384, 1084227584, 1, 2422654, 0);
    InitializeEvent(20, 12425500, 2420203, 1084227584, 1, 2422653, 0);
    InitializeEvent(21, 12425500, 2420264, 1073741824, 1, 2422264, 0);
    InitializeEvent(22, 12425500, 2420400, 1084227584, 1, 2422256, 0);
    InitializeEvent(23, 12425500, 2420450, 1084227584, 1, 2422300, 0);
    InitializeEvent(24, 12425500, 2420451, 1084227584, 1, 2422300, 0);
    InitializeEvent(0, 12425600, 0);
    InitializeEvent(0, 12425601, 0);
    InitializeEvent(0, 12425602, 0);
    InitializeEvent(0, 12425603, 0);
    InitializeEvent(0, 12425350, 2420350, 252002, 252000);
    InitializeEvent(1, 12425350, 2420351, 252002, 252000);
    InitializeEvent(2, 12425350, 2420377, 252002, 252000);
    InitializeEvent(3, 12425350, 2420380, 252002, 252000);
    InitializeEvent(4, 12425350, 2420381, 252002, 252000);
    InitializeEvent(5, 12425350, 2420382, 252002, 252000);
    InitializeEvent(6, 12425350, 2420383, 252002, 252000);
    InitializeEvent(7, 12425350, 2420384, 252002, 252000);
    InitializeEvent(0, 12425400, 2420263, 2422265, 3000);
    InitializeEvent(1, 12425400, 2420392, 2422686, 3004);
    InitializeEvent(0, 12420100, 0);
    RegisterLadder(12420600, 12420601, 2421600);
    InitializeEvent(0, 12420500, 0);
    InitializeEvent(0, 12420700, 0);
    GotoIf(S0, !CharacterType(10000, TargetType.Alive));
    GotoIf(S0, !EventFlag(6648));
    SetEventFlag(12421999, ON);
S0:
    if (!EventFlag(12421999)) {
        DeactivateObject(2421102, Enabled);
        DeactivateObject(2421103, Disabled);
        SetObjectTreasureState(2421102, Enabled);
        SetObjectTreasureState(2421103, Disabled);
    } else {
        DeactivateObject(2421102, Disabled);
        DeactivateObject(2421103, Enabled);
        SetObjectTreasureState(2421102, Disabled);
        SetObjectTreasureState(2421103, Enabled);
    }
    GotoIf(S1, !CharacterType(10000, TargetType.Alive));
    GotoIf(S1, !EventFlag(6313));
    SetEventFlag(12421998, ON);
S1:
    if (!EventFlag(12421998)) {
        DeactivateObject(2421500, Enabled);
        DeactivateObject(2421501, Disabled);
        SetObjectTreasureState(2421500, Enabled);
        SetObjectTreasureState(2421501, Disabled);
    } else {
        DeactivateObject(2421500, Disabled);
        DeactivateObject(2421501, Enabled);
        SetObjectTreasureState(2421500, Disabled);
        SetObjectTreasureState(2421501, Enabled);
    }
});

// preconstructor
$Event(50, Default, function() {
    SetCharacterAnimationState(2423950, Disabled);
    SetCharacterGravity(2423950, Disabled);
    SetCharacterMaphits(2423950, true);
    SetCharacterAnimationState(2423951, Disabled);
    SetCharacterGravity(2423951, Disabled);
    SetCharacterMaphits(2423951, true);
    SetCharacterAnimationState(2423952, Disabled);
    SetCharacterGravity(2423952, Disabled);
    SetCharacterMaphits(2423952, true);
    InitializeEvent(0, 12425290, 0);
});

// Brain Eater drops orphanage key
$Event(12420700, Restart, function() {
    EndIf(ThisEvent());
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(CharacterDead(2420268));
    AwardItemLot(2420900);
});

// Defeat the boss_Spawn of the Moon
$Event(12421800, Default, function() {
    if (ThisEvent()) {
        SetMapSoundState(2423802, Disabled);
        SetMapSoundState(2423803, Disabled);
        ChangeCharacterEnableState(2420800, Disabled);
        ForceCharacterDeath(2420800, false);
        DeactivateObject(2421800, Disabled);
        DeleteMapSFX(2423800, false);
        EndEvent();
    }
L0:
    WaitFor(CharacterDead(2420800));
    DisplayBanner(TextBannerType.DemonKilled);
    DeactivateObject(2421800, Disabled);
    DeleteMapSFX(2423800, true);
    SetLockcamSlotNumber(24, 2, 0);
    WaitFixedTimeSeconds(3);
    HandleBossDefeat(2420800);
    SetNetworkSyncState(Disabled);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        WaitFor(CharacterType(10000, TargetType.Alive));
        InitializeEvent(0, 9350, 3);
        AwardAchievement(28);
        AwardItemLot(80000300);
        SetEventFlag(2421, ON);
        SetEventFlag(9459, ON);
        StartTimeMeasurement(2420000, 0, Disabled);
        StartTimeMeasurement(2420001, 18, Disabled);
        StartTimeMeasurement(2420010, 40, Disabled);
        CreatePlaylog(58);
        ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 70, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 70, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Weapon, 70, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Armor, 70, PlayLogMultiplayerType.HostOnly);
        if (EventFlag(ebrietas_defeat+13)) {
            AwardItemLot(17020);
            InitializeEvent(ebrietas_offset, 7800, ebrietas_lamp_id+1000, 824201);
        }
        EndEvent();
    }
L1:
    WaitFor(CharacterType(10000, TargetType.WhitePhantom));
    WaitFixedTimeSeconds(0);
});

// Boss defeat SE playback_Spawn of the Moon
$Event(12421801, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12421800));
    flag = EventFlag(12421800);
    WaitFor(flag || (!CharacterBackreadStatus(2420800) && HPRatio(2420800) <= 0));
    EndIf(flag.Passed);
    PlaySE(2422800, SoundType.cCharacterMotion, 500099999);
});

// Host enters boss room_First battle_Spawn of the Moon
$Event(12421802, Default, function() {
    EndIf(EventFlag(12421800));
    if (ThisEvent()) {
        if (EventFlag(ebrietas_defeat+13)) {
            IssueShortWarpRequest(2420800, TargetEntityType.Area, 2422809, -1);
            RotateCharacter(2420800, 10000, -1, false);
        }
        else {
            IssueShortWarpRequest(2420800, TargetEntityType.Area, 2422800, -1);
            RotateCharacter(2420800, 2422804, -1, false);
        }
        EndEvent();
    }
L0:
    ForceAnimationPlayback(2420800, 7001, true, false, false);
    SetCharacterImmortality(2420800, Enabled);
    SetSpEffect(2420800, 5647, false);
    WaitFor(
        !EventFlag(12421800)
            && !ThisEvent()
            && CharacterType(10000, TargetType.Alive)
            && HasDamageType(2420800, 10000, DamageType.Unspecified));
    ForceAnimationPlayback(2420800, 7000, false, true, false);
    SetCharacterImmortality(2420800, Disabled);
    ClearSpEffect(2420800, 5647);
    SetEventFlag(12424800, ON);
    EndIf(EventFlag(9304));
    InitializeEvent(0, 9350, 3);
    SetEventFlag(9304, ON);
});

// Moon's Spawn_Process for guests entering at different times
$Event(12421803, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EventFlag(12424800));
    EndIf(HasMultiplayerState(MultiplayerState.Host));
    SetEventFlag(12424800, ON);
    SetEventFlag(12421802, ON);
});

// Host enters boss room_Rematch_Spawn of the Moon
$Event(12424810, Default, function() {
    EndIf(EventFlag(12421800));
    if (!EventFlag(12421802)) {
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            DeactivateObject(2421800, Disabled);
            DeleteMapSFX(2423800, false);
        }
        WaitFor(!EventFlag(12421800) && EventFlag(12421802));
        DeactivateObject(2421800, Enabled);
        SpawnMapSFX(2423800);
    }
L0:
    flagChrAct = !EventFlag(12421800) && CharacterType(10000, TargetType.Alive) && ActionButtonInArea(2420800, 2421800);
    flag = EventFlag(12421800);
    WaitFor(flagChrAct || flag);
    EndIf(flag.Passed);
    RotateCharacter(10000, 2422800, 101130, false);
    chrArea = CharacterType(10000, TargetType.Alive) && InArea(10000, 2422801);
    chr = CharacterType(10000, TargetType.Alive) && ElapsedSeconds(2);
    WaitFor(chrArea || chr);
    if (!chr.Passed) {
        SetEventFlag(12424800, ON);
    }
    RestartEvent();
});

// Guest enters boss room_Spawn of the Moon
$Event(12424811, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12421800));
    WaitFor(
        !EventFlag(12421800)
            && EventFlag(12421802)
            && EventFlag(12424800)
            && CharacterType(10000, TargetType.WhitePhantom)
            && ActionButtonInArea(2420800, 2421800));
    RotateCharacter(10000, 2422800, 101130, false);
    chrArea = CharacterType(10000, TargetType.WhitePhantom) && InArea(10000, 2422801);
    chr = CharacterType(10000, TargetType.WhitePhantom) && ElapsedSeconds(2);
    WaitFor(chrArea || chr);
    if (!chr.Passed) {
        SetEventFlag(12424801, ON);
    }
    RestartEvent();
});

// Invalid per fog wall in other people's world_Spawn of the moon
$Event(12424812, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EntityInRadiusOfEntity(10000, 2421800, 6));
    SetCharacterGravityMaphitStateExcludingOwnWorld(10000, Disabled);
    WaitFixedTimeFrames(6);
    RestartEvent();
});

// Invalid per fog wall in other people's world 2_Spawn of the moon
$Event(12424813, Default, function() {
    WaitFor(
        CharacterType(10000, TargetType.Alive)
            && !EntityInRadiusOfEntity(10000, 2421800, 6)
            && EntityInRadiusOfEntity(10000, 2421800, 12));
    SetCharacterGravityMaphitStateExcludingOwnWorld(10000, Enabled);
    WaitFixedTimeFrames(6);
    RestartEvent();
});

// Boss begins to move_Spawn of the Moon
$Event(12424802, Default, function() {
    if (EventFlag(ebrietas_defeat+13)) {
        Goto(L0);
    }
    EndIf(EventFlag(12421800));
    SetCharacterAIState(2420800, Disabled);
    SetCharacterHPBarDisplay(2420800, Disabled);
    if (!ThisEvent()) {
        WaitFor(EventFlag(12424800) || EventFlag(ebrietas_defeat+13));
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            IssueBossRoomEntryNotification(0);
            SetNetworkUpdateAuthority(2420800, AuthorityLevel.Forced);
        }
    }
L0:
    SetEventFlag(12424800, ON);
    GotoIf(L1, NumberOfCoopClients() == 0);
    GotoIf(L2, NumberOfCoopClients() == 1);
    GotoIf(L3, NumberOfCoopClients() == 2);
L1:
    Goto(L4);
L2:
    SetSpEffect(2420800, 7500, true);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2420800);
    Goto(L4);
L3:
    SetSpEffect(2420800, 7501, true);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2420800);
    Goto(L4);
L4:
    if (EventFlag(ebrietas_defeat+13)) {
        WaitFixedTimeSeconds(2);
    }
    SetCharacterAIState(2420800, Enabled);
    DisplayBossHealthBar(Enabled, 2420800, 0, 251000);
    CreatePlaylog(104);
    StartTimeMeasurement(2420010, 40, Enabled);
});

// Boss BGM ON_Spawn of the Moon
$Event(12424803, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12421800));
    if (!ThisEvent()) {
        SetMapSoundState(2423802, Disabled);
        SetMapSoundState(2423803, Disabled);
        flagArea &= !EventFlag(12421800) && EventFlag(12424802);
        if (!HasMultiplayerState(MultiplayerState.Host)) {
            flagArea &= EventFlag(12424801);
        }
        flagArea &= InArea(10000, 2422802);
        WaitFor(flagArea);
        EnableBossMapSound(2423802, Enabled);
        SetEventFlag(12425246, ON);
        chrFlagArea &= CharacterHasEventMessage(2420800, 100);
    }
L0:
    chrFlagArea &= !EventFlag(12421800) && EventFlag(12424802);
    if (!HasMultiplayerState(MultiplayerState.Host)) {
        chrFlagArea &= EventFlag(12424801);
    }
    chrFlagArea &= InArea(10000, 2422802);
    WaitFor(chrFlagArea);
    EnableBossMapSound(2423802, Disabled);
    SetEventFlag(12425246, ON);
    WaitFixedTimeFrames(0);
    EnableBossMapSound(2423803, Enabled);
});

// Boss Camera_Spawn of the Moon
$Event(12424804, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12421800));
    WaitFor(CharacterHasEventMessage(2420800, 10));
    SetLockcamSlotNumber(24, 2, 1);
    WaitFor(CharacterHasEventMessage(2420800, 20));
    SetLockcamSlotNumber(24, 2, 0);
    RestartEvent();
});

// Boss BGM OFF_Spawn of the Moon
$Event(12424805, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12421800));
    WaitFor(EventFlag(12421800));
    EnableBossMapSound(2423802, Disabled);
    EnableBossMapSound(2423803, Disabled);
    EnableBossMapSound(-1, Disabled);
    SetEventFlag(12425246, OFF);
});

// Part damage_Head_Spawn of the moon
$Event(12424870, Restart, function(X0_2, X4_4, X8_2, X12_4, X16_4, X20_4, X24_4) {
    CreateNPCPart(2420800, X0_2, X8_2, X12_4, 1, 2, false, false);
    SetNPCPartSEAndSFX(2420800, X4_4, 75, 75);
    hp = NPCPartHP(2420800, X4_4) <= 0;
    hp2 = HPRatio(2420800) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(2420800, X0_2, X8_2, 9999999, 1, 2.5, false, false);
    SetNPCPartSEAndSFX(2420800, X4_4, 75, 75);
    RequestCharacterAnimationReset(2420800, Interpolation.Interpolated);
    ForceAnimationPlayback(2420800, X24_4, false, false, false);
    SetSpEffect(2420800, X16_4, true);
    ClearSpEffect(2420800, X20_4);
    RequestCharacterAIReplan(2420800);
    WaitFor(CharacterHasEventMessage(2420800, 100));
    SetNPCPartHP(2420800, X4_4, -1, true);
    SetSpEffect(2420800, X20_4, true);
    ClearSpEffect(2420800, X16_4);
    RequestCharacterAICommand(2420800, -1, 0);
    RequestCharacterAIReplan(2420800);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Partial damage_Other than head_Spawn of the moon
$Event(12424871, Restart, function(X0_2, X4_4, X8_2, X12_4, X16_4, X20_4, X24_4) {
    CreateNPCPart(2420800, X0_2, X8_2, X12_4, 1, 1, false, false);
    SetNPCPartSEAndSFX(2420800, X4_4, 74, 74);
    hp = NPCPartHP(2420800, X4_4) <= 0;
    hp2 = HPRatio(2420800) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(2420800, X0_2, X8_2, 9999999, 1, 1.25, false, false);
    SetNPCPartSEAndSFX(2420800, X4_4, 74, 74);
    RequestCharacterAnimationReset(2420800, Interpolation.Interpolated);
    ForceAnimationPlayback(2420800, X24_4, false, false, false);
    SetSpEffect(2420800, X16_4, true);
    ClearSpEffect(2420800, X20_4);
    RequestCharacterAIReplan(2420800);
    WaitFor(CharacterHasEventMessage(2420800, 100));
    SetNPCPartHP(2420800, X4_4, -1, true);
    SetSpEffect(2420800, X20_4, true);
    ClearSpEffect(2420800, X16_4);
    RequestCharacterAICommand(2420800, -1, 0);
    RequestCharacterAIReplan(2420800);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Moon's spawn_Heat up
$Event(12424980, Default, function() {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(2420800));
    WaitFor(EventFlag(12424800) && HPRatio(2420800) < 0.5);
    RequestCharacterAICommand(2420800, 100, 0);
    RequestCharacterAIReplan(2420800);
    WaitFor(CharacterHasEventMessage(2420800, 500));
    RequestCharacterAICommand(2420800, -1, 0);
    RequestCharacterAIReplan(2420800);
});

// Kojima Particle_Spawn of the Moon
$Event(12424990, Default, function() {
    WaitFor(CharacterHasSpEffect(2420800, 5650) && CharacterHPValue(2420800) < 0);
    ShootBullet(2420801, 2420800, 6, 225100310, 0, 0, 0);
    WaitFixedTimeSeconds(0.5);
    RestartEvent();
});

// Boss Defeat_Messenger from the Moon
$Event(12421700, Default, function() {
    if (ThisEvent()) {
        SetMapSoundState(2423812, Disabled);
        SetMapSoundState(2423813, Disabled);
        ChangeCharacterEnableState(2420810, Disabled);
        ForceCharacterDeath(2420810, false);
        ChangeCharacterEnableState(2420711, Disabled);
        ChangeCharacterEnableState(2420712, Disabled);
        ChangeCharacterEnableState(2420713, Disabled);
        ChangeCharacterEnableState(2420716, Disabled);
        ChangeCharacterEnableState(2420717, Disabled);
        ChangeCharacterEnableState(2420719, Disabled);
        ChangeCharacterEnableState(2420720, Disabled);
        ChangeCharacterEnableState(2420750, Disabled);
        ChangeCharacterEnableState(2420751, Disabled);
        SetCharacterAIState(2420711, Disabled);
        SetCharacterAIState(2420712, Disabled);
        SetCharacterAIState(2420713, Disabled);
        SetCharacterAIState(2420716, Disabled);
        SetCharacterAIState(2420717, Disabled);
        SetCharacterAIState(2420719, Disabled);
        SetCharacterAIState(2420720, Disabled);
        DeactivateObject(2421700, Disabled);
        DeactivateObject(2421701, Disabled);
        DeleteMapSFX(2423810, false);
        DeleteMapSFX(2423811, false);
        EndEvent();
    }
L0:
    WaitFor(CharacterDead(2420811));
    DisplayBanner(TextBannerType.DemonKilled);
    DeactivateObject(2421700, Disabled);
    DeactivateObject(2421701, Disabled);
    DeleteMapSFX(2423810, true);
    DeleteMapSFX(2423811, true);
    SetLockcamSlotNumber(24, 2, 0);
    ChangeCharacterEnableState(2420750, Disabled);
    ChangeCharacterEnableState(2420751, Disabled);
    WaitFixedTimeSeconds(3);
    HandleBossDefeat(2420811);
    SetNetworkSyncState(Disabled);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        WaitFor(CharacterType(10000, TargetType.Alive));
        InitializeEvent(0, 9350, 2);
        AwardAchievement(27);
        if (!EventFlag(6332) && !EventFlag(celestial_emissary_defeat+13)) {
            AwardItemLot(25700000);
        } else {
            AwardItemLot(25700005);
            AwardItemLot(17020);
        }
        SetEventFlag(2420, ON);
        SetEventFlag(9458, ON);
        StartTimeMeasurement(2420000, 0, Disabled);
        StartTimeMeasurement(2420001, 18, Disabled);
        StartTimeMeasurement(2420010, 40, Disabled);
        CreatePlaylog(58);
        ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 120, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 120, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Weapon, 120, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Armor, 120, PlayLogMultiplayerType.HostOnly);
        if (EventFlag(celestial_emissary_defeat+13)) {
            InitializeEvent(celestial_emissary_offset, 7800, celestial_emissary_lamp_id+1000, 824200);
        }
        EndEvent();
    }
L1:
    WaitFor(CharacterType(10000, TargetType.WhitePhantom));
    WaitFixedTimeSeconds(0);
});

// Boss defeat SE playback_messenger from the moon
$Event(12421701, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12421800));
    flag = EventFlag(12421800);
    WaitFor(flag || (!CharacterBackreadStatus(2420800) && HPRatio(2420800) <= 0));
    EndIf(flag.Passed);
    PlaySE(2422800, SoundType.cCharacterMotion, 500099999);
});

// Host enters boss room_First battle_Messenger from the moon
$Event(12421702, Default, function() {
    EndIf(EventFlag(12421700));
    EndIf(ThisEvent());
    ChangeCharacterEnableState(2420810, Disabled);
    ChangeCharacterEnableState(2420711, Disabled);
    ChangeCharacterEnableState(2420712, Disabled);
    ChangeCharacterEnableState(2420713, Disabled);
    ChangeCharacterEnableState(2420716, Disabled);
    ChangeCharacterEnableState(2420717, Disabled);
    ChangeCharacterEnableState(2420719, Disabled);
    ChangeCharacterEnableState(2420720, Disabled);
    WaitFor(
        !EventFlag(12421700) && !ThisEventSlot() && CharacterType(10000, TargetType.Alive) && InArea(10000, 2422815));
    SetEventFlag(12424700, ON);
    SetEventFlag(12421702, ON);
    ChangeCharacterEnableState(2420716, Enabled);
    SetCharacterAIState(2420716, Enabled);
    ForceAnimationPlayback(2420716, 6200, false, false, false);
    ChangeCharacterEnableState(2420717, Enabled);
    SetCharacterAIState(2420717, Enabled);
    ForceAnimationPlayback(2420717, 6200, false, false, false);
    ChangeCharacterEnableState(2420720, Enabled);
    SetCharacterAIState(2420720, Enabled);
    ForceAnimationPlayback(2420720, 6200, false, false, false);
    WaitFixedTimeSeconds(2);
    ChangeCharacterEnableState(2420810, Enabled);
    SetCharacterAIState(2420810, Enabled);
    ForceAnimationPlayback(2420810, 6200, false, false, false);
    ChangeCharacterEnableState(2420711, Enabled);
    SetCharacterAIState(2420711, Enabled);
    ForceAnimationPlayback(2420711, 6200, false, false, false);
    ChangeCharacterEnableState(2420713, Enabled);
    SetCharacterAIState(2420713, Enabled);
    ForceAnimationPlayback(2420713, 6200, false, false, false);
    WaitFixedTimeSeconds(2.5);
    ChangeCharacterEnableState(2420712, Enabled);
    SetCharacterAIState(2420712, Enabled);
    ForceAnimationPlayback(2420712, 6200, false, false, false);
    ChangeCharacterEnableState(2420719, Enabled);
    SetCharacterAIState(2420719, Enabled);
    ForceAnimationPlayback(2420719, 6200, false, false, false);
});

// Messenger from the Moon_Measures for guests entering at different times
$Event(12421703, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EventFlag(12424700));
    EndIf(HasMultiplayerState(MultiplayerState.Host));
    SetEventFlag(12424700, ON);
    SetEventFlag(12421702, ON);
    ChangeCharacterEnableState(2420716, Enabled);
    SetCharacterAIState(2420716, Enabled);
    ForceAnimationPlayback(2420716, 6200, false, false, false);
    ChangeCharacterEnableState(2420717, Enabled);
    SetCharacterAIState(2420717, Enabled);
    ForceAnimationPlayback(2420717, 6200, false, false, false);
    ChangeCharacterEnableState(2420720, Enabled);
    SetCharacterAIState(2420720, Enabled);
    ForceAnimationPlayback(2420720, 6200, false, false, false);
    WaitFixedTimeSeconds(2);
    ChangeCharacterEnableState(2420810, Enabled);
    SetCharacterAIState(2420810, Enabled);
    ForceAnimationPlayback(2420810, 6200, false, false, false);
    ChangeCharacterEnableState(2420711, Enabled);
    SetCharacterAIState(2420711, Enabled);
    ForceAnimationPlayback(2420711, 6200, false, false, false);
    ChangeCharacterEnableState(2420713, Enabled);
    SetCharacterAIState(2420713, Enabled);
    ForceAnimationPlayback(2420713, 6200, false, false, false);
    WaitFixedTimeSeconds(2.5);
    ChangeCharacterEnableState(2420712, Enabled);
    SetCharacterAIState(2420712, Enabled);
    ForceAnimationPlayback(2420712, 6200, false, false, false);
    ChangeCharacterEnableState(2420719, Enabled);
    SetCharacterAIState(2420719, Enabled);
    ForceAnimationPlayback(2420719, 6200, false, false, false);
});

// Host enters boss room_Rematch_Messenger from the moon
$Event(12424710, Default, function() {
    EndIf(EventFlag(12421700));
    if (!EventFlag(12421702)) {
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            DeactivateObject(2421700, Disabled);
            DeleteMapSFX(2423810, false);
        }
        DeactivateObject(2421701, Disabled);
        DeleteMapSFX(2423811, false);
        WaitFor(!EventFlag(12421700) && EventFlag(12421702));
        DeactivateObject(2421700, Enabled);
        DeactivateObject(2421701, Enabled);
        SpawnMapSFX(2423810);
        SpawnMapSFX(2423811);
    }
L0:
    flag = !EventFlag(12421700);
    chrAct = CharacterType(10000, TargetType.Alive) && ActionButtonInArea(2420700, 2421700);
    flag2 = EventFlag(12421700);
    WaitFor(chrAct || flag2);
    EndIf(flag2.Passed);
    RotateCharacter(10000, 2422810, 101130, false);
    chrArea = CharacterType(10000, TargetType.Alive) && InArea(10000, 2422811);
    chr = CharacterType(10000, TargetType.Alive) && ElapsedSeconds(2);
    WaitFor(chrArea || chr);
    if (!chr.Passed) {
        SetEventFlag(12424700, ON);
    }
    RestartEvent();
});

// Guest enters boss room_Messenger from the moon
$Event(12424711, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12421700));
    WaitFor(
        !EventFlag(12421700)
            && EventFlag(12424700)
            && CharacterType(10000, TargetType.WhitePhantom)
            && ActionButtonInArea(2420700, 2421700));
    RotateCharacter(10000, 2422810, 101130, false);
    chrArea = CharacterType(10000, TargetType.WhitePhantom) && InArea(10000, 2422811);
    chr = CharacterType(10000, TargetType.WhitePhantom) && ElapsedSeconds(2);
    WaitFor(chrArea || chr);
    if (!chr.Passed) {
        SetEventFlag(12424701, ON);
    }
    RestartEvent();
});

// Invalid around the fog wall in someone else's world_Messenger from the moon
$Event(12424712, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EntityInRadiusOfEntity(10000, 2421700, 4));
    SetCharacterGravityMaphitStateExcludingOwnWorld(10000, Disabled);
    WaitFixedTimeFrames(6);
    RestartEvent();
});

// Disabled around fog wall in other people's world 2_Messenger from the moon
$Event(12424713, Default, function() {
    WaitFor(
        CharacterType(10000, TargetType.Alive)
            && !EntityInRadiusOfEntity(10000, 2421700, 4)
            && EntityInRadiusOfEntity(10000, 2421700, 8));
    SetCharacterGravityMaphitStateExcludingOwnWorld(10000, Enabled);
    WaitFixedTimeFrames(6);
    RestartEvent();
});

// The boss begins to move_Messenger from the moon
$Event(12424702, Default, function() {
    EndIf(EventFlag(12421700));
    SetCharacterAIState(2420810, Disabled);
    SetCharacterAIState(2420711, Disabled);
    SetCharacterAIState(2420712, Disabled);
    SetCharacterAIState(2420713, Disabled);
    SetCharacterAIState(2420716, Disabled);
    SetCharacterAIState(2420717, Disabled);
    SetCharacterAIState(2420719, Disabled);
    SetCharacterAIState(2420720, Disabled);
    SetCharacterImmortality(2420810, Enabled);
    if (!ThisEvent()) {
        WaitFor(EventFlag(12424700) || EventFlag(celestial_emissary_defeat+13));
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            IssueBossRoomEntryNotification(0);
            SetNetworkUpdateAuthority(2800810, AuthorityLevel.Forced);
            SetNetworkUpdateAuthority(2800811, AuthorityLevel.Forced);
        }
    }
L0:
    SetEventFlag(12424700, ON);
    GotoIf(L1, NumberOfCoopClients() == 0);
    GotoIf(L2, NumberOfCoopClients() == 1);
    GotoIf(L3, NumberOfCoopClients() == 2);
L1:
    Goto(L4);
L2:
    SetSpEffect(2800800, 7500, true);
    SetSpEffect(2800801, 7500, true);
    SetSpEffect(2800802, 7500, true);
    SetSpEffect(2800803, 7500, true);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2800800);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2800801);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2800802);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2800803);
    Goto(L4);
L3:
    SetSpEffect(2800800, 7501, true);
    SetSpEffect(2800801, 7501, true);
    SetSpEffect(2800802, 7501, true);
    SetSpEffect(2800803, 7501, true);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2800800);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2800801);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2800802);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2800803);
    Goto(L4);
L4:
    if (EventFlag(celestial_emissary_defeat+13)) {
        WaitFixedTimeSeconds(2);
    }
    DisplayBossHealthBar(Enabled, 2420810, 0, 257000);
    CreatePlaylog(104);
    StartTimeMeasurement(2800010, 40, Enabled);
    EndIf(!EventFlag(12421702));
    WaitFor(
        InArea(10000, 2422817)
            || HasDamageType(2420810, 10000, DamageType.Unspecified)
            || HasDamageType(2420711, 10000, DamageType.Unspecified)
            || HasDamageType(2420712, 10000, DamageType.Unspecified)
            || HasDamageType(2420713, 10000, DamageType.Unspecified)
            || HasDamageType(2420716, 10000, DamageType.Unspecified)
            || HasDamageType(2420717, 10000, DamageType.Unspecified)
            || HasDamageType(2420719, 10000, DamageType.Unspecified)
            || HasDamageType(2420720, 10000, DamageType.Unspecified));
    SetCharacterAIState(2420810, Enabled);
    SetCharacterAIState(2420711, Enabled);
    SetCharacterAIState(2420712, Enabled);
    SetCharacterAIState(2420713, Enabled);
    SetCharacterAIState(2420716, Enabled);
    SetCharacterAIState(2420717, Enabled);
    SetCharacterAIState(2420719, Enabled);
    SetCharacterAIState(2420720, Enabled);
});

// Boss BGM ON_Messenger from the Moon
$Event(12424703, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12421700));
    if (!ThisEvent()) {
        SetMapSoundState(2703802, Disabled);
        SetMapSoundState(2703803, Disabled);
        flagArea &= !EventFlag(12421700) && EventFlag(12424702);
        if (!HasMultiplayerState(MultiplayerState.Host)) {
            flagArea &= EventFlag(12424701);
        }
        flagArea &= InArea(10000, 2422812);
        WaitFor(flagArea);
        EnableBossMapSound(2423812, Enabled);
        SetEventFlag(12425246, ON);
        WaitFor(EventFlag(12424790));
    }
L0:
    flagArea2 &= !EventFlag(12421700) && EventFlag(12424702);
    if (!HasMultiplayerState(MultiplayerState.Host)) {
        flagArea2 &= EventFlag(12424701);
    }
    flagArea2 &= InArea(10000, 2422812);
    WaitFor(flagArea2);
    EnableBossMapSound(2423812, Disabled);
    SetEventFlag(12425246, ON);
    WaitFixedTimeFrames(0);
    EnableBossMapSound(2423813, Enabled);
});

// Boss Camera_Messenger from the Moon
$Event(12424704, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(HPRatio(2420811) > 0 && HPRatio(2420811) <= 0.6 && EntityInRadiusOfEntity(10000, 2420811, 5.5));
    SetLockcamSlotNumber(24, 2, 1);
    WaitFor(HPRatio(2420811) > 0 && !EntityInRadiusOfEntity(10000, 2420811, 6));
    SetLockcamSlotNumber(24, 2, 0);
    RestartEvent();
});

// Boss BGM OFF_Messenger from the Moon
$Event(12424705, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12421700));
    WaitFor(EventFlag(12421700));
    EnableBossMapSound(2423812, Disabled);
    EnableBossMapSound(2423813, Disabled);
    EnableBossMapSound(-1, Disabled);
    SetEventFlag(12425246, OFF);
});

// Envoy from the Moon Death of boss and companion & generation stopped_XX
$Event(12424770, Restart, function(X0_4, X4_4) {
    chr = !CharacterDead(X0_4);
    WaitFor(CharacterDead(2420811) && (chr || CharacterDead(X0_4)));
    SetCharacterImmortality(X4_4, Disabled);
    DeactivateGenerator(X0_4, Disabled);
    ForceCharacterDeath(X4_4, true);
    if (!chr.Passed) {
        ChangeCharacterEnableState(X0_4, Disabled);
    }
    WaitFor(!CharacterDead(X4_4));
    RestartEvent();
});

// Messenger from the Moon (Large) Surrounding Strengthening Magic
$Event(12424780, Restart, function() {
    WaitFor(CharacterHasEventMessage(2420811, 40));
    SetSpEffect(2420711, 5530, false);
    SetSpEffect(2420712, 5530, false);
    SetSpEffect(2420713, 5530, false);
    SetSpEffect(2420716, 5530, false);
    SetSpEffect(2420717, 5530, false);
    SetSpEffect(2420719, 5530, false);
    SetSpEffect(2420720, 5530, false);
    RestartEvent();
});

// The body of the messenger from the moon does not come out of the specified area_XX
$Event(12424785, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    WaitFor(EventFlag(X12_4) && !InArea(X0_4, X4_4));
    RequestCharacterAICommand(X0_4, X8_4, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(InArea(10000, X4_4));
    WaitRandomTimeFrames(0, 60);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    RestartEvent();
});

// Zako, the messenger from the moon, does not leave the specified area_XX
$Event(12424787, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    WaitFor(EventFlag(X12_4) && HPRatio(X16_4) > 0.6 && !InArea(X0_4, X4_4));
    RequestCharacterAICommand(X0_4, X8_4, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(InArea(10000, X4_4));
    WaitRandomTimeFrames(0, 60);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    RestartEvent();
});

// The messenger body from the moon shoots magic from the specified area
$Event(12424784, Restart, function() {
    WaitFor(CharacterHasSpEffect(2420811, 5609) && !InArea(2420811, 2422816));
    RequestCharacterAICommand(2420811, 20, 0);
    RequestCharacterAIReplan(2420811);
    WaitFor(InArea(2420811, 2422722));
    RequestCharacterAICommand(2420811, 40, 0);
    RequestCharacterAIReplan(2420811);
    WaitFor(InArea(10000, 2422816));
    WaitRandomTimeFrames(0, 60);
    RequestCharacterAICommand(2420811, -1, 0);
    RequestCharacterAIReplan(2420811);
    RestartEvent();
});

// Transform into Messenger from the Moon (Large)
$Event(12424790, Restart, function() {
    WaitFor(CharacterBackreadStatus(2420811));
    SetCharacterAIState(2420811, Disabled);
    SetCharacterGravity(2420811, Disabled);
    SetCharacterHPBarDisplay(2420811, Disabled);
    CreateReferredDamagePair(2420810, 2420811);
    SetCharacterGravity(2420750, Disabled);
    SetCharacterGravity(2420751, Disabled);
    WaitFor(HPRatio(2420810) < 0.6 && HPRatio(2420811) > 0);
    SetCharacterHome(2420811, 2422721);
    RequestCharacterAICommand(2420810, 40, 1);
    RequestCharacterAIReplan(2420810);
    WaitFor(CharacterHasEventMessage(2420810, 30));
    DisplayBossHealthBar(Disabled, 2420810, 0, 257000);
    WaitFixedTimeFrames(5);
    ChangeCharacterEnableState(2420810, Disabled);
    WarpCharacterAndCopyFloor(2420811, TargetEntityType.Character, 2420810, 203, 2420810);
    SetCharacterGravity(2420811, Enabled);
    SetCharacterAIState(2420811, Enabled);
    ForceAnimationPlayback(2420811, 3025, false, true, false);
    DisplayBossHealthBar(Enabled, 2420811, 0, 257000);
});

// Messenger from the Moon (Large) Tentacle Warp
$Event(12424791, Restart, function() {
    WaitFor(HPRatio(2420811) <= 0.3);
    if (!ThisEvent()) {
        WaitFixedTimeFrames(135);
    }
    WarpCharacterAndCopyFloor(2420750, TargetEntityType.Character, 2420811, 40, 2420811);
    WarpCharacterAndCopyFloor(2420751, TargetEntityType.Character, 2420811, 41, 2420811);
    RestartEvent();
});

// Messenger from the Moon (Large) Tentacle expansion/contraction control_XX
$Event(12424792, Restart, function(X0_4) {
    WaitFor(HPRatio(2420811) <= 0.3);
    if (!ThisEventSlot()) {
        WaitFixedTimeFrames(145);
        ForceAnimationPlayback(X0_4, 3000, false, false, false);
    }
    WaitFor(CharacterHasSpEffect(2420811, 5402));
    ForceAnimationPlayback(X0_4, 3000, false, false, false);
    WaitFixedTimeSeconds(3.5);
    ChangeCharacterEnableState(X0_4, Disabled);
    WaitFor(CharacterHasSpEffect(2420811, 5400));
    WaitFixedTimeSeconds(1.5);
    ChangeCharacterEnableState(X0_4, Enabled);
    ForceAnimationPlayback(X0_4, 3000, false, false, false);
    RestartEvent();
});

// Messenger from the Moon (Large) Collapses while chanting magic 3
$Event(12424795, Restart, function() {
    WaitFor(CharacterHasSpEffect(2420811, 5531) && HasDamageType(2420811, 10000, DamageType.Unspecified));
    ForceAnimationPlayback(2420811, 3030, false, false, false);
    WaitFixedTimeFrames(59);
    ForceAnimationPlayback(2420811, 7000, true, true, true);
    WaitFixedTimeFrames(150);
    ForceAnimationPlayback(2420811, 3000, true, true, true);
    RestartEvent();
});

// Door opening process_XX
$Event(12420000, Default, function(X0_4, X4_4, X8_4, X12_4) {
    if (ThisEventSlot()) {
        ReproduceObjectAnimation(X0_4, X4_4);
        SetObjactState(X0_4, X8_4, Disabled);
        NotifySoundDampeningOfDoorEvent(X0_4, DoorState.DoorOpening);
        EndEvent();
    }
L0:
    WaitFor(ObjActEventFlag(X12_4));
    WaitFixedTimeSeconds(0);
});

// Msg_XX when door opens
$Event(12420030, Default, function(X0_4) {
    SetNetworkSyncState(Disabled);
    EndIf(ThisEventSlot());
    WaitFor(ObjActEventFlag(X0_4));
    WaitFixedTimeSeconds(0);
});

// Treasure Chest_XX
$Event(12420050, Default, function(X0_4, X4_4, X8_4) {
    if (ThisEventSlot()) {
        ReproduceObjectAnimation(X0_4, 0);
        SetObjactState(X0_4, X8_4, Disabled);
        SetObjectTreasureState(X0_4, Enabled);
        EndEvent();
    }
L0:
    WaitFor(ObjActEventFlag(X4_4));
    WaitFixedTimeFrames(10);
    SetObjectTreasureState(X0_4, Enabled);
});

// Boss room window glass broken
$Event(12420100, Default, function() {
    if (ThisEvent()) {
        ReproduceObjectDestruction(2421850, 1);
        EndEvent();
    }
    WaitFor(ObjectDestroyed(2421850));
    SetEventFlag(12420100, ON);
});

// lever door
$Event(12420123, Default, function() {
    if (ThisEvent()) {
        ReproduceObjectAnimation(2421200, 1);
        SetObjactState(2421270, 2420000, Disabled);
        EndEvent();
    }
L0:
    WaitFor(ObjActEventFlag(12420122));
    ForceAnimationPlayback(2421200, 1, false, false, false);
    CreateObjectfollowingSFX(2421200, 200, 920204);
    CreateObjectfollowingSFX(2421200, 201, 920205);
});

// Lever door_Indication that it is closed with a mechanism
$Event(12420124, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12420123));
    act = ActionButtonInArea(2420030, 2421200);
    act2 = ActionButtonInArea(2420000, 2421200);
    obj = ObjActEventFlag(12420122);
    flag = EventFlag(12420123);
    WaitFor(act || act2 || obj || flag);
    EndIf(obj.Passed);
    EndIf(flag.Passed);
    DisplayGenericDialog(10010160, PromptType.OKCANCEL, NumberofOptions.OneButton, 2421200, 3);
    WaitFixedTimeSeconds(0);
    RestartEvent();
});

// Reproducing the result of the opened door_XX
$Event(12420130, Default, function(X0_4, X4_4, X8_4, X12_4) {
    if (ThisEventSlot()) {
        ReproduceObjectAnimation(X0_4, X4_4);
        SetObjactState(X0_4, X12_4, Disabled);
        EndEvent();
    }
L0:
    WaitFor(ObjActEventFlag(X8_4));
    WaitFixedTimeSeconds(0);
});

// Lever after opening
$Event(12420140, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(EventFlag(12420123) && ActionButtonInArea(7100, 2421270));
    DisplayGenericDialog(10010172, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
    WaitFixedTimeSeconds(0);
    RestartEvent();
});

// Elevator in front of Moon's Spawn_Initialization
$Event(12420150, Default, function() {
    flag = EventFlag(12420154);
    WaitFor(flag || !EventFlag(12420154));
    if (!flag.Passed) {
        ReproduceObjectAnimation(2421250, 0);
        SetObjactState(2421251, 2420000, Disabled);
        SetObjactState(2421252, 2420000, Enabled);
    } else {
        ReproduceObjectAnimation(2421250, 8);
        SetObjactState(2421251, 2420000, Enabled);
        SetObjactState(2421252, 2420000, Disabled);
    }
});

// Elevator in front of the moon spawn_down
$Event(12420151, Default, function() {
    if (!(!EventFlag(12420154) && EventFlag(12420155))) {
        WaitFor(
            (!EventFlag(12420154) && !EventFlag(12420155) && InArea(10000, 2422651))
                || (!EventFlag(12420154) && !EventFlag(12420155) && ObjActEventFlag(12420124)));
    }
L0:
    SetEventFlag(12420155, ON);
    ForceAnimationPlayback(2421250, 1, false, false, false);
    ForceAnimationPlayback(2421250, 8, false, false, false);
    WaitFixedTimeFrames(250);
    WaitFor(!AllPlayersInArea(2422652));
    SetObjactState(2421252, 2420000, Disabled);
    ForceAnimationPlayback(2421250, 9, false, false, false);
    WaitFixedTimeFrames(10);
    SetEventFlag(12420154, ON);
    SetEventFlag(12420155, OFF);
    SetObjactState(2421251, 2420000, Enabled);
    RestartEvent();
});

// Elevator in front of Moon's Spawn_Up
$Event(12420152, Default, function() {
    if (!(EventFlag(12420154) && EventFlag(12420155))) {
        WaitFor(
            (EventFlag(12420154) && !EventFlag(12420155) && InArea(10000, 2422652))
                || (EventFlag(12420154) && !EventFlag(12420155) && ObjActEventFlag(12420123)));
    }
L0:
    SetEventFlag(12420155, ON);
    ForceAnimationPlayback(2421250, 11, false, false, false);
    ForceAnimationPlayback(2421250, 12, false, false, false);
    WaitFixedTimeFrames(250);
    WaitFor(!AllPlayersInArea(2422651));
    SetObjactState(2421251, 2420000, Disabled);
    ForceAnimationPlayback(2421250, 7, false, false, false);
    WaitFixedTimeFrames(10);
    SetEventFlag(12420154, OFF);
    SetEventFlag(12420155, OFF);
    SetObjactState(2421252, 2420000, Enabled);
    RestartEvent();
});

// Elevator in front of Moon's Spawn_The mechanism doesn't work
$Event(12420153, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor((!EventFlag(12420154) || EventFlag(12420155)) && ActionButtonInArea(7100, 2421251));
    DisplayGenericDialog(10010172, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
    RestartEvent();
});

// Elevator in front of Moon's Spawn_The mechanism doesn't work_Bottom
$Event(12420156, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor((EventFlag(12420154) || EventFlag(12420155)) && ActionButtonInArea(7100, 2421252));
    DisplayGenericDialog(10010172, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
    RestartEvent();
});

// One-way door_XX
$Event(12420280, Restart, function(X0_4) {
    SetNetworkSyncState(Disabled);
    WaitFor(InArea(10000, X0_4));
    SetSpEffect(10000, 4150, false);
    WaitFixedTimeSeconds(3);
    RestartEvent();
});

// One-way door_opposite side after release_XX
$Event(12420285, Restart, function(X0_4, X4_4) {
    WaitFor(EventFlag(X4_4));
    SetNetworkSyncState(Disabled);
    WaitFor(InArea(10000, X0_4));
    SetSpEffect(10000, 4150, false);
    WaitFixedTimeSeconds(3);
    RestartEvent();
});

// Environmental sound playback
$Event(12420300, Restart, function() {
    SetNetworkSyncState(Disabled);
    EndIf(ThisEvent());
    WaitFor(InArea(10000, 2422681));
    PlaySE(2422680, SoundType.aEnvironmentalSound, 20011001);
    SetEventFlag(12420301, ON);
});

// Hound raid
$Event(12420310, Restart, function() {
    if (ThisEventSlot()) {
        ChangeCharacterEnableState(2420205, Enabled);
        ChangeCharacterEnableState(2420204, Disabled);
        IssueShortWarpRequest(2420205, TargetEntityType.Area, 2422205, -1);
        ReproduceObjectDestruction(2421210, 1);
        EndEvent();
    }
    SetCharacterAIState(2420205, Disabled);
    SetCharacterGravity(2420205, Disabled);
    SetCharacterMaphits(2420205, true);
    ChangeCharacterEnableState(2420205, Disabled);
    WaitFor(
        (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && EventFlag(52420170)
            && InArea(10000, 2422660));
    PlaySE(2421121, SoundType.aEnvironmentalSound, 20011004);
    ChangeCharacterEnableState(2420205, Enabled);
    ForceAnimationPlayback(2420205, 7004, false, false, false);
    WaitFixedTimeFrames(10);
    RequestObjectDestruction(2421210, 1);
    SetCharacterGravity(2420205, Enabled);
    SetCharacterMaphits(2420205, false);
    SetCharacterAIState(2420205, Enabled);
});

// chandelier falls
$Event(12420320, Restart, function() {
    if (ThisEvent()) {
        DeactivateObject(2421300, Disabled);
        WarpCharacterAndSetFloor(2420200, TargetEntityType.Area, 2422200, -1, 2420203);
        WarpCharacterAndSetFloor(2420201, TargetEntityType.Area, 2422201, -1, 2420203);
        WarpCharacterAndSetFloor(2420202, TargetEntityType.Area, 2422202, -1, 2420203);
        SetCharacterHome(2420200, 2422200);
        SetCharacterHome(2420201, 2422201);
        SetCharacterHome(2420202, 2422202);
        ReproduceObjectDestruction(2421301, 1);
        EndEvent();
    }
L0:
    DeactivateObject(2421301, Disabled);
    ChangeCharacterEnableState(2420200, Disabled);
    SetCharacterAIState(2420200, Disabled);
    SetCharacterGravity(2420200, Disabled);
    SetCharacterAIState(2420201, Disabled);
    SetCharacterGravity(2420201, Disabled);
    ForceAnimationPlayback(2420201, 7011, true, false, false);
    SetCharacterAIState(2420202, Disabled);
    SetCharacterGravity(2420202, Disabled);
    ForceAnimationPlayback(2420202, 7012, true, false, false);
    CreateObjectfollowingSFX(2421300, 100, 924500);
    CreateObjectfollowingSFX(2421300, 101, 924500);
    CreateObjectfollowingSFX(2421300, 102, 924500);
    CreateObjectfollowingSFX(2421300, 103, 924500);
    CreateObjectfollowingSFX(2421300, 104, 924500);
    CreateObjectfollowingSFX(2421300, 105, 924500);
    CreateObjectfollowingSFX(2421300, 106, 924500);
    CreateObjectfollowingSFX(2421300, 107, 924500);
    CreateObjectfollowingSFX(2421300, 108, 924500);
    CreateObjectfollowingSFX(2421300, 109, 924500);
    CreateObjectfollowingSFX(2421300, 110, 924500);
    CreateObjectfollowingSFX(2421300, 111, 924500);
    CreateObjectfollowingSFX(2421300, 112, 924500);
    CreateObjectfollowingSFX(2421300, 113, 924500);
    CreateObjectfollowingSFX(2421300, 114, 924500);
    CreateObjectfollowingSFX(2421300, 115, 924500);
    CreateObjectfollowingSFX(2421300, 116, 924500);
    CreateObjectfollowingSFX(2421300, 117, 924500);
    CreateObjectfollowingSFX(2421300, 118, 924500);
    CreateObjectfollowingSFX(2421300, 119, 924500);
    CreateObjectfollowingSFX(2421300, 120, 924500);
    CreateObjectfollowingSFX(2421300, 121, 924500);
    CreateObjectfollowingSFX(2421300, 122, 924500);
    CreateObjectfollowingSFX(2421300, 123, 924500);
    CreateObjectfollowingSFX(2421300, 124, 924500);
    CreateObjectfollowingSFX(2421300, 125, 924500);
    CreateObjectfollowingSFX(2421300, 126, 924500);
    CreateObjectfollowingSFX(2421300, 127, 924500);
    CreateObjectfollowingSFX(2421300, 128, 924500);
    CreateObjectfollowingSFX(2421300, 129, 924500);
    CreateObjectfollowingSFX(2421300, 130, 924500);
    CreateObjectfollowingSFX(2421300, 131, 924500);
    CreateObjectfollowingSFX(2421300, 132, 924500);
    CreateObjectfollowingSFX(2421300, 133, 924500);
    CreateObjectfollowingSFX(2421300, 134, 924500);
    CreateObjectfollowingSFX(2421300, 135, 924500);
    CreateObjectfollowingSFX(2421300, 136, 924500);
    CreateObjectfollowingSFX(2421300, 137, 924500);
    CreateObjectfollowingSFX(2421300, 138, 924500);
    CreateObjectfollowingSFX(2421300, 139, 924500);
    CreateObjectfollowingSFX(2421300, 201, 924501);
    WaitFor(
        InArea(10000, 2422653)
            && (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom)));
    ChangeCharacterEnableState(2420200, Enabled);
    ForceAnimationPlayback(2420200, 7007, false, false, false);
    ForceAnimationPlayback(2420201, 7008, false, false, false);
    ForceAnimationPlayback(2420202, 7009, false, false, false);
    ForceAnimationPlayback(2421300, 1, false, false, false);
    WaitFixedTimeFrames(81);
    DeleteObjectfollowingSFX(2421300, false);
    CreateObjectfollowingSFX(2421300, 201, 924502);
    WaitFixedTimeFrames(32);
    CreateObjectfollowingSFX(2421300, 201, 924503);
    DeactivateObject(2421300, Disabled);
    DeactivateObject(2421301, Enabled);
    RequestObjectDestruction(2421301, 1);
    SetCharacterAIState(2420200, Enabled);
    SetCharacterGravity(2420200, Enabled);
    SetCharacterHome(2420200, 2422200);
    SetCharacterAIState(2420201, Enabled);
    SetCharacterGravity(2420201, Enabled);
    SetCharacterHome(2420201, 2422201);
    SetCharacterAIState(2420202, Enabled);
    SetCharacterGravity(2420202, Enabled);
    SetCharacterHome(2420202, 2422202);
    WaitFixedTimeSeconds(10);
    SetCharacterAIId(2420200, 100000);
    SetCharacterAIId(2420201, 100000);
    SetCharacterAIId(2420202, 100000);
});

// Time zone change_Cathedral city C
$Event(12420400, Default, function() {
    if (!EventFlag(9802)) {
        if (!EventFlag(9801)) {
            if (!EventFlag(9800)) {
                if (EventFlag(9800)) {
                }
L0:
                NoOp();
            }
L1:
            NoOp();
        }
L2:
        ActivateMapPart(2424000, Enabled);
        ActivateMapPart(2424010, Disabled);
        EndEvent();
    }
L3:
    ActivateMapPart(2424000, Disabled);
    ActivateMapPart(2424010, Enabled);
});

// Queen of the Tainted Bloodline_Resurrection
$Event(12420500, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    SetEventFlag(72500326, OFF);
    WaitFor(EventFlag(72500326));
    BatchSetEventFlags(72500304, 72500309, OFF);
    SetEventFlag(72500328, ON);
    RemoveItemFromPlayer(ItemType.Goods, 4305, 1);
    PlayCutsceneToPlayer(24020000, CutscenePlayMode.Skippable, 10000);
    WaitFixedTimeFrames(10);
    SetEventFlag(72500339, OFF);
    SaveRequest(0);
    RestartEvent();
});

// New style switching_Opening the door_XX
$Event(12420850, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
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

// New style change_Open the door_Cathedral
$Event(12420853, Restart, function() {
    DeleteMapSFX(2427031, false);
    DeleteMapSFX(2427032, false);
    DeleteMapSFX(2427033, false);
    if (EventFlag(12420133)) {
        SpawnMapSFX(2427032);
        SpawnMapSFX(2427033);
        EndEvent();
    }
    WaitFor(ObjActEventFlag(12420112));
    WaitFixedTimeSeconds(6);
    SpawnMapSFX(2427031);
    SpawnOneshotSFX(TargetEntityType.Object, 2421204, 200, 920206);
    SpawnOneshotSFX(TargetEntityType.Object, 2421204, 242, 920207);
    WaitFixedTimeSeconds(4);
    SpawnMapSFX(2427032);
    SpawnMapSFX(2427033);
});

// New wind switching_window destruction
$Event(12420854, Restart, function() {
    DeleteMapSFX(2427023, false);
    DeleteMapSFX(2427024, false);
    if (EventFlag(12420310)) {
        SpawnMapSFX(2427024);
        EndEvent();
    }
    WaitFor(EventFlag(12420310));
    WaitFixedTimeSeconds(1);
    SpawnMapSFX(2427023);
    WaitFixedTimeSeconds(4);
    SpawnMapSFX(2427024);
});

// Brain eater that pops out
$Event(12425200, Restart, function(X0_4) {
    ForceAnimationPlayback(X0_4, 7000, true, false, false);
    chr = CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom);
    dmg = HasDamageType(X0_4, -1, DamageType.Unspecified);
    areaChr = EntityInRadiusOfEntity(X0_4, 10000, 2) && chr;
    areaChr2 = InArea(10000, 2422661) && chr;
    WaitFor(dmg || areaChr || areaChr2);
    if (!areaChr2.Passed) {
        ForceAnimationPlayback(X0_4, 7001, false, false, false);
        RequestCharacterAIReplan(X0_4);
        EndEvent();
    }
    ForceAnimationPlayback(X0_4, 7001, false, false, false);
    RequestCharacterAICommand(X0_4, 10, 0);
    SetCharacterHome(X0_4, 2422262);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterDamagedBy(X0_4, 10000) || InArea(X0_4, 2422262));
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
});

// Brain-eating special standby_XX
$Event(12425210, Restart, function(X0_4) {
    EndIf(ThisEventSlot());
    ForceAnimationPlayback(X0_4, 7000, true, false, false);
    WaitFor(
        ((CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && EntityInRadiusOfEntity(X0_4, 10000, 2))
            || HasDamageType(X0_4, -1, DamageType.Unspecified));
    ForceAnimationPlayback(X0_4, 7001, false, false, false);
    RequestCharacterAIReplan(X0_4);
});

// Brain-eater patrol changed
$Event(12425221, Restart, function(X0_4) {
    WaitFor(InArea(X0_4, 2422655));
    ChangeCharacterPatrolBehavior(X0_4, 2423210);
});

// Start moving to the nest after entering the area_XX
Event(12425250, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_1) {
    IfCharacterBackreadStatus(MAIN, X0_4, true);
    WaitFixedTimeSeconds(1);
    SetCharacterHome(X0_4, X16_4);
    RequestCharacterAICommand(X0_4, 20, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(X4_4);
    RequestCharacterAICommand(X0_4, 30, 0);
    RequestCharacterAIReplan(X0_4);
    IfCharacterType(OR_03, 10000, TargetType.Alive);
    IfCharacterType(OR_03, 10000, TargetType.WhitePhantom);
    IfInoutsideArea(OR_04, InsideOutsideState.Inside, 10000, X8_4);
    IfEntityInoutsideRadiusOfEntity(OR_04, InsideOutsideState.Inside, 10000, X0_4, X12_4);
    IfConditionGroup(AND_01, PASS, OR_03);
    IfConditionGroup(AND_01, PASS, OR_04);
    IfConditionGroup(OR_01, PASS, AND_01);
    IfDamageType(OR_01, X0_4, -1, DamageType.Unspecified);
    IfConditionGroup(MAIN, PASS, OR_01);
    RequestCharacterAICommand(X0_4, X20_4, 0);
    RequestCharacterAIReplan(X0_4);
    SkipIfComparison(X28_1, ComparisonType.NotEqual, 0, X24_4);
    IfCharacterAIState(OR_02, X0_4, AIStateType.Alert);
    IfCharacterAIState(OR_02, X0_4, AIStateType.Recognition);
    IfCharacterAIState(OR_02, X0_4, AIStateType.Combat);
    IfDamageType(OR_02, X0_4, 10000, DamageType.Unspecified);
    IfConditionGroup(MAIN, PASS, OR_02);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
});

// Brain-eating special standby_distance_area
$Event(12425225, Restart, function() {
    EndIf(ThisEvent());
    ForceAnimationPlayback(2420253, 7000, true, false, false);
    WaitFor(
        ((CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && (InArea(10000, 2422253) || EntityInRadiusOfEntity(2420253, 10000, 2)))
            || HasDamageType(2420253, -1, DamageType.Unspecified));
    ForceAnimationPlayback(2420253, 7001, false, false, false);
    RequestCharacterAIReplan(2420253);
});

// Cathedral town C_BGM_play
$Event(12425245, Restart, function() {
    SetNetworkSyncState(Disabled);
    SetMapSoundState(2423600, Disabled);
    WaitFor(PlayerInMap(24, 2) && !EventFlag(12425246));
    SetMapSoundState(2423600, Enabled);
    WaitFor(!PlayerInMap(24, 2) || EventFlag(12425246));
    SetMapSoundState(2423600, Disabled);
    RestartEvent();
});

// SAN value judgment
$Event(12425290, Restart, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    EndIf(PlayerInsightAmount() < 10);
    SetEventFlag(12425291, ON);
});

// The appearance of the church messenger changes depending on the SAN value.
$Event(12425300, Restart, function(X0_4) {
    WaitFor(EventFlag(12425291) || EventFlag(9802));
    ChangeCharacterDispmask(X0_4, 3, OFF);
    ChangeCharacterDispmask(X0_4, 4, ON);
    SetSpEffect(X0_4, 5696, false);
});

// The appearance of the church messenger changes depending on the SAN value (sickle)
$Event(12425305, Restart, function(X0_4) {
    WaitFor(EventFlag(12425291) || EventFlag(9802));
    SetSpEffect(X0_4, 5552, false);
    SetSpEffect(X0_4, 5553, false);
    SetSpEffect(X0_4, 5554, false);
});

// Larva of the Moon_Anime playback with wall hanging
$Event(12425310, Restart, function(X0_4) {
    EndIf(ThisEventSlot());
    ForceAnimationPlayback(X0_4, 7018, true, false, false);
    dmg = HasDamageType(X0_4, 10000, DamageType.Unspecified);
    WaitFor(
        CharacterAIState(X0_4, AIStateType.Alert)
            || CharacterAIState(X0_4, AIStateType.Recognition)
            || CharacterAIState(X0_4, AIStateType.Combat)
            || dmg);
    if (!dmg.Passed) {
        WaitRandomTimeSeconds(0, 2);
        ForceAnimationPlayback(X0_4, 7019, false, false, false);
    }
    RequestCharacterAIReplan(X0_4);
});

// Moon larvae join together in front of the orphanage to pray_XX
$Event(12425320, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(ThisEventSlot());
    WaitFor(CharacterBackreadStatus(X0_4));
    WaitFixedTimeSeconds(1);
    SetCharacterHome(X0_4, X12_4);
    WaitFor(
        InArea(X0_4, X12_4)
            && (CharacterAIState(X0_4, AIStateType.Normal)
                || CharacterAIState(X0_4, AIStateType.Recognition)
                || CharacterAIState(X0_4, AIStateType.Alert)));
    WaitRandomTimeSeconds(0, 2);
    ForceAnimationPlayback(X0_4, X4_4, false, true, false);
    ForceAnimationPlayback(X0_4, X8_4, true, false, false);
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    ForceAnimationPlayback(X0_4, 0, false, false, false);
    RestartEvent();
});

// Do not detect PC until attacked or in combat state_XX
$Event(12425350, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(ThisEventSlot());
    WaitFor(CharacterBackreadStatus(X0_4));
    SetCharacterAIId(X0_4, X4_4);
    WaitFor(CharacterDamagedBy(X0_4, 10000) || CharacterAIState(X0_4, AIStateType.Combat));
    WaitRandomTimeSeconds(1, 3);
    SetCharacterAIId(X0_4, X8_4);
    RequestCharacterAIReplan(X0_4);
});

// Enemy logic ON_XX by area invasion
$Event(12425500, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(ThisEventSlot());
    WaitFor(CharacterBackreadStatus(X0_4));
    WaitFixedTimeSeconds(X16_4);
    SetCharacterAIState(X0_4, Disabled);
    chr = CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom);
    chrAreaDmg |= (chr && EntityInRadiusOfEntity(10000, X0_4, X4_4)) || CharacterDamagedBy(X0_4, 10000);
    if (1 == X8_4) {
        chrAreaDmg |= InArea(10000, X12_4) && chr;
    }
    WaitFor(chrAreaDmg);
    SetCharacterAIState(X0_4, Enabled);
    RequestCharacterAIReplan(X0_4);
});

// The messenger from the moon before the baby begins to move
$Event(12425600, Restart, function() {
    EndIf(ThisEvent());
    WaitFor(CharacterBackreadStatus(2420401) && CharacterBackreadStatus(2420402));
    SetCharacterAIState(2420401, Disabled);
    SetCharacterAIState(2420402, Disabled);
    chr = CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom);
    WaitFor(
        (chr && (EntityInRadiusOfEntity(10000, 2420401, 5) || EntityInRadiusOfEntity(10000, 2420402, 5)))
            || (chr && InArea(10000, 2422685))
            || CharacterDamagedBy(2420401, 10000)
            || CharacterDamagedBy(2420402, 10000));
    SetCharacterAIState(2420401, Enabled);
    RequestCharacterAIReplan(2420401);
    WaitFixedTimeSeconds(3);
    SetCharacterAIState(2420402, Enabled);
    RequestCharacterAIReplan(2420402);
});

// Before spawning_tentacle attach
$Event(12425601, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(!CharacterDead(2420402) && CharacterBackreadStatus(2420402));
    IssueShortWarpRequest(2420731, TargetEntityType.Character, 2420402, 40);
    RestartEvent();
});

// Before birth_linked death
$Event(12425602, Restart, function() {
    WaitFor(HPRatio(2420402) <= 0);
    WaitFixedTimeSeconds(1);
    ForceAnimationPlayback(2420731, 2200, false, true, false);
    ChangeCharacterEnableState(2420731, Disabled);
});

// Before the child was born_LvUp
$Event(12425603, Default, function() {
    SetSpEffect(2420402, 5609, false);
    SetCharacterGravity(2420731, Disabled);
});

// Surprise attack_XX
$Event(12425400, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(ThisEventSlot());
    chr = CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom);
    areaChr = InArea(10000, X4_4) && chr;
    dmgChr = HasDamageType(X0_4, 10000, DamageType.Unspecified) && chr;
    WaitFor(areaChr || dmgChr);
    EndIf(dmgChr.Passed);
    ForceAnimationPlayback(X0_4, X8_4, false, false, false);
});

// Map first entry_play log
$Event(12420990, Default, function() {
    EndIf(ThisEvent());
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(PlayerStandingOnHit(2423500));
    ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 154, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 154, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.Weapon, 154, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.Armor, 154, PlayLogMultiplayerType.HostOnly);
    AwardAchievement(11);
});

// ★Cathedral Town C_New NPC Summon_Aim for the Boss Room_XX
$Event(12424450, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(ThisEventSlot());
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    SetEventPoint(X0_4, X4_4, 1);
    WaitFor(EventFlag(X8_4) && !EventFlag(X12_4) && EventFlag(X16_4));
    RequestCharacterAICommand(X0_4, 990, 0);
    RequestCharacterAIReplan(X0_4);
});

// ★Cathedral Town C_New NPC Summon_Summonability Judgment_Top Ranking Hunt
$Event(12424400, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    if (!EventFlag(X0_4)) {
        SetEventFlag(X0_4, OFF);
        DeleteMapSFX(X4_4, true);
        WaitFor(
            PlayerHasItem(ItemType.Goods, 4312)
                && !EventFlag(X8_4)
                && !EventFlag(X12_4)
                && !EventFlag(X16_4)
                && NumberOfClientsOfType(ClientType.Coop) < 2
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
                && !EventFlag(X20_4)));
    SetEventFlag(X0_4, OFF);
    DeleteMapSFX(X4_4, true);
    RestartEvent();
});

// ★Cathedral City C_New NPC Summon_Participation_XX
$Event(12424410, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
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
});

// ★Cathedral Town C_New NPC Summon_Enter Boss Room_XX
$Event(12424460, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
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
