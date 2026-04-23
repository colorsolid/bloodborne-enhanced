// ==EMEVD==
// @docs    bb-common.emedf.json
// @compress    DCX_DFLT_10000_44_9
// @game    Bloodborne
// @string    "クリア時間_通し\u0000クリア時間_1プレイ\u0000ボス_撃破\u0000PC情報_ボス撃破_教区長\u0000ボス_戦闘開始\u0000ボス戦_撃破時間\u0000PC情報_ボス撃破_ガスコイン\u0000\u0000PC情報_聖堂街B到達時\u0000N:\\SPRJ\\data\\Param\\event\\common.emevd\u0000\u0000\u0000\u0000"
// @linked    [174]
// @version    3.6.3
// ==/EMEVD==

const area_id = 24;
const block_id = 1;

const iosefka_lamp_offset = 15;
const iosefka_lamp_id = 2411950;
const iosefka_lamp_kindle = 12110000 + (area_id * 100) + (block_id * 10);

const central_lamp_offset = 16;
const central_lamp_id = 2411951;
const central_lamp_kindle = 12110000 + (area_id * 100) + (block_id * 10) + 2;

const cleric_beast_offset = 0;
const cleric_beast_lamp_offset = 17;
const cleric_beast_defeat = 12411700;
const cleric_beast_return = 2411759;
const cleric_beast_lamp_id = 2411952;
const cleric_beast_region = 2412802;
const cleric_beast_id = 2410800;
const cleric_beast_kindle = 12110000 + (area_id * 100) + (block_id * 10) + 4;

const gascoigne_offset = 1;
const gascoigne_lamp_offset = 18;
const gascoigne_defeat = 12411800;
const gascoigne_return = 2411859;
const gascoigne_lamp_id = 2411953;
const gascoigne_lamp_kindle = 12110000 + (area_id * 100) + (block_id * 10) + 6;
const gascoigne_region = 2412812;
const gascoigne_id1 = 2410810;
const gascoigne_id2 = 2410811;

// clinic gate 2411300
// street gate 2411302
// lamp gate 2411301
// window girl gate 2411303
// house doors x2 2411601, 2411600
// elevator 2411320

// constructor
$Event(0, Default, function() {
    //InitializeEvent(0, 12411500, 0);
    //InitializeEvent(0, 12410815, 0);
    //SetEventFlag(62411319, OFF);
    SetEventFlag(8900+cleric_beast_offset, OFF);
    SetEventFlag(8900+gascoigne_offset, OFF);
    
    $InitializeEvent(1, 7900, 10000000+cleric_beast_return, cleric_beast_return, area_id, block_id);
    $InitializeEvent(2, 7900, 10000000+gascoigne_return, gascoigne_return, area_id, block_id);
    
    $InitializeEvent(iosefka_lamp_offset, 8500, 8500+iosefka_lamp_offset, iosefka_lamp_id, 72110000);
    $InitializeEvent(central_lamp_offset, 8500, 8500+central_lamp_offset, central_lamp_id, 72110101);
    $InitializeEvent(cleric_beast_lamp_offset, 8500, 8500+cleric_beast_lamp_offset, cleric_beast_lamp_id, 72110202);
    $InitializeEvent(gascoigne_lamp_offset, 8500, 8500+gascoigne_lamp_offset, gascoigne_lamp_id, 72110303);
    
    $InitializeEvent(iosefka_lamp_offset, 8100, 8100+iosefka_lamp_offset, iosefka_lamp_kindle);
    $InitializeEvent(central_lamp_offset, 8100, 8100+central_lamp_offset, central_lamp_kindle);
    $InitializeEvent(cleric_beast_lamp_offset, 8100, 8100+cleric_beast_lamp_offset, cleric_beast_kindle);
    $InitializeEvent(gascoigne_lamp_offset, 8100, 8100+gascoigne_lamp_offset, gascoigne_lamp_kindle);
    
    $InitializeEvent(iosefka_lamp_offset, 8300, iosefka_lamp_id+2000, -1, iosefka_lamp_kindle, iosefka_lamp_id+6000, iosefka_lamp_id+3000);
    $InitializeEvent(central_lamp_offset, 8300, central_lamp_id+2000, -1, central_lamp_kindle, central_lamp_id+6000, central_lamp_id+3000);
    
    SetEventFlag(gascoigne_defeat+15, OFF);
    if (EventFlag(gascoigne_defeat+14)) {
        SetEventFlag(gascoigne_defeat+14, OFF);
        SetEventFlag(gascoigne_defeat+15, ON);
    }
    
    // post rematch cleanup
    if (EventFlag(cleric_beast_defeat+13) && !EventFlag(cleric_beast_defeat-1)) {
        if (EventFlag(cleric_beast_defeat-2)) {
            SetEventFlag(cleric_beast_defeat-2, OFF);
            $InitializeEvent(cleric_beast_offset, 7500, cleric_beast_region, cleric_beast_lamp_id+4000);
        }
        SetEventFlag(cleric_beast_defeat+13, OFF);
        SetEventFlag(cleric_beast_defeat, ON);
        if (EventFlag(12111120)) {
            SetEventFlag(12111120, OFF);
            $InitializeEvent(cleric_beast_lamp_offset, 8300, cleric_beast_lamp_id+2000, -1, cleric_beast_kindle, cleric_beast_lamp_id+6000, cleric_beast_lamp_id+3000);
        }
        else {
            $InitializeEvent(cleric_beast_lamp_offset, 8300, cleric_beast_lamp_id+2000, 999, cleric_beast_kindle, cleric_beast_lamp_id+6000, cleric_beast_lamp_id+3000);
            DummyPlayCutsceneAndWarpPlayer(cleric_beast_lamp_id+4000, area_id, block_id);
        }
    // rematch has started
    } else if (EventFlag(cleric_beast_defeat+12) || EventFlag(cleric_beast_defeat-1)) {
        if (EventFlag(cleric_beast_defeat-2)) {
            SetEventFlag(cleric_beast_defeat-2, OFF);
            $InitializeEvent(cleric_beast_offset, 7500, cleric_beast_region, cleric_beast_lamp_id+5000);
        }
        SetEventFlag(cleric_beast_defeat, OFF);
        SetEventFlag(cleric_beast_defeat+2, OFF);
        SetEventFlag(cleric_beast_defeat+12, OFF);
        SetEventFlag(cleric_beast_defeat+13, ON);
        SetEventFlag(cleric_beast_defeat-1, OFF);
        SetEventFlag(8900+cleric_beast_offset, ON);
        $InitializeEvent(cleric_beast_lamp_offset, 8300, cleric_beast_lamp_id+2000, -1, cleric_beast_kindle, cleric_beast_lamp_id+6000, cleric_beast_lamp_id+3000);
    } else {
        $InitializeEvent(cleric_beast_lamp_offset, 8300, cleric_beast_lamp_id+2000, -1, cleric_beast_kindle, cleric_beast_lamp_id+6000, cleric_beast_lamp_id+3000);
    }
    
    if (EventFlag(gascoigne_defeat+13) && !EventFlag(gascoigne_defeat-1)) {
        if (EventFlag(gascoigne_defeat-2)) {
            SetEventFlag(gascoigne_defeat-2, OFF);
            $InitializeEvent(gascoigne_offset, 7500, gascoigne_region, gascoigne_lamp_id+4000);
        }
        SetEventFlag(gascoigne_defeat+13, OFF);
        SetEventFlag(gascoigne_defeat, ON);
        
        if (EventFlag(12111120)) {
            SetEventFlag(12111120, OFF);
            $InitializeEvent(gascoigne_lamp_offset, 8300, gascoigne_lamp_id+2000, -1, gascoigne_lamp_kindle, gascoigne_lamp_id+6000, gascoigne_lamp_id+3000);
        }
        else {
            $InitializeEvent(gascoigne_lamp_offset, 8300, gascoigne_lamp_id+2000, 999, gascoigne_lamp_kindle, gascoigne_lamp_id+6000, gascoigne_lamp_id+3000);
            DummyPlayCutsceneAndWarpPlayer(gascoigne_lamp_id+4000, area_id, block_id);
        }
        
        // Oedon Tomb Key
        if (!PlayerHasItem(ItemType.Goods, 4000)) {
            EventValueOperation(12411819, 8, 1, 0, 1, CalculationType.Assign);
            DirectlyGivePlayerItem(ItemType.Goods, 4000, 12411819, 8);
        }
    } else if (EventFlag(gascoigne_defeat+12) || EventFlag(gascoigne_defeat-1)) {
        if (EventFlag(gascoigne_defeat-2)) {
            SetEventFlag(gascoigne_defeat-2, OFF);
            $InitializeEvent(gascoigne_offset, 7500, gascoigne_region, gascoigne_lamp_id+5000);
        }
        RemoveItemFromPlayer(ItemType.Goods, 4000, 1);
        SetEventFlag(gascoigne_defeat, OFF);
        SetEventFlag(gascoigne_defeat+2, OFF);
        SetEventFlag(gascoigne_defeat+12, OFF);
        SetEventFlag(gascoigne_defeat+13, ON);
        SetEventFlag(gascoigne_defeat-1, OFF);
        SetEventFlag(8900+gascoigne_offset, ON);
        $InitializeEvent(gascoigne_lamp_offset, 8300, gascoigne_lamp_id+2000, -1, gascoigne_lamp_kindle, gascoigne_lamp_id+6000, gascoigne_lamp_id+3000);
    } else {
        $InitializeEvent(gascoigne_lamp_offset, 8300, gascoigne_lamp_id+2000, -1, gascoigne_lamp_kindle, gascoigne_lamp_id+6000, gascoigne_lamp_id+3000);
    }
    
    $InitializeEvent(cleric_beast_offset, 12102070, cleric_beast_defeat+13, 0, 7447, cleric_beast_id, -1, -1, -1, -1);
    $InitializeEvent(gascoigne_offset, 12102070, gascoigne_defeat+13, gascoigne_defeat+15, 7448, gascoigne_id1, gascoigne_id2, -1, -1, -1);
    
    $InitializeEvent(cleric_beast_offset, 8900, cleric_beast_defeat-1, cleric_beast_lamp_id+1000, cleric_beast_defeat-2, 0, 0, cleric_beast_lamp_id+5000, area_id, block_id);
    $InitializeEvent(gascoigne_offset, 8900, gascoigne_defeat-1, gascoigne_lamp_id+1000, gascoigne_defeat-2, gascoigne_defeat+15, gascoigne_defeat+14, gascoigne_lamp_id+5000, area_id, block_id);
    
    $InitializeEvent(cleric_beast_offset, 7700, cleric_beast_defeat+11, cleric_beast_defeat+12, cleric_beast_lamp_id+1000, 824100);
    $InitializeEvent(gascoigne_offset, 7700, gascoigne_defeat+11, gascoigne_defeat+12, gascoigne_lamp_id+1000, 824102);
    
    $InitializeEvent(0, 12410818);
    
    $InitializeEvent(0, 12107000, 72110000, 2411950, 2412950);
    $InitializeEvent(1, 12107000, 72110001, 2411950, 2412951);
    $InitializeEvent(2, 12107000, 72110002, 2411950, 2412952);
    $InitializeEvent(3, 12107000, 72110003, 2411950, 2412953);
    $InitializeEvent(4, 12107000, 72110004, 2411950, 2402950);
    $InitializeEvent(5, 12107000, 72110005, 2411950, 2402951);
    $InitializeEvent(6, 12107000, 72110006, 2411950, 2422950);
    $InitializeEvent(7, 12107000, 72110007, 2411950, 2422952);
    $InitializeEvent(8, 12107000, 72110008, 2411950, 2422951);
    $InitializeEvent(9, 12107000, 72110009, 2411950, 2302950);
    $InitializeEvent(10, 12107000, 72110010, 2411950, 2302951);
    $InitializeEvent(11, 12107000, 72110011, 2411950, 2302952);
    $InitializeEvent(12, 12107000, 72110012, 2411950, 2202950);
    $InitializeEvent(13, 12107000, 72110013, 2411950, 2202951);
    $InitializeEvent(14, 12107000, 72110014, 2411950, 2702950);
    $InitializeEvent(15, 12107000, 72110015, 2411950, 2702951);
    $InitializeEvent(16, 12107000, 72110016, 2411950, 3202950);
    $InitializeEvent(17, 12107000, 72110017, 2411950, 3202952);
    $InitializeEvent(18, 12107000, 72110018, 2411950, 2802950);
    $InitializeEvent(19, 12107000, 72110019, 2411950, 2802953);
    $InitializeEvent(20, 12107000, 72110020, 2411950, 2802951);
    $InitializeEvent(21, 12107000, 72110021, 2411950, 2802952);
    $InitializeEvent(22, 12107000, 72110022, 2411950, 2502950);
    $InitializeEvent(23, 12107000, 72110023, 2411950, 2502952);
    $InitializeEvent(24, 12107000, 72110024, 2411950, 2502951);
    $InitializeEvent(25, 12107000, 72110025, 2411950, 2112950);
    $InitializeEvent(26, 12107000, 72110026, 2411950, 3202951);
    $InitializeEvent(27, 12107000, 72110027, 2411950, 3202953);
    $InitializeEvent(28, 12107000, 72110028, 2411950, 3302950);
    $InitializeEvent(29, 12107000, 72110029, 2411950, 3302951);
    $InitializeEvent(30, 12107000, 72110030, 2411950, 2602950);
    $InitializeEvent(31, 12107000, 72110031, 2411950, 2602953);
    $InitializeEvent(32, 12107000, 72110032, 2411950, 2602952);
    $InitializeEvent(33, 12107000, 72110033, 2411950, 2602951);
    $InitializeEvent(34, 12107000, 72110034, 2411950, 3402950);
    $InitializeEvent(35, 12107000, 72110035, 2411950, 3402951);
    $InitializeEvent(36, 12107000, 72110036, 2411950, 3402953);
    $InitializeEvent(37, 12107000, 72110037, 2411950, 3402952);
    $InitializeEvent(38, 12107000, 72110038, 2411950, 3502950);
    $InitializeEvent(39, 12107000, 72110039, 2411950, 3502951);
    $InitializeEvent(40, 12107000, 72110040, 2411950, 3502952);
    $InitializeEvent(41, 12107000, 72110041, 2411950, 3602950);
    $InitializeEvent(42, 12107000, 72110042, 2411950, 3602951);
    $InitializeEvent(43, 12107000, 72110043, 2411950, 3602952);
    $InitializeEvent(44, 12107000, 72110044, 2411950, 2902950);
    $InitializeEvent(45, 12107000, 72110045, 2411950, 2902951);
    $InitializeEvent(46, 12107000, 72110046, 2411950, 2902952);
    $InitializeEvent(47, 12107000, 72110047, 2411950, 2902953);
    $InitializeEvent(48, 12107000, 72110048, 2411950, 2902954);
    $InitializeEvent(49, 12107000, 72110049, 2411950, 2902955);
    $InitializeEvent(50, 12107000, 72110050, 2411950, 2902956);
    $InitializeEvent(51, 12107000, 72110051, 2411950, 2902957);
    $InitializeEvent(52, 12107000, 72110052, 2411950, 2902958);
    $InitializeEvent(53, 12107000, 72110053, 2411950, 2902959);
    
    $InitializeEvent(100, 12107000, 72110100, 2411951, 2412950);
    $InitializeEvent(101, 12107000, 72110101, 2411951, 2412951);
    $InitializeEvent(102, 12107000, 72110102, 2411951, 2412952);
    $InitializeEvent(103, 12107000, 72110103, 2411951, 2412953);
    $InitializeEvent(104, 12107000, 72110104, 2411951, 2402950);
    $InitializeEvent(105, 12107000, 72110105, 2411951, 2402951);
    $InitializeEvent(106, 12107000, 72110106, 2411951, 2422950);
    $InitializeEvent(107, 12107000, 72110107, 2411951, 2422952);
    $InitializeEvent(108, 12107000, 72110108, 2411951, 2422951);
    $InitializeEvent(109, 12107000, 72110109, 2411951, 2302950);
    $InitializeEvent(110, 12107000, 72110110, 2411951, 2302951);
    $InitializeEvent(111, 12107000, 72110111, 2411951, 2302952);
    $InitializeEvent(112, 12107000, 72110112, 2411951, 2202950);
    $InitializeEvent(113, 12107000, 72110113, 2411951, 2202951);
    $InitializeEvent(114, 12107000, 72110114, 2411951, 2702950);
    $InitializeEvent(115, 12107000, 72110115, 2411951, 2702951);
    $InitializeEvent(116, 12107000, 72110116, 2411951, 3202950);
    $InitializeEvent(117, 12107000, 72110117, 2411951, 3202952);
    $InitializeEvent(118, 12107000, 72110118, 2411951, 2802950);
    $InitializeEvent(119, 12107000, 72110119, 2411951, 2802953);
    $InitializeEvent(120, 12107000, 72110120, 2411951, 2802951);
    $InitializeEvent(121, 12107000, 72110121, 2411951, 2802952);
    $InitializeEvent(122, 12107000, 72110122, 2411951, 2502950);
    $InitializeEvent(123, 12107000, 72110123, 2411951, 2502952);
    $InitializeEvent(124, 12107000, 72110124, 2411951, 2502951);
    $InitializeEvent(125, 12107000, 72110125, 2411951, 2112950);
    $InitializeEvent(126, 12107000, 72110126, 2411951, 3202951);
    $InitializeEvent(127, 12107000, 72110127, 2411951, 3202953);
    $InitializeEvent(128, 12107000, 72110128, 2411951, 3302950);
    $InitializeEvent(129, 12107000, 72110129, 2411951, 3302951);
    $InitializeEvent(130, 12107000, 72110130, 2411951, 2602950);
    $InitializeEvent(131, 12107000, 72110131, 2411951, 2602953);
    $InitializeEvent(132, 12107000, 72110132, 2411951, 2602952);
    $InitializeEvent(133, 12107000, 72110133, 2411951, 2602951);
    $InitializeEvent(134, 12107000, 72110134, 2411951, 3402950);
    $InitializeEvent(135, 12107000, 72110135, 2411951, 3402951);
    $InitializeEvent(136, 12107000, 72110136, 2411951, 3402953);
    $InitializeEvent(137, 12107000, 72110137, 2411951, 3402952);
    $InitializeEvent(138, 12107000, 72110138, 2411951, 3502950);
    $InitializeEvent(139, 12107000, 72110139, 2411951, 3502951);
    $InitializeEvent(140, 12107000, 72110140, 2411951, 3502952);
    $InitializeEvent(141, 12107000, 72110141, 2411951, 3602950);
    $InitializeEvent(142, 12107000, 72110142, 2411951, 3602951);
    $InitializeEvent(143, 12107000, 72110143, 2411951, 3602952);
    $InitializeEvent(144, 12107000, 72110144, 2411951, 2902950);
    $InitializeEvent(145, 12107000, 72110145, 2411951, 2902951);
    $InitializeEvent(146, 12107000, 72110146, 2411951, 2902952);
    $InitializeEvent(147, 12107000, 72110147, 2411951, 2902953);
    $InitializeEvent(148, 12107000, 72110148, 2411951, 2902954);
    $InitializeEvent(149, 12107000, 72110149, 2411951, 2902955);
    $InitializeEvent(150, 12107000, 72110150, 2411951, 2902956);
    $InitializeEvent(151, 12107000, 72110151, 2411951, 2902957);
    $InitializeEvent(152, 12107000, 72110152, 2411951, 2902958);
    $InitializeEvent(153, 12107000, 72110153, 2411951, 2902959);
    
    $InitializeEvent(200, 12107000, 72110200, 2411952, 2412950);
    $InitializeEvent(201, 12107000, 72110201, 2411952, 2412951);
    $InitializeEvent(202, 12107000, 72110202, 2411952, 2412952);
    $InitializeEvent(203, 12107000, 72110203, 2411952, 2412953);
    $InitializeEvent(204, 12107000, 72110204, 2411952, 2402950);
    $InitializeEvent(205, 12107000, 72110205, 2411952, 2402951);
    $InitializeEvent(206, 12107000, 72110206, 2411952, 2422950);
    $InitializeEvent(207, 12107000, 72110207, 2411952, 2422952);
    $InitializeEvent(208, 12107000, 72110208, 2411952, 2422951);
    $InitializeEvent(209, 12107000, 72110209, 2411952, 2302950);
    $InitializeEvent(210, 12107000, 72110210, 2411952, 2302951);
    $InitializeEvent(211, 12107000, 72110211, 2411952, 2302952);
    $InitializeEvent(212, 12107000, 72110212, 2411952, 2202950);
    $InitializeEvent(213, 12107000, 72110213, 2411952, 2202951);
    $InitializeEvent(214, 12107000, 72110214, 2411952, 2702950);
    $InitializeEvent(215, 12107000, 72110215, 2411952, 2702951);
    $InitializeEvent(216, 12107000, 72110216, 2411952, 3202950);
    $InitializeEvent(217, 12107000, 72110217, 2411952, 3202952);
    $InitializeEvent(218, 12107000, 72110218, 2411952, 2802950);
    $InitializeEvent(219, 12107000, 72110219, 2411952, 2802953);
    $InitializeEvent(220, 12107000, 72110220, 2411952, 2802951);
    $InitializeEvent(221, 12107000, 72110221, 2411952, 2802952);
    $InitializeEvent(222, 12107000, 72110222, 2411952, 2502950);
    $InitializeEvent(223, 12107000, 72110223, 2411952, 2502952);
    $InitializeEvent(224, 12107000, 72110224, 2411952, 2502951);
    $InitializeEvent(225, 12107000, 72110225, 2411952, 2112950);
    $InitializeEvent(226, 12107000, 72110226, 2411952, 3202951);
    $InitializeEvent(227, 12107000, 72110227, 2411952, 3202953);
    $InitializeEvent(228, 12107000, 72110228, 2411952, 3302950);
    $InitializeEvent(229, 12107000, 72110229, 2411952, 3302951);
    $InitializeEvent(230, 12107000, 72110230, 2411952, 2602950);
    $InitializeEvent(231, 12107000, 72110231, 2411952, 2602953);
    $InitializeEvent(232, 12107000, 72110232, 2411952, 2602952);
    $InitializeEvent(233, 12107000, 72110233, 2411952, 2602951);
    $InitializeEvent(234, 12107000, 72110234, 2411952, 3402950);
    $InitializeEvent(235, 12107000, 72110235, 2411952, 3402951);
    $InitializeEvent(236, 12107000, 72110236, 2411952, 3402953);
    $InitializeEvent(237, 12107000, 72110237, 2411952, 3402952);
    $InitializeEvent(238, 12107000, 72110238, 2411952, 3502950);
    $InitializeEvent(239, 12107000, 72110239, 2411952, 3502951);
    $InitializeEvent(240, 12107000, 72110240, 2411952, 3502952);
    $InitializeEvent(241, 12107000, 72110241, 2411952, 3602950);
    $InitializeEvent(242, 12107000, 72110242, 2411952, 3602951);
    $InitializeEvent(243, 12107000, 72110243, 2411952, 3602952);
    $InitializeEvent(244, 12107000, 72110244, 2411952, 2902950);
    $InitializeEvent(245, 12107000, 72110245, 2411952, 2902951);
    $InitializeEvent(246, 12107000, 72110246, 2411952, 2902952);
    $InitializeEvent(247, 12107000, 72110247, 2411952, 2902953);
    $InitializeEvent(248, 12107000, 72110248, 2411952, 2902954);
    $InitializeEvent(249, 12107000, 72110249, 2411952, 2902955);
    $InitializeEvent(250, 12107000, 72110250, 2411952, 2902956);
    $InitializeEvent(251, 12107000, 72110251, 2411952, 2902957);
    $InitializeEvent(252, 12107000, 72110252, 2411952, 2902958);
    $InitializeEvent(253, 12107000, 72110253, 2411952, 2902959);
    
    $InitializeEvent(300, 12107000, 72110300, 2411953, 2412950);
    $InitializeEvent(301, 12107000, 72110301, 2411953, 2412951);
    $InitializeEvent(302, 12107000, 72110302, 2411953, 2412952);
    $InitializeEvent(303, 12107000, 72110303, 2411953, 2412953);
    $InitializeEvent(304, 12107000, 72110304, 2411953, 2402950);
    $InitializeEvent(305, 12107000, 72110305, 2411953, 2402951);
    $InitializeEvent(306, 12107000, 72110306, 2411953, 2422950);
    $InitializeEvent(307, 12107000, 72110307, 2411953, 2422952);
    $InitializeEvent(308, 12107000, 72110308, 2411953, 2422951);
    $InitializeEvent(309, 12107000, 72110309, 2411953, 2302950);
    $InitializeEvent(310, 12107000, 72110310, 2411953, 2302951);
    $InitializeEvent(311, 12107000, 72110311, 2411953, 2302952);
    $InitializeEvent(312, 12107000, 72110312, 2411953, 2202950);
    $InitializeEvent(313, 12107000, 72110313, 2411953, 2202951);
    $InitializeEvent(314, 12107000, 72110314, 2411953, 2702950);
    $InitializeEvent(315, 12107000, 72110315, 2411953, 2702951);
    $InitializeEvent(316, 12107000, 72110316, 2411953, 3202950);
    $InitializeEvent(317, 12107000, 72110317, 2411953, 3202952);
    $InitializeEvent(318, 12107000, 72110318, 2411953, 2802950);
    $InitializeEvent(319, 12107000, 72110319, 2411953, 2802953);
    $InitializeEvent(320, 12107000, 72110320, 2411953, 2802951);
    $InitializeEvent(321, 12107000, 72110321, 2411953, 2802952);
    $InitializeEvent(322, 12107000, 72110322, 2411953, 2502950);
    $InitializeEvent(323, 12107000, 72110323, 2411953, 2502952);
    $InitializeEvent(324, 12107000, 72110324, 2411953, 2502951);
    $InitializeEvent(325, 12107000, 72110325, 2411953, 2112950);
    $InitializeEvent(326, 12107000, 72110326, 2411953, 3202951);
    $InitializeEvent(327, 12107000, 72110327, 2411953, 3202953);
    $InitializeEvent(328, 12107000, 72110328, 2411953, 3302950);
    $InitializeEvent(329, 12107000, 72110329, 2411953, 3302951);
    $InitializeEvent(330, 12107000, 72110330, 2411953, 2602950);
    $InitializeEvent(331, 12107000, 72110331, 2411953, 2602953);
    $InitializeEvent(332, 12107000, 72110332, 2411953, 2602952);
    $InitializeEvent(333, 12107000, 72110333, 2411953, 2602951);
    $InitializeEvent(334, 12107000, 72110334, 2411953, 3402950);
    $InitializeEvent(335, 12107000, 72110335, 2411953, 3402951);
    $InitializeEvent(336, 12107000, 72110336, 2411953, 3402953);
    $InitializeEvent(337, 12107000, 72110337, 2411953, 3402952);
    $InitializeEvent(338, 12107000, 72110338, 2411953, 3502950);
    $InitializeEvent(339, 12107000, 72110339, 2411953, 3502951);
    $InitializeEvent(340, 12107000, 72110340, 2411953, 3502952);
    $InitializeEvent(341, 12107000, 72110341, 2411953, 3602950);
    $InitializeEvent(342, 12107000, 72110342, 2411953, 3602951);
    $InitializeEvent(343, 12107000, 72110343, 2411953, 3602952);
    $InitializeEvent(344, 12107000, 72110344, 2411953, 2902950);
    $InitializeEvent(345, 12107000, 72110345, 2411953, 2902951);
    $InitializeEvent(346, 12107000, 72110346, 2411953, 2902952);
    $InitializeEvent(347, 12107000, 72110347, 2411953, 2902953);
    $InitializeEvent(348, 12107000, 72110348, 2411953, 2902954);
    $InitializeEvent(349, 12107000, 72110349, 2411953, 2902955);
    $InitializeEvent(350, 12107000, 72110350, 2411953, 2902956);
    $InitializeEvent(351, 12107000, 72110351, 2411953, 2902957);
    $InitializeEvent(352, 12107000, 72110352, 2411953, 2902958);
    $InitializeEvent(353, 12107000, 72110353, 2411953, 2902959);
    
    SetEventFlag(72110000, OFF);
    SetEventFlag(72110100, OFF);
    SetEventFlag(72110200, OFF);
    SetEventFlag(72110300, OFF);
    SetEventFlag(72110400, OFF);
    SetEventFlag(72110500, OFF);
    SetEventFlag(72110600, OFF);
    SetEventFlag(72110700, OFF);
    SetEventFlag(72110800, OFF);
    SetEventFlag(72110900, OFF);
    SetEventFlag(72111000, OFF);
    SetEventFlag(72111100, OFF);
    SetEventFlag(72111200, OFF);
    SetEventFlag(72111300, OFF);
    SetEventFlag(72111400, OFF);
    SetEventFlag(72111500, OFF);
    SetEventFlag(72111600, OFF);
    SetEventFlag(72111700, OFF);
    SetEventFlag(72111800, OFF);
    SetEventFlag(72111900, OFF);
    SetEventFlag(72112000, OFF);
    SetEventFlag(72112100, OFF);
    SetEventFlag(72112200, OFF);
    SetEventFlag(72112300, OFF);
    SetEventFlag(72112400, OFF);
    SetEventFlag(72112500, OFF);
    SetEventFlag(72112600, OFF);
    SetEventFlag(72112700, OFF);
    SetEventFlag(72112800, OFF);
    SetEventFlag(72112900, OFF);
    SetEventFlag(72113000, OFF);
    SetEventFlag(72113100, OFF);
    SetEventFlag(72113200, OFF);
    SetEventFlag(72113300, OFF);
    SetEventFlag(72113400, OFF);
    SetEventFlag(72113500, OFF);
    SetEventFlag(72113600, OFF);
    SetEventFlag(72113700, OFF);
    SetEventFlag(72113800, OFF);
    SetEventFlag(72113900, OFF);
    SetEventFlag(72114000, OFF);
    SetEventFlag(72114100, OFF);
    SetEventFlag(72114200, OFF);
    SetEventFlag(72114300, OFF);
    SetEventFlag(72114400, OFF);
    SetEventFlag(72114500, OFF);
    SetEventFlag(72114600, OFF);
    SetEventFlag(72114700, OFF);
    SetEventFlag(72114800, OFF);
    SetEventFlag(72114900, OFF);
    SetEventFlag(72115000, OFF);
    SetEventFlag(72115100, OFF);
    SetEventFlag(72115200, OFF);
    SetEventFlag(72115300, OFF);
    
    SetEventFlag(72110001, OFF);
    SetEventFlag(72110101, OFF);
    SetEventFlag(72110201, OFF);
    SetEventFlag(72110301, OFF);
    SetEventFlag(72110401, OFF);
    SetEventFlag(72110501, OFF);
    SetEventFlag(72110601, OFF);
    SetEventFlag(72110701, OFF);
    SetEventFlag(72110801, OFF);
    SetEventFlag(72110901, OFF);
    SetEventFlag(72111001, OFF);
    SetEventFlag(72111101, OFF);
    SetEventFlag(72111201, OFF);
    SetEventFlag(72111301, OFF);
    SetEventFlag(72111401, OFF);
    SetEventFlag(72111501, OFF);
    SetEventFlag(72111601, OFF);
    SetEventFlag(72111701, OFF);
    SetEventFlag(72111801, OFF);
    SetEventFlag(72111901, OFF);
    SetEventFlag(72112001, OFF);
    SetEventFlag(72112101, OFF);
    SetEventFlag(72112201, OFF);
    SetEventFlag(72112301, OFF);
    SetEventFlag(72112401, OFF);
    SetEventFlag(72112501, OFF);
    SetEventFlag(72112601, OFF);
    SetEventFlag(72112701, OFF);
    SetEventFlag(72112801, OFF);
    SetEventFlag(72112901, OFF);
    SetEventFlag(72113001, OFF);
    SetEventFlag(72113101, OFF);
    SetEventFlag(72113201, OFF);
    SetEventFlag(72113301, OFF);
    SetEventFlag(72113401, OFF);
    SetEventFlag(72113501, OFF);
    SetEventFlag(72113601, OFF);
    SetEventFlag(72113701, OFF);
    SetEventFlag(72113801, OFF);
    SetEventFlag(72113901, OFF);
    SetEventFlag(72114001, OFF);
    SetEventFlag(72114101, OFF);
    SetEventFlag(72114201, OFF);
    SetEventFlag(72114301, OFF);
    SetEventFlag(72114401, OFF);
    SetEventFlag(72114501, OFF);
    SetEventFlag(72114601, OFF);
    SetEventFlag(72114701, OFF);
    SetEventFlag(72114801, OFF);
    SetEventFlag(72114901, OFF);
    SetEventFlag(72115001, OFF);
    SetEventFlag(72115101, OFF);
    SetEventFlag(72115201, OFF);
    SetEventFlag(72115301, OFF);
    
    SetEventFlag(72110002, OFF);
    SetEventFlag(72110102, OFF);
    SetEventFlag(72110202, OFF);
    SetEventFlag(72110302, OFF);
    SetEventFlag(72110402, OFF);
    SetEventFlag(72110502, OFF);
    SetEventFlag(72110602, OFF);
    SetEventFlag(72110702, OFF);
    SetEventFlag(72110802, OFF);
    SetEventFlag(72110902, OFF);
    SetEventFlag(72111002, OFF);
    SetEventFlag(72111102, OFF);
    SetEventFlag(72111202, OFF);
    SetEventFlag(72111302, OFF);
    SetEventFlag(72111402, OFF);
    SetEventFlag(72111502, OFF);
    SetEventFlag(72111602, OFF);
    SetEventFlag(72111702, OFF);
    SetEventFlag(72111802, OFF);
    SetEventFlag(72111902, OFF);
    SetEventFlag(72112002, OFF);
    SetEventFlag(72112102, OFF);
    SetEventFlag(72112202, OFF);
    SetEventFlag(72112302, OFF);
    SetEventFlag(72112402, OFF);
    SetEventFlag(72112502, OFF);
    SetEventFlag(72112602, OFF);
    SetEventFlag(72112702, OFF);
    SetEventFlag(72112802, OFF);
    SetEventFlag(72112902, OFF);
    SetEventFlag(72113002, OFF);
    SetEventFlag(72113102, OFF);
    SetEventFlag(72113202, OFF);
    SetEventFlag(72113302, OFF);
    SetEventFlag(72113402, OFF);
    SetEventFlag(72113502, OFF);
    SetEventFlag(72113602, OFF);
    SetEventFlag(72113702, OFF);
    SetEventFlag(72113802, OFF);
    SetEventFlag(72113902, OFF);
    SetEventFlag(72114002, OFF);
    SetEventFlag(72114102, OFF);
    SetEventFlag(72114202, OFF);
    SetEventFlag(72114302, OFF);
    SetEventFlag(72114402, OFF);
    SetEventFlag(72114502, OFF);
    SetEventFlag(72114602, OFF);
    SetEventFlag(72114702, OFF);
    SetEventFlag(72114802, OFF);
    SetEventFlag(72114902, OFF);
    SetEventFlag(72115002, OFF);
    SetEventFlag(72115102, OFF);
    SetEventFlag(72115202, OFF);
    SetEventFlag(72115302, OFF);
    
    SetEventFlag(72110003, OFF);
    SetEventFlag(72110103, OFF);
    SetEventFlag(72110203, OFF);
    SetEventFlag(72110303, OFF);
    SetEventFlag(72110403, OFF);
    SetEventFlag(72110503, OFF);
    SetEventFlag(72110603, OFF);
    SetEventFlag(72110703, OFF);
    SetEventFlag(72110803, OFF);
    SetEventFlag(72110903, OFF);
    SetEventFlag(72111003, OFF);
    SetEventFlag(72111103, OFF);
    SetEventFlag(72111203, OFF);
    SetEventFlag(72111303, OFF);
    SetEventFlag(72111403, OFF);
    SetEventFlag(72111503, OFF);
    SetEventFlag(72111603, OFF);
    SetEventFlag(72111703, OFF);
    SetEventFlag(72111803, OFF);
    SetEventFlag(72111903, OFF);
    SetEventFlag(72112003, OFF);
    SetEventFlag(72112103, OFF);
    SetEventFlag(72112203, OFF);
    SetEventFlag(72112303, OFF);
    SetEventFlag(72112403, OFF);
    SetEventFlag(72112503, OFF);
    SetEventFlag(72112603, OFF);
    SetEventFlag(72112703, OFF);
    SetEventFlag(72112803, OFF);
    SetEventFlag(72112903, OFF);
    SetEventFlag(72113003, OFF);
    SetEventFlag(72113103, OFF);
    SetEventFlag(72113203, OFF);
    SetEventFlag(72113303, OFF);
    SetEventFlag(72113403, OFF);
    SetEventFlag(72113503, OFF);
    SetEventFlag(72113603, OFF);
    SetEventFlag(72113703, OFF);
    SetEventFlag(72113803, OFF);
    SetEventFlag(72113903, OFF);
    SetEventFlag(72114003, OFF);
    SetEventFlag(72114103, OFF);
    SetEventFlag(72114203, OFF);
    SetEventFlag(72114303, OFF);
    SetEventFlag(72114403, OFF);
    SetEventFlag(72114503, OFF);
    SetEventFlag(72114603, OFF);
    SetEventFlag(72114703, OFF);
    SetEventFlag(72114803, OFF);
    SetEventFlag(72114903, OFF);
    SetEventFlag(72115003, OFF);
    SetEventFlag(72115103, OFF);
    SetEventFlag(72115203, OFF);
    SetEventFlag(72115303, OFF);
    
    $InitializeEvent(0, 12107100, 72100421, 2411950, 9021);
    $InitializeEvent(1, 12107100, 72100422, 2411950, 9022);
    $InitializeEvent(2, 12107100, 72100423, 2411950, 9023);
    $InitializeEvent(3, 12107100, 72100424, 2411950, 9024);
    $InitializeEvent(4, 12107100, 72100425, 2411950, 9025);
    $InitializeEvent(5, 12107100, 72100426, 2411950, 9026);
    
    $InitializeEvent(6, 12107100, 72100427, 2411951, 9021);
    $InitializeEvent(7, 12107100, 72100428, 2411951, 9022);
    $InitializeEvent(8, 12107100, 72100429, 2411951, 9023);
    $InitializeEvent(9, 12107100, 72100430, 2411951, 9024);
    $InitializeEvent(10, 12107100, 72100431, 2411951, 9025);
    $InitializeEvent(11, 12107100, 72100432, 2411951, 9026);
    
    $InitializeEvent(12, 12107100, 72100433, 2411952, 9021);
    $InitializeEvent(13, 12107100, 72100434, 2411952, 9022);
    $InitializeEvent(14, 12107100, 72100435, 2411952, 9023);
    $InitializeEvent(15, 12107100, 72100436, 2411952, 9024);
    $InitializeEvent(16, 12107100, 72100437, 2411952, 9025);
    $InitializeEvent(17, 12107100, 72100438, 2411952, 9026);
    
    $InitializeEvent(18, 12107100, 72100439, 2411953, 9021);
    $InitializeEvent(19, 12107100, 72100440, 2411953, 9022);
    $InitializeEvent(20, 12107100, 72100441, 2411953, 9023);
    $InitializeEvent(21, 12107100, 72100442, 2411953, 9024);
    $InitializeEvent(22, 12107100, 72100443, 2411953, 9025);
    $InitializeEvent(23, 12107100, 72100444, 2411953, 9026);
    
    $InitializeEvent(0, 12107200, 72100300, 2902950, 9001);
    $InitializeEvent(1, 12107200, 72100301, 2902951, 9002);
    $InitializeEvent(2, 12107200, 72100302, 2902952, 9003);
    $InitializeEvent(3, 12107200, 72100303, 2902953, 9004);
    $InitializeEvent(4, 12107200, 72100304, 2902954, 9005);
    $InitializeEvent(5, 12107200, 72100305, 2902955, 9006);
    $InitializeEvent(6, 12107200, 72100306, 2902956, 9007);
    $InitializeEvent(7, 12107200, 72100307, 2902957, 9008);
    $InitializeEvent(8, 12107200, 72100308, 2902958, 9009);
    $InitializeEvent(9, 12107200, 72100309, 2902959, 9010);
    
    $InitializeEvent(10, 12107200, 72100310, 2902950, 9001);
    $InitializeEvent(11, 12107200, 72100311, 2902951, 9002);
    $InitializeEvent(12, 12107200, 72100312, 2902952, 9003);
    $InitializeEvent(13, 12107200, 72100313, 2902953, 9004);
    $InitializeEvent(14, 12107200, 72100314, 2902954, 9005);
    $InitializeEvent(15, 12107200, 72100315, 2902955, 9006);
    $InitializeEvent(16, 12107200, 72100316, 2902956, 9007);
    $InitializeEvent(17, 12107200, 72100317, 2902957, 9008);
    $InitializeEvent(18, 12107200, 72100318, 2902958, 9009);
    $InitializeEvent(19, 12107200, 72100319, 2902959, 9010);
    
    $InitializeEvent(20, 12107200, 72100320, 2902950, 9001);
    $InitializeEvent(21, 12107200, 72100321, 2902951, 9002);
    $InitializeEvent(22, 12107200, 72100322, 2902952, 9003);
    $InitializeEvent(23, 12107200, 72100323, 2902953, 9004);
    $InitializeEvent(24, 12107200, 72100324, 2902954, 9005);
    $InitializeEvent(25, 12107200, 72100325, 2902955, 9006);
    $InitializeEvent(26, 12107200, 72100326, 2902956, 9007);
    $InitializeEvent(27, 12107200, 72100327, 2902957, 9008);
    $InitializeEvent(28, 12107200, 72100328, 2902958, 9009);
    $InitializeEvent(29, 12107200, 72100329, 2902959, 9010);
    
    $InitializeEvent(30, 12107200, 72100330, 2902950, 9001);
    $InitializeEvent(31, 12107200, 72100331, 2902951, 9002);
    $InitializeEvent(32, 12107200, 72100332, 2902952, 9003);
    $InitializeEvent(33, 12107200, 72100333, 2902953, 9004);
    $InitializeEvent(34, 12107200, 72100334, 2902954, 9005);
    $InitializeEvent(35, 12107200, 72100335, 2902955, 9006);
    $InitializeEvent(36, 12107200, 72100336, 2902956, 9007);
    $InitializeEvent(37, 12107200, 72100337, 2902957, 9008);
    $InitializeEvent(38, 12107200, 72100338, 2902958, 9009);
    $InitializeEvent(39, 12107200, 72100339, 2902959, 9010);
    
    $InitializeEvent(0, 12410720);
    
    $InitializeEvent(16, 7000, 2410951, 2411951, 999, 12417820, -1);
    
    $InitializeEvent(17, 7000, 2410952, 2411952, cleric_beast_defeat, 12417840, cleric_beast_defeat+13);
    $InitializeEvent(cleric_beast_offset, 8800, cleric_beast_defeat+13, cleric_beast_lamp_id-1000, cleric_beast_lamp_id, cleric_beast_lamp_id+3000);
    
    $InitializeEvent(18, 7000, 2410953, 2411953, gascoigne_defeat, 12417860, gascoigne_defeat+13);
    $InitializeEvent(gascoigne_offset, 8800, gascoigne_defeat+13, gascoigne_lamp_id-1000, gascoigne_lamp_id, gascoigne_lamp_id+3000);
    
    $InitializeEvent(0, 12411010);
    $InitializeEvent(15, 7100, 72410200, 2411950);
    $InitializeEvent(16, 7100, 72410201, 2411951);
    $InitializeEvent(17, 7100, 72410202, 2411952);
    $InitializeEvent(18, 7100, 72410203, 2411953);
    $InitializeEvent(15, 7200, 72410100, 2411950, 2102950);
    $InitializeEvent(16, 7200, 72410101, 2411951, 2102950);
    $InitializeEvent(17, 7200, 72410102, 2411952, 2102950);
    $InitializeEvent(18, 7200, 72410103, 2411953, 2102950);
    $InitializeEvent(15, 7300, 72102410, 2411950);
    $InitializeEvent(16, 7300, 72102411, 2411951);
    $InitializeEvent(17, 7300, 72102412, 2411952);
    $InitializeEvent(18, 7300, 72102413, 2411953);
    $InitializeEvent(3, 9200, 2413900);
    $InitializeEvent(3, 9220, 2410750, 12414220, 12414221, 2410, 24, 1);
    $InitializeEvent(3, 9240, 2410750, 12414220, 12414221, 12414222, 24, 1);
    $InitializeEvent(3, 9260, 2410750, 12414220, 12414221, 12414222, 24, 1);
    $InitializeEvent(3, 9280, 2410750, 12414220, 12414221, 2410, 12414223, 24, 1);
    $InitializeEvent(0, 12411899);
    $InitializeEvent(0, 12410310);
    CreateObjectfollowingSFX(2411000, 200, 900130);
    CreateObjectfollowingSFX(2411001, 200, 900130);
    CreateObjectfollowingSFX(2411004, 200, 900130);
    DeleteMapSFX(2413230, false);
    DeleteMapSFX(2413233, false);
    
    // summon stuff
    
    // gather summons
    $InitializeEvent(1, 8617, 2410158, 12414420, 7012, 7010, 233);
    $InitializeEvent(1, 8630, 8631, 8641, 2410158, 12414420, 2413230, 2410, -1, 200246, 7010, 200256, 200266); // gascoigne
    
    $InitializeEvent(2, 8617, 2410740, 12414421, 101161, 101162, 163); // alfred
    $InitializeEvent(2, 8630, 8632, 8642, 2410740, 12414421, 2413233, 2410, -1, 200245, 101207, 200255, 200265);
    
    // summon signs
    $InitializeEvent(0, 12414400, 12414440, 2413230, 12414420, 12414430, 12411700, 6001);
    $InitializeEvent(0, 12414401, 12414441, 2413233, 12414421, 12414431, 12411700, 6001);
    
    $InitializeEvent(0, 12414410, 7, 2410158, 2412920, 12414420, 12414430, 12414440, 12411700, 10575);
    $InitializeEvent(1, 12414410, SingleplayerSummonSignType.NormalCoop, 2410740, 2412921, 12414421, 12414431, 12414441, 12411700, 10576);
    
    $InitializeEvent(0, 12414450, 2410158, 2412710, 12414420, 12414430, 12414700);
    $InitializeEvent(1, 12414450, 2410740, 2412711, 12414421, 12414431, 12414700);
    $InitializeEvent(2, 12414450, 2410158, 2412818, 12414420, 12414430, 12414800);
    $InitializeEvent(3, 12414450, 2410740, 2412819, 12414421, 12414431, 12414800);
    
    $InitializeEvent(0, 12414460, 2410158, 2412710, 2412800, 2412801, 7014, 12414450, 2412801);
    $InitializeEvent(1, 12414460, 2410740, 2412711, 2412800, 2412801, 101130, 12414451, 2412801);
    $InitializeEvent(2, 12414460, 2410158, 2412818, 2412332, 2412811, 7014, 12414452, 2412811);
    $InitializeEvent(3, 12414460, 2410740, 2412819, 2412332, 2412811, 101130, 12414453, 2412811);
    
    $InitializeEvent(0, 12414470);
    $InitializeEvent(0, 12414480);
    $InitializeEvent(0, 12414490);
    if (EventFlag(12410999)) {
        SetEventFlag(9400, ON);
        SetEventFlag(9401, ON);
        SetSpEffect(2410015, 5591, false);
    }
L0:
    if (EventFlag(12410999)) {
        $InitializeEvent(0, 12410286, 12410400, 12410401, 2411204, 2411316);
        $InitializeEvent(0, 12410820);
    }
L1:
    StartTimeMeasurement(2410000, 0, Disabled);
    StartTimeMeasurement(2410001, 18, Enabled);
    $InitializeEvent(0, 12410990);
    $InitializeEvent(0, 12410900);
    $InitializeEvent(0, 12415060, 2410112, 2412000, 2412001, 4);
    $InitializeEvent(1, 12415060, 2410113, 2412000, 2412001, 4);
    $InitializeEvent(2, 12415060, 2410114, 2412000, 2412001, 4);
    $InitializeEvent(3, 12415060, 2410115, 2412000, 2412001, 4);
    $InitializeEvent(4, 12415060, 2410116, 2412000, 2412001, 4);
    $InitializeEvent(10, 12415060, 2410121, 2412120, 0, 4);
    $InitializeEvent(11, 12415060, 2410125, 2412120, 0, 4);
    $InitializeEvent(12, 12415060, 2410126, 2412120, 0, 4);
    $InitializeEvent(13, 12415060, 2410127, 2412120, 0, 4);
    $InitializeEvent(15, 12415060, 2410161, 2412120, 0, 4);
    $InitializeEvent(3, 12415080, 2410178, 7010, 7011, 2412154, 263496, 263431, 2);
    $InitializeEvent(0, 12415460, 2410019, 7020, 7021, 2412251, 1, 2412010, 2411219);
    $InitializeEvent(0, 12415461, 2411219, 0, 1);
    $InitializeEvent(2, 12410160, 2412032, 2412037, SoundType.aEnvironmentalSound, 20011002);
    $InitializeEvent(4, 12410160, 2412122, 2412035, SoundType.aEnvironmentalSound, 20011001);
    $InitializeEvent(5, 12410160, 2412033, 2412038, SoundType.cCharacterMotion, 500007600);
    $InitializeEvent(0, 12415010, 2412039, SoundType.aEnvironmentalSound, 20011001, 300);
    $InitializeEvent(0, 12415700);
    $InitializeEvent(12, 12415435, 2410172, 2412122);
    $InitializeEvent(13, 12415435, 2410173, 2412122);
    $InitializeEvent(17, 12415435, 2410186, 2412122);
    $InitializeEvent(18, 12415435, 2410187, 2412122);
    $InitializeEvent(19, 12415435, 2410188, 2412122);
    $InitializeEvent(20, 12415435, 2410189, 2412122);
    $InitializeEvent(22, 12415435, 2410191, 2412122);
    $InitializeEvent(23, 12415435, 2410192, 2412122);
    $InitializeEvent(0, 12415475, 2410194, 7012, 7013, 2412050);
    $InitializeEvent(0, 12415476, 2410194, 7013);
    $InitializeEvent(0, 12415478, 2410194);
    $InitializeEvent(0, 12415477, 2410113);
    $InitializeEvent(0, 12415479, 2410194);
    $InitializeEvent(0, 12415420, 2410272, 2412262, 12410379);
    $InitializeEvent(1, 12415420, 2410278, 2412260, 0);
    $InitializeEvent(2, 12415420, 2410275, 2412261, 0);
    $InitializeEvent(3, 12415420, 2410277, 2412263, 0);
    $InitializeEvent(4, 12415420, 2410271, 2412264, 12410378);
    $InitializeEvent(5, 12415420, 2410279, 2412265, 0);
    $InitializeEvent(0, 12415225, 2410015, 3004, 50);
    $InitializeEvent(1, 12415225, 2410102, 3027, 50);
    $InitializeEvent(0, 12415228, 2410016, 3028, 6);
    $InitializeEvent(0, 12415232, 2410178, 2412086);
    $InitializeEvent(0, 12415233, 2412122, 2410196, 2412136);
    $InitializeEvent(1, 12415250, 2410182, 7001, 5, 10, 2412075);
    $InitializeEvent(1, 12415255, 2410183);
    $InitializeEvent(2, 12415255, 2410182);
    $InitializeEvent(4, 12415255, 2410181);
    $InitializeEvent(0, 12415295, 2410183, 2412120, 2, 2412074);
    $InitializeEvent(1, 12415295, 2410182, 2412120, 2, 2412075);
    $InitializeEvent(0, 12415300, 12415295, 2410183, 2412074, 2412121, 2);
    $InitializeEvent(1, 12415300, 12415296, 2410182, 2412075, 2412121, 2);
    $InitializeEvent(0, 12415305, 12415300, 2410183, 2412121, 2412122, 2, 2412084);
    $InitializeEvent(1, 12415305, 12415301, 2410182, 2412121, 2412122, 2, 2412085);
    $InitializeEvent(0, 12415310, 12415305, 2410183, 2412084, 2412122, 2, 2413500);
    $InitializeEvent(1, 12415310, 12415306, 2410182, 2412085, 2412122, 2, 2413500);
    $InitializeEvent(0, 12415315, 2410210, 2412120, 2, 2412130);
    $InitializeEvent(1, 12415315, 2410211, 2412120, 2, 2412132);
    $InitializeEvent(0, 12415320, 12415315, 2410210, 2412130, 2412122, 2413505);
    $InitializeEvent(1, 12415320, 12415316, 2410211, 2412132, 2412122, 2413505);
    $InitializeEvent(0, 12415325, 12415320, 2410210, 2412122, 2413502);
    $InitializeEvent(1, 12415325, 12415321, 2410211, 2412122, 2413501);
    $InitializeEvent(0, 12415330, 2410213, 2412124, 2412123, 2, 2412125);
    $InitializeEvent(0, 12415335, 12415330, 2410213, 2412134, 2412122, 2413503);
    $InitializeEvent(0, 12415340, 2410018, 2412120, 2, 2412096);
    $InitializeEvent(2, 12415340, 2410181, 2412121, 2, 2412083);
    $InitializeEvent(0, 12415345, 12415340, 2410018, 2412096, 0, 2, 0, -1);
    $InitializeEvent(2, 12415345, 12415342, 2410181, 2412083, 2412122, 2, 1, 2413500);
    $InitializeEvent(0, 12410450, 2410400, 52410990);
    $InitializeEvent(1, 12410450, 2410401, 52410980);
    $InitializeEvent(2, 12410450, 2410402, 52410970);
    $InitializeEvent(3, 12410450, 2410403, 52410960);
    $InitializeEvent(4, 12410450, 2410404, 52410950);
    RegisterLadder(12410402, 12410403, 2411210);
    RegisterLadder(12410404, 12410405, 2411211);
    RegisterLadder(12410406, 12410407, 2411212);
    RegisterLadder(12410408, 12410409, 2411213);
    RegisterLadder(12410410, 12410411, 2411214);
    RegisterLadder(12410412, 12410413, 2411215);
    RegisterLadder(12410414, 12410415, 2411216);
    RegisterLadder(12410416, 12410417, 2411217);
    RegisterLadder(12410418, 12410419, 2411218);
    RegisterLadder(12410420, 12410421, 2411225);
    RegisterLadder(12410422, 12410423, 2411226);
    RegisterLadder(12410424, 12410425, 2411227);
    $InitializeEvent(0, 12410290);
    CreateDamagingObject(12410430, 2411205, 100, 6110, DamageTargetType.Character, 1.5, 0, 1);
    CreateDamagingObject(12410431, 2411206, 100, 6110, DamageTargetType.Character, 0.6, 0, 1);
    CreateDamagingObject(12410432, 2411207, 100, 6110, DamageTargetType.Character, 0.6, 0, 1);
    CreateDamagingObject(12410433, 2411208, 100, 6110, DamageTargetType.Character, 0.6, 0, 1);
    $InitializeEvent(0, 12410200, 2411300, 2411310, 12410200);
    $InitializeEvent(2, 12410200, 2411302, 2411312, 12410202);
    $InitializeEvent(3, 12410200, 2411303, 2411313, 12410203);
    $InitializeEvent(5, 12410200, 2411305, 2411315, 12410205);
    $InitializeEvent(0, 12415020, 7000, 2411305, 12410205, 10010171);
    $InitializeEvent(2, 12415020, 2410021, 2411300, 12410200, 10010160);
    $InitializeEvent(3, 12415020, 2410021, 2411302, 12410202, 10010160);
    $InitializeEvent(4, 12415020, 2410021, 2411303, 12410203, 10010160);
    $InitializeEvent(1, 12410100, 2410011, 2410701, 12410112, 10010161);
    $InitializeEvent(2, 12410100, 2410050, 2411301, 12410117, 10010161);
    $InitializeEvent(2, 12410110, 2410701, 12411301, 2, 2410010);
    $InitializeEvent(3, 12410110, 2411308, 12411302, 2, 2410010);
    $InitializeEvent(4, 12410110, 2411306, 12411304, 1, 2410030);
    if (!EventFlag(12411813)) {
        $InitializeEvent(5, 12410110, 2411304, 12411307, 1, 2410080); // gascoigne gate
    }
    $InitializeEvent(6, 12410110, 2411309, 12411308, 1, 2410010);
    $InitializeEvent(7, 12410110, 2411301, 12411309, 1, 2410090);
    $InitializeEvent(0, 12410120);
    $InitializeEvent(0, 12410130, 12411306);
    $InitializeEvent(0, 12410151);
    $InitializeEvent(0, 12410140);
    $InitializeEvent(30, 7600, 2411999, 2413999);
    $InitializeEvent(31, 7600, 2411998, 2413998);
    $InitializeEvent(32, 7600, 2411997, 2413997);
    $InitializeEvent(0, 12415390, 2410202);
    $InitializeEvent(0, 12414732);
    $InitializeEvent(0, 12414733);
    $InitializeEvent(0, 12411700);
    $InitializeEvent(0, 12411701);
    $InitializeEvent(0, 12411702);
    $InitializeEvent(0, 12414730);
    $InitializeEvent(0, 12414731);
    $InitializeEvent(0, 12414702);
    $InitializeEvent(0, 12414703);
    $InitializeEvent(0, 12414704);
    $InitializeEvent(0, 12414705);
    $InitializeEvent(0, 12411703);
    $InitializeEvent(0, 12414707);
    $InitializeEvent(0, 12414708);
    $InitializeEvent(0, 12414710, 2410, 2410, NPCPartType.Part1, 20, 480, 490, 8020);
    $InitializeEvent(1, 12414710, 2411, 2411, NPCPartType.Part2, 120, 481, 491, 8000);
    $InitializeEvent(2, 12414710, 2412, 2412, NPCPartType.Part3, 300, 482, 492, 8010);
    $InitializeEvent(3, 12414710, 2413, 2413, NPCPartType.Part4, 200, 483, 493, 8030);
    $InitializeEvent(4, 12414710, 2414, 2414, NPCPartType.Part5, 200, 484, 494, 8040);
    $InitializeEvent(0, 12414720, 480, 490, 5, 10);
    $InitializeEvent(1, 12414720, 481, 491, 6, 11);
    $InitializeEvent(2, 12414720, 482, 492, 7, 12);
    $InitializeEvent(3, 12414720, 483, 493, 8, 13);
    $InitializeEvent(4, 12414720, 484, 494, 9, 14);
    if (!EventFlag(12410999)) {
        $InitializeEvent(0, 12410000);
        $InitializeEvent(0, 12410285, 12410400, 12410401, 2411204, 2411316);
        $InitializeEvent(0, 12410995);
    }
L2:
    $InitializeEvent(0, 12410170);
    $InitializeEvent(0, 12415150, 2410100, 7010, 7011, 6, 263499, 263450);
    $InitializeEvent(1, 12415150, 2410101, 7014, 7015, 7, 263499, 263440);
    $InitializeEvent(2, 12415150, 2410103, 7010, 7011, 4, 263499, 263450);
    $InitializeEvent(1, 12410160, 2412031, 2412036, SoundType.aEnvironmentalSound, 240002600);
    $InitializeEvent(0, 12415160, 2410130, 9002, 3001);
    $InitializeEvent(1, 12415160, 2410131, 9000, 3001);
    $InitializeEvent(2, 12415160, 2410132, 9000, 0);
    $InitializeEvent(3, 12415160, 2410133, 9001, 0);
    $InitializeEvent(4, 12415160, 2410134, 9002, 3001);
    $InitializeEvent(5, 12415160, 2410136, 9001, 0);
    $InitializeEvent(6, 12415160, 2410137, 9001, 3001);
    $InitializeEvent(7, 12415160, 2410138, 9001, 0);
    $InitializeEvent(8, 12415160, 2410139, 9001, 0);
    $InitializeEvent(0, 12415130, 2410140, 9000, 9061, 52410270, 112499, 112400, 1);
    $InitializeEvent(1, 12415130, 2410141, 9000, 9061, 52410270, 112499, 112400, 0);
    $InitializeEvent(3, 12415130, 2410143, 9000, 9061, 52410270, 112499, 112400, 0);
    $InitializeEvent(4, 12415130, 2410144, 9000, 9061, 52410270, 112499, 112400, 1);
    $InitializeEvent(6, 12415130, 2410146, 9000, 9061, 52410270, 112499, 112400, 0);
    $InitializeEvent(7, 12415130, 2410147, 9000, 9061, 52410270, 112499, 112400, 0);
    $InitializeEvent(8, 12415130, 2410148, 9000, 9061, 52410270, 112499, 112400, 1);
    $InitializeEvent(9, 12415130, 2410149, 9000, 9061, 52410270, 112499, 112400, 1);
    $InitializeEvent(10, 12415130, 2410150, 9000, 9061, 52410270, 112499, 112400, 0);
    $InitializeEvent(14, 12415130, 2410154, 9000, 9061, 52410270, 112499, 112400, 1);
    $InitializeEvent(0, 12410155, 2410157, 2412020, 2412021, 2412022);
    $InitializeEvent(0, 12410156, 2410040, 2410500, 2410501);
    $InitializeEvent(0, 12410340, 2410220, 2412230, 10, 2412220);
    $InitializeEvent(1, 12410340, 2410221, 2412231, 10, 2412220);
    $InitializeEvent(2, 12410340, 2410222, 2412232, 10, 2412220);
    $InitializeEvent(3, 12410340, 2410223, 2412233, 10, 2412220);
    $InitializeEvent(4, 12410340, 2410224, 2412234, 10, 2412220);
    $InitializeEvent(5, 12410340, 2410225, 2412235, 10, 2412220);
    $InitializeEvent(6, 12410340, 2410226, 2412236, 10, 2412220);
    $InitializeEvent(7, 12410340, 2410227, 2412237, 10, 2412220);
    $InitializeEvent(8, 12410340, 2410228, 2412238, 10, 2412220);
    $InitializeEvent(0, 12410378, 2410271, 3021, 2411270, 2412046);
    $InitializeEvent(1, 12410378, 2410272, 3021, 2411271, 2412045);
    $InitializeEvent(0, 12410380, 2410275, 3020);
    $InitializeEvent(1, 12410380, 2410277, 3020);
    $InitializeEvent(2, 12410380, 2410278, 3020);
    $InitializeEvent(3, 12410380, 2410279, 3020);
    $InitializeEvent(0, 12410370);
    $InitializeEvent(0, 12415372, 2410023);
    $InitializeEvent(1, 12415372, 2410024);
    $InitializeEvent(2, 12415372, 2410025);
    $InitializeEvent(3, 12415372, 2410026);
    $InitializeEvent(4, 12415372, 2410027);
    $InitializeEvent(0, 12410321, 12415350, 12410350, 12410351, 12410330, 2411320, 2411317, 2411318);
    $InitializeEvent(0, 12410325, 12415350, 12410350, 12410351, 12410330);
    $InitializeEvent(0, 12410322, 12415350, 12410350, 12410351, 12410330, 2412322, 12410320);
    $InitializeEvent(0, 12410323, 12415350, 12410350, 12410351, 12410330, 2412321, 12410321);
    $InitializeEvent(0, 12410324, 12415350, 12410350, 12410330, 2411317, 2411318);
    $InitializeEvent(0, 12410330, 12410330, 2412323, 2411317, 2411318);
    $InitializeEvent(0, 12410490, 2411510, 2411500, 12410490);
    $InitializeEvent(1, 12410490, 2411511, 2411501, 12410491);
    $InitializeEvent(0, 12410010);
    $InitializeEvent(0, 12410011);
    $InitializeEvent(0, 12410012);
    $InitializeEvent(1, 12410600, 12411202, 2411102, 9942);
    if (CharacterType(10000, TargetType.Alive)) {
        if (EventFlag(6630)) {
            SetEventFlag(12411999, ON);
        }
    }
    if (!EventFlag(12411999)) {
        DeactivateObject(2411100, Enabled);
        DeactivateObject(2411103, Disabled);
        SetObjactState(2411100, 9942, Enabled);
        SetObjactState(2411103, 9942, Disabled);
        $InitializeEvent(2, 12410600, 12411200, 2411100, 9942);
    } else {
        DeactivateObject(2411100, Disabled);
        DeactivateObject(2411103, Enabled);
        SetObjactState(2411100, 9942, Disabled);
        SetObjactState(2411103, 9942, Enabled);
        $InitializeEvent(3, 12410600, 12411203, 2411103, 9942);
    }
    if (CharacterType(10000, TargetType.Alive)) {
        if (EventFlag(6640)) {
            SetEventFlag(12411998, ON);
        }
    }
    if (!EventFlag(12411998)) {
        DeactivateObject(2411450, Enabled);
        DeactivateObject(2411451, Disabled);
        SetObjectTreasureState(2411450, Enabled);
        SetObjectTreasureState(2411451, Disabled);
    } else {
        DeactivateObject(2411450, Disabled);
        DeactivateObject(2411451, Enabled);
        SetObjectTreasureState(2411450, Disabled);
        SetObjectTreasureState(2411451, Enabled);
    }
    if (CharacterType(10000, TargetType.Alive)) {
        if (EventFlag(6312)) {
            SetEventFlag(12411997, ON);
        }
    }
    if (!EventFlag(12411997)) {
        DeactivateObject(2411102, Enabled);
        DeactivateObject(2411104, Disabled);
        SetObjactState(2411102, 9942, Enabled);
        SetObjactState(2411104, 9942, Disabled);
        $InitializeEvent(4, 12410600, 12411202, 2411102, 9942);
    } else {
        DeactivateObject(2411102, Disabled);
        DeactivateObject(2411104, Enabled);
        SetObjactState(2411102, 9942, Disabled);
        SetObjactState(2411104, 9942, Enabled);
        $InitializeEvent(5, 12410600, 12411204, 2411104, 9942);
    }
    $InitializeEvent(0, 12414812);
    $InitializeEvent(0, 12414813);
    $InitializeEvent(0, 12411800);
    $InitializeEvent(0, 12411801);
    $InitializeEvent(0, 12411802);
    $InitializeEvent(0, 12414810);
    $InitializeEvent(0, 12414811);
    $InitializeEvent(0, 12414802);
    $InitializeEvent(0, 12414803);
    $InitializeEvent(0, 12414804);
    $InitializeEvent(0, 12414805);
    $InitializeEvent(0, 12414807);
    $InitializeEvent(0, 12414808);
    $InitializeEvent(0, 12414809);
    $InitializeEvent(0, 12411803);
    $InitializeEvent(0, 12415238, 2412820, 2410810, 2412821, 2412824, 2412822);
    $InitializeEvent(1, 12415238, 2412820, 2410811, 2412821, 2412824, 2412822);
    $InitializeEvent(0, 12410850, 70000050, 6030, 2410870);
    $InitializeEvent(1, 12410850, 70000051, 6030, 2410871);
    $InitializeEvent(2, 12410850, 70000070, 6030, 2410872);
    $InitializeEvent(3, 12410850, 70000071, 6030, 2410873);
    $InitializeEvent(0, 12410859);
    $InitializeEvent(0, 12410860, 2410770, 103089);
    $InitializeEvent(0, 12410870, 2410770, 103082, 153);
    $InitializeEvent(0, 12410880, 2410770, 103086);
    $InitializeEvent(0, 12410702);
    $InitializeEvent(0, 12410704);
    $InitializeEvent(0, 12410705);
    $InitializeEvent(0, 12410706);
    $InitializeEvent(0, 12410710);
    $InitializeEvent(0, 12410713);
    $InitializeEvent(0, 12410715);
    $InitializeEvent(0, 12410716);
    $InitializeEvent(0, 12410703);
    SetEventFlag(72410330, OFF);
    SetEventFlag(72410335, OFF);
    SetEventFlag(72410323, OFF);
    $InitializeEvent(0, 12410650);
    $InitializeEvent(0, 12410651);
    $InitializeEvent(0, 12410652);
    $InitializeEvent(0, 12410653);
    $InitializeEvent(0, 12410654);
    $InitializeEvent(0, 12410655);
    $InitializeEvent(0, 12410656);
    $InitializeEvent(0, 12410657);
    $InitializeEvent(0, 12410658);
    $InitializeEvent(0, 12410659);
    $InitializeEvent(0, 12410661);
    $InitializeEvent(0, 12410662, 1163, 72410331, 72410338);
    $InitializeEvent(1, 12410662, 1204, 72410331, 72410339);
    $InitializeEvent(2, 12410662, 1268, 72410332, 72410340);
    $InitializeEvent(3, 12410662, 1190, 72410332, 72410341);
    $InitializeEvent(4, 12410662, 1223, 72410332, 72410342);
    $InitializeEvent(5, 12410662, 1309, 72410332, 72410343);
    $InitializeEvent(0, 12410668);
    $InitializeEvent(0, 12410669, 2410290, 1124, 0);
    $InitializeEvent(1, 12410669, 2410291, 1163, 0);
    $InitializeEvent(2, 12410669, 2410292, 1204, 7001);
    $InitializeEvent(3, 12410669, 2410293, 1268, 0);
    $InitializeEvent(4, 12410669, 2410294, 1190, 0);
    $InitializeEvent(5, 12410669, 2410295, 1223, 7000);
    $InitializeEvent(6, 12410669, 2410296, 1309, 7002);
    $InitializeEvent(0, 12410676);
    $InitializeEvent(0, 12410677);
    $InitializeEvent(0, 12410680, 2410290);
    $InitializeEvent(1, 12410680, 2410291);
    $InitializeEvent(2, 12410680, 2410292);
    $InitializeEvent(3, 12410680, 2410293);
    $InitializeEvent(4, 12410680, 2410294);
    $InitializeEvent(5, 12410680, 2410295);
    $InitializeEvent(6, 12410680, 2410296);
    $InitializeEvent(0, 12410687, 12410687, 72410347);
    $InitializeEvent(1, 12410687, 12410688, 72410348);
    $InitializeEvent(2, 12410687, 12410689, 72410349);
    $InitializeEvent(3, 12410687, 12410690, 72410350);
    $InitializeEvent(4, 12410687, 12410691, 72410351);
    $InitializeEvent(5, 12410687, 12410692, 72410352);
    $InitializeEvent(0, 12410693, 12410693, 72410353);
    $InitializeEvent(1, 12410693, 12410694, 72410354);
    $InitializeEvent(2, 12410693, 12410695, 72410355);
    $InitializeEvent(3, 12410693, 12410696, 72410356);
    $InitializeEvent(4, 12410693, 12410697, 72410357);
    $InitializeEvent(5, 12410693, 12410698, 72410358);
    $InitializeEvent(0, 12410700);
    $InitializeEvent(0, 12410721);
    $InitializeEvent(0, 12410730);
    $InitializeEvent(0, 12410731);
    $InitializeEvent(0, 12410732);
    $InitializeEvent(0, 12410733);
    $InitializeEvent(0, 12410734);
    $InitializeEvent(0, 12410736);
    $InitializeEvent(0, 12410737);
    $InitializeEvent(0, 12410738);
    $InitializeEvent(0, 12410739);
    $InitializeEvent(0, 12410785);
    $InitializeEvent(0, 12410786);
    $InitializeEvent(0, 12410787);
    $InitializeEvent(0, 12410740);
    $InitializeEvent(0, 12410741);
    $InitializeEvent(0, 12410742);
    $InitializeEvent(0, 12410743);
    $InitializeEvent(0, 12410746);
    $InitializeEvent(0, 12410747);
    $InitializeEvent(0, 12410748);
    $InitializeEvent(0, 12410749);
    $InitializeEvent(0, 12410750, 72410392, 6030, 2410732);
    $InitializeEvent(0, 12410760);
    $InitializeEvent(0, 12410761);
    $InitializeEvent(0, 12410763);
    $InitializeEvent(0, 12410770, 2410290);
    $InitializeEvent(1, 12410770, 2410291);
    $InitializeEvent(2, 12410770, 2410292);
    $InitializeEvent(3, 12410770, 2410293);
    $InitializeEvent(4, 12410770, 2410294);
    $InitializeEvent(5, 12410770, 2410295);
    $InitializeEvent(6, 12410770, 2410296);
    $InitializeEvent(0, 12410809);
    $InitializeEvent(0, 12410810);
    $InitializeEvent(0, 12410811);
    $InitializeEvent(0, 12410831);
    $InitializeEvent(0, 12410833);
    $InitializeEvent(0, 12410834);
    $InitializeEvent(0, 12410835);
    $InitializeEvent(0, 12410812);
    $InitializeEvent(0, 12410813);
    $InitializeEvent(0, 12410814);
    $InitializeEvent(0, 12410510);
    $InitializeEvent(0, 12415750, 2413710, 1439, 70000050, 9801);
    $InitializeEvent(1, 12415750, 2413711, 1439, 70000051, 9801);
    $InitializeEvent(2, 12415750, 2413712, 1439, 70000070, 9802);
    $InitializeEvent(3, 12415750, 2413713, 1439, 70000071, 9802);
    $InitializeEvent(0, 12415759, 2413714, 1439, 70000140, 9802);
    $InitializeEvent(0, 12415770, 2411250, 9802, 924110);
    $InitializeEvent(1, 12415770, 2411251, 9802, 924113);
    $InitializeEvent(2, 12415770, 2411252, 9802, 924110);
    $InitializeEvent(3, 12415770, 2411253, 9802, 924113);
    $InitializeEvent(0, 12415779, 2411254);
    $InitializeEvent(0, 12414100, 2411000, 7400, 10012000);
    $InitializeEvent(1, 12414100, 2411001, 7401, 10012001);
    $InitializeEvent(4, 12414100, 2411004, 7404, 10012004);
    // InitializeEvent(0, 12410816, 0);
});

// pre-constructor
$Event(50, Default, function() {
    if (!EventFlag(12410000)) {
        SetEventFlag(9180, ON);
        SetMapSoundState(2413900, Disabled);
    }
    if (EventFlag(12410998)) {
        SetEventFlag(12410999, ON);
    }
    $InitializeEvent(0, 12410005, 12410999);
    SetCharacterAnimationState(2413950, Disabled);
    SetCharacterGravity(2413950, Disabled);
    SetCharacterMaphits(2413950, true);
    SetCharacterAnimationState(2413951, Disabled);
    SetCharacterGravity(2413951, Disabled);
    SetCharacterMaphits(2413951, true);
    SetCharacterAnimationState(2413952, Disabled);
    SetCharacterGravity(2413952, Disabled);
    SetCharacterMaphits(2413952, true);
    $InitializeEvent(0, 12410744);
    $InitializeEvent(0, 12410745);
    $InitializeEvent(0, 12410762);
    if (!EventFlag(12411812)) {
        $InitializeEvent(0, 12410800);
    }
    $InitializeEvent(0, 12410645);
    $InitializeEvent(0, 12410729);
    $InitializeEvent(0, 12410830);
    $InitializeEvent(0, 12410701);
    $InitializeEvent(0, 12410780);
    if (EventFlag(12411000)) {
        SetCharacterBackreadState(2410901, true);
        SetCharacterBackreadState(2410740, true);
        SetCharacterBackreadState(2410710, true);
        SetCharacterBackreadState(2410290, true);
        SetCharacterBackreadState(2410291, true);
        SetCharacterBackreadState(2410292, true);
        SetCharacterBackreadState(2410293, true);
        SetCharacterBackreadState(2410294, true);
        SetCharacterBackreadState(2410295, true);
        SetCharacterBackreadState(2410296, true);
        SetCharacterBackreadState(2410781, true);
    }
});

$Event(12411500, Default, function() {
    WaitFor(EventFlag(62411319));
    DisplayBanner(TextBannerType.BlackPhantomDeath); // test
});

$Event(12410720, Default, function() {
    WaitFixedTimeSeconds(0.1);
    if (EventFlag(12100953)) {
        $InitializeEvent(15, 7000, 2410950, 2411950, 9401, 12417800, -1);
    } else {
        $InitializeEvent(70, 7000, 2410950, 2411950, 999, 12417800, -1);
    }
});

// super pistol
$Event(12410818, Default, function() {
    SetEventFlag(12410819, OFF);
    WaitFor(InArea(10000, 2410948));
    WaitFixedTimeSeconds(5);
    if (InArea(10000, 2410948)) {
        WaitFor(InArea(10000, 2410949));
        WaitFixedTimeSeconds(5);
        if (InArea(10000, 2410949)) {
            DisplayMessage(10010152, 0);
            SetEventFlag(12410819, ON);
        }
    }
});

// ng+ only enemy test
$Event(12410816, Default, function() {
    SetCharacterAIState(2410975, Disabled);
    EndIf(GameCycle() == 0);
    DisplayBanner(TextBannerType.BlackPhantomDeath); // test
    SetCharacterAIState(2410975, Enabled);
});

// Cutscene after character creation
$Event(12410000, Default, function() {
    EndIf(ThisEvent());
    EndIf(!PlayerInMap(24, 1));
    if (!PlayerGender(Gender.Female)) {
        PlayCutsceneToPlayer(24010005, CutscenePlayMode.SkippableWithFadeOut, 10000);
    } else {
        PlayCutsceneToPlayer(24011005, CutscenePlayMode.SkippableWithFadeOut, 10000);
    }
    WaitFixedTimeFrames(1);
    SetEventFlag(9180, OFF);
    SetPlayerRespawnPoint(2412959);
    SetEventFlag(12417810, ON);
});

// Cathedral Street B_ First warp OBJ activation state operation
$Event(12411010, Default, function() {
    if (!ThisEvent()) {
        WaitFor(EventFlag(7015));
    }
L0:
    SetEventFlag(12417810, ON);
});

// Appearance of crazy evil spirit with SAN value_Cathedral district B_XX
$Event(12414000, Restart, function(chrEntityId, targetInsightAmount, targetDistance) {
    EndIf(ThisEventSlot());
    ChangeCharacterEnableState(chrEntityId, Disabled);
    WaitFor(
        PlayerInsightAmount() >= targetInsightAmount
            && CharacterType(10000, TargetType.Alive)
            && EntityInRadiusOfEntity(10000, chrEntityId, targetDistance));
    ChangeCharacterEnableState(chrEntityId, Enabled);
    ForceAnimationPlayback(chrEntityId, 6200, false, true, false);
});

// Crazy evil spirit disappearance with SAN value_Cathedral district B_XX
$Event(12414010, Restart, function(chrEntityId, targetInsightAmount, eventFlagId) {
    if (!ThisEventSlot()) {
        WaitFor(EventFlag(eventFlagId) && PlayerInsightAmount() <= targetInsightAmount);
    }
L0:
    ForceCharacterDeath(chrEntityId, false);
});

// Piece of Paper_Cathedral B_XX
$Event(12414100, Default, function(areaEntityId, actionButtonParameterId, messageId) {
    SetNetworkSyncState(Disabled);
    WaitFor(ActionButtonInArea(actionButtonParameterId, areaEntityId));
    DisplayGenericDialog(messageId, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
    RestartEvent();
});

// event version placement
$Event(12410005, Default, function(eventFlagId) {
    if (!EventFlag(eventFlagId)) {
        ActivateMapPart(2414220, Disabled);
        DeactivateObject(2411700, Disabled);
        DeactivateObject(2411701, Disabled);
        DeactivateObject(2411702, Disabled);
        DeactivateObject(2411703, Disabled);
        DeactivateObject(2411704, Disabled);
        DeactivateObject(2411705, Disabled);
        DeactivateObject(2411706, Disabled);
        DeactivateObject(2411707, Disabled);
        DeactivateObject(2411708, Disabled);
        DeactivateObject(2411709, Disabled);
        DeactivateObject(2411710, Disabled);
        DeactivateObject(2411711, Disabled);
        EndEvent();
    }
L0:
    ActivateMapPart(2414220, Enabled);
    DeactivateObject(2411316, Disabled);
    ChangeCharacterEnableState(2410951, Disabled);
    ChangeCharacterEnableState(2410195, Disabled);
    DeactivateObject(2411700, Enabled);
    DeactivateObject(2411701, Enabled);
    DeactivateObject(2411702, Enabled);
    DeactivateObject(2411703, Enabled);
    DeactivateObject(2411704, Enabled);
    DeactivateObject(2411705, Enabled);
    DeactivateObject(2411706, Enabled);
    DeactivateObject(2411707, Enabled);
    DeactivateObject(2411708, Enabled);
    DeactivateObject(2411709, Enabled);
    DeactivateObject(2411710, Enabled);
    DeactivateObject(2411711, Enabled);
    SetCharacterBackreadState(2410260, true);
    SetCharacterBackreadState(2410261, true);
    SetCharacterBackreadState(2410300, true);
    SetCharacterBackreadState(2410301, true);
    SetCharacterBackreadState(2410302, true);
    SetCharacterBackreadState(2410303, true);
    SetCharacterBackreadState(2410304, true);
    SetCharacterBackreadState(2410305, true);
    SetCharacterBackreadState(2410306, true);
    SetCharacterBackreadState(2410307, true);
    SetCharacterBackreadState(2410308, true);
    SetCharacterBackreadState(2410271, true);
    SetCharacterBackreadState(2410272, true);
    SetCharacterBackreadState(2410275, true);
    SetCharacterBackreadState(2410277, true);
    SetCharacterBackreadState(2410278, true);
    SetCharacterBackreadState(2410279, true);
});

// logic activation_area
$Event(12415060, Restart, function(chrEntityId, areaEntityId, areaEntityId2, targetDistance) {
    EndIf(ThisEventSlot());
    SetCharacterAIState(chrEntityId, Disabled);
    WaitFor(
        ((CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && (InArea(10000, areaEntityId)
                || InArea(10000, areaEntityId2)
                || EntityInRadiusOfEntity(10000, chrEntityId, targetDistance)))
            || HasDamageType(chrEntityId, 10000, DamageType.Unspecified));
    SetCharacterAIState(chrEntityId, Enabled);
});

// Release in special standby_area
$Event(12415080, Restart, function(chrEntityId, animationId, animationId2, areaEntityId, aiId, aiId2, targetDistance) {
    if (ThisEventSlot()) {
        SetCharacterAIId(chrEntityId, aiId2);
        EndEvent();
    }
L0:
    ForceAnimationPlayback(chrEntityId, animationId, true, false, true);
    SetCharacterAIId(chrEntityId, aiId);
    SetCharacterGravity(chrEntityId, Disabled);
    chrArea = (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
        && (InArea(10000, areaEntityId) || EntityInRadiusOfEntity(10000, chrEntityId, targetDistance));
    chr = CharacterAIState(chrEntityId, AIStateType.Combat);
    dmg = HasDamageType(chrEntityId, 10000, DamageType.Unspecified);
    WaitFor(chrArea || chr || dmg);
    SetCharacterGravity(chrEntityId, Enabled);
    if (!dmg.Passed) {
        WaitRandomTimeFrames(20, 100);
        if (HPRatio(chrEntityId) >= 1) {
            ForceAnimationPlayback(chrEntityId, animationId2, false, true, false);
        }
    }
L1:
    SetCharacterAIId(chrEntityId, aiId2);
});

// Display an unopenable door Msg
$Event(12415020, Default, function(actionButtonParameterId, areaEntityId, eventFlagId, messageId) {
    SetNetworkSyncState(Disabled);
    WaitFor(ActionButtonInArea(actionButtonParameterId, areaEntityId) || EventFlag(eventFlagId));
    EndIf(EventFlag(eventFlagId));
    DisplayGenericDialog(messageId, PromptType.OKCANCEL, NumberofOptions.OneButton, areaEntityId, 3);
    RestartEvent();
});

// gate and lever_XX
$Event(12410200, Default, function(objEntityId, areaEntityId, objactEventFlag) {
    if (ThisEventSlot()) {
        ReproduceObjectAnimation(objEntityId, 1);
        WaitFixedTimeSeconds(1);
        SetObjactState(areaEntityId, 2410000, Disabled);
        SetObjactState(areaEntityId, 2410001, Disabled);
        WaitFor(ActionButtonInArea(7100, areaEntityId));
        DisplayGenericDialog(10010172, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
        RestartEvent();
    }
L0:
    WaitFor(ObjActEventFlag(objactEventFlag));
    ForceAnimationPlayback(objEntityId, 1, false, false, false);
    SetNetworkSyncState(Disabled);
    if (areaEntityId == 2411314) {
        DisplayGenericDialog(10010850, PromptType.OKCANCEL, NumberofOptions.OneButton, areaEntityId, 3);
    }
    RestartEvent();
});

// Msg_XX when examining a one-way door
$Event(12410100, Default, function(actionButtonParameterId, areaEntityId, eventFlagId, messageId) {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(eventFlagId));
    act = ActionButtonInArea(actionButtonParameterId, areaEntityId);
    flag = EventFlag(eventFlagId);
    WaitFor(act || flag);
    if (!flag.Passed) {
        DisplayGenericDialog(messageId, PromptType.OKCANCEL, NumberofOptions.OneButton, areaEntityId, 3);
        WaitFixedTimeSeconds(1);
        RestartEvent();
    }
L0:
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

// Door open process_XX
$Event(12410110, Default, function(objEntityId, objactEventFlag, animationId, objParameterId) {
    if (ThisEventSlot()) {
        ReproduceObjectAnimation(objEntityId, animationId);
        SetObjactState(objEntityId, objParameterId, Disabled);
        NotifySoundDampeningOfDoorEvent(objEntityId, DoorState.DoorOpening);
        EndEvent();
    }
L0:
    WaitFor(ObjActEventFlag(objactEventFlag));
    WaitFixedTimeSeconds(0);
});

// Open one-way door
$Event(12410120, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(InArea(10000, 2412300) || (InArea(10000, 2412301) && EventFlag(12410130)));
    SetSpEffect(10000, 4150, false);
    WaitFixedTimeSeconds(3);
    RestartEvent();
});

// Msg_XX when the door is open
$Event(12410130, Default, function(objactEventFlag) {
    SetNetworkSyncState(Disabled);
    EndIf(ThisEventSlot());
    WaitFor(ObjActEventFlag(objactEventFlag));
    EndEvent();
});

// Msg when opening the door in the back of the gascoine room
$Event(12410150, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(ThisEvent() || EventFlag(gascoigne_defeat+13));
    WaitFor(ObjActEventFlag(12411307));
    DisplayGenericDialog(10010850, PromptType.YESNO, NumberofOptions.OneButton, 2411304, 3);
});

// Msg_PlayGo when opening the door in the back of the gascoine room
$Event(12410151, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(EventFlag(12411800));
    EndIf(EventFlag(12410150) || EventFlag(12411813));
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    EndIf(!EventFlag(12411000));
    SetObjactState(2411304, 2410080, Disabled);
    WaitFor(ActionButtonInArea(7002, 2411304));
    if (HasPlayGoState(PlayGoState.Downloaded1stChunk)) {
        DisplayGenericDialog(10010180, PromptType.YESNO, NumberofOptions.OneButton, 2411304, 3);
        RestartEvent();
    }
L0:
    DisplayGenericDialog(10010181, PromptType.YESNO, NumberofOptions.OneButton, 2411304, 3);
    RestartEvent();
});

// SE playback_XX
$Event(12410160, Restart, function(areaEntityId, entityId, soundType, soundId) {
    EndIf(ThisEventSlot());
    WaitFor(
        (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, areaEntityId));
    PlaySE(entityId, soundType, soundId);
});

// Close the infirmary door
$Event(12410140, Restart, function() {
    if (!AnyBatchEventFlags(1140, 1144)) {
        if (!EventFlag(70000240)) {
            WaitFor(ObjActEventFlag(12411300));
            SetEventFlag(70000240, ON);
            EndEvent();
        }
L1:
        ReproduceObjectAnimation(2411307, 2);
        SetObjactState(2411307, 2410010, Disabled);
        NotifySoundDampeningOfDoorEvent(2411307, DoorState.DoorOpening);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(9401) || EventFlag(9800));
    ReproduceObjectAnimation(2411307, 0);
    SetObjactState(2411307, 2410010, Enabled);
    NotifySoundDampeningOfDoorEvent(2411307, DoorState.DoorClosing);
    SetEventFlag(62411300, OFF);
    SetEventFlag(72410329, OFF);
    SetEventFlag(72410344, OFF);
    SetEventFlag(72410345, OFF);
    SetEventFlag(72410346, OFF);
});

// NavMesh Node Bank Registration
$Event(12410337, Default, function(entityId) {
    WaitFor(ObjActEventFlag(12411303));
    ModifyNavimeshConnectionBitflag(entityId, NavimeshType.Solid, BitopType.Add);
});

// Designate animation when dying in a mad dog cage
$Event(12415420, Restart, function(chrEntityId, areaEntityId, eventFlagId) {
    if (eventFlagId != 0) {
        EndIf(EventFlag(eventFlagId));
    }
    WaitFor(CharacterBackreadStatus(chrEntityId) && InArea(chrEntityId, areaEntityId));
    SetCharacterImmortality(chrEntityId, Enabled);
    WaitFor(
        HasDamageType(chrEntityId, 10000, DamageType.Unspecified)
            && InArea(chrEntityId, areaEntityId));
    SetSpEffect(chrEntityId, 5915, false);
    ForceCharacterDeath(chrEntityId, true);
});

// Crowd A joins with a time lag
$Event(12415430, Restart, function(chrEntityId, areaEntityId, timeSeconds, targetDistance) {
    EndIf(ThisEventSlot());
    SetCharacterAIState(chrEntityId, Disabled);
    chr = CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom);
    area = InArea(10000, areaEntityId);
    dmg = HasDamageType(areaEntityId, 10000, DamageType.Unspecified);
    WaitFor(area || dmg || EntityInRadiusOfEntity(chrEntityId, 10000, targetDistance));
    if (!dmg.Passed) {
        WaitFixedTimeSeconds(timeSeconds);
    }
    SetCharacterAIState(chrEntityId, Enabled);
});

// Enemy Logic Invalidation_Remove Area
$Event(12415435, Restart, function(chrEntityId, areaEntityId) {
    EndIf(ThisEventSlot());
    SetCharacterAIState(chrEntityId, Disabled);
    WaitFor(
        (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, areaEntityId));
    WaitRandomTimeFrames(0, 10);
    SetCharacterAIState(chrEntityId, Enabled);
});

// Clinic_First Hound_Special Standby
$Event(12415460, Restart, function(chrEntityId, animationId, animationId2, areaEntityId, targetDistance, entityId, entityId2) {
    WaitFixedTimeFrames(10);
    CharacterWarpRequest(chrEntityId, TargetEntityType.Area, entityId, -1);
    if (ThisEventSlot()) {
        EndEvent();
    }
L0:
    ForceAnimationPlayback(chrEntityId, animationId, true, false, true);
    SetCharacterGravity(chrEntityId, Disabled);
    chrArea = (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
        && (InArea(10000, areaEntityId) || EntityInRadiusOfEntity(10000, chrEntityId, targetDistance));
    chr = CharacterAIState(chrEntityId, AIStateType.Combat);
    dmg = HasDamageType(chrEntityId, 10000, DamageType.Unspecified);
    WaitFor(chrArea || chr || dmg);
    SetCharacterGravity(chrEntityId, Enabled);
    ForceAnimationPlayback(entityId2, 1, false, false, false);
    if (!dmg.Passed) {
        ForceAnimationPlayback(chrEntityId, animationId2, false, true, false);
    }
L1:
    EndEvent();
});

// Clinic_Corpse crowd A_Special standby
$Event(12415461, Restart, function(entityId, animationId, animationId2) {
    GotoIf(L0, EventFlag(12410170));
    ForceAnimationPlayback(entityId, animationId, false, false, false);
    chr = CharacterHasEventMessage(2410019, 10);
    WaitFor(chr || EventFlag(12410170));
    if (!chr.Passed) {
L0:
        ForceAnimationPlayback(entityId, animationId2, false, false, false);
        EndEvent();
    }
L1:
    RestartEvent();
});

// Father Gascoigne_Start of battle_Event version
$Event(12415470, Default, function(chrEntityId, areaEntityId, commandId) {
    EndIf(EventFlag(12415234));
    SetCharacterAIState(chrEntityId, Disabled);
    chr = CharacterAIState(2410200, AIStateType.Combat) && CharacterAIState(2410201, AIStateType.Combat);
    WaitFor(
        chr
            || HasDamageType(chrEntityId, -1, DamageType.Unspecified)
            || ((CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.WhitePhantom))
                && EntityInRadiusOfEntity(chrEntityId, 10000, 8)));
    if (chr.Passed) {
        WaitFixedTimeSeconds(10);
    }
    SetCharacterAIState(chrEntityId, Enabled);
    WaitFixedTimeFrames(10);
    SetCharacterHome(chrEntityId, areaEntityId);
    RequestCharacterAICommand(chrEntityId, commandId, 0);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Uninterpolated);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(
        InArea(chrEntityId, areaEntityId)
            || CharacterAIState(chrEntityId, AIStateType.Combat)
            || CharacterAIState(chrEntityId, AIStateType.Alert)
            || CharacterAIState(chrEntityId, AIStateType.Recognition));
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
});

// Special Standby _ Crowd B hitting the wall
$Event(12415475, Restart, function(chrEntityId, animationId, animationId2, areaEntityId) {
    EndIf(ThisEvent());
    ForceAnimationPlayback(chrEntityId, animationId, true, false, true);
    chrArea = (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
        && InArea(10000, areaEntityId);
    dmg = HasDamageType(chrEntityId, 10000, DamageType.Unspecified);
    flag = EventFlag(12415477);
    WaitFor(chrArea || dmg || flag);
    if (!dmg.Passed) {
        ForceAnimationPlayback(2411202, 0, true, false, false);
    }
    ForceAnimationPlayback(chrEntityId, animationId2, false, true, false);
    if (!flag.Passed) {
        EndEvent();
    }
    SetCharacterHome(chrEntityId, 2412051);
});

// Crowd hitting the wall B_Cancel after taking damage
$Event(12415476, Restart, function(entityId, animationId) {
    EndIf(ThisEventSlot());
    WaitFor(HasDamageType(entityId, 10000, DamageType.Unspecified));
    ForceAnimationPlayback(2411202, 0, true, false, false);
    ForceAnimationPlayback(entityId, animationId, false, true, false);
});

// mad dog howls
$Event(12415477, Restart, function(chrEntityId) {
    WaitFor(HasMultiplayerState(MultiplayerState.Host));
    SetNetworkUpdateAuthority(chrEntityId, AuthorityLevel.Forced);
    SetEventFlag(12415477, OFF);
    WaitFor(
        CharacterAIState(chrEntityId, AIStateType.Recognition)
            || CharacterAIState(chrEntityId, AIStateType.Combat));
    SetEventFlag(12415477, ON);
    ForceAnimationPlayback(chrEntityId, 3021, false, true, false);
    WaitFor(CharacterAIState(chrEntityId, AIStateType.Normal));
    RestartEvent();
});

// Giant gate anime loop
$Event(12415478, Restart, function(chrEntityId) {
    chr = !CharacterDead(chrEntityId) && CharacterHasEventMessage(chrEntityId, 10);
    flag = EventFlag(12415475);
    WaitFor(chr || flag);
    if (!flag.Passed) {
        DamageShielding(2411202, Enabled);
        ForceAnimationPlayback(2411202, 1, true, false, true);
        RestartEvent();
    }
L0:
    DamageShielding(2411202, Disabled);
    ForceAnimationPlayback(2411202, 0, true, false, false);
    EndEvent();
});

// Crowd B nest switch
$Event(12415479, Restart, function(chrEntityId) {
    WaitFor(EventFlag(12415475) && EventFlag(12415477));
    SetCharacterHome(chrEntityId, 2412051);
    WaitFor(!EventFlag(12415477));
    SetCharacterHome(chrEntityId, 2412240);
    RestartEvent();
});

// Special Standby Crowd near Mad Dog
$Event(12415480, Restart, function(chrEntityId, animationId, animationId2, aiId, aiId2) {
    if (ThisEventSlot()) {
        SetCharacterAIId(chrEntityId, aiId2);
        EndEvent();
    }
L0:
    WaitFor(CharacterBackreadStatus(chrEntityId));
    ForceAnimationPlayback(chrEntityId, animationId, true, false, true);
    SetCharacterAIId(chrEntityId, aiId);
    SetCharacterGravity(chrEntityId, Disabled);
    dmg = HasDamageType(chrEntityId, 10000, DamageType.Unspecified);
    WaitFor(dmg || EventFlag(12415477));
    SetCharacterGravity(chrEntityId, Enabled);
    if (!dmg.Passed) {
        WaitRandomTimeFrames(20, 100);
        ForceAnimationPlayback(chrEntityId, animationId2, false, true, false);
    }
    SetCharacterAIId(chrEntityId, aiId2);
});

// Crowd_Call friends
$Event(12415498, Restart, function(chrEntityId, behaviorId) {
    WaitFor(
        CharacterAIState(chrEntityId, AIStateType.Recognition)
            || CharacterAIState(chrEntityId, AIStateType.Alert)
            || CharacterAIState(chrEntityId, AIStateType.Combat));
    WaitRandomTimeFrames(0, 30);
    ForceAnimationPlayback(chrEntityId, 3010, false, true, false);
    dmg = HasDamageType(chrEntityId, 10000, DamageType.Unspecified);
    WaitFor(ElapsedFrames(51) || dmg);
    if (!dmg.Passed) {
        ShootBullet(chrEntityId, chrEntityId, 7, behaviorId, 90, 0, 0);
        ForceAnimationPlayback(chrEntityId, 7004, false, true, false);
    }
    WaitFor(CharacterAIState(chrEntityId, AIStateType.Normal));
    RestartEvent();
});

// Evil God (Large) display
$Event(12410815, Default, function() {
    SetSpEffect(2410600, 5686, false);
    WaitFixedTimeFrames(10);
    WaitFor(EventFlag(9802) || PlayerInsightAmount() >= 0);
    ChangeCharacterDispmask(2410600, 0, ON);
    ChangeCharacterDispmask(2410600, 2, ON);
    ChangeCharacterDispmask(2410600, 10, ON);
    ChangeCharacterEnableState(2410600, Enabled);
    ClearSpEffect(2410600, 5686);
    //WaitFor(PlayerInsightAmount() <= 18 && !EventFlag(9802));
    //RestartEvent();
});

// [Event version] Disconnect map connection
$Event(12410820, Default, function() {
    ActivateHitBackreadMask(2414400, Disabled);
    ActivateHitBackreadMask(2414401, Disabled);
    ActivateHitBackreadMask(2414402, Disabled);
    ActivateHitBackreadMask(2414410, Disabled);
    ActivateHitBackreadMask(2414420, Disabled);
    ActivateHitBackreadMask(2414421, Disabled);
});

// Wandering Madness_Cathedral District B_XX
$Event(12410450, Restart, function(chrEntityId, eventFlagId) {
    if (ThisEventSlot()) {
        ChangeCharacterEnableState(chrEntityId, Disabled);
        EndEvent();
    }
L0:
    chrFlag &= CharacterType(10000, TargetType.Alive);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        chrFlag &= EventFlag(eventFlagId);
    }
    WaitFor(chrFlag);
    WaitFixedTimeSeconds(0);
});

// Multi enable/disable control_Cathedral District B
$Event(12411899, Default, function() {
    EndIf(ThisEvent());
    WaitFor(EventFlag(12411800) && EventFlag(12411700));
    SetEventFlag(2410, ON);
});

// Boss Defeated_Diocese
$Event(12411700, Default, function() {
    if (ThisEvent()) {
        SetMapSoundState(2413802, Disabled);
        SetMapSoundState(2413803, Disabled);
        ChangeCharacterEnableState(2410800, Disabled);
        ForceCharacterDeath(2410800, false);
        DeactivateObject(2411800, Disabled);
        DeleteMapSFX(2413800, false);
        EndEvent();
    }
L0:
    WaitFor(CharacterDead(2410800));
    DisplayBanner(TextBannerType.DemonKilled); // cleric beast defetaed
    DeactivateObject(2411800, Disabled);
    DeleteMapSFX(2413800, true);
    SetLockcamSlotNumber(24, 1, 0);
    WaitFixedTimeSeconds(3);
    HandleBossDefeat(2410800);
    SetNetworkSyncState(Disabled);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        WaitFor(CharacterType(10000, TargetType.Alive));
        $InitializeEvent(0, 9350, 3);
        AwardAchievement(21);
        if (!EventFlag(6645) && !EventFlag(cleric_beast_defeat+13)) {
            AwardItemLot(50000010);
        }
        SetEventFlag(2411, ON);
        SetEventFlag(9456, ON);
        EndTimeMeasurement(2410000);
        EndTimeMeasurement(2410001);
        EndTimeMeasurement(2410010);
        CreatePlaylog(40);
        ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 52, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 52, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Weapon, 52, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Armor, 52, PlayLogMultiplayerType.HostOnly);
        if (EventFlag(cleric_beast_defeat+13)) {
            AwardItemLot(17020);
            $InitializeEvent(cleric_beast_offset, 7800, cleric_beast_lamp_id+1000, 824100);
        }
        EndEvent();
    }
L1:
    WaitFor(CharacterType(10000, TargetType.WhitePhantom));
    WaitFixedTimeSeconds(0);
});

// Boss Defeat SE Regeneration_Diocese
$Event(12411701, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12411700));
    flag = EventFlag(12411700);
    WaitFor(flag || (!CharacterBackreadStatus(2410800) && HPRatio(2410800) <= 0));
    EndIf(flag.Passed);
    PlaySE(2412800, SoundType.cCharacterMotion, 500099999);
});

// Host enters boss room_first match_diocese
$Event(12411702, Default, function() {
    EndIf(EventFlag(12411700));
    if (ThisEvent()) {
        EndEvent();
    }
L0:
    ChangeCharacterEnableState(2410800, Disabled);
    SetCharacterGravity(2410800, Disabled);
    SetCharacterMaphits(2410800, true);
    WaitFor(
        !EventFlag(12411700)
            && !ThisEvent()
            && CharacterType(10000, TargetType.Alive)
            && InArea(10000, 2412805));
    IssueShortWarpRequest(2410800, TargetEntityType.Area, 2412831, -1);
    SetEventFlag(72410511, ON);
    ChangeCharacterEnableState(2410800, Enabled);
    ForceAnimationPlayback(2410800, 3028, false, false, false);
    WaitFixedTimeFrames(110);
    SetCharacterGravity(2410800, Enabled);
    SetCharacterMaphits(2410800, false);
    SetEventFlag(12414700, ON);
    SetEventFlag(12414223, ON);
    EndIf(EventFlag(9300));
    $InitializeEvent(0, 9350, 1);
    SetEventFlag(9300, ON);
});

// Diocese_Staggered entry guest handling process
$Event(12411703, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EventFlag(12414700));
    EndIf(HasMultiplayerState(MultiplayerState.Host));
    ChangeCharacterEnableState(2410800, Enabled);
    SetEventFlag(12414700, ON);
    SetEventFlag(12411702, ON);
});

// Host enters boss room_Rematch_Diocese
$Event(12414730, Default, function() {
    EndIf(EventFlag(12411700));
    if (!EventFlag(12411702)) {
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            DeactivateObject(2411800, Disabled);
            DeleteMapSFX(2413800, false);
        }
        WaitFor(!EventFlag(12411700) && EventFlag(12411702));
        DeactivateObject(2411800, Enabled);
        SpawnMapSFX(2413800);
    }
L0:
    flagChrAct = !EventFlag(12411700)
        && CharacterType(10000, TargetType.Alive)
        && ActionButtonInArea(2410040, 2411800);
    flag = EventFlag(12411700);
    WaitFor(flagChrAct || flag);
    EndIf(flag.Passed);
    RotateCharacter(10000, 2412800, 101130, false);
    chrArea = CharacterType(10000, TargetType.Alive) && InArea(10000, 2412801);
    chr = CharacterType(10000, TargetType.Alive) && ElapsedSeconds(2);
    WaitFor(chrArea || chr);
    if (!chr.Passed) {
        SetEventFlag(12414700, ON);
        SetEventFlag(12414223, ON);
    }
    RestartEvent();
});

// Guest enters boss room_Diocese
$Event(12414731, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12411700));
    WaitFor(
        !EventFlag(12411700)
            && EventFlag(12411702)
            && EventFlag(12414700)
            && CharacterType(10000, TargetType.WhitePhantom)
            && ActionButtonInArea(2410040, 2411800));
    RotateCharacter(10000, 2412800, 101130, false);
    chrArea = CharacterType(10000, TargetType.WhitePhantom) && InArea(10000, 2412801);
    chr = CharacterType(10000, TargetType.WhitePhantom) && ElapsedSeconds(2);
    WaitFor(chrArea || chr);
    if (!chr.Passed) {
        SetEventFlag(12414701, ON);
    }
    RestartEvent();
});

// Disabled per fog wall in other world_Parish
$Event(12414732, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EntityInRadiusOfEntity(10000, 2411800, 4));
    SetCharacterGravityMaphitStateExcludingOwnWorld(10000, Disabled);
    WaitFixedTimeFrames(6);
    RestartEvent();
});

// Disabled per fog wall in other worlds 2_Diocese
$Event(12414733, Default, function() {
    WaitFor(
        CharacterType(10000, TargetType.Alive)
            && !EntityInRadiusOfEntity(10000, 2411800, 4)
            && EntityInRadiusOfEntity(10000, 2411800, 8));
    SetCharacterGravityMaphitStateExcludingOwnWorld(10000, Enabled);
    WaitFixedTimeFrames(6);
    RestartEvent();
});

// Boss begins to move_Diocese
$Event(12414702, Default, function() {
    EndIf(EventFlag(12411700));
    SetCharacterAIState(2410800, Disabled);
    SetCharacterHPBarDisplay(2410800, Disabled);
    if (!ThisEvent()) {
        WaitFor(EventFlag(12414700) || EventFlag(12415400) || EventFlag(cleric_beast_defeat+13));
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            IssueBossRoomEntryNotification(0);
            SetNetworkUpdateAuthority(2410800, AuthorityLevel.Forced);
        }
    }
L0:
    SetEventFlag(12414700, ON);
    GotoIf(L1, CountEventFlags(TargetEventFlagType.EventFlag, 8630, 8639) == 0);
    GotoIf(L2, CountEventFlags(TargetEventFlagType.EventFlag, 8630, 8639) == 1);
    GotoIf(L3, CountEventFlags(TargetEventFlagType.EventFlag, 8630, 8639) > 1);
    GotoIf(L1, NumberOfCoopClients() == 0);
    GotoIf(L2, NumberOfCoopClients() == 1);
    GotoIf(L3, NumberOfCoopClients() == 2);
L1:
    Goto(L4);
L2:
    SetSpEffect(2410800, 7500, true);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2410800);
    Goto(L4);
L3:
    SetSpEffect(2410800, 7501, true);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2410800);
    Goto(L4);
L4:
    if (EventFlag(cleric_beast_defeat+13)) {
        WaitFixedTimeSeconds(2);
    }
    SetCharacterAIState(2410800, Enabled);
    DisplayBossHealthBar(Enabled, 2410800, 0, 500000);
    CreatePlaylog(80);
    StartTimeMeasurement(2410010, 96, Enabled);
});

// Boss BGM ON_Diocese
$Event(12414703, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12411700));
    if (!ThisEvent()) {
        SetMapSoundState(2413802, Disabled);
        SetMapSoundState(2413803, Disabled);
        flagArea &= !EventFlag(12411700) && EventFlag(12414702);
        if (!HasMultiplayerState(MultiplayerState.Host)) {
            flagArea &= EventFlag(12414701);
        }
        flagArea &= InArea(10000, 2412801);
        WaitFor(flagArea);
        EnableBossMapSound(2413802, Enabled);
        chrFlagArea &= CharacterHasEventMessage(2410800, 100);
    }
L0:
    chrFlagArea &= !EventFlag(12411700) && EventFlag(12414702);
    if (!HasMultiplayerState(MultiplayerState.Host)) {
        chrFlagArea &= EventFlag(12414701);
    }
    chrFlagArea &= InArea(10000, 2412801);
    WaitFor(chrFlagArea);
    EnableBossMapSound(2413802, Disabled);
    WaitFixedTimeFrames(0);
    EnableBossMapSound(2413803, Enabled);
});

// Boss Camera_Parish
$Event(12414704, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12411700));
    WaitFor(HPRatio(2410800) > 0 && EntityInRadiusOfEntity(10000, 2410800, 5.5));
    SetLockcamSlotNumber(24, 1, 1);
    WaitFor(HPRatio(2410800) > 0 && !EntityInRadiusOfEntity(10000, 2410800, 6));
    SetLockcamSlotNumber(24, 1, 0);
    RestartEvent();
});

// Boss BGM OFF_Parish Head
$Event(12414705, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12411700));
    WaitFor(EventFlag(12411700));
    EnableBossMapSound(2413802, Disabled);
    EnableBossMapSound(2413803, Disabled);
    EnableBossMapSound(-1, Disabled);
});

// Boss heats up_Parish
$Event(12414707, Default, function() {
    EndIf(EventFlag(12411700));
    WaitFor(HPRatio(2410800) < 0.7);
    RequestCharacterAICommand(2410800, 1, 1);
    RequestCharacterAIReplan(2410800);
    WaitFor(CharacterHasEventMessage(2410800, 100));
    RequestCharacterAICommand(2410800, -1, 1);
    RequestCharacterAIReplan(2410800);
});

// Boss part damage_cross soft_diocese
$Event(12414708, Default, function() {
    EndIf(EventFlag(12411700));
    if (!ThisEvent()) {
        WaitFor(CharacterHasSpEffect(2410800, 482));
    }
L0:
    ChangeCharactersCloth(2410800, 15, 2);
});

// Boss Part Damage_Parish Head_XX
$Event(12414710, Restart, function(npcPartId, npcPartId2, npcPartGroupIdx, npcPartHP, spEffectId, spEffectId2, animationId) {
    EndIf(EventFlag(12411700));
    CreateNPCPart(2410800, npcPartId, npcPartGroupIdx, npcPartHP, 1, 1, false, false);
    SetNPCPartSEAndSFX(2410800, npcPartId2, 72, 72);
    hp = NPCPartHP(2410800, npcPartId2) <= 0;
    hp2 = HPRatio(2410800) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(2410800, npcPartId, npcPartGroupIdx, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(2410800, npcPartId2, 73, 73);
    ForceAnimationPlayback(2410800, animationId, false, false, false);
    SetSpEffect(2410800, spEffectId, false);
    ClearSpEffect(2410800, spEffectId2);
    RequestCharacterAIReplan(2410800);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(2410800, 1, 0);
    RequestCharacterAIReplan(2410800);
    WaitFor(CharacterHasEventMessage(2410800, 300));
    SetNPCPartHP(2410800, npcPartId2, -1, true);
    SetSpEffect(2410800, spEffectId2, false);
    ClearSpEffect(2410800, spEffectId);
    RequestCharacterAICommand(2410800, -1, 0);
    RequestCharacterAIReplan(2410800);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Boss part damage effect_Parish head_XX
$Event(12414720, Default, function(spEffectId, spEffectId2, bitNumber, bitNumber2) {
    EndIf(EventFlag(12411700));
    WaitFor(
        CharacterHasSpEffect(2410800, spEffectId) && !CharacterHasSpEffect(2410800, spEffectId2));
    ChangeCharacterDispmask(2410800, bitNumber2, OFF);
    ChangeCharacterDispmask(2410800, bitNumber, ON);
    WaitFor(
        !CharacterHasSpEffect(2410800, spEffectId) && CharacterHasSpEffect(2410800, spEffectId2));
    ChangeCharacterDispmask(2410800, bitNumber, OFF);
    ChangeCharacterDispmask(2410800, bitNumber2, ON);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Defeat the boss_Father Gascoigne
$Event(12411800, Default, function() {
    if (ThisEvent()) {
        SetMapSoundState(2413812, Disabled);
        SetMapSoundState(2413813, Disabled);
        ChangeCharacterEnableState(2410810, Disabled);
        ChangeCharacterEnableState(2410811, Disabled);
        ForceCharacterDeath(2410810, false);
        ForceCharacterDeath(2410811, false);
        DeactivateObject(2411810, Disabled);
        DeleteMapSFX(2413810, false);
        EndEvent();
    }
L0:
    chr = CharacterDead(2410810);
    chr2 = CharacterDead(2410811);
    if (EventFlag(gascoigne_defeat+15)) {
        WaitFor(chr && chr2);
    } else {
        WaitFor(chr || chr2);
    }
    if (!EventFlag(12411814)) {
        DisplayBanner(TextBannerType.DemonKilled); // gascoigne defeated
    }
    DeactivateObject(2411810, Disabled);
    DeleteMapSFX(2413810, true);
    SetLockcamSlotNumber(24, 1, 0);
    WaitFixedTimeSeconds(3);
    if (!chr2.Passed) {
        HandleBossDefeat(2410810);
    } else {
        HandleBossDefeat(2410811);
    }
    SetNetworkUpdateRate(2410811, true, CharacterUpdateFrequency.Every5Frames);
    SetNetworkSyncState(Disabled);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        WaitFor(CharacterType(10000, TargetType.Alive));
        $InitializeEvent(0, 9350, 2);
        AwardAchievement(14);
        if (!EventFlag(gascoigne_defeat+13)) {
            AwardItemLot(31000);
        } else if (EventFlag(gascoigne_defeat+15)) {
            AwardItemLot(17030);
        } else if (EventFlag(gascoigne_defeat+13)) {
            AwardItemLot(17020);
        }
        SetEventFlag(2412, ON);
        SetEventFlag(9457, ON);
        SetEventFlag(5910, ON);
        EndTimeMeasurement(2410000);
        EndTimeMeasurement(2410001);
        EndTimeMeasurement(2410010);
        CreatePlaylog(40);
        ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 114, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 114, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Weapon, 114, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Armor, 114, PlayLogMultiplayerType.HostOnly);
        if (EventFlag(gascoigne_defeat+13)) {
            $InitializeEvent(gascoigne_offset, 7800, gascoigne_lamp_id+1000, 824102);
        }
        EndEvent();
    }
L1:
    WaitFor(CharacterType(10000, TargetType.WhitePhantom));
    WaitFixedTimeSeconds(0);
});

// Boss Defeat SE Replay_Father Gascoigne
$Event(12411801, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12411800));
    flag = EventFlag(12411800);
    WaitFor(
        flag
            || (!CharacterBackreadStatus(2410810) && HPRatio(2410810) <= 0)
            || (!CharacterBackreadStatus(2410811) && HPRatio(2410811) <= 0));
    EndIf(flag.Passed);
    PlaySE(2412810, SoundType.cCharacterMotion, 500099999);
});

// Host enters boss room_first match_Father Gascoigne
$Event(12411802, Default, function() {
    EndIf(EventFlag(12411800));
    EndIf(ThisEvent());
    ChangeCharacterEnableState(2410810, Disabled);
    WaitFor(
        !EventFlag(12411800)
            && !ThisEvent()
            && CharacterType(10000, TargetType.Alive)
            && InArea(10000, 2412815));
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        IssueBossRoomEntryNotification(0);
    }
    SetEventFlag(12414223, ON);
    EndIf(CharacterType(10000, TargetType.BlackPhantom));
    SetEventFlag(9180, ON);
    WaitFixedTimeFrames(1);
    if (!EventFlag(gascoigne_defeat+13) || EventFlag(12100866)) {
        if (!HasMultiplayerState(MultiplayerState.Multiplayer)) {
            PlayCutsceneToPlayer(24010010, CutscenePlayMode.Skippable, 10000);
        } else {
            PlayCutsceneToPlayer(24010010, CutscenePlayMode.Unskippable, 10000);
        }
    }
    WaitFixedTimeFrames(1);
    SetEventFlag(9180, OFF);
    IssueShortWarpRequest(2410810, TargetEntityType.Area, 2412830, -1);
    ChangeCharacterEnableState(2410810, Enabled);
    SetEventFlag(12414800, ON);
    EndIf(EventFlag(9336));
    $InitializeEvent(0, 9350, 1);
    SetEventFlag(9336, ON);
});

// Father Gascoigne_Processing for staggered entry guests
$Event(12411803, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EventFlag(12414800));
    EndIf(HasMultiplayerState(MultiplayerState.Host));
    ChangeCharacterEnableState(2410810, Enabled);
    SetEventFlag(12414800, ON);
    SetEventFlag(12411802, ON);
});

// Host enters boss room_Rematch_Father Gascoigne
$Event(12414810, Default, function() {
    EndIf(EventFlag(12411800));
    if (!EventFlag(12411802)) {
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            DeactivateObject(2411810, Disabled);
            DeleteMapSFX(2413810, false);
        }
        WaitFor(!EventFlag(12411800) && EventFlag(12411802));
        DeactivateObject(2411810, Enabled);
        SpawnMapSFX(2413810);
    }
L0:
    flagChrAct = !EventFlag(12411800)
        && CharacterType(10000, TargetType.Alive)
        && ActionButtonInArea(2410041, 2411810);
    flag = EventFlag(12411800);
    WaitFor(flagChrAct || flag);
    EndIf(flag.Passed);
    RotateCharacter(10000, 2412810, 101130, false);
    chrArea = CharacterType(10000, TargetType.Alive) && InArea(10000, 2412811);
    chr = CharacterType(10000, TargetType.Alive) && ElapsedSeconds(2);
    WaitFor(chrArea || chr);
    if (!chr.Passed) {
        SetEventFlag(12414800, ON);
    }
    RestartEvent();
});

// Guest enters boss room_Father Gascoigne
$Event(12414811, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12411800));
    WaitFor(
        !EventFlag(12411800)
            && EventFlag(12411802)
            && EventFlag(12414800)
            && CharacterType(10000, TargetType.WhitePhantom)
            && ActionButtonInArea(2410041, 2411810));
    RotateCharacter(10000, 2412810, 101130, false);
    chrArea = CharacterType(10000, TargetType.WhitePhantom) && InArea(10000, 2412811);
    chr = CharacterType(10000, TargetType.WhitePhantom) && ElapsedSeconds(2);
    WaitFor(chrArea || chr);
    if (!chr.Passed) {
        SetEventFlag(12414801, ON);
    }
    RestartEvent();
});

// Disabled per fog wall in other world_Father Gascoigne
$Event(12414812, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EntityInRadiusOfEntity(10000, 2411810, 4));
    SetCharacterGravityMaphitStateExcludingOwnWorld(10000, Disabled);
    WaitFixedTimeFrames(6);
    RestartEvent();
});

// Disabled per fog wall in other world 2_Father Gascoigne
$Event(12414813, Default, function() {
    WaitFor(
        CharacterType(10000, TargetType.Alive)
            && !EntityInRadiusOfEntity(10000, 2411810, 4)
            && EntityInRadiusOfEntity(10000, 2411810, 8));
    SetCharacterGravityMaphitStateExcludingOwnWorld(10000, Enabled);
    WaitFixedTimeFrames(6);
    RestartEvent();
});

// Boss starts moving_Father Gascoigne
$Event(12414802, Default, function() {
    EndIf(EventFlag(12411800));
    SetCharacterAIState(2410810, Disabled);
    SetCharacterAIState(2410811, Disabled);
    SetCharacterHPBarDisplay(2410810, Disabled);
    SetCharacterHPBarDisplay(2410811, Disabled);
    if (!ThisEvent()) {
        WaitFor(EventFlag(12414800) || EventFlag(gascoigne_defeat+13));
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            if (!EventFlag(12414223)) {
                IssueBossRoomEntryNotification(0);
            }
            SetNetworkUpdateAuthority(2410810, AuthorityLevel.Forced);
            SetNetworkUpdateAuthority(2410811, AuthorityLevel.Forced);
        }
    }
L0:
    SetEventFlag(12414223, ON);
    SetEventFlag(12414800, ON);
    GotoIf(L1, CountEventFlags(TargetEventFlagType.EventFlag, 8630, 8639) == 0);
    GotoIf(L2, CountEventFlags(TargetEventFlagType.EventFlag, 8630, 8639) == 1);
    GotoIf(L3, CountEventFlags(TargetEventFlagType.EventFlag, 8630, 8639) > 1);
    GotoIf(L1, NumberOfCoopClients() == 0);
    GotoIf(L2, NumberOfCoopClients() == 1);
    GotoIf(L3, NumberOfCoopClients() == 2);
L1:
    Goto(L4);
L2:
    SetSpEffect(2410810, 7500, true);
    SetSpEffect(2410811, 7500, true);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2410810);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2410811);
    Goto(L4);
L3:
    SetSpEffect(2410810, 7501, true);
    SetSpEffect(2410811, 7501, true);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2410810);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2410811);
    Goto(L4);
L4:
    if (EventFlag(gascoigne_defeat+13)) {
        WaitFixedTimeSeconds(2);
    }
    if (EventFlag(gascoigne_defeat+15)) {
        SetCharacterAIState(2410810, Enabled);
        DisplayBossHealthBar(Enabled, 2410810, 1, 271001);
        SetCharacterGravity(2410811, Enabled);
        WarpCharacterAndCopyFloor(2410811, TargetEntityType.Character, 2410810, 203, 2410810);
        SetCharacterAIState(2410811, Enabled);
        DisplayBossHealthBar(Enabled, 2410811, 0, 272001);
    } else {
        CreateReferredDamagePair(2410810, 2410811);
        if (!EventFlag(12414807)) {
            SetCharacterAIState(2410810, Enabled);
            DisplayBossHealthBar(Enabled, 2410810, 0, 271000);
        } else {
L5:
            SetCharacterAIState(2410811, Enabled);
            DisplayBossHealthBar(Enabled, 2410811, 0, 272000);
        }
    }
L6:
    CreatePlaylog(80);
    StartTimeMeasurement(2410010, 96, Enabled);
});

// Boss BGM ON_ Father Gascoigne
$Event(12414803, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12411800));
    if (!ThisEvent()) {
        SetMapSoundState(2413812, Disabled);
        SetMapSoundState(2413813, Disabled);
        flagArea &= !EventFlag(12411800) && EventFlag(12414802);
        if (!HasMultiplayerState(MultiplayerState.Host)) {
            flagArea &= EventFlag(12414801);
        }
        flagArea &= InArea(10000, 2412812);
        WaitFor(flagArea);
        EnableBossMapSound(2413812, Enabled);
        flagArea2 &= EventFlag(12414807);
    }
L0:
    flagArea2 &= !EventFlag(12411800) && EventFlag(12414802);
    if (!HasMultiplayerState(MultiplayerState.Host)) {
        flagArea2 &= EventFlag(12414801);
    }
    flagArea2 &= InArea(10000, 2412812);
    WaitFor(flagArea2);
    EnableBossMapSound(2413812, Disabled);
    WaitFixedTimeFrames(0);
    EnableBossMapSound(2413813, Enabled);
});

// Boss Camera_Father Gascoigne
$Event(12414804, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12411800));
    if (!EventFlag(12414807)) {
        WaitFor(HPRatio(2410810) > 0 && EntityInRadiusOfEntity(10000, 2410810, 5.5));
        SetLockcamSlotNumber(24, 1, 1);
        WaitFor(HPRatio(2410810) > 0 && !EntityInRadiusOfEntity(10000, 2410810, 6));
        SetLockcamSlotNumber(24, 1, 0);
        RestartEvent();
    }
L0:
    WaitFor(HPRatio(2410811) > 0 && EntityInRadiusOfEntity(10000, 2410811, 5.5));
    SetLockcamSlotNumber(24, 1, 1);
    WaitFor(HPRatio(2410811) > 0 && !EntityInRadiusOfEntity(10000, 2410811, 6));
    SetLockcamSlotNumber(24, 1, 0);
    RestartEvent();
});

// Boss BGM OFF_Father Gascoigne
$Event(12414805, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12411800));
    WaitFor(EventFlag(12411800));
    EnableBossMapSound(2413812, Disabled);
    EnableBossMapSound(2413813, Disabled);
    EnableBossMapSound(-1, Disabled);
});

// Boss transformation_Father Gascoigne
$Event(12414807, Default, function() {
    EndIf(EventFlag(12411800) || EventFlag(gascoigne_defeat+15));
    if (ThisEvent()) {
        ChangeCharacterEnableState(2410810, Disabled);
        EndEvent();
    }
L0:
    SetCharacterGravity(2410811, Disabled);
    hp = HPRatio(2410810) < 0.34;
    chr = CharacterHasEventMessage(2410810, 30);
    WaitFor(hp || chr);
    RequestCharacterAICommand(2410810, 40, 0);
    if (!chr.Passed) {
        WaitFor(CharacterHasEventMessage(2410810, 30));
    }
    WaitFixedTimeFrames(5);
    ChangeCharacterEnableState(2410810, Disabled);
    SetCharacterGravity(2410811, Enabled);
    SetNetworkUpdateRate(2410811, true, CharacterUpdateFrequency.AlwaysUpdate);
    WarpCharacterAndCopyFloor(2410811, TargetEntityType.Character, 2410810, 203, 2410810);
    ForceAnimationPlayback(2410811, 3030, false, true, false);
    SetCharacterAIState(2410811, Enabled);
    DisplayBossHealthBar(Enabled, 2410811, 0, 272000);
    EndIf(EventFlag(9337));
    $InitializeEvent(0, 9350, 1);
    SetEventFlag(9337, ON);
});

// Play special animation with Gascoigne (Boss room) music box
$Event(12414808, Default, function() {
    WaitFor(CharacterHasSpEffect(2410810, 4640) && HPRatio(2410810) >= 0.34);
    RequestCharacterAICommand(2410810, 60, 0);
    RequestCharacterAIReplan(2410810);
    WaitFor(CharacterHasEventMessage(2410810, 10));
    RequestCharacterAICommand(2410810, -1, 0);
    RequestCharacterAIReplan(2410810);
    WaitFixedTimeSeconds(10);
    WaitFor(CharacterHasSpEffect(2410810, 4640) && HPRatio(2410810) >= 0.34);
    RequestCharacterAICommand(2410810, 60, 0);
    RequestCharacterAIReplan(2410810);
    WaitFor(CharacterHasEventMessage(2410810, 10));
    RequestCharacterAICommand(2410810, -1, 0);
    RequestCharacterAIReplan(2410810);
    WaitFixedTimeSeconds(10);
    WaitFor(CharacterHasSpEffect(2410810, 4640) && HPRatio(2410810) >= 0.34);
    RequestCharacterAICommand(2410810, 60, 0);
    RequestCharacterAIReplan(2410810);
    WaitFor(CharacterHasEventMessage(2410810, 10));
    RequestCharacterAICommand(2410810, 40, 0);
    RequestCharacterAIReplan(2410810);
});

// Gascoigne (after transformation) playing a special animation with a music box
$Event(12414809, Default, function() {
    WaitFor(EventFlag(12414807));
    WaitFixedTimeSeconds(3);
    WaitFor(CharacterHasSpEffect(2410811, 4640));
    RequestCharacterAICommand(2410811, 50, 0);
    RequestCharacterAIReplan(2410811);
    WaitFor(CharacterHasEventMessage(2410811, 20));
    RequestCharacterAICommand(2410811, -1, 0);
    RequestCharacterAIReplan(2410811);
});

// Animation playback_target determination
$Event(12415225, Restart, function(chrEntityId, animationId, targetDistance) {
    EndIf(ThisEventSlot());
    areaChr = EntityInRadiusOfEntity(chrEntityId, 10000, targetDistance)
        && (CharacterAIState(chrEntityId, AIStateType.Recognition)
            || CharacterAIState(chrEntityId, AIStateType.Combat));
    dmg = HasDamageType(chrEntityId, 10000, DamageType.Unspecified);
    WaitFor(areaChr || dmg);
    EndIf(dmg.Passed);
    ForceAnimationPlayback(chrEntityId, animationId, false, false, false);
});

// Animation playback_target determination_logic stop version
$Event(12415228, Restart, function(chrEntityId, animationId, targetDistance) {
    EndIf(ThisEventSlot());
    SetCharacterAIState(chrEntityId, Disabled);
    area = EntityInRadiusOfEntity(chrEntityId, 10000, targetDistance);
    dmg = HasDamageType(chrEntityId, 10000, DamageType.Unspecified);
    WaitFor(area || dmg);
    SetCharacterAIState(chrEntityId, Enabled);
    EndIf(dmg.Passed);
    ForceAnimationPlayback(chrEntityId, animationId, false, false, false);
});

// Chara's Nest Change_Target
$Event(12415232, Restart, function(chrEntityId, areaEntityId) {
    if (!ThisEventSlot()) {
        WaitFor(
            CharacterAIState(chrEntityId, AIStateType.Recognition)
                || CharacterAIState(chrEntityId, AIStateType.Combat));
    }
L0:
    SetCharacterHome(chrEntityId, areaEntityId);
});

// Chara's nest change_area
$Event(12415233, Restart, function(areaEntityId, chrEntityId, areaEntityId2) {
    if (!ThisEventSlot()) {
        WaitFor(
            (CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.WhitePhantom))
                && InArea(10000, areaEntityId));
    }
L0:
    SetCharacterHome(chrEntityId, areaEntityId2);
});

// Join Gascoine_event version
$Event(12415234, Default, function(chrEntityId, chrEntityId2, chrEntityId3) {
    area = EntityInRadiusOfEntity(chrEntityId3, 10000, 10);
    chrArea = CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.WhitePhantom)
        || area
        || !EntityInRadiusOfEntity(chrEntityId3, 10000, 10);
    WaitFor(
        chrArea
            && CharacterDead(chrEntityId)
            && CharacterDead(chrEntityId2)
            && !CharacterDead(chrEntityId3)
            && chrArea);
    EndIf(area.Passed);
    WaitFor(EntityInRadiusOfEntity(10000, 0, 0));
    WaitFixedTimeFrames(10);
});

// Co-op with Gascoyne_Event version
$Event(12415236, Default, function(eventFlagId, chrEntityId, chrEntityId2, chrEntityId3, areaEntityId) {
    if (EventFlag(12415236) && HasMultiplayerState(MultiplayerState.Client)) {
        ChangeCharacterEnableState(chrEntityId2, Disabled);
        EndEvent();
    }
L0:
    ChangeCharacterEnableState(chrEntityId3, Disabled);
    WaitFor(
        (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && EventFlag(eventFlagId)
            && EventFlag(12415234)
            && !CharacterDead(chrEntityId2)
            && AllPlayersInArea(2412143)
            && (HPRatio(chrEntityId) <= 0.5 || ElapsedSeconds(40)));
    EndIf(EventFlag(12411700));
    SetEventFlag(12415236, ON);
    ChangeCharacterEnableState(chrEntityId2, Disabled);
    ChangeCharacterEnableState(chrEntityId3, Enabled);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        SetNetworkUpdateAuthority(chrEntityId3, AuthorityLevel.Forced);
    }
    WaitFixedTimeSeconds(1);
    SetCharacterHome(chrEntityId3, areaEntityId);
    RequestCharacterAICommand(chrEntityId3, 10, 0);
    RequestCharacterAIReplan(chrEntityId3);
    SetCharacterGravity(chrEntityId3, Disabled);
    SetCharacterMaphits(chrEntityId3, true);
    SetCharacterAnimationState(chrEntityId3, Disabled);
    WaitFor(EntityInRadiusOfEntity(chrEntityId3, 2410800, 3) || InArea(chrEntityId3, 2412801));
    RequestCharacterAICommand(chrEntityId3, -1, 0);
    ClearCharactersAITarget(chrEntityId3);
    RequestCharacterAIReplan(chrEntityId3);
    SetCharacterMaphits(chrEntityId3, false);
    SetCharacterAnimationState(chrEntityId3, Enabled);
    SetCharacterGravity(chrEntityId3, Enabled);
});

// Switch Gascoyne_Nest on the roof
$Event(12415238, Restart, function(areaEntityId, chrEntityId, areaEntityId2, areaEntityId3, areaEntityId4) {
    WaitFor(InArea(chrEntityId, areaEntityId2) && AllPlayersInArea(areaEntityId));
    SetCharacterHome(chrEntityId, areaEntityId3);
    RequestCharacterAICommand(chrEntityId, 10, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(
        InArea(chrEntityId, areaEntityId4)
            || HasDamageType(chrEntityId, 10000, DamageType.Unspecified));
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    RestartEvent();
});

// Waiting Event_Boulevard Crowd Platoon
$Event(12415250, Restart, function(chrEntityId, animationId, minTimeSeconds, maxTimeSeconds, areaEntityId) {
    WaitFor(InArea(chrEntityId, areaEntityId));
    WaitRandomTimeSeconds(minTimeSeconds, maxTimeSeconds);
    WaitFor(CharacterAIState(chrEntityId, AIStateType.Normal));
    ForceAnimationPlayback(chrEntityId, animationId, false, true, false);
    RestartEvent();
});

// Movement Event_Boulevard Crowd Platoon_Logic Support
$Event(12415255, Restart, function(chrEntityId) {
    WaitFor(
        CharacterAIState(chrEntityId, AIStateType.Recognition)
            || CharacterAIState(chrEntityId, AIStateType.Alert)
            || CharacterAIState(chrEntityId, AIStateType.Combat));
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    dmg = HasDamageType(chrEntityId, -1, DamageType.Unspecified);
    WaitFor(dmg || CharacterAIState(chrEntityId, AIStateType.Normal));
    RestartIf(dmg.Passed);
    RequestCharacterAICommand(chrEntityId, 20, 0);
    RequestCharacterAIReplan(chrEntityId);
    RestartEvent();
});

// Travel Event_Boulevard Crowd Platoon
$Event(12415260, Restart, function(chrEntityId, areaEntityId, targetDistance, areaEntityId2, areaEntityId3, areaEntityId4, areaEntityId5) {
    if (ThisEventSlot()) {
        SetCharacterHome(chrEntityId, areaEntityId5);
        ChangeCharacterPatrolBehavior(chrEntityId, 2413500);
        EndEvent();
    }
L0:
    WaitFor(
        (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && (InArea(10000, areaEntityId)
                || EntityInRadiusOfEntity(10000, chrEntityId, targetDistance)));
    SetCharacterHome(chrEntityId, areaEntityId2);
    RequestCharacterAICommand(chrEntityId, 20, 0);
    chr = CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom);
    cond |= InArea(10000, areaEntityId3) || EntityInRadiusOfEntity(10000, chrEntityId, targetDistance);
    areaChr = InArea(chrEntityId, areaEntityId2) && chr && cond;
    WaitFor(areaChr);
    if (!areaChr.Passed) {
        RequestCharacterAICommand(chrEntityId, -1, 0);
        cond |= CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom);
        WaitFor(
            cond
                && (InArea(10000, areaEntityId3)
                    || InArea(10000, areaEntityId4)
                    || EntityInRadiusOfEntity(10000, chrEntityId, targetDistance)));
        WaitRandomTimeFrames(0, 300);
    }
L1:
    SetCharacterHome(chrEntityId, areaEntityId5);
    RequestCharacterAICommand(chrEntityId, 20, 0);
    area = InArea(chrEntityId, areaEntityId5);
    WaitFor(
        (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && (InArea(10000, areaEntityId4)
                || EntityInRadiusOfEntity(10000, chrEntityId, targetDistance)));
    RequestCharacterAICommand(chrEntityId, -1, 0);
    ChangeCharacterPatrolBehavior(chrEntityId, 2413500);
});

// Movement Event_Boulevard Crowd Platoon_XX_Phase 1
$Event(12415295, Restart, function(chrEntityId, areaEntityId, targetDistance, areaEntityId2) {
    if (ThisEventSlot()) {
        SetCharacterHome(chrEntityId, areaEntityId2);
        EndEvent();
    }
L0:
    WaitFor(
        (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && (InArea(10000, areaEntityId)
                || EntityInRadiusOfEntity(10000, chrEntityId, targetDistance)));
    SetCharacterHome(chrEntityId, areaEntityId2);
    RequestCharacterAICommand(chrEntityId, 20, 0);
    RequestCharacterAIReplan(chrEntityId);
});

// Movement Event_Boulevard Crowd Platoon_XX_Phase 2
$Event(12415300, Restart, function(eventFlagId, chrEntityId, areaEntityId, areaEntityId2, targetDistance) {
    EndIf(ThisEventSlot());
    WaitFor(
        EventFlag(eventFlagId)
            && (InArea(chrEntityId, areaEntityId)
                || ((CharacterType(10000, TargetType.Alive)
                    || CharacterType(10000, TargetType.WhitePhantom))
                    && (InArea(10000, areaEntityId2)
                        || EntityInRadiusOfEntity(10000, chrEntityId, targetDistance)))));
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
});

// Movement Event_Boulevard Crowd Platoon_XX_Phase 3
$Event(12415305, Restart, function(eventFlagId, chrEntityId, areaEntityId, areaEntityId2, targetDistance, areaEntityId3) {
    if (ThisEventSlot()) {
        SetCharacterHome(chrEntityId, areaEntityId3);
        EndEvent();
    }
L0:
    WaitFor(
        EventFlag(eventFlagId)
            && (CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.WhitePhantom))
            && (InArea(10000, areaEntityId)
                || InArea(10000, areaEntityId2)
                || EntityInRadiusOfEntity(10000, chrEntityId, targetDistance)));
    WaitRandomTimeFrames(0, 30);
L1:
    SetCharacterHome(chrEntityId, areaEntityId3);
    RequestCharacterAICommand(chrEntityId, 20, 0);
    RequestCharacterAIReplan(chrEntityId);
});

// Movement Event_Boulevard Crowd Platoon_XX_Phase 4
$Event(12415310, Restart, function(eventFlagId, chrEntityId, areaEntityId, areaEntityId2, targetDistance, patrolInformationEntityId) {
    EndIf(ThisEventSlot());
    WaitFor(
        EventFlag(eventFlagId)
            && (InArea(chrEntityId, areaEntityId)
                || ((CharacterType(10000, TargetType.Alive)
                    || CharacterType(10000, TargetType.WhitePhantom))
                    && (InArea(10000, areaEntityId2)
                        || EntityInRadiusOfEntity(10000, chrEntityId, targetDistance)))));
    ChangeCharacterPatrolBehavior(chrEntityId, patrolInformationEntityId);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
});

// Boulevard Crowd Bustling Platoon_Start Patrol XX_Phase 1
$Event(12415315, Restart, function(chrEntityId, areaEntityId, targetDistance, areaEntityId2) {
    if (ThisEventSlot()) {
        SetCharacterHome(chrEntityId, areaEntityId2);
        EndEvent();
    }
L0:
    SetCharacterAIState(chrEntityId, Disabled);
    WaitFor(
        (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && (InArea(10000, areaEntityId)
                || EntityInRadiusOfEntity(10000, chrEntityId, targetDistance)));
    SetCharacterAIState(chrEntityId, Enabled);
    SetCharacterHome(chrEntityId, areaEntityId2);
});

// Boulevard Crowd Bustling Platoon_Patrol Start XX_Phase 2
$Event(12415320, Restart, function(eventFlagId, chrEntityId, areaEntityId, areaEntityId2, patrolInformationEntityId) {
    if (!ThisEventSlot()) {
        WaitFor(
            EventFlag(eventFlagId)
                && (InArea(chrEntityId, areaEntityId)
                    || ((CharacterType(10000, TargetType.Alive)
                        || CharacterType(10000, TargetType.WhitePhantom))
                        && InArea(10000, areaEntityId2))));
    }
L0:
    ChangeCharacterPatrolBehavior(chrEntityId, patrolInformationEntityId);
});

// Boulevard Crowd Bustling Platoon_Start Patrol XX_Phase 3
$Event(12415325, Restart, function(eventFlagId, chrEntityId, areaEntityId, patrolInformationEntityId) {
    if (!ThisEventSlot()) {
        WaitFor(
            EventFlag(eventFlagId)
                && (CharacterType(10000, TargetType.Alive)
                    || CharacterType(10000, TargetType.WhitePhantom))
                && InArea(10000, areaEntityId));
    }
L0:
    ChangeCharacterPatrolBehavior(chrEntityId, patrolInformationEntityId);
});

// Boulevard Crowd Bustling Platoon_Patrol Start XX_No Bell Version_First Half
$Event(12415330, Restart, function(chrEntityId, areaEntityId, areaEntityId2, targetDistance, areaEntityId3) {
    EndIf(ThisEventSlot());
    SetCharacterAIState(chrEntityId, Disabled);
    chr = CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom);
    area = InArea(10000, areaEntityId);
    area2 = InArea(10000, areaEntityId2);
    area3 = InArea(10000, areaEntityId3);
    area4 = EntityInRadiusOfEntity(10000, chrEntityId, targetDistance);
    WaitFor(chr && (area || area2 || area3 || area4));
    if (!area.Passed) {
        if (!area3.Passed) {
            if (!area4.Passed) {
                WaitFixedTimeSeconds(10);
            }
        }
    }
L1:
    SetCharacterAIState(chrEntityId, Enabled);
});

// Boulevard Crowd Bustling Platoon_Patrol Start XX_No Bell Version_Second Half
$Event(12415335, Restart, function(eventFlagId, chrEntityId, areaEntityId, areaEntityId2, patrolInformationEntityId) {
    if (!ThisEventSlot()) {
        WaitFor(
            EventFlag(eventFlagId)
                && (InArea(chrEntityId, areaEntityId)
                    || ((CharacterType(10000, TargetType.Alive)
                        || CharacterType(10000, TargetType.WhitePhantom))
                        && InArea(10000, areaEntityId2))));
    }
L0:
    ChangeCharacterPatrolBehavior(chrEntityId, patrolInformationEntityId);
});

// Start of enemy patrol_first_half_XX
$Event(12415340, Restart, function(chrEntityId, areaEntityId, targetDistance, areaEntityId2) {
    if (ThisEventSlot()) {
        SetCharacterHome(chrEntityId, areaEntityId2);
        EndEvent();
    }
L0:
    chr = CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom);
    area = InArea(10000, areaEntityId);
    area2 = EntityInRadiusOfEntity(10000, chrEntityId, targetDistance);
    chrArea = chr && (area || area2);
    dmg = HasDamageType(chrEntityId, -1, DamageType.Unspecified);
    WaitFor(chrArea || dmg);
    if (!area2.Passed) {
        if (!dmg.Passed) {
            RequestCharacterAICommand(chrEntityId, 20, 0);
        }
    }
L1:
    WaitFixedTimeFrames(10);
    SetCharacterHome(chrEntityId, areaEntityId2);
});

// Start of enemy patrol_late_XX
$Event(12415345, Restart, function(eventFlagId, chrEntityId, areaEntityId, areaEntityId2, targetDistance, value, patrolInformationEntityId) {
    if (!ThisEventSlot()) {
        WaitFor(
            EventFlag(eventFlagId)
                && (InArea(chrEntityId, areaEntityId)
                    || HasDamageType(chrEntityId, -1, DamageType.Unspecified)
                    || ((CharacterType(10000, TargetType.Alive)
                        || CharacterType(10000, TargetType.WhitePhantom))
                        && (InArea(10000, areaEntityId2)
                            || EntityInRadiusOfEntity(10000, chrEntityId, targetDistance)))));
        RequestCharacterAICommand(chrEntityId, -1, 0);
        RequestCharacterAIReplan(chrEntityId);
    }
L0:
    EndIf(value == 0);
    ChangeCharacterPatrolBehavior(chrEntityId, patrolInformationEntityId);
});

// Ladder and lever_starting point ladder_event version
$Event(12410286, Default, function(eventFlagId, eventFlagId2, objEntityId, objEntityId2) {
    if (ThisEventSlot()) {
        ReproduceObjectAnimation(objEntityId, 2);
        WaitFixedTimeSeconds(1);
        RegisterLadder(eventFlagId, eventFlagId2, objEntityId);
        SetObjactState(objEntityId2, 2410000, Disabled);
        EndEvent();
    }
L0:
    SetObjactState(objEntityId2, 2410000, Disabled);
    ForceAnimationPlayback(objEntityId, 2, false, false, false);
    RegisterLadder(eventFlagId, eventFlagId2, objEntityId);
});

// The wind blows over the bridge
$Event(12410290, Default, function() {
    DeleteMapSFX(2413110, false);
    WaitFor(
        (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, 2412150));
    SpawnMapSFX(2413110);
});

// Raven takes flight
$Event(12415360, Default, function(areaEntityId, entityId, animationId) {
    EndIf(ThisEventSlot());
    WaitFor(
        (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, areaEntityId));
    ForceAnimationPlayback(entityId, animationId, false, false, false);
});

// Event version_Crowd in front of boss room B_Nest switching
$Event(12415390, Default, function(chrEntityId) {
    WaitFor(
        CharacterAIState(chrEntityId, AIStateType.Recognition)
            || CharacterAIState(chrEntityId, AIStateType.Combat));
    SetCharacterHome(chrEntityId, 2412242);
    WaitFor(CharacterAIState(chrEntityId, AIStateType.Normal));
    SetCharacterHome(chrEntityId, 2412241);
    RestartEvent();
});

// Mad Dog in the Bonfire Square_Start patrol
$Event(12415700, Restart, function() {
    if (!ThisEventSlot()) {
        WaitFor(
            (CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.WhitePhantom))
                && EntityInRadiusOfEntity(2410270, 10000, 8));
    }
L0:
    ChangeCharacterPatrolBehavior(2410270, 2413510);
    RequestCharacterAIReplan(2410270);
});

// General Resident SE Regeneration
$Event(12415750, Restart, function(entityId, eventFlagId, eventFlagId2, eventFlagId3) {
    SetMapSoundState(entityId, Disabled);
    EndIf(EventFlag(eventFlagId3));
    WaitFor(!EventFlag(eventFlagId) && !EventFlag(eventFlagId2));
    SetMapSoundState(entityId, Enabled);
    WaitFor(EventFlag(eventFlagId) || EventFlag(eventFlagId2));
    SetMapSoundState(entityId, Disabled);
    RestartEvent();
});

// Severely ill _SE regeneration
$Event(12415759, Restart, function(entityId, eventFlagId, eventFlagId2, eventFlagId3) {
    SetMapSoundState(entityId, Disabled);
    EndIf(EventFlag(1245));
    EndIf(EventFlag(1246));
    EndIf(EventFlag(eventFlagId3));
    WaitFor(!EventFlag(eventFlagId) && !EventFlag(eventFlagId2));
    SetMapSoundState(entityId, Enabled);
    WaitFor(EventFlag(eventFlagId) || EventFlag(eventFlagId2));
    SetMapSoundState(entityId, Disabled);
    RestartEvent();
});

// Generic Resident_SFX control
$Event(12415770, Restart, function(objEntityId, eventFlagId, sfxId) {
    DeleteObjectfollowingSFX(objEntityId, true);
    EndIf(EventFlag(eventFlagId));
    CreateObjectfollowingSFX(objEntityId, 200, sfxId);
});

// Lonely old woman_SFX control
$Event(12415779, Restart, function(objEntityId) {
    CreateObjectfollowingSFX(objEntityId, 200, 924113);
    WaitFor(EventFlag(1180) && EventFlag(1193) && EventFlag(1194));
    DeleteObjectfollowingSFX(objEntityId, true);
});

// reach top of ladder
$Event(12410900, Default, function() {
    EndIf(ThisEvent());
    WaitFor(CharacterType(10000, TargetType.Alive) && InArea(10000, 2412911));
    SetEventFlag(9403, ON);
});

// Time Zone Change_Cathedral District B
$Event(12410310, Default, function() {
    GotoIf(S0, !EventFlag(12100956));
    GotoIf(L2, EventFlag(9802));
    GotoIf(L1, EventFlag(9801));
    GotoIf(L0, EventFlag(9800));
    Goto(S1);
S0:
    BatchSetEventFlags(12415000, 12415003, OFF);
    RandomlySetEventFlagInRange(12415000, 12415003, ON);
    WaitFixedTimeFrames(1);
    GotoIf(L0, EventFlag(12415000));
    GotoIf(L1, EventFlag(12415001));
    GotoIf(L2, EventFlag(12415002));
S1:
    ActivateMapPart(2414010, Enabled);
    ActivateMapPart(2414011, Disabled);
    ActivateMapPart(2414012, Disabled);
    ActivateMapPart(2414013, Disabled);
    ActivateMapPart(2414070, Disabled);
    ActivateMapPart(2414071, Disabled);
    DeleteMapSFX(2413350, false);
    DeleteMapSFX(2413380, false);
    Goto(L3);
L0:
    ActivateMapPart(2414010, Disabled);
    ActivateMapPart(2414011, Enabled);
    ActivateMapPart(2414012, Disabled);
    ActivateMapPart(2414013, Disabled);
    ActivateMapPart(2414070, Disabled);
    ActivateMapPart(2414071, Disabled);
    DeleteMapSFX(2413350, false);
    DeleteMapSFX(2413380, false);
    Goto(L3);
L1:
    ActivateMapPart(2414010, Disabled);
    ActivateMapPart(2414011, Disabled);
    ActivateMapPart(2414012, Enabled);
    ActivateMapPart(2414013, Disabled);
    ActivateMapPart(2414050, Disabled);
    ActivateMapPart(2414051, Disabled);
    DeleteMapSFX(2413300, false);
    DeleteMapSFX(2413301, false);
    DeleteMapSFX(2413302, false);
    DeleteMapSFX(2413303, false);
    DeleteMapSFX(2413304, false);
    DeleteMapSFX(2413305, false);
    DeleteMapSFX(2413380, false);
    Goto(L3);
L2:
    ActivateMapPart(2414010, Disabled);
    ActivateMapPart(2414011, Disabled);
    ActivateMapPart(2414012, Disabled);
    ActivateMapPart(2414013, Enabled);
    ActivateMapPart(2414050, Disabled);
    ActivateMapPart(2414051, Disabled);
    DeleteMapSFX(2413350, false);
L3:
    GotoIf(S2, !(EventFlag(12102036) && EventFlag(12100856)));
    Goto(L4);
S2:
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

// Tutorial_Messenger becomes visible
$Event(12410010, Default, function() {
    EndIf(EventFlag(9401));
    SetVisibilityOfMessage(2413601, Disabled);
    SetVisibilityOfMessage(2413604, Disabled);
});

// Tutorial_Messenger becomes visible_2
$Event(12410011, Default, function() {
    EndEvent();
    EndIf(ThisEvent());
    SetVisibilityOfMessage(2413603, Disabled);
    chrFlag &= CharacterType(10000, TargetType.Alive);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        chrFlag &= EventFlag(52410120);
    }
    WaitFor(chrFlag);
    SetVisibilityOfMessage(2413603, Enabled);
});

// Tutorial_Messenger becomes visible_3
$Event(12410012, Default, function() {
    EndIf(ThisEvent());
    SetVisibilityOfMessage(2413610, Disabled);
    SetVisibilityOfMessage(2413611, Disabled);
    WaitFor(EventFlag(9401));
    SetVisibilityOfMessage(2413610, Enabled);
    SetVisibilityOfMessage(2413611, Enabled);
});

// Tutorial_Wounded Hound
$Event(12410170, Restart, function() {
    if (ThisEvent()) {
        SetCharacterBackreadState(2410019, true);
        EndEvent();
    }
L0:
    SetCharacterHPBarDisplay(2410019, Disabled);
    SetSpEffect(2410019, 5617, false);
    SetSpEffect(2410019, 5708, false);
    WaitFixedTimeSeconds(3);
    SetCharacterHPBarDisplay(2410019, Enabled);
    WaitFor(CharacterDead(2410019));
    EndEvent();
});

// Tutorial_Sleeping enemies wake up_XX
$Event(12415100, Restart, function(chrEntityId) {
    EndIf(ThisEventSlot());
    SetCharacterAIState(chrEntityId, Disabled);
    ForceAnimationPlayback(chrEntityId, 7000, false, false, false);
    SetCharacterGravity(chrEntityId, Disabled);
    chr = CharacterAIState(2410019, AIStateType.Recognition)
        || CharacterAIState(2410019, AIStateType.Combat);
    dmg = HasDamageType(chrEntityId, -1, DamageType.Unspecified);
    WaitFor(chr || dmg);
    if (!dmg.Passed) {
        WaitRandomTimeSeconds(1, 3);
        ForceAnimationPlayback(chrEntityId, 7002, false, false, false);
    }
    SetCharacterAIState(chrEntityId, Enabled);
    SetCharacterGravity(chrEntityId, Enabled);
});

// Appearance of an invitation to the old castle in the clinic
$Event(12410510, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    EndIf(ThisEvent());
    if (!EventFlag(12410511)) {
        WaitFor(InArea(10000, 2412350));
        SetEventFlag(12410511, ON);
    }
L0:
    CreateObjectfollowingSFX(2411200, 200, 900201);
    WaitFor(ActionButtonInArea(2410060, 2411200));
    ForceAnimationPlayback(10000, 101140, false, false, false);
    AwardItemLot(2410990);
    DeleteObjectfollowingSFX(2411200, true);
});

// Special Standby_Cancel when mad dog barks
$Event(12410030, Default, function(chrEntityId, animationId, animationId2, chrEntityId2, aiId, aiId2) {
    ForceAnimationPlayback(chrEntityId, animationId, true, false, true);
    SetCharacterAIId(chrEntityId, aiId);
    SetCharacterGravity(chrEntityId, Disabled);
    chr = CharacterAIState(chrEntityId2, AIStateType.Recognition)
        || CharacterAIState(chrEntityId2, AIStateType.Combat);
    chr2 = CharacterAIState(chrEntityId, AIStateType.Recognition)
        || CharacterAIState(chrEntityId, AIStateType.Combat);
    dmg = HasDamageType(chrEntityId, -1, DamageType.Unspecified);
    WaitFor(chr || chr2 || dmg);
    SetCharacterGravity(chrEntityId, Enabled);
    if (!dmg.Passed) {
        ForceAnimationPlayback(chrEntityId2, 3021, false, false, false);
        WaitRandomTimeFrames(20, 70);
    }
L0:
    SetCharacterAIId(chrEntityId, aiId2);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, animationId2, false, false, false);
});

// Friend Call_Interruptable
$Event(12410040, Default, function(chrEntityId, aiId, aiId2, aiId3, chrEntityId2, animationId) {
    SetCharacterAIId(chrEntityId, aiId);
    chr = CharacterAIState(chrEntityId2, AIStateType.Recognition)
        || CharacterAIState(chrEntityId2, AIStateType.Combat);
    chr2 = CharacterAIState(chrEntityId, AIStateType.Recognition)
        || CharacterAIState(chrEntityId, AIStateType.Combat);
    WaitFor(chr || chr2);
    if (!chr2.Passed) {
        ForceAnimationPlayback(chrEntityId2, animationId, false, true, false);
        hp = HPRatio(chrEntityId2) == 1;
        hp2 = HPRatio(chrEntityId2) < 1;
        WaitFor(hp || hp2);
        if (!hp2.Passed) {
            SetCharacterAIId(chrEntityId, aiId2);
            WaitFixedTimeFrames(100);
        }
    }
L0:
    SetCharacterAIId(chrEntityId, aiId3);
});

// Friend Call_Uninterruptible
$Event(12410050, Default, function(chrEntityId, aiId, aiId2, aiId3, chrEntityId2, animationId) {
    SetCharacterAIId(chrEntityId, aiId);
    WaitFor(
        CharacterAIState(chrEntityId2, AIStateType.Recognition)
            || CharacterAIState(chrEntityId2, AIStateType.Combat));
    ForceAnimationPlayback(chrEntityId2, animationId, false, false, false);
    SetCharacterAIId(chrEntityId, aiId2);
    WaitFixedTimeSeconds(300);
    SetCharacterAIId(chrEntityId, aiId3);
});

// Carrion starts to move_XX
$Event(12415160, Restart, function(chrEntityId, animationId, animationId2) {
    WaitRandomTimeFrames(0, 50);
    ForceAnimationPlayback(chrEntityId, animationId, true, false, true);
    SetCharacterGravity(chrEntityId, Disabled);
    WaitFor(
        CharacterAIState(chrEntityId, AIStateType.Recognition)
            || CharacterAIState(chrEntityId, AIStateType.Combat));
    SetCharacterGravity(chrEntityId, Enabled);
    WaitRandomTimeFrames(0, 30);
    ForceAnimationPlayback(chrEntityId, animationId2, false, true, false);
});

// Treasure chest_open
$Event(12410600, Restart, function(objactEventFlag, objEntityId, objParameterId) {
    if (ThisEventSlot()) {
        ReproduceObjectAnimation(objEntityId, 0);
        SetObjactState(objEntityId, objParameterId, Disabled);
        SetObjectTreasureState(objEntityId, Enabled);
        EndEvent();
    }
    WaitFor(ObjActEventFlag(objactEventFlag));
    WaitFixedTimeFrames(10);
    SetObjectTreasureState(objEntityId, Enabled);
});

// Clinic_Get items when killing the moon messenger
$Event(12410630, Restart, function(chrEntityId, itemLotId) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    EndIf(ThisEventSlot());
    WaitFor(CharacterDead(chrEntityId));
    AwardItemLot(itemLotId);
});

// fake female doctor_initialization
$Event(12410645, Restart, function() {
    SetCharacterImmortality(2410703, Enabled);
    SetCharacterHPBarDisplay(2410703, Disabled);
    if (EventFlag(1140)) {
        SetCharacterBackreadState(2410703, true);
    }
L9:
    if (EventFlag(1141)) {
        SetCharacterBackreadState(2410710, false);
        SetCharacterBackreadState(2410711, true);
        SetCharacterAnimationState(2410710, Disabled);
    }
L0:
    if (EventFlag(1142)) {
        SetCharacterBackreadState(2410710, false);
        SetCharacterBackreadState(2410711, true);
        SetCharacterAnimationState(2410710, Disabled);
    }
L7:
    if (EventFlag(1143)) {
        SetCharacterBackreadState(2410710, false);
        SetCharacterBackreadState(2410711, true);
    }
L8:
    if (EventFlag(1144)) {
        SetCharacterBackreadState(2410710, false);
        SetCharacterBackreadState(2410711, true);
        SetCharacterAnimationState(2410710, Disabled);
    }
L1:
    if (EventFlag(1145)) {
        SetCharacterBackreadState(2410703, true);
        SetCharacterBackreadState(2410710, false);
        SetCharacterBackreadState(2410711, true);
        WarpCharacterAndSetFloor(2410710, TargetEntityType.Area, 2412172, -1, 0);
        SetCharacterHome(2410710, 2412172);
        SetCharacterTeamType(2410710, TeamType.Enemy1);
    }
L2:
    if (EventFlag(1146)) {
        SetCharacterBackreadState(2410703, true);
        SetCharacterBackreadState(2410710, true);
        SetCharacterBackreadState(2410711, false);
        ForceAnimationPlayback(2410711, 103000, false, false, false);
    }
L3:
    if (EventFlag(1147)) {
        SetCharacterBackreadState(2410703, true);
        SetCharacterBackreadState(2410710, true);
        SetCharacterBackreadState(2410711, true);
        SetCharacterBackreadState(2410703, true);
    }
L4:
    if (EventFlag(1148)) {
        SetCharacterBackreadState(2410703, true);
        SetCharacterBackreadState(2410710, true);
        SetCharacterBackreadState(2410711, true);
        WarpCharacterAndSetFloor(2410710, TargetEntityType.Area, 2412172, -1, 0);
        WaitFixedTimeFrames(1);
        ForceCharacterTreasure(2410710);
    }
L5:
    EndIf(!EventFlag(1149));
    SetCharacterBackreadState(2410703, true);
    SetCharacterBackreadState(2410710, true);
    SetCharacterBackreadState(2410711, false);
    EzstateInstructionRequest(2410711, 0, 1);
    ForceCharacterTreasure(2410711);
});

// Fake female doctor is not there yet
$Event(12410650, Restart, function() {
L0:
    WaitFor(!AnyBatchEventFlags(1141, 1159));
    SetCharacterBackreadState(2410710, true);
    BatchSetEventFlags(1140, 1159, OFF);
    SetEventFlag(1140, ON);
});

// Fake Female Doctor_Normal
$Event(12410651, Restart, function() {
    EndIf(EventFlag(1148));
    EndIf(EventFlag(1149));
    EndIf(EventFlag(1141));
    EndIf(ThisEvent());
    WaitFor(EventFlag(9800));
    SetCharacterBackreadState(2410703, false);
    SetCharacterBackreadState(2410710, false);
    SetCharacterAnimationState(2410710, Disabled);
    BatchSetEventFlags(1140, 1159, OFF);
    SetEventFlag(1141, ON);
});

// Fake Female Doctor_Accepting
$Event(12410652, Restart, function() {
    EndIf(EventFlag(1148));
    EndIf(EventFlag(1149));
    EndIf(ThisEvent());
    WaitFor(EventFlag(72410320) && EventFlag(1141));
    BatchSetEventFlags(1140, 1159, OFF);
    SetEventFlag(1142, ON);
});

// Fake Female Doctor_Accomplice (clinic)
$Event(12410653, Restart, function() {
    EndIf(EventFlag(1148));
    EndIf(EventFlag(1149));
    EndIf(EventFlag(1145));
    EndIf(EventFlag(1146));
    WaitFor(
        InArea(10000, 2412170)
            && !EventFlag(1140)
            && !EventFlag(1145)
            && !EventFlag(1146)
            && !EventFlag(1147)
            && !EventFlag(1148)
            && !EventFlag(1149)
            && !CharacterDead(2410710));
    SetDistanceLimitForConversationStateProcessing(2410710, 40.5);
    BatchSetEventFlags(1140, 1159, OFF);
    SetEventFlag(1143, ON);
    RestartEvent();
});

// Fake Female Doctor_Accomplice (outside)
$Event(12410654, Restart, function() {
    EndIf(EventFlag(1148));
    EndIf(EventFlag(1149));
    EndIf(EventFlag(1145));
    EndIf(EventFlag(1146));
    WaitFor(EventFlag(1143) && InArea(10000, 2412171));
    SetDistanceLimitForConversationStateProcessing(2410710, 17);
    BatchSetEventFlags(1140, 1159, OFF);
    SetEventFlag(1144, ON);
    RestartEvent();
});

// Fake female doctor_hostile
$Event(12410655, Restart, function() {
    EndIf(EventFlag(1148));
    EndIf(EventFlag(1149));
L0:
    SetCharacterAIState(2410710, Disabled);
    WaitFor(
        InArea(10000, 2412190)
            && !EventFlag(1140)
            && !EventFlag(1146)
            && !EventFlag(1147)
            && !EventFlag(1148)
            && !EventFlag(1149));
    SetCharacterAIState(2410710, Enabled);
    SetCharacterTeamType(2410710, TeamType.Enemy1);
    BatchSetEventFlags(1140, 1159, OFF);
    SetEventFlag(1145, ON);
    SaveRequest(0);
});

// Fake female doctor_crazy
$Event(12410656, Restart, function() {
    EndIf(EventFlag(1148));
    EndIf(EventFlag(1149));
    WaitFor(EventFlag(9802) && !CharacterDead(2410710));
    SetCharacterBackreadState(2410703, true);
    SetCharacterBackreadState(2410710, true);
    SetCharacterBackreadState(2410711, false);
    ForceAnimationPlayback(2410711, 103000, false, false, false);
    SetCharacterAnimationState(2410711, Enabled);
    BatchSetEventFlags(1140, 1159, OFF);
    SetEventFlag(1146, ON);
});

// Fake Female Doctor_Nowhere
$Event(12410657, Restart, function() {
    EndIf(EventFlag(1148));
    EndIf(EventFlag(1149));
    EndIf(EventFlag(1147));
    WaitFor(EventFlag(72410326));
    SetCharacterBackreadState(2410703, true);
    BatchSetEventFlags(1140, 1159, OFF);
    SetEventFlag(1147, ON);
    SaveRequest(0);
});

// Fake Female Doctor_Death
$Event(12410658, Restart, function() {
    EndIf(EventFlag(1149));
    WaitFor(HPRatio(2410710) <= 0 && EventFlag(1145));
    BatchSetEventFlags(1140, 1159, OFF);
    SetEventFlag(1148, ON);
    SaveRequest(0);
});

// Fake female doctor_placement position warp
$Event(12410659, Restart, function() {
    areaFlag = InArea(10000, 2412170) && EventFlag(1143);
    areaFlag2 = InArea(10000, 2412171) && !EventFlag(62411300) && EventFlag(1144);
    areaFlag3 = InArea(10000, 2412171) && EventFlag(1147);
    WaitFor(areaFlag || areaFlag2 || areaFlag3);
    GotoIf(L0, areaFlag2.Passed);
    GotoIf(L1, areaFlag3.Passed);
    WarpCharacterAndSetFloor(2410710, TargetEntityType.Area, 2412172, -1, 0);
    SetCharacterHome(2410710, 2412172);
    SetEventFlag(72410337, ON);
    SetCharacterAnimationState(2410710, Enabled);
    SetCharacterBackreadState(2410703, true);
    RestartEvent();
L0:
    WarpCharacterAndSetFloor(2410710, TargetEntityType.Area, 2412173, -1, 0);
    SetCharacterHome(2410710, 2412173);
    SetEventFlag(72410337, OFF);
    SetCharacterAnimationState(2410710, Disabled);
    SetCharacterBackreadState(2410703, false);
    RestartEvent();
L1:
    SetCharacterBackreadState(2410710, true);
});

// Fake female doctor_acceptance count
$Event(12410661, Restart, function() {
    WaitFor(EventValue(12410646, 4) >= 4);
    SetEventFlag(72410328, ON);
});

// Fake female doctor_protected a resident
$Event(12410662, Restart, function(eventFlagId, eventFlagId2, eventFlagId3) {
    EndIf(ThisEventSlot());
    flag = EventFlag(eventFlagId) && EventFlag(1142);
    WaitFor(flag || (EventFlag(eventFlagId) && EventFlag(1144)));
    if (flag.Passed) {
        IncrementEventValue(12410646, 4, 10);
        SetEventFlag(eventFlagId3, ON);
        BatchSetEventFlags(72410331, 72410332, OFF);
        SetEventFlag(eventFlagId2, ON);
        EndEvent();
    }
L0:
    IncrementEventValue(12410646, 4, 10);
    SetEventFlag(eventFlagId3, ON);
    BatchSetEventFlags(72410331, 72410332, OFF);
    SetEventFlag(72410334, ON);
});

// Fake female doctor_all protected
$Event(12410668, Restart, function() {
    EndIf(ThisEvent());
    WaitFor(
        EventFlag(1163)
            && EventFlag(1204)
            && EventFlag(1268)
            && EventFlag(1190)
            && EventFlag(1223)
            && EventFlag(1309)
            && EventFlag(72410336));
    BatchSetEventFlags(72410331, 72410332, OFF);
    SetEventFlag(72410333, ON);
});

// Fake Female Doctor_Moon Emissary Generated_XX
$Event(12410669, Restart, function(chrEntityId, eventFlagId, animationId) {
    if (ThisEventSlot()) {
        ChangeCharacterEnableState(chrEntityId, Enabled);
        WaitFixedTimeFrames(1);
        ForceAnimationPlayback(chrEntityId, animationId, true, false, false);
        EndEvent();
    }
L0:
    ChangeCharacterEnableState(chrEntityId, Disabled);
    WaitFor(EventFlag(eventFlagId));
    ChangeCharacterEnableState(chrEntityId, Enabled);
    WaitFixedTimeFrames(1);
    ForceAnimationPlayback(chrEntityId, animationId, true, false, false);
});

// Fake female doctor_PC attacks the door
$Event(12410676, Restart, function() {
    WaitFor(
        CharacterType(10000, TargetType.Alive)
            && HasDamageType(2410703, 10000, DamageType.Unspecified)
            && (EventFlag(1141) || EventFlag(1142) || EventFlag(1144)));
    if (!AllBatchEventFlags(72410344, 72410346)) {
        if (EventFlag(72410320)) {
            if (EventFlag(72410344)) {
                if (EventFlag(72410345)) {
                    SetEventFlag(72410346, ON);
                }
L1:
                SetEventFlag(72410345, ON);
            }
L2:
            SetEventFlag(72410344, ON);
        }
L3:
        SetEventFlag(72410329, ON);
        WaitFor(!EventFlag(72410329));
        RestartEvent();
    }
L0:
    SetEventFlag(72410329, ON);
    SaveRequest(0);
});

// Fake female doctor_forced death
$Event(12410677, Default, function() {
    EndIf(EventFlag(1148));
    EndIf(EventFlag(1149));
    WaitFor(EventFlag(1146) && CharacterDamagedBy(2410711, 10000));
    ForceAnimationPlayback(2410711, 103001, false, false, false);
    ForceCharacterDeath(2410711, true);
    BatchSetEventFlags(1140, 1159, OFF);
    SetEventFlag(1149, ON);
    SaveRequest(0);
});

// Fake female doctor_Disable the logic of the messenger from the moon
$Event(12410680, Default, function(chrEntityId) {
    WaitFor(CharacterDamagedBy(chrEntityId, 10000));
    SetCharacterAIId(chrEntityId, 250000);
});

// Fake female doctor_ SAN value UP with item acquisition (normal)
$Event(12410687, Default, function(eventFlagId, eventFlagId2) {
    EndIf(EventFlag(eventFlagId));
    WaitFor(EventFlag(eventFlagId2));
    $InitializeEvent(0, 9350, 1);
});

// Fake female doctor_ SAN value UP with item acquisition (complicity)
$Event(12410693, Default, function(eventFlagId, eventFlagId2) {
    EndIf(EventFlag(eventFlagId));
    WaitFor(EventFlag(eventFlagId2));
    $InitializeEvent(0, 9350, 2);
});

// Fake Female Doctor_Warning
$Event(12410700, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && !InArea(10000, 2412174));
    SetEventFlag(12410700, OFF);
    WaitFor(CharacterType(10000, TargetType.Alive) && InArea(10000, 2412174));
    RestartEvent();
});

// girl_state transition
$Event(12410701, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    if (EventFlag(1261) && EventFlag(9800)) {
        BatchSetEventFlags(1260, 1279, OFF);
        SetEventFlag(1262, ON);
    }
L8:
    if (EventFlag(1260) && EventFlag(9801)) {
        BatchSetEventFlags(1260, 1279, OFF);
        SetEventFlag(1270, ON);
    }
L0:
    if ((EventFlag(1260) || EventFlag(1261) || EventFlag(1262)) && EventFlag(9801)) {
        BatchSetEventFlags(1260, 1279, OFF);
        SetEventFlag(1263, ON);
    }
L9:
    if (EventFlag(1263) && (EventFlag(9802) || EventFlag(72410407))) {
        BatchSetEventFlags(1260, 1279, OFF);
        SetEventFlag(1269, ON);
    }
L1:
    if (EventFlag(1264)) {
        BatchSetEventFlags(1260, 1279, OFF);
        SetEventFlag(1267, ON);
    }
L2:
    if (EventFlag(1265)) {
        BatchSetEventFlags(1260, 1279, OFF);
        SetEventFlag(1267, ON);
    }
L3:
    if (EventFlag(1266)) {
        BatchSetEventFlags(1260, 1279, OFF);
        SetEventFlag(1268, ON);
    }
L4:
    if (EventFlag(1270) && (EventFlag(9802) || EventFlag(72410415))) {
        BatchSetEventFlags(1260, 1279, OFF);
        SetEventFlag(1269, ON);
    }
L7:
    if (EventFlag(9802) && EventFlag(1267)) {
        BatchSetEventFlags(1260, 1279, OFF);
        SetEventFlag(1271, ON);
    }
L5:
    if (EventFlag(1272)) {
        BatchSetEventFlags(1260, 1279, OFF);
        SetEventFlag(1273, ON);
    }
L6:
    NoOp();
});

// girl_initialization
$Event(12410702, Default, function() {
    if (CharacterType(10000, TargetType.Alive)) {
        SetEventFlag(72410414, OFF);
    }
L0:
    DeactivateObject(2410761, Disabled);
    SetCharacterHPBarDisplay(2410762, Disabled);
    SetCharacterImmortality(2410762, Enabled);
    if (!EventFlag(1273)) {
        DeactivateObject(2410851, Disabled);
        SetObjectTreasureState(2410851, Disabled);
        EndEvent();
    }
L1:
    DeactivateObject(2410851, Enabled);
    SetObjectTreasureState(2410851, Enabled);
    ReproduceObjectDestruction(2410852, 1);
    EndEvent();
});

// To the beginning of the girl looking for her mother
$Event(12410703, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(EventFlag(12411802) && EventFlag(1260) && EventFlag(72410413));
    BatchSetEventFlags(1260, 1279, OFF);
    SetEventFlag(1261, ON);
});

// Girl_desperate because her mother died
$Event(12410704, Default, function() {
    WaitFor(EventFlag(72410403));
    SetEventFlag(72410403, OFF);
    BatchSetEventFlags(1260, 1279, OFF);
    SetEventFlag(1264, ON);
});

// girl_heads to shelter
$Event(12410705, Default, function() {
    WaitFor(EventFlag(72410404));
    SetEventFlag(72410404, OFF);
    BatchSetEventFlags(1260, 1279, OFF);
    SetEventFlag(1265, ON);
});

// Girl goes to the clinic
$Event(12410706, Default, function() {
    WaitFor(EventFlag(72410405));
    SetEventFlag(72410405, OFF);
    BatchSetEventFlags(1260, 1279, OFF);
    SetEventFlag(1266, ON);
});

// Girl_PC attacks the door
$Event(12410710, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    SetEventFlag(72410406, OFF);
    SetCharacterHPBarDisplay(2410762, Disabled);
    WaitFor(CharacterDamagedBy(2410762, 10000));
    SetEventFlag(72410406, ON);
    WaitFixedTimeSeconds(2);
    RestartEvent();
});

// Girl_Vampire pig drops a bloody ribbon
$Event(12410713, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    SetEventFlag(72410410, ON);
    WaitFor(EventFlag(1271) || EventFlag(1267));
    WaitFor(!PlayerHasItem(ItemType.Goods, 4904));
    SetEventFlag(72410410, OFF);
});

// girl_music box control
$Event(12410715, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    if (EventFlag(1269)) {
        SetMapSoundState(2413100, Disabled);
        EndEvent();
    }
L0:
    if (EventFlag(72410402)) {
        SetMapSoundState(2413100, Disabled);
        EndEvent();
    }
L1:
    SetMapSoundState(2413100, Enabled);
    SetEventFlag(72410412, OFF);
    WaitFor(!EventFlag(1270) && EventFlag(72410412));
    SetMapSoundState(2413100, Disabled);
});

// girl_girl's sister_window light control
$Event(12410716, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    if (!EventFlag(1267)) {
        if (!EventFlag(1268)) {
            if (!EventFlag(1269)) {
                if (!EventFlag(1273)) {
                    EndEvent();
                }
            }
        }
    }
L1:
    DeleteMapSFX(2413701, false);
});

// Give the girl's sister_ribbon
$Event(12410721, Default, function() {
    WaitFor(EventFlag(72410421));
    SetEventFlag(72410421, OFF);
    BatchSetEventFlags(1260, 1279, OFF);
    SetEventFlag(1272, ON);
});

// Clinic female doctor_initialization
$Event(12410729, Restart, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    SetCharacterImmortality(2410702, Enabled);
    SetCharacterHPBarDisplay(2410702, Disabled);
    if (EventFlag(1120)) {
        SetCharacterBackreadState(2410702, true);
        ChangeCharacterEnableState(2410700, Disabled);
    }
L0:
    if (EventFlag(1121)) {
        SetCharacterBackreadState(2410702, false);
    }
L1:
    if (EventFlag(1122)) {
        SetCharacterBackreadState(2410702, false);
    }
L2:
    if (EventFlag(1123)) {
        SetCharacterBackreadState(2410702, true);
        SetCharacterBackreadState(2410700, true);
    }
L3:
    EndIf(!EventFlag(1124));
    SetCharacterBackreadState(2410702, true);
    SetCharacterBackreadState(2410700, true);
});

// Clinic Female Doctor_ Comes to Existence
$Event(12410730, Restart, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(EventFlag(9401) && EventFlag(1120));
    SetCharacterBackreadState(2410702, false);
    BatchSetEventFlags(1120, 1124, OFF);
    SetEventFlag(1121, ON);
});

// Female doctor at the clinic_Favorability increased
$Event(12410731, Restart, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    flag = EventFlag(72410305) && EventFlag(1121);
    WaitFor(flag || EventFlag(1123) || EventFlag(1124));
    EndIf(!flag.Passed);
    BatchSetEventFlags(1120, 1124, OFF);
    SetEventFlag(1122, ON);
});

// Female doctor at clinic _ Tired of being hit on the door
$Event(12410732, Restart, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    flag = EventFlag(72410309) && (EventFlag(1121) || EventFlag(1122));
    WaitFor(flag || EventFlag(1123) || EventFlag(1124));
    EndIf(!flag.Passed);
    SetCharacterBackreadState(2410702, true);
    BatchSetEventFlags(1120, 1124, OFF);
    SetEventFlag(1123, ON);
});

// Female doctor in the clinic_nowhere
$Event(12410733, Restart, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(EventFlag(9800));
    BatchSetEventFlags(1120, 1124, OFF);
    SetEventFlag(1124, ON);
    ChangeCharacterEnableState(2410700, Disabled);
    SetCharacterBackreadState(2410702, true);
});

// Clinic female doctor_PC attacks the door
$Event(12410734, Restart, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(CharacterDamagedBy(2410702, 10000));
    SetEventFlag(72410306, ON);
    WaitFixedTimeSeconds(2);
    RestartEvent();
});

// The female doctor at the clinic is across the road, so the flag is turned off immediately after obtaining the item
$Event(12410736, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    flag = EventFlag(72410301);
    flag2 = !EventFlag(72410301);
    WaitFor(flag || flag2);
    EndIf(flag2.Passed);
    SetEventFlag(72410301, OFF);
});

// female doctor in the clinic_model display
$Event(12410737, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    ChangeCharacterEnableState(2410700, Disabled);
    WaitFor(EventFlag(1121) || EventFlag(1122) || EventFlag(1123));
    ChangeCharacterEnableState(2410700, Enabled);
    SetCharacterAnimationState(2410700, Disabled);
});

// Female doctor at the clinic_Turn off the flag of the conversation that the item cannot be given
$Event(12410738, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    if (!EventFlag(72410311)) {
        WaitFor(!CharacterBackreadStatus(2410700) && EventFlag(72410311));
    }
L0:
    SetEventFlag(72410311, OFF);
    RestartEvent();
});

// Clinic Female Doctor_Moon messenger model switching
$Event(12410739, Default, function() {
    areaFlagChr = InArea(10000, 2412170)
        && (EventFlag(1143) || AnyBatchEventFlags(1145, 1149))
        && EventFlag(9800)
        && !CharacterBackreadStatus(2410290);
    WaitFor(
        areaFlagChr
            || (InArea(10000, 2412171)
                && !EventFlag(62411300)
                && EventFlag(1144)
                && EventFlag(9800)
                && CharacterBackreadStatus(2410290))
            || ((EventFlag(1141) || EventFlag(1142)) && CharacterBackreadStatus(2410290)));
    if (areaFlagChr.Passed) {
        SetCharacterBackreadState(2410290, false);
        RestartEvent();
    }
L0:
    SetCharacterBackreadState(2410290, true);
    RestartEvent();
});

// lonely old woman_initialization
$Event(12410740, Default, function() {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    if (!EventFlag(1180)) {
        EndEvent();
    }
L1:
    NoOp();
});

// lonely old woman_death
$Event(12410741, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(EventFlag(1180) && EventFlag(9802));
    BatchSetEventFlags(1180, 1199, OFF);
    SetEventFlag(1195, ON);
    SaveRequest(0);
});

// Lonely old woman moving to shelter
$Event(12410742, Default, function() {
    WaitFor(EventFlag(72410390));
    SetEventFlag(72410390, OFF);
    BatchSetEventFlags(1180, 1199, OFF);
    SetEventFlag(1193, ON);
});

// Lonely old woman_moving to the infirmary
$Event(12410743, Default, function() {
    WaitFor(EventFlag(72410391));
    SetEventFlag(72410391, OFF);
    BatchSetEventFlags(1180, 1199, OFF);
    SetEventFlag(1194, ON);
});

// Lonely Old Woman_To Shelter
$Event(12410744, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    if (!EventFlag(1193)) {
        EndEvent();
    }
L0:
    BatchSetEventFlags(1180, 1199, OFF);
    SetEventFlag(1181, ON);
});

// Lonely old woman_to the clinic
$Event(12410745, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    if (!EventFlag(1194)) {
        EndEvent();
    }
L0:
    BatchSetEventFlags(1180, 1199, OFF);
    SetEventFlag(1190, ON);
});

// lonely old woman_dog barking at home_initialization
$Event(12410746, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    if (!EventFlag(72410382)) {
        if (!EventFlag(9802)) {
            SetCharacterAIState(2410111, Disabled);
            EndEvent();
        }
    }
L0:
    SetCharacterBackreadState(2410111, true);
});

// lonely old woman_dog barking at home_logic on
$Event(12410747, Default, function() {
    WaitFor(
        EntityInRadiusOfEntity(10000, 2410111, 3)
            || HasDamageType(2410111, -1, DamageType.Unspecified));
    SetCharacterAIState(2410111, Enabled);
});

// Lonely old woman_Dog barking at home_Call conversation kick
$Event(12410748, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    SetEventFlag(72410393, OFF);
    WaitFor(InArea(10000, 2412280) && CharacterDead(2410111));
    WaitFixedTimeFrames(30);
    SetEventFlag(72410393, ON);
    WaitFor(!InArea(10000, 2412280));
    SetEventFlag(72410393, OFF);
    RestartEvent();
});

// lonely old woman_dog barking at home_animation control
$Event(12410749, Default, function() {
    WaitFor(CharacterBackreadStatus(2410111));
    if (CharacterAIState(2410111, AIStateType.Recognition)
        || CharacterAIState(2410111, AIStateType.Alert)
        || CharacterAIState(2410111, AIStateType.Combat)) {
        EndEvent();
    }
L0:
    ForceAnimationPlayback(2410111, 3023, false, true, false);
    WaitFor(RandomElapsedFrames(30, 60));
    RestartEvent();
});

// lonely old woman_knock
$Event(12410750, Default, function(eventFlagId, actionButtonParameterId, areaEntityId) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(EventFlag(72410382));
    SetEventFlag(eventFlagId, OFF);
    WaitFor(!EventFlag(eventFlagId) && ActionButtonInArea(actionButtonParameterId, areaEntityId));
    IssueShortWarpRequest(10000, TargetEntityType.Object, areaEntityId, 210);
    ForceAnimationPlayback(10000, 101320, false, false, false);
    WaitFixedTimeFrames(25);
    WaitFixedTimeFrames(20);
    SetEventFlag(eventFlagId, ON);
    WaitFor(!EventFlag(eventFlagId));
    RestartEvent();
});

// Severely ill person_initialization
$Event(12410760, Default, function() {
    if (CharacterType(10000, TargetType.Alive)) {
        SetEventFlag(72410513, OFF);
        SetEventFlag(72410514, OFF);
        SetEventFlag(72410515, OFF);
        SetEventFlag(72410516, OFF);
    }
L0:
    SetCharacterHPBarDisplay(2410782, Disabled);
    SetCharacterImmortality(2410782, Enabled);
    GotoIf(L1, EventFlag(1240));
    GotoIf(L1, EventFlag(1241));
    GotoIf(L1, EventFlag(1242));
    GotoIf(L1, EventFlag(1243));
    GotoIf(L1, EventFlag(1244));
    GotoIf(L2, EventFlag(1246));
    GotoIf(L3, EventFlag(1245));
    SetCharacterBackreadState(2410781, true);
    DeleteMapSFX(2413700, false);
    EndEvent();
L1:
    SetCharacterBackreadState(2410781, true);
    EndEvent();
L2:
    SetCharacterBackreadState(2410781, false);
    RequestObjectDestruction(2410784, 1);
    DeleteMapSFX(2413700, false);
    EndEvent();
L3:
    ChangeCharacterEnableState(2410781, Disabled);
    RequestObjectDestruction(2410784, 1);
    DeleteMapSFX(2413700, false);
    ForceCharacterTreasure(2410781);
    EndEvent();
});

// seriously ill_death
$Event(12410761, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(CharacterDead(2410781));
    BatchSetEventFlags(1240, 1259, OFF);
    SetEventFlag(1245, ON);
    SaveRequest(0);
});

// Severely ill person_deteriorating condition
$Event(12410762, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    EndIf(EventFlag(1245));
    GotoIf(L0, (EventFlag(9800) || EventFlag(9801) || EventFlag(9802)) && EventFlag(1240));
    Goto(L1);
L0:
    BatchSetEventFlags(1240, 1259, OFF);
    SetEventFlag(1241, ON);
L1:
    GotoIf(L2, (EventFlag(9801) || EventFlag(9802)) && EventFlag(1241));
    Goto(L3);
L2:
    BatchSetEventFlags(1240, 1259, OFF);
    SetEventFlag(1242, ON);
L3:
    GotoIf(L4, (EventFlag(1242) && EventFlag(72410504)) || EventFlag(9802));
    Goto(L5);
L4:
    BatchSetEventFlags(1240, 1259, OFF);
    SetEventFlag(1243, ON);
L5:
    if (!(EventFlag(9802) && EventFlag(1243))) {
        EndEvent();
    }
L6:
    BatchSetEventFlags(1240, 1259, OFF);
    SetEventFlag(1246, ON);
});

// Severely ill person was knocked on the door
$Event(12410763, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(
        HasDamageType(2410782, -1, DamageType.Unspecified)
            && (EventFlag(1240) || EventFlag(1241) || EventFlag(1242)));
    if (!AllBatchEventFlags(72410515, 72410516)) {
        if (EventFlag(72410500)) {
            if (EventFlag(72410515)) {
                SetEventFlag(72410516, ON);
            }
L1:
            SetEventFlag(72410515, ON);
        }
L2:
        SetEventFlag(72410513, ON);
        WaitFor(EventFlag(72410514));
        WaitFor(!EventFlag(72410514));
        RestartEvent();
    }
L0:
    SetEventFlag(72410513, ON);
    BatchSetEventFlags(1240, 1259, OFF);
    SetEventFlag(1244, ON);
    SaveRequest(0);
});

// no emissary respawn from the moon_XX
$Event(12410770, Default, function(chrEntityId) {
    if (ThisEventSlot()) {
        ChangeCharacterEnableState(chrEntityId, Disabled);
        ForceCharacterTreasure(chrEntityId);
        EndEvent();
    }
L0:
    WaitFor(CharacterDead(chrEntityId));
    WaitFixedTimeFrames(1);
});

// Gascoine (boss room)_initialization
$Event(12410780, Restart, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    EndIf(EventFlag(1293));
    if (!EventFlag(12410785)) {
        BatchSetEventFlags(1280, 1299, OFF);
        SetEventFlag(1290, ON);
    } else {
L0:
        BatchSetEventFlags(1280, 1299, OFF);
        SetEventFlag(1291, ON);
        Goto(L9);
    }
L9:
    SetDistanceLimitForConversationStateProcessing(2410810, 80);
    EndEvent();
});

// Gascoine (boss room)_Meeting
$Event(12410785, Restart, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    EndIf(EventFlag(1293));
    WaitFor(EventFlag(1290) && EventFlag(72410530));
    BatchSetEventFlags(1280, 1299, OFF);
    SetEventFlag(1291, ON);
});

// Gascoyne (boss room) _ beast
$Event(12410786, Restart, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    EndIf(EventFlag(1293));
    WaitFor(EventFlag(12414807) && (EventFlag(1290) || EventFlag(1291)));
    BatchSetEventFlags(1290, 1299, OFF);
    SetEventFlag(1292, ON);
});

// Gascoyne (boss room)_death
$Event(12410787, Restart, function() {
    EndIf(ThisEvent());
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(EventFlag(12411800));
    BatchSetEventFlags(1290, 1299, OFF);
    SetEventFlag(1293, ON);
    SetDistanceLimitForConversationStateProcessing(2410810, 17);
    SaveRequest(0);
});

// Revenge_Initialization (Cathedral District B)
$Event(12410800, Default, function() {
    GotoIf(L0, AnyBatchEventFlags(1370, 1375));
    GotoIf(L1, EventFlag(1369));
    GotoIf(L2, EventFlag(1368));
    GotoIf(L3, EventFlag(1367));
    GotoIf(L4, EventFlag(1366));
    GotoIf(L5, EventFlag(1365));
    GotoIf(L6, EventFlag(1364));
    GotoIf(L7, AnyBatchEventFlags(1362, 1363));
    GotoIf(L8, AnyBatchEventFlags(1360, 1361));
L0:
    SetCharacterBackreadState(2410900, true);
    Goto(L9);
L1:
    GotoIf(S0, !EventFlag(1705));
    SetCharacterBackreadState(2410900, true);
    Goto(L9);
S0:
    GotoIf(S1, !EventFlag(1704));
    SetCharacterBackreadState(2410900, true);
    Goto(L9);
S1:
    GotoIf(S2, !EventFlag(1701));
    SetCharacterBackreadState(2410900, true);
    Goto(L9);
S2:
    GotoIf(S3, !EventFlag(1703));
    WarpCharacterAndSetFloor(2410900, TargetEntityType.Area, 2412334, -1, 2414124);
    SetCharacterHome(2410900, 2412334);
    SetCharacterTeamType(2410900, TeamType.HostileNPC);
    Goto(L9);
S3:
    GotoIf(S4, !EventFlag(1702));
    WarpCharacterAndSetFloor(2410900, TargetEntityType.Area, 2412332, -1, 2414122);
    SetCharacterHome(2410900, 2412332);
    SetCharacterTeamType(2410900, TeamType.HostileNPC);
    Goto(L9);
S4:
    SetCharacterHome(2410900, 2412332);
    SetCharacterTeamType(2410900, TeamType.HostileNPC);
    Goto(L9);
L2:
    GotoIf(S5, !EventFlag(1705));
    SetCharacterBackreadState(2410900, true);
    Goto(L9);
S5:
    GotoIf(S6, !EventFlag(1704));
    SetCharacterBackreadState(2410900, true);
    Goto(L9);
S6:
    GotoIf(S7, !EventFlag(1701));
    SetCharacterBackreadState(2410900, true);
    Goto(L9);
S7:
    GotoIf(S8, !EventFlag(1703));
    SetCharacterBackreadState(2410900, true);
    ChangeCharacterEnableState(2410900, Disabled);
    WarpCharacterAndSetFloor(2410900, TargetEntityType.Area, 2412334, -1, 2414124);
    WaitFixedTimeFrames(1);
    ForceCharacterTreasure(2410900);
    Goto(L9);
S8:
    GotoIf(S9, !EventFlag(1702));
    SetCharacterBackreadState(2410900, true);
    ChangeCharacterEnableState(2410900, Disabled);
    WarpCharacterAndSetFloor(2410900, TargetEntityType.Area, 2412332, -1, 2414122);
    WaitFixedTimeFrames(1);
    ForceCharacterTreasure(2410900);
    Goto(L9);
S9:
    SetCharacterBackreadState(2410900, true);
    ChangeCharacterEnableState(2410900, Disabled);
    ForceCharacterTreasure(2410900);
    Goto(L9);
L3:
    WarpCharacterAndSetFloor(2410900, TargetEntityType.Area, 2412332, -1, 2414122);
    SetCharacterHome(2410900, 2412332);
    SetEventFlag(72410546, OFF);
    Goto(L9);
L4:
    WarpCharacterAndSetFloor(2410900, TargetEntityType.Area, 2412334, -1, 2414124);
    SetCharacterHome(2410900, 2412334);
    SetEventFlag(72410546, OFF);
    Goto(L9);
L5:
    WarpCharacterAndSetFloor(2410900, TargetEntityType.Area, 2412332, -1, 2414122);
    SetCharacterHome(2410900, 2412332);
    SetCharacterTeamType(2410900, TeamType.CoopNPC);
    SetEventFlag(72410546, ON);
    WaitFixedTimeFrames(2);
    SetSpEffect(2410900, 7608, false);
    Goto(L9);
L6:
    ChangeCharacterEnableState(2410900, Disabled);
    Goto(L9);
L7:
    SetCharacterBackreadState(2410900, true);
    Goto(L9);
L8:
    ForceAnimationPlayback(2410900, 103030, false, false, false);
    Goto(L9);
L9:
    $InitializeEvent(0, 12410801);
    $InitializeEvent(0, 12410803);
    $InitializeEvent(0, 12410804);
    $InitializeEvent(0, 12410805);
    $InitializeEvent(0, 12410806);
    $InitializeEvent(0, 12410807);
    $InitializeEvent(0, 12410808);
});

// Avenger_Acquainted (Cathedral District B)
$Event(12410801, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(EventFlag(1360) && EventFlag(72410540));
    BatchSetEventFlags(1360, 1379, OFF);
    SetEventFlag(1361, ON);
});

// Revenge_Henrik defeated alone
$Event(12410803, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(EventFlag(1363) && CharacterDead(2410901));
    BatchSetEventFlags(1360, 1379, OFF);
    SetEventFlag(1366, ON);
});

// Revenge_Henrik Co-op Defeat
$Event(12410804, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor((EventFlag(1364) || EventFlag(1365)) && CharacterDead(2410901));
    BatchSetEventFlags(1360, 1379, OFF);
    SetEventFlag(1367, ON);
});

// Avenger_Death
$Event(12410805, Default, function() {
    EndIf(ThisEvent());
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(CharacterDead(2410900));
    if (!EventFlag(1369)) {
        BatchSetEventFlags(1700, 1705, OFF);
        if (AnyBatchEventFlags(1360, 1361)) {
            SetEventFlag(1700, ON);
        }
        if (EventFlag(1365)) {
            SetEventFlag(1702, ON);
        }
        if (EventFlag(1366)) {
            SetEventFlag(1703, ON);
        }
        if (EventFlag(1367)) {
            SetEventFlag(1702, ON);
        }
    }
    BatchSetEventFlags(1360, 1379, OFF);
    SetEventFlag(1368, ON);
    SaveRequest(0);
});

// Avenger_Hostile
$Event(12410806, Default, function() {
    EndIf(ThisEvent());
    WaitFor(!CharacterDead(2410900) && EventFlag(72410544));
    BatchSetEventFlags(1700, 1705, OFF);
    if (AnyBatchEventFlags(1360, 1361)) {
        SetEventFlag(1700, ON);
    }
    if (EventFlag(1365)) {
        SetEventFlag(1702, ON);
    }
    if (EventFlag(1366)) {
        SetEventFlag(1703, ON);
    }
    if (EventFlag(1367)) {
        SetEventFlag(1702, ON);
    }
    BatchSetEventFlags(1360, 1379, OFF);
    SetEventFlag(1369, ON);
    SetCharacterTeamType(2410900, TeamType.HostileNPC);
    SaveRequest(0);
});

// Avenger_Attack count
$Event(12410807, Default, function() {
    EndIf(ThisEvent());
    WaitFor((!EventFlag(1364) || !EventFlag(1365)) && CharacterDamagedBy(2410900, 10000));
    WaitFixedTimeFrames(1);
    WaitFor((!EventFlag(1364) || !EventFlag(1365)) && CharacterDamagedBy(2410900, 10000));
    WaitFixedTimeFrames(1);
    WaitFor((!EventFlag(1364) || !EventFlag(1365)) && CharacterDamagedBy(2410900, 10000));
    WaitFixedTimeFrames(1);
});

// Avenger_Conversing
$Event(12410808, Restart, function() {
    WaitFor(EventFlag(72410545));
    RequestCharacterAIReplan(2410900);
    RequestCharacterAICommand(2410900, 30, 0);
    WaitFor(
        !EventFlag(72410545)
            || CharacterAIState(2410900, AIStateType.Combat)
            || !EntityInRadiusOfEntity(2410900, 10000, 5));
    RequestCharacterAIReplan(2410900);
    RequestCharacterAICommand(2410900, -1, 0);
    SetEventFlag(72410545, OFF);
    RestartEvent();
});

// Revenge_Henrik Appears
$Event(12410809, Default, function() {
    SetCharacterBackreadState(2410901, true);
    EndIf(EventFlag(gascoigne_defeat+13) || EventFlag(gascoigne_defeat+15));
    EndIf(EventFlag(12410810));
    EndIf(EventFlag(1366));
    EndIf(EventFlag(1367));
    EndIf(EventFlag(9467));
    EndIf(EventFlag(9802));
    WaitFor(
        EventFlag(1363)
            || EventFlag(1364)
            || EventFlag(1365)
            || ((EventFlag(1701) || EventFlag(1702)) && (EventFlag(1368) || EventFlag(1369))));
    SetCharacterBackreadState(2410901, false);
});

// Revenge_Henrik defeated
$Event(12410810, Default, function() {
    if (ThisEvent()) {
        SetCharacterBackreadState(2410901, true);
        ChangeCharacterEnableState(2410901, Disabled);
        ForceCharacterTreasure(2410901);
        EndEvent();
    }
L0:
    WaitFor(HPRatio(2410901) == 0);
    SetCharacterAIId(2410900, 6163);
    RequestCharacterAICommand(2410900, 11, 0);
    ClearCharactersAITarget(2410900);
    RequestCharacterAIReplan(2410900);
    WaitFor(CharacterDead(2410901));
    SetEventFlag(5912, ON);
    SetCharacterTeamType(2410900, TeamType.FriendlyNPC);
    SetEventFlag(72410546, OFF);
    SaveRequest(0);
});

// Avenger_Co-op
$Event(12410811, Restart, function() {
    EndIf(ThisEvent() || EventFlag(gascoigne_defeat+13) || EventFlag(gascoigne_defeat+15));
    WaitFor((EventFlag(1363) || EventFlag(1364)) && CharacterAIState(2410901, AIStateType.Combat));
    SetCharacterBackreadState(2410900, false);
    WarpCharacterAndCopyFloor(2410900, TargetEntityType.Area, 2412333, -1, 2414123);
    SetCharacterHome(2410900, 2412334);
    SetCharacterTeamType(2410900, TeamType.CoopNPC);
    WaitFixedTimeFrames(2);
    ForceAnimationPlayback(2410900, 101290, false, false, false);
    SetSpEffect(2410900, 7608, false);
    SetCharacterAIId(2410900, 6162);
    RequestCharacterAICommand(2410900, 10, 0);
    RequestCharacterAIReplan(2410900);
    BatchSetEventFlags(1360, 1379, OFF);
    SetEventFlag(1365, ON);
    WaitFor(InArea(2410900, 2412334));
    RequestCharacterAICommand(2410900, -1, 0);
    RequestCharacterAIReplan(2410900);
});

// Stubborn old man_initialization
$Event(12410812, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    if (EventFlag(1169)) {
        BatchSetEventFlags(1160, 1179, OFF);
        SetEventFlag(1163, ON);
    }
L0:
    EndEvent();
});

// Prisoned Nun_initialization
$Event(12410813, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    if (EventFlag(1314)) {
        BatchSetEventFlags(1300, 1319, OFF);
        SetEventFlag(1309, ON);
    }
L0:
    EndEvent();
});

// Infected beggar
$Event(12410814, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    if (EventFlag(1209)) {
        BatchSetEventFlags(1200, 1219, OFF);
        SetEventFlag(1204, ON);
    }
L0:
    EndEvent();
});

// whore_initialization
$Event(12410830, Default, function() {
    if (CharacterType(10000, TargetType.Alive)) {
        if (EventFlag(1233)) {
            BatchSetEventFlags(1220, 1239, OFF);
            SetEventFlag(1223, ON);
        }
L2:
        if (EventFlag(1228) && EventFlag(72400486)) {
            BatchSetEventFlags(1220, 1239, OFF);
            SetEventFlag(1229, ON);
        }
L3:
        NoOp();
    }
L0:
    SetCharacterGravity(2410770, Disabled);
    SetCharacterMaphits(2410770, true);
    GotoIf(L0, EventFlag(1228));
    GotoIf(L0, EventFlag(1229));
    GotoIf(L1, EventFlag(1235));
    GotoIf(L2, EventFlag(1236));
    ChangeCharacterEnableState(2410770, Disabled);
    SetCharacterBackreadState(2410771, true);
    DeactivateObject(2411280, Disabled);
    DeactivateObject(2411281, Enabled);
    EndEvent();
L0:
    SetCharacterBackreadState(2410770, false);
    SetCharacterBackreadState(2410771, false);
    DeactivateObject(2411280, Enabled);
    DeactivateObject(2411281, Disabled);
    SetCharacterAIState(2410771, Disabled);
    ForceAnimationPlayback(2410770, 103082, false, false, false);
    ForceAnimationPlayback(2410771, 7010, true, false, false);
    IssueShortWarpRequest(2410770, TargetEntityType.Area, 2412281, -1);
    EndEvent();
L1:
    SetCharacterBackreadState(2410770, false);
    SetCharacterBackreadState(2410771, false);
    DeactivateObject(2411280, Enabled);
    DeactivateObject(2411281, Disabled);
    EzstateInstructionRequest(2410770, 5, 1);
    IssueShortWarpRequest(2410770, TargetEntityType.Area, 2412281, -1);
    ForceCharacterTreasure(2410770);
    ForceCharacterTreasure(2410771);
    EndEvent();
L2:
    SetCharacterBackreadState(2410770, false);
    SetCharacterBackreadState(2410771, false);
    DeactivateObject(2411280, Enabled);
    DeactivateObject(2411281, Disabled);
    EzstateInstructionRequest(2410770, 4, 1);
    IssueShortWarpRequest(2410770, TargetEntityType.Area, 2412281, -1);
    ForceCharacterTreasure(2410770);
    ForceCharacterTreasure(2410771);
    EndEvent();
});

// whore_death
$Event(12410831, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    EndIf(EventFlag(1235));
    EndIf(EventFlag(1236));
    WaitFor(CharacterDead(2410770));
    BatchSetEventFlags(1220, 1239, OFF);
    SetEventFlag(1235, ON);
    SaveRequest(0);
});

// Prostitute_Dead when lunar larvae die
$Event(12410833, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    EndIf(EventFlag(1235));
    EndIf(EventFlag(1236));
    WaitFor(HPRatio(2410771) == 0 && HPRatio(2410770) != 0);
    BatchSetEventFlags(1220, 1239, OFF);
    SetEventFlag(1236, ON);
    WaitFixedTimeFrames(1);
    ForceAnimationPlayback(2410770, 103083, false, false, false);
    SaveRequest(0);
});

// Prostitute_I saw a lunar larva born by a prostitute, so the SAN value increased
$Event(12410834, Default, function() {
    EndIf(ThisEvent());
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFixedTimeFrames(10);
    WaitFor((EventFlag(1228) || EventFlag(1229)) && InArea(10000, 2412302));
    $InitializeEvent(0, 9350, 3);
    SetEventFlag(72400956, ON);
});

// whore_real-time initialization
$Event(12410835, Default, function() {
    EndIf(ThisEvent());
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(CharacterBackreadStatus(2410770) && EventFlag(1228));
    ChangeCharacterEnableState(2410770, Enabled);
    SetCharacterBackreadState(2410771, false);
    DeactivateObject(2411280, Enabled);
    DeactivateObject(2411281, Disabled);
    SetCharacterAIState(2410771, Disabled);
    ForceAnimationPlayback(2410770, 103082, false, false, false);
    ForceAnimationPlayback(2410771, 7010, true, false, false);
    IssueShortWarpRequest(2410770, TargetEntityType.Area, 2412281, -1);
    EndEvent();
});

// NPC general purpose_knock the door_XX
$Event(12410850, Default, function(eventFlagId, actionButtonParameterId, areaEntityId) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    SetEventFlag(eventFlagId, OFF);
    WaitFor(!EventFlag(eventFlagId) && ActionButtonInArea(actionButtonParameterId, areaEntityId));
    IssueShortWarpRequest(10000, TargetEntityType.Object, areaEntityId, 210);
    ForceAnimationPlayback(10000, 101320, false, false, false);
    WaitFixedTimeFrames(25);
    WaitFixedTimeFrames(20);
    SetEventFlag(eventFlagId, ON);
    WaitFor(!EventFlag(eventFlagId));
    RestartEvent();
});

// bridge door
$Event(12410859, Default, function() {
    DeactivateObject(2410874, Disabled);
    EndIf(EventFlag(12100949));
    WaitFor(EventFlag(12411700));
    DeactivateObject(2410874, Enabled);
    EndIf(!CharacterType(10000, TargetType.Alive));
    SetEventFlag(70000598, OFF);
    WaitFor(!EventFlag(70000598) && ActionButtonInArea(6030, 2410874));
    IssueShortWarpRequest(10000, TargetEntityType.Object, 2410874, 210);
    ForceAnimationPlayback(10000, 101320, false, false, false);
    WaitFixedTimeFrames(25);
    DisplayBanner(TextBannerType.StadiumLoss); // bridge door fade out
    WaitFixedTimeFrames(20);
    SetPlayerRespawnPoint(2408088);
    WaitFixedTimeFrames(20);
    SetSpEffect(10000, 2101, false);
});

// NPC General Purpose_Animation Control_Damage Taken_XX
$Event(12410860, Default, function(chrEntityId, animationId) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(HPRatio(chrEntityId) != 0 && HasDamageType(chrEntityId, -1, DamageType.Unspecified));
    ForceAnimationPlayback(chrEntityId, animationId, false, false, false);
    RestartEvent();
});

// NPC General Purpose_Animation Control_Damage to Standby_XX
$Event(12410870, Default, function(chrEntityId, animationId, spEffectId) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(CharacterHasSpEffect(chrEntityId, spEffectId) && HPRatio(chrEntityId) != 0);
    ForceAnimationPlayback(chrEntityId, animationId, false, false, false);
    WaitFixedTimeFrames(5);
    RestartEvent();
});

//NPC General Purpose_Animation Control_Death_XX
$Event(12410880, Default, function(chrEntityId, animationId) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(HPRatio(chrEntityId) == 0);
    ForceAnimationPlayback(chrEntityId, animationId, false, false, false);
});

// Water corpse beast wakes up_XX
$Event(12415130, Restart, function(chrEntityId, animationId, animationId2, eventFlagId, aiId, aiId2, value) {
    EndIf(ThisEventSlot());
    ForceAnimationPlayback(chrEntityId, animationId, true, false, true);
    SetCharacterAIId(chrEntityId, aiId);
    chrFlag |= CharacterAIState(chrEntityId, AIStateType.Alert)
        || CharacterAIState(chrEntityId, AIStateType.Recognition)
        || CharacterAIState(chrEntityId, AIStateType.Combat);
    if (0 != value) {
        chrFlag |= EventFlag(eventFlagId);
    }
    WaitFor(chrFlag);
    WaitRandomTimeFrames(0, 60);
    ForceAnimationPlayback(chrEntityId, animationId2, false, true, false);
    SetCharacterAIId(chrEntityId, aiId2);
});

// Enemy Special Standby_XX
$Event(12415150, Restart, function(chrEntityId, animationId, animationId2, targetDistance, aiId, aiId2) {
    if (!ThisEventSlot()) {
        ForceAnimationPlayback(chrEntityId, animationId, true, false, true);
        SetCharacterAIId(chrEntityId, aiId);
        SetCharacterGravity(chrEntityId, Disabled);
        WaitFor(
            CharacterAIState(chrEntityId, AIStateType.Recognition)
                || CharacterAIState(chrEntityId, AIStateType.Combat)
                || ((CharacterType(10000, TargetType.Alive)
                    || CharacterType(10000, TargetType.WhitePhantom))
                    && EntityInRadiusOfEntity(chrEntityId, 10000, targetDistance)));
        ForceAnimationPlayback(chrEntityId, animationId2, false, false, false);
    }
L0:
    SetCharacterAIId(chrEntityId, aiId2);
    SetCharacterGravity(chrEntityId, Enabled);
});

// Horrible Crowd and Collision_Shipyard
$Event(12410155, Restart, function(chrEntityId, areaEntityId, areaEntityId2, areaEntityId3) {
    SetCharacterAIState(chrEntityId, Disabled);
    WaitFor(
        InArea(10000, areaEntityId) || InArea(10000, areaEntityId2) || InArea(10000, areaEntityId3));
    SetCharacterAIState(chrEntityId, Enabled);
});

// Horrible Crowd and Gun Crowd_Shipyard
$Event(12410156, Restart, function(chrEntityId, chrEntityId2, chrEntityId3) {
    chr = CharacterAIState(chrEntityId, AIStateType.Recognition)
        || CharacterAIState(chrEntityId, AIStateType.Alert)
        || CharacterAIState(chrEntityId, AIStateType.Combat);
    chr2 = CharacterAIState(chrEntityId2, AIStateType.Recognition)
        || CharacterAIState(chrEntityId2, AIStateType.Alert)
        || CharacterAIState(chrEntityId2, AIStateType.Combat);
    chr3 = CharacterAIState(chrEntityId3, AIStateType.Recognition)
        || CharacterAIState(chrEntityId3, AIStateType.Alert)
        || CharacterAIState(chrEntityId3, AIStateType.Combat);
    WaitFor(chr || chr2 || chr3);
    GotoIf(L0, chr.Passed);
    GotoIf(L1, chr2.Passed);
    GotoIf(L2, chr3.Passed);
L0:
    EndEvent();
L1:
    SetCharacterHome(chrEntityId, 2412225);
    RequestCharacterAICommand(chrEntityId, 10, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(InArea(chrEntityId, 2412225) || CharacterAIState(chrEntityId, AIStateType.Combat));
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    EndEvent();
L2:
    SetCharacterHome(chrEntityId, 2412226);
    RequestCharacterAICommand(chrEntityId, 10, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(InArea(chrEntityId, 2412226) || CharacterAIState(chrEntityId, AIStateType.Combat));
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    EndEvent();
});

// Elevator Initialization_Cathedral District B
$Event(12410321, Default, function(eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, objEntityId, objEntityId2, objEntityId3) {
    EndIf(EventFlag(eventFlagId));
    if (!EventFlag(eventFlagId4)) {
        SetEventFlag(eventFlagId2, OFF);
        SetEventFlag(eventFlagId3, OFF);
        ReproduceObjectAnimation(objEntityId, 2);
        SetObjactState(objEntityId2, 100, Disabled);
        SetObjactState(objEntityId3, 100, Disabled);
        EndEvent();
    }
L0:
    if (!EventFlag(eventFlagId2)) {
        SetEventFlag(eventFlagId3, OFF);
        ReproduceObjectAnimation(objEntityId, 2);
        SetObjactState(objEntityId2, 100, Enabled);
        SetObjactState(objEntityId3, 100, Disabled);
        EndEvent();
    }
L1:
    SetEventFlag(eventFlagId3, ON);
    ReproduceObjectAnimation(objEntityId, 0);
    SetObjactState(objEntityId2, 100, Disabled);
    SetObjactState(objEntityId3, 100, Enabled);
});

// Elevator Host State Management_Cathedral District B
$Event(12410325, Default, function(eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4) {
    WaitFor(
        CharacterType(10000, TargetType.Alive) && EventFlag(eventFlagId4) && EventFlag(eventFlagId));
    if (!EventFlag(eventFlagId2)) {
        SetEventFlag(eventFlagId3, OFF);
    } else {
        SetEventFlag(eventFlagId3, ON);
    }
    WaitFor(
        CharacterType(10000, TargetType.Alive) && EventFlag(eventFlagId4) && !EventFlag(eventFlagId));
    RestartEvent();
});

// Up the elevator_Cathedral Street B
$Event(12410322, Default, function(eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, areaEntityId, objactEventFlag) {
    if (EventFlag(eventFlagId) && EventFlag(eventFlagId2)) {
        ReproduceObjectAnimation(2411320, 3);
    } else {
L0:
        WaitFor(
            EventFlag(eventFlagId4)
                && !EventFlag(eventFlagId)
                && !EventFlag(eventFlagId2)
                && (InArea(10000, areaEntityId)
                    || ObjActEventFlag(objactEventFlag)
                    || (EventFlagState(CHANGE, TargetEventFlagType.EventFlag, eventFlagId3)
                        && EventFlag(eventFlagId3))));
        SetEventFlag(eventFlagId, ON);
        SetEventFlag(eventFlagId2, ON);
        ForceAnimationPlayback(2411320, 6, false, true, false);
        ForceAnimationPlayback(2411320, 3, false, true, false);
    }
L1:
    WaitFor(!AllPlayersInArea(2412321));
    ForceAnimationPlayback(2411320, 7, false, true, false);
    SetObjactState(2411317, 100, Disabled);
    SetObjactState(2411318, 100, Enabled);
    SetEventFlag(eventFlagId, OFF);
    RestartEvent();
});

// Elevator going down_Cathedral Street B
$Event(12410323, Default, function(eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, areaEntityId, objactEventFlag) {
    if (EventFlag(eventFlagId) && !EventFlag(eventFlagId2)) {
        ReproduceObjectAnimation(2411320, 1);
    } else {
L0:
        WaitFor(
            EventFlag(eventFlagId4)
                && !EventFlag(eventFlagId)
                && EventFlag(eventFlagId2)
                && (InArea(10000, areaEntityId)
                    || ObjActEventFlag(objactEventFlag)
                    || (EventFlagState(CHANGE, TargetEventFlagType.EventFlag, eventFlagId3)
                        && !EventFlag(eventFlagId3))));
        SetEventFlag(eventFlagId, ON);
        SetEventFlag(eventFlagId2, OFF);
        ForceAnimationPlayback(2411320, 4, false, true, false);
        ForceAnimationPlayback(2411320, 1, false, true, false);
    }
L1:
    WaitFor(!AllPlayersInArea(2412322));
    ForceAnimationPlayback(2411320, 5, false, true, false);
    SetObjactState(2411317, 100, Enabled);
    SetObjactState(2411318, 100, Disabled);
    SetEventFlag(eventFlagId, OFF);
    RestartEvent();
});

// Elevator Call Lever Unable to Operate_Cathedral District B
$Event(12410324, Default, function(eventFlagId, eventFlagId2, eventFlagId3, areaEntityId, areaEntityId2) {
    SetNetworkSyncState(Disabled);
    WaitFor(
        (!EventFlag(eventFlagId3) && ActionButtonInArea(7100, areaEntityId))
            || (!EventFlag(eventFlagId3) && ActionButtonInArea(7100, areaEntityId2))
            || (EventFlag(eventFlagId) && ActionButtonInArea(7100, areaEntityId))
            || (EventFlag(eventFlagId) && ActionButtonInArea(7100, areaEntityId2))
            || (EventFlag(eventFlagId2) && ActionButtonInArea(7100, areaEntityId))
            || (!EventFlag(eventFlagId2) && ActionButtonInArea(7100, areaEntityId2)));
    DisplayGenericDialog(10010172, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
    RestartEvent();
});

// Elevator first activation_Cathedral District B
$Event(12410330, Default, function(eventFlagId, areaEntityId, objEntityId, objEntityId2) {
    EndIf(EventFlag(eventFlagId));
    WaitFor(InArea(10000, areaEntityId));
    SetObjactState(objEntityId, 100, Enabled);
    SetObjactState(objEntityId2, 100, Disabled);
L0:
    SetEventFlag(eventFlagId, ON);
});

// Special Standby_Release Hostile Link
$Event(12410460, Default, function(chrEntityId, animationId, animationId2, aiId, aiId2, chrEntityId2) {
    ForceAnimationPlayback(chrEntityId, animationId, true, false, true);
    SetCharacterAIId(chrEntityId, aiId);
    SetCharacterGravity(chrEntityId, Disabled);
    chr = CharacterAIState(chrEntityId2, AIStateType.Combat);
    dmg = HasDamageType(chrEntityId, 10000, DamageType.Unspecified);
    WaitFor(chr || dmg);
    SetCharacterGravity(chrEntityId, Enabled);
    if (!dmg.Passed) {
        WaitRandomTimeFrames(20, 100);
        ForceAnimationPlayback(chrEntityId, animationId2, false, true, false);
    }
    SetCharacterAIId(chrEntityId, aiId2);
});

// Holy City B_New NPC summons_Forced return_Father Gascoigne
$Event(12414470, Restart, function() {
    if (!ThisEvent()) {
        WaitFor(
            EventFlag(12414420)
                && !EventFlag(12414430)
                && (InArea(2410158, 2412705)
                    || InArea(2410158, 2412706)
                    || InArea(2410158, 2412707)
                    || InArea(2410158, 2412708)
                    || InArea(2410158, 2412709)));
    }
L0:
    RequestCharacterAICommand(2410158, 992, 0);
    RequestCharacterAIReplan(2410158);
});

// Cathedral District B_New NPC Summoning_Forced Return_Father Gascoigne 2
$Event(12414480, Restart, function() {
    if (!ThisEvent()) {
        WaitFor(CharacterHasEventMessage(2410158, 1000));
    }
L0:
    SetCharacterAIState(2410158, Disabled);
    SendNPCSummonHome(2410158);
});

// Holy Street B_New NPC summons_Disable throw during boss battle_Alfred
$Event(12414490, Restart, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(
        HasMultiplayerState(MultiplayerState.Host)
            && EventFlag(12414421)
            && !EventFlag(12414431)
            && EventFlag(12414700));
    SetSpEffectAndUnknown200455(2410740, 35, false);
    WaitFixedTimeFrames(1);
    RestartEvent();
});

// summon stuff

// Cathedral District B_New NPC Summoning_Summoning Judgment_Father Gascoigne
$Event(12414400, Restart, function(eventFlagId, entityId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5) {
    if (EventFlag(12100889)) {
        SetEventFlag(eventFlagId2, OFF);
        SetEventFlag(eventFlagId3, OFF);
        SpawnMapSFX(entityId);
        WaitFor(EventFlag(eventFlagId2));
        DeleteMapSFX(entityId, true);
        EndEvent();
    }
    if (!EventFlag(eventFlagId)) {
        SetEventFlag(eventFlagId, OFF);
        DeleteMapSFX(entityId, true);
        WaitFor(
            PlayerHasItem(ItemType.Goods, 4312)
                && !EventFlag(eventFlagId2)
                && !EventFlag(eventFlagId3)
                && !EventFlag(eventFlagId4)
                && NumberOfClientsOfType(ClientType.Coop) < 2
                && !EventFlag(12411802)
                && !EventFlag(eventFlagId5)
                && HasMultiplayerState(MultiplayerState.Host));
    }
L0:
    SetEventFlag(eventFlagId, ON);
    SpawnMapSFX(entityId);
    WaitFor(
        HasMultiplayerState(MultiplayerState.Host)
            && !(PlayerHasItem(ItemType.Goods, 4312)
                && !EventFlag(eventFlagId2)
                && !EventFlag(eventFlagId3)
                && !EventFlag(eventFlagId4)
                && NumberOfClientsOfType(ClientType.Coop) < 2
                && !EventFlag(12411802)
                && !EventFlag(eventFlagId5)));
    SetEventFlag(eventFlagId, OFF);
    DeleteMapSFX(entityId, true);
    RestartEvent();
});

// Holy Street B_New NPC Summoning_Summoning Judgment_Alfred
$Event(12414401, Restart, function(eventFlagId, entityId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5) {
    if (EventFlag(12100889)) {
        SetEventFlag(eventFlagId2, OFF);
        SetEventFlag(eventFlagId3, OFF);
        SpawnMapSFX(entityId);
        WaitFor(EventFlag(eventFlagId2));
        DeleteMapSFX(entityId, true);
        EndEvent();
    }
    if (!EventFlag(eventFlagId)) {
        SetEventFlag(eventFlagId, OFF);
        DeleteMapSFX(entityId, true);
        WaitFor(
            PlayerHasItem(ItemType.Goods, 4312)
                && !EventFlag(eventFlagId2)
                && !EventFlag(eventFlagId3)
                && !EventFlag(eventFlagId4)
                && NumberOfClientsOfType(ClientType.Coop) < 2
                && EventFlag(72400461)
                && AnyBatchEventFlags(1340, 1341)
                && !EventFlag(eventFlagId5)
                && HasMultiplayerState(MultiplayerState.Host));
    }
L0:
    SetEventFlag(eventFlagId, ON);
    SpawnMapSFX(entityId);
    WaitFor(
        HasMultiplayerState(MultiplayerState.Host)
            && !(PlayerHasItem(ItemType.Goods, 4312)
                && !EventFlag(eventFlagId2)
                && !EventFlag(eventFlagId3)
                && !EventFlag(eventFlagId4)
                && NumberOfClientsOfType(ClientType.Coop) < 2
                && EventFlag(72400461)
                && AnyBatchEventFlags(1340, 1341)
                && !EventFlag(eventFlagId5)));
    SetEventFlag(eventFlagId, OFF);
    DeleteMapSFX(entityId, true);
    RestartEvent();
});

// Shrine District B_New NPC Summon_Participate_XX
$Event(12414410, Restart, function(signType, entityId, areaEntityId, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, actionButtonParameterId) {
    if (EventFlag(12100889)) {
        ChangeCharacterEnableState(entityId, Disabled);
        WaitFor(!EventFlag(eventFlagId) && ActionButtonInArea(actionButtonParameterId, entityId));
        WarpCharacterAndCopyFloor(entityId, TargetEntityType.Character, 10000, 236, 10000);
        SetEventFlag(2410, OFF);
        WaitFixedTimeFrames(1);
        ForceAnimationPlayback(10000, 100111, false, false, false);
        SetSpEffect(10000, 4682, false);
        SummonNPC(signType, entityId, areaEntityId, eventFlagId, eventFlagId2);
        ClearSpEffect(10000, 9005);
        ClearSpEffect(10000, 9025);
        WaitFixedTimeSeconds(5);
        DisplayMessage(100051, 0);
        WaitFixedTimeSeconds(5);
        WarpCharacterAndCopyFloor(entityId, TargetEntityType.Area, areaEntityId, -1, areaEntityId);
        EndEvent();
    }
    if (!EventFlag(eventFlagId)) {
        ChangeCharacterEnableState(entityId, Disabled);
    }
    GotoIf(S0, EventFlag(eventFlagId2));
    GotoIf(S1, HasMultiplayerState(MultiplayerState.Client) && EventFlag(eventFlagId));
S0:
    ChangeCharacterEnableState(entityId, Disabled);
S1:
    EndIf(EventFlag(eventFlagId4));
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        SetNetworkUpdateAuthority(entityId, AuthorityLevel.Forced);
    }
    WaitFor(
        PlayerHasItem(ItemType.Goods, 4312)
            && !EventFlag(eventFlagId)
            && !EventFlag(eventFlagId2)
            && EventFlag(eventFlagId3)
            && !EventFlag(eventFlagId4)
            && ActionButtonInArea(actionButtonParameterId, entityId));
    ForceAnimationPlayback(10000, 100111, false, false, false);
    SetSpEffect(10000, 4682, false);
    SummonNPC(signType, entityId, areaEntityId, eventFlagId, eventFlagId2);
    ClearSpEffect(10000, 9005);
    ClearSpEffect(10000, 9025);
    WaitFixedTimeSeconds(5);
    DisplayMessage(100051, 0);
});

// Holy Street B_New NPC summons_Aiming for the boss room_XX
$Event(12414450, Restart, function(chrEntityId, entityId, eventFlagId, eventFlagId2, eventFlagId3) {
    EndIf(ThisEventSlot());
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(EventFlag(eventFlagId) && !EventFlag(eventFlagId2) && EventFlag(eventFlagId3));
    SetEventPoint(chrEntityId, entityId, 1);
    RequestCharacterAICommand(chrEntityId, 990, 0);
    RequestCharacterAIReplan(chrEntityId);
});

// Holy Street B_New NPC summons_Enter boss room_XX
$Event(12414460, Restart, function(chrEntityId, areaEntityId, entityId, areaEntityId2, playAnimationId, eventFlagId, areaEntityId3) {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(EventFlag(eventFlagId) && InArea(chrEntityId, areaEntityId));
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    RotateCharacter(chrEntityId, entityId, playAnimationId, true);
    RestartIf(!InArea(chrEntityId, areaEntityId2));
    SetEventPoint(chrEntityId, entityId, 1);
    RequestCharacterAICommand(chrEntityId, 990, 0);
    RequestCharacterAIReplan(chrEntityId);
    SetCharacterGravity(chrEntityId, Disabled);
    SetCharacterMaphits(chrEntityId, true);
    WaitFor(InArea(chrEntityId, areaEntityId3));
    SetCharacterGravity(chrEntityId, Enabled);
    SetCharacterMaphits(chrEntityId, false);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
});

// Co-Blood Hunting _Fake NPC Summoning_Cooperation_Participation - UNUSED
$Event(12414500, Restart, function() {
    if (ThisEvent()) {
        SetCharacterDefaultBackreadState(2410740, Enabled);
        SetSpEffect(2410740, 9006, false);
        ChangeCharacterEnableState(2410740, Enabled);
        EndEvent();
    }
L0:
    ChangeCharacterEnableState(2410740, Disabled);
    SetCharacterAIState(2410740, Disabled);
    if (CharacterType(10000, TargetType.Alive)) {
        SetNetworkUpdateAuthority(2410740, AuthorityLevel.Forced);
    }
    area = InArea(10000, 2412722);
    area2 = InArea(10000, 2412723);
    WaitFor(
        CharacterType(10000, TargetType.Alive)
            && EventFlag(12414608)
            && (area || area2)
            && !EventFlag(12411700)
            && EventFlag(72400461)
            && AnyBatchEventFlags(1340, 1341));
    if (!area2.Passed) {
        WarpCharacterAndSetFloor(2410740, TargetEntityType.Area, 2412720, -1, 0);
    } else {
L1:
        WarpCharacterAndSetFloor(2410740, TargetEntityType.Area, 2412721, -1, 2414021);
    }
L2:
    WaitFixedTimeSeconds(5);
    SetEventFlag(12414506, ON);
    PlaySE(10000, SoundType.fMenuSE, 100000009);
    WaitFixedTimeSeconds(5);
    PlaySE(10000, SoundType.fMenuSE, 100000020);
    SetCharacterDefaultBackreadState(2410740, Enabled);
    SetSpEffect(2410740, 9006, false);
    ChangeCharacterEnableState(2410740, Enabled);
    ForceAnimationPlayback(2410740, 101201, false, true, false);
    SetCharacterAIState(2410740, Enabled);
    ActivateHit(2414200, Disabled);
});

// Co-Blood Hunting_Fake NPC Summoning_Cooperation_Returning - UNUSED
$Event(12414501, Restart, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    EndIf(EventFlag(12411700));
    EndIf(ThisEvent());
    WaitFor(EventFlag(12414502));
L0:
    ChangeCharacterEnableState(2410740, Disabled);
    SetCharacterDefaultBackreadState(2410740, Disabled);
});

// Co-Blood Hunting _Fake NPC Summoning_Cooperation_Success - UNUSED
$Event(12414502, Restart, function() {
    EndIf(EventFlag(12411700));
    EndIf(EventFlag(12414501));
    EndIf(ThisEvent());
    WaitFor(EventFlag(12414500) && !EventFlag(12414501) && EventFlag(12411700));
L0:
    RequestCharacterAICommand(2410740, 991, 0);
    RequestCharacterAIReplan(2410740);
    WaitFixedTimeSeconds(1);
    SetSpEffect(2410740, 5560, false);
    SpawnOneshotSFX(TargetEntityType.Character, 2410740, 236, 121);
    WaitFixedTimeSeconds(2);
    ChangeCharacterEnableState(2410740, Disabled);
});

// Co-Blood Hunting _ Summoning phony NPC _ Cooperating _ Aiming for the boss room - UNUSED
$Event(12414503, Restart, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    EndIf(EventFlag(12411700));
    EndIf(EventFlag(12414501));
    EndIf(EventFlag(12414505));
    EndIf(ThisEvent());
    WaitFor(
        !EventFlag(12411700)
            && EventFlag(12414500)
            && !EventFlag(12414501)
            && EventFlag(12411702)
            && EventFlag(12414700)
            && !InArea(2410740, 2412801));
L0:
    SetEventPoint(2410740, 2412710, 1);
    RequestCharacterAICommand(2410740, 990, 0);
    RequestCharacterAIReplan(2410740);
});

// Co-Blood Hunting _ Summoning phony NPC _ Cooperating _ Entering the boss room - UNUSED
$Event(12414504, Restart, function() {
    EndIf(EventFlag(12411700));
    EndIf(EventFlag(12414501));
    EndIf(ThisEvent());
    WaitFor(EventFlag(12414503) && InArea(2410740, 2412710));
    RequestCharacterAnimationReset(2410740, Interpolation.Interpolated);
    RotateCharacter(2410740, 2412800, 101130, true);
    RequestCharacterAICommand(2410740, -1, 0);
    RequestCharacterAIReplan(2410740);
});

// Co-Blood Hunting_Messenger - UNUSED
$Event(12414505, Restart, function() {
    SetVisibilityOfMessage(2413221, Disabled);
    SetVisibilityOfMessage(2413223, Disabled);
    DeleteMapSFX(2413231, false);
    DeleteMapSFX(2413233, false);
    EndIf(ThisEvent());
    WaitFor(
        PlayerHasItem(ItemType.Goods, 200)
            && CharacterType(10000, TargetType.Alive)
            && !EventFlag(12411700)
            && EventFlag(72400461)
            && AnyBatchEventFlags(1340, 1341));
    SetVisibilityOfMessage(2413221, Enabled);
    SetVisibilityOfMessage(2413223, Enabled);
    SpawnMapSFX(2413231);
    SpawnMapSFX(2413233);
    WaitFor(EventFlag(12414506) || EventFlag(12411700));
    SetVisibilityOfMessage(2413221, Disabled);
    SetVisibilityOfMessage(2413223, Disabled);
    DeleteMapSFX(2413231, true);
    DeleteMapSFX(2413233, true);
});

// Fake NPC summon_cooperation_participation - UNUSED
$Event(12414600, Restart, function() {
    if (ThisEvent()) {
        SetCharacterDefaultBackreadState(2410158, Enabled);
        SetSpEffect(2410158, 9006, false);
        ChangeCharacterEnableState(2410158, Enabled);
        EndEvent();
    }
L0:
    ChangeCharacterEnableState(2410158, Disabled);
    SetCharacterAIState(2410158, Disabled);
    if (CharacterType(10000, TargetType.Alive)) {
        SetNetworkUpdateAuthority(2410158, AuthorityLevel.Forced);
    }
    area = InArea(10000, 2412700);
    area2 = InArea(10000, 2412701);
    WaitFor(
        CharacterType(10000, TargetType.Alive)
            && EventFlag(12414608)
            && (area || area2)
            && !EventFlag(12411700)
            && !EventFlag(12411802));
    if (!area2.Passed) {
        WarpCharacterAndSetFloor(2410158, TargetEntityType.Area, 2412702, -1, 2414020);
    } else {
L1:
        WarpCharacterAndSetFloor(2410158, TargetEntityType.Area, 2412703, -1, 2414021);
    }
L2:
    WaitFixedTimeSeconds(5);
    SetEventFlag(12414609, ON);
    PlaySE(10000, SoundType.fMenuSE, 100000009);
    WaitFixedTimeSeconds(5);
    PlaySE(10000, SoundType.fMenuSE, 100000020);
    SetCharacterDefaultBackreadState(2410158, Enabled);
    SetSpEffect(2410158, 9006, false);
    ChangeCharacterEnableState(2410158, Enabled);
    ForceAnimationPlayback(2410158, 7010, false, true, false);
    SetCharacterAIState(2410158, Enabled);
    ActivateHit(2414200, Disabled);
});

// Fake NPC Summon_Cooperation_Return - UNUSED
$Event(12414601, Restart, function() {
    if (!ThisEvent()) {
        WaitFor(CharacterHasEventMessage(2410158, 1000));
    }
L0:
    ChangeCharacterEnableState(2410158, Disabled);
    SetCharacterDefaultBackreadState(2410158, Disabled);
    ActivateHit(2414200, Enabled);
});

// Fake NPC Summon_Cooperation_Return_Success - UNUSED
$Event(12414602, Restart, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    if (!ThisEvent()) {
        WaitFor(
            EventFlag(12414600)
                && !EventFlag(12414601)
                && !EventFlag(12411700)
                && !EventFlag(12411802)
                && CharacterDead(2410800));
    }
L0:
    RequestCharacterAICommand(2410158, 991, 0);
    RequestCharacterAIReplan(2410158);
});

// Fake NPC Summon_Cooperation_Return_Farewell Cannon - UNUSED
$Event(12414603, Restart, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    if (!ThisEvent()) {
        WaitFor(
            EventFlag(12414600)
                && !EventFlag(12414601)
                && (InArea(2410158, 2412705)
                    || InArea(2410158, 2412706)
                    || InArea(2410158, 2412707)
                    || InArea(2410158, 2412708)
                    || InArea(2410158, 2412709)));
    }
L0:
    RequestCharacterAICommand(2410158, 992, 0);
    RequestCharacterAIReplan(2410158);
});

// Summon phony NPC_Cooperation_Aim for the boss room - UNUSED
$Event(12414604, Restart, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    EndIf(ThisEvent());
    WaitFor(EventFlag(12411702) && EventFlag(12414700) && !InArea(2410158, 2412801));
    SetEventPoint(2410158, 2412710, 1);
    RequestCharacterAICommand(2410158, 990, 0);
    RequestCharacterAIReplan(2410158);
});

// Summon phony NPC_cooperation_enter the boss room - UNUSED
$Event(12414605, Restart, function() {
    EndIf(ThisEvent());
    WaitFor(EventFlag(12414604) && InArea(2410158, 2412710));
    RequestCharacterAnimationReset(2410158, Interpolation.Interpolated);
    RotateCharacter(2410158, 2412800, 7014, true);
    RequestCharacterAICommand(2410158, -1, 0);
    RequestCharacterAIReplan(2410158);
});

// Summon phony NPC_Messenger - UNUSED
$Event(12414606, Restart, function() {
    SetVisibilityOfMessage(2413220, Disabled);
    SetVisibilityOfMessage(2413222, Disabled);
    DeleteMapSFX(2413230, false);
    DeleteMapSFX(2413232, false);
    EndIf(ThisEvent());
    WaitFor(
        PlayerHasItem(ItemType.Goods, 200)
            && CharacterType(10000, TargetType.Alive)
            && !EventFlag(12411700)
            && !EventFlag(12411802));
    SetVisibilityOfMessage(2413220, Enabled);
    SetVisibilityOfMessage(2413222, Enabled);
    SpawnMapSFX(2413230);
    SpawnMapSFX(2413232);
    WaitFor(EventFlag(12414609) || EventFlag(12411700) || EventFlag(12411802));
    SetVisibilityOfMessage(2413220, Disabled);
    SetVisibilityOfMessage(2413222, Disabled);
    DeleteMapSFX(2413230, true);
    DeleteMapSFX(2413232, true);
});

// Summon phony NPC_Judgment at the moment the bell rings - UNUSED
$Event(12414607, Restart, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && CharacterHasSpEffect(10000, 9000));
    SetEventFlag(12414608, ON);
    WaitFixedTimeFrames(1);
    SetEventFlag(12414608, OFF);
    WaitFor(CharacterType(10000, TargetType.Alive) && !CharacterHasSpEffect(10000, 9000));
    RestartEvent();
});

// Summon phony NPC_react to music box - UNUSED
$Event(12414610, Restart, function() {
    EndIf(ThisEvent());
    WaitFor(
        EventFlag(12414600)
            && !EventFlag(12414601)
            && HPRatio(2410158) > 0
            && CharacterHasSpEffect(2410158, 4640));
    WaitFixedTimeSeconds(2);
    EndIf(!(EventFlag(12414600) && !EventFlag(12414601) && HPRatio(2410158) > 0));
    PlaySE(2410158, SoundType.vVoice, 242100402);
});

// logic control_distance
$Event(12410220, Default, function(chrEntityId, targetDistance) {
    SetCharacterAIState(chrEntityId, Disabled);
    WaitFor(
        EntityInRadiusOfEntity(chrEntityId, 10000, targetDistance)
            || HasDamageType(chrEntityId, 10000, DamageType.Unspecified));
    SetCharacterAIState(chrEntityId, Enabled);
});

// Gascoyne death flag
$Event(12410234, Default, function() {
    WaitFor(CharacterDead(2410158));
    EndEvent();
});

// Fight with Gascoyne
$Event(12410237, Default, function(eventFlagId, chrEntityId, chrEntityId2, chrEntityId3, areaEntityId) {
    ChangeCharacterEnableState(chrEntityId3, Disabled);
    WaitFor(EventFlag(eventFlagId));
    WaitFor(
        EventFlag(12410235)
            && !CharacterDead(chrEntityId2)
            && (HPRatio(chrEntityId) <= 0.5 || ElapsedSeconds(40)));
    EndIf(EventFlag(12411800));
    ChangeCharacterEnableState(chrEntityId2, Disabled);
    ChangeCharacterEnableState(chrEntityId3, Enabled);
    WaitFixedTimeSeconds(1);
    SetCharacterHome(chrEntityId3, areaEntityId);
    RequestCharacterAICommand(chrEntityId3, 10, 0);
    RequestCharacterAIReplan(chrEntityId3);
    SetCharacterGravity(chrEntityId3, Disabled);
    SetCharacterMaphits(chrEntityId3, true);
    SetCharacterAnimationState(chrEntityId3, Disabled);
    WaitFor(EntityInRadiusOfEntity(chrEntityId3, 2410810, 3) || InArea(chrEntityId3, 2412811));
    RequestCharacterAICommand(chrEntityId3, -1, 0);
    ClearCharactersAITarget(chrEntityId3);
    RequestCharacterAIReplan(chrEntityId3);
    SetCharacterMaphits(chrEntityId3, false);
    SetCharacterAnimationState(chrEntityId3, Enabled);
    SetCharacterGravity(chrEntityId3, Enabled);
});

// Leave Gascoyne Bridge
$Event(12410238, Default, function() {
    WaitFor(EventFlag(12410234) || EventFlag(12411802));
    WaitFixedTimeFrames(10);
    ChangeCharacterEnableState(2410158, Disabled);
});

// Hostile to Gascoyne
$Event(12410239, Default, function(chrEntityId) {
    if (!ThisEventSlot()) {
        WaitFor(
            (CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.WhitePhantom))
                && HasDamageType(chrEntityId, 10000, DamageType.Unspecified));
        WaitFixedTimeFrames(5);
        WaitFor(
            (CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.WhitePhantom))
                && HasDamageType(chrEntityId, 10000, DamageType.Unspecified));
        WaitFixedTimeFrames(5);
        WaitFor(
            (CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.WhitePhantom))
                && HasDamageType(chrEntityId, 10000, DamageType.Unspecified));
        WaitFixedTimeFrames(5);
        WaitFor(
            (CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.WhitePhantom))
                && HasDamageType(chrEntityId, 10000, DamageType.Unspecified));
        WaitFixedTimeFrames(5);
    }
L0:
    SetEventState(12415234, 0, EventEndType.End);
    SetEventFlag(12415234, OFF);
    ClearSpEffect(chrEntityId, 5590);
    SetCharacterTeamType(chrEntityId, TeamType.Indiscriminate);
});

// Play event animation
$Event(12410240, Default, function(chrEntityId, animationId, minTimeSeconds, maxTimeSeconds) {
    WaitRandomTimeSeconds(minTimeSeconds, maxTimeSeconds);
    WaitFor(CharacterAIState(chrEntityId, AIStateType.Normal));
    ForceAnimationPlayback(chrEntityId, animationId, false, true, false);
    RestartEvent();
});

// Ladder and Lever_Start Ladder
$Event(12410285, Default, function(eventFlagId, eventFlagId2, objEntityId, areaEntityId) {
    if (ThisEventSlot()) {
        ReproduceObjectAnimation(objEntityId, 2);
        WaitFixedTimeSeconds(1);
        RegisterLadder(eventFlagId, eventFlagId2, objEntityId);
        SetObjactState(areaEntityId, 2410000, Disabled);
        WaitFor(ActionButtonInArea(7100, areaEntityId));
        DisplayGenericDialog(10010172, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
        RestartEvent();
    }
    WaitFor(ObjActEventFlag(12410206));
    ForceAnimationPlayback(objEntityId, 1, false, false, false);
    WaitFixedTimeFrames(40);
    ForceAnimationPlayback(objEntityId, 2, false, false, false);
    RegisterLadder(eventFlagId, eventFlagId2, objEntityId);
    RestartEvent();
});

// checkpoint lantern control
$Event(12410287, Default, function(objEntityId, areaEntityId, playlogName) {
    if (ThisEventSlot()) {
        CreateObjectfollowingSFX(objEntityId, 100, 8028);
        EndEvent();
    }
    CreateObjectfollowingSFX(objEntityId, 100, 8029);
    WaitFor(InArea(10000, areaEntityId));
    ForceAnimationPlayback(objEntityId, 1000000, false, false, false);
    WaitFixedTimeFrames(30);
    DeleteObjectfollowingSFX(objEntityId, true);
    CreateObjectfollowingSFX(objEntityId, 100, 8028);
    PlaySE(objEntityId, SoundType.aEnvironmentalSound, 600000000);
    CreatePlaylog(playlogName);
});

// move event 2
$Event(12410340, Default, function(chrEntityId, areaEntityId, commandId, areaEntityId2) {
    WaitFor(InArea(10000, areaEntityId2));
    SetCharacterHome(chrEntityId, areaEntityId);
    RequestCharacterAICommand(chrEntityId, commandId, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(
        InArea(chrEntityId, areaEntityId)
            || CharacterAIState(chrEntityId, AIStateType.Recognition)
            || CharacterAIState(chrEntityId, AIStateType.Combat));
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
});

// Straw ball rumbling
$Event(12410370, Restart, function() {
    GotoIf(L0, CharacterDead(2410028) || CharacterDead(2410030));
    GotoIf(L0, ObjectDestroyed(2411221));
    Goto(L1);
L0:
    DeactivateObject(2411220, Disabled);
    ReproduceObjectDestruction(2411221, 1);
    EndEvent();
L1:
    DeactivateObject(2411221, Disabled);
    ForceAnimationPlayback(2411220, 0, false, false, false);
    area = InArea(10000, 2412210);
    area2 = InArea(10000, 2412211);
    flag = EventFlag(12415371);
    WaitFor(area || area2 || flag);
    SetEventFlag(12415371, ON);
    if (!flag.Passed) {
        WaitFor(
            EntityInRadiusOfEntity(2411220, 10000, 10)
                || RandomElapsedSeconds(4, 12)
                || CharacterDamagedBy(2410028, 10000)
                || CharacterDamagedBy(2410030, 10000));
    }
L2:
    ForceAnimationPlayback(2410028, 3008, false, false, false);
    ForceAnimationPlayback(2410030, 3009, false, false, false);
    WaitFixedTimeFrames(40);
    SetCharacterInvincibility(2410028, Enabled);
    SetCharacterInvincibility(2410030, Enabled);
    CreateObjectfollowingSFX(2411220, 100, 900260);
    CreateDamagingObject(12410376, 2411220, 100, 6111, DamageTargetType.Character, 1.6, 9999, 0);
    ForceAnimationPlayback(2411220, 1, false, false, false);
    WaitFixedTimeFrames(6);
    SetCharacterInvincibility(2410028, Disabled);
    SetCharacterInvincibility(2410030, Disabled);
    WaitFixedTimeFrames(206);
    DeleteObjectEvent(12410376);
    DeleteObjectfollowingSFX(2411220, true);
    DeactivateObject(2411221, Enabled);
    DeactivateObject(2411220, Disabled);
    RequestObjectDestruction(2411221, 1);
});

// crowd run before straw ball event
$Event(12415372, Restart, function(chrEntityId) {
    WaitFor(EventFlag(12415371));
    SetEventFlag(12415371, ON);
    SetCharacterHome(chrEntityId, 2412212);
    RequestCharacterAICommand(chrEntityId, 10, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(
        InArea(chrEntityId, 2412212)
            || CharacterAIState(chrEntityId, AIStateType.Recognition)
            || CharacterAIState(chrEntityId, AIStateType.Combat));
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
});

// The dog in the cage jumps out
$Event(12410378, Restart, function(chrEntityId, animationId, objEntityId, entityId) {
    if (ThisEventSlot()) {
        ReproduceObjectAnimation(objEntityId, 2);
        IssueShortWarpRequest(chrEntityId, TargetEntityType.Area, entityId, -1);
        EndEvent();
    }
    SetCharacterAIState(chrEntityId, Disabled);
    WaitFor(
        InArea(10000, 2412031)
            && (CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.WhitePhantom)));
    WaitRandomTimeFrames(50, 70);
    WaitFor(CharacterHPValue(chrEntityId) <= 2);
    ForceAnimationPlayback(chrEntityId, animationId, true, true, true);
    WaitFixedTimeFrames(76);
    WaitFor(CharacterHPValue(chrEntityId) <= 2);
    ForceAnimationPlayback(chrEntityId, animationId, true, true, true);
    WaitRandomTimeFrames(76, 100);
    WaitFor(CharacterHPValue(chrEntityId) <= 2);
    SetCharacterGravity(chrEntityId, Disabled);
    SetCharacterMaphits(chrEntityId, true);
    SetCharacterInvincibility(chrEntityId, Enabled);
    SetCharacterImmortality(chrEntityId, Disabled);
    ClearSpEffect(chrEntityId, 5915);
    ForceAnimationPlayback(objEntityId, 1, false, false, false);
    ForceAnimationPlayback(chrEntityId, 3001, false, false, false);
    WaitFixedTimeFrames(16);
    SetCharacterAIState(chrEntityId, Enabled);
    SetCharacterGravity(chrEntityId, Enabled);
    SetCharacterMaphits(chrEntityId, false);
    SetCharacterInvincibility(chrEntityId, Disabled);
});

// dog in cage
$Event(12410380, Restart, function(chrEntityId, animationId) {
    SetCharacterAIState(chrEntityId, Disabled);
    WaitFor(
        InArea(10000, 2412031)
            && (CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.WhitePhantom)));
    WaitRandomTimeFrames(55, 200);
    if (CharacterHPValue(chrEntityId) < 1) {
        ForceAnimationPlayback(chrEntityId, animationId, true, true, true);
        RestartEvent();
    }
    EndEvent();
});

// Dog in Cage_One Shot Death
$Event(12410384, Restart, function(chrEntityId) {
    WaitFor(HasDamageType(chrEntityId, 10000, DamageType.Unspecified));
    ForceCharacterDeath(chrEntityId, true);
});

// Hanging Treasure Corpse_XX
$Event(12410490, Default, function(objEntityId, objEntityId2, eventFlagId) {
    if (EventFlag(100)) {
        SetEventFlag(100, OFF);
        SetEventFlag(eventFlagId, OFF);
    }
    if (ThisEventSlot()) {
        ReproduceObjectDestruction(objEntityId, 1);
        ForceAnimationPlayback(objEntityId2, 2, false, false, false);
        SetObjectTreasureState(objEntityId2, Enabled);
        EndEvent();
    }
L0:
    CreateObjectfollowingSFX(objEntityId2, 90, 900201);
    ForceAnimationPlayback(objEntityId2, 0, false, false, false);
    WaitFor(ObjectDestroyed(objEntityId));
    ForceAnimationPlayback(objEntityId2, 1, false, true, false);
    DeleteObjectfollowingSFX(objEntityId2, true);
    SetObjectTreasureState(objEntityId2, Enabled);
    SetEventFlag(eventFlagId, ON);
    WaitFor(EventFlag(100));
    RequestObjectRestoration(objEntityId);
    ForceAnimationPlayback(objEntityId2, 0, false, false, false);
    SetObjectTreasureState(objEntityId2, Disabled);
    RestartEvent();
});

// Map First Entry_Play Log
$Event(12410990, Default, function() {
    EndIf(ThisEvent());
    WaitFor(PlayerStandingOnHit(2413500));
    ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 148, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 148, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.Weapon, 148, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.Armor, 148, PlayLogMultiplayerType.HostOnly);
});

// Increase SAN value when entering the infirmary
$Event(12410995, Default, function() {
    EndIf(ThisEvent());
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(PlayerStandingOnHit(2414110) && !InArea(10000, 2412900));
    $InitializeEvent(0, 9350, 1);
});

// Periodic bell ringing
$Event(12415010, Restart, function(entityId, soundType, soundId, timeSeconds) {
    SetNetworkSyncState(Disabled);
    WaitFixedTimeSeconds(timeSeconds);
    PlaySE(entityId, soundType, soundId);
    WaitFixedTimeFrames(440);
    if (!(!EventFlag(9801) && !EventFlag(9802))) {
        PlaySE(entityId, soundType, soundId);
    }
    RestartEvent();
});
