// ==EMEVD==
// @docs    bb-common.emedf.json
// @compress    DCX_DFLT_10000_44_9
// @game    Bloodborne
// @string    "PC情報_大学到達時\u0000クリア時間_通し\u0000クリア時間_1プレイ\u0000ボス戦_撃破時間\u0000ボス_撃破\u0000PC情報_ボス撃破_白痴の蜘蛛\u0000ボス_戦闘開始\u0000N:\\SPRJ\\data\\Param\\event\\common.emevd\u0000\u0000\u0000\u0000\u0000"
// @linked    [140]
// @version    3.4.2
// ==/EMEVD==

const area_id = 32;
const block_id = 0;

const byrgenwerth_lamp_offset = 45;
const byrgenwerth_lamp_id = 3201950;
const byrgenwerth_lamp_kindle = 12100000 + (area_id * 100) + (block_id * 10);

const lecture_hall_1_lamp_offset = 46;
const lecture_hall_1_lamp_id = 3201951;
const lecture_hall_1_lamp_kindle = 112100000 + (area_id * 100) + (block_id * 10) + 2;

const lecture_hall_2_lamp_offset = 48;
const lecture_hall_2_lamp_id = 3201953;
const lecture_hall_2_lamp_kindle = 12100000 + (area_id * 100) + (block_id * 10) + 4;

const rom_lamp_offset = 47;
const rom_offset = 6;
const rom_defeat = 13201800;
const rom_return = 3201899;
const rom_lamp_id = 3201952;
const rom_lamp_kindle = 12100000 + (area_id * 100) + (block_id * 10) + 6;
const rom_region = 3202802;
const rom_id = 3200800;

// gate
// door on side
// rom door?

// constructor
$Event(0, Default, function() {
    
    SetEventFlag(8900+rom_offset, OFF);
    
    InitializeEvent(27, 7900, 10000000+rom_return, rom_return, area_id, block_id, 8500+byrgenwerth_lamp_offset);
    
    InitializeEvent(byrgenwerth_lamp_offset, 8500, 8500+byrgenwerth_lamp_offset, byrgenwerth_lamp_id, 72111616);
    InitializeEvent(lecture_hall_1_lamp_offset, 8500, 8500+lecture_hall_1_lamp_offset, lecture_hall_1_lamp_id, 72112626);
    InitializeEvent(lecture_hall_2_lamp_offset, 8500, 8500+lecture_hall_2_lamp_offset, lecture_hall_2_lamp_id, 72112727);
    InitializeEvent(rom_lamp_offset, 8500, 8500+rom_lamp_offset, rom_lamp_id, 72111717);
    
    InitializeEvent(byrgenwerth_lamp_offset, 8100, 8100+byrgenwerth_lamp_offset, byrgenwerth_lamp_kindle);
    InitializeEvent(lecture_hall_1_lamp_offset, 8100, 8100+lecture_hall_1_lamp_offset, lecture_hall_1_lamp_kindle);
    InitializeEvent(lecture_hall_2_lamp_offset, 8100, 8100+lecture_hall_2_lamp_offset, lecture_hall_2_lamp_kindle);
    InitializeEvent(rom_lamp_offset, 8100, 8100+rom_lamp_offset, rom_lamp_kindle);
    
    InitializeEvent(byrgenwerth_lamp_offset, 8300, byrgenwerth_lamp_id+2000, byrgenwerth_lamp_id+3000, byrgenwerth_lamp_id+4000, area_id, block_id, -1, byrgenwerth_lamp_id+6000, byrgenwerth_lamp_kindle);
    InitializeEvent(lecture_hall_1_lamp_offset, 8300, lecture_hall_1_lamp_id+2000, lecture_hall_1_lamp_id+3000, lecture_hall_1_lamp_id+4000, area_id, block_id, -1, lecture_hall_1_lamp_id+6000, lecture_hall_1_lamp_kindle);
    InitializeEvent(lecture_hall_2_lamp_offset, 8300, lecture_hall_2_lamp_id+2000, lecture_hall_2_lamp_id+3000, lecture_hall_2_lamp_id+4000, area_id, block_id, -1, lecture_hall_2_lamp_id+6000, lecture_hall_2_lamp_kindle);
    
    if(EventFlag(rom_defeat+13) && !EventFlag(rom_defeat-1)) {
        if (EventFlag(rom_defeat-2)) {
            SetEventFlag(rom_defeat-2, OFF);
            MoveBloodstainAndDroppedItems(rom_region, rom_lamp_id+4000);
        }
        SetEventFlag(rom_defeat+13, OFF);
        SetEventFlag(rom_defeat, ON);
        SetEventFlag(rom_defeat+3, ON);
        InitializeEvent(rom_lamp_offset, 8300, rom_lamp_id+2000, rom_lamp_id+3000, rom_lamp_id+4000, area_id, block_id, 999, rom_lamp_id+6000, rom_lamp_kindle);
    }
    else if (EventFlag(rom_defeat+12) || EventFlag(rom_defeat-1)) {
        if (EventFlag(rom_defeat-2)) {
            SetEventFlag(rom_defeat-2, OFF);
            MoveBloodstainAndDroppedItems(rom_region, rom_lamp_id+5000);
        }
        SetEventFlag(rom_defeat, OFF);
        SetEventFlag(rom_defeat+2, ON);
        SetEventFlag(rom_defeat+3, OFF);
        SetEventFlag(rom_defeat+3000, ON);
        SetEventFlag(rom_defeat+3002, ON);
        SetEventFlag(rom_defeat+3030, ON);
        SetEventFlag(rom_defeat+12, OFF);
        SetEventFlag(rom_defeat+13, ON);
        SetEventFlag(rom_defeat-1, OFF);
        SetEventFlag(8900+rom_offset, ON);
        InitializeEvent(rom_lamp_offset, 8300, rom_lamp_id+2000, rom_lamp_id+3000, rom_lamp_id+5000, area_id, block_id, -1, rom_lamp_id+6000, rom_lamp_kindle);
    }
    else {
        InitializeEvent(rom_lamp_offset, 8300, rom_lamp_id+2000, rom_lamp_id+3000, rom_lamp_id+4000, area_id, block_id, -1, rom_lamp_id+6000, rom_lamp_kindle);
    }
    
    InitializeEvent(rom_offset, 12102070, rom_defeat+13, 0, 7456, rom_id);
    
    InitializeEvent(rom_offset, 8900, rom_defeat-1, rom_lamp_id+1000, rom_defeat-2);
    InitializeEvent(rom_offset, 7700, rom_defeat+11, rom_defeat+12, rom_lamp_id+1000, 832001);
    
    InitializeEvent(1600, 12107000, 72111600, 3201950, 2412950);
    InitializeEvent(1601, 12107000, 72111601, 3201950, 2412951);
    InitializeEvent(1602, 12107000, 72111602, 3201950, 2412952);
    InitializeEvent(1603, 12107000, 72111603, 3201950, 2412953);
    InitializeEvent(1604, 12107000, 72111604, 3201950, 2402950);
    InitializeEvent(1605, 12107000, 72111605, 3201950, 2402951);
    InitializeEvent(1606, 12107000, 72111606, 3201950, 2422950);
    InitializeEvent(1607, 12107000, 72111607, 3201950, 2422952);
    InitializeEvent(1608, 12107000, 72111608, 3201950, 2422951);
    InitializeEvent(1609, 12107000, 72111609, 3201950, 2302950);
    InitializeEvent(1610, 12107000, 72111610, 3201950, 2302951);
    InitializeEvent(1611, 12107000, 72111611, 3201950, 2302952);
    InitializeEvent(1612, 12107000, 72111612, 3201950, 2202950);
    InitializeEvent(1613, 12107000, 72111613, 3201950, 2202951);
    InitializeEvent(1614, 12107000, 72111614, 3201950, 2702950);
    InitializeEvent(1615, 12107000, 72111615, 3201950, 2702951);
    InitializeEvent(1616, 12107000, 72111616, 3201950, 3202950);
    InitializeEvent(1617, 12107000, 72111617, 3201950, 3202952);
    InitializeEvent(1618, 12107000, 72111618, 3201950, 2802950);
    InitializeEvent(1619, 12107000, 72111619, 3201950, 2802953);
    InitializeEvent(1620, 12107000, 72111620, 3201950, 2802951);
    InitializeEvent(1621, 12107000, 72111621, 3201950, 2802952);
    InitializeEvent(1622, 12107000, 72111622, 3201950, 2502950);
    InitializeEvent(1623, 12107000, 72111623, 3201950, 2502952);
    InitializeEvent(1624, 12107000, 72111624, 3201950, 2502951);
    InitializeEvent(1625, 12107000, 72111625, 3201950, 2112950);
    InitializeEvent(1626, 12107000, 72111626, 3201950, 3202951);
    InitializeEvent(1627, 12107000, 72111627, 3201950, 3202953);
    InitializeEvent(1628, 12107000, 72111628, 3201950, 3302950);
    InitializeEvent(1629, 12107000, 72111629, 3201950, 3302951);
    InitializeEvent(1630, 12107000, 72111630, 3201950, 2602950);
    InitializeEvent(1631, 12107000, 72111631, 3201950, 2602953);
    InitializeEvent(1632, 12107000, 72111632, 3201950, 2602952);
    InitializeEvent(1633, 12107000, 72111633, 3201950, 2602951);
    InitializeEvent(1634, 12107000, 72111634, 3201950, 3402950);
    InitializeEvent(1635, 12107000, 72111635, 3201950, 3402951);
    InitializeEvent(1636, 12107000, 72111636, 3201950, 3402953);
    InitializeEvent(1637, 12107000, 72111637, 3201950, 3402952);
    InitializeEvent(1638, 12107000, 72111638, 3201950, 3502950);
    InitializeEvent(1639, 12107000, 72111639, 3201950, 3502951);
    InitializeEvent(1640, 12107000, 72111640, 3201950, 3502952);
    InitializeEvent(1641, 12107000, 72111641, 3201950, 3602950);
    InitializeEvent(1642, 12107000, 72111642, 3201950, 3602951);
    InitializeEvent(1643, 12107000, 72111643, 3201950, 3602952);
    InitializeEvent(1644, 12107000, 72111644, 3201950, 2902950);
    InitializeEvent(1645, 12107000, 72111645, 3201950, 2902951);
    InitializeEvent(1646, 12107000, 72111646, 3201950, 2902952);
    InitializeEvent(1647, 12107000, 72111647, 3201950, 2902953);
    InitializeEvent(1648, 12107000, 72111648, 3201950, 2902954);
    InitializeEvent(1649, 12107000, 72111649, 3201950, 2902955);
    InitializeEvent(1650, 12107000, 72111650, 3201950, 2902956);
    InitializeEvent(1651, 12107000, 72111651, 3201950, 2902957);
    InitializeEvent(1652, 12107000, 72111652, 3201950, 2902958);
    InitializeEvent(1653, 12107000, 72111653, 3201950, 2902959);

    InitializeEvent(1700, 12107000, 72111700, 3201952, 2412950);
    InitializeEvent(1701, 12107000, 72111701, 3201952, 2412951);
    InitializeEvent(1702, 12107000, 72111702, 3201952, 2412952);
    InitializeEvent(1703, 12107000, 72111703, 3201952, 2412953);
    InitializeEvent(1704, 12107000, 72111704, 3201952, 2402950);
    InitializeEvent(1705, 12107000, 72111705, 3201952, 2402951);
    InitializeEvent(1706, 12107000, 72111706, 3201952, 2422950);
    InitializeEvent(1707, 12107000, 72111707, 3201952, 2422952);
    InitializeEvent(1708, 12107000, 72111708, 3201952, 2422951);
    InitializeEvent(1709, 12107000, 72111709, 3201952, 2302950);
    InitializeEvent(1710, 12107000, 72111710, 3201952, 2302951);
    InitializeEvent(1711, 12107000, 72111711, 3201952, 2302952);
    InitializeEvent(1712, 12107000, 72111712, 3201952, 2202950);
    InitializeEvent(1713, 12107000, 72111713, 3201952, 2202951);
    InitializeEvent(1714, 12107000, 72111714, 3201952, 2702950);
    InitializeEvent(1715, 12107000, 72111715, 3201952, 2702951);
    InitializeEvent(1716, 12107000, 72111716, 3201952, 3202950);
    InitializeEvent(1717, 12107000, 72111717, 3201952, 3202952);
    InitializeEvent(1718, 12107000, 72111718, 3201952, 2802950);
    InitializeEvent(1719, 12107000, 72111719, 3201952, 2802953);
    InitializeEvent(1720, 12107000, 72111720, 3201952, 2802951);
    InitializeEvent(1721, 12107000, 72111721, 3201952, 2802952);
    InitializeEvent(1722, 12107000, 72111722, 3201952, 2502950);
    InitializeEvent(1723, 12107000, 72111723, 3201952, 2502952);
    InitializeEvent(1724, 12107000, 72111724, 3201952, 2502951);
    InitializeEvent(1725, 12107000, 72111725, 3201952, 2112950);
    InitializeEvent(1726, 12107000, 72111726, 3201952, 3202951);
    InitializeEvent(1727, 12107000, 72111727, 3201952, 3202953);
    InitializeEvent(1728, 12107000, 72111728, 3201952, 3302950);
    InitializeEvent(1729, 12107000, 72111729, 3201952, 3302951);
    InitializeEvent(1730, 12107000, 72111730, 3201952, 2602950);
    InitializeEvent(1731, 12107000, 72111731, 3201952, 2602953);
    InitializeEvent(1732, 12107000, 72111732, 3201952, 2602952);
    InitializeEvent(1733, 12107000, 72111733, 3201952, 2602951);
    InitializeEvent(1734, 12107000, 72111734, 3201952, 3402950);
    InitializeEvent(1735, 12107000, 72111735, 3201952, 3402951);
    InitializeEvent(1736, 12107000, 72111736, 3201952, 3402953);
    InitializeEvent(1737, 12107000, 72111737, 3201952, 3402952);
    InitializeEvent(1738, 12107000, 72111738, 3201952, 3502950);
    InitializeEvent(1739, 12107000, 72111739, 3201952, 3502951);
    InitializeEvent(1740, 12107000, 72111740, 3201952, 3502952);
    InitializeEvent(1741, 12107000, 72111741, 3201952, 3602950);
    InitializeEvent(1742, 12107000, 72111742, 3201952, 3602951);
    InitializeEvent(1743, 12107000, 72111743, 3201952, 3602952);
    InitializeEvent(1744, 12107000, 72111744, 3201952, 2902950);
    InitializeEvent(1745, 12107000, 72111745, 3201952, 2902951);
    InitializeEvent(1746, 12107000, 72111746, 3201952, 2902952);
    InitializeEvent(1747, 12107000, 72111747, 3201952, 2902953);
    InitializeEvent(1748, 12107000, 72111748, 3201952, 2902954);
    InitializeEvent(1749, 12107000, 72111749, 3201952, 2902955);
    InitializeEvent(1750, 12107000, 72111750, 3201952, 2902956);
    InitializeEvent(1751, 12107000, 72111751, 3201952, 2902957);
    InitializeEvent(1752, 12107000, 72111752, 3201952, 2902958);
    InitializeEvent(1753, 12107000, 72111753, 3201952, 2902959);

    InitializeEvent(2600, 12107000, 72112600, 3201951, 2412950);
    InitializeEvent(2601, 12107000, 72112601, 3201951, 2412951);
    InitializeEvent(2602, 12107000, 72112602, 3201951, 2412952);
    InitializeEvent(2603, 12107000, 72112603, 3201951, 2412953);
    InitializeEvent(2604, 12107000, 72112604, 3201951, 2402950);
    InitializeEvent(2605, 12107000, 72112605, 3201951, 2402951);
    InitializeEvent(2606, 12107000, 72112606, 3201951, 2422950);
    InitializeEvent(2607, 12107000, 72112607, 3201951, 2422952);
    InitializeEvent(2608, 12107000, 72112608, 3201951, 2422951);
    InitializeEvent(2609, 12107000, 72112609, 3201951, 2302950);
    InitializeEvent(2610, 12107000, 72112610, 3201951, 2302951);
    InitializeEvent(2611, 12107000, 72112611, 3201951, 2302952);
    InitializeEvent(2612, 12107000, 72112612, 3201951, 2202950);
    InitializeEvent(2613, 12107000, 72112613, 3201951, 2202951);
    InitializeEvent(2614, 12107000, 72112614, 3201951, 2702950);
    InitializeEvent(2615, 12107000, 72112615, 3201951, 2702951);
    InitializeEvent(2616, 12107000, 72112616, 3201951, 3202950);
    InitializeEvent(2617, 12107000, 72112617, 3201951, 3202952);
    InitializeEvent(2618, 12107000, 72112618, 3201951, 2802950);
    InitializeEvent(2619, 12107000, 72112619, 3201951, 2802953);
    InitializeEvent(2620, 12107000, 72112620, 3201951, 2802951);
    InitializeEvent(2621, 12107000, 72112621, 3201951, 2802952);
    InitializeEvent(2622, 12107000, 72112622, 3201951, 2502950);
    InitializeEvent(2623, 12107000, 72112623, 3201951, 2502952);
    InitializeEvent(2624, 12107000, 72112624, 3201951, 2502951);
    InitializeEvent(2625, 12107000, 72112625, 3201951, 2112950);
    InitializeEvent(2626, 12107000, 72112626, 3201951, 3202951);
    InitializeEvent(2627, 12107000, 72112627, 3201951, 3202953);
    InitializeEvent(2628, 12107000, 72112628, 3201951, 3302950);
    InitializeEvent(2629, 12107000, 72112629, 3201951, 3302951);
    InitializeEvent(2630, 12107000, 72112630, 3201951, 2602950);
    InitializeEvent(2631, 12107000, 72112631, 3201951, 2602953);
    InitializeEvent(2632, 12107000, 72112632, 3201951, 2602952);
    InitializeEvent(2633, 12107000, 72112633, 3201951, 2602951);
    InitializeEvent(2634, 12107000, 72112634, 3201951, 3402950);
    InitializeEvent(2635, 12107000, 72112635, 3201951, 3402951);
    InitializeEvent(2636, 12107000, 72112636, 3201951, 3402953);
    InitializeEvent(2637, 12107000, 72112637, 3201951, 3402952);
    InitializeEvent(2638, 12107000, 72112638, 3201951, 3502950);
    InitializeEvent(2639, 12107000, 72112639, 3201951, 3502951);
    InitializeEvent(2640, 12107000, 72112640, 3201951, 3502952);
    InitializeEvent(2641, 12107000, 72112641, 3201951, 3602950);
    InitializeEvent(2642, 12107000, 72112642, 3201951, 3602951);
    InitializeEvent(2643, 12107000, 72112643, 3201951, 3602952);
    InitializeEvent(2644, 12107000, 72112644, 3201951, 2902950);
    InitializeEvent(2645, 12107000, 72112645, 3201951, 2902951);
    InitializeEvent(2646, 12107000, 72112646, 3201951, 2902952);
    InitializeEvent(2647, 12107000, 72112647, 3201951, 2902953);
    InitializeEvent(2648, 12107000, 72112648, 3201951, 2902954);
    InitializeEvent(2649, 12107000, 72112649, 3201951, 2902955);
    InitializeEvent(2650, 12107000, 72112650, 3201951, 2902956);
    InitializeEvent(2651, 12107000, 72112651, 3201951, 2902957);
    InitializeEvent(2652, 12107000, 72112652, 3201951, 2902958);
    InitializeEvent(2653, 12107000, 72112653, 3201951, 2902959);

    InitializeEvent(2700, 12107000, 72112700, 3201953, 2412950);
    InitializeEvent(2701, 12107000, 72112701, 3201953, 2412951);
    InitializeEvent(2702, 12107000, 72112702, 3201953, 2412952);
    InitializeEvent(2703, 12107000, 72112703, 3201953, 2412953);
    InitializeEvent(2704, 12107000, 72112704, 3201953, 2402950);
    InitializeEvent(2705, 12107000, 72112705, 3201953, 2402951);
    InitializeEvent(2706, 12107000, 72112706, 3201953, 2422950);
    InitializeEvent(2707, 12107000, 72112707, 3201953, 2422952);
    InitializeEvent(2708, 12107000, 72112708, 3201953, 2422951);
    InitializeEvent(2709, 12107000, 72112709, 3201953, 2302950);
    InitializeEvent(2710, 12107000, 72112710, 3201953, 2302951);
    InitializeEvent(2711, 12107000, 72112711, 3201953, 2302952);
    InitializeEvent(2712, 12107000, 72112712, 3201953, 2202950);
    InitializeEvent(2713, 12107000, 72112713, 3201953, 2202951);
    InitializeEvent(2714, 12107000, 72112714, 3201953, 2702950);
    InitializeEvent(2715, 12107000, 72112715, 3201953, 2702951);
    InitializeEvent(2716, 12107000, 72112716, 3201953, 3202950);
    InitializeEvent(2717, 12107000, 72112717, 3201953, 3202952);
    InitializeEvent(2718, 12107000, 72112718, 3201953, 2802950);
    InitializeEvent(2719, 12107000, 72112719, 3201953, 2802953);
    InitializeEvent(2720, 12107000, 72112720, 3201953, 2802951);
    InitializeEvent(2721, 12107000, 72112721, 3201953, 2802952);
    InitializeEvent(2722, 12107000, 72112722, 3201953, 2502950);
    InitializeEvent(2723, 12107000, 72112723, 3201953, 2502952);
    InitializeEvent(2724, 12107000, 72112724, 3201953, 2502951);
    InitializeEvent(2725, 12107000, 72112725, 3201953, 2112950);
    InitializeEvent(2726, 12107000, 72112726, 3201953, 3202951);
    InitializeEvent(2727, 12107000, 72112727, 3201953, 3202953);
    InitializeEvent(2728, 12107000, 72112728, 3201953, 3302950);
    InitializeEvent(2729, 12107000, 72112729, 3201953, 3302951);
    InitializeEvent(2730, 12107000, 72112730, 3201953, 2602950);
    InitializeEvent(2731, 12107000, 72112731, 3201953, 2602953);
    InitializeEvent(2732, 12107000, 72112732, 3201953, 2602952);
    InitializeEvent(2733, 12107000, 72112733, 3201953, 2602951);
    InitializeEvent(2734, 12107000, 72112734, 3201953, 3402950);
    InitializeEvent(2735, 12107000, 72112735, 3201953, 3402951);
    InitializeEvent(2736, 12107000, 72112736, 3201953, 3402953);
    InitializeEvent(2737, 12107000, 72112737, 3201953, 3402952);
    InitializeEvent(2738, 12107000, 72112738, 3201953, 3502950);
    InitializeEvent(2739, 12107000, 72112739, 3201953, 3502951);
    InitializeEvent(2740, 12107000, 72112740, 3201953, 3502952);
    InitializeEvent(2741, 12107000, 72112741, 3201953, 3602950);
    InitializeEvent(2742, 12107000, 72112742, 3201953, 3602951);
    InitializeEvent(2743, 12107000, 72112743, 3201953, 3602952);
    InitializeEvent(2744, 12107000, 72112744, 3201953, 2902950);
    InitializeEvent(2745, 12107000, 72112745, 3201953, 2902951);
    InitializeEvent(2746, 12107000, 72112746, 3201953, 2902952);
    InitializeEvent(2747, 12107000, 72112747, 3201953, 2902953);
    InitializeEvent(2748, 12107000, 72112748, 3201953, 2902954);
    InitializeEvent(2749, 12107000, 72112749, 3201953, 2902955);
    InitializeEvent(2750, 12107000, 72112750, 3201953, 2902956);
    InitializeEvent(2751, 12107000, 72112751, 3201953, 2902957);
    InitializeEvent(2752, 12107000, 72112752, 3201953, 2902958);
    InitializeEvent(2753, 12107000, 72112753, 3201953, 2902959);

    SetEventFlag(72110016, OFF);
    SetEventFlag(72110116, OFF);
    SetEventFlag(72110216, OFF);
    SetEventFlag(72110316, OFF);
    SetEventFlag(72110416, OFF);
    SetEventFlag(72110516, OFF);
    SetEventFlag(72110616, OFF);
    SetEventFlag(72110716, OFF);
    SetEventFlag(72110816, OFF);
    SetEventFlag(72110916, OFF);
    SetEventFlag(72111016, OFF);
    SetEventFlag(72111116, OFF);
    SetEventFlag(72111216, OFF);
    SetEventFlag(72111316, OFF);
    SetEventFlag(72111416, OFF);
    SetEventFlag(72111516, OFF);
    SetEventFlag(72111616, OFF);
    SetEventFlag(72111716, OFF);
    SetEventFlag(72111816, OFF);
    SetEventFlag(72111916, OFF);
    SetEventFlag(72112016, OFF);
    SetEventFlag(72112116, OFF);
    SetEventFlag(72112216, OFF);
    SetEventFlag(72112316, OFF);
    SetEventFlag(72112416, OFF);
    SetEventFlag(72112516, OFF);
    SetEventFlag(72112616, OFF);
    SetEventFlag(72112716, OFF);
    SetEventFlag(72112816, OFF);
    SetEventFlag(72112916, OFF);
    SetEventFlag(72113016, OFF);
    SetEventFlag(72113116, OFF);
    SetEventFlag(72113216, OFF);
    SetEventFlag(72113316, OFF);
    SetEventFlag(72113416, OFF);
    SetEventFlag(72113516, OFF);
    SetEventFlag(72113616, OFF);
    SetEventFlag(72113716, OFF);
    SetEventFlag(72113816, OFF);
    SetEventFlag(72113916, OFF);
    SetEventFlag(72114016, OFF);
    SetEventFlag(72114116, OFF);
    SetEventFlag(72114216, OFF);
    SetEventFlag(72114316, OFF);
    SetEventFlag(72114416, OFF);
    SetEventFlag(72114516, OFF);
    SetEventFlag(72114616, OFF);
    SetEventFlag(72114716, OFF);
    SetEventFlag(72114816, OFF);
    SetEventFlag(72114916, OFF);
    SetEventFlag(72115016, OFF);
    SetEventFlag(72115116, OFF);
    SetEventFlag(72115216, OFF);
    SetEventFlag(72115316, OFF);

    SetEventFlag(72110017, OFF);
    SetEventFlag(72110117, OFF);
    SetEventFlag(72110217, OFF);
    SetEventFlag(72110317, OFF);
    SetEventFlag(72110417, OFF);
    SetEventFlag(72110517, OFF);
    SetEventFlag(72110617, OFF);
    SetEventFlag(72110717, OFF);
    SetEventFlag(72110817, OFF);
    SetEventFlag(72110917, OFF);
    SetEventFlag(72111017, OFF);
    SetEventFlag(72111117, OFF);
    SetEventFlag(72111217, OFF);
    SetEventFlag(72111317, OFF);
    SetEventFlag(72111417, OFF);
    SetEventFlag(72111517, OFF);
    SetEventFlag(72111617, OFF);
    SetEventFlag(72111717, OFF);
    SetEventFlag(72111817, OFF);
    SetEventFlag(72111917, OFF);
    SetEventFlag(72112017, OFF);
    SetEventFlag(72112117, OFF);
    SetEventFlag(72112217, OFF);
    SetEventFlag(72112317, OFF);
    SetEventFlag(72112417, OFF);
    SetEventFlag(72112517, OFF);
    SetEventFlag(72112617, OFF);
    SetEventFlag(72112717, OFF);
    SetEventFlag(72112817, OFF);
    SetEventFlag(72112917, OFF);
    SetEventFlag(72113017, OFF);
    SetEventFlag(72113117, OFF);
    SetEventFlag(72113217, OFF);
    SetEventFlag(72113317, OFF);
    SetEventFlag(72113417, OFF);
    SetEventFlag(72113517, OFF);
    SetEventFlag(72113617, OFF);
    SetEventFlag(72113717, OFF);
    SetEventFlag(72113817, OFF);
    SetEventFlag(72113917, OFF);
    SetEventFlag(72114017, OFF);
    SetEventFlag(72114117, OFF);
    SetEventFlag(72114217, OFF);
    SetEventFlag(72114317, OFF);
    SetEventFlag(72114417, OFF);
    SetEventFlag(72114517, OFF);
    SetEventFlag(72114617, OFF);
    SetEventFlag(72114717, OFF);
    SetEventFlag(72114817, OFF);
    SetEventFlag(72114917, OFF);
    SetEventFlag(72115017, OFF);
    SetEventFlag(72115117, OFF);
    SetEventFlag(72115217, OFF);
    SetEventFlag(72115317, OFF);

    SetEventFlag(72110026, OFF);
    SetEventFlag(72110126, OFF);
    SetEventFlag(72110226, OFF);
    SetEventFlag(72110326, OFF);
    SetEventFlag(72110426, OFF);
    SetEventFlag(72110526, OFF);
    SetEventFlag(72110626, OFF);
    SetEventFlag(72110726, OFF);
    SetEventFlag(72110826, OFF);
    SetEventFlag(72110926, OFF);
    SetEventFlag(72111026, OFF);
    SetEventFlag(72111126, OFF);
    SetEventFlag(72111226, OFF);
    SetEventFlag(72111326, OFF);
    SetEventFlag(72111426, OFF);
    SetEventFlag(72111526, OFF);
    SetEventFlag(72111626, OFF);
    SetEventFlag(72111726, OFF);
    SetEventFlag(72111826, OFF);
    SetEventFlag(72111926, OFF);
    SetEventFlag(72112026, OFF);
    SetEventFlag(72112126, OFF);
    SetEventFlag(72112226, OFF);
    SetEventFlag(72112326, OFF);
    SetEventFlag(72112426, OFF);
    SetEventFlag(72112526, OFF);
    SetEventFlag(72112626, OFF);
    SetEventFlag(72112726, OFF);
    SetEventFlag(72112826, OFF);
    SetEventFlag(72112926, OFF);
    SetEventFlag(72113026, OFF);
    SetEventFlag(72113126, OFF);
    SetEventFlag(72113226, OFF);
    SetEventFlag(72113326, OFF);
    SetEventFlag(72113426, OFF);
    SetEventFlag(72113526, OFF);
    SetEventFlag(72113626, OFF);
    SetEventFlag(72113726, OFF);
    SetEventFlag(72113826, OFF);
    SetEventFlag(72113926, OFF);
    SetEventFlag(72114026, OFF);
    SetEventFlag(72114126, OFF);
    SetEventFlag(72114226, OFF);
    SetEventFlag(72114326, OFF);
    SetEventFlag(72114426, OFF);
    SetEventFlag(72114526, OFF);
    SetEventFlag(72114626, OFF);
    SetEventFlag(72114726, OFF);
    SetEventFlag(72114826, OFF);
    SetEventFlag(72114926, OFF);
    SetEventFlag(72115026, OFF);
    SetEventFlag(72115126, OFF);
    SetEventFlag(72115226, OFF);
    SetEventFlag(72115326, OFF);

    SetEventFlag(72110027, OFF);
    SetEventFlag(72110127, OFF);
    SetEventFlag(72110227, OFF);
    SetEventFlag(72110327, OFF);
    SetEventFlag(72110427, OFF);
    SetEventFlag(72110527, OFF);
    SetEventFlag(72110627, OFF);
    SetEventFlag(72110727, OFF);
    SetEventFlag(72110827, OFF);
    SetEventFlag(72110927, OFF);
    SetEventFlag(72111027, OFF);
    SetEventFlag(72111127, OFF);
    SetEventFlag(72111227, OFF);
    SetEventFlag(72111327, OFF);
    SetEventFlag(72111427, OFF);
    SetEventFlag(72111527, OFF);
    SetEventFlag(72111627, OFF);
    SetEventFlag(72111727, OFF);
    SetEventFlag(72111827, OFF);
    SetEventFlag(72111927, OFF);
    SetEventFlag(72112027, OFF);
    SetEventFlag(72112127, OFF);
    SetEventFlag(72112227, OFF);
    SetEventFlag(72112327, OFF);
    SetEventFlag(72112427, OFF);
    SetEventFlag(72112527, OFF);
    SetEventFlag(72112627, OFF);
    SetEventFlag(72112727, OFF);
    SetEventFlag(72112827, OFF);
    SetEventFlag(72112927, OFF);
    SetEventFlag(72113027, OFF);
    SetEventFlag(72113127, OFF);
    SetEventFlag(72113227, OFF);
    SetEventFlag(72113327, OFF);
    SetEventFlag(72113427, OFF);
    SetEventFlag(72113527, OFF);
    SetEventFlag(72113627, OFF);
    SetEventFlag(72113727, OFF);
    SetEventFlag(72113827, OFF);
    SetEventFlag(72113927, OFF);
    SetEventFlag(72114027, OFF);
    SetEventFlag(72114127, OFF);
    SetEventFlag(72114227, OFF);
    SetEventFlag(72114327, OFF);
    SetEventFlag(72114427, OFF);
    SetEventFlag(72114527, OFF);
    SetEventFlag(72114627, OFF);
    SetEventFlag(72114727, OFF);
    SetEventFlag(72114827, OFF);
    SetEventFlag(72114927, OFF);
    SetEventFlag(72115027, OFF);
    SetEventFlag(72115127, OFF);
    SetEventFlag(72115227, OFF);
    SetEventFlag(72115327, OFF);

    InitializeEvent(0, 12107100, 72100421, 3201950, 9021);
    InitializeEvent(1, 12107100, 72100422, 3201950, 9022);
    InitializeEvent(2, 12107100, 72100423, 3201950, 9023);
    InitializeEvent(3, 12107100, 72100424, 3201950, 9024);
    InitializeEvent(4, 12107100, 72100425, 3201950, 9025);
    InitializeEvent(5, 12107100, 72100426, 3201950, 9026);

    InitializeEvent(6, 12107100, 72100427, 3201951, 9021);
    InitializeEvent(7, 12107100, 72100428, 3201951, 9022);
    InitializeEvent(8, 12107100, 72100429, 3201951, 9023);
    InitializeEvent(9, 12107100, 72100430, 3201951, 9024);
    InitializeEvent(10, 12107100, 72100431, 3201951, 9025);
    InitializeEvent(11, 12107100, 72100432, 3201951, 9026);

    InitializeEvent(12, 12107100, 72100433, 3201952, 9021);
    InitializeEvent(13, 12107100, 72100434, 3201952, 9022);
    InitializeEvent(14, 12107100, 72100435, 3201952, 9023);
    InitializeEvent(15, 12107100, 72100436, 3201952, 9024);
    InitializeEvent(16, 12107100, 72100437, 3201952, 9025);
    InitializeEvent(17, 12107100, 72100438, 3201952, 9026);

    InitializeEvent(18, 12107100, 72100439, 3201953, 9021);
    InitializeEvent(19, 12107100, 72100440, 3201953, 9022);
    InitializeEvent(20, 12107100, 72100441, 3201953, 9023);
    InitializeEvent(21, 12107100, 72100442, 3201953, 9024);
    InitializeEvent(22, 12107100, 72100443, 3201953, 9025);
    InitializeEvent(23, 12107100, 72100444, 3201953, 9026);

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

    InitializeEvent(30, 12107200, 72100330, 2902950, 9001, 2901953);
    InitializeEvent(31, 12107200, 72100331, 2902951, 9002, 2901953);
    InitializeEvent(32, 12107200, 72100332, 2902952, 9003, 2901953);
    InitializeEvent(33, 12107200, 72100333, 2902953, 9004, 2901953);
    InitializeEvent(34, 12107200, 72100334, 2902954, 9005, 2901953);
    InitializeEvent(35, 12107200, 72100335, 2902955, 9006, 2901953);
    InitializeEvent(36, 12107200, 72100336, 2902956, 9007, 2901953);
    InitializeEvent(37, 12107200, 72100337, 2902957, 9008, 2901953);
    InitializeEvent(38, 12107200, 72100338, 2902958, 9009, 2901953);
    InitializeEvent(39, 12107200, 72100339, 2902959, 9010, 2901953);
    
    InitializeEvent(45, 7000, 3200950, 3201950, 999, 13207800, -1);
    InitializeEvent(46, 7000, 3200951, 3201951, 999, 13207820, -1);
    
    InitializeEvent(47, 7000, 3200952, 3201952, 13201803, 13207840, rom_defeat+13);
    InitializeEvent(rom_offset, 8800, rom_defeat+13, rom_lamp_id-1000, rom_lamp_id, rom_lamp_id+3000);
    
    InitializeEvent(48, 7000, 3200953, 3201953, 999, 13207860, -1);
    InitializeEvent(45, 7100, 73200200, 3201950);
    InitializeEvent(46, 7100, 73200201, 3201951);
    InitializeEvent(47, 7100, 73200202, 3201952);
    InitializeEvent(48, 7100, 73200203, 3201953);
    InitializeEvent(45, 7200, 73200100, 3201950, 2102951);
    InitializeEvent(46, 7200, 73200101, 3201951, 2102953);
    InitializeEvent(47, 7200, 73200102, 3201952, 2102951);
    InitializeEvent(48, 7200, 73200103, 3201953, 2102953);
    InitializeEvent(45, 7300, 72103200, 3201950);
    InitializeEvent(46, 7300, 72103201, 3201951);
    InitializeEvent(47, 7300, 72103202, 3201952);
    InitializeEvent(48, 7300, 72103203, 3201953);
    InitializeEvent(45, 12102220, 3201950, 3200950);
    InitializeEvent(46, 12102220, 3201951, 3200951);
    InitializeEvent(47, 12102220, 3201952, 3200952);
    InitializeEvent(48, 12102220, 3201953, 3200953);
    InitializeEvent(70, 7600, 3201999, 3203999);
    InitializeEvent(9, 9200, 3203900);
    InitializeEvent(8, 9220, 3200710, 13204220, 13204221, 3200, 32);
    InitializeEvent(8, 9240, 3200710, 13204220, 13204221, 13204222, 32);
    InitializeEvent(8, 9260, 3200710, 13204220, 13204221, 13204222, 32);
    InitializeEvent(8, 9280, 3200710, 13204220, 13204221, 3200, 13204800, 32);
    RegisterLadder(13200000, 13200001, 3201130);
    RegisterLadder(13200002, 13200003, 3201131);
    InitializeEvent(0, 13200990, 0);
    InitializeEvent(0, 13200950, 0);
    InitializeEvent(0, 13200960, 0);
    CreateObjectfollowingSFX(3201000, 200, 900130);
    CreateObjectfollowingSFX(3201001, 200, 900130);
    CreateObjectfollowingSFX(3201002, 200, 900130);
    CreateObjectfollowingSFX(3201003, 200, 900130);
    CreateObjectfollowingSFX(3201004, 200, 900130);
    CreateObjectfollowingSFX(3201005, 200, 900130);
    DeleteMapSFX(3203910, false);
    DeleteMapSFX(3203911, false);
    DeleteMapSFX(3203912, false);
    InitializeEvent(0, 13204400, 13204440, 3203910, 13204420, 13204430, 13201800, 6001);
    InitializeEvent(0, 13204401, 13204441, 3203911, 13204421, 13204431, 13201800, 13204420);
    InitializeEvent(0, 13204402, 13204442, 3203912, 13204422, 13204432, 13201800, 13204420);
    InitializeEvent(0, 13204410, 0, 3200910, 3202910, 13204420, 13204430, 13204440, 13201800, 10566);
    InitializeEvent(1, 13204410, 5, 3200911, 3202913, 13204421, 13204431, 13204441, 13201800, 10565);
    InitializeEvent(2, 13204410, 5, 3200912, 3202914, 13204422, 13204432, 13204442, 13201800, 10561);
    InitializeEvent(0, 13204450, 3200910, 3202911, 13204420, 13204430, 13204800);
    InitializeEvent(1, 13204450, 3200911, 3202915, 13204421, 13204431, 13204800);
    InitializeEvent(2, 13204450, 3200912, 3202916, 13204422, 13204432, 13204800);
    InitializeEvent(0, 13204460, 3200910, 3202911, 3202800, 3202809, 101130, 13204450, 3202809);
    InitializeEvent(1, 13204460, 3200911, 3202915, 3202800, 3202809, 101130, 13204451, 3202809);
    InitializeEvent(2, 13204460, 3200912, 3202916, 3202800, 3202809, 101130, 13204452, 3202809);
    InitializeEvent(0, 13204470, 3200910);
    InitializeEvent(1, 13204470, 3200911);
    InitializeEvent(2, 13204470, 3200912);
    InitializeEvent(0, 13204832, 0);
    InitializeEvent(0, 13204833, 0);
    InitializeEvent(0, 13204834, 0);
    InitializeEvent(0, 13201800, 0);
    InitializeEvent(0, 13201801, 0);
    InitializeEvent(0, 13201802, 0);
    if (!EventFlag(rom_defeat+13)) {
        InitializeEvent(0, 13201803, 0);
    }
    InitializeEvent(0, 13204830, 0);
    InitializeEvent(0, 13204831, 0);
    InitializeEvent(0, 13204802, 0);
    InitializeEvent(0, 13204803, 0);
    InitializeEvent(0, 13204804, 0);
    InitializeEvent(0, 13204805, 0);
    InitializeEvent(0, 13204807, 0);
    InitializeEvent(0, 13204808, 0);
    InitializeEvent(0, 13204809, 0);
    InitializeEvent(0, 13204810, 0);
    InitializeEvent(0, 13204820, 0);
    InitializeEvent(0, 13204821, 0);
    InitializeEvent(0, 13201804, 0);
    InitializeEvent(0, 13204000, 3200200, 13204802);
    InitializeEvent(1, 13204000, 3200201, 13204802);
    InitializeEvent(2, 13204000, 3200202, 13204802);
    InitializeEvent(3, 13204000, 3200203, 13204802);
    InitializeEvent(4, 13204000, 3200204, 13204802);
    InitializeEvent(5, 13204000, 3200205, 13204802);
    InitializeEvent(6, 13204000, 3200206, 13204802);
    InitializeEvent(7, 13204000, 3200207, 13204802);
    InitializeEvent(8, 13204000, 3200208, 13204802);
    InitializeEvent(9, 13204000, 3200209, 13204802);
    InitializeEvent(10, 13204000, 3200210, 13204811);
    InitializeEvent(11, 13204000, 3200211, 13204811);
    InitializeEvent(12, 13204000, 3200212, 13204811);
    InitializeEvent(13, 13204000, 3200213, 13204811);
    InitializeEvent(14, 13204000, 3200214, 13204811);
    InitializeEvent(15, 13204000, 3200215, 13204811);
    InitializeEvent(16, 13204000, 3200216, 13204811);
    InitializeEvent(17, 13204000, 3200217, 13204811);
    InitializeEvent(18, 13204000, 3200218, 13204811);
    InitializeEvent(19, 13204000, 3200219, 13204811);
    InitializeEvent(20, 13204000, 3200220, 13204812);
    InitializeEvent(21, 13204000, 3200221, 13204812);
    InitializeEvent(22, 13204000, 3200222, 13204812);
    InitializeEvent(23, 13204000, 3200223, 13204812);
    InitializeEvent(24, 13204000, 3200224, 13204812);
    InitializeEvent(25, 13204000, 3200225, 13204812);
    InitializeEvent(26, 13204000, 3200226, 13204812);
    InitializeEvent(27, 13204000, 3200227, 13204812);
    InitializeEvent(28, 13204000, 3200228, 13204812);
    InitializeEvent(29, 13204000, 3200229, 13204812);
    InitializeEvent(0, 13204050, 3200200, 13204802);
    InitializeEvent(1, 13204050, 3200201, 13204802);
    InitializeEvent(2, 13204050, 3200202, 13204802);
    InitializeEvent(3, 13204050, 3200203, 13204802);
    InitializeEvent(4, 13204050, 3200204, 13204802);
    InitializeEvent(5, 13204050, 3200205, 13204802);
    InitializeEvent(6, 13204050, 3200206, 13204802);
    InitializeEvent(7, 13204050, 3200207, 13204802);
    InitializeEvent(8, 13204050, 3200208, 13204802);
    InitializeEvent(9, 13204050, 3200209, 13204802);
    InitializeEvent(10, 13204050, 3200210, 13204811);
    InitializeEvent(11, 13204050, 3200211, 13204811);
    InitializeEvent(12, 13204050, 3200212, 13204811);
    InitializeEvent(13, 13204050, 3200213, 13204811);
    InitializeEvent(14, 13204050, 3200214, 13204811);
    InitializeEvent(15, 13204050, 3200215, 13204811);
    InitializeEvent(16, 13204050, 3200216, 13204811);
    InitializeEvent(17, 13204050, 3200217, 13204811);
    InitializeEvent(18, 13204050, 3200218, 13204811);
    InitializeEvent(19, 13204050, 3200219, 13204811);
    InitializeEvent(20, 13204050, 3200220, 13204812);
    InitializeEvent(21, 13204050, 3200221, 13204812);
    InitializeEvent(22, 13204050, 3200222, 13204812);
    InitializeEvent(23, 13204050, 3200223, 13204812);
    InitializeEvent(24, 13204050, 3200224, 13204812);
    InitializeEvent(25, 13204050, 3200225, 13204812);
    InitializeEvent(26, 13204050, 3200226, 13204812);
    InitializeEvent(27, 13204050, 3200227, 13204812);
    InitializeEvent(28, 13204050, 3200228, 13204812);
    InitializeEvent(29, 13204050, 3200229, 13204812);
    InitializeEvent(0, 13204730, 3200200);
    InitializeEvent(1, 13204730, 3200201);
    InitializeEvent(2, 13204730, 3200202);
    InitializeEvent(3, 13204730, 3200203);
    InitializeEvent(4, 13204730, 3200204);
    InitializeEvent(5, 13204730, 3200205);
    InitializeEvent(6, 13204730, 3200206);
    InitializeEvent(7, 13204730, 3200207);
    InitializeEvent(8, 13204730, 3200208);
    InitializeEvent(9, 13204730, 3200209);
    InitializeEvent(10, 13204730, 3200210);
    InitializeEvent(11, 13204730, 3200211);
    InitializeEvent(12, 13204730, 3200212);
    InitializeEvent(13, 13204730, 3200213);
    InitializeEvent(14, 13204730, 3200214);
    InitializeEvent(15, 13204730, 3200215);
    InitializeEvent(16, 13204730, 3200216);
    InitializeEvent(17, 13204730, 3200217);
    InitializeEvent(18, 13204730, 3200218);
    InitializeEvent(19, 13204730, 3200219);
    InitializeEvent(20, 13204730, 3200220);
    InitializeEvent(21, 13204730, 3200221);
    InitializeEvent(22, 13204730, 3200222);
    InitializeEvent(23, 13204730, 3200223);
    InitializeEvent(24, 13204730, 3200224);
    InitializeEvent(25, 13204730, 3200225);
    InitializeEvent(26, 13204730, 3200226);
    InitializeEvent(27, 13204730, 3200227);
    InitializeEvent(28, 13204730, 3200228);
    InitializeEvent(29, 13204730, 3200229);
    InitializeEvent(0, 13200010, 3201110, 1, 13200100, 3201100, 100);
    InitializeEvent(0, 13200020, 7030, 7031, 3201110, 13200010);
    InitializeEvent(0, 13200030, 3201100, 7100, 10010172, 13200010);
    InitializeEvent(0, 13200040, 3201120, 13200120, 1, 3200040);
    InitializeEvent(1, 13200040, 3201122, 13200122, 1, 31);
    InitializeEvent(2, 13200040, 3201201, 13200203, 1, 31);
    InitializeEvent(3, 13200040, 3201210, 13200211, 1, 31);
    InitializeEvent(0, 13200050, 7030, 3201122, 13200041);
    InitializeEvent(1, 13200050, 7030, 3201201, 13200042);
    InitializeEvent(0, 13200055, 7030, 3201210, 13200043);
    InitializeEvent(0, 13200060, 3201200, 13200200, 13200201, 1, 30, 31);
    InitializeEvent(2, 13200060, 3201202, 13200204, 13200205, 1, 30, 31);
    InitializeEvent(3, 13200060, 3201203, 13200206, 13200207, 1, 3200030, 31);
    InitializeEvent(4, 13200060, 3201204, 13200208, 13200209, 1, 30, 31);
    InitializeEvent(6, 13200060, 3201211, 13200212, 13200213, 1, 30, 31);
    InitializeEvent(7, 13200060, 3201212, 13200214, 13200215, 1, 30, 31);
    InitializeEvent(8, 13200060, 3201213, 13200216, 13200217, 1, 30, 31);
    InitializeEvent(9, 13200060, 3201214, 13200218, 13200219, 1, 30, 31);
    InitializeEvent(10, 13200060, 3201220, 13200220, 13200221, 1, 30, 31);
    InitializeEvent(11, 13200060, 3201221, 13200222, 13200223, 1, 30, 31);
    InitializeEvent(12, 13200060, 3201222, 13200224, 13200225, 1, 30, 31);
    InitializeEvent(13, 13200060, 3201223, 13200226, 13200227, 1, 30, 31);
    InitializeEvent(14, 13200060, 3201224, 13200228, 13200229, 1, 30, 31);
    InitializeEvent(17, 13200060, 3201232, 13200234, 13200235, 1, 30, 31);
    InitializeEvent(18, 13200060, 3201233, 13200236, 13200237, 1, 30, 31);
    InitializeEvent(19, 13200060, 3201234, 13200238, 13200239, 1, 30, 31);
    InitializeEvent(0, 13200200, 3201050, 13200050);
    InitializeEvent(1, 13200200, 3201051, 13200051);
    InitializeEvent(3, 13200200, 3201053, 13200053);
    InitializeEvent(4, 13200200, 3201054, 13200054);
    InitializeEvent(10, 13200200, 3201060, 13200060);
    InitializeEvent(12, 13200200, 3201062, 13200062);
    GotoIf(S0, !CharacterType(10000, TargetType.Alive));
    GotoIf(S0, !EventFlag(6325));
    SetEventFlag(13201999, ON);
S0:
    if (!EventFlag(13201999)) {
        DeactivateObject(3201500, Enabled);
        DeactivateObject(3201501, Disabled);
        SetObjectTreasureState(3201500, Enabled);
        SetObjectTreasureState(3201501, Disabled);
    } else {
        DeactivateObject(3201500, Disabled);
        DeactivateObject(3201501, Enabled);
        SetObjectTreasureState(3201500, Disabled);
        SetObjectTreasureState(3201501, Enabled);
    }
    GotoIf(S1, !CharacterType(10000, TargetType.Alive));
    GotoIf(S1, !EventFlag(6326));
    SetEventFlag(13201998, ON);
S1:
    if (!EventFlag(13201998)) {
        DeactivateObject(3201064, Enabled);
        DeactivateObject(3201065, Disabled);
        SetObjactState(3201064, 9942, Enabled);
        SetObjactState(3201065, 9942, Disabled);
        InitializeEvent(14, 13200200, 3201064, 13200064);
    } else {
        DeactivateObject(3201064, Disabled);
        DeactivateObject(3201065, Enabled);
        SetObjactState(3201064, 9942, Disabled);
        SetObjactState(3201065, 9942, Enabled);
        InitializeEvent(15, 13200200, 3201065, 13200065);
    }
    InitializeEvent(0, 13204100, 3201000, 7407, 10012007);
    InitializeEvent(1, 13204100, 3201001, 7408, 10012008);
    InitializeEvent(2, 13204100, 3201002, 7409, 10012009);
    InitializeEvent(3, 13204100, 3201003, 7410, 10012010);
    InitializeEvent(4, 13204100, 3201004, 7411, 10012011);
    InitializeEvent(5, 13204100, 3201005, 7412, 10012012);
    InitializeEvent(0, 13200400, 0);
    InitializeEvent(0, 13200500, 3200110);
    InitializeEvent(0, 13205000, 3200500, 3202500, 0, 1073741824, 3203500);
    InitializeEvent(1, 13205000, 3200501, 3202501, 0, 1073741824, 3203501);
    InitializeEvent(11, 13205000, 3200315, 3202315, 0, 1073741824, 3203315);
    InitializeEvent(12, 13205000, 3200337, 3202337, 0, 1073741824, 3203337);
    InitializeEvent(13, 13205000, 3200340, 3202337, 0, 1073741824, 3203340);
    InitializeEvent(14, 13205000, 3200341, 3202337, 0, 1073741824, 3203341);
    InitializeEvent(15, 13205000, 3200345, 3202337, 0, 1073741824, 3203345);
    InitializeEvent(16, 13205000, 3200343, 3202342, 0, 1073741824, 3203343);
    InitializeEvent(17, 13205000, 3200110, 3202110, 0, 1073741824, 3203110);
    InitializeEvent(18, 13205000, 3200620, 3202620, 0, 1073741824, 3203620);
    InitializeEvent(0, 13205200, 0);
    InitializeEvent(0, 13205040, 3200505, 3202505, 1073741824, 0, 3202506);
    InitializeEvent(1, 13205040, 3200508, 3202505, 1073741824, 1065353216, 3202507);
    InitializeEvent(0, 13205080, 3200333, 3202334, 7000, 7001, 0, 0);
    InitializeEvent(1, 13205080, 3200336, 3202336, 7002, 7003, 1, 53200110);
    InitializeEvent(2, 13205080, 3200342, 3202342, 7000, 7001, 0, 0);
    InitializeEvent(3, 13205080, 3200346, 3202315, 7000, 7001, 0, 0);
    InitializeEvent(0, 13205100, 3200300, 0);
    InitializeEvent(1, 13205100, 3200301, 0);
    InitializeEvent(2, 13205100, 3200302, 0);
    InitializeEvent(3, 13205100, 3200303, 0);
    InitializeEvent(4, 13205100, 3200304, 0);
    InitializeEvent(5, 13205100, 3200305, 0);
    InitializeEvent(6, 13205100, 3200306, 0);
    InitializeEvent(7, 13205100, 3200307, 0);
    InitializeEvent(8, 13205100, 3200308, 0);
    InitializeEvent(9, 13205100, 3200309, 0);
    InitializeEvent(10, 13205100, 3200310, 0);
    InitializeEvent(11, 13205100, 3200311, 0);
    InitializeEvent(12, 13205100, 3200312, 0);
    InitializeEvent(13, 13205100, 3200313, 0);
    InitializeEvent(14, 13205100, 3200314, 0);
    InitializeEvent(16, 13205100, 3200316, 0);
    InitializeEvent(17, 13205100, 3200317, 0);
    InitializeEvent(18, 13205100, 3200318, 0);
    InitializeEvent(19, 13205100, 3200319, 0);
    InitializeEvent(20, 13205100, 3200320, 0);
    InitializeEvent(21, 13205100, 3200321, 0);
    InitializeEvent(22, 13205100, 3200322, 0);
    InitializeEvent(23, 13205100, 3200323, 0);
    InitializeEvent(24, 13205100, 3200324, 0);
    InitializeEvent(25, 13205100, 3200325, 0);
    InitializeEvent(26, 13205100, 3200326, 0);
    InitializeEvent(27, 13205100, 3200327, 0);
    InitializeEvent(28, 13205100, 3200328, 0);
    InitializeEvent(29, 13205100, 3200329, 0);
    InitializeEvent(30, 13205100, 3200330, 0);
    InitializeEvent(31, 13205100, 3200331, 0);
    InitializeEvent(0, 13205140, 3200347, 3202347);
    InitializeEvent(0, 13205600, 3290, 3290, 8, 7000, 5907, 13205700, 13205760, 3200420);
    InitializeEvent(1, 13205600, 3291, 3291, 9, 7022, 5907, 13205700, 13205760, 3200420);
    InitializeEvent(2, 13205600, 3292, 3292, 10, 7023, 5907, 13205700, 13205760, 3200420);
    InitializeEvent(3, 13205600, 3290, 3290, 8, 7000, 5907, 13205701, 13205761, 3200421);
    InitializeEvent(4, 13205600, 3291, 3291, 9, 7022, 5907, 13205701, 13205761, 3200421);
    InitializeEvent(5, 13205600, 3292, 3292, 10, 7023, 5907, 13205701, 13205761, 3200421);
    InitializeEvent(0, 13205630, 3290, 3290, 8, 40, 13205700, 3200420);
    InitializeEvent(1, 13205630, 3291, 3291, 9, 40, 13205700, 3200420);
    InitializeEvent(2, 13205630, 3292, 3292, 10, 40, 13205700, 3200420);
    InitializeEvent(3, 13205630, 3290, 3290, 8, 40, 13205701, 3200421);
    InitializeEvent(4, 13205630, 3291, 3291, 9, 40, 13205701, 3200421);
    InitializeEvent(5, 13205630, 3292, 3292, 10, 40, 13205701, 3200421);
    InitializeEvent(0, 13205660, 30, 40, 13205760, 3200420, 2817);
    InitializeEvent(1, 13205660, 50, 40, 13205760, 3200420, 3074);
    InitializeEvent(2, 13205660, 60, 40, 13205760, 3200420, 3331);
    InitializeEvent(3, 13205660, 30, 40, 13205761, 3200421, 2817);
    InitializeEvent(4, 13205660, 50, 40, 13205761, 3200421, 3074);
    InitializeEvent(5, 13205660, 60, 40, 13205761, 3200421, 3331);
    InitializeEvent(0, 13200310, 0);
    InitializeEvent(0, 13200311, 0);
});

// pre-constructor
$Event(50, Default, function() {
    InitializeEvent(0, 13200100, 0);
    InitializeEvent(0, 13200102, 0);
    InitializeEvent(0, 13200103, 0);
    InitializeEvent(0, 13200105, 0);
    InitializeEvent(0, 13200106, 0);
    InitializeEvent(0, 13200107, 0);
    InitializeEvent(0, 13200108, 0);
    InitializeEvent(0, 13200109, 0);
    InitializeEvent(0, 13200110, 0);
    InitializeEvent(0, 13200120, 0);
    InitializeEvent(0, 13200121, 0);
    if (EventFlag(1420)) {
        SetCharacterGravity(3200101, Disabled);
        SetCharacterMaphits(3200101, true);
        InitializeEvent(0, 13200102, 0);
    }
});

// Open the lever door_XX
$Event(13200010, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    if (ThisEventSlot()) {
        ReproduceObjectAnimation(X0_4, X4_4);
        SetObjactState(X12_4, X16_4, Disabled);
        NotifySoundDampeningOfDoorEvent(X0_4, DoorState.DoorOpening);
        EndEvent();
    }
L0:
    WaitFor(ObjActEventFlag(X8_4));
    SetObjactState(X12_4, X16_4, Disabled);
    ForceAnimationPlayback(X0_4, X4_4, false, true, false);
    WaitFixedTimeSeconds(0);
});

// Msg_XX when inspecting the lever door
$Event(13200020, Default, function(X0_4, X4_4, X8_4, X12_4) {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(X12_4));
    act = ActionButtonInArea(X0_4, X8_4);
    act2 = ActionButtonInArea(X4_4, X8_4);
    flag = EventFlag(X12_4);
    WaitFor(act || act2 || flag);
    EndIf(flag.Passed);
    DisplayGenericDialog(10010160, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
    RestartEvent();
});

// Lever_XX after opening the lever door
$Event(13200030, Default, function(X0_4, X4_4, X8_4, X12_4) {
    SetNetworkSyncState(Disabled);
    WaitFor(EventFlag(X12_4) && ActionButtonInArea(X4_4, X0_4));
    DisplayGenericDialog(X8_4, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
    RestartEvent();
});

// open the door_XX
$Event(13200040, Default, function(X0_4, X4_4, X8_4, X12_4) {
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

// Msg_XX when inspecting the door
$Event(13200050, Default, function(X0_4, X4_4, X8_4) {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(X8_4));
    act = ActionButtonInArea(X0_4, X4_4);
    flag = EventFlag(X8_4);
    WaitFor(act || flag);
    if (!flag.Passed) {
        DisplayGenericDialog(10010161, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
        RestartEvent();
    }
L0:
    RestartEvent();
});

// Msg_ patch room when examining the door
$Event(13200055, Default, function(X0_4, X4_4, X8_4) {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(X8_4));
    flagAct = !EventFlag(1420) && cond && ActionButtonInArea(X0_4, X4_4);
    flag = EventFlag(X8_4);
    WaitFor(flagAct || flag);
    if (!flag.Passed) {
        DisplayGenericDialog(10010161, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
        WaitFixedTimeSeconds(1);
        RestartEvent();
    }
L0:
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

// Open the door_school building_XX
$Event(13200060, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    if (ThisEventSlot()) {
        ReproduceObjectAnimation(X0_4, X12_4);
        SetObjactState(X0_4, X16_4, Disabled);
        SetObjactState(X0_4, X20_4, Disabled);
        NotifySoundDampeningOfDoorEvent(X0_4, DoorState.DoorOpening);
    }
L0:
    obj = ObjActEventFlag(X4_4);
    WaitFor(obj || ObjActEventFlag(X8_4));
    if (!obj.Passed) {
        SetObjactState(X0_4, X16_4, Disabled);
    } else {
        SetObjactState(X0_4, X20_4, Disabled);
    }
});

// Spider man patch_Judgment that turned backwards
$Event(13200100, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    SetEventFlag(13200101, OFF);
    EndIf(!EventFlag(1420));
    SetCharacterAnimationState(3200101, Disabled);
    WaitFor(InArea(10000, 3202850));
    SetEventFlag(13200101, ON);
    SetCharacterAnimationState(3200101, Enabled);
    WaitFor(!InArea(10000, 3202850));
    RestartEvent();
});

// Spider man patch_Switch standing position
$Event(13200102, Default, function() {
    GotoIf(L0, EventFlag(1431));
    GotoIf(L0, EventFlag(1430));
    GotoIf(L0, EventFlag(1423));
    GotoIf(L0, EventFlag(1422));
    GotoIf(L0, EventFlag(1421));
    GotoIf(L1, EventFlag(1420));
L0:
    ReproduceObjectDestruction(3201300, 1);
    ReproduceObjectDestruction(3201301, 1);
    ReproduceObjectDestruction(3201302, 1);
    ReproduceObjectDestruction(3201303, 1);
    ReproduceObjectDestruction(3201304, 1);
    ReproduceObjectDestruction(3201305, 1);
    ReproduceObjectDestruction(3201306, 1);
    ReproduceObjectDestruction(3201307, 1);
    ReproduceObjectDestruction(3201308, 1);
    ReproduceObjectDestruction(3201309, 1);
    ReproduceObjectDestruction(3201310, 1);
    ReproduceObjectDestruction(3201311, 1);
    ReproduceObjectDestruction(3201312, 1);
    ReproduceObjectDestruction(3201313, 1);
    ReproduceObjectDestruction(3201314, 1);
    ReproduceObjectDestruction(3201315, 1);
    ReproduceObjectDestruction(3201316, 1);
    ReproduceObjectDestruction(3201317, 1);
    ReproduceObjectDestruction(3201318, 1);
    ReproduceObjectDestruction(3201319, 1);
    ReproduceObjectDestruction(3201320, 1);
    SetCharacterHome(3200101, 3202852);
    IssueShortWarpRequest(3200101, TargetEntityType.Area, 3202852, -1);
    SetSpEffect(3200101, 5327, false);
    SetSpEffect(3200101, 5403, false);
    if (EventFlag(1423) || EventFlag(1432)) {
        SetCharacterBackreadState(3200101, true);
    }
    if (EventFlag(1431)) {
        ForceCharacterTreasure(3200101);
    }
    EndEvent();
L1:
    ForceAnimationPlayback(3200101, 7010, true, false, false);
    IssueShortWarpRequest(3200101, TargetEntityType.Area, 3202851, -1);
    SetObjactState(3201210, 31, Disabled);
});

// Spider Man Patch_Unstick Door
$Event(13200103, Default, function() {
    EndIf(AnyBatchEventFlags(1421, 1437));
    SetEventFlag(73200327, OFF);
    flag = EventFlag(1420) && EventFlag(73200327);
    dmg = HasDamageType(3200101, 10000, DamageType.Unspecified);
    WaitFor(flag || dmg);
    if (dmg.Passed) {
        SetEventFlag(13200104, ON);
    }
    SetCharacterHome(3200101, 3202852);
    SetSpEffect(3200101, 5327, false);
    ForceAnimationPlayback(3200101, 7011, false, false, false);
    WaitFixedTimeFrames(54);
    SetCharacterGravity(3200101, Enabled);
    SetCharacterMaphits(3200101, false);
    SetObjactState(3201210, 31, Enabled);
});

// Spider man patch_face to face
$Event(13200105, Default, function() {
    WaitFor(EventFlag(1420) && (EventFlag(73200321) || (EventFlag(13200104) && EventFlag(73200321))));
    BatchSetEventFlags(1420, 1437, OFF);
    SetEventFlag(1421, ON);
    SaveRequest(0);
});

// Spider man patch_face-to-face SAN value
$Event(13200106, Default, function() {
    EndIf(ThisEvent());
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(EventFlag(13200101) && EntityInRadiusOfEntity(10000, 3200101, 5));
    InitializeEvent(0, 9350, 2);
});

// Spider man patch_just before departure
$Event(13200107, Default, function() {
    WaitFor(EventFlag(9466) && EventFlag(9461) && EventFlag(1421) && EventFlag(73200324));
    BatchSetEventFlags(1420, 1437, OFF);
    SetEventFlag(1422, ON);
});

// Spider man patch_hostile
$Event(13200108, Default, function() {
    EndIf(EventFlag(1430));
    EndIf(EventFlag(1431));
    WaitFor((EventFlag(1421) || EventFlag(1422)) && HPRatio(3200101) < 0.5 && CharacterDamagedBy(3200101, 10000));
    ForceAnimationPlayback(3200101, 3000, false, false, false);
    BatchSetEventFlags(1420, 1437, OFF);
    SetEventFlag(1430, ON);
    SaveRequest(0);
});

// Spider man patch_Switch team type
$Event(13200109, Default, function() {
    EndIf(EventFlag(1431));
    SetCharacterTeamType(3200101, TeamType.FriendlyNPC);
    WaitFor(EventFlag(1430));
    SetCharacterTeamType(3200101, TeamType.HostileNPC);
});

// spider man patch_died
$Event(13200110, Default, function() {
    if (EventFlag(1431)) {
        EndEvent();
    }
L0:
    WaitFor(CharacterDead(3200101));
    BatchSetEventFlags(1420, 1437, OFF);
    SetEventFlag(1431, ON);
    SaveRequest(0);
});

// President_Dead
$Event(13200120, Default, function() {
    if (EventFlag(1061)) {
        ChangeCharacterEnableState(3200100, Disabled);
        ForceCharacterTreasure(3200100);
        EndEvent();
    }
L0:
    WaitFor(CharacterDead(3200100));
    BatchSetEventFlags(1060, 1079, OFF);
    SetEventFlag(1061, ON);
    SaveRequest(0);
});

// Rector points to the moon
$Event(13200121, Default, function() {
    EndIf(EventFlag(1061));
    WaitFor(EventFlag(73200300) && CharacterHasSpEffect(3200100, 151));
    SetEventFlag(73200300, OFF);
    ForceAnimationPlayback(3200100, 7010, false, false, false);
    if (!ThisEvent()) {
        InitializeEvent(0, 9350, 2);
    }
    RestartEvent();
});

// treasure chest_XX
$Event(13200200, Default, function(X0_4, X4_4) {
    if (ThisEventSlot()) {
        ReproduceObjectAnimation(X0_4, 0);
        SetObjactState(X0_4, -1, Disabled);
        SetObjectTreasureState(X0_4, Enabled);
        EndEvent();
    }
    WaitFor(ObjActEventFlag(X4_4));
    WaitFixedTimeFrames(10);
    SetObjectTreasureState(X0_4, Enabled);
});

// Warp to TR when opening the door
$Event(13200310, Default, function() {
    WaitFor(ObjActEventFlag(13200124));
    SpawnOneshotSFX(TargetEntityType.Area, 3202001, -1, 932201);
    WaitFixedTimeSeconds(6);
    WarpPlayerToRespawnPoint(2602959);
});

// Open the door to warp home
$Event(13200311, Default, function() {
    WaitFor(ObjActEventFlag(13200123));
    SpawnOneshotSFX(TargetEntityType.Area, 3202000, -1, 932201);
    WaitFixedTimeSeconds(6);
    WarpPlayerToRespawnPoint(3302959);
});

// Get the terrace key
$Event(13200400, Default, function() {
    EndIf(EventFlag(53200810));
    EndIf(!CharacterType(10000, TargetType.Alive));
    CreateObjectfollowingSFX(3201010, 200, 900201);
    WaitFor(ActionButtonInArea(3200010, 3201010));
    ForceAnimationPlayback(10000, 101140, false, false, false);
    AwardItemLot(3200810);
    DeleteObjectfollowingSFX(3201010, true);
});

// NPC Death Reenactment_University_XX
$Event(13200500, Default, function(X0_4) {
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

// Map First Entry_Play Log
$Event(13200990, Default, function() {
    EndIf(ThisEvent());
    WaitFor(PlayerStandingOnHit(3204000));
    ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 0, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 0, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.Weapon, 0, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.Armor, 0, PlayLogMultiplayerType.HostOnly);
});

// Boss Defeat_Idiot Spider
$Event(13201800, Default, function() {
    if (ThisEvent()) {
        SetMapSoundState(3203802, Disabled);
        SetMapSoundState(3203803, Disabled);
        ChangeCharacterEnableState(3200800, Disabled);
        ForceCharacterDeath(3200800, false);
        DeactivateObject(3201800, Disabled);
        DeleteMapSFX(3203800, false);
        ActivateHit(3204010, Disabled);
        EndEvent();
    }
L0:
    WaitFor(CharacterDead(3200800));
    DisplayBanner(TextBannerType.DemonKilled);
    DeactivateObject(3201800, Disabled);
    DeleteMapSFX(3203800, true);
    ActivateHit(3204010, Disabled);
    SetLockcamSlotNumber(32, 0, 0);
    WaitFixedTimeSeconds(3);
    HandleBossDefeat(3200800);
    SetNetworkSyncState(Disabled);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        WaitFor(CharacterType(10000, TargetType.Alive));
        InitializeEvent(0, 9350, 2);
        AwardAchievement(17);
        AwardItemLot(51001900);
        SetEventFlag(3200, ON);
        SetEventFlag(9465, ON);
        StartTimeMeasurement(3200000, 22, Disabled);
        StartTimeMeasurement(3200001, 40, Disabled);
        StartTimeMeasurement(3200010, 62, Disabled);
        CreatePlaylog(80);
        ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 92, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 92, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Weapon, 92, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Armor, 92, PlayLogMultiplayerType.HostOnly);
        if (EventFlag(rom_defeat+13)) {
            InitializeEvent(rom_offset, 7800, rom_lamp_id+1000, 832001);
        }
        EndEvent();
    }
L1:
    WaitFor(CharacterType(10000, TargetType.WhitePhantom));
    WaitFixedTimeSeconds(0);
});

// Boss Defeat SE Play_Idiot Spider
$Event(13201801, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(13201800));
    flag = EventFlag(13201800);
    WaitFor(flag || (!CharacterBackreadStatus(3200800) && HPRatio(3200800) <= 0));
    EndIf(flag.Passed);
    PlaySE(3202800, SoundType.cCharacterMotion, 0);
});

// The host enters the boss room_First match_Idiot spider
$Event(13201802, Default, function() {
    EndIf(EventFlag(13201800));
    EndIf(ThisEvent());
    WaitFor(!EventFlag(13201800) && !ThisEvent() && HasDamageType(3200800, -1, DamageType.Unspecified));
    SetEventFlag(13204800, ON);
    EndIf(EventFlag(9303));
    InitializeEvent(0, 9350, 2);
    SetEventFlag(9303, ON);
});

// Bride appears after defeating the boss
$Event(13201803, Restart, function() {
    if (ThisEvent()) {
        ChangeCharacterEnableState(3200801, Disabled);
        EndEvent();
    }
L0:
    SetCharacterAIState(3200801, Disabled);
    if (CharacterType(10000, TargetType.Alive)) {
        SetNetworkUpdateAuthority(3200801, AuthorityLevel.Forced);
    }
    GotoIf(L1, EventFlag(13201800));
    GotoIf(L2, !CharacterType(10000, TargetType.Alive));
    WaitFor(EventFlag(13201800));
    chrArea = CharacterType(10000, TargetType.Alive) && InArea(10000, 3202811);
    chrArea2 = CharacterType(10000, TargetType.Alive) && InArea(10000, 3202812);
    chrArea3 = CharacterType(10000, TargetType.Alive) && InArea(10000, 3202813);
    WaitFor(chrArea || chrArea2 || chrArea3 || (CharacterType(10000, TargetType.Alive) && InArea(10000, 3202814)));
    GotoIf(S2, chrArea.Passed);
    GotoIf(S1, chrArea2.Passed);
    GotoIf(S0, chrArea3.Passed);
    IssueShortWarpRequest(3200801, TargetEntityType.Area, 3202815, -1);
    Goto(L1);
S0:
    IssueShortWarpRequest(3200801, TargetEntityType.Area, 3202816, -1);
    Goto(L1);
S1:
    IssueShortWarpRequest(3200801, TargetEntityType.Area, 3202817, -1);
    Goto(L1);
S2:
    IssueShortWarpRequest(3200801, TargetEntityType.Area, 3202818, -1);
L1:
    ForceAnimationPlayback(3200801, 7001, false, false, false);
    WaitFor(CharacterType(10000, TargetType.Alive) && EntityInRadiusOfEntity(10000, 3200801, 12));
    SetEventFlag(9180, ON);
    WaitFixedTimeFrames(1);
    PlayCutsceneAndChangeTimePeriod(32000000, CutscenePlayMode.Skippable, 10000, 3);
    WaitFixedTimeFrames(1);
    SetEventFlag(9180, OFF);
    SetEventFlag(70002802, ON);
    WarpPlayerToRespawnPoint(2802958);
    EndEvent();
L2:
    WaitFor(EventFlag(6001));
    WaitFixedTimeSeconds(0);
});

// Idiot Spider_Processing for staggered entry guests
$Event(13201804, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EventFlag(13204800));
    EndIf(HasMultiplayerState(MultiplayerState.Host));
    SetEventFlag(13204800, ON);
    SetEventFlag(13201802, ON);
});

// Idiot spider (child)_Emergence_XX
$Event(13204000, Default, function(X0_4, X4_4) {
    EndIf(ThisEventSlot());
    SetCharacterAIState(X0_4, Disabled);
    SetCharacterGravity(X0_4, Disabled);
    WaitFor(
        EventFlag(X4_4)
            && (RandomElapsedSeconds(2, 3) || (CharacterType(10000, TargetType.WhitePhantom) && ElapsedSeconds(3))));
    SetCharacterAIState(X0_4, Enabled);
    RotateCharacter(X0_4, 10000, 7000, true);
    SetCharacterGravity(X0_4, Enabled);
});

// Idiot spider (child)_forced death_XX
$Event(13204050, Default, function(X0_4, X4_4) {
    if (EventFlag(13201800)) {
        ChangeCharacterEnableState(X0_4, Disabled);
        ForceCharacterDeath(X0_4, false);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(X4_4) && CharacterDead(3200800));
    WaitFor(RandomElapsedSeconds(0, 1));
    ForceCharacterDeath(X0_4, false);
});

// piece of paper_XX
$Event(13204100, Default, function(X0_4, X4_4, X8_4) {
    SetNetworkSyncState(Disabled);
    WaitFor(ActionButtonInArea(X4_4, X0_4));
    DisplayGenericDialog(X8_4, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
    RestartEvent();
});

// event target specification_XX
$Event(13204730, Default, function(X0_4) {
    EndIf(EventFlag(13201800));
    WaitFor(EventFlag(13204802));
    SetCharacterEventTarget(X0_4, 3200800);
});

// Host enters boss room_Rematch_Idiot spider
$Event(13204830, Default, function() {
    EndIf(EventFlag(13201800));
    if (!EventFlag(13201802)) {
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            DeactivateObject(3201800, Disabled);
            DeleteMapSFX(3203800, false);
        }
        ActivateHit(3204010, Disabled);
        WaitFor(!EventFlag(13201800) && EventFlag(13201802));
        DeactivateObject(3201800, Enabled);
        SpawnMapSFX(3203800);
        ActivateHit(3204010, Enabled);
    }
L0:
    flagChrAct = !EventFlag(13201800) && CharacterType(10000, TargetType.Alive) && ActionButtonInArea(3200800, 3201800);
    flag = EventFlag(13201800);
    WaitFor(flagChrAct || flag);
    EndIf(flag.Passed);
    RotateCharacter(10000, 3202800, 101130, false);
    WaitFor(
        (CharacterType(10000, TargetType.Alive) && InArea(10000, 3202809))
            || (CharacterType(10000, TargetType.Alive) && ElapsedSeconds(2)));
    RestartEvent();
});

// Guest enters boss room_Idiot Spider
$Event(13204831, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(13201800));
    WaitFor(
        !EventFlag(13201800)
            && EventFlag(13201802)
            && EventFlag(13204800)
            && CharacterType(10000, TargetType.WhitePhantom)
            && ActionButtonInArea(3200800, 3201800));
    RotateCharacter(10000, 3202800, 101130, false);
    WaitFor(
        (CharacterType(10000, TargetType.WhitePhantom) && InArea(10000, 3202801))
            || (CharacterType(10000, TargetType.WhitePhantom) && ElapsedSeconds(2)));
    RestartEvent();
});

// Disabled per fog wall in the world of others_Idiot spider
$Event(13204832, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EntityInRadiusOfEntity(10000, 3201800, 2));
    SetCharacterGravityMaphitStateExcludingOwnWorld(10000, Disabled);
    WaitFixedTimeFrames(6);
    RestartEvent();
});

// Disabled per fog wall in other world 2_Idiot spider
$Event(13204833, Default, function() {
    WaitFor(
        CharacterType(10000, TargetType.Alive)
            && !EntityInRadiusOfEntity(10000, 3201800, 2)
            && EntityInRadiusOfEntity(10000, 3201800, 4));
    SetCharacterGravityMaphitStateExcludingOwnWorld(10000, Enabled);
    WaitFixedTimeFrames(6);
    RestartEvent();
});

// Disabled per fog wall in other worlds 3_Choir NPC
$Event(13204834, Default, function() {
    WaitFor(EntityInRadiusOfEntity(3200110, 3201800, 2));
    SetCharacterGravityMaphitStateExcludingOwnWorld(3200110, Disabled);
    WaitFor(!EntityInRadiusOfEntity(3200110, 3201800, 2));
    SetCharacterGravityMaphitStateExcludingOwnWorld(3200110, Enabled);
    RestartEvent();
});

// Boss starts moving_Idiot spider
$Event(13204802, Default, function() {
    if (EventFlag(rom_defeat+13)) {
        Goto(L0);
    }
    EndIf(EventFlag(13201800));
    SetCharacterAIState(3200800, Disabled);
    SetCharacterHPBarDisplay(3200800, Disabled);
    SetCharacterImmortality(3200800, Enabled);
    if (!ThisEvent()) {
        WaitFor(EventFlag(13201802) && EventFlag(13204800) || EventFlag(rom_defeat+13));
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            IssueBossRoomEntryNotification(0);
            SetNetworkUpdateAuthority(3200800, AuthorityLevel.Forced);
        }
    }
L0:
    SetEventFlag(13204800, ON);
    GotoIf(L1, NumberOfCoopClients() == 0);
    GotoIf(L2, NumberOfCoopClients() == 1);
    GotoIf(L3, NumberOfCoopClients() == 2);
L1:
    Goto(L4);
L2:
    SetSpEffect(3200800, 7500, true);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(3200800);
    Goto(L4);
L3:
    SetSpEffect(3200800, 7501, true);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(3200800);
    Goto(L4);
L4:
    SetCharacterAIState(3200800, Enabled);
    SetCharacterImmortality(3200800, Disabled);
    SetSpEffect(3200800, 3011, true);
    DisplayBossHealthBar(Enabled, 3200800, 0, 510000);
    SetNetworkUpdateRate(3200800, true, CharacterUpdateFrequency.AlwaysUpdate);
    CreatePlaylog(124);
    StartTimeMeasurement(3200010, 62, Enabled);
});

// Boss BGM ON_Idiot Spider
$Event(13204803, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(13201800));
    if (!ThisEvent()) {
        SetMapSoundState(3203802, Disabled);
        SetMapSoundState(3203803, Disabled);
        flagArea &= !EventFlag(13201800) && EventFlag(13204802);
        if (!HasMultiplayerState(MultiplayerState.Host)) {
            flagArea &= EventFlag(13204801);
        }
        flagArea &= InArea(10000, 3202801);
        WaitFor(flagArea);
        EnableBossMapSound(3203802, Enabled);
        chrFlagArea &= CharacterHasEventMessage(3200800, 10);
    }
L0:
    chrFlagArea &= !EventFlag(13201800) && EventFlag(13204802);
    if (!HasMultiplayerState(MultiplayerState.Host)) {
        chrFlagArea &= EventFlag(13204801);
    }
    chrFlagArea &= InArea(10000, 3202801);
    WaitFor(chrFlagArea);
    EnableBossMapSound(3203802, Disabled);
    WaitFixedTimeFrames(0);
    EnableBossMapSound(3203803, Enabled);
});

// Boss Camera_Idiot Spider
$Event(13204804, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(13201800));
    WaitFor(HPRatio(3200800) > 0 && EntityInRadiusOfEntity(10000, 3200800, 4));
    SetLockcamSlotNumber(32, 0, 1);
    WaitFor(HPRatio(3200800) > 0 && !EntityInRadiusOfEntity(10000, 3200800, 6));
    SetLockcamSlotNumber(32, 0, 0);
    RestartEvent();
});

// Boss BGM OFF_Idiot Spider
$Event(13204805, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(13201800));
    WaitFor(EventFlag(13201800));
    EnableBossMapSound(3203802, Disabled);
    EnableBossMapSound(3203803, Disabled);
    EnableBossMapSound(-1, Disabled);
});

// Heat up_Idiot Spider
$Event(13204807, Default, function() {
    EndIf(EventFlag(13201800));
    WaitFor(HPRatio(3200800) <= 0.75);
    RequestCharacterAICommand(3200800, 100, 0);
    RequestCharacterAIReplan(3200800);
    WaitFor(CharacterHasEventMessage(3200800, 10));
    ChangeCharacterEnableState(3200800, Disabled);
    WaitFixedTimeSeconds(3);
    IssueShortWarpRequest(3200800, TargetEntityType.Area, 3202806, -1);
    ChangeCharacterEnableState(3200800, Enabled);
    ForceAnimationPlayback(3200800, 3021, false, false, false);
    RequestCharacterAICommand(3200800, 101, 0);
    RequestCharacterAIReplan(3200800);
    SetEventFlag(13204811, ON);
    WaitFor(HPRatio(3200800) <= 0.5);
    RequestCharacterAICommand(3200800, 110, 0);
    RequestCharacterAIReplan(3200800);
    WaitFor(CharacterHasEventMessage(3200800, 10));
    ChangeCharacterEnableState(3200800, Disabled);
    WaitFixedTimeSeconds(3);
    IssueShortWarpRequest(3200800, TargetEntityType.Area, 3202807, -1);
    ChangeCharacterEnableState(3200800, Enabled);
    ForceAnimationPlayback(3200800, 3021, false, false, false);
    RequestCharacterAICommand(3200800, 111, 0);
    RequestCharacterAIReplan(3200800);
    SetEventFlag(13204812, ON);
});

// Left half injury_Idiot spider
$Event(13204808, Default, function() {
    EndIf(EventFlag(13201800));
    CreateNPCPart(3200800, 3201, NPCPartType.Part2, 100, 1, 1, false, false);
    SetNPCPartSEAndSFX(3200800, 3201, 59, 59);
    hp = NPCPartHP(3200800, 3201) <= 0;
    hp2 = HPRatio(3200800) <= 0;
    chr = CharacterHasEventMessage(3200800, 20);
    WaitFor(hp || hp2 || chr);
    EndIf(hp2.Passed);
    if (!chr.Passed) {
        RequestCharacterAnimationReset(3200800, Interpolation.Interpolated);
        ForceAnimationPlayback(3200800, 7000, false, false, false);
        SetNPCPartHP(3200800, 3201, 50, true);
        hp3 = NPCPartHP(3200800, 3201) <= 0;
        hp4 = HPRatio(3200800) <= 0;
        chr2 = CharacterHasEventMessage(3200800, 20);
        WaitFor(hp3 || hp4 || chr2);
        EndIf(hp4.Passed);
        if (!chr2.Passed) {
            RequestCharacterAnimationReset(3200800, Interpolation.Interpolated);
            ForceAnimationPlayback(3200800, 7001, false, false, false);
            SetNPCPartHP(3200800, 3201, 25, true);
            hp5 = NPCPartHP(3200800, 3201) <= 0;
            hp6 = HPRatio(3200800) <= 0;
            chr3 = CharacterHasEventMessage(3200800, 20);
            WaitFor(hp5 || hp6 || chr3);
            EndIf(hp6.Passed);
            if (!chr3.Passed) {
                RequestCharacterAnimationReset(3200800, Interpolation.Interpolated);
                ForceAnimationPlayback(3200800, 7002, false, false, false);
                CreateNPCPart(3200800, 3201, NPCPartType.Part2, 9999, 1, 1.25, false, false);
                SetNPCPartSEAndSFX(3200800, 3201, 60, 60);
                RequestCharacterAIReplan(3200800);
                WaitFor(ElapsedSeconds(30));
            }
        }
    }
L0:
    SetNPCPartHP(3200800, 3201, -1, true);
    RequestCharacterAIReplan(2420800);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Right half injury_Idiot spider
$Event(13204809, Default, function() {
    EndIf(EventFlag(13201800));
    CreateNPCPart(3200800, 3202, NPCPartType.Part3, 100, 1, 1, false, false);
    SetNPCPartSEAndSFX(3200800, 3202, 59, 59);
    hp = NPCPartHP(3200800, 3202) <= 0;
    hp2 = HPRatio(3200800) <= 0;
    chr = CharacterHasEventMessage(3200800, 20);
    WaitFor(hp || hp2 || chr);
    EndIf(hp2.Passed);
    if (!chr.Passed) {
        RequestCharacterAnimationReset(3200800, Interpolation.Interpolated);
        ForceAnimationPlayback(3200800, 7005, false, false, false);
        SetNPCPartHP(3200800, 3202, 50, true);
        hp3 = NPCPartHP(3200800, 3202) <= 0;
        hp4 = HPRatio(3200800) <= 0;
        chr2 = CharacterHasEventMessage(3200800, 20);
        WaitFor(hp3 || hp4 || chr2);
        EndIf(hp4.Passed);
        if (!chr2.Passed) {
            RequestCharacterAnimationReset(3200800, Interpolation.Interpolated);
            ForceAnimationPlayback(3200800, 7006, false, false, false);
            SetNPCPartHP(3200800, 3202, 25, true);
            hp5 = NPCPartHP(3200800, 3) <= 0;
            hp6 = HPRatio(3200800) <= 0;
            chr3 = CharacterHasEventMessage(3200800, 20);
            WaitFor(hp5 || hp6 || chr3);
            EndIf(hp6.Passed);
            if (!chr3.Passed) {
                RequestCharacterAnimationReset(3200800, Interpolation.Interpolated);
                ForceAnimationPlayback(3200800, 7007, false, false, false);
                CreateNPCPart(3200800, 3202, NPCPartType.Part3, 9999, 1, 1.3, false, false);
                SetNPCPartSEAndSFX(3200800, 3202, 60, 60);
                RequestCharacterAIReplan(3200800);
                WaitFor(ElapsedSeconds(30));
            }
        }
    }
L0:
    SetNPCPartHP(3200800, 3202, -1, true);
    RequestCharacterAIReplan(2420800);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Head part setting_Idiot spider
$Event(13204810, Default, function() {
    EndIf(EventFlag(13201800));
    CreateNPCPart(3200800, 3200, NPCPartType.Part1, 50, 0.5, 0.5, false, false);
    SetNPCPartSEAndSFX(3200800, 3200, 61, 61);
    WaitFor(NPCPartHP(3200800, 3200) <= 0);
    RestartEvent();
});

// Host lands_Idiot Spider
$Event(13204820, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && InArea(10000, 3202800));
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        SetCharacterInvincibility(10000, Enabled);
        SpawnOneshotSFX(TargetEntityType.Character, 10000, 246, 932210);
    }
L0:
    WaitFixedTimeSeconds(5);
    SetCharacterInvincibility(10000, Disabled);
    if (EventFlag(13201802)) {
        SetEventFlag(13204800, ON);
    }
    RestartEvent();
});

// Guest Lands_Idiot Spider
$Event(13204821, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(EventFlag(13204800) && InArea(10000, 3202800));
    SetCharacterInvincibility(10000, Enabled);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 246, 932210);
    WaitFixedTimeSeconds(5);
    SetCharacterInvincibility(10000, Disabled);
    SetEventFlag(13204801, ON);
    RestartEvent();
});

// Enemies start patrolling upon entering the area_XX
$Event(13205000, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    if (!ThisEventSlot()) {
        ChangeCharacterPatrolBehavior(X0_4, -1);
        WaitFor(
            ((CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
                && (InArea(10000, X4_4) || InArea(10000, X8_4) || EntityInRadiusOfEntity(10000, X0_4, X12_4)))
                || HasDamageType(X0_4, -1, DamageType.Unspecified));
    }
L0:
    ChangeCharacterPatrolBehavior(X0_4, X16_4);
    RequestCharacterAIReplan(X0_4);
});

// Spider Rukh jumps down upon entering the realm _XX
$Event(13205040, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(ThisEventSlot());
    SetCharacterAIState(X0_4, Disabled);
    chrArea = (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
        && (InArea(10000, X4_4) || EntityInRadiusOfEntity(10000, X0_4, X8_4));
    dmg = HasDamageType(X0_4, -1, DamageType.Unspecified);
    WaitFor(chrArea || dmg);
    if (dmg.Passed) {
        SetCharacterAIState(X0_4, Enabled);
        EndEvent();
    }
L0:
    WaitFixedTimeSeconds(X12_4);
    SetCharacterAIState(X0_4, Enabled);
    SetCharacterHome(X0_4, X16_4);
    RequestCharacterAICommand(X0_4, 10, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(InArea(X0_4, X16_4));
    ForceAnimationPlayback(X0_4, 3013, false, false, false);
    WaitFixedTimeFrames(34);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
});

// Enemy changes patrol upon reaching destination_XX
$Event(13205050, Restart, function(X0_4, X4_4, X8_4) {
    if (!ThisEventSlot()) {
        ChangeCharacterPatrolBehavior(X0_4, -1);
        WaitFor(InArea(X0_4, X4_4));
    }
L0:
    ChangeCharacterPatrolBehavior(X0_4, X8_4);
    RequestCharacterAIReplan(X0_4);
});

// free roaming after moving _XX
$Event(13205060, Restart, function(X0_4, X4_4, X8_4) {
    WaitFor(
        InArea(X0_4, X4_4)
            || CharacterAIState(X0_4, AIStateType.Combat)
            || HasDamageType(X0_4, 10000, DamageType.Unspecified));
    ChangeCharacterPatrolBehavior(X0_4, X8_4);
});

// Fall Throw of Student_XX
$Event(13205080, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    EndIf(ThisEventSlot());
    SetCharacterGravity(X0_4, Disabled);
    SetCharacterMaphits(X0_4, true);
    SetCharacterAIState(X0_4, Disabled);
    ForceAnimationPlayback(X0_4, X8_4, true, false, false);
    chrAreaFlag &= (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom)) && InArea(10000, X4_4);
    if (X16_4 != 0) {
        chrAreaFlag &= EventFlag(X20_4);
    }
    WaitFor(chrAreaFlag || HasDamageType(X0_4, -1, DamageType.Unspecified));
    SetCharacterGravity(X0_4, Enabled);
    SetCharacterAIState(X0_4, Enabled);
    ForceAnimationPlayback(X0_4, X12_4, false, true, false);
    SetCharacterMaphits(X0_4, false);
});

// Students stand up_XX
$Event(13205100, Restart, function(X0_4, X4_4) {
    EndIf(ThisEventSlot());
    WaitFor(CharacterBackreadStatus(X0_4));
    ForceAnimationPlayback(X0_4, 7004, true, false, false);
    WaitFor(
        CharacterAIState(X0_4, AIStateType.Recognition)
            || CharacterAIState(X0_4, AIStateType.Combat)
            || ((CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
                && InArea(10000, X4_4)));
    ForceAnimationPlayback(X0_4, 7005, false, false, false);
    WaitFixedTimeFrames(59);
    RotateCharacter(X0_4, 10000, 3011, false);
});

// Student surprise_XX
$Event(13205140, Restart, function(X0_4, X4_4) {
    EndIf(ThisEventSlot());
    chr = CharacterAIState(X0_4, AIStateType.Recognition) || CharacterAIState(X0_4, AIStateType.Combat);
    chrArea = (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom)) && InArea(10000, X4_4);
    dmg = HasDamageType(X0_4, -1, DamageType.Unspecified);
    WaitFor(chr || chrArea || dmg);
    EndIf(chr.Passed);
    EndIf(dmg.Passed);
    RotateCharacter(X0_4, 10000, 3002, false);
});

// Star flower_death effect
$Event(13205200, Restart, function() {
    if (!ThisEventSlot()) {
        ChangeCharacterEnableState(3200621, Disabled);
        WaitFor(HPRatio(3200620) == 0 && CharacterHasEventMessage(3200620, 10));
        WarpCharacterAndCopyFloor(3200621, TargetEntityType.Character, 3200620, 90, 3200620);
        ChangeCharacterEnableState(3200621, Enabled);
    }
L0:
    ForceCharacterTreasure(3200621);
});

// Idiot Spider (baby)_head damage_XX
$Event(13205300, Restart, function(X0_4, X4_2, X8_4) {
    WaitFor(CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part1, 30, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 61, 61);
    WaitFor(NPCPartHP(X0_4, X8_4) <= 0);
    RequestCharacterAnimationReset(X0_4, Interpolation.Uninterpolated);
    ForceAnimationPlayback(X0_4, 9930, false, false, false);
    SetNPCPartHP(X0_4, X8_4, -1, false);
    RestartEvent();
});

// Medical Association's Franken site injury_XX
$Event(13205600, Default, function(X0_2, X4_4, X8_2, X12_4, X16_4, X20_4, X24_4, X28_4) {
    WaitFor(EventFlag(X20_4));
    hpDmgFlag = NPCPartHP(X28_4, X4_4) <= 0 && CharacterDamagedBy(X28_4, 10000) && EventFlag(X24_4);
    hpFlag = HPRatio(X28_4) <= 0 && EventFlag(X20_4);
    WaitFor(hpDmgFlag || hpFlag);
    EndIf(hpFlag.Passed);
    if (!EventFlag(X20_4)) {
        SetNPCPartHP(X28_4, X4_4, 1, false);
        RestartEvent();
    }
    CreateNPCPart(X28_4, X0_2, X8_2, 999999, 1, 1, false, false);
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

// Medical Association Franken site registration_XX
$Event(13205630, Default, function(X0_2, X4_4, X8_2, X12_4, X16_4, X20_4) {
    WaitFor(EntityInRadiusOfEntity(X20_4, 10000, 10));
    CreateNPCPart(X20_4, X0_2, X8_2, X12_4, 1, 1, false, false);
    SetNPCPartSEAndSFX(X20_4, X4_4, 64, 64);
    SetEventFlag(X16_4, ON);
});

// Medical Association's Franken Part Destruction Timing Limit_XX
$Event(13205660, Default, function(X0_4, X4_4, X8_4, X12_4, X16_1, X17_1) {
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

// Raise the SAN price when reaching the nightmare school building with Evil God Warp
$Event(13200950, Default, function() {
    if (CharacterType(10000, TargetType.Alive)) {
        WaitFor(PlayerStandingOnHit(3204001) && EventFlag(12800434));
        SetEventFlag(12800434, OFF);
        SetSpEffect(10000, 110, false);
        SetSpEffect(10000, 111, false);
        SetSpEffect(10000, 112, false);
        SetSpEffect(10000, 113, false);
        SetSpEffect(10000, 114, false);
        SetSpEffect(10000, 115, false);
        SetSpEffect(10000, 116, false);
        EndIf(ThisEvent());
        InitializeEvent(0, 9350, 2);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(6001));
    WaitFixedTimeSeconds(0);
});

// Nightmare School Reached_Trophy released
$Event(13200960, Default, function() {
    EndIf(ThisEvent());
    if (CharacterType(10000, TargetType.Alive)) {
        WaitFor(PlayerStandingOnHit(3204001) || PlayerStandingOnHit(3204002));
        AwardAchievement(13);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(6001));
    WaitFixedTimeSeconds(0);
});

// ★University_New NPC summons_Aiming for the boss room_XX
$Event(13204450, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(ThisEventSlot());
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    SetEventPoint(X0_4, X4_4, 1);
    WaitFor(EventFlag(X8_4) && !EventFlag(X12_4) && EventFlag(X16_4));
    RequestCharacterAICommand(X0_4, 990, 0);
    RequestCharacterAIReplan(X0_4);
});

// University_New NPC Summon_Landing_XX
$Event(13204470, Default, function(X0_4) {
    WaitFor(InArea(X0_4, 3202800));
    SetCharacterInvincibility(X0_4, Enabled);
L0:
    WaitFixedTimeSeconds(5);
    SetCharacterInvincibility(X0_4, Disabled);
});

// ★University_New NPC Summoning_Summoning Judgment_High Rank Hunting
$Event(13204400, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    if (!EventFlag(X0_4)) {
        SetEventFlag(X0_4, OFF);
        DeleteMapSFX(X4_4, true);
        WaitFor(
            PlayerHasItem(ItemType.Goods, 4312)
                && !EventFlag(X8_4)
                && !EventFlag(X12_4)
                && !EventFlag(X16_4)
                && NumberOfClientsOfType(ClientType.Coop) < 2
                && !EventFlag(13204421)
                && !EventFlag(13204422)
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
                && !EventFlag(13204421)
                && !EventFlag(13204422)
                && !EventFlag(X20_4)));
    SetEventFlag(X0_4, OFF);
    DeleteMapSFX(X4_4, true);
    RestartEvent();
});

// ★University_New NPC Summoning_Summoning Judgment_Alliance: Executioner
$Event(13204401, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    if (!EventFlag(X0_4)) {
        SetEventFlag(X0_4, OFF);
        DeleteMapSFX(X4_4, true);
        WaitFor(
            PlayerHasItem(ItemType.Goods, 4312)
                && !EventFlag(X8_4)
                && !EventFlag(X12_4)
                && !EventFlag(X16_4)
                && NumberOfClientsOfType(ClientType.Coop) < 2
                && CharacterHasSpEffect(10000, 6142)
                && !EventFlag(6813)
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
                && CharacterHasSpEffect(10000, 6142)
                && !EventFlag(6813)
                && !EventFlag(X20_4)));
    SetEventFlag(X0_4, OFF);
    DeleteMapSFX(X4_4, true);
    RestartEvent();
});

// ★University_New NPC Summoning_Summoning Judgment_Alliance: Henrik
$Event(13204402, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    if (!EventFlag(X0_4)) {
        SetEventFlag(X0_4, OFF);
        DeleteMapSFX(X4_4, true);
        WaitFor(
            PlayerHasItem(ItemType.Goods, 4312)
                && !EventFlag(X8_4)
                && !EventFlag(X12_4)
                && !EventFlag(X16_4)
                && NumberOfClientsOfType(ClientType.Coop) < 2
                && CharacterHasSpEffect(10000, 6142)
                && (EventFlag(12410803) || EventFlag(12410804))
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
                && CharacterHasSpEffect(10000, 6142)
                && (EventFlag(12410803) || EventFlag(12410804))
                && !EventFlag(X20_4)));
    SetEventFlag(X0_4, OFF);
    DeleteMapSFX(X4_4, true);
    RestartEvent();
});

// University_New NPC Summon_Participation_XX
$Event(13204410, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    SetCharacterDefaultBackreadState(X4_4, Enabled);
    SetNetworkUpdateRate(X4_4, true, CharacterUpdateFrequency.AlwaysUpdate);
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

// ★University_Summon New NPC_Enter Boss Room_XX
$Event(13204460, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
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
