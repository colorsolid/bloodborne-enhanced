// ==EMEVD==
// @docs    bb-common.emedf.json
// @compress    DCX_DFLT_10000_44_9
// @game    Bloodborne
// @string    "クリア時間_通し\u0000クリア時間_1プレイ\u0000生贄の街_テレポーター使用_00\u0000生贄の街_テレポーター使用_01\u0000生贄の街_テレポーター領域侵入_00\u0000生贄の街_テレポーター領域侵入_01\u0000\u0000ボス_撃破\u0000PC情報_ボス撃破_なりそこないの邪神\u0000ボス_戦闘開始\u0000ボス戦_撃破時間\u0000PC情報_生贄の街到達時\u0000N:\\SPRJ\\data\\Param\\event\\common.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [298]
// @version    3.6.3
// ==/EMEVD==

const area_id = 28;
const block_id = 0;

const yahargul_lamp_offset = 40;
const yahargul_lamp_id = 2801950;
const yahargul_lamp_kindle = 12110000 + (area_id * 100) + (block_id * 10);

const chapel_lamp_offset = 43;
const chapel_lamp_id = 2801953;
const chapel_lamp_kindle = 12110000 + (area_id * 100) + (block_id * 10) + 2;

const gaol_lamp_offset = 42;
const gaol_lamp_id = 2801952;
const gaol_lamp_kindle = 12110000 + (area_id * 100) + (block_id * 10) + 4;

const one_reborn_lamp_offset = 41;
const one_reborn_offset = 8;
const one_reborn_defeat = 12801800;
const one_reborn_return = 2801899;
const one_reborn_lamp_id = 2801951;
const one_reborn_lamp_kindle = 12110000 + (area_id * 100) + (block_id * 10) + 6;
const one_reborn_region = 2802802;
const one_reborn_id1 = 2800800;
const one_reborn_id2 = 2800801;
const one_reborn_id3 = 2800802;
const one_reborn_id4 = 2800803;

const paarl_return = 2301759;

// front elevator
// door near start
// two doors in chapel
// large gate?

// constructor
$Event(0, Default, function() {
    
    SetEventFlag(8900+one_reborn_offset, OFF);
    
    $InitializeEvent(1, 7900, 10000000+one_reborn_return, one_reborn_return, area_id, block_id);
    $InitializeEvent(2, 7900, 10000000+paarl_return, paarl_return, area_id, block_id);
    
    $InitializeEvent(yahargul_lamp_offset, 8500, 8500+yahargul_lamp_offset, yahargul_lamp_id, 72111818);
    $InitializeEvent(chapel_lamp_offset, 8500, 8500+chapel_lamp_offset, chapel_lamp_id, 72111919);
    $InitializeEvent(gaol_lamp_offset, 8500, 8500+gaol_lamp_offset, gaol_lamp_id, 72112021);
    $InitializeEvent(one_reborn_lamp_offset, 8500, 8500+one_reborn_lamp_offset, one_reborn_lamp_id, 72112020);
    
    $InitializeEvent(yahargul_lamp_offset, 8100, 8100+yahargul_lamp_offset, yahargul_lamp_kindle);
    $InitializeEvent(chapel_lamp_offset, 8100, 8100+chapel_lamp_offset, chapel_lamp_kindle);
    $InitializeEvent(gaol_lamp_offset, 8100, 8100+gaol_lamp_offset, gaol_lamp_kindle);
    $InitializeEvent(one_reborn_lamp_offset, 8100, 8100+one_reborn_lamp_offset, one_reborn_lamp_kindle);
    
    $InitializeEvent(yahargul_lamp_offset, 8300, yahargul_lamp_id+2000, -1, yahargul_lamp_kindle, yahargul_lamp_id+6000, yahargul_lamp_id+3000);
    $InitializeEvent(chapel_lamp_offset, 8300, chapel_lamp_id+2000, -1, chapel_lamp_kindle, chapel_lamp_id+6000, chapel_lamp_id+3000);
    $InitializeEvent(gaol_lamp_offset, 8300, gaol_lamp_id+2000, -1, gaol_lamp_kindle, gaol_lamp_id+6000, gaol_lamp_id+3000);
    
    if (EventFlag(one_reborn_defeat+13) && !EventFlag(one_reborn_defeat-1)) {
        if (EventFlag(one_reborn_defeat-2)) {
            SetEventFlag(one_reborn_defeat-2, OFF);
            $InitializeEvent(one_reborn_offset, 7500, one_reborn_region, one_reborn_lamp_id+4000);
        }
        SetEventFlag(one_reborn_defeat+13, OFF);
        SetEventFlag(one_reborn_defeat, ON);
        if (EventFlag(12111120)) {
            SetEventFlag(12111120, OFF);
            $InitializeEvent(one_reborn_lamp_offset, 8300, one_reborn_lamp_id+2000, -1, one_reborn_lamp_kindle, one_reborn_lamp_id+6000, one_reborn_lamp_id+3000);
        }
        else {
            $InitializeEvent(one_reborn_lamp_offset, 8300, one_reborn_lamp_id+2000, 999, one_reborn_lamp_kindle, one_reborn_lamp_id+6000, one_reborn_lamp_id+3000);
            DummyPlayCutsceneAndWarpPlayer(one_reborn_lamp_id+4000, area_id, block_id);
        }
    } else if (EventFlag(one_reborn_defeat+12) || EventFlag(one_reborn_defeat-1)) {
        if (EventFlag(one_reborn_defeat-2)) {
            SetEventFlag(one_reborn_defeat-2, OFF);
            $InitializeEvent(one_reborn_offset, 7500, one_reborn_region, one_reborn_lamp_id+5000);
        }
        SetEventFlag(one_reborn_defeat, OFF);
        SetEventFlag(one_reborn_defeat+2, OFF);
        SetEventFlag(one_reborn_defeat+12, OFF);
        SetEventFlag(one_reborn_defeat+13, ON);
        SetEventFlag(one_reborn_defeat-1, OFF);
        SetEventFlag(8900+one_reborn_offset, ON);
        $InitializeEvent(one_reborn_lamp_offset, 8300, one_reborn_lamp_id+2000, -1, one_reborn_lamp_kindle, one_reborn_lamp_id+6000, one_reborn_lamp_id+3000);
    } else {
        $InitializeEvent(one_reborn_lamp_offset, 8300, one_reborn_lamp_id+2000, -1, one_reborn_lamp_kindle, one_reborn_lamp_id+6000, one_reborn_lamp_id+3000);
    }
    
    $InitializeEvent(one_reborn_offset, 12102070, one_reborn_defeat+13, 0, 7458, one_reborn_id1, one_reborn_id2, one_reborn_id3, one_reborn_id4, -1);
    
    $InitializeEvent(one_reborn_offset, 8900, one_reborn_defeat-1, one_reborn_lamp_id+1000, one_reborn_defeat-2, 0, 0, one_reborn_lamp_id+5000, area_id, block_id);
    $InitializeEvent(one_reborn_offset, 7700, one_reborn_defeat+11, one_reborn_defeat+12, one_reborn_lamp_id+1000, 828000);
    
    $InitializeEvent(1800, 12107000, 72111800, 2801950, 2412950);
    $InitializeEvent(1801, 12107000, 72111801, 2801950, 2412951);
    $InitializeEvent(1802, 12107000, 72111802, 2801950, 2412952);
    $InitializeEvent(1803, 12107000, 72111803, 2801950, 2412953);
    $InitializeEvent(1804, 12107000, 72111804, 2801950, 2402950);
    $InitializeEvent(1805, 12107000, 72111805, 2801950, 2402951);
    $InitializeEvent(1806, 12107000, 72111806, 2801950, 2422950);
    $InitializeEvent(1807, 12107000, 72111807, 2801950, 2422952);
    $InitializeEvent(1808, 12107000, 72111808, 2801950, 2422951);
    $InitializeEvent(1809, 12107000, 72111809, 2801950, 2302950);
    $InitializeEvent(1810, 12107000, 72111810, 2801950, 2302951);
    $InitializeEvent(1811, 12107000, 72111811, 2801950, 2302952);
    $InitializeEvent(1812, 12107000, 72111812, 2801950, 2202950);
    $InitializeEvent(1813, 12107000, 72111813, 2801950, 2202951);
    $InitializeEvent(1814, 12107000, 72111814, 2801950, 2702950);
    $InitializeEvent(1815, 12107000, 72111815, 2801950, 2702951);
    $InitializeEvent(1816, 12107000, 72111816, 2801950, 3202950);
    $InitializeEvent(1817, 12107000, 72111817, 2801950, 3202952);
    $InitializeEvent(1818, 12107000, 72111818, 2801950, 2802950);
    $InitializeEvent(1819, 12107000, 72111819, 2801950, 2802953);
    $InitializeEvent(1820, 12107000, 72111820, 2801950, 2802951);
    $InitializeEvent(1821, 12107000, 72111821, 2801950, 2802952);
    $InitializeEvent(1822, 12107000, 72111822, 2801950, 2502950);
    $InitializeEvent(1823, 12107000, 72111823, 2801950, 2502952);
    $InitializeEvent(1824, 12107000, 72111824, 2801950, 2502951);
    $InitializeEvent(1825, 12107000, 72111825, 2801950, 2112950);
    $InitializeEvent(1826, 12107000, 72111826, 2801950, 3202951);
    $InitializeEvent(1827, 12107000, 72111827, 2801950, 3202953);
    $InitializeEvent(1828, 12107000, 72111828, 2801950, 3302950);
    $InitializeEvent(1829, 12107000, 72111829, 2801950, 3302951);
    $InitializeEvent(1830, 12107000, 72111830, 2801950, 2602950);
    $InitializeEvent(1831, 12107000, 72111831, 2801950, 2602953);
    $InitializeEvent(1832, 12107000, 72111832, 2801950, 2602952);
    $InitializeEvent(1833, 12107000, 72111833, 2801950, 2602951);
    $InitializeEvent(1834, 12107000, 72111834, 2801950, 3402950);
    $InitializeEvent(1835, 12107000, 72111835, 2801950, 3402951);
    $InitializeEvent(1836, 12107000, 72111836, 2801950, 3402953);
    $InitializeEvent(1837, 12107000, 72111837, 2801950, 3402952);
    $InitializeEvent(1838, 12107000, 72111838, 2801950, 3502950);
    $InitializeEvent(1839, 12107000, 72111839, 2801950, 3502951);
    $InitializeEvent(1840, 12107000, 72111840, 2801950, 3502952);
    $InitializeEvent(1841, 12107000, 72111841, 2801950, 3602950);
    $InitializeEvent(1842, 12107000, 72111842, 2801950, 3602951);
    $InitializeEvent(1843, 12107000, 72111843, 2801950, 3602952);
    $InitializeEvent(1844, 12107000, 72111844, 2801950, 2902950);
    $InitializeEvent(1845, 12107000, 72111845, 2801950, 2902951);
    $InitializeEvent(1846, 12107000, 72111846, 2801950, 2902952);
    $InitializeEvent(1847, 12107000, 72111847, 2801950, 2902953);
    $InitializeEvent(1848, 12107000, 72111848, 2801950, 2902954);
    $InitializeEvent(1849, 12107000, 72111849, 2801950, 2902955);
    $InitializeEvent(1850, 12107000, 72111850, 2801950, 2902956);
    $InitializeEvent(1851, 12107000, 72111851, 2801950, 2902957);
    $InitializeEvent(1852, 12107000, 72111852, 2801950, 2902958);
    $InitializeEvent(1853, 12107000, 72111853, 2801950, 2902959);
    
    $InitializeEvent(1900, 12107000, 72111900, 2801953, 2412950);
    $InitializeEvent(1901, 12107000, 72111901, 2801953, 2412951);
    $InitializeEvent(1902, 12107000, 72111902, 2801953, 2412952);
    $InitializeEvent(1903, 12107000, 72111903, 2801953, 2412953);
    $InitializeEvent(1904, 12107000, 72111904, 2801953, 2402950);
    $InitializeEvent(1905, 12107000, 72111905, 2801953, 2402951);
    $InitializeEvent(1906, 12107000, 72111906, 2801953, 2422950);
    $InitializeEvent(1907, 12107000, 72111907, 2801953, 2422952);
    $InitializeEvent(1908, 12107000, 72111908, 2801953, 2422951);
    $InitializeEvent(1909, 12107000, 72111909, 2801953, 2302950);
    $InitializeEvent(1910, 12107000, 72111910, 2801953, 2302951);
    $InitializeEvent(1911, 12107000, 72111911, 2801953, 2302952);
    $InitializeEvent(1912, 12107000, 72111912, 2801953, 2202950);
    $InitializeEvent(1913, 12107000, 72111913, 2801953, 2202951);
    $InitializeEvent(1914, 12107000, 72111914, 2801953, 2702950);
    $InitializeEvent(1915, 12107000, 72111915, 2801953, 2702951);
    $InitializeEvent(1916, 12107000, 72111916, 2801953, 3202950);
    $InitializeEvent(1917, 12107000, 72111917, 2801953, 3202952);
    $InitializeEvent(1918, 12107000, 72111918, 2801953, 2802950);
    $InitializeEvent(1919, 12107000, 72111919, 2801953, 2802953);
    $InitializeEvent(1920, 12107000, 72111920, 2801953, 2802951);
    $InitializeEvent(1921, 12107000, 72111921, 2801953, 2802952);
    $InitializeEvent(1922, 12107000, 72111922, 2801953, 2502950);
    $InitializeEvent(1923, 12107000, 72111923, 2801953, 2502952);
    $InitializeEvent(1924, 12107000, 72111924, 2801953, 2502951);
    $InitializeEvent(1925, 12107000, 72111925, 2801953, 2112950);
    $InitializeEvent(1926, 12107000, 72111926, 2801953, 3202951);
    $InitializeEvent(1927, 12107000, 72111927, 2801953, 3202953);
    $InitializeEvent(1928, 12107000, 72111928, 2801953, 3302950);
    $InitializeEvent(1929, 12107000, 72111929, 2801953, 3302951);
    $InitializeEvent(1930, 12107000, 72111930, 2801953, 2602950);
    $InitializeEvent(1931, 12107000, 72111931, 2801953, 2602953);
    $InitializeEvent(1932, 12107000, 72111932, 2801953, 2602952);
    $InitializeEvent(1933, 12107000, 72111933, 2801953, 2602951);
    $InitializeEvent(1934, 12107000, 72111934, 2801953, 3402950);
    $InitializeEvent(1935, 12107000, 72111935, 2801953, 3402951);
    $InitializeEvent(1936, 12107000, 72111936, 2801953, 3402953);
    $InitializeEvent(1937, 12107000, 72111937, 2801953, 3402952);
    $InitializeEvent(1938, 12107000, 72111938, 2801953, 3502950);
    $InitializeEvent(1939, 12107000, 72111939, 2801953, 3502951);
    $InitializeEvent(1940, 12107000, 72111940, 2801953, 3502952);
    $InitializeEvent(1941, 12107000, 72111941, 2801953, 3602950);
    $InitializeEvent(1942, 12107000, 72111942, 2801953, 3602951);
    $InitializeEvent(1943, 12107000, 72111943, 2801953, 3602952);
    $InitializeEvent(1944, 12107000, 72111944, 2801953, 2902950);
    $InitializeEvent(1945, 12107000, 72111945, 2801953, 2902951);
    $InitializeEvent(1946, 12107000, 72111946, 2801953, 2902952);
    $InitializeEvent(1947, 12107000, 72111947, 2801953, 2902953);
    $InitializeEvent(1948, 12107000, 72111948, 2801953, 2902954);
    $InitializeEvent(1949, 12107000, 72111949, 2801953, 2902955);
    $InitializeEvent(1950, 12107000, 72111950, 2801953, 2902956);
    $InitializeEvent(1951, 12107000, 72111951, 2801953, 2902957);
    $InitializeEvent(1952, 12107000, 72111952, 2801953, 2902958);
    $InitializeEvent(1953, 12107000, 72111953, 2801953, 2902959);
    
    $InitializeEvent(2000, 12107000, 72112000, 2801951, 2412950);
    $InitializeEvent(2001, 12107000, 72112001, 2801951, 2412951);
    $InitializeEvent(2002, 12107000, 72112002, 2801951, 2412952);
    $InitializeEvent(2003, 12107000, 72112003, 2801951, 2412953);
    $InitializeEvent(2004, 12107000, 72112004, 2801951, 2402950);
    $InitializeEvent(2005, 12107000, 72112005, 2801951, 2402951);
    $InitializeEvent(2006, 12107000, 72112006, 2801951, 2422950);
    $InitializeEvent(2007, 12107000, 72112007, 2801951, 2422952);
    $InitializeEvent(2008, 12107000, 72112008, 2801951, 2422951);
    $InitializeEvent(2009, 12107000, 72112009, 2801951, 2302950);
    $InitializeEvent(2010, 12107000, 72112010, 2801951, 2302951);
    $InitializeEvent(2011, 12107000, 72112011, 2801951, 2302952);
    $InitializeEvent(2012, 12107000, 72112012, 2801951, 2202950);
    $InitializeEvent(2013, 12107000, 72112013, 2801951, 2202951);
    $InitializeEvent(2014, 12107000, 72112014, 2801951, 2702950);
    $InitializeEvent(2015, 12107000, 72112015, 2801951, 2702951);
    $InitializeEvent(2016, 12107000, 72112016, 2801951, 3202950);
    $InitializeEvent(2017, 12107000, 72112017, 2801951, 3202952);
    $InitializeEvent(2018, 12107000, 72112018, 2801951, 2802950);
    $InitializeEvent(2019, 12107000, 72112019, 2801951, 2802953);
    $InitializeEvent(2020, 12107000, 72112020, 2801951, 2802951);
    $InitializeEvent(2021, 12107000, 72112021, 2801951, 2802952);
    $InitializeEvent(2022, 12107000, 72112022, 2801951, 2502950);
    $InitializeEvent(2023, 12107000, 72112023, 2801951, 2502952);
    $InitializeEvent(2024, 12107000, 72112024, 2801951, 2502951);
    $InitializeEvent(2025, 12107000, 72112025, 2801951, 2112950);
    $InitializeEvent(2026, 12107000, 72112026, 2801951, 3202951);
    $InitializeEvent(2027, 12107000, 72112027, 2801951, 3202953);
    $InitializeEvent(2028, 12107000, 72112028, 2801951, 3302950);
    $InitializeEvent(2029, 12107000, 72112029, 2801951, 3302951);
    $InitializeEvent(2030, 12107000, 72112030, 2801951, 2602950);
    $InitializeEvent(2031, 12107000, 72112031, 2801951, 2602953);
    $InitializeEvent(2032, 12107000, 72112032, 2801951, 2602952);
    $InitializeEvent(2033, 12107000, 72112033, 2801951, 2602951);
    $InitializeEvent(2034, 12107000, 72112034, 2801951, 3402950);
    $InitializeEvent(2035, 12107000, 72112035, 2801951, 3402951);
    $InitializeEvent(2036, 12107000, 72112036, 2801951, 3402953);
    $InitializeEvent(2037, 12107000, 72112037, 2801951, 3402952);
    $InitializeEvent(2038, 12107000, 72112038, 2801951, 3502950);
    $InitializeEvent(2039, 12107000, 72112039, 2801951, 3502951);
    $InitializeEvent(2040, 12107000, 72112040, 2801951, 3502952);
    $InitializeEvent(2041, 12107000, 72112041, 2801951, 3602950);
    $InitializeEvent(2042, 12107000, 72112042, 2801951, 3602951);
    $InitializeEvent(2043, 12107000, 72112043, 2801951, 3602952);
    $InitializeEvent(2044, 12107000, 72112044, 2801951, 2902950);
    $InitializeEvent(2045, 12107000, 72112045, 2801951, 2902951);
    $InitializeEvent(2046, 12107000, 72112046, 2801951, 2902952);
    $InitializeEvent(2047, 12107000, 72112047, 2801951, 2902953);
    $InitializeEvent(2048, 12107000, 72112048, 2801951, 2902954);
    $InitializeEvent(2049, 12107000, 72112049, 2801951, 2902955);
    $InitializeEvent(2050, 12107000, 72112050, 2801951, 2902956);
    $InitializeEvent(2051, 12107000, 72112051, 2801951, 2902957);
    $InitializeEvent(2052, 12107000, 72112052, 2801951, 2902958);
    $InitializeEvent(2053, 12107000, 72112053, 2801951, 2902959);
    
    SetEventFlag(72110018, OFF);
    SetEventFlag(72110118, OFF);
    SetEventFlag(72110218, OFF);
    SetEventFlag(72110318, OFF);
    SetEventFlag(72110418, OFF);
    SetEventFlag(72110518, OFF);
    SetEventFlag(72110618, OFF);
    SetEventFlag(72110718, OFF);
    SetEventFlag(72110818, OFF);
    SetEventFlag(72110918, OFF);
    SetEventFlag(72111018, OFF);
    SetEventFlag(72111118, OFF);
    SetEventFlag(72111218, OFF);
    SetEventFlag(72111318, OFF);
    SetEventFlag(72111418, OFF);
    SetEventFlag(72111518, OFF);
    SetEventFlag(72111618, OFF);
    SetEventFlag(72111718, OFF);
    SetEventFlag(72111818, OFF);
    SetEventFlag(72111918, OFF);
    SetEventFlag(72112018, OFF);
    SetEventFlag(72112118, OFF);
    SetEventFlag(72112218, OFF);
    SetEventFlag(72112318, OFF);
    SetEventFlag(72112418, OFF);
    SetEventFlag(72112518, OFF);
    SetEventFlag(72112618, OFF);
    SetEventFlag(72112718, OFF);
    SetEventFlag(72112818, OFF);
    SetEventFlag(72112918, OFF);
    SetEventFlag(72113018, OFF);
    SetEventFlag(72113118, OFF);
    SetEventFlag(72113218, OFF);
    SetEventFlag(72113318, OFF);
    SetEventFlag(72113418, OFF);
    SetEventFlag(72113518, OFF);
    SetEventFlag(72113618, OFF);
    SetEventFlag(72113718, OFF);
    SetEventFlag(72113818, OFF);
    SetEventFlag(72113918, OFF);
    SetEventFlag(72114018, OFF);
    SetEventFlag(72114118, OFF);
    SetEventFlag(72114218, OFF);
    SetEventFlag(72114318, OFF);
    SetEventFlag(72114418, OFF);
    SetEventFlag(72114518, OFF);
    SetEventFlag(72114618, OFF);
    SetEventFlag(72114718, OFF);
    SetEventFlag(72114818, OFF);
    SetEventFlag(72114918, OFF);
    SetEventFlag(72115018, OFF);
    SetEventFlag(72115118, OFF);
    SetEventFlag(72115218, OFF);
    SetEventFlag(72115318, OFF);
    
    SetEventFlag(72110019, OFF);
    SetEventFlag(72110119, OFF);
    SetEventFlag(72110219, OFF);
    SetEventFlag(72110319, OFF);
    SetEventFlag(72110419, OFF);
    SetEventFlag(72110519, OFF);
    SetEventFlag(72110619, OFF);
    SetEventFlag(72110719, OFF);
    SetEventFlag(72110819, OFF);
    SetEventFlag(72110919, OFF);
    SetEventFlag(72111019, OFF);
    SetEventFlag(72111119, OFF);
    SetEventFlag(72111219, OFF);
    SetEventFlag(72111319, OFF);
    SetEventFlag(72111419, OFF);
    SetEventFlag(72111519, OFF);
    SetEventFlag(72111619, OFF);
    SetEventFlag(72111719, OFF);
    SetEventFlag(72111819, OFF);
    SetEventFlag(72111919, OFF);
    SetEventFlag(72112019, OFF);
    SetEventFlag(72112119, OFF);
    SetEventFlag(72112219, OFF);
    SetEventFlag(72112319, OFF);
    SetEventFlag(72112419, OFF);
    SetEventFlag(72112519, OFF);
    SetEventFlag(72112619, OFF);
    SetEventFlag(72112719, OFF);
    SetEventFlag(72112819, OFF);
    SetEventFlag(72112919, OFF);
    SetEventFlag(72113019, OFF);
    SetEventFlag(72113119, OFF);
    SetEventFlag(72113219, OFF);
    SetEventFlag(72113319, OFF);
    SetEventFlag(72113419, OFF);
    SetEventFlag(72113519, OFF);
    SetEventFlag(72113619, OFF);
    SetEventFlag(72113719, OFF);
    SetEventFlag(72113819, OFF);
    SetEventFlag(72113919, OFF);
    SetEventFlag(72114019, OFF);
    SetEventFlag(72114119, OFF);
    SetEventFlag(72114219, OFF);
    SetEventFlag(72114319, OFF);
    SetEventFlag(72114419, OFF);
    SetEventFlag(72114519, OFF);
    SetEventFlag(72114619, OFF);
    SetEventFlag(72114719, OFF);
    SetEventFlag(72114819, OFF);
    SetEventFlag(72114919, OFF);
    SetEventFlag(72115019, OFF);
    SetEventFlag(72115119, OFF);
    SetEventFlag(72115219, OFF);
    SetEventFlag(72115319, OFF);
    
    SetEventFlag(72110020, OFF);
    SetEventFlag(72110120, OFF);
    SetEventFlag(72110220, OFF);
    SetEventFlag(72110320, OFF);
    SetEventFlag(72110420, OFF);
    SetEventFlag(72110520, OFF);
    SetEventFlag(72110620, OFF);
    SetEventFlag(72110720, OFF);
    SetEventFlag(72110820, OFF);
    SetEventFlag(72110920, OFF);
    SetEventFlag(72111020, OFF);
    SetEventFlag(72111120, OFF);
    SetEventFlag(72111220, OFF);
    SetEventFlag(72111320, OFF);
    SetEventFlag(72111420, OFF);
    SetEventFlag(72111520, OFF);
    SetEventFlag(72111620, OFF);
    SetEventFlag(72111720, OFF);
    SetEventFlag(72111820, OFF);
    SetEventFlag(72111920, OFF);
    SetEventFlag(72112020, OFF);
    SetEventFlag(72112120, OFF);
    SetEventFlag(72112220, OFF);
    SetEventFlag(72112320, OFF);
    SetEventFlag(72112420, OFF);
    SetEventFlag(72112520, OFF);
    SetEventFlag(72112620, OFF);
    SetEventFlag(72112720, OFF);
    SetEventFlag(72112820, OFF);
    SetEventFlag(72112920, OFF);
    SetEventFlag(72113020, OFF);
    SetEventFlag(72113120, OFF);
    SetEventFlag(72113220, OFF);
    SetEventFlag(72113320, OFF);
    SetEventFlag(72113420, OFF);
    SetEventFlag(72113520, OFF);
    SetEventFlag(72113620, OFF);
    SetEventFlag(72113720, OFF);
    SetEventFlag(72113820, OFF);
    SetEventFlag(72113920, OFF);
    SetEventFlag(72114020, OFF);
    SetEventFlag(72114120, OFF);
    SetEventFlag(72114220, OFF);
    SetEventFlag(72114320, OFF);
    SetEventFlag(72114420, OFF);
    SetEventFlag(72114520, OFF);
    SetEventFlag(72114620, OFF);
    SetEventFlag(72114720, OFF);
    SetEventFlag(72114820, OFF);
    SetEventFlag(72114920, OFF);
    SetEventFlag(72115020, OFF);
    SetEventFlag(72115120, OFF);
    SetEventFlag(72115220, OFF);
    SetEventFlag(72115320, OFF);
    
    SetEventFlag(72110021, OFF);
    SetEventFlag(72110121, OFF);
    SetEventFlag(72110221, OFF);
    SetEventFlag(72110321, OFF);
    SetEventFlag(72110421, OFF);
    SetEventFlag(72110521, OFF);
    SetEventFlag(72110621, OFF);
    SetEventFlag(72110721, OFF);
    SetEventFlag(72110821, OFF);
    SetEventFlag(72110921, OFF);
    SetEventFlag(72111021, OFF);
    SetEventFlag(72111121, OFF);
    SetEventFlag(72111221, OFF);
    SetEventFlag(72111321, OFF);
    SetEventFlag(72111421, OFF);
    SetEventFlag(72111521, OFF);
    SetEventFlag(72111621, OFF);
    SetEventFlag(72111721, OFF);
    SetEventFlag(72111821, OFF);
    SetEventFlag(72111921, OFF);
    SetEventFlag(72112021, OFF);
    SetEventFlag(72112121, OFF);
    SetEventFlag(72112221, OFF);
    SetEventFlag(72112321, OFF);
    SetEventFlag(72112421, OFF);
    SetEventFlag(72112521, OFF);
    SetEventFlag(72112621, OFF);
    SetEventFlag(72112721, OFF);
    SetEventFlag(72112821, OFF);
    SetEventFlag(72112921, OFF);
    SetEventFlag(72113021, OFF);
    SetEventFlag(72113121, OFF);
    SetEventFlag(72113221, OFF);
    SetEventFlag(72113321, OFF);
    SetEventFlag(72113421, OFF);
    SetEventFlag(72113521, OFF);
    SetEventFlag(72113621, OFF);
    SetEventFlag(72113721, OFF);
    SetEventFlag(72113821, OFF);
    SetEventFlag(72113921, OFF);
    SetEventFlag(72114021, OFF);
    SetEventFlag(72114121, OFF);
    SetEventFlag(72114221, OFF);
    SetEventFlag(72114321, OFF);
    SetEventFlag(72114421, OFF);
    SetEventFlag(72114521, OFF);
    SetEventFlag(72114621, OFF);
    SetEventFlag(72114721, OFF);
    SetEventFlag(72114821, OFF);
    SetEventFlag(72114921, OFF);
    SetEventFlag(72115021, OFF);
    SetEventFlag(72115121, OFF);
    SetEventFlag(72115221, OFF);
    SetEventFlag(72115321, OFF);
    
    $InitializeEvent(0, 12107100, 72100421, 2801950, 9021);
    $InitializeEvent(1, 12107100, 72100422, 2801950, 9022);
    $InitializeEvent(2, 12107100, 72100423, 2801950, 9023);
    $InitializeEvent(3, 12107100, 72100424, 2801950, 9024);
    $InitializeEvent(4, 12107100, 72100425, 2801950, 9025);
    $InitializeEvent(5, 12107100, 72100426, 2801950, 9026);
    
    $InitializeEvent(6, 12107100, 72100427, 2801951, 9021);
    $InitializeEvent(7, 12107100, 72100428, 2801951, 9022);
    $InitializeEvent(8, 12107100, 72100429, 2801951, 9023);
    $InitializeEvent(9, 12107100, 72100430, 2801951, 9024);
    $InitializeEvent(10, 12107100, 72100431, 2801951, 9025);
    $InitializeEvent(11, 12107100, 72100432, 2801951, 9026);
    
    $InitializeEvent(12, 12107100, 72100433, 2801952, 9021);
    $InitializeEvent(13, 12107100, 72100434, 2801952, 9022);
    $InitializeEvent(14, 12107100, 72100435, 2801952, 9023);
    $InitializeEvent(15, 12107100, 72100436, 2801952, 9024);
    $InitializeEvent(16, 12107100, 72100437, 2801952, 9025);
    $InitializeEvent(17, 12107100, 72100438, 2801952, 9026);
    
    $InitializeEvent(18, 12107100, 72100439, 2801953, 9021);
    $InitializeEvent(19, 12107100, 72100440, 2801953, 9022);
    $InitializeEvent(20, 12107100, 72100441, 2801953, 9023);
    $InitializeEvent(21, 12107100, 72100442, 2801953, 9024);
    $InitializeEvent(22, 12107100, 72100443, 2801953, 9025);
    $InitializeEvent(23, 12107100, 72100444, 2801953, 9026);
    
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
    
    RegisterLadder(12800350, 12800351, 2801250);
    $InitializeEvent(60, 7600, 2801999, 2803999);
    $InitializeEvent(61, 7600, 2801998, 2803998);
    $InitializeEvent(40, 7000, 2800950, 2801950, 999, 12807800, -1);
    
    $InitializeEvent(41, 7000, 2800951, 2801951, 12801800, 12807820, one_reborn_defeat+13);
    $InitializeEvent(one_reborn_offset, 8800, one_reborn_defeat+13, one_reborn_lamp_id-1000, one_reborn_lamp_id, one_reborn_lamp_id+3000);
    
    $InitializeEvent(43, 7000, 2800953, 2801953, 999, 12807860, -1);
    $InitializeEvent(40, 7100, 72800200, 2801950);
    $InitializeEvent(41, 7100, 72800201, 2801951);
    $InitializeEvent(43, 7100, 72800203, 2801953);
    $InitializeEvent(40, 7200, 72800100, 2801950, 2102952);
    $InitializeEvent(41, 7200, 72800101, 2801951, 2102952);
    $InitializeEvent(43, 7200, 72800103, 2801953, 2102953);
    $InitializeEvent(40, 7300, 72102800, 2801950);
    $InitializeEvent(41, 7300, 72102801, 2801951);
    $InitializeEvent(43, 7300, 72102803, 2801953);
    
    //SetEventFlag(12804999, ON);
    
    if (EventFlag(12800630) && !EventFlag(9802)) {
        $InitializeEvent(0, 12800600, 12804700, 12800610, 12800611, 12800612, 2801400, 2801401, 2801402);
        $InitializeEvent(0, 12800601, 12804700, 12800610, 12800611, 12800612);
        $InitializeEvent(0, 12800602, 12804700, 12800610, 12800611, 12800612, 2802102, 12800280);
        $InitializeEvent(0, 12800604, 12804700, 12800610, 12800611, 12800612, 2802101, 12800281);
        $InitializeEvent(0, 12800606, 12804700, 12800610, 12800612, 2801401, 2801402);
        $InitializeEvent(0, 12800607, 12800612, 2802100, 2801401, 2801402);
    }
    
    // gaol lamp
    if (!EventFlag(9802) || EventFlag(12100868)) {
        $InitializeEvent(42, 7000, 2800952, 2801952, 999, 12807840, -1);
        $InitializeEvent(42, 7100, 72800202, 2801952);
        $InitializeEvent(42, 7200, 72800102, 2801952, 2102952);
        $InitializeEvent(42, 7300, 72102802, 2801952);
        
        $InitializeEvent(2100, 12107000, 72112100, 2801952, 2412950);
        $InitializeEvent(2101, 12107000, 72112101, 2801952, 2412951);
        $InitializeEvent(2102, 12107000, 72112102, 2801952, 2412952);
        $InitializeEvent(2103, 12107000, 72112103, 2801952, 2412953);
        $InitializeEvent(2104, 12107000, 72112104, 2801952, 2402950);
        $InitializeEvent(2105, 12107000, 72112105, 2801952, 2402951);
        $InitializeEvent(2106, 12107000, 72112106, 2801952, 2422950);
        $InitializeEvent(2107, 12107000, 72112107, 2801952, 2422952);
        $InitializeEvent(2108, 12107000, 72112108, 2801952, 2422951);
        $InitializeEvent(2109, 12107000, 72112109, 2801952, 2302950);
        $InitializeEvent(2110, 12107000, 72112110, 2801952, 2302951);
        $InitializeEvent(2111, 12107000, 72112111, 2801952, 2302952);
        $InitializeEvent(2112, 12107000, 72112112, 2801952, 2202950);
        $InitializeEvent(2113, 12107000, 72112113, 2801952, 2202951);
        $InitializeEvent(2114, 12107000, 72112114, 2801952, 2702950);
        $InitializeEvent(2115, 12107000, 72112115, 2801952, 2702951);
        $InitializeEvent(2116, 12107000, 72112116, 2801952, 3202950);
        $InitializeEvent(2117, 12107000, 72112117, 2801952, 3202952);
        $InitializeEvent(2118, 12107000, 72112118, 2801952, 2802950);
        $InitializeEvent(2119, 12107000, 72112119, 2801952, 2802953);
        $InitializeEvent(2120, 12107000, 72112120, 2801952, 2802951);
        $InitializeEvent(2121, 12107000, 72112121, 2801952, 2802952);
        $InitializeEvent(2122, 12107000, 72112122, 2801952, 2502950);
        $InitializeEvent(2123, 12107000, 72112123, 2801952, 2502952);
        $InitializeEvent(2124, 12107000, 72112124, 2801952, 2502951);
        $InitializeEvent(2125, 12107000, 72112125, 2801952, 2112950);
        $InitializeEvent(2126, 12107000, 72112126, 2801952, 3202951);
        $InitializeEvent(2127, 12107000, 72112127, 2801952, 3202953);
        $InitializeEvent(2128, 12107000, 72112128, 2801952, 3302950);
        $InitializeEvent(2129, 12107000, 72112129, 2801952, 3302951);
        $InitializeEvent(2130, 12107000, 72112130, 2801952, 2602950);
        $InitializeEvent(2131, 12107000, 72112131, 2801952, 2602953);
        $InitializeEvent(2132, 12107000, 72112132, 2801952, 2602952);
        $InitializeEvent(2133, 12107000, 72112133, 2801952, 2602951);
        $InitializeEvent(2134, 12107000, 72112134, 2801952, 3402950);
        $InitializeEvent(2135, 12107000, 72112135, 2801952, 3402951);
        $InitializeEvent(2136, 12107000, 72112136, 2801952, 3402953);
        $InitializeEvent(2137, 12107000, 72112137, 2801952, 3402952);
        $InitializeEvent(2138, 12107000, 72112138, 2801952, 3502950);
        $InitializeEvent(2139, 12107000, 72112139, 2801952, 3502951);
        $InitializeEvent(2140, 12107000, 72112140, 2801952, 3502952);
        $InitializeEvent(2141, 12107000, 72112141, 2801952, 3602950);
        $InitializeEvent(2142, 12107000, 72112142, 2801952, 3602951);
        $InitializeEvent(2143, 12107000, 72112143, 2801952, 3602952);
        $InitializeEvent(2144, 12107000, 72112144, 2801952, 2902950);
        $InitializeEvent(2145, 12107000, 72112145, 2801952, 2902951);
        $InitializeEvent(2146, 12107000, 72112146, 2801952, 2902952);
        $InitializeEvent(2147, 12107000, 72112147, 2801952, 2902953);
        $InitializeEvent(2148, 12107000, 72112148, 2801952, 2902954);
        $InitializeEvent(2149, 12107000, 72112149, 2801952, 2902955);
        $InitializeEvent(2150, 12107000, 72112150, 2801952, 2902956);
        $InitializeEvent(2151, 12107000, 72112151, 2801952, 2902957);
        $InitializeEvent(2152, 12107000, 72112152, 2801952, 2902958);
        $InitializeEvent(2153, 12107000, 72112153, 2801952, 2902959);
        
        $InitializeEvent(12, 12107100, 72100433, 2801952, 9033);
        $InitializeEvent(13, 12107100, 72100434, 2801952, 9034);
        $InitializeEvent(14, 12107100, 72100435, 2801952, 9035);
        $InitializeEvent(15, 12107100, 72100436, 2801952, 9036);
        $InitializeEvent(16, 12107100, 72100437, 2801952, 9037);
        $InitializeEvent(17, 12107100, 72100438, 2801952, 9038);
        
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
    }
    $InitializeEvent(0, 12800140);
    $InitializeEvent(8, 9200, 2803900);
    $InitializeEvent(0, 12800160);
    $InitializeEvent(7, 9220, 2800710, 12804220, 12804221, 2800, 28, 0);
    $InitializeEvent(7, 9240, 2800710, 12804220, 12804221, 12804222, 28, 0);
    $InitializeEvent(7, 9260, 2800710, 12804220, 12804221, 12804222, 28, 0);
    $InitializeEvent(7, 9280, 2800710, 12804220, 12804221, 2800, 12804223, 28, 0);
    $InitializeEvent(0, 12800999);
    $InitializeEvent(0, 12800435);
    $InitializeEvent(0, 12800436);
    $InitializeEvent(0, 12800400);
    $InitializeEvent(0, 12800401);
    $InitializeEvent(0, 12800402);
    $InitializeEvent(0, 12800403);
    CreateObjectfollowingSFX(2801010, 200, 900130);
    StartTimeMeasurement(2800000, 0, Enabled);
    StartTimeMeasurement(2800001, 18, Enabled);
    $InitializeEvent(0, 12800990);
    if (CharacterType(10000, TargetType.Alive)) {
        if (EventFlag(6322)) {
            SetEventFlag(12801999, ON);
        }
    }
    if (!EventFlag(12801999)) {
        DeactivateObject(2801550, Enabled);
        DeactivateObject(2801551, Disabled);
        SetObjectTreasureState(2801550, Enabled);
        SetObjectTreasureState(2801551, Disabled);
    } else {
        DeactivateObject(2801550, Disabled);
        DeactivateObject(2801551, Enabled);
        SetObjectTreasureState(2801550, Disabled);
        SetObjectTreasureState(2801551, Enabled);
    }
    if (CharacterType(10000, TargetType.Alive)) {
        if (EventFlag(6323)) {
            SetEventFlag(12801998, ON);
        }
    }
    if (!EventFlag(12801998)) {
        DeactivateObject(2801552, Enabled);
        DeactivateObject(2801553, Disabled);
        SetObjectTreasureState(2801552, Enabled);
        SetObjectTreasureState(2801553, Disabled);
    } else {
        DeactivateObject(2801552, Disabled);
        DeactivateObject(2801553, Enabled);
        SetObjectTreasureState(2801552, Disabled);
        SetObjectTreasureState(2801553, Enabled);
    }
    if (CharacterType(10000, TargetType.Alive)) {
        if (EventFlag(6324)) {
            SetEventFlag(12801997, ON);
        }
    }
    if (!EventFlag(12801997)) {
        DeactivateObject(2801554, Enabled);
        DeactivateObject(2801555, Disabled);
        SetObjectTreasureState(2801554, Enabled);
        SetObjectTreasureState(2801555, Disabled);
    } else {
        DeactivateObject(2801554, Disabled);
        DeactivateObject(2801555, Enabled);
        SetObjectTreasureState(2801554, Disabled);
        SetObjectTreasureState(2801555, Enabled);
    }
    $InitializeEvent(0, 12800901);
    $InitializeEvent(0, 12800902);
    $InitializeEvent(0, 12800903);
    $InitializeEvent(0, 12800904);
    $InitializeEvent(0, 12800905);
    $InitializeEvent(0, 12800906);
    $InitializeEvent(0, 12800908);
    $InitializeEvent(0, 12800909);
    $InitializeEvent(0, 12800910);
    DeleteMapSFX(2803920, false);
    DeleteMapSFX(2803921, false);
    
    $InitializeEvent(1, 8617, 2800910, 12804420, 101161, 101208, 163); // yamamura - c
    $InitializeEvent(1, 8630, 8631, 8641, 2800910, 12804420, 2803920, 200248, 101208, 200258, 200268);
    
    $InitializeEvent(2, 8617, 2800911, 12804421, 101161, 101162, 233); // antal
    $InitializeEvent(2, 8630, 8632, 8642, 2800911, 12804421, 2803921, 200247, 101207, 200257, 200267);
    
    $InitializeEvent(0, 12804400, 12804440, 2803920, 12804420, 12804430, 12801800, 12804421);
    $InitializeEvent(0, 12804401, 12804441, 2803921, 12804421, 12804431, 12801800, 12804420);
    $InitializeEvent(0, 12804410, 5, 2800910, 2802910, 12804420, 12804430, 12804440, 12801800, 10564);
    $InitializeEvent(1, 12804410, SingleplayerSummonSignType.NormalCoop, 2800911, 2802913, 12804421, 12804431, 12804441, 12801800, 10568);
    $InitializeEvent(0, 12804450, 2800910, 2802911, 12804420, 12804430, 12804800);
    $InitializeEvent(1, 12804450, 2800911, 2802914, 12804421, 12804431, 12804800);
    $InitializeEvent(0, 12804460, 2800910, 2802911, 2802800, 2802801, 101130, 12804450, 2802801);
    $InitializeEvent(1, 12804460, 2800911, 2802914, 2802800, 2802801, 101130, 12804451, 2802801);
    $InitializeEvent(0, 12804470);
    
    $InitializeEvent(0, 12804882);
    $InitializeEvent(0, 12804883);
    $InitializeEvent(0, 12801800);
    $InitializeEvent(0, 12801801);
    $InitializeEvent(0, 12801802);
    $InitializeEvent(0, 12804880);
    $InitializeEvent(0, 12804881);
    $InitializeEvent(0, 12804802);
    $InitializeEvent(0, 12804803);
    $InitializeEvent(0, 12804804);
    $InitializeEvent(0, 12804805);
    $InitializeEvent(0, 12804806);
    $InitializeEvent(0, 12804807);
    $InitializeEvent(0, 12801803);
    $InitializeEvent(0, 12804820, 2800, 2800, NPCPartType.Part1, 100, 480, 490, 7000);
    $InitializeEvent(1, 12804820, 2801, 2801, NPCPartType.Part2, 200, 481, 491, 7001);
    $InitializeEvent(2, 12804820, 2802, 2802, NPCPartType.Part3, 200, 482, 492, 7002);
    $InitializeEvent(3, 12804820, 2803, 2803, NPCPartType.Part4, 100, 483, 493, 7003);
    $InitializeEvent(4, 12804820, 2804, 2804, NPCPartType.Part5, 200, 484, 494, 7004);
    $InitializeEvent(5, 12804820, 2805, 2805, NPCPartType.Part6, 200, 485, 495, 7005);
    $InitializeEvent(6, 12804820, 2806, 2806, NPCPartType.Part7, 100, 486, 496, 7006);
    $InitializeEvent(0, 12804830);
    $InitializeEvent(0, 12804831);
    $InitializeEvent(0, 12804832);
    $InitializeEvent(0, 12804834);
    $InitializeEvent(0, 12804835);
    $InitializeEvent(0, 12804836);
    $InitializeEvent(0, 12804837);
    $InitializeEvent(0, 12804838);
    $InitializeEvent(0, 12804840, 2800522);
    $InitializeEvent(1, 12804840, 2800527);
    $InitializeEvent(0, 12804850, 2800520);
    $InitializeEvent(2, 12804850, 2800522);
    $InitializeEvent(4, 12804850, 2800524);
    $InitializeEvent(5, 12804850, 2800525);
    $InitializeEvent(7, 12804850, 2800527);
    $InitializeEvent(9, 12804850, 2800529);
    $InitializeEvent(0, 12804870);
    $InitializeEvent(0, 12804871);
    $InitializeEvent(0, 12800100, 2801350, 12800250);
    $InitializeEvent(1, 12800100, 2801351, 12800251);
    $InitializeEvent(2, 12800100, 2801352, 12800252);
    $InitializeEvent(3, 12800100, 2801353, 12800253);
    $InitializeEvent(4, 12800100, 2801354, 12800254);
    $InitializeEvent(5, 12800100, 2801355, 12800255);
    $InitializeEvent(0, 12800120, 2801010, 7413, 10012013);
    $InitializeEvent(0, 12800480, 2801200, 12800201, 1, 31);
    $InitializeEvent(1, 12800480, 2801202, 12800202, 1, 30);
    $InitializeEvent(2, 12800480, 2801203, 12800203, 1, 30);
    $InitializeEvent(3, 12800480, 2801206, 12800206, 1, 30);
    $InitializeEvent(4, 12800480, 2801208, 12800209, 1, 2800020);
    $InitializeEvent(0, 12800490, 7030, 2801200, 12800480);
    $InitializeEvent(1, 12800490, 7031, 2801202, 12800481);
    $InitializeEvent(2, 12800490, 7031, 2801203, 12800482);
    $InitializeEvent(3, 12800490, 7031, 2801206, 12800483);
    $InitializeEvent(4, 12800490, 7030, 2801208, 12800484);
    $InitializeEvent(0, 12800430);
    $InitializeEvent(0, 12800431);
    $InitializeEvent(0, 12800432);
    $InitializeEvent(0, 12800433, 2800740);
    $InitializeEvent(1, 12800433, 2800745);
    $InitializeEvent(0, 12805160, 2800244, 2802230, 1);
    $InitializeEvent(1, 12805160, 2800245, 2802230, 1);
    $InitializeEvent(2, 12805160, 2800243, 2802230, 1);
    $InitializeEvent(2, 12805180, 2800210, 2802270);
    $InitializeEvent(0, 12805470, 11, 11, NPCPartType.Part7, 7003, 5907, 12805655, 12805665, 2800210);
    $InitializeEvent(1, 12805470, 12, 12, NPCPartType.Part8, 7000, 5907, 12805655, 12805665, 2800210);
    $InitializeEvent(0, 12805480, 11, 11, NPCPartType.Part7, 80, 12805655, 2800210);
    $InitializeEvent(1, 12805480, 12, 12, NPCPartType.Part8, 80, 12805655, 2800210);
    $InitializeEvent(0, 12805490, 10, 40, 12805665, 2800210);
    $InitializeEvent(1, 12805490, 30, 40, 12805665, 2800210);
    $InitializeEvent(1, 12800500, 2800721, 52800980);
    $InitializeEvent(2, 12800500, 2800722, 52800970);
    $InitializeEvent(0, 12800500, 2800720, 52800990);
    $InitializeEvent(3, 12800500, 2800723, 52800960);
    if (EventFlag(9802)) {
        $InitializeEvent(0, 12800600, 12804700, 12800610, 12800611, 12800612, 2801400, 2801401, 2801402);
        $InitializeEvent(0, 12800601, 12804700, 12800610, 12800611, 12800612);
        $InitializeEvent(0, 12800602, 12804700, 12800610, 12800611, 12800612, 2802102, 12800280);
        $InitializeEvent(0, 12800604, 12804700, 12800610, 12800611, 12800612, 2802101, 12800281);
        $InitializeEvent(0, 12800606, 12804700, 12800610, 12800612, 2801401, 2801402);
        $InitializeEvent(0, 12800607, 12800612, 2802100, 2801401, 2801402);
        $InitializeEvent(0, 12800470, 2800742, 7000);
        $InitializeEvent(1, 12800470, 2800743, 7001);
        $InitializeEvent(2, 12800470, 2800744, 7003);
        $InitializeEvent(0, 12800460, 2801100, 2802001, 40);
        $InitializeEvent(1, 12800460, 2801101, 2802000, 74);
        $InitializeEvent(0, 12800620, 2802880, 108);
        $InitializeEvent(1, 12800620, 2802881, 146);
        $InitializeEvent(0, 12800700, 2800700);
        $InitializeEvent(1, 12800700, 2800701);
        $InitializeEvent(2, 12800700, 2800702);
        $InitializeEvent(0, 12805500, 2800482, 2802483, 2803482, 0);
        $InitializeEvent(1, 12805500, 2800483, 2802483, 2803483, 0);
        $InitializeEvent(2, 12805500, 2800562, 2802562, 2803562, 0);
        $InitializeEvent(3, 12805500, 2800570, 2802570, 2803570, 0);
        $InitializeEvent(4, 12805500, 2800571, 2802570, 2803571, 0);
        $InitializeEvent(5, 12805500, 2800540, 2802540, 2803540, 0);
        $InitializeEvent(6, 12805500, 2800542, 2802542, 2803542, 0);
        $InitializeEvent(7, 12805500, 2800543, 2802543, 2803543, 0);
        $InitializeEvent(8, 12805500, 2800301, 2802301, 2803301, 0);
        $InitializeEvent(9, 12805500, 2800308, 2802602, 2803308, 0);
        $InitializeEvent(10, 12805500, 2800309, 2802602, 2803309, 0);
        $InitializeEvent(11, 12805500, 2800310, 2802602, 2803310, 0);
        $InitializeEvent(12, 12805500, 2800311, 2802602, 2803311, 0);
        $InitializeEvent(13, 12805500, 2800312, 2802602, 2803312, 0);
        $InitializeEvent(14, 12805500, 2800313, 2802602, 2803313, 0);
        $InitializeEvent(15, 12805500, 2800314, 2802602, 2803314, 0);
        $InitializeEvent(16, 12805500, 2800315, 2802602, 2803315, 0);
        $InitializeEvent(17, 12805500, 2800316, 2802502, 2803316, 1);
        $InitializeEvent(18, 12805500, 2800317, 2802502, 2803317, 3);
        $InitializeEvent(19, 12805500, 2800404, 2802507, 2803404, 0);
        $InitializeEvent(20, 12805500, 2800405, 2802507, 2803405, 0);
        $InitializeEvent(21, 12805500, 2800406, 2802507, 2803406, 0);
        $InitializeEvent(22, 12805500, 2800407, 2802507, 2803407, 0);
        $InitializeEvent(23, 12805500, 2800461, 2802461, 2803461, 0);
        $InitializeEvent(0, 12805600, 2800400, 7010, 261800, 7011, 261800, 2802400, 12805042, 1);
        $InitializeEvent(1, 12805600, 2800401, 7012, 261840, 7013, 261840, 2802400, 12805042, 1);
        $InitializeEvent(2, 12805600, 2800402, 7011, 261811, 0, 261811, 2802400, 12805042, 1);
        $InitializeEvent(3, 12805600, 2800403, 7012, 261810, 7013, 261810, 2802400, 12805042, 1);
        $InitializeEvent(4, 12805600, 2800408, 7010, 261800, 7011, 261800, 0, 12805042, 0);
        $InitializeEvent(6, 12805600, 2800410, 7010, 261840, 7011, 261840, 0, 12805042, 0);
        $InitializeEvent(7, 12805600, 2800411, 7012, 261810, 7013, 261810, 0, 12805042, 0);
        $InitializeEvent(10, 12805600, 2800382, 7010, 264801, 7011, 264800, 0, 12805042, 0);
        $InitializeEvent(30, 12805600, 2800318, 0, 263851, 3013, 263850, 0, 12805040, 1);
        $InitializeEvent(31, 12805600, 2800305, 0, 263851, 3013, 263850, 0, 12805040, 1);
        $InitializeEvent(0, 12805650, 2800400, 2802400, 2802401, 10, 12805660);
        $InitializeEvent(1, 12805650, 2800401, 2802400, 2802402, 10, 12805661);
        $InitializeEvent(2, 12805650, 2800402, 2802400, 2802403, 10, 12805662);
        $InitializeEvent(3, 12805650, 2800403, 2802400, 2802404, 10, 12805663);
        $InitializeEvent(4, 12805650, 2800480, 2802480, 2802481, 10, 12805664);
        $InitializeEvent(6, 12805650, 2800329, 2802329, 2802330, 10, 12805666);
        $InitializeEvent(0, 12805660, 2800400, 2802401);
        $InitializeEvent(1, 12805660, 2800401, 2802402);
        $InitializeEvent(2, 12805660, 2800402, 2802403);
        $InitializeEvent(3, 12805660, 2800403, 2802404);
        $InitializeEvent(4, 12805660, 2800480, 2802481);
        $InitializeEvent(6, 12805660, 2800329, 2802330);
        $InitializeEvent(0, 12805670, 2800400, 10, 12805660, 0, 0);
        $InitializeEvent(1, 12805670, 2800401, 10, 12805661, 0, 0);
        $InitializeEvent(2, 12805670, 2800402, 10, 12805662, 0, 0);
        $InitializeEvent(3, 12805670, 2800403, 10, 12805663, 0, 0);
        $InitializeEvent(4, 12805670, 2800480, 10, 12805664, 0, 0);
        $InitializeEvent(6, 12805670, 2800329, 10, 12805666, 1, 2);
        $InitializeEvent(0, 12805680, 2800501, 2802506, 1);
        DeactivateGenerator(2803000, Disabled);
        DeactivateGenerator(2803001, Disabled);
        DeactivateGenerator(2803002, Disabled);
        DeactivateGenerator(2803003, Disabled);
        DeactivateGenerator(2803004, Disabled);
        DeactivateGenerator(2803005, Disabled);
        DeactivateGenerator(2803006, Disabled);
        DeactivateGenerator(2803007, Disabled);
        DeactivateGenerator(2803008, Disabled);
        DeactivateGenerator(2803009, Disabled);
        DeactivateGenerator(2803010, Disabled);
        DeactivateGenerator(2803011, Disabled);
        DeactivateGenerator(2803012, Disabled);
        DeactivateGenerator(2803013, Disabled);
        DeactivateGenerator(2803014, Disabled);
        DeactivateGenerator(2803015, Disabled);
        DeactivateGenerator(2803016, Disabled);
        DeactivateGenerator(2803017, Disabled);
        DeactivateGenerator(2803018, Disabled);
        DeactivateGenerator(2803019, Disabled);
        DeactivateGenerator(2803020, Disabled);
        DeactivateGenerator(2803021, Disabled);
        DeactivateGenerator(2803022, Disabled);
        DeactivateGenerator(2803023, Disabled);
        DeactivateGenerator(2803024, Disabled);
        DeactivateGenerator(2803025, Disabled);
        DeactivateGenerator(2803026, Disabled);
        DeactivateGenerator(2803028, Disabled);
        DeactivateGenerator(2803080, Disabled);
        DeactivateGenerator(2803082, Disabled);
        DeactivateGenerator(2803083, Disabled);
        DeactivateGenerator(2803084, Disabled);
        DeactivateGenerator(2803100, Disabled);
        DeactivateGenerator(2803101, Disabled);
        DeactivateGenerator(2803102, Disabled);
        DeactivateGenerator(2803103, Disabled);
        DeactivateGenerator(2803104, Disabled);
        DeactivateGenerator(2803105, Disabled);
        DeactivateGenerator(2803106, Disabled);
        DeactivateGenerator(2803107, Disabled);
        DeactivateGenerator(2803108, Disabled);
        DeactivateGenerator(2803110, Disabled);
        DeactivateGenerator(2803111, Disabled);
        DeactivateGenerator(2803160, Disabled);
        DeactivateGenerator(2803161, Disabled);
        DeactivateGenerator(2803162, Disabled);
        DeactivateGenerator(2803163, Disabled);
        DeactivateGenerator(2803180, Disabled);
        DeactivateGenerator(2803181, Disabled);
        DeactivateGenerator(2803182, Disabled);
        DeactivateGenerator(2803183, Disabled);
        $InitializeEvent(2, 12804500, 12805030, 2803002, 12805040, 2800302, 0, 0, 0);
        $InitializeEvent(3, 12804500, 12805030, 2803003, 12805040, 2800303, 0, 0, 1);
        $InitializeEvent(1, 12804500, 9802, 2803001, 12805040, 2800301, 0, 0, 0);
        $InitializeEvent(0, 12804500, 9802, 2803000, 12805040, 2800300, 0, 0, 0);
        $InitializeEvent(160, 12804500, 9802, 2803160, 12805040, 2800460, 0, 0, 1);
        $InitializeEvent(4, 12804500, 9802, 2803004, 12805044, 2800304, 0, 0, 1);
        $InitializeEvent(5, 12804500, 9802, 2803005, 12805044, 2800305, 0, 0, 0);
        $InitializeEvent(6, 12804500, 9802, 2803006, 12805044, 2800306, 0, 0, 0);
        $InitializeEvent(7, 12804500, 9802, 2803007, 12805044, 2800307, 0, 0, 1);
        $InitializeEvent(182, 12804500, 9802, 2803182, 12805044, 2800482, 0, 0, 0);
        $InitializeEvent(183, 12804500, 9802, 2803183, 12805044, 2800483, 0, 0, 0);
        $InitializeEvent(8, 12804500, 9802, 2803008, 12805040, 2800308, 0, 0, 0);
        $InitializeEvent(9, 12804500, 9802, 2803009, 12805040, 2800309, 0, 0, 0);
        $InitializeEvent(10, 12804500, 9802, 2803010, 12805040, 2800310, 0, 0, 0);
        $InitializeEvent(11, 12804500, 9802, 2803011, 12805040, 2800311, 0, 0, 0);
        $InitializeEvent(12, 12804500, 9802, 2803012, 12805040, 2800312, 0, 0, 0);
        $InitializeEvent(13, 12804500, 9802, 2803013, 12805040, 2800313, 0, 0, 0);
        $InitializeEvent(14, 12804500, 9802, 2803014, 12805040, 2800314, 0, 0, 0);
        $InitializeEvent(15, 12804500, 9802, 2803015, 12805040, 2800315, 0, 0, 0);
        $InitializeEvent(16, 12804500, 12805031, 2803016, 12805040, 2800316, 0, 0, 0);
        $InitializeEvent(17, 12804500, 12805031, 2803017, 12805040, 2800317, 0, 0, 1);
        $InitializeEvent(18, 12804500, 9802, 2803018, 12805040, 2800318, 0, 0, 0);
        $InitializeEvent(20, 12804500, 12805021, 2803020, 12805041, 2800320, 0, 0, 0);
        $InitializeEvent(21, 12804500, 12805021, 2803021, 12805041, 2800321, 0, 0, 0.5);
        $InitializeEvent(80, 12804500, 12805021, 2803080, 12805041, 2800380, 0, 0, 1);
        $InitializeEvent(19, 12804500, 12805022, 2803019, 12805041, 2800319, 0, 0, 0);
        $InitializeEvent(162, 12804500, 12805022, 2803162, 12805041, 2800462, 0, 0, 1);
        $InitializeEvent(100, 12804500, 9802, 2803100, 12805042, 2800400, 0, 0, 0);
        $InitializeEvent(101, 12804500, 9802, 2803101, 12805042, 2800401, 0, 0, 0);
        $InitializeEvent(102, 12804500, 9802, 2803102, 12805042, 2800402, 0, 0, 0);
        $InitializeEvent(103, 12804500, 9802, 2803103, 12805042, 2800403, 0, 0, 0);
        $InitializeEvent(108, 12804500, 9802, 2803108, 12805042, 2800408, 0, 0, 0);
        $InitializeEvent(110, 12804500, 9802, 2803110, 12805042, 2800410, 0, 0, 0);
        $InitializeEvent(111, 12804500, 9802, 2803111, 12805042, 2800411, 0, 0, 0);
        $InitializeEvent(82, 12804500, 9802, 2803082, 12805042, 2800382, 0, 0, 0);
        $InitializeEvent(83, 12804500, 9802, 2803083, 12805042, 2800383, 0, 0, 0);
        $InitializeEvent(161, 12804500, 9802, 2803161, 12805042, 2800461, 0, 0, 0);
        $InitializeEvent(104, 12804500, 9802, 2803104, 12805042, 2800404, 0, 0, 0);
        $InitializeEvent(105, 12804500, 9802, 2803105, 12805042, 2800405, 0, 0, 0.5);
        $InitializeEvent(106, 12804500, 9802, 2803106, 12805042, 2800406, 0, 0, 1);
        $InitializeEvent(107, 12804500, 9802, 2803107, 12805042, 2800407, 0, 0, 1.5);
        $InitializeEvent(22, 12804500, 12805023, 2803022, 12805043, 2800322, 0, 0, 0.5);
        $InitializeEvent(23, 12804500, 12805023, 2803023, 12805043, 2800323, 0, 0, 0);
        $InitializeEvent(84, 12804500, 12805023, 2803084, 12805043, 2800384, 0, 0, 1);
        $InitializeEvent(24, 12804500, 9802, 2803024, 12805043, 2800324, 0, 0, 0);
        $InitializeEvent(25, 12804500, 9802, 2803025, 12805043, 2800325, 0, 0, 0);
        $InitializeEvent(180, 12804500, 9802, 2803180, 12805043, 2800480, 0, 0, 0);
        $InitializeEvent(181, 12804500, 9802, 2803181, 12805043, 2800481, 0, 0, 0);
        $InitializeEvent(26, 12804500, 12805033, 2803026, 12805045, 2800326, 0, 0, 0);
        $InitializeEvent(27, 12804500, 12805033, 2803027, 12805045, 2800327, 0, 0, 0.5);
        $InitializeEvent(28, 12804500, 12805025, 2803028, 12805045, 2800328, 0, 0, 1);
        $InitializeEvent(0, 12805020, 2800500, 2802504);
        $InitializeEvent(1, 12805020, 2800501, 2802505);
        $InitializeEvent(2, 12805020, 2800501, 2802506);
        $InitializeEvent(3, 12805020, 2800503, 2802509);
        $InitializeEvent(4, 12805020, 2800504, 2802514);
        $InitializeEvent(5, 12805020, 2800505, 2802513);
        $InitializeEvent(0, 12805030, 2802500, 2802501, 12805030, 12805040);
        $InitializeEvent(1, 12805030, 2802502, 2802503, 12805031, 12805040);
        $InitializeEvent(2, 12805030, 2802507, 2802508, 12805032, 12805042);
        $InitializeEvent(3, 12805030, 2802511, 2802512, 12805033, 12805045);
        $InitializeEvent(0, 12805040, 2800500);
        $InitializeEvent(1, 12805040, 2800501);
        $InitializeEvent(2, 12805040, 2800502);
        $InitializeEvent(3, 12805040, 2800503);
        $InitializeEvent(4, 12805040, 2800504);
        $InitializeEvent(5, 12805040, 2800505);
        $InitializeEvent(0, 12805700, 2800500, 2800300, 0, 0);
        $InitializeEvent(1, 12805700, 2800500, 2800301, 0, 0);
        $InitializeEvent(2, 12805700, 2800500, 2800302, 0, 0);
        $InitializeEvent(3, 12805700, 2800500, 2800303, 0, 0);
        $InitializeEvent(4, 12805700, 2800504, 2800304, 0, 0);
        $InitializeEvent(5, 12805700, 2800504, 2800305, 0, 0);
        $InitializeEvent(6, 12805700, 2800504, 2800306, 0, 0);
        $InitializeEvent(7, 12805700, 2800504, 2800307, 0, 0);
        $InitializeEvent(8, 12805700, 2800500, 2800308, 0, 0);
        $InitializeEvent(9, 12805700, 2800500, 2800309, 0, 0);
        $InitializeEvent(10, 12805700, 2800500, 2800310, 0, 0);
        $InitializeEvent(11, 12805700, 2800500, 2800311, 0, 0);
        $InitializeEvent(12, 12805700, 2800500, 2800312, 0, 0);
        $InitializeEvent(13, 12805700, 2800500, 2800313, 0, 0);
        $InitializeEvent(14, 12805700, 2800500, 2800314, 0, 0);
        $InitializeEvent(15, 12805700, 2800500, 2800315, 0, 0);
        $InitializeEvent(16, 12805700, 2800500, 2800316, 0, 0);
        $InitializeEvent(17, 12805700, 2800500, 2800317, 0, 0);
        $InitializeEvent(18, 12805700, 2800500, 2800318, 0, 0);
        $InitializeEvent(19, 12805700, 2800501, 2800319, 0, 0);
        $InitializeEvent(20, 12805700, 2800501, 2800320, 0, 0);
        $InitializeEvent(21, 12805700, 2800501, 2800321, 0, 0);
        $InitializeEvent(22, 12805700, 2800503, 2800322, 0, 0);
        $InitializeEvent(23, 12805700, 2800503, 2800323, 0, 0);
        $InitializeEvent(24, 12805700, 2800503, 2800324, 0, 0);
        $InitializeEvent(25, 12805700, 2800503, 2800325, 0, 0);
        $InitializeEvent(26, 12805700, 2800505, 2800326, 0, 0);
        $InitializeEvent(27, 12805700, 2800505, 2800327, 0, 0);
        $InitializeEvent(28, 12805700, 2800505, 2800328, 0, 0);
        $InitializeEvent(80, 12805700, 2800501, 2800380, 0, 0);
        $InitializeEvent(82, 12805700, 2800502, 2800382, 0, 0);
        $InitializeEvent(83, 12805700, 2800502, 2800383, 0, 0);
        $InitializeEvent(84, 12805700, 2800503, 2800384, 0, 0);
        $InitializeEvent(100, 12805700, 2800502, 2800400, 0, 0);
        $InitializeEvent(101, 12805700, 2800502, 2800401, 0, 0);
        $InitializeEvent(102, 12805700, 2800502, 2800402, 0, 0);
        $InitializeEvent(103, 12805700, 2800502, 2800403, 0, 0);
        $InitializeEvent(104, 12805700, 2800502, 2800404, 0, 0);
        $InitializeEvent(105, 12805700, 2800502, 2800405, 0, 0);
        $InitializeEvent(106, 12805700, 2800502, 2800406, 0, 0);
        $InitializeEvent(107, 12805700, 2800502, 2800407, 0, 0);
        $InitializeEvent(108, 12805700, 2800502, 2800408, 0, 0);
        $InitializeEvent(110, 12805700, 2800502, 2800410, 0, 0);
        $InitializeEvent(111, 12805700, 2800502, 2800411, 0, 0);
        $InitializeEvent(160, 12805700, 2800500, 2800460, 0, 0);
        $InitializeEvent(161, 12805700, 2800502, 2800461, 0, 0);
        $InitializeEvent(162, 12805700, 2800501, 2800462, 0, 0);
        $InitializeEvent(180, 12805700, 2800503, 2800480, 0, 0);
        $InitializeEvent(181, 12805700, 2800503, 2800481, 0, 0);
        $InitializeEvent(182, 12805700, 2800504, 2800482, 0, 0);
        $InitializeEvent(183, 12805700, 2800504, 2800483, 0, 0);
        $InitializeEvent(0, 12804000, 2800300);
        $InitializeEvent(1, 12804000, 2800301);
        $InitializeEvent(2, 12804000, 2800302);
        $InitializeEvent(3, 12804000, 2800303);
        $InitializeEvent(4, 12804000, 2800304);
        $InitializeEvent(5, 12804000, 2800305);
        $InitializeEvent(6, 12804000, 2800306);
        $InitializeEvent(7, 12804000, 2800307);
        $InitializeEvent(8, 12804000, 2800308);
        $InitializeEvent(9, 12804000, 2800309);
        $InitializeEvent(10, 12804000, 2800310);
        $InitializeEvent(11, 12804000, 2800311);
        $InitializeEvent(12, 12804000, 2800312);
        $InitializeEvent(13, 12804000, 2800313);
        $InitializeEvent(14, 12804000, 2800314);
        $InitializeEvent(15, 12804000, 2800315);
        $InitializeEvent(16, 12804000, 2800316);
        $InitializeEvent(17, 12804000, 2800317);
        $InitializeEvent(18, 12804000, 2800318);
        $InitializeEvent(19, 12804000, 2800319);
        $InitializeEvent(20, 12804000, 2800320);
        $InitializeEvent(21, 12804000, 2800321);
        $InitializeEvent(22, 12804000, 2800322);
        $InitializeEvent(23, 12804000, 2800323);
        $InitializeEvent(24, 12804000, 2800324);
        $InitializeEvent(25, 12804000, 2800325);
        $InitializeEvent(26, 12804000, 2800326);
        $InitializeEvent(27, 12804000, 2800327);
        $InitializeEvent(28, 12804000, 2800328);
        $InitializeEvent(80, 12804000, 2800380);
        $InitializeEvent(82, 12804000, 2800382);
        $InitializeEvent(83, 12804000, 2800383);
        $InitializeEvent(84, 12804000, 2800384);
        $InitializeEvent(100, 12804000, 2800400);
        $InitializeEvent(101, 12804000, 2800401);
        $InitializeEvent(102, 12804000, 2800402);
        $InitializeEvent(103, 12804000, 2800403);
        $InitializeEvent(104, 12804000, 2800404);
        $InitializeEvent(105, 12804000, 2800405);
        $InitializeEvent(106, 12804000, 2800406);
        $InitializeEvent(107, 12804000, 2800407);
        $InitializeEvent(108, 12804000, 2800408);
        $InitializeEvent(110, 12804000, 2800410);
        $InitializeEvent(111, 12804000, 2800411);
        $InitializeEvent(160, 12804000, 2800460);
        $InitializeEvent(161, 12804000, 2800461);
        $InitializeEvent(162, 12804000, 2800462);
        $InitializeEvent(180, 12804000, 2800480);
        $InitializeEvent(181, 12804000, 2800481);
        $InitializeEvent(182, 12804000, 2800482);
        $InitializeEvent(183, 12804000, 2800483);
        $InitializeEvent(0, 12805918);
        $InitializeEvent(0, 12805900, 2800562);
        $InitializeEvent(1, 12805900, 2800563);
        $InitializeEvent(2, 12805900, 2800564);
        $InitializeEvent(4, 12805900, 2800566);
        $InitializeEvent(5, 12805900, 2800567);
        $InitializeEvent(7, 12805900, 2800569);
        $InitializeEvent(8, 12805900, 2800570);
        $InitializeEvent(9, 12805900, 2800571);
        $InitializeEvent(10, 12805900, 2800572);
        $InitializeEvent(11, 12805900, 2800573);
        $InitializeEvent(0, 12805920, 2801600, 12805942);
        $InitializeEvent(1, 12805920, 2801601, 12805947);
        $InitializeEvent(2, 12805920, 2801602, 12805952);
        $InitializeEvent(3, 12805920, 2801603, 12805957);
        $InitializeEvent(0, 12805930, 12805940, 12805942, 2801600);
        $InitializeEvent(1, 12805930, 12805945, 12805947, 2801601);
        $InitializeEvent(2, 12805930, 12805950, 12805952, 2801602);
        $InitializeEvent(3, 12805930, 12805955, 12805957, 2801603);
        $InitializeEvent(0, 12805050);
    } else {
L4:
        if (!EventFlag(12800630)) {
            $InitializeEvent(0, 12800608);
        }
        $InitializeEvent(4, 12805460, 2800104, 7012, 7013, 2, 263899, 263890);
        $InitializeEvent(5, 12805460, 2800105, 7014, 7015, 2, 263899, 263890);
        $InitializeEvent(6, 12805460, 2800106, 7010, 7011, 2, 263899, 263890);
        $InitializeEvent(7, 12805460, 2800107, 7012, 7013, 2, 263899, 263890);
        $InitializeEvent(8, 12805460, 2800108, 7014, 7015, 2, 263899, 263890);
        $InitializeEvent(9, 12805460, 2800109, 7010, 7011, 2, 263899, 263890);
        $InitializeEvent(30, 12805500, 2800160, 2802160, 2803160, 0);
        $InitializeEvent(31, 12805500, 2800140, 2802140, 2803140, 0);
        $InitializeEvent(32, 12805500, 2800141, 2802140, 2803141, 0);
        $InitializeEvent(33, 12805500, 2800200, 2802200, 2803200, 0);
        $InitializeEvent(6, 12805550, 2800608, 2802608, 8);
        $InitializeEvent(6, 12805650, 2800160, 2802160, 2802161, 10, 12805666);
        $InitializeEvent(6, 12805660, 2800160, 2802161);
        $InitializeEvent(6, 12805670, 2800160, 10, 12805666, 0, 0);
    }
L5:
    NoOp();
});

// pre-constructor
$Event(50, Default, function() {
    SetCharacterAnimationState(2800740, Disabled);
    SetCharacterGravity(2800740, Disabled);
    SetCharacterMaphits(2800740, true);
    SetNetworkUpdateRate(2800740, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetCharacterAnimationState(2800741, Disabled);
    SetCharacterGravity(2800741, Disabled);
    SetCharacterMaphits(2800741, true);
    SetNetworkUpdateRate(2800741, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetCharacterAnimationState(2800742, Disabled);
    SetCharacterGravity(2800742, Disabled);
    SetCharacterMaphits(2800742, true);
    SetNetworkUpdateRate(2800742, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetCharacterAnimationState(2800743, Disabled);
    SetCharacterGravity(2800743, Disabled);
    SetCharacterMaphits(2800743, true);
    SetNetworkUpdateRate(2800743, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetCharacterAnimationState(2800744, Disabled);
    SetCharacterGravity(2800744, Disabled);
    SetCharacterMaphits(2800744, true);
    SetNetworkUpdateRate(2800744, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetCharacterAnimationState(2800745, Disabled);
    SetCharacterGravity(2800745, Disabled);
    SetCharacterMaphits(2800745, true);
    SetNetworkUpdateRate(2800745, true, CharacterUpdateFrequency.AlwaysUpdate);
    ChangeCharacterDispmask(2800745, 0, OFF);
    ChangeCharacterDispmask(2800745, 2, OFF);
    ChangeCharacterDispmask(2800745, 10, OFF);
    SetCharacterAnimationState(2800990, Disabled);
    SetCharacterGravity(2800990, Disabled);
    SetCharacterMaphits(2800990, true);
    SetNetworkUpdateRate(2800990, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetCharacterDefaultBackreadState(2800990, Enabled);
    SetCharacterAnimationState(2800991, Disabled);
    SetCharacterGravity(2800991, Disabled);
    SetCharacterMaphits(2800991, true);
    SetNetworkUpdateRate(2800991, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetCharacterDefaultBackreadState(2800991, Enabled);
    $InitializeEvent(0, 12800911);
});

// generator enable_XX
$Event(12804500, Restart, function(eventFlagId, generatorEntityId, eventFlagId2, chrEntityId, value, eventFlagId3, timeSeconds) {
    if (!EventFlag(eventFlagId2)) {
        if (!EventFlag(eventFlagId)) {
            ChangeCharacterEnableState(chrEntityId, Disabled);
            WaitFor(EventFlag(eventFlagId));
            WaitFixedTimeSeconds(timeSeconds);
            ChangeCharacterEnableState(chrEntityId, Enabled);
            ForceAnimationPlayback(chrEntityId, 6200, false, true, false);
        }
L0:
        DeactivateGenerator(generatorEntityId, Enabled);
        flag &= EventFlag(eventFlagId2);
        if (value != 0) {
            flag &= EventFlag(eventFlagId3);
        }
        WaitFor(flag);
    }
L1:
    DeactivateGenerator(generatorEntityId, Disabled);
});

// Widow rings _XX
$Event(12805020, Restart, function(chrEntityId, areaEntityId) {
    EndIf(ThisEventSlot());
    WaitFor(
        CharacterAIState(chrEntityId, AIStateType.Recognition)
            || CharacterAIState(chrEntityId, AIStateType.Combat)
            || ((CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.WhitePhantom))
                && InArea(10000, areaEntityId)));
    ForceAnimationPlayback(chrEntityId, 3010, false, false, false);
    WaitFor(CharacterHasEventMessage(chrEntityId, 30));
    WaitFixedTimeSeconds(0);
});

// bell rings _XX
$Event(12805030, Restart, function(areaEntityId, entityId, eventFlagId, eventFlagId2) {
    EndIf(ThisEventSlot());
    WaitFor(
        (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.Alive))
            && InArea(10000, areaEntityId)
            && !EventFlag(eventFlagId2));
    PlaySE(entityId, SoundType.cCharacterMotion, 105006003);
    WaitFixedTimeFrames(20);
    PlaySE(entityId, SoundType.cCharacterMotion, 105006102);
    SetEventFlag(eventFlagId, ON);
    WaitFixedTimeFrames(13);
    PlaySE(entityId, SoundType.cCharacterMotion, 105006102);
    WaitFixedTimeFrames(9);
    PlaySE(entityId, SoundType.cCharacterMotion, 105006102);
    WaitFixedTimeFrames(7);
    PlaySE(entityId, SoundType.cCharacterMotion, 105006102);
    WaitFixedTimeFrames(11);
    PlaySE(entityId, SoundType.cCharacterMotion, 105006102);
    WaitFixedTimeFrames(7);
    PlaySE(entityId, SoundType.cCharacterMotion, 105006102);
    WaitFixedTimeFrames(9);
    PlaySE(entityId, SoundType.cCharacterMotion, 105006102);
    WaitFixedTimeFrames(6);
    PlaySE(entityId, SoundType.cCharacterMotion, 105006102);
    WaitFixedTimeFrames(9);
    PlaySE(entityId, SoundType.cCharacterMotion, 105006102);
    WaitFixedTimeFrames(8);
    PlaySE(entityId, SoundType.cCharacterMotion, 105006102);
    WaitFixedTimeFrames(11);
    PlaySE(entityId, SoundType.cCharacterMotion, 105006102);
});

// Widow died_XX
$Event(12805040, Restart, function(chrEntityId) {
    EndIf(ThisEventSlot());
    WaitFor(CharacterDead(chrEntityId));
    WaitFixedTimeSeconds(0);
});

// mimic surprised_00
$Event(12805050, Restart, function() {
    if (!ThisEvent()) {
        SetCharacterAIState(2800563, Disabled);
        WaitFor(CharacterBackreadStatus(2800563));
        IssueShortWarpRequest(2800563, TargetEntityType.Area, 2802564, -1);
        ForceAnimationPlayback(2800563, 7005, true, false, false);
        ForceAnimationPlayback(2801965, 1, true, false, false);
        WaitFor(
            (CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.WhitePhantom))
                && InArea(10000, 2802563));
        IssueShortWarpRequest(2800563, TargetEntityType.Area, 2802564, -1);
        ForceAnimationPlayback(2800563, 7006, false, false, false);
        ForceAnimationPlayback(2801965, 2, false, true, false);
        SetCharacterAIState(2800563, Enabled);
    }
L0:
    ForceAnimationPlayback(2801965, 3, true, false, false);
    SetCharacterHome(2800563, 2802565);
});

// Executioner patrol start_XX
$Event(12805140, Default, function(chrEntityId, areaEntityId, targetDistance) {
    SetCharacterAIState(chrEntityId, Disabled);
    WaitFor(
        InArea(10000, areaEntityId)
            || EntityInRadiusOfEntity(10000, chrEntityId, targetDistance)
            || HasDamageType(chrEntityId, -1, DamageType.Unspecified));
    SetCharacterAIState(chrEntityId, Enabled);
    RequestCharacterAIReplan(chrEntityId);
});

// Shooting enemy logic ON_XX when invading the area
$Event(12805160, Default, function(chrEntityId, areaEntityId, targetDistance) {
    SetCharacterAIState(chrEntityId, Disabled);
    WaitFor(
        InArea(10000, areaEntityId)
            || EntityInRadiusOfEntity(10000, chrEntityId, targetDistance)
            || HasDamageType(chrEntityId, -1, DamageType.Unspecified));
    SetCharacterAIState(chrEntityId, Enabled);
    RequestCharacterAIReplan(chrEntityId);
});

// NPC patrol start_XX
$Event(12805180, Restart, function(chrEntityId, areaEntityId) {
    SetCharacterAIState(chrEntityId, Disabled);
    WaitFor(
        InArea(10000, areaEntityId)
            || EntityInRadiusOfEntity(10000, chrEntityId, 4)
            || HasDamageType(chrEntityId, -1, DamageType.Unspecified));
    SetCharacterAIState(chrEntityId, Enabled);
    RequestCharacterAIReplan(chrEntityId);
});

// Prison crowd A_XX
$Event(12805460, Restart, function(chrEntityId, animationId, animationId2, targetDistance, aiId, aiId2) {
    if (ThisEventSlot()) {
        SetCharacterAIId(chrEntityId, aiId2);
    }
L0:
    ForceAnimationPlayback(chrEntityId, animationId, true, false, true);
    SetCharacterAIId(chrEntityId, aiId);
    SetCharacterGravity(chrEntityId, Disabled);
    WaitFor(
        CharacterAIState(chrEntityId, AIStateType.Recognition)
            || CharacterAIState(chrEntityId, AIStateType.Combat)
            || ((CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.WhitePhantom))
                && EntityInRadiusOfEntity(chrEntityId, 10000, targetDistance)));
    SetCharacterAIId(chrEntityId, aiId2);
    SetCharacterGravity(chrEntityId, Enabled);
    ForceAnimationPlayback(chrEntityId, animationId2, false, false, false);
});

// Medical Society's Franken (axe) Part damage_XX
$Event(12805470, Restart, function(npcPartId, npcPartId2, npcPartGroupIdx, animationId, spEffectId, eventFlagId, eventFlagId2, chrEntityId) {
    WaitFor(EventFlag(eventFlagId));
    hp = NPCPartHP(chrEntityId, npcPartId2) <= 0;
    hpFlag = HPRatio(chrEntityId) <= 0 && EventFlag(eventFlagId);
    WaitFor(hp || hpFlag);
    EndIf(hpFlag.Passed);
    if (!EventFlag(eventFlagId)) {
        SetNPCPartHP(chrEntityId, npcPartId2, 1, false);
        RestartEvent();
    }
    CreateNPCPart(chrEntityId, npcPartId, npcPartGroupIdx, 999999, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 65, 65);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, animationId, false, false, false);
    WaitFor(CharacterHasEventMessage(chrEntityId, 400));
    SetSpEffect(chrEntityId, spEffectId, false);
    SetEventFlag(eventFlagId2, OFF);
    WaitFor(CharacterHasEventMessage(chrEntityId, 300));
    SetNPCPartHP(chrEntityId, npcPartId2, 80, true);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 64, 64);
    ClearSpEffect(chrEntityId, spEffectId);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Medical Association Franken (axe) site registration_XX
$Event(12805480, Restart, function(npcPartId, npcPartId2, npcPartGroupIdx, npcPartHP, eventFlagId, chrEntityId) {
    WaitFor(CharacterBackreadStatus(chrEntityId) && EntityInRadiusOfEntity(chrEntityId, 10000, 10));
    CreateNPCPart(chrEntityId, npcPartId, npcPartGroupIdx, npcPartHP, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 64, 64);
    SetEventFlag(eventFlagId, ON);
});

// Medical Association's franken (axe) part destruction timing limit_XX
$Event(12805490, Restart, function(eventMessageId, eventMessageId2, eventFlagId, chrEntityId) {
    WaitFor(CharacterHasEventMessage(chrEntityId, eventMessageId));
    SetEventFlag(eventFlagId, ON);
    WaitFor(CharacterHasEventMessage(chrEntityId, eventMessageId2));
    SetEventFlag(eventFlagId, OFF);
    RestartEvent();
});

// Change enemy patrol information_area_XX
$Event(12805500, Restart, function(chrEntityId, areaEntityId, patrolInformationEntityId, timeSeconds) {
    WaitFor(
        (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, areaEntityId));
L0:
    WaitFixedTimeSeconds(timeSeconds);
    ChangeCharacterPatrolBehavior(chrEntityId, patrolInformationEntityId);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterDead(chrEntityId));
    WaitFor(!CharacterDead(chrEntityId));
    RestartEvent();
});

// dummy reader logic ON_XX
$Event(12805550, Restart, function(chrEntityId, areaEntityId, targetDistance) {
    EndIf(ThisEventSlot());
    SetCharacterAIState(chrEntityId, Disabled);
    WaitFor(
        (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && (InArea(10000, areaEntityId)
                || EntityInRadiusOfEntity(10000, chrEntityId, targetDistance)));
    SetCharacterAIState(chrEntityId, Enabled);
});

// dummy reader control_XX
$Event(12805570, Restart, function(chrEntityId, areaEntityId, areaEntityId2) {
    WaitFor(InArea(chrEntityId, areaEntityId));
    SetCharacterAIState(chrEntityId, Disabled);
    IssueShortWarpRequest(chrEntityId, TargetEntityType.Area, areaEntityId, -1);
    WaitFixedTimeSeconds(15);
    SetCharacterAIState(chrEntityId, Enabled);
    WaitFor(InArea(chrEntityId, areaEntityId2));
    SetCharacterAIState(chrEntityId, Disabled);
    IssueShortWarpRequest(chrEntityId, TargetEntityType.Area, areaEntityId2, -1);
    WaitFixedTimeSeconds(15);
    SetCharacterAIState(chrEntityId, Enabled);
    RestartEvent();
});

// Enemy special standby_XX
$Event(12805600, Restart, function(chrEntityId, animationId, aiId, animationId2, aiId2, areaEntityId, eventFlagId, value) {
    if (!ThisEventSlot()) {
        ForceAnimationPlayback(chrEntityId, animationId, true, false, false);
        SetCharacterAIId(chrEntityId, aiId);
        chrArea = (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, areaEntityId);
        flag = EventFlag(eventFlagId);
        WaitFor(
            CharacterAIState(chrEntityId, AIStateType.Recognition)
                || CharacterAIState(chrEntityId, AIStateType.Combat)
                || chrArea
                || flag);
        if (!flag.Passed) {
            if (value != 1) {
                ForceAnimationPlayback(chrEntityId, animationId2, false, false, false);
            } else {
                RotateCharacter(chrEntityId, 10000, animationId2, false);
            }
        } else {
L1:
            ForceAnimationPlayback(chrEntityId, 0, false, false, false);
        }
    }
L0:
    SetCharacterAIId(chrEntityId, aiId2);
});

// Enemy starts moving to designated point_XX
$Event(12805650, Restart, function(chrEntityId, areaEntityId, areaEntityId2, commandId, eventFlagId) {
    EndIf(EventFlag(eventFlagId));
    if (!ThisEventSlot()) {
        WaitFor(
            (CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.WhitePhantom))
                && InArea(10000, areaEntityId));
    }
L0:
    SetCharacterHome(chrEntityId, areaEntityId2);
    RequestCharacterAICommand(chrEntityId, commandId, 0);
    RequestCharacterAIReplan(chrEntityId);
});

// Enemy has moved to designated point_XX
$Event(12805660, Restart, function(chrEntityId, areaEntityId) {
    if (!ThisEventSlot()) {
        WaitFor(InArea(chrEntityId, areaEntityId));
    }
L0:
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
});

// Enemy stops moving to designated point_XX
$Event(12805670, Restart, function(chrEntityId, commandId, eventFlagId, value, targetDistance) {
    EndIf(EventFlag(eventFlagId));
    if (value != 1) {
        chr |= CharacterAIState(chrEntityId, AIStateType.Recognition)
            || CharacterAIState(chrEntityId, AIStateType.Alert)
            || CharacterAIState(chrEntityId, AIStateType.Combat);
        chrArea &= chr;
    } else {
L0:
        chr |= CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom);
        chrArea &= chr && EntityInRadiusOfEntity(10000, chrEntityId, targetDistance);
    }
L1:
    flag = EventFlag(eventFlagId);
    WaitFor(chrArea || flag);
    EndIf(flag.Passed);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    chr2 = CharacterAIState(chrEntityId, AIStateType.Normal);
    flag2 = EventFlag(eventFlagId);
    WaitFor(chr2 || flag2);
    EndIf(flag2.Passed);
    RequestCharacterAICommand(chrEntityId, commandId, 0);
    RequestCharacterAIReplan(chrEntityId);
    RestartEvent();
});

// enemy logic ON_XX
$Event(12805680, Restart, function(chrEntityId, areaEntityId, targetDistance) {
    EndIf(ThisEventSlot());
    SetCharacterAIState(chrEntityId, Disabled);
    WaitFor(
        ((CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && (InArea(10000, areaEntityId)
                || EntityInRadiusOfEntity(10000, chrEntityId, targetDistance)))
            || HasDamageType(chrEntityId, -1, DamageType.Unspecified));
    SetCharacterAIState(chrEntityId, Enabled);
});

// widow out of control_XX
$Event(12805700, Restart, function(chrEntityId, chrEntityId2, value, chrEntityId3) {
    if (ThisEventSlot()) {
        SetSpEffect(chrEntityId2, 4672, false);
        ClearSpEffect(chrEntityId2, 4671);
    }
L0:
    if (value != 1) {
        WaitFor(CharacterDead(chrEntityId));
        WaitRandomTimeSeconds(0, 1);
        SetSpEffect(chrEntityId2, 4672, false);
        ClearSpEffect(chrEntityId2, 4671);
        WaitFixedTimeFrames(1);
        ForceAnimationPlayback(chrEntityId2, 7025, false, true, false);
    } else {
L1:
        WaitFor(CharacterDead(chrEntityId) && CharacterDead(chrEntityId3));
        WaitRandomTimeSeconds(0, 1);
        SetSpEffect(chrEntityId2, 4672, false);
        ClearSpEffect(chrEntityId2, 4671);
        WaitFixedTimeFrames(1);
        ForceAnimationPlayback(chrEntityId2, 7025, false, true, false);
    }
L2:
    WaitFor(CharacterDead(chrEntityId2));
    WaitFor(!CharacterDead(chrEntityId2));
    RestartEvent();
});

// Weaken Mimic_XX
$Event(12805900, Restart, function(chrEntityId) {
    WaitFor(CharacterHasSpEffect(chrEntityId, 5510));
    WaitFixedTimeFrames(1);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 7010, false, false, false);
    SetSpEffect(chrEntityId, 5511, false);
    WaitFixedTimeSeconds(1.9);
    RequestCharacterAIReplan(chrEntityId);
});

// Mimic Killer_Bullet Owner
$Event(12805918, Restart, function() {
    SetCharacterTeamType(2800560, TeamType.StrongEnemy);
    CreateBulletOwner(2800560);
});

// Mimic Slayer_XX
$Event(12805920, Restart, function(objEntityId, eventFlagId) {
    if (EventFlag(eventFlagId)) {
        DeleteObjectfollowingSFX(objEntityId, true);
        EndEvent();
    }
L0:
    if (!ThisEventSlot()) {
        CreateObjectfollowingSFX(objEntityId, 100, 928020);
    }
    ShootBullet(2800560, objEntityId, 100, 6032, 0, 0, 0);
    WaitFixedTimeSeconds(2);
    RestartEvent();
});

// Mimic Kill_Use count
$Event(12805930, Restart, function(baseEventFlagId, eventFlagId, entityId) {
    EndIf(EventFlag(eventFlagId));
    WaitFor(
        (CharacterHasSpEffect(10000, 5510)
            || CharacterHasSpEffect(2800562, 5510)
            || CharacterHasSpEffect(2800563, 5510)
            || CharacterHasSpEffect(2800564, 5510)
            || CharacterHasSpEffect(2800566, 5510)
            || CharacterHasSpEffect(2800567, 5510)
            || CharacterHasSpEffect(2800569, 5510)
            || CharacterHasSpEffect(2800570, 5510)
            || CharacterHasSpEffect(2800571, 5510)
            || CharacterHasSpEffect(2800572, 5510)
            || CharacterHasSpEffect(2800573, 5510))
            && (EntityInRadiusOfEntity(10000, entityId, 2)
                || EntityInRadiusOfEntity(2800562, entityId, 2)
                || EntityInRadiusOfEntity(2800563, entityId, 2)
                || EntityInRadiusOfEntity(2800564, entityId, 2)
                || EntityInRadiusOfEntity(2800566, entityId, 2)
                || EntityInRadiusOfEntity(2800567, entityId, 2)
                || EntityInRadiusOfEntity(2800569, entityId, 2)
                || EntityInRadiusOfEntity(2800570, entityId, 2)
                || EntityInRadiusOfEntity(2800571, entityId, 2)
                || EntityInRadiusOfEntity(2800572, entityId, 2)
                || EntityInRadiusOfEntity(2800573, entityId, 2)));
    IncrementEventValue(baseEventFlagId, 2, 3);
    if (EventValue(baseEventFlagId, 2) == 3) {
        SetEventFlag(eventFlagId, ON);
    }
    WaitFixedTimeFrames(1);
    RestartEvent();
});

// Enemy Corpse Fadeout_XX
$Event(12804000, Restart, function(chrEntityId) {
    SetNetworkSyncState(Disabled);
    if (!ThisEventSlot()) {
        ClearSpEffect(chrEntityId, 4673);
    }
L0:
    WaitFor(CharacterDead(chrEntityId));
    WaitFixedTimeSeconds(1);
    SetSpEffect(chrEntityId, 5560, false);
    WaitFor(!CharacterDead(chrEntityId));
    SetSpEffect(chrEntityId, 5025, false);
    RestartEvent();
});

// treasure chest_XX
$Event(12800100, Default, function(objEntityId, objactEventFlag) {
    if (ThisEventSlot()) {
        ReproduceObjectAnimation(objEntityId, 0);
        SetObjactState(objEntityId, -1, Disabled);
        SetObjectTreasureState(objEntityId, Enabled);
        EndEvent();
    }
    WaitFor(ObjActEventFlag(objactEventFlag));
    WaitFixedTimeFrames(10);
    SetObjectTreasureState(objEntityId, Enabled);
});

// Piece of Paper_Sacrifice City_XX
$Event(12800120, Default, function(areaEntityId, actionButtonParameterId, messageId) {
    SetNetworkSyncState(Disabled);
    WaitFor(ActionButtonInArea(actionButtonParameterId, areaEntityId));
    DisplayGenericDialog(messageId, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
    RestartEvent();
});

// post warp processing from college
$Event(12800140, Default, function() {
    EndIf(ThisEvent());
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(EventFlag(13201803) && ElapsedFrames(55));
    SetEventFlag(13207850, ON);
    DisplayGenericDialog(10012014, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
});

// No first time sacrifice multiplayer
$Event(12800160, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(!EventFlag(9802) && PlayerInMap(28, 0));
    SetSpEffect(10000, 9120, false);
    SetSpEffect(10000, 9121, false);
    WaitFor(!(!EventFlag(9802) && PlayerInMap(28, 0)));
    ClearSpEffect(10000, 9120);
    ClearSpEffect(10000, 9121);
    RestartEvent();
});

// Time Zone Change_Sacrifice City
$Event(12800400, Restart, function() {
    if (EventFlag(12100856)) {
        BatchSetEventFlags(12805000, 12805002, OFF);
        RandomlySetEventFlagInRange(12805000, 12805002, ON);
        WaitFixedTimeFrames(1);
    }
    SetEventFlag(2800, ON);
    if (!EventFlag(9802)) {
        if (!EventFlag(9801)) {
            if (!EventFlag(9800)) {
            }
L0:
            if (EventFlag(12100956) || EventFlag(12805000)) {
                ActivateMapPart(2804000, Enabled);
                ActivateMapPart(2804001, Disabled);
                ActivateMapPart(2804002, Disabled);
                DeactivateObject(2801000, Disabled);
                DeleteMapSFX(2803910, false);
                DeleteMapSFX(2803911, false);
            } else if (EventFlag(12805001)) {
                ActivateMapPart(2804000, Disabled);
                ActivateMapPart(2804001, Enabled);
                ActivateMapPart(2804002, Disabled);
                DeleteMapSFX(2803911, false);
            } else {
                ActivateMapPart(2804000, Disabled);
                ActivateMapPart(2804001, Disabled);
                ActivateMapPart(2804002, Enabled);
                DeactivateObject(2801000, Enabled);
                DeleteMapSFX(2803910, false);
            }
        } else {
            //DeactivateObject(2801052, Enabled);
            //DeactivateObject(2801952, Disabled);
L1:
            if (EventFlag(12100956) || EventFlag(12805001)) {
                ActivateMapPart(2804000, Disabled);
                ActivateMapPart(2804001, Enabled);
                ActivateMapPart(2804002, Disabled);
                DeleteMapSFX(2803911, false);
            } else if (EventFlag(12805000)) {
                ActivateMapPart(2804000, Enabled);
                ActivateMapPart(2804001, Disabled);
                ActivateMapPart(2804002, Disabled);
                DeactivateObject(2801000, Disabled);
                DeleteMapSFX(2803910, false);
                DeleteMapSFX(2803911, false);
            } else {
                ActivateMapPart(2804000, Disabled);
                ActivateMapPart(2804001, Disabled);
                ActivateMapPart(2804002, Enabled);
                DeactivateObject(2801000, Enabled);
                DeleteMapSFX(2803910, false);
            }
        }
        //DeactivateObject(2801052, Enabled);
        //DeactivateObject(2801952, Disabled);
L4:
        DeactivateObject(2801000, Disabled);
        DeactivateObject(2801052, Disabled);
        DeactivateObject(2801140, Disabled);
        DeactivateObject(2801141, Disabled);
        DeactivateObject(2801142, Disabled);
        DeactivateObject(2801143, Disabled);
        DeactivateObject(2801144, Disabled);
        DeactivateObject(2801145, Disabled);
        DeactivateObject(2801600, Disabled);
        DeactivateObject(2801601, Disabled);
        DeactivateObject(2801602, Disabled);
        DeactivateObject(2801603, Disabled);
        ChangeCharacterEnableState(2800740, Disabled);
        ChangeCharacterEnableState(2800741, Disabled);
        ChangeCharacterEnableState(2800742, Disabled);
        ChangeCharacterEnableState(2800743, Disabled);
        ChangeCharacterEnableState(2800744, Disabled);
        SetCharacterBackreadState(2800700, true);
        SetCharacterBackreadState(2800701, true);
        SetCharacterBackreadState(2800702, true);
        SetCharacterBackreadState(2800500, true);
        SetCharacterBackreadState(2800501, true);
        SetCharacterBackreadState(2800502, true);
        SetCharacterBackreadState(2800503, true);
        SetCharacterBackreadState(2800504, true);
        SetCharacterBackreadState(2800505, true);
        SetCharacterBackreadState(2800480, true);
        SetCharacterBackreadState(2800481, true);
        SetCharacterBackreadState(2800482, true);
        SetCharacterBackreadState(2800483, true);
        SetCharacterBackreadState(2800400, true);
        SetCharacterBackreadState(2800401, true);
        SetCharacterBackreadState(2800402, true);
        SetCharacterBackreadState(2800403, true);
        SetCharacterBackreadState(2800404, true);
        SetCharacterBackreadState(2800405, true);
        SetCharacterBackreadState(2800406, true);
        SetCharacterBackreadState(2800407, true);
        SetCharacterBackreadState(2800408, true);
        SetCharacterBackreadState(2800410, true);
        SetCharacterBackreadState(2800411, true);
        SetCharacterBackreadState(2800460, true);
        SetCharacterBackreadState(2800461, true);
        SetCharacterBackreadState(2800462, true);
        SetCharacterBackreadState(2800300, true);
        SetCharacterBackreadState(2800301, true);
        SetCharacterBackreadState(2800302, true);
        SetCharacterBackreadState(2800303, true);
        SetCharacterBackreadState(2800304, true);
        SetCharacterBackreadState(2800305, true);
        SetCharacterBackreadState(2800306, true);
        SetCharacterBackreadState(2800307, true);
        SetCharacterBackreadState(2800308, true);
        SetCharacterBackreadState(2800309, true);
        SetCharacterBackreadState(2800310, true);
        SetCharacterBackreadState(2800311, true);
        SetCharacterBackreadState(2800312, true);
        SetCharacterBackreadState(2800313, true);
        SetCharacterBackreadState(2800314, true);
        SetCharacterBackreadState(2800315, true);
        SetCharacterBackreadState(2800316, true);
        SetCharacterBackreadState(2800317, true);
        SetCharacterBackreadState(2800318, true);
        SetCharacterBackreadState(2800319, true);
        SetCharacterBackreadState(2800320, true);
        SetCharacterBackreadState(2800321, true);
        SetCharacterBackreadState(2800322, true);
        SetCharacterBackreadState(2800323, true);
        SetCharacterBackreadState(2800324, true);
        SetCharacterBackreadState(2800325, true);
        SetCharacterBackreadState(2800326, true);
        SetCharacterBackreadState(2800327, true);
        SetCharacterBackreadState(2800328, true);
        SetCharacterBackreadState(2800329, true);
        SetCharacterBackreadState(2800380, true);
        SetCharacterBackreadState(2800382, true);
        SetCharacterBackreadState(2800383, true);
        SetCharacterBackreadState(2800384, true);
        SetCharacterBackreadState(2800560, true);
        SetCharacterBackreadState(2800562, true);
        SetCharacterBackreadState(2800563, true);
        SetCharacterBackreadState(2800564, true);
        SetCharacterBackreadState(2800566, true);
        SetCharacterBackreadState(2800567, true);
        SetCharacterBackreadState(2800569, true);
        SetCharacterBackreadState(2800570, true);
        SetCharacterBackreadState(2800571, true);
        SetCharacterBackreadState(2800572, true);
        SetCharacterBackreadState(2800573, true);
        SetCharacterBackreadState(2800540, true);
        SetCharacterBackreadState(2800541, true);
        SetCharacterBackreadState(2800542, true);
        SetCharacterBackreadState(2800543, true);
        SetCharacterBackreadState(2800544, true);
        SetCharacterBackreadState(2800721, true);
        SetCharacterBackreadState(2800722, true);
    } else {
L2:
        if (EventFlag(12801800)) {
            SetEventFlag(2800, ON);
        } else {
            SetEventFlag(2800, OFF);
        }
        if (EventFlag(12100956) || EventFlag(12805002)) {
            ActivateMapPart(2804000, Disabled);
            ActivateMapPart(2804001, Disabled);
            ActivateMapPart(2804002, Enabled);
            DeactivateObject(2801000, Enabled);
            DeleteMapSFX(2803910, false);
            DeactivateObject(2801052, Enabled);
            DeactivateObject(2801952, Disabled);
        } else {
            if (EventFlag(12805000)) {
                ActivateMapPart(2804000, Enabled);
                ActivateMapPart(2804001, Disabled);
                ActivateMapPart(2804002, Disabled);
                DeactivateObject(2801000, Disabled);
                DeleteMapSFX(2803910, false);
                DeleteMapSFX(2803911, false);
            } else {
                ActivateMapPart(2804000, Disabled);
                ActivateMapPart(2804001, Enabled);
                ActivateMapPart(2804002, Disabled);
                DeleteMapSFX(2803911, false);
            }
            DeactivateObject(2801000, Disabled);
            DeactivateObject(2801052, Disabled);
            DeactivateObject(2801140, Disabled);
            DeactivateObject(2801141, Disabled);
            DeactivateObject(2801142, Disabled);
            DeactivateObject(2801143, Disabled);
            DeactivateObject(2801144, Disabled);
            DeactivateObject(2801145, Disabled);
            DeactivateObject(2801600, Disabled);
            DeactivateObject(2801601, Disabled);
            DeactivateObject(2801602, Disabled);
            DeactivateObject(2801603, Disabled);
        }
        if (EventFlag(12100968)) {
            DeactivateObject(2801052, Enabled);
            DeactivateObject(2801952, Disabled);
            ChangeCharacterEnableState(2800952, Disabled);
        } else {
            DeactivateObject(2801052, Disabled);
        }
        ChangeCharacterEnableState(2803952, Disabled);
        SetEventFlag(70002802, ON);
        SetObjectTreasureState(2801140, Enabled);
        SetObjectTreasureState(2801141, Enabled);
        SetObjectTreasureState(2801142, Enabled);
        SetObjectTreasureState(2801143, Enabled);
        SetObjectTreasureState(2801144, Enabled);
        SetObjectTreasureState(2801145, Enabled);
        SetCharacterBackreadState(2800140, true);
        SetCharacterBackreadState(2800141, true);
        SetCharacterBackreadState(2800142, true);
        SetCharacterBackreadState(2800143, true);
        SetCharacterBackreadState(2800144, true);
        SetCharacterBackreadState(2800145, true);
        SetCharacterBackreadState(2800160, true);
        SetCharacterBackreadState(2800161, true);
        SetCharacterBackreadState(2800162, true);
        SetCharacterBackreadState(2800163, true);
        SetCharacterBackreadState(2800104, true);
        SetCharacterBackreadState(2800105, true);
        SetCharacterBackreadState(2800106, true);
        SetCharacterBackreadState(2800107, true);
        SetCharacterBackreadState(2800108, true);
        SetCharacterBackreadState(2800109, true);
        SetCharacterBackreadState(2800180, true);
        SetCharacterBackreadState(2800181, true);
        SetCharacterBackreadState(2800182, true);
        SetCharacterBackreadState(2800183, true);
        SetCharacterBackreadState(2800184, true);
        SetCharacterBackreadState(2800185, true);
        SetCharacterBackreadState(2800186, true);
        SetCharacterBackreadState(2800187, true);
        SetCharacterBackreadState(2800188, true);
        SetCharacterBackreadState(2800189, true);
        SetCharacterBackreadState(2800190, true);
        SetCharacterBackreadState(2800191, true);
        SetCharacterBackreadState(2800200, true);
        SetCharacterBackreadState(2800201, true);
        SetCharacterBackreadState(2800720, true);
        SetCharacterBackreadState(2800723, true);
    }
L3:
    GotoIf(S0, !(EventFlag(12102036) && EventFlag(12100856)));
    Goto(L4);
S0:
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
$Event(12800401, Default, function() {
    if (!(EventFlag(9802) || PlayerInsightAmount() >= 40)) {
        ChangeCharacterDispmask(2800745, 0, OFF);
        ChangeCharacterDispmask(2800745, 2, OFF);
        ChangeCharacterDispmask(2800745, 10, OFF);
        SetSpEffect(2800745, 5686, false);
        SetEventFlag(12800435, ON);
        EndEvent();
    }
L0:
    ChangeCharacterDispmask(2800745, 0, ON);
    ChangeCharacterDispmask(2800745, 2, ON);
    ChangeCharacterDispmask(2800745, 10, ON);
    SetEventFlag(12800435, OFF);
});

// Time Zone Change_Lower Large Door
$Event(12800402, Restart, function() {
    if (EventFlag(9802) || EventFlag(12809802)) {
        ReproduceObjectAnimation(2801300, 1);
        NotifySoundDampeningOfDoorEvent(2801300, DoorState.DoorOpening);
        EndEvent();
    }
L0:
    SetNetworkSyncState(Disabled);
    WaitFor(ActionButtonInArea(2800000, 2801300));
    DisplayGenericDialog(10010171, PromptType.OKCANCEL, NumberofOptions.OneButton, 2801300, 3);
    RestartEvent();
});

// Change of Time Zone_Great Door to the City of Sacrifice
$Event(12800403, Default, function() {
    if (EventFlag(9802)) {
        ReproduceObjectAnimation(2801150, 1);
        NotifySoundDampeningOfDoorEvent(2801150, DoorState.DoorOpening);
        EndEvent();
    }
L0:
    SetNetworkSyncState(Disabled);
    WaitFor(ActionButtonInArea(2800001, 2801150));
    DisplayGenericDialog(10010171, PromptType.OKCANCEL, NumberofOptions.OneButton, 2801150, 3);
    RestartEvent();
});

// Warp to Nightmare Classroom_00_Narijago
$Event(12800430, Default, function() {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(ActionButtonInArea(2800020, 2801500));
    IssueShortWarpRequest(10000, TargetEntityType.Object, 2801500, 220);
    ForceAnimationPlayback(10000, 101169, false, false, false);
    WaitFixedTimeFrames(180);
    WarpPlayerToRespawnPoint(3202959);
});

// Warp to Nightmare Classroom_01_Evil God Throw
$Event(12800431, Default, function() {
    WaitFor(CharacterHasEventMessage(2800745, 10) && PlayerHasItem(ItemType.Goods, 4310));
    SetCharacterImmortality(10000, Enabled);
    WaitFixedTimeFrames(30);
    SetEventFlag(9180, ON);
    WaitFixedTimeFrames(1);
    if (!HasMultiplayerState(MultiplayerState.Multiplayer)) {
        if (!PlayerGender(Gender.Female)) {
            PlayCutsceneToPlayer(28000040, CutscenePlayMode.Skippable, 10000);
        } else {
            PlayCutsceneToPlayer(28001040, CutscenePlayMode.Skippable, 10000);
        }
    } else {
L0:
        if (!PlayerGender(Gender.Female)) {
            PlayCutsceneToPlayer(28000040, CutscenePlayMode.Unskippable, 10000);
        } else {
            PlayCutsceneToPlayer(28001040, CutscenePlayMode.Unskippable, 10000);
        }
    }
L1:
    WaitFixedTimeFrames(1);
    SetEventFlag(9180, OFF);
    SetEventFlag(12800434, ON);
    WarpPlayerToRespawnPoint(3202958);
});

// Evil God's Invisibility is removed during Evil God Throw Warp
$Event(12800432, Restart, function() {
    WaitFor(EventFlag(12800435) && CharacterHasEventMessage(2800745, 20));
    ChangeCharacterDispmask(2800745, 0, ON);
    ChangeCharacterDispmask(2800745, 2, ON);
    ChangeCharacterDispmask(2800745, 10, ON);
    SetSpEffect(2800745, 5687, false);
    ClearSpEffect(2800745, 5686);
    WaitFor(CharacterHasEventMessage(2800745, 30));
    SetSpEffect(2800745, 5686, false);
    ClearSpEffect(2800745, 5687);
    RestartEvent();
});

// Evil God throw blackout
$Event(12800433, Restart, function(chrEntityId) {
    SetNetworkSyncState(Disabled);
    WaitFor(CharacterHasEventMessage(chrEntityId, 700) && CharacterHasSpEffect(10000, 5577));
    DisplayBanner(TextBannerType.StadiumLoss); // amygdala grab fade out
    RestartEvent();
});

// Sacrifice Street theme play
$Event(12800435, Default, function() {
    SetNetworkSyncState(Disabled);
    SetMapSoundState(2803600, Disabled);
    WaitFor(!EventFlag(9802) && PlayerInMap(28, 0) && !InArea(10000, 2802650));
    SetMapSoundState(2803600, Enabled);
    WaitFor(EventFlag(9802) || !PlayerInMap(28, 0) || InArea(10000, 2802650));
    SetMapSoundState(2803600, Disabled);
    RestartEvent();
});

// Sacrifice Town Theme Replay_Fade on Ruins Side
$Event(12800436, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(InArea(10000, 2802020) && !EventFlag(9802));
    SetMapSoundState(2803600, Disabled);
    WaitFor(InArea(10000, 2802021) && !EventFlag(9802));
    SetMapSoundState(2803600, Enabled);
    RestartEvent();
});

// Warp_XX
$Event(12800460, Default, function(areaEntityId, entityId, playlogName) {
    SetNetworkSyncState(Disabled);
    WaitFor(ActionButtonInArea(2800030, areaEntityId));
    CreatePlaylog(playlogName);
    ForceAnimationPlayback(10000, 101167, false, false, false);
    WaitFixedTimeFrames(150);
    DummyPlayCutsceneAndWarpPlayer(entityId, 28, 0);
    WaitFixedTimeFrames(1);
    ForceAnimationPlayback(10000, 101168, false, false, false);
    WaitFixedTimeFrames(120);
    RestartEvent();
});

// Evil God_Waiting animation playback_XX
$Event(12800470, Default, function(entityId, animationId) {
    ForceAnimationPlayback(entityId, animationId, true, false, false);
    WaitFor(EventFlag(0));
    WaitFixedTimeSeconds(10);
});

// open the door_XX
$Event(12800480, Default, function(objEntityId, objactEventFlag, animationId, objParameterId) {
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

// Msg_XX when inspecting the door
$Event(12800490, Default, function(actionButtonParameterId, areaEntityId, eventFlagId) {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(eventFlagId));
    act = ActionButtonInArea(actionButtonParameterId, areaEntityId);
    flag = EventFlag(eventFlagId);
    WaitFor(act || flag);
    if (!flag.Passed) {
        DisplayGenericDialog(10010161, PromptType.OKCANCEL, NumberofOptions.OneButton, areaEntityId, 3);
        RestartEvent();
    }
L0:
    NoOp();
});

// Wandering Madness_XX
$Event(12800500, Restart, function(chrEntityId, eventFlagId) {
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

// SC elevator initialization_sacrifice
// InitializeEvent(0, 12800600, 12804700, 12800610, 12800611, 12800612, 2801400, 2801401, 2801402);
$Event(12800600, Default, function(eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, objEntityId, objEntityId2, objEntityId3) {
    if (!EventFlag(eventFlagId4)) {
        SetEventFlag(eventFlagId2, OFF);
        SetEventFlag(eventFlagId3, OFF);
        ReproduceObjectAnimation(objEntityId, 3);
        SetObjactState(objEntityId2, 100, Disabled);
        SetObjactState(objEntityId3, 100, Disabled);
    } else {
L0:
        if (!EventFlag(eventFlagId2)) {
            SetEventFlag(eventFlagId3, OFF);
            ReproduceObjectAnimation(objEntityId, 3);
            SetObjactState(objEntityId2, 100, Enabled);
            SetObjactState(objEntityId3, 100, Disabled);
        } else {
L1:
            SetEventFlag(eventFlagId3, ON);
            ReproduceObjectAnimation(objEntityId, 13);
            SetObjactState(objEntityId2, 100, Disabled);
            SetObjactState(objEntityId3, 100, Enabled);
        }
    }
L2:
    EndEvent();
    SetEventFlag(eventFlagId, OFF);
});

// SC elevator host state management_sacrifice
// InitializeEvent(0, 12800601, 12804700, 12800610, 12800611, 12800612);
$Event(12800601, Default, function(eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4) {
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

// SC elevator going up_sacrifice
// InitializeEvent(0, 12800602, 12804700, 12800610, 12800611, 12800612, 2802102, 12800280);
$Event(12800602, Default, function(eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, areaEntityId, objactEventFlag) {
    if (EventFlag(eventFlagId) && EventFlag(eventFlagId2)) {
        ReproduceObjectAnimation(2801400, 12);
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
        ForceAnimationPlayback(2801400, 11, false, true, false);
        ForceAnimationPlayback(2801400, 12, false, true, false);
    }
L1:
    WaitFor(!AllPlayersInArea(2802101));
    ForceAnimationPlayback(2801400, 13, false, true, false);
    SetObjactState(2801401, 100, Disabled);
    SetObjactState(2801402, 100, Enabled);
    SetEventFlag(eventFlagId, OFF);
    RestartEvent();
});

// SC elevator goes down_sacrifice
// InitializeEvent(0, 12800604, 12804700, 12800610, 12800611, 12800612, 2802101, 12800281);
$Event(12800604, Default, function(eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, areaEntityId, objactEventFlag) {
    if (EventFlag(eventFlagId) && !EventFlag(eventFlagId2)) {
        ReproduceObjectAnimation(2801400, 2);
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
        ForceAnimationPlayback(2801400, 1, false, true, false);
        ForceAnimationPlayback(2801400, 2, false, true, false);
    }
L1:
    WaitFor(!AllPlayersInArea(2802102));
    ForceAnimationPlayback(2801400, 3, false, true, false);
    SetObjactState(2801401, 100, Enabled);
    SetObjactState(2801402, 100, Disabled);
    SetEventFlag(eventFlagId, OFF);
    RestartEvent();
});

// SC Elevator_Call Lever Inoperable_Sacrifice
// InitializeEvent(0, 12800606, 12804700, 12800610, 12800612, 2801401, 2801402);
$Event(12800606, Default, function(eventFlagId, eventFlagId2, eventFlagId3, areaEntityId, areaEntityId2) {
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

// SC elevator first start_sacrifice
// InitializeEvent(0, 12800607, 12800612, 2802100, 2801401, 2801402);
$Event(12800607, Default, function(eventFlagId, areaEntityId, objEntityId, objEntityId2) {
    EndIf(EventFlag(eventFlagId));
    WaitFor(InArea(10000, areaEntityId));
    SetObjactState(objEntityId, 100, Enabled);
    SetObjactState(objEntityId2, 100, Disabled);
    SetEventFlag(eventFlagId, ON);
});

// SC elevator_first visit
$Event(12800608, Default, function() {
    ReproduceObjectAnimation(2801400, 0);
    SetObjactState(2801401, 100, Disabled);
    SetObjactState(2801402, 100, Disabled);
    WaitFor(ActionButtonInArea(7100, 2801402));
    DisplayGenericDialog(10010172, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
    RestartEvent();
});

// Arrive near Log_Warp OBJ
$Event(12800620, Default, function(areaEntityId, playlogName) {
    WaitFor(InArea(10000, areaEntityId));
    CreatePlaylog(playlogName);
});

// NPC Death Reenactment_XX
$Event(12800700, Default, function(chrEntityId) {
    if (ThisEventSlot()) {
        SetCharacterBackreadState(chrEntityId, true);
        ForceCharacterTreasure(chrEntityId);
        ChangeCharacterEnableState(chrEntityId, Disabled);
        EndEvent();
    }
L0:
    WaitFor(CharacterDead(chrEntityId));
    WaitFixedTimeSeconds(0);
});

// Widow back leads
$Event(12800999, Restart, function() {
    ChangeCharacterEnableState(2800509, Disabled);
    SetCharacterDefaultBackreadState(2800509, Enabled);
});

// Boss Defeat_Evil God
$Event(12801800, Default, function() {
    if (ThisEvent()) {
        SetMapSoundState(2803802, Disabled);
        SetMapSoundState(2803803, Disabled);
        SetMapSoundState(2803804, Disabled);
        ChangeCharacterEnableState(2800800, Disabled);
        ChangeCharacterEnableState(2800801, Disabled);
        ChangeCharacterEnableState(2800802, Disabled);
        ChangeCharacterEnableState(2800803, Disabled);
        ForceCharacterDeath(2800800, false);
        ForceCharacterDeath(2800801, false);
        ForceCharacterDeath(2800802, false);
        ForceCharacterDeath(2800803, false);
        SetCharacterBackreadState(2800520, true);
        SetCharacterBackreadState(2800522, true);
        SetCharacterBackreadState(2800524, true);
        SetCharacterBackreadState(2800525, true);
        SetCharacterBackreadState(2800527, true);
        SetCharacterBackreadState(2800529, true);
        DeactivateObject(2801800, Disabled);
        DeactivateObject(2801801, Disabled);
        DeleteMapSFX(2803800, false);
        DeleteMapSFX(2803801, false);
        EndEvent();
    }
L0:
    WaitFor(HPRatio(2800803) <= 0);
    RequestCharacterAnimationReset(2800800, Interpolation.Uninterpolated);
    RequestCharacterAnimationReset(2800801, Interpolation.Uninterpolated);
    ForceCharacterDeath(2800800, false);
    ForceCharacterDeath(2800801, false);
    WaitFor(CharacterDead(2800800));
    ForceCharacterDeath(2800520, true);
    ForceCharacterDeath(2800522, true);
    ForceCharacterDeath(2800524, true);
    ForceCharacterDeath(2800525, true);
    ForceCharacterDeath(2800527, true);
    ForceCharacterDeath(2800529, true);
    DisplayBanner(TextBannerType.DemonKilled); // one reborn defeated
    DeactivateObject(2801800, Disabled);
    DeactivateObject(2801801, Disabled);
    DeleteMapSFX(2803800, true);
    DeleteMapSFX(2803801, true);
    SetLockcamSlotNumber(28, 0, 0);
    WaitFixedTimeSeconds(3);
    HandleBossDefeat(2800803);
    SetNetworkSyncState(Disabled);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        WaitFor(CharacterType(10000, TargetType.Alive));
        $InitializeEvent(0, 9350, 3);
        AwardAchievement(18);
        AwardItemLot(50700000);
        SetEventFlag(2800, ON);
        SetEventFlag(9464, ON);
        CreatePlaylog(186);
        EndTimeMeasurement(2800000);
        EndTimeMeasurement(2800001);
        EndTimeMeasurement(2800010);
        ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 198, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 198, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Weapon, 198, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Armor, 198, PlayLogMultiplayerType.HostOnly);
        if (EventFlag(one_reborn_defeat+13)) {
            AwardItemLot(17020);
            $InitializeEvent(one_reborn_offset, 7800, one_reborn_lamp_id+1000, 828000);
        }
        EndEvent();
    }
L1:
    WaitFor(CharacterType(10000, TargetType.WhitePhantom));
    WaitFixedTimeSeconds(0);
});

// Boss Defeat SE Replay _ Impossible Evil God
$Event(12801801, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12801800));
    flag = EventFlag(12801800);
    WaitFor(flag || (!CharacterBackreadStatus(2800800) && HPRatio(2800803) <= 0));
    EndIf(flag.Passed);
    PlaySE(2802800, SoundType.cCharacterMotion, 0);
});

// The host enters the boss room_First battle_Evil god of failure
$Event(12801802, Default, function() {
    EndIf(EventFlag(12801800));
    EndIf(ThisEvent());
    ChangeCharacterEnableState(2800800, Disabled);
    ChangeCharacterEnableState(2800801, Disabled);
    WaitFor(
        !EventFlag(12801800)
            && !ThisEventSlot()
            && CharacterType(10000, TargetType.Alive)
            && InArea(10000, 2802805));
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        IssueBossRoomEntryNotification(0);
    }
    SetEventFlag(12804223, ON);
    EndIf(CharacterType(10000, TargetType.BlackPhantom));
    SetEventFlag(9180, ON);
    WaitFixedTimeFrames(1);
    DeleteMapSFX(2803911, false);
    if (!EventFlag(one_reborn_defeat+13) || EventFlag(12100866)) {
        if (!HasMultiplayerState(MultiplayerState.Multiplayer)) {
            PlayCutsceneToPlayer(28000000, CutscenePlayMode.Skippable, 10000);
        } else {
            PlayCutsceneToPlayer(28000000, CutscenePlayMode.Unskippable, 10000);
        }
    }
    WaitFixedTimeFrames(1);
    SetEventFlag(9180, OFF);
    SpawnMapSFX(2803911);
    SetEventFlag(12804800, ON);
    ChangeCharacterEnableState(2800800, Enabled);
    ChangeCharacterEnableState(2800801, Enabled);
    EndIf(EventFlag(9305));
    $InitializeEvent(0, 9350, 1);
    SetEventFlag(9305, ON);
});

// Impossible Evil God _ Coping process for staggered entry guests
$Event(12801803, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EventFlag(12804800));
    EndIf(HasMultiplayerState(MultiplayerState.Host));
    ChangeCharacterEnableState(2800800, Enabled);
    ChangeCharacterEnableState(2800801, Enabled);
    SetEventFlag(12804800, ON);
    SetEventFlag(12801802, ON);
});

// The host enters the boss room_Rematch_The evil god of failure
$Event(12804880, Default, function() {
    EndIf(EventFlag(12801800));
    if (!EventFlag(12801802)) {
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            DeactivateObject(2801800, Disabled);
            DeleteMapSFX(2803800, false);
        }
        DeactivateObject(2801801, Disabled);
        DeleteMapSFX(2803801, false);
        WaitFor(!EventFlag(12801800) && EventFlag(12801802));
        DeactivateObject(2801800, Enabled);
        SpawnMapSFX(2803800);
        DeactivateObject(2801801, Enabled);
        SpawnMapSFX(2803801);
    }
L0:
    flagChrAct = !EventFlag(12801800)
        && CharacterType(10000, TargetType.Alive)
        && ActionButtonInArea(2800800, 2801800);
    flag = EventFlag(12801800);
    WaitFor(flagChrAct || flag);
    EndIf(flag.Passed);
    RotateCharacter(10000, 2802800, 101130, true);
    chrArea = CharacterType(10000, TargetType.Alive) && InArea(10000, 2802801);
    chr = CharacterType(10000, TargetType.Alive) && ElapsedSeconds(2);
    WaitFor(chrArea || chr);
    if (!chr.Passed) {
        SetEventFlag(12804800, ON);
    }
    RestartEvent();
});

// A guest enters the boss room_The unsuccessful evil god
$Event(12804881, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12801800));
    WaitFor(
        !EventFlag(12801800)
            && EventFlag(12801802)
            && EventFlag(12804800)
            && CharacterType(10000, TargetType.WhitePhantom)
            && ActionButtonInArea(2800800, 2801800));
    RotateCharacter(10000, 2802800, 101130, true);
    chrArea = CharacterType(10000, TargetType.WhitePhantom) && InArea(10000, 2802801);
    cond = ElapsedSeconds(2);
    WaitFor(chrArea || cond);
    if (!cond.Passed) {
        SetEventFlag(12804801, ON);
    }
    RestartEvent();
});

// Disabled per fog wall in the world of others_Evil god of failure
$Event(12804882, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EntityInRadiusOfEntity(10000, 2801800, 6));
    SetCharacterGravityMaphitStateExcludingOwnWorld(10000, Disabled);
    WaitFixedTimeFrames(6);
    RestartEvent();
});

// Disabled per fog wall in the world of others 2_Evil god of failure
$Event(12804883, Default, function() {
    WaitFor(
        CharacterType(10000, TargetType.Alive)
            && !EntityInRadiusOfEntity(10000, 2801800, 6)
            && EntityInRadiusOfEntity(10000, 2801800, 12));
    SetCharacterGravityMaphitStateExcludingOwnWorld(10000, Enabled);
    WaitFixedTimeFrames(6);
    RestartEvent();
});

// Boss begins to move_Evil god of failure
$Event(12804802, Default, function() {
    EndIf(EventFlag(12801800));
    SetCharacterAIState(2800800, Disabled);
    SetCharacterAIState(2800801, Disabled);
    SetCharacterAIState(2800802, Disabled);
    SetCharacterAIState(2800803, Disabled);
    SetCharacterAIState(2800520, Disabled);
    SetCharacterAIState(2800522, Disabled);
    SetCharacterAIState(2800524, Disabled);
    SetCharacterAIState(2800525, Disabled);
    SetCharacterAIState(2800527, Disabled);
    SetCharacterAIState(2800529, Disabled);
    SetCharacterHPBarDisplay(2800800, Disabled);
    SetCharacterHPBarDisplay(2800801, Disabled);
    SetCharacterHPBarDisplay(2800802, Disabled);
    SetCharacterHPBarDisplay(2800803, Disabled);
    SetCharacterGravity(2800801, Disabled);
    SetCharacterGravity(2800802, Disabled);
    SetCharacterGravity(2800803, Disabled);
    SetCharacterImmortality(2800800, Enabled);
    SetCharacterImmortality(2800801, Enabled);
    if (!ThisEvent()) {
        WaitFor(EventFlag(12804800) || EventFlag(one_reborn_defeat+13));
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            if (!EventFlag(12804223)) {
                IssueBossRoomEntryNotification(0);
            }
            SetNetworkUpdateAuthority(2800800, AuthorityLevel.Forced);
            SetNetworkUpdateAuthority(2800801, AuthorityLevel.Forced);
            SetNetworkUpdateAuthority(2800802, AuthorityLevel.Forced);
            SetNetworkUpdateAuthority(2800803, AuthorityLevel.Forced);
        }
    }
L0:
    SetEventFlag(12804223, ON);
    SetEventFlag(12804800, ON);
    GotoIf(L1, CountEventFlags(TargetEventFlagType.EventFlag, 8630, 8639) == 0);
    GotoIf(L2, CountEventFlags(TargetEventFlagType.EventFlag, 8630, 8639) == 1);
    GotoIf(L3, CountEventFlags(TargetEventFlagType.EventFlag, 8630, 8639) > 1);
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
    if (EventFlag(one_reborn_defeat+13)) {
        WaitFixedTimeSeconds(2);
    }
    SetCharacterAIState(2800800, Enabled);
    SetCharacterAIState(2800801, Enabled);
    SetCharacterAIState(2800802, Enabled);
    SetCharacterAIState(2800803, Enabled);
    SetCharacterAIState(2800520, Enabled);
    SetCharacterAIState(2800522, Enabled);
    SetCharacterAIState(2800524, Enabled);
    SetCharacterAIState(2800525, Enabled);
    SetCharacterAIState(2800527, Enabled);
    SetCharacterAIState(2800529, Enabled);
    DisplayBossHealthBar(Enabled, 2800803, 0, 507000);
    CreateReferredDamagePair(2800800, 2800803);
    CreateReferredDamagePair(2800801, 2800803);
    SetCharacterEventTarget(2800800, 2800803);
    SetCharacterEventTarget(2800801, 2800803);
    CreatePlaylog(238);
    StartTimeMeasurement(2800010, 254, Enabled);
});

// Boss BGM ON_Evil god of failure
$Event(12804803, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12801800));
    if (!ThisEvent()) {
        SetMapSoundState(2803802, Disabled);
        SetMapSoundState(2803803, Disabled);
        flagArea &= !EventFlag(12801800) && EventFlag(12804802);
        if (!HasMultiplayerState(MultiplayerState.Host)) {
            flagArea &= EventFlag(12804801);
        }
        flagArea &= InArea(10000, 2802802);
        WaitFor(flagArea);
        SetMapSoundState(2803804, Disabled);
        EnableBossMapSound(2803802, Enabled);
        chrFlagArea &= CharacterHasEventMessage(2800800, 300);
    }
L0:
    chrFlagArea &= !EventFlag(12801800) && EventFlag(12804802);
    if (!HasMultiplayerState(MultiplayerState.Host)) {
        chrFlagArea &= EventFlag(12804801);
    }
    chrFlagArea &= InArea(10000, 2802802);
    WaitFor(chrFlagArea);
    SetMapSoundState(2803804, Disabled);
    EnableBossMapSound(2803802, Disabled);
    WaitFixedTimeFrames(0);
    EnableBossMapSound(2803803, Enabled);
});

// Boss Camera_Evil god of failure
$Event(12804804, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12801800));
    WaitFor(HPRatio(2800803) > 0 && EntityInRadiusOfEntity(10000, 2800800, 12));
    SetLockcamSlotNumber(28, 0, 1);
    WaitFor(HPRatio(2800803) > 0 && !EntityInRadiusOfEntity(10000, 2800800, 12.5));
    SetLockcamSlotNumber(28, 0, 0);
    RestartEvent();
});

// Boss BGM OFF_Evil god of failure
$Event(12804805, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12801800));
    WaitFor(EventFlag(12801800));
    EnableBossMapSound(2803802, Disabled);
    EnableBossMapSound(2803803, Disabled);
    EnableBossMapSound(-1, Disabled);
});

// Boss_Upper person connection_Evil god of failure
$Event(12804806, Default, function() {
    EndIf(EventFlag(12801800));
    if (!ThisEventSlot()) {
        WaitFor(CharacterBackreadStatus(2800800));
        SetCharacterGravity(2800801, Disabled);
        WaitFixedTimeSeconds(1);
    }
L0:
    WarpCharacterAndSetFloor(2800801, TargetEntityType.Character, 2800800, 100, 2800801);
    RestartEvent();
});

// Boss _ Prohibition of damage to parts _ Impossible Evil God
$Event(12804807, Default, function() {
    EndIf(EventFlag(12801800));
    WaitFor(CharacterHasSpEffect(2800800, 489));
    SetEventFlag(12804808, ON);
    WaitFor(!CharacterHasSpEffect(2800800, 489));
    SetEventFlag(12804808, OFF);
    RestartEvent();
});

// Boss_partial damage_inferior evil god_XX
$Event(12804820, Default, function(npcPartId, npcPartId2, npcPartGroupIdx, npcPartHP, spEffectId, spEffectId2, animationId) {
    EndIf(EventFlag(12801800));
    CreateNPCPart(2800800, npcPartId, npcPartGroupIdx, npcPartHP, 1, 1, false, false);
    SetNPCPartSEAndSFX(2800800, npcPartId2, 59, 59);
    hp = NPCPartHP(2800800, npcPartId2) <= 0;
    hp2 = HPRatio(2800800) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    if (EventFlag(12804808)) {
        SetNPCPartHP(2800800, npcPartId2, 50, false);
        RestartEvent();
    }
    CreateNPCPart(2800800, npcPartId, npcPartGroupIdx, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(2800800, npcPartId2, 60, 60);
    RequestCharacterAnimationReset(2800800, Interpolation.Interpolated);
    RequestCharacterAnimationReset(2800801, Interpolation.Interpolated);
    ForceAnimationPlayback(2800800, animationId, false, false, false);
    ForceAnimationPlayback(2800801, 7000, false, false, false);
    SetSpEffect(2800800, spEffectId, true);
    ClearSpEffect(2800800, spEffectId2);
    if (!CharacterHasSpEffect(2800800, 489)) {
        RequestCharacterAIReplan(2800800);
    }
    WaitFixedTimeSeconds(30);
    if (!CharacterHasSpEffect(2800800, 489)) {
        RequestCharacterAIReplan(2800800);
    }
    WaitFor(CharacterHasEventMessage(2800800, 300));
    CreateNPCPart(2800800, npcPartId, npcPartGroupIdx, npcPartHP, 1, 1, false, false);
    SetNPCPartSEAndSFX(2800800, npcPartId2, 59, 59);
    SetSpEffect(2800800, spEffectId2, true);
    ClearSpEffect(2800800, spEffectId);
    if (!CharacterHasSpEffect(2800800, 489)) {
        RequestCharacterAIReplan(2800800);
    }
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Boss_Upper magic 1
$Event(12804830, Default, function() {
    EndIf(EventFlag(12801800));
    WaitFor(
        EventFlag(12804802)
            && CharacterTargetedBy(2800801, 10000)
            && CharacterHasEventMessage(2800801, 10));
    IssueShortWarpRequest(2800802, TargetEntityType.Character, 10000, 246);
    RequestCharacterAICommand(2800802, 200, 0);
    RequestCharacterAIReplan(2800802);
    WaitFixedTimeFrames(1);
    RequestCharacterAICommand(2800802, -1, 0);
    RequestCharacterAIReplan(2800802);
    RestartEvent();
});

// Boss_Upper magic 2
$Event(12804831, Default, function() {
    EndIf(EventFlag(12801800));
    WaitFor(
        EventFlag(12804802)
            && CharacterTargetedBy(2800801, 10000)
            && CharacterHasEventMessage(2800801, 20));
    IssueShortWarpRequest(2800802, TargetEntityType.Character, 2800800, 100);
    RequestCharacterAICommand(2800802, 210, 0);
    RequestCharacterAIReplan(2800802);
    WaitFixedTimeFrames(1);
    RequestCharacterAICommand(2800802, -1, 0);
    RequestCharacterAIReplan(2800802);
    RestartEvent();
});

// Boss_Upper magic 3
$Event(12804832, Default, function() {
    EndIf(EventFlag(12801800));
    WaitFor(
        EventFlag(12804802)
            && CharacterTargetedBy(2800801, 10000)
            && CharacterHasEventMessage(2800801, 30));
    SetSpEffect(2800800, 5585, false);
    WaitFor(ElapsedSeconds(1.1));
    ClearSpEffect(2800800, 5585);
    IssueShortWarpRequest(2800802, TargetEntityType.Character, 2800800, 10);
    RequestCharacterAICommand(2800802, 220, 0);
    RequestCharacterAIReplan(2800802);
    WaitFixedTimeFrames(1);
    RequestCharacterAICommand(2800802, -1, 0);
    RequestCharacterAIReplan(2800802);
    RestartEvent();
});

// Boss_Upper magic 4
$Event(12804834, Default, function() {
    EndIf(EventFlag(12801800));
    WaitFor(
        EventFlag(12804802)
            && CharacterTargetedBy(2800801, 10000)
            && CharacterHasEventMessage(2800801, 40));
    SetSpEffect(2800800, 5586, false);
    WaitFor(ElapsedSeconds(1.1));
    ClearSpEffect(2800800, 5586);
    IssueShortWarpRequest(2800802, TargetEntityType.Character, 2800800, 15);
    RequestCharacterAICommand(2800802, 220, 0);
    RequestCharacterAIReplan(2800802);
    WaitFixedTimeFrames(1);
    RequestCharacterAICommand(2800802, -1, 0);
    RequestCharacterAIReplan(2800802);
    RestartEvent();
});

// Boss_Upper magic 5
$Event(12804835, Default, function() {
    EndIf(EventFlag(12801800));
    WaitFor(
        EventFlag(12804802)
            && CharacterTargetedBy(2800801, 10000)
            && CharacterHasEventMessage(2800801, 50));
    SetSpEffect(2800800, 5587, false);
    WaitFor(ElapsedSeconds(1.1));
    ClearSpEffect(2800800, 5587);
    IssueShortWarpRequest(2800802, TargetEntityType.Character, 2800800, 50);
    RequestCharacterAICommand(2800802, 220, 0);
    RequestCharacterAIReplan(2800802);
    WaitFixedTimeFrames(1);
    RequestCharacterAICommand(2800802, -1, 0);
    RequestCharacterAIReplan(2800802);
    RestartEvent();
});

// Boss_Upper magic 6
$Event(12804836, Default, function() {
    EndIf(EventFlag(12801800));
    WaitFor(
        EventFlag(12804802)
            && CharacterTargetedBy(2800801, 10000)
            && CharacterHasEventMessage(2800801, 60));
    SetSpEffect(2800800, 5588, false);
    WaitFor(ElapsedSeconds(1.1));
    ClearSpEffect(2800800, 5588);
    IssueShortWarpRequest(2800802, TargetEntityType.Character, 2800800, 55);
    RequestCharacterAICommand(2800802, 220, 0);
    RequestCharacterAIReplan(2800802);
    WaitFixedTimeFrames(1);
    RequestCharacterAICommand(2800802, -1, 0);
    RequestCharacterAIReplan(2800802);
    RestartEvent();
});

// Boss_Great Magic 1
$Event(12804837, Default, function() {
    EndIf(EventFlag(12801800));
    WaitFor(
        EventFlag(12804802)
            && CharacterTargetedBy(2800801, 10000)
            && CharacterHasEventMessage(2800801, 100));
    IssueShortWarpRequest(2800802, TargetEntityType.Character, 10000, 246);
    WaitFixedTimeFrames(1);
    RequestCharacterAICommand(2800802, 100, 0);
    RequestCharacterAIReplan(2800802);
    WaitFixedTimeFrames(1);
    RequestCharacterAICommand(2800802, -1, 0);
    RequestCharacterAIReplan(2800802);
    WaitFixedTimeSeconds(0.8);
    IssueShortWarpRequest(2800802, TargetEntityType.Character, 10000, 246);
    WaitFixedTimeFrames(1);
    RequestCharacterAICommand(2800802, 100, 0);
    RequestCharacterAIReplan(2800802);
    WaitFixedTimeFrames(1);
    RequestCharacterAICommand(2800802, -1, 0);
    RequestCharacterAIReplan(2800802);
    WaitFixedTimeSeconds(1);
    IssueShortWarpRequest(2800802, TargetEntityType.Character, 10000, 246);
    WaitFixedTimeFrames(1);
    RequestCharacterAICommand(2800802, 100, 0);
    RequestCharacterAIReplan(2800802);
    WaitFixedTimeFrames(1);
    RequestCharacterAICommand(2800802, -1, 0);
    RequestCharacterAIReplan(2800802);
    WaitFixedTimeSeconds(1.2);
    IssueShortWarpRequest(2800802, TargetEntityType.Character, 10000, 246);
    WaitFixedTimeFrames(1);
    RequestCharacterAICommand(2800802, 100, 0);
    RequestCharacterAIReplan(2800802);
    WaitFixedTimeFrames(1);
    RequestCharacterAICommand(2800802, -1, 0);
    RequestCharacterAIReplan(2800802);
    WaitFixedTimeSeconds(1.4);
    IssueShortWarpRequest(2800802, TargetEntityType.Character, 10000, 246);
    WaitFixedTimeFrames(1);
    RequestCharacterAICommand(2800802, 100, 0);
    RequestCharacterAIReplan(2800802);
    WaitFixedTimeFrames(1);
    RequestCharacterAICommand(2800802, -1, 0);
    RequestCharacterAIReplan(2800802);
    WaitFixedTimeSeconds(1.6);
    RestartEvent();
});

// Boss_Great Magic 1 Synchronization
$Event(12804838, Restart, function() {
    EndIf(EventFlag(12801800));
    WaitFor(CharacterHasEventMessage(2800800, 100));
    ForceAnimationPlayback(2800801, 3000, false, false, false);
    RequestCharacterAICommand(2800801, 1, 1);
    RequestCharacterAIReplan(2800801);
    WaitFor(CharacterHasEventMessage(2800800, 300));
    if (!CharacterHasSpEffect(2800800, 489)) {
        RequestCharacterAIReplan(2800800);
    }
    WaitFixedTimeSeconds(10);
    RequestCharacterAICommand(2800801, -1, 1);
    RequestCharacterAIReplan(2800801);
    RestartEvent();
});

// Boss_Widow Surrounding (Support) Death_XX
$Event(12804840, Restart, function(chrEntityId) {
    EndIf(EventFlag(12801800));
    SetCharacterEventTarget(chrEntityId, 2800801);
    EndIf(ThisEventSlot());
    WaitFor(EventFlag(12804802) && CharacterDead(chrEntityId));
    ForceAnimationPlayback(2800801, 7010, false, false, false);
    RequestCharacterAICommand(2800800, 1, 2);
    RequestCharacterAICommand(2800801, 1, 2);
    if (!CharacterHasSpEffect(2800800, 489)) {
        RequestCharacterAIReplan(2800800);
    }
    RequestCharacterAIReplan(2800801);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(2800800, -1, 2);
    RequestCharacterAICommand(2800801, -1, 2);
    if (!CharacterHasSpEffect(2800800, 489)) {
        RequestCharacterAIReplan(2800800);
    }
    RequestCharacterAIReplan(2800801);
});

// boss_surrounding widow death count
$Event(12804850, Restart, function(chrEntityId) {
    EndIf(ThisEventSlot());
    WaitFor(EventFlag(12804802) && CharacterDead(chrEntityId));
    IncrementEventValue(12804860, 4, 10);
});

// Boss_heat up 00
$Event(12804870, Restart, function() {
    WaitFor(EventFlag(12804802) && HPRatio(2800803) < 1);
    if (!EventFlag(12804871)) {
        RequestCharacterAICommand(2800800, 1, 0);
        RequestCharacterAICommand(2800801, 1, 0);
    }
    RequestCharacterAICommand(2800520, 1, 0);
    RequestCharacterAICommand(2800522, 1, 0);
    RequestCharacterAICommand(2800524, 1, 0);
    RequestCharacterAICommand(2800525, 1, 0);
    RequestCharacterAICommand(2800527, 1, 0);
    RequestCharacterAICommand(2800529, 1, 0);
    if (!CharacterHasSpEffect(2800800, 489)) {
        RequestCharacterAIReplan(2800800);
    }
    RequestCharacterAIReplan(2800801);
    RequestCharacterAIReplan(2800520);
    RequestCharacterAIReplan(2800522);
    RequestCharacterAIReplan(2800524);
    RequestCharacterAIReplan(2800525);
    RequestCharacterAIReplan(2800527);
    RequestCharacterAIReplan(2800529);
});

// Boss_heat up 01
$Event(12804871, Restart, function() {
    WaitFor(EventFlag(12804802) && (HPRatio(2800803) < 0.5 || EventValue(12804860, 4) >= 3));
    RequestCharacterAICommand(2800800, 2, 0);
    RequestCharacterAICommand(2800801, 2, 0);
    RequestCharacterAICommand(2800800, 1, 1);
    if (!CharacterHasSpEffect(2800800, 489)) {
        RequestCharacterAIReplan(2800800);
    }
});

// Map First Entry_Play Log
$Event(12800990, Default, function() {
    EndIf(ThisEvent());
    WaitFor(PlayerStandingOnHit(2803500));
    ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 272, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 272, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.Weapon, 272, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.Armor, 272, PlayLogMultiplayerType.HostOnly);
});

// Imprisoned Nun_To Death
$Event(12800901, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    EndIf(EventFlag(1315));
    EndIf(EventFlag(1310));
    WaitFor(CharacterDead(2800670));
    BatchSetEventFlags(1300, 1319, OFF);
    SetEventFlag(1315, ON);
    SaveRequest(0);
});

// Imprisoned nuns_to open up
$Event(12800902, Default, function() {
    WaitFor(EventFlag(72800312));
    SetEventFlag(72800312, OFF);
    BatchSetEventFlags(1300, 1319, OFF);
    SetEventFlag(1301, ON);
    ForceAnimationPlayback(2800670, 103107, true, false, true);
    SaveRequest(0);
});

// Trapped Nun_Transit to Shelter state
$Event(12800903, Default, function() {
    WaitFor(EventFlag(72800314));
    SetEventFlag(72800314, OFF);
    BatchSetEventFlags(1300, 1319, OFF);
    SetEventFlag(1313, ON);
});

// Trapped Nun_In transit to infirmary
$Event(12800904, Default, function() {
    WaitFor(EventFlag(72800315));
    SetEventFlag(72800315, OFF);
    BatchSetEventFlags(1300, 1319, OFF);
    SetEventFlag(1314, ON);
});

// Trapped Nuns_Transferring to Cathedral District
$Event(12800905, Default, function() {
    WaitFor(EventFlag(72800316));
    SetEventFlag(72800316, OFF);
    BatchSetEventFlags(1300, 1319, OFF);
    SetEventFlag(1311, ON);
});

// Imprisoned Nun_Dialogue Range
$Event(12800906, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    SetEventFlag(72800310, OFF);
    WaitFor(InArea(10000, 2802450));
    SetEventFlag(72800310, ON);
    WaitFor(!InArea(10000, 2802450));
    RestartEvent();
});

// Captured Nun_Animation Control_Damage Taken
$Event(12800908, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(HasDamageType(2800670, -1, DamageType.Unspecified) && HPRatio(2800670) != 0);
    ForceAnimationPlayback(2800670, 103093, false, false, false);
    RestartEvent();
});

// Imprisoned Nun_Animation Control_Death
$Event(12800909, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(!EventFlag(1310) && HPRatio(2800670) == 0);
    ForceAnimationPlayback(2800670, 103094, false, false, false);
});

// Captive nun_animation control_back to standby animation
$Event(12800910, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(CharacterHasSpEffect(2800670, 151) && HPRatio(2800670) != 0);
    if (!EventFlag(1300)) {
        ForceAnimationPlayback(2800670, 103091, false, false, false);
    } else {
L0:
        ForceAnimationPlayback(2800670, 103092, false, false, false);
        Goto(L9);
    }
L9:
    WaitFixedTimeFrames(5);
    RestartEvent();
});

// Prisoned Nun_initialization
$Event(12800911, Default, function() {
    if (CharacterType(10000, TargetType.Alive)) {
        if (EventFlag(1313)) {
            BatchSetEventFlags(1300, 1319, OFF);
            SetEventFlag(1304, ON);
        }
L0:
        if (EventFlag(1314)) {
            BatchSetEventFlags(1300, 1319, OFF);
            SetEventFlag(1309, ON);
        }
L1:
        GotoIf(L2, !EventFlag(1311));
        GotoIf(L4, !EventFlag(72800317));
        GotoIf(L5, !EventFlag(72800318));
        BatchSetEventFlags(1300, 1319, OFF);
        SetEventFlag(1310, ON);
    } else {
L4:
        SetEventFlag(72800317, ON);
        Goto(L2);
L5:
        SetEventFlag(72800318, ON);
        Goto(L2);
    }
L2:
    if ((EventFlag(1300) || EventFlag(1301)) && EventFlag(9802)) {
        BatchSetEventFlags(1300, 1319, OFF);
        SetEventFlag(1316, ON);
        Goto(L3);
    }
L3:
    SetEventFlag(72800308, OFF);
L4:
    GotoIf(L0, EventFlag(1300));
    GotoIf(L1, EventFlag(1301));
    GotoIf(L1, EventFlag(1311));
    GotoIf(L2, EventFlag(1310));
    GotoIf(L3, EventFlag(1315));
    GotoIf(L1, EventFlag(1313));
    GotoIf(L1, EventFlag(1314));
    SetCharacterBackreadState(2800670, true);
    SetCharacterBackreadState(2800671, true);
    EndEvent();
L0:
    SetCharacterBackreadState(2800670, false);
    SetCharacterBackreadState(2800671, true);
    ForceAnimationPlayback(2800670, 103092, true, false, true);
    EndEvent();
L1:
    SetCharacterBackreadState(2800670, false);
    SetCharacterBackreadState(2800671, true);
    ForceAnimationPlayback(2800670, 103091, true, false, true);
    EndEvent();
L2:
    SetCharacterBackreadState(2800670, true);
    SetCharacterBackreadState(2800671, false);
    EzstateInstructionRequest(2800671, 6, 1);
    ForceCharacterTreasure(2800671);
    EndEvent();
L3:
    SetCharacterBackreadState(2800670, false);
    SetCharacterBackreadState(2800671, true);
    IssueShortWarpRequest(2800670, TargetEntityType.Area, 2802452, -1);
    EzstateInstructionRequest(2800670, 7, 1);
    WaitFixedTimeFrames(1);
    ForceCharacterTreasure(2800670);
    EndEvent();
});

//NPC general purpose_item appearance at death position_XX
$Event(12800920, Default, function(eventFlagId, eventFlagId2, eventFlagId3, objEntityId, itemLotId) {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    EndIf(ThisEventSlot());
    WaitFor(EventFlag(eventFlagId) || EventFlag(eventFlagId2) || EventFlag(eventFlagId3));
    CreateObjectfollowingSFX(objEntityId, 200, 900201);
    WaitFor(ActionButtonInArea(7500, objEntityId));
    ForceAnimationPlayback(10000, 101140, false, false, false);
    AwardItemLot(itemLotId);
    DeleteObjectfollowingSFX(objEntityId, true);
});

// City of Sacrifice_Summon New NPC_Aim for Boss Room_XX
$Event(12804450, Restart, function(chrEntityId, entityId, eventFlagId, eventFlagId2, eventFlagId3) {
    EndIf(ThisEventSlot());
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    SetEventPoint(chrEntityId, entityId, 1);
    WaitFor(EventFlag(eventFlagId) && !EventFlag(eventFlagId2) && EventFlag(eventFlagId3));
    RequestCharacterAICommand(chrEntityId, 990, 0);
    RequestCharacterAIReplan(chrEntityId);
});

// City of Sacrifice_New NPC Summoning_Summoning Judgment_Alliance Hunter: Kimono
$Event(12804400, Restart, function(eventFlagId, entityId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5) {
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
                && EventFlag(9802)
                && CharacterHasSpEffect(10000, 6142)
                && EventFlag(13501900)
                && !EventFlag(eventFlagId5)
                && HasMultiplayerState(MultiplayerState.Host));
    }
L0:
    SetEventFlag(eventFlagId, ON);
    SpawnMapSFX(entityId);
    itemFlagOnlineSp = EventFlag(13501900);
    WaitFor(
        HasMultiplayerState(MultiplayerState.Host)
            && !(PlayerHasItem(ItemType.Goods, 4312)
                && !EventFlag(eventFlagId2)
                && !EventFlag(eventFlagId3)
                && !EventFlag(eventFlagId4)
                && NumberOfClientsOfType(ClientType.Coop) < 2
                && EventFlag(9802)
                && CharacterHasSpEffect(10000, 6142)
                && !EventFlag(eventFlagId5)));
    SetEventFlag(eventFlagId, OFF);
    DeleteMapSFX(entityId, true);
    RestartEvent();
});

// Sacrificial Town_New NPC Summoning_Summoning Judgment_Yahaguru Equipment
$Event(12804401, Restart, function(eventFlagId, entityId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5) {
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
                && EventFlag(9802)
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
                && EventFlag(9802)
                && !EventFlag(eventFlagId5)));
    SetEventFlag(eventFlagId, OFF);
    DeleteMapSFX(entityId, true);
    RestartEvent();
});

// City of Sacrifice_New NPC Summon_Participate_XX
$Event(12804410, Restart, function(signType, entityId, areaEntityId, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, actionButtonParameterId) {
    if (EventFlag(12100889)) {
        WarpCharacterAndCopyFloor(entityId, TargetEntityType.Area, areaEntityId, -1, areaEntityId);
        ChangeCharacterEnableState(entityId, Disabled);
        WaitFor(!EventFlag(eventFlagId) && ActionButtonInArea(actionButtonParameterId, entityId));
        SetEventFlag(2800, OFF);
        ForceAnimationPlayback(10000, 100111, false, false, false);
        SetSpEffect(10000, 4682, false);
        SummonNPC(signType, entityId, areaEntityId, eventFlagId, eventFlagId2);
        ClearSpEffect(10000, 9005);
        ClearSpEffect(10000, 9025);
        WaitFixedTimeSeconds(5);
        DisplayMessage(100051, 0);
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

// City of Sacrifice_Summon New NPC_Enter Boss Room_XX
$Event(12804460, Restart, function(chrEntityId, areaEntityId, entityId, areaEntityId2, playAnimationId, eventFlagId, areaEntityId3) {
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
    SetCharacterEventTarget(chrEntityId, 2800800);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
});

// heal npcs
$Event(12804470, Default, function() {
    WaitFor(CharacterHasSpEffect(10000, 3010));
    SetSpEffect(2800910, 3012, false);
    SetSpEffect(2800911, 3012, false);
    WaitFixedTimeFrames(1);
    RestartEvent();
});
