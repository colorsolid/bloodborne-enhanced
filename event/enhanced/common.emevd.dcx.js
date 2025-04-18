// ==EMEVD==
// @docs    bb-common.emedf.json
// @compress    DCX_DFLT_10000_44_9
// @game    Bloodborne
// @string    ""
// @linked    []
// @version    3.4.2
// ==/EMEVD==

// constructor
$Event(0, Default, function() {
    //BatchSetEventFlags(15000000, 40000000, ON);
    //SetEventFlag(21, ON);
    SetEventFlag(12102065, OFF);
    InitializeEvent(0, 12102037, 0);
    
    // SetSpEffect(10000, 1330, false);
    
    //RemoveItemFromPlayer(ItemType.Goods, 4002, 1);
    
    InitializeEvent(0, 8410, 0); // rite of kindling failsafe
    InitializeEvent(0, 8411, 0); // remove right on deactivate
    //InitializeEvent(0, 8412, 0); // test
    
    SetEventFlag(1509, OFF);
    SetEventFlag(1510, OFF);
    SetEventFlag(12100761, OFF); // re-enable rest in the menu
    
    InitializeEvent(0, 12101000, 4110, 2100211, 2561);
    InitializeEvent(1, 12101000, 4111, 2100211, 3330);
    InitializeEvent(2, 12101000, 4112, 2100211, 3843);
    InitializeEvent(3, 12101000, 4113, 2100212, 3840);
    InitializeEvent(4, 12101000, 4114, 2100212, 3073);
    InitializeEvent(5, 12101000, 4115, 2100212, 2818);
    InitializeEvent(6, 12101000, 4116, 2100212, 3843);
    InitializeEvent(7, 12101000, 4117, 2100213, 3840);
    InitializeEvent(8, 12101000, 4118, 2100213, 3841);
    InitializeEvent(9, 12101000, 4119, 2100213, 3842);
    
    // boss defeated broken lamp menu flags
    InitializeEvent(0, 12102040, 0);
    InitializeEvent(0, 12102041, 0);
    InitializeEvent(0, 12102043, 0);
    
    // increase cycle
    InitializeEvent(0, 12102020, 0);
    InitializeEvent(0, 12102021, 0);

    // dark fog
    //SetEventFlag(12102031, ON);
    InitializeEvent(0, 12102032, 0);
    
    // unlock all lamps
    InitializeEvent(0, 12102200, 0);
    
    // unlock all shortcuts
    InitializeEvent(0, 12102210, 0);
    
    // spEffect test
    //InitializeEvent(0, 13100000, 0);
    
    // check if in Hunter's Dream for shop to update with badges
    InitializeEvent(0, 12100001, 0);
    InitializeEvent(0, 12100003, 0);
    
    InitializeEvent(0, 12100005, 0);
    
    // bulk acquisitions
    InitializeEvent(0, 12101300, 0);
    InitializeEvent(0, 12101301, 0);
    InitializeEvent(0, 12101302, 0);
    InitializeEvent(0, 12101303, 0);
    InitializeEvent(0, 12101310, 0);
    InitializeEvent(0, 12101320, 0);
    InitializeEvent(0, 12101330, 0);
    InitializeEvent(0, 12101331, 0);
    InitializeEvent(0, 12101332, 0);
    InitializeEvent(0, 12101333, 0);
    InitializeEvent(0, 12101334, 0);
    InitializeEvent(0, 12101340, 0);
    InitializeEvent(0, 12101360, 0);
    InitializeEvent(0, 12101361, 0);
    
    // beast and broccoli runes
    InitializeEvent(0, 12100770, 0);
    InitializeEvent(0, 12100769, 0);
    
    // lesser hunter's mark
    InitializeEvent(0, 12100768, 0);
    
    InitializeEvent(0, 12101010, 0);
    
    InitializeEvent(0, 8700, 0); // disable item refill after time limit
    
    // Settings initializers
    InitializeEvent(0, 8400, 0); // lamp
    InitializeEvent(0, 8401, 0); // lamp 2
    InitializeEvent(0, 8405, 0); // broken lamp
    InitializeEvent(0, 8406, 0); // misc
    
    if (EventFlag(12100850)) { // auto rematch enabled, rematch initiated from dream, and death respawn location is dream
        SetEventFlag(12100850, OFF);
        SetEventFlag(12100650, ON);
    }
    
    SetEventFlag(12100750, OFF);
    if (EventFlag(12100650)) { // initiated from the dream
        SetEventFlag(12100650, OFF);
        SetEventFlag(12100750, ON);
        if (EventFlag(12100963)) { // victory respawn location is set to dream
            SetPlayerRespawnPoint(2102969); // return to broken lamp
        }
    }
    
    // remove insight on auto rematch
    if (EventFlag(8950)) {
        SetEventFlag(8950, OFF);
        SetSpEffect(10000, 4682, false);
    }
    
    InitializeEvent(0, 12105060, 0);
    InitializeEvent(0, 12105064, 0);
    InitializeEvent(0, 12105070, 72100141, 6011, 20);
    InitializeEvent(1, 12105070, 72100142, 6012, 21);
    InitializeEvent(2, 12105070, 72100143, 6013, 22);
    InitializeEvent(3, 12105070, 72100144, 6014, 23);
    InitializeEvent(4, 12105070, 72100145, 6015, 24);
    InitializeEvent(5, 12105070, 72100146, 6016, 25);
    InitializeEvent(6, 12105070, 72100147, 6017, 26);
    InitializeEvent(7, 12105070, 72100148, 6018, 27);
    InitializeEvent(8, 12105070, 72100149, 6019, 28);
    InitializeEvent(9, 12105070, 72100150, 6020, 0);
    InitializeEvent(10, 12105070, 72100151, 6021, 0);
    InitializeEvent(11, 12105070, 72100152, 6022, 0);
    InitializeEvent(12, 12105070, 72100153, 6023, 0);
    InitializeEvent(13, 12105070, 72100154, 6024, 0);
    InitializeEvent(14, 12105070, 72100155, 6025, 0);
    
    InitializeEvent(0, 12105062, 0);
    
    InitializeEvent(0, 12105020, 0);
    InitializeEvent(0, 12105021, 0);
    InitializeEvent(0, 12105022, 0);
    InitializeEvent(0, 12105023, 0);
    InitializeEvent(0, 12105024, 0);
    
    SetEventFlag(72100420, OFF);
    SetEventFlag(72100421, OFF);
    SetEventFlag(72100422, OFF);
    SetEventFlag(72100423, OFF);
    SetEventFlag(72100424, OFF);
    SetEventFlag(72100425, OFF);
    SetEventFlag(72100426, OFF);
    
    InitializeEvent(0, 12100020, 4900, 6071, 1);
    InitializeEvent(1, 12100020, 4901, 6072, 1);
    InitializeEvent(2, 12100020, 4902, 6073, 1);
    InitializeEvent(3, 12100020, 4903, 6074, 0);
    InitializeEvent(4, 12100020, 4904, 6075, 0);
    InitializeEvent(5, 12100020, 4905, 6076, 0);
    InitializeEvent(6, 12100020, 4906, 6077, 0);
    InitializeEvent(7, 12100020, 4907, 6078, 0);
    InitializeEvent(8, 12100020, 4908, 6079, 0);
    InitializeEvent(9, 12100020, 4909, 6080, 0);
    InitializeEvent(10, 12100020, 4910, 6081, 0);
    InitializeEvent(11, 12100020, 4911, 6082, 0);
    InitializeEvent(12, 12100020, 4912, 6083, 0);
    InitializeEvent(13, 12100020, 4913, 6084, 0);
    InitializeEvent(14, 12100020, 4914, 6085, 0);
    
    SetEventFlag(7501, OFF);
    InitializeEvent(0, 9190, 0);
    InitializeEvent(0, 9191, 0);
    InitializeEvent(0, 9192, 0);
    InitializeEvent(0, 9193, 0);
    InitializeEvent(0, 9198, 0);
    InitializeEvent(0, 6788, 0);
    InitializeEvent(0, 6789, 0);
    InitializeEvent(0, 6809, 0);
    InitializeEvent(0, 6815, 0);
    InitializeEvent(0, 6816, 0);
    InitializeEvent(0, 9181, 0);
    InitializeEvent(0, 9182, 0);
    InitializeEvent(0, 9183, 0);
    InitializeEvent(0, 9186, 0);
    InitializeEvent(0, 6680, 0);
    InitializeEvent(0, 6681, 0);
    InitializeEvent(0, 6682, 0);
    InitializeEvent(0, 6683, 0);
    InitializeEvent(0, 6684, 0);
    InitializeEvent(0, 6685, 0);
    InitializeEvent(0, 6686, 0);
    InitializeEvent(0, 6687, 0);
    InitializeEvent(0, 6688, 0);
    InitializeEvent(0, 6689, 0);
    InitializeEvent(0, 6690, 0);
    InitializeEvent(0, 6691, 0);
    InitializeEvent(0, 6692, 0);
    InitializeEvent(0, 6693, 0);
    InitializeEvent(0, 6694, 0);
    InitializeEvent(0, 6695, 0);
    InitializeEvent(0, 6696, 0);
    InitializeEvent(0, 6697, 0);
    InitializeEvent(0, 5500, 23010000);
    InitializeEvent(1, 5500, 23020000);
    InitializeEvent(2, 5500, 24010000);
    InitializeEvent(3, 5500, 24020000);
    InitializeEvent(4, 5500, 30010000);
    InitializeEvent(5, 5500, 30020000);
    InitializeEvent(6, 5500, 32010000);
    InitializeEvent(7, 5500, 32020000);
    InitializeEvent(8, 5500, 26010000);
    InitializeEvent(9, 5500, 26020000);
    InitializeEvent(10, 5500, 27010000);
    InitializeEvent(11, 5500, 27020000);
    InitializeEvent(12, 5500, 31010000);
    InitializeEvent(13, 5500, 31020000);
    InitializeEvent(14, 5500, 28010000);
    InitializeEvent(15, 5500, 28020000);
    InitializeEvent(16, 5500, 29010000);
    InitializeEvent(17, 5500, 29020000);
    InitializeEvent(18, 5500, 25010000);
    InitializeEvent(19, 5500, 25020000);
    InitializeEvent(20, 5500, 38010000);
    InitializeEvent(21, 5500, 38020000);
    InitializeEvent(0, 9500, 3400, 100000);
    InitializeEvent(1, 9500, 3401, 100010);
    InitializeEvent(2, 9500, 3402, 100020);
    InitializeEvent(3, 9500, 3403, 100030);
    InitializeEvent(4, 9500, 3404, 100040);
    InitializeEvent(5, 9500, 3405, 100050);
    InitializeEvent(6, 9500, 3406, 100060);
    InitializeEvent(7, 9500, 3407, 100070);
    InitializeEvent(8, 9500, 3408, 100080);
    InitializeEvent(9, 9500, 3409, 100090);
    InitializeEvent(10, 9500, 3410, 100100);
    InitializeEvent(11, 9500, 3411, 100110);
    InitializeEvent(12, 9500, 3412, 100120);
    InitializeEvent(13, 9500, 3390, 100500);
    InitializeEvent(14, 9500, 3391, 100510);
    InitializeEvent(15, 9500, 3392, 100520);
    InitializeEvent(16, 9500, 3450, 101000);
    InitializeEvent(17, 9500, 3451, 101010);
    InitializeEvent(18, 9500, 3452, 101020);
    InitializeEvent(19, 9500, 3453, 101030);
    InitializeEvent(20, 9500, 3454, 101040);
    InitializeEvent(21, 9500, 3455, 101050);
    InitializeEvent(22, 9500, 3456, 101060);
    InitializeEvent(23, 9500, 3457, 101070);
    InitializeEvent(24, 9500, 3458, 101080);
    InitializeEvent(25, 9500, 3459, 101090);
    InitializeEvent(26, 9500, 3460, 101100);
    InitializeEvent(27, 9500, 3461, 101110);
    InitializeEvent(28, 9500, 3462, 101120);
    InitializeEvent(29, 9500, 3463, 101130);
    InitializeEvent(30, 9500, 3464, 101140);
    InitializeEvent(31, 9500, 3465, 101150);
    InitializeEvent(32, 9500, 3466, 101160);
    InitializeEvent(33, 9500, 3467, 101170);
    InitializeEvent(34, 9500, 3468, 101180);
    InitializeEvent(35, 9500, 3469, 101190);
    InitializeEvent(36, 9500, 3470, 101200);
    InitializeEvent(37, 9500, 3471, 101210);
    InitializeEvent(38, 9500, 3472, 101220);
    InitializeEvent(39, 9500, 3473, 101230);
    InitializeEvent(40, 9500, 3474, 101240);
    InitializeEvent(41, 9500, 3475, 101250);
    InitializeEvent(42, 9500, 3476, 101260);
    InitializeEvent(43, 9500, 3477, 101270);
    InitializeEvent(44, 9500, 3478, 101280);
    InitializeEvent(45, 9500, 3479, 101290);
    InitializeEvent(46, 9500, 3480, 101300);
    InitializeEvent(47, 9500, 3481, 101310);
    InitializeEvent(48, 9500, 3482, 101320);
    InitializeEvent(49, 9500, 3483, 101330);
    InitializeEvent(50, 9500, 3484, 101340);
    InitializeEvent(0, 9440, 9440, 10500);
    InitializeEvent(1, 9440, 9441, 11500);
    InitializeEvent(2, 9440, 9442, 12500);
    InitializeEvent(0, 9215, 0);
    InitializeEvent(0, 9421, 0);
    InitializeEvent(0, 9422, 0);
    InitializeEvent(0, 9400, 0);
    InitializeEvent(0, 9404, 0);
    InitializeEvent(2, 9040, 9042, 17000);
    InitializeEvent(5, 9040, 9045, 22000);
    InitializeEvent(6, 9040, 9046, 23000);
    InitializeEvent(7, 9040, 9047, 24000);
    InitializeEvent(8, 9040, 9048, 24010);
    InitializeEvent(9, 9040, 9049, 24020);
    InitializeEvent(10, 9040, 9050, 24030);
    InitializeEvent(11, 9040, 9051, 24040);
    InitializeEvent(12, 9040, 9052, 24050);
    InitializeEvent(14, 9040, 9054, 26000);
    InitializeEvent(15, 9040, 9055, 26010);
    InitializeEvent(16, 9040, 9056, 26020);
    InitializeEvent(17, 9040, 9057, 26030);
    InitializeEvent(18, 9040, 9058, 27000);
    InitializeEvent(19, 9040, 9059, 27010);
    InitializeEvent(20, 9040, 9060, 27020);
    InitializeEvent(21, 9040, 9061, 27030);
    InitializeEvent(22, 9040, 9062, 27040);
    InitializeEvent(23, 9040, 9063, 27050);
    InitializeEvent(24, 9040, 9064, 27060);
    InitializeEvent(26, 9040, 9066, 29000);
    InitializeEvent(27, 9040, 9067, 30000);
    InitializeEvent(29, 9040, 9069, 32000);
    InitializeEvent(31, 9040, 9071, 33000);
    InitializeEvent(32, 9040, 9072, 34000);
    InitializeEvent(33, 9040, 9073, 34010);
    InitializeEvent(34, 9040, 9074, 35000);
    InitializeEvent(35, 9040, 9075, 35010);
    InitializeEvent(36, 9040, 9076, 39000);
    InitializeEvent(37, 9040, 9077, 39010);
    InitializeEvent(0, 9100, 72410359, 24060);
    InitializeEvent(1, 9100, 72410310, 23000);
    InitializeEvent(2, 9100, 72400398, 32020);
    InitializeEvent(3, 9100, 72400489, 28000);
    InitializeEvent(4, 9100, 9043, 17010);
    InitializeEvent(0, 9910, 0);
    InitializeEvent(0, 9909, 0);
    InitializeEvent(0, 9905, 4685);
    InitializeEvent(1, 9905, 4686);
    InitializeEvent(2, 9905, 4687);
    InitializeEvent(3, 9905, 4688);
    if (!HasMultiplayerState(MultiplayerState.Host)) {
        SetSpEffect(10000, 9110, false);
    }
    InitializeEvent(0, 9030, 6100, 180010);
    InitializeEvent(1, 9030, 6110, 180000);
    InitializeEvent(2, 9030, 6120, 180020);
    InitializeEvent(0, 9035, 6142, 180040);
    if (PlayerHasItem(ItemType.Goods, 6302)) {
        SetEventFlag(70009200, ON);
    }
    if (PlayerHasItem(ItemType.Goods, 6312)) {
        SetEventFlag(70009210, ON);
    }
    if (PlayerHasItem(ItemType.Goods, 6502)) {
        SetEventFlag(70009220, ON);
    }
    if (PlayerHasItem(ItemType.Goods, 6522)) {
        SetEventFlag(70009230, ON);
    }
    if (PlayerHasItem(ItemType.Goods, 6532)) {
        SetEventFlag(70009240, ON);
    }
});

// pre-constructor
$Event(50, Default, function() {
    InitializeEvent(0, 6002, 0);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        if (EventFlag(12101800)) {
            SetEventFlag(9450, ON);
            SetEventFlag(3210, OFF);
        }
        if (EventFlag(12101850)) {
            SetEventFlag(9451, ON);
            SetEventFlag(3211, OFF);
        }
        if (EventFlag(12201800)) {
            SetEventFlag(9452, ON);
            SetEventFlag(5911, ON);
            SetEventFlag(3220, OFF);
        }
        if (EventFlag(12301800)) {
            SetEventFlag(9453, ON);
            SetEventFlag(3230, OFF);
        }
        if (EventFlag(12301700)) {
            SetEventFlag(9454, ON);
            SetEventFlag(3231, OFF);
        }
        if (EventFlag(12401800)) {
            SetEventFlag(9455, ON);
            SetEventFlag(3240, OFF);
        }
        if (EventFlag(12411700)) {
            SetEventFlag(9456, ON);
            SetEventFlag(3241, OFF);
        }
        if (EventFlag(12411800)) {
            SetEventFlag(9457, ON);
            SetEventFlag(5910, ON);
            SetEventFlag(3242, OFF);
        }
        if (EventFlag(12421700)) {
            SetEventFlag(9458, ON);
            SetEventFlag(3243, OFF);
        }
        if (EventFlag(12421800)) {
            SetEventFlag(9459, ON);
            SetEventFlag(3244, OFF);
        }
        if (EventFlag(12501800)) {
            SetEventFlag(9460, ON);
            SetEventFlag(3250, OFF);
        }
        if (EventFlag(12601850)) {
            SetEventFlag(9461, ON);
            SetEventFlag(3260, OFF);
            if (EventFlag(12607850)) {
                SetEventFlag(12601854, ON);
            }
        }
        if (EventFlag(12601800)) {
            SetEventFlag(9462, ON);
            SetEventFlag(3261, OFF);
        }
        if (EventFlag(12701800)) {
            SetEventFlag(9463, ON);
            SetEventFlag(3270, OFF);
        }
        if (EventFlag(12801800)) {
            SetEventFlag(9464, ON);
            SetEventFlag(3280, OFF);
        }
        if (EventFlag(13201800)) {
            SetEventFlag(9465, ON);
            SetEventFlag(3320, OFF);
        }
        if (EventFlag(13301800)) {
            SetEventFlag(9466, ON);
            SetEventFlag(3330, OFF);
        }
        if (EventFlag(12410810)) {
            SetEventFlag(5912, ON);
        }
        if (EventFlag(12300704)) {
            SetEventFlag(5914, ON);
        }
        if (EventFlag(12600029)) {
            SetEventFlag(5913, ON);
        }
        if (EventFlag(12700710)) {
            SetEventFlag(9467, ON);
        }
        if (EventFlag(12410322)) {
            SetEventFlag(12410330, ON);
        }
    }
L2:
    SetEventFlag(9180, OFF);
    InitializeEvent(19, 9360, 1324, 1324, 1324, 6001);
    InitializeEvent(20, 9360, 1342, 1346, 1350, 6001);
    InitializeEvent(22, 9360, 1368, 1368, 1368, 1376);
    InitializeEvent(25, 9360, 12300210, 12300210, 12300210, 6001);
    InitializeEvent(26, 9360, 12800700, 12800700, 12800700, 6001);
    InitializeEvent(27, 9360, 12800701, 12800701, 12800701, 6001);
    InitializeEvent(28, 9360, 12800702, 12800702, 12800702, 6001);
    InitializeEvent(30, 9360, 12410810, 12410810, 12410810, 6001);
    InitializeEvent(31, 9360, 12400654, 12400654, 12400654, 6001);
    InitializeEvent(32, 9360, 13300220, 13300220, 13300220, 6001);
    InitializeEvent(33, 9360, 13300221, 13300221, 13300221, 6001);
    InitializeEvent(34, 9360, 12400865, 12400865, 12400865, 6001);
    InitializeEvent(35, 9360, 12400866, 12400866, 12400866, 6001);
    InitializeEvent(36, 9360, 12600500, 12600500, 12600500, 6001);
    InitializeEvent(37, 9360, 13200500, 13200500, 13200500, 6001);
    InitializeEvent(0, 9480, 1710, 1711, 1712, 1713, 73600521);
    InitializeEvent(1, 9480, 1730, 1730, 1730, 1730, 6001);
    InitializeEvent(2, 9480, 1790, 1790, 1790, 1790, 6001);
    InitializeEvent(3, 9480, 13501900, 13501900, 13501900, 13501900, 6001);
    InitializeEvent(4, 9480, 12700909, 12700909, 12700909, 12700909, 6001);
    InitializeEvent(5, 9480, 13400970, 13400970, 13400970, 13400970, 6001);
    InitializeEvent(6, 9480, 13400971, 13400971, 13400971, 13400971, 6001);
    InitializeEvent(7, 9480, 13501901, 13501901, 13501901, 13501901, 6001);
    InitializeEvent(8, 9480, 13501902, 13501902, 13501902, 13501902, 6001);
    InitializeEvent(9, 9480, 13501903, 13501903, 13501903, 13501903, 6001);
    InitializeEvent(10, 9480, 13501904, 13501904, 13501904, 13501904, 6001);
    if (!EventFlag(999)) {
        if (!AnyBatchEventFlags(1000, 1019)) {
            SetEventFlag(1000, ON);
        }
        if (!AnyBatchEventFlags(1020, 1039)) {
            SetEventFlag(1020, ON);
        }
        if (!AnyBatchEventFlags(1040, 1059)) {
            SetEventFlag(1040, ON);
        }
        if (!AnyBatchEventFlags(1060, 1079)) {
            SetEventFlag(1060, ON);
        }
        if (!AnyBatchEventFlags(1080, 1099)) {
            SetEventFlag(1080, ON);
        }
        if (!AnyBatchEventFlags(1100, 1119)) {
            SetEventFlag(1100, ON);
        }
        if (!AnyBatchEventFlags(1120, 1139)) {
            SetEventFlag(1120, ON);
        }
        if (!AnyBatchEventFlags(1140, 1159)) {
            SetEventFlag(1140, ON);
        }
        if (!AnyBatchEventFlags(1160, 1179)) {
            SetEventFlag(1160, ON);
        }
        if (!AnyBatchEventFlags(1180, 1199)) {
            SetEventFlag(1180, ON);
        }
        if (!AnyBatchEventFlags(1200, 1219)) {
            SetEventFlag(1200, ON);
        }
        if (!AnyBatchEventFlags(1220, 1239)) {
            SetEventFlag(1220, ON);
        }
        if (!AnyBatchEventFlags(1240, 1259)) {
            SetEventFlag(1240, ON);
        }
        if (!AnyBatchEventFlags(1260, 1279)) {
            SetEventFlag(1260, ON);
        }
        if (!AnyBatchEventFlags(1280, 1289)) {
            SetEventFlag(1280, ON);
        }
        if (!AnyBatchEventFlags(1290, 1299)) {
            SetEventFlag(1290, ON);
        }
        if (!AnyBatchEventFlags(1300, 1319)) {
            SetEventFlag(1300, ON);
        }
        if (!AnyBatchEventFlags(1320, 1339)) {
            SetEventFlag(1320, ON);
        }
        if (!AnyBatchEventFlags(1340, 1359)) {
            SetEventFlag(1340, ON);
        }
        if (!AnyBatchEventFlags(1360, 1379)) {
            SetEventFlag(1360, ON);
        }
        if (!AnyBatchEventFlags(1380, 1399)) {
            SetEventFlag(1380, ON);
        }
        if (!AnyBatchEventFlags(1400, 1419)) {
            SetEventFlag(1400, ON);
        }
        if (!AnyBatchEventFlags(1420, 1439)) {
            SetEventFlag(1420, ON);
        }
        if (!AnyBatchEventFlags(1440, 1459)) {
            SetEventFlag(1440, ON);
        }
        SetEventFlag(999, ON);
    }
L0:
    InitializeEvent(0, 9700, 1020, 1039);
    InitializeEvent(0, 9701, 1020, 1039);
    InitializeEvent(0, 9702, 1020, 1039);
    InitializeEvent(0, 9703, 1020, 1039);
    InitializeEvent(0, 9710, 1000, 1019);
    InitializeEvent(0, 9720, 0);
    InitializeEvent(0, 9721, 0);
    InitializeEvent(0, 9722, 0);
    InitializeEvent(0, 9723, 0);
    InitializeEvent(0, 9755, 0);
    InitializeEvent(0, 9756, 0);
    InitializeEvent(0, 9770, 0);
    InitializeEvent(0, 9780, 0);
    InitializeEvent(0, 9781, 0);
    InitializeEvent(0, 9782, 0);
    InitializeEvent(0, 3500, 4900, 6900, 6071, 6011);
    InitializeEvent(1, 3500, 4901, 6901, 6072, 6012);
    InitializeEvent(2, 3500, 4902, 6902, 6073, 6013);
    
    InitializeEvent(0, 3503, 0);
    if (EventFlag(6604)) {
        RemoveItemFromPlayer(ItemType.Goods, 4000, 1);
        RemoveItemFromPlayer(ItemType.Goods, 4001, 1);
        RemoveItemFromPlayer(ItemType.Goods, 4002, 1);
        RemoveItemFromPlayer(ItemType.Goods, 4003, 1);
        RemoveItemFromPlayer(ItemType.Goods, 4006, 1);
        RemoveItemFromPlayer(ItemType.Goods, 4009, 1);
        RemoveItemFromPlayer(ItemType.Goods, 4010, 1);
        RemoveItemFromPlayer(ItemType.Goods, 4011, 1);
        RemoveItemFromPlayer(ItemType.Goods, 4012, 1);
        RemoveItemFromPlayer(ItemType.Goods, 4013, 1);
        RemoveItemFromPlayer(ItemType.Goods, 4300, 1);
        RemoveItemFromPlayer(ItemType.Goods, 4305, 1);
        RemoveItemFromPlayer(ItemType.Goods, 4308, 1);
        RemoveItemFromPlayer(ItemType.Goods, 4310, 1);
        RemoveItemFromPlayer(ItemType.Goods, 4320, 1);
        RemoveItemFromPlayer(ItemType.Goods, 4321, 1);
        RemoveItemFromPlayer(ItemType.Goods, 4322, 1);
        RemoveItemFromPlayer(ItemType.Goods, 4323, 1);
        RemoveItemFromPlayer(ItemType.Goods, 4900, 1);
        RemoveItemFromPlayer(ItemType.Goods, 4901, 1);
        RemoveItemFromPlayer(ItemType.Goods, 4902, 1);
        RemoveItemFromPlayer(ItemType.Goods, 4903, 1);
        RemoveItemFromPlayer(ItemType.Goods, 4904, 1);
        RemoveItemFromPlayer(ItemType.Goods, 4905, 1);
        RemoveItemFromPlayer(ItemType.Goods, 4906, 1);
        RemoveItemFromPlayer(ItemType.Goods, 4907, 1);
        RemoveItemFromPlayer(ItemType.Goods, 4908, 1);
        RemoveItemFromPlayer(ItemType.Goods, 4014, 1);
        RemoveItemFromPlayer(ItemType.Goods, 4015, 1);
        RemoveItemFromPlayer(ItemType.Goods, 4021, 1);
        RemoveItemFromPlayer(ItemType.Goods, 4017, 1);
        RemoveItemFromPlayer(ItemType.Goods, 4018, 1);
        RemoveItemFromPlayer(ItemType.Goods, 4019, 1);
        RemoveItemFromPlayer(ItemType.Goods, 4020, 1);
        RemoveItemFromPlayer(ItemType.Goods, 4311, 1);
        RemoveItemFromPlayer(ItemType.Goods, 4340, 1);
        RemoveItemFromPlayer(ItemType.Goods, 4341, 1);
        RemoveItemFromPlayer(ItemType.Goods, 4342, 1);
        RemoveItemFromPlayer(ItemType.Goods, 700, 99);
        SetEventFlag(6604, OFF);
    }
L1:
    NoOp();
});

// initialize lamp settings
$Event(8400, Default, function() {
    // prevent lamp deactivation
    if (!EventFlag(12100968) && !EventFlag(12100868)) {
        SetEventFlag(12100968, ON); // off
    }
    
    // auto refill vials & bullets
    if (!EventFlag(12100962) && !EventFlag(12100862)) {
        SetEventFlag(12100862, ON); // on
    }
    
    // item drop hunt
    if (!EventFlag(12100955) && !EventFlag(12100855)) {
        SetEventFlag(12100855, ON); // on
    }
    
    // rest
    if (!EventFlag(12100961) && !EventFlag(12100861)) {
        SetEventFlag(12100961, ON); // off
    }
    
    // auto rest
    if (!EventFlag(12100958) && !EventFlag(12100858)) {
        SetEventFlag(12100958, ON); // off
    }
    
    // quick warp to boss
    if (!EventFlag(12100957) && !EventFlag(12100857)) {
        SetEventFlag(12100857, ON); // on
    }
    
    // lamp menu
    if (!EventFlag(12100972) && !EventFlag(12100872)) {
        SetEventFlag(12100872, ON); // on
    }
    
    // warp
    if (!EventFlag(12100980) && !EventFlag(12100880)) {
        SetEventFlag(12100880, ON); // on
    }
    
    // level up
    if (!EventFlag(12100979) && !EventFlag(12100879)) {
        SetEventFlag(12100879, ON); // on
    }
    
    // workshop
    if (!EventFlag(12100978) && !EventFlag(12100878)) {
        SetEventFlag(12100878, ON); // on
    }
    
    // memory alter
    if (!EventFlag(12100977) && !EventFlag(12100877)) {
        SetEventFlag(12100877, ON); // on
    }
    
    // storage
    if (!EventFlag(12100976) && !EventFlag(12100876)) {
        SetEventFlag(12100876, ON); // on
    }
    
    // messengers
    if (!EventFlag(12100975) && !EventFlag(12100875)) {
        SetEventFlag(12100875, ON); // on
    }
    
    // change appearance
    if (!EventFlag(12100974) && !EventFlag(12100874)) {
        SetEventFlag(12100874, ON); // on
    }
    
    // boss rematches
    if (!EventFlag(12100967) && !EventFlag(12100867)) {
        SetEventFlag(12100867, ON); // on
    }
});

// initialize lamp settings 2
$Event(8401, Default, function() {
    // enable Iosefka lamp from start
    if (!EventFlag(12100953) && !EventFlag(12100853)) {
        SetEventFlag(12100853, ON); // on
    }
    
    // kindling
    if (!EventFlag(12100951) && !EventFlag(12100851)) {
        SetEventFlag(12100851, ON); // on
    }
});

// initialize broken lamp settings
$Event(8405, Default, function() {
    // broken lamp
    if (!EventFlag(12100965) && !EventFlag(12100865)) {
        SetEventFlag(12100865, ON); // on
    }
    
    // broken lamp respawn location on victory and hunter's mark - dream or lamp
    if (!EventFlag(12100963) && !EventFlag(12100863)) {
        SetEventFlag(12100963, ON); // dream
    }
    
    // broken lamp respawn location on death - dream or lamp
    if (!EventFlag(12100959) && !EventFlag(12100859)) {
        SetEventFlag(12100959, ON); // dream
    }
});

// initialize other settings
$Event(8406, Default, function() {
    // prevent auto ng+
    if (!EventFlag(12100973) && !EventFlag(12100873)) {
        SetEventFlag(12100873, ON); // on
    }
    
    // stocked shop
    if (!EventFlag(12100971) && !EventFlag(12100871)) {
        SetEventFlag(12100871, ON); // on
    }
    
    // rematch death - end rematch or restart
    if (!EventFlag(12100964) && !EventFlag(12100864)) {
        SetEventFlag(12100864, ON); // end
    }
    
    // rematch cutscenes
    if (!EventFlag(12100966) && !EventFlag(12100866)) {
        SetEventFlag(12100966, ON); // off
    }
    
    // auto unlock chalice doors
    if (!EventFlag(12100960) && !EventFlag(12100860)) {
        SetEventFlag(12100860, ON); // on
    }
    
    // random time
    if (!EventFlag(12100956) && !EventFlag(12100856)) {
        SetEventFlag(12100856, ON); // on
    }
    
    // doll gesture
    if (!EventFlag(12100954) && !EventFlag(12100854)) {
        SetEventFlag(12100954, ON); // off
    }
    
    // rematch scaling
    if (!EventFlag(12100952) && !EventFlag(12100852)) {
        SetEventFlag(12100952, ON); // off
    }
    
    // bridge door
    if (!EventFlag(12100949) && !EventFlag(12100849)) {
        SetEventFlag(12100949, ON); // off
    }
    
    // unlock lamps
    SetEventFlag(12102301, OFF);
    
    // unlock shortcuts
    SetEventFlag(12102311, OFF);
    
    // game effect / dark fog
    if (!AnyBatchEventFlags(12102033, 12102036)) {
        SetEventFlag(12102033, OFF);
        SetEventFlag(12102034, ON);
        SetEventFlag(12102035, OFF);
        SetEventFlag(12102036, OFF);
    }
    
    // increase cycle
    if (!AnyBatchEventFlags(12102022, 12102028)) {
        SetEventFlag(12102022, ON);
        SetEventFlag(12102023, OFF);
        SetEventFlag(12102024, OFF);
        SetEventFlag(12102025, OFF);
        SetEventFlag(12102026, OFF);
        SetEventFlag(12102027, OFF);
        SetEventFlag(12102028, OFF);
    }
});

// Lantern lights up when passing area_XX
$Event(12101602, Default, function(X0_4, X4_4) {
    CreateObjectfollowingSFX(X4_4, 200, 8020);
    ForceAnimationPlayback(X4_4, 200, true, true, false);
    if (!ThisEventSlot()) {
        WaitFor(InArea(10000, X0_4));
    }
    ForceAnimationPlayback(X4_4, 1000000, false, true, false);
    CreateObjectfollowingSFX(X4_4, 100, 8023);
    ForceAnimationPlayback(X4_4, 1000100, true, true, false);
});

// activate all lamps
$Event(12102200, Default, function() {
    EndIf(ThisEvent());
    SetEventFlag(12102202, ON);
    WaitFor(EventFlag(12102201) || EventFlag(12102301));
    if (!EventFlag(12102301)) {
        DisplayBanner(TextBannerType.StadiumWin); // unlocked
    }
    
    // abandoned workshop
    //SetEventFlag(72110200, ON);
    SetEventFlag(12117810, ON);
    
    SetEventFlag(12117810, ON);
    SetEventFlag(72110200, ON);
    SetEventFlag(12307810, ON);
    SetEventFlag(72300200, ON);
    SetEventFlag(12407810, ON);
    SetEventFlag(72400200, ON);
    SetEventFlag(12407830, ON);
    SetEventFlag(72400201, ON);
    SetEventFlag(12417810, ON);
    SetEventFlag(72410200, ON);
    SetEventFlag(12417830, ON);
    SetEventFlag(72410201, ON);
    SetEventFlag(12417850, ON);
    SetEventFlag(72410202, ON);
    SetEventFlag(12417870, ON);
    SetEventFlag(72410203, ON);
    SetEventFlag(12427810, ON);
    SetEventFlag(72420200, ON);
    SetEventFlag(12427830, ON);
    SetEventFlag(72420201, ON);
    SetEventFlag(12427850, ON);
    SetEventFlag(72420202, ON);
    SetEventFlag(12307830, ON);
    SetEventFlag(72300201, ON);
    SetEventFlag(12307850, ON);
    SetEventFlag(72300202, ON);
    SetEventFlag(12207810, ON);
    SetEventFlag(72200200, ON);
    SetEventFlag(12207830, ON);
    SetEventFlag(72200201, ON);
    SetEventFlag(12707810, ON);
    SetEventFlag(72700200, ON);
    SetEventFlag(12707830, ON);
    SetEventFlag(72700201, ON);
    SetEventFlag(12807810, ON);
    SetEventFlag(72800200, ON);
    SetEventFlag(12807830, ON);
    SetEventFlag(72800201, ON);
    SetEventFlag(12807850, ON);
    SetEventFlag(72800202, ON);
    SetEventFlag(12807870, ON);
    SetEventFlag(72800203, ON);
    SetEventFlag(12507810, ON);
    SetEventFlag(72500200, ON);
    SetEventFlag(12507830, ON);
    SetEventFlag(72500201, ON);
    SetEventFlag(12507850, ON);
    SetEventFlag(72500202, ON);
    SetEventFlag(12607810, ON);
    SetEventFlag(72600200, ON);
    SetEventFlag(12607830, ON);
    SetEventFlag(72600201, ON);
    SetEventFlag(12607850, ON);
    SetEventFlag(72600202, ON);
    SetEventFlag(12607870, ON);
    SetEventFlag(72600203, ON);
    SetEventFlag(13207810, ON);
    SetEventFlag(73200200, ON);
    SetEventFlag(13207830, ON);
    SetEventFlag(73200201, ON);
    SetEventFlag(13207850, ON);
    SetEventFlag(73200202, ON);
    SetEventFlag(13207870, ON);
    SetEventFlag(73200203, ON);
    SetEventFlag(13307810, ON);
    SetEventFlag(73300200, ON);
    SetEventFlag(13307830, ON);
    SetEventFlag(73300201, ON);
    SetEventFlag(13407810, ON);
    SetEventFlag(73400200, ON);
    SetEventFlag(13407830, ON);
    SetEventFlag(73400201, ON);
    SetEventFlag(13407850, ON);
    SetEventFlag(73400202, ON);
    SetEventFlag(13407870, ON);
    SetEventFlag(73400203, ON);
    SetEventFlag(13507810, ON);
    SetEventFlag(73500200, ON);
    SetEventFlag(13507830, ON);
    SetEventFlag(73500201, ON);
    SetEventFlag(13507850, ON);
    SetEventFlag(73500202, ON);
    SetEventFlag(13607810, ON);
    SetEventFlag(73600200, ON);
    SetEventFlag(13607830, ON);
    SetEventFlag(73600201, ON);
    SetEventFlag(13607850, ON);
    SetEventFlag(73600202, ON);
    
    if (!PlayerHasItem(ItemType.Goods, 1402)) {
        AwardItemLot(37010);
    }
    
    SetEventFlag(12102202, OFF);
});

// unlock all shortcuts
$Event(12102210, Default, function() {
    EndIf(ThisEvent());
    SetEventFlag(12102212, ON);
    WaitFor(EventFlag(12102211) || EventFlag(12102311));
    if (!EventFlag(12102311)) {
        DisplayBanner(TextBannerType.StadiumWin);
    }
    
    SetEventFlag(12200110, ON);
    SetEventFlag(12200125, ON);
    SetEventFlag(12300120, ON);
    SetEventFlag(12300121, ON);
    SetEventFlag(12409453, ON);
    SetEventFlag(12400160, ON);
    SetEventFlag(12400157, ON);
    SetEventFlag(12400177, ON);
    SetEventFlag(12410200, ON);
    SetEventFlag(12410202, ON);
    SetEventFlag(12410203, ON);
    SetEventFlag(12410112, ON);
    SetEventFlag(12410117, ON);
    SetEventFlag(12415350, OFF);
    SetEventFlag(12410350, ON);
    SetEventFlag(12410330, ON);
    SetEventFlag(12420123, ON);
    SetEventFlag(12500074, ON);
    SetEventFlag(12500501, ON);
    
    
    SetEventFlag(12601251, OFF);
    
    // mensis first cage elevator
    SetEventFlag(12601253, OFF);
    SetEventFlag(12601254, OFF);
    SetEventFlag(12601334, ON);
    
    // mensis second cage elevator
    SetEventFlag(12605254, OFF);
    SetEventFlag(12601255, OFF);
    SetEventFlag(12601335, ON);
    
    // mensis bottom elevator
    SetEventFlag(12605256, OFF);
    SetEventFlag(12601256, ON);
    SetEventFlag(12601323, ON);
    
    // mensis top elevator
    SetEventFlag(12605251, OFF);
    SetEventFlag(12601251, OFF);
    SetEventFlag(12601331, ON);
    
    // mikolash door
    SetEventFlag(12601051, ON);
    
    // woods elevator 1
    SetEventFlag(12700134, OFF);
    SetEventFlag(12700135, OFF);
    SetEventFlag(12700137, ON);
    
    // woods elevator 2
    SetEventFlag(12700144, OFF);
    SetEventFlag(12700147, ON);
    
    SetEventFlag(12700110, ON);
    SetEventFlag(12700111, ON);
    SetEventFlag(12700112, ON);
    
    // yahar'gul elevator
    SetEventFlag(12800610, ON);
    SetEventFlag(12800612, ON);
    SetEventFlag(12800630, ON);
    
    // yahar'gul big door
    SetEventFlag(12809802, ON);
    
    // yahar'gul small doors
    SetEventFlag(12800480, ON);
    SetEventFlag(12800481, ON);
    SetEventFlag(12800482, ON);
    SetEventFlag(12800483, ON);
    SetEventFlag(12800484, ON);
    
    
    SetEventFlag(13200040, ON);
    SetEventFlag(13200041, ON);
    SetEventFlag(13200043, ON);
    SetEventFlag(13200010, ON);
    
    // nightmare frontier slab
    SetEventFlag(13300100, ON);
    
    // nightmare frontier elevator
    SetEventFlag(13300115, OFF);
    SetEventFlag(13300116, OFF);
    SetEventFlag(13300111, ON);
    
    // hunter's nightmare door
    SetEventFlag(13401211, ON);
    
    // hunter's nightmare gate
    SetEventFlag(13401220, ON);
    
    SetEventFlag(13501250, ON);
    SetEventFlag(13504110, OFF);
    SetEventFlag(13501118, ON);
    SetEventFlag(13501116, OFF);
    SetEventFlag(13504120, OFF);
    SetEventFlag(13501128, ON);
    SetEventFlag(13501126, OFF);
    SetEventFlag(13601312, ON);
    SetEventFlag(13601200, ON);
    SetEventFlag(13601201, ON);
    SetEventFlag(13604100, OFF);
    SetEventFlag(13601108, ON);
    SetEventFlag(13601106, ON);
    
    SetEventFlag(12102211, OFF);
    
    SetEventFlag(12102212, OFF);
    
    //RestartEvent();
});

$Event(12102220, Default, function(X0_4, X4_4) {
    EndEvent();
    EndIf(!EventFlag(12102200) || ThisEventSlot());
    WaitFor(CharacterBackreadStatus(X4_4));
    WaitFixedTimeSeconds(1);
    InitializeWarpObject(X0_4);
});

// increase ng cycle
$Event(12102020, Default, function() {
    SetEventFlag(12102010, ON);
    if (GameCycle() == 0) {
        SetEventFlag(12102003, ON);
    }
    else if (GameCycle() == 1) {
        SetEventFlag(12102003, OFF);
        SetEventFlag(12102004, ON);
    }
    else if (GameCycle() == 2) {
        SetEventFlag(12102004, OFF);
        SetEventFlag(12102005, ON);
    }
    else if (GameCycle() == 3) {
        SetEventFlag(12102005, OFF);
        SetEventFlag(12102006, ON);
    }
    else if (GameCycle() == 4) {
        SetEventFlag(12102006, OFF);
        SetEventFlag(12102007, ON);
    }
    else if (GameCycle() == 5) {
        SetEventFlag(12102007, OFF);
        SetEventFlag(12102008, ON);
    }
    else if (GameCycle() >= 6) {
        SetEventFlag(12102008, OFF);
        SetEventFlag(12102009, ON);
        SetEventFlag(12102010, OFF);
    }
    WaitFor(EventFlag(12102001));
    SetEventFlag(12102001, OFF);
    IncrementGameCycle(0);
    RestartEvent();
});

// increase ng cycle settings tool
$Event(12102021, Default, function() {
    EndIf(EventFlag(12102021));
    WaitFor(EventFlag(8406));
    if (EventFlag(12102022)) {
    
    }
    else if (EventFlag(12102023)) {
        IncrementGameCycle(0);
    }
    else if (EventFlag(12102024)) {
        IncrementGameCycle(0);
        WaitFixedTimeFrames(1);
        IncrementGameCycle(0);
    }
    else if (EventFlag(12102025)) {
        IncrementGameCycle(0);
        WaitFixedTimeFrames(1);
        IncrementGameCycle(0);
        WaitFixedTimeFrames(1);
        IncrementGameCycle(0);
    
    }
    else if (EventFlag(12102026)) {
        IncrementGameCycle(0);
        WaitFixedTimeFrames(1);
        IncrementGameCycle(0);
        WaitFixedTimeFrames(1);
        IncrementGameCycle(0);
        WaitFixedTimeFrames(1);
        IncrementGameCycle(0);
    
    }
    else if (EventFlag(12102027)) {
        IncrementGameCycle(0);
        WaitFixedTimeFrames(1);
        IncrementGameCycle(0);
        WaitFixedTimeFrames(1);
        IncrementGameCycle(0);
        WaitFixedTimeFrames(1);
        IncrementGameCycle(0);
        WaitFixedTimeFrames(1);
        IncrementGameCycle(0);
    
    }
    else if (EventFlag(12102028)) {
        IncrementGameCycle(0);
        WaitFixedTimeFrames(1);
        IncrementGameCycle(0);
        WaitFixedTimeFrames(1);
        IncrementGameCycle(0);
        WaitFixedTimeFrames(1);
        IncrementGameCycle(0);
        WaitFixedTimeFrames(1);
        IncrementGameCycle(0);
        WaitFixedTimeFrames(1);
        IncrementGameCycle(0);
    
    }
});

// any boss defeated 1
$Event(12102040, Default, function() {
    EndIf(EventFlag(12102042));
    WaitFor(EventFlag(12201800) || EventFlag(12301800) || EventFlag(12301700) || EventFlag(12401800) || EventFlag(12411700) 
    || EventFlag(12411800) || EventFlag(12421700) || EventFlag(12421800) || EventFlag(12501800) || EventFlag(12601850) 
    || EventFlag(12601800) || EventFlag(12701800) || EventFlag(12801800) || EventFlag(13201800) || EventFlag(13301800));
    SetEventFlag(12102042, ON);
});

// any boss defeated 2
$Event(12102041, Default, function() {
    EndIf(EventFlag(12102042));
    WaitFor(EventFlag(13401800) || EventFlag(13401850) || EventFlag(13501850) || EventFlag(13501800) || EventFlag(13601800) 
    || EventFlag(12101800) || EventFlag(12101850));
    SetEventFlag(12102042, ON);
});

// distorted bosses defeated
$Event(12102043, Default, function() {
    EndIf(ThisEvent());
    WaitFor(EventFlag(12411800) || EventFlag(13401800) || EventFlag(13601800) || EventFlag(12101850) || EventFlag(12601800));
    SetEventFlag(12102043, ON);
});

// cleric beast = 7447
// gascoigne = 7448
// bsb = 7416
// amelia = 7417
// witches = 7418
// shadows = 7419
// paarl = 7449
// amygdala = 7446
// rom = 7456
// logarius = 7457
// one reborn = 7458
// emissary = 7459
// micolash = 7460
// wet nurse = 7424
// ludwig = 7491
// laurence = 7494
// failures = 7497
// maria = 7493
// orphan = 7496
// ebrietas = 7423
// gehrman = 7425
// moon presence = 7413

// rematch scaling
// boss_rematch_flag, boss_rematch_flag2, speffect_id, boss_id, boss_id2, boss_id3
$Event(12102070, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    const boss_rematch_flag = X0_4;
    const boss_distorted_rematch_flag = X4_4;
    const sp_effect_id = X8_4;
    const boss1_id = X12_4;
    const boss2_id = X16_4;
    const boss3_id = X20_4;
    EndIf(EventFlag(12100952));
    WaitFor(EventFlag(boss_rematch_flag) || (boss_distorted_rematch_flag > 0 && EventFlag(boss_distorted_rematch_flag)));
    WaitFor(CharacterBackreadStatus(boss1_id));
    if (GameCycle() == 0) {
        SetSpEffect(boss1_id, sp_effect_id, false);
        if (boss2_id != 0) {
            WaitFor(CharacterBackreadStatus(boss2_id));
            SetSpEffect(boss2_id, sp_effect_id, false);
        }
        if (boss3_id != 0) {
            WaitFor(CharacterBackreadStatus(boss3_id));
            SetSpEffect(boss3_id, sp_effect_id, false);
        }
    }
    else if (GameCycle() == 1) {
        SetSpEffect(boss1_id, 7465, false);
        if (boss2_id != 0) {
            WaitFor(CharacterBackreadStatus(boss2_id));
            SetSpEffect(boss2_id, 7465, false);
        }
        if (boss3_id != 0) {
            WaitFor(CharacterBackreadStatus(boss3_id));
            SetSpEffect(boss3_id, 7465, false);
        }
    }
    else if (GameCycle() == 2) {
        SetSpEffect(boss1_id, 7466, false);
        if (boss2_id != 0) {
            WaitFor(CharacterBackreadStatus(boss2_id));
            SetSpEffect(boss2_id, 7466, false);
        }
        if (boss3_id != 0) {
            WaitFor(CharacterBackreadStatus(boss3_id));
            SetSpEffect(boss3_id, 7466, false);
        }
    }
    else if (GameCycle() == 3) {
        SetSpEffect(boss1_id, 7467, false);
        if (boss2_id != 0) {
            WaitFor(CharacterBackreadStatus(boss2_id));
            SetSpEffect(boss2_id, 7467, false);
        }
        if (boss3_id != 0) {
            WaitFor(CharacterBackreadStatus(boss3_id));
            SetSpEffect(boss3_id, 7467, false);
        }
    }
    else if (GameCycle() == 4) {
        SetSpEffect(boss1_id, 7468, false);
        if (boss2_id != 0) {
            WaitFor(CharacterBackreadStatus(boss2_id));
            SetSpEffect(boss2_id, 7468, false);
        }
        if (boss3_id != 0) {
            WaitFor(CharacterBackreadStatus(boss3_id));
            SetSpEffect(boss3_id, 7468, false);
        }
    }
    else if (GameCycle() == 5) {
        SetSpEffect(boss1_id, 7469, false);
        if (boss2_id != 0) {
            WaitFor(CharacterBackreadStatus(boss2_id));
            SetSpEffect(boss2_id, 7469, false);
        }
        if (boss3_id != 0) {
            WaitFor(CharacterBackreadStatus(boss3_id));
            SetSpEffect(boss3_id, 7469, false);
        }
    }
    else if (GameCycle() >= 6) {
        SetSpEffect(boss1_id, 7470, false);
        if (boss2_id != 0) {
            WaitFor(CharacterBackreadStatus(boss2_id));
            SetSpEffect(boss2_id, 7470, false);
        }
        if (boss3_id != 0) {
            WaitFor(CharacterBackreadStatus(boss3_id));
            SetSpEffect(boss3_id, 7470, false);
        }
    }
    //RestartEvent();
});

$Event(13100000, Default, function() {
    WaitFixedTimeSeconds(5);
    // 429 stank cloud (limited)
    // 1600, 1610, 1620, 1630 acquire souls (+11379)
    // 5560 invisible
    // 5600 full body flame
    // 5601 smouldering
    // 5679 fire back
    // 5703 vial heal
    // 5718 red leg
    // SetSpEffect(10000, 421, false);
});

// Trading messenger_Lineup expansion_XX
$Event(12101000, Default, function(X0_4, X4_4, X8_1, X9_1) {
    EndIf(ThisEventSlot());
    WaitFixedTimeSeconds(0.1);
    WaitFor(CharacterBackreadStatus(X4_4) || EventFlag(12100004));
    if (!EventFlag(12100004)) {
        ChangeCharacterDispmask(X4_4, X8_1, OFF);
        ChangeCharacterDispmask(X4_4, X9_1, OFF);
    }
    WaitFor(PlayerHasItem(ItemType.Goods, X0_4));
    if (!EventFlag(12100004)) {
        ChangeCharacterDispmask(X4_4, X8_1, ON);
        ChangeCharacterDispmask(X4_4, X9_1, ON);
    }
});

// shop lineup badge fix
$Event(12100001, Default, function() {
    SetEventFlag(12100004, OFF);
});

$Event(12100003, Default, function() {
    WaitFixedTimeSeconds(1);
    if (EventFlag(12100001)) {
        SetEventFlag(12100004, ON);
    }
});

// acquire all runes
$Event(12100005, Default, function() {
    //EndIf(ThisEvent());
    SetEventFlag(12109000, ON);
    WaitFor(EventFlag(12100006));
    AwardItemLot(110000);
    AwardItemLot(110010);
    AwardItemLot(110020);
    AwardItemLot(110030);
    AwardItemLot(110040);
    AwardItemLot(110050);
    AwardItemLot(110060);
    AwardItemLot(110070);
    AwardItemLot(110080);
    AwardItemLot(110090);
    AwardItemLot(110100);
    AwardItemLot(110110);
    AwardItemLot(110120);
    AwardItemLot(110130);
    AwardItemLot(110140);
    AwardItemLot(110150);
    AwardItemLot(110160);
    AwardItemLot(110170);
    AwardItemLot(110180);
    AwardItemLot(110190);
    AwardItemLot(110200);
    AwardItemLot(110210);
    AwardItemLot(110220);
    AwardItemLot(110230);
    AwardItemLot(110240);
    AwardItemLot(110250);
    AwardItemLot(110260);
    AwardItemLot(110270);
    AwardItemLot(110280);
    AwardItemLot(110290);
    AwardItemLot(110300);
    AwardItemLot(110310);
    AwardItemLot(110320);
    AwardItemLot(110330);
    AwardItemLot(110340);
    AwardItemLot(110350);
    AwardItemLot(110360);
    AwardItemLot(110370);
    AwardItemLot(110380);
    AwardItemLot(110390);
    AwardItemLot(110400);
    AwardItemLot(110410);
    AwardItemLot(110420);
    AwardItemLot(110430);
    AwardItemLot(110440);
    AwardItemLot(110450);
    AwardItemLot(110460);
    AwardItemLot(110470);
    AwardItemLot(110480);
    AwardItemLot(110490);
    AwardItemLot(110500);
    AwardItemLot(110510);
    AwardItemLot(110520);
    AwardItemLot(110530);
    AwardItemLot(110540);
    AwardItemLot(110550);
    AwardItemLot(110560);
    AwardItemLot(110570);
    AwardItemLot(110580);
    AwardItemLot(110590);
    AwardItemLot(110600);
    AwardItemLot(110610);
    AwardItemLot(110620);
    AwardItemLot(110630);
    AwardItemLot(110640);
    AwardItemLot(110650);
    AwardItemLot(110660);
    AwardItemLot(110670);
    AwardItemLot(110680);
    AwardItemLot(110690);
    AwardItemLot(110700);
    AwardItemLot(110710);
    AwardItemLot(110720);
    AwardItemLot(110730);
    AwardItemLot(110740);
    if (EventFlag(12100870)) {
        AwardItemLot(110750);
    }
    if (EventFlag(12100869)) {
        AwardItemLot(110760);
    }
    SetEventFlag(12100006, OFF);
    RestartEvent();
});

// Gravestone messenger animation propriety judgment_gravestone 0
$Event(12105020, Restart, function() {
    WaitFor(
        EventFlag(12417810)
            || EventFlag(12417830)
            || EventFlag(12417850)
            || EventFlag(12417870)
            || EventFlag(12407810)
            || EventFlag(12407830)
            || EventFlag(12427810)
            || EventFlag(12427830)
            || EventFlag(12427850)
            || EventFlag(12307810)
            || EventFlag(12307830)
            || EventFlag(12307850));
    SetEventFlag(12105030, ON);
    WaitFor(
        !(EventFlag(12417810)
            || EventFlag(12417830)
            || EventFlag(12417850)
            || EventFlag(12417870)
            || EventFlag(12407810)
            || EventFlag(12407830)
            || EventFlag(12427810)
            || EventFlag(12427830)
            || EventFlag(12427850)
            || EventFlag(12307810)
            || EventFlag(12307830)
            || EventFlag(12307850)));
    SetEventFlag(12105030, OFF);
    RestartEvent();
});

// Gravestone messenger animation propriety judgment_gravestone 1
$Event(12105021, Restart, function() {
    WaitFor(
        EventFlag(12207810)
            || EventFlag(12207830)
            || EventFlag(12707810)
            || EventFlag(12707830)
            || EventFlag(13207810)
            || EventFlag(13207850));
    SetEventFlag(12105031, ON);
    WaitFor(
        !(EventFlag(12207810)
            || EventFlag(12207830)
            || EventFlag(12707810)
            || EventFlag(12707830)
            || EventFlag(13207810)
            || EventFlag(13207850)));
    SetEventFlag(12105031, OFF);
    RestartEvent();
});

// Tombstone messenger animation propriety judgment_Tombstone 2
$Event(12105022, Restart, function() {
    WaitFor(
        EventFlag(12807810)
            || EventFlag(12807830)
            || EventFlag(12807850)
            || EventFlag(12807870)
            || EventFlag(12507810)
            || EventFlag(12507830)
            || EventFlag(12507850)
            || EventFlag(12117810));
    SetEventFlag(12105032, ON);
    WaitFor(
        !(EventFlag(12807810)
            || EventFlag(12807830)
            || EventFlag(12807850)
            || EventFlag(12807870)
            || EventFlag(12507810)
            || EventFlag(12507830)
            || EventFlag(12507850)
            || EventFlag(12117810)));
    SetEventFlag(12105032, OFF);
    RestartEvent();
});

// Gravestone messenger animation propriety judgment_gravestone 3
$Event(12105023, Restart, function() {
    WaitFor(
        EventFlag(13207830)
            || EventFlag(13207870)
            || EventFlag(13307810)
            || EventFlag(13307830)
            || EventFlag(12607810)
            || EventFlag(12607830)
            || EventFlag(12607850)
            || EventFlag(12607870)
            || EventFlag(13307810));
    SetEventFlag(12105033, ON);
    WaitFor(
        !(EventFlag(13207830)
            || EventFlag(13207870)
            || EventFlag(13307810)
            || EventFlag(13307830)
            || EventFlag(12607810)
            || EventFlag(12607830)
            || EventFlag(12607850)
            || EventFlag(12607870)
            || EventFlag(13307810)));
    SetEventFlag(12105033, OFF);
    RestartEvent();
});

// Gravestone messenger animation propriety judgment_gravestone 4
$Event(12105024, Restart, function() {
    WaitFor(
        EventFlag(13407810)
            || EventFlag(13407830)
            || EventFlag(13407850)
            || EventFlag(13407870)
            || EventFlag(13507810)
            || EventFlag(13507830)
            || EventFlag(13507850)
            || EventFlag(13607810)
            || EventFlag(13607830)
            || EventFlag(13607850));
    SetEventFlag(12105034, ON);
    WaitFor(
        !(EventFlag(13407810)
            || EventFlag(13407830)
            || EventFlag(13407850)
            || EventFlag(13407870)
            || EventFlag(13507810)
            || EventFlag(13507830)
            || EventFlag(13507850)
            || EventFlag(13607810)
            || EventFlag(13607830)
            || EventFlag(13607850)));
    SetEventFlag(12105034, OFF);
    RestartEvent();
});

// rite of kindling failsafe
$Event(8410, Default, function() {
    SetEventFlag(8413, OFF);
    WaitFor(EventFlag(12100851) && EventFlag(12701800) && EventFlag(8413) && !PlayerHasItemIncludingBBox(ItemType.Goods, 4002));
    AwardItemLot(2700970);
    RestartEvent();
});

// remove rite of kindling if disabled
$Event(8411, Default, function() {
    WaitFor(EventFlag(12100951) && PlayerHasItemIncludingBBox(ItemType.Goods, 4002));
    RemoveItemFromPlayer(ItemType.Goods, 4002, 1);
    RestartEvent();
});

$Event(8412, Default, function() {
    //give souls
    SetSpEffect(10000, 126, false);
    WaitFixedTimeFrames(1);
    ClearSpEffect(10000, 126);
    
    //EventValueOperation(12308049, 1, 1, 0, 0, CalculationType.Assign);
    //
    //const itemIds = [
    //    4020, 4019, 4003, 4021, 4017, 4011, 4009, 4014, 4012, 4013, 4000,
    //    4312, 4006, 4305, 4304, 4300, 4310, 4018, 4015, 4308, 4010, 4330,
    //    4117, 4119, 4111, 4120, 4113, 4112, 4115, 4110, 4118, 4114, 4116,
    //    4102, 4103, 4104, 4002, 4105
    //];
    //const baseFlag = 12308050;    
    //for (let i = 0; i < 38; i++) {
    //    DirectlyGivePlayerItem(ItemType.Goods, itemIds[i], 12308049, 1);
    //}
});

// change effect
$Event(12102032, Default, function() {
    //EndEvent();
    EndIf(EventFlag(12601815)); // Wet Nurse distorted
    ClearSpEffect(10000, 5680);
    WaitFixedTimeSeconds(0.5);
    if (EventFlag(12102033)) {
        // random - spawn
        BatchSetEventFlags(12102050, 12102057, OFF);
        RandomlySetEventFlagInRange(12102050, 12102052, ON);
        if (EventFlag(12102050)) {
            SetSpEffect(10000, 5680, false);
        }
    }
    else if (EventFlag(12102034)) {
        // default
    }
    else if (EventFlag(12102035)) {
        // dark fog
        SetSpEffect(10000, 5680, false);
    }
    WaitFor(EventFlag(12102031));
    SetEventFlag(12102031, OFF);
    RestartEvent();
});

// dark fog - random time
$Event(12102037, Default, function() {
    WaitFor(EventFlag(12102036));
    WaitFixedTimeSeconds(1);
    BatchSetEventFlags(12102060, 12102062, OFF);
    SetEventFlag(12102065, OFF);
    RandomlySetEventFlagInRange(12102060, 12102062, ON);
    if (!EventFlag(12102060) || CharacterHasSpEffect(10000, 5680)) {
        ClearSpEffect(10000, 5680);
        WaitFor(RandomElapsedSeconds(300, 900));
        RestartEvent();
    }
    SetSpEffect(10000, 5680, false);
    WaitFor(RandomElapsedSeconds(120, 300));
    SetEventFlag(12102065, ON);
    WaitFixedTimeSeconds(3);
    SetEventFlag(12102065, OFF);
    WaitFor(RandomElapsedSeconds(120, 300));
    RestartEvent();
});

// beast 
$Event(12100770, Default, function() {
    EndIf(ThisEvent());
    SetEventFlag(12100870, ON);
    WaitFor(ThisEvent());
    AwardItemLot(3401850);
    SetEventFlag(12100870, OFF);
});

// milkweed
$Event(12100769, Default, function() {
    EndIf(ThisEvent());
    SetEventFlag(12100869, ON);
    WaitFor(ThisEvent());
    AwardItemLot(43020);
    SetEventFlag(12100869, OFF);
});

// return to dream / lesser hunter's mark
$Event(12100768, Default, function() {
    WaitFor(CharacterHasSpEffect(10000, 2102));
    SetPlayerRespawnPoint(2102962);
    WaitFixedTimeFrames(1);
    SetSpEffect(10000, 2101, false);
});

// acquire all trick weapons
$Event(12101300, Default, function() {
    EndIf(ThisEvent());
    SetEventFlag(12101400, ON);
    WaitFor(ThisEvent());
    SetEventFlag(12101301, ON);
    SetEventFlag(12101302, ON);
    SetEventFlag(12101303, ON);
    SetEventFlag(12101400, OFF);
});

// acquire all standard trick weapons
$Event(12101301, Default, function() {
    EndIf(ThisEvent());
    SetEventFlag(12101401, ON);
    WaitFor(ThisEvent());
    EventValueOperation(12104030, 1, 1, 0, 1, CalculationType.Assign);
    DirectlyGivePlayerItem(ItemType.Weapon, 25000000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 9000000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 23000000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 24000000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 4000000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 29000000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 28000000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 5100000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 2000000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 30000000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 26000000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 5000000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 8000000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 38000000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 12000000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 8100000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 27000000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 10100000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 10000000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 7000000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 7100000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 32000000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 11000000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 22000000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 13000000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 31000000, 12104030, 1);
    if (EventFlag(12101302) && EventFlag(12101303)) {
        SetEventFlag(12101300, ON);
    }
    SetEventFlag(12101401, OFF);
});

// acquire all uncanny trick weapons
$Event(12101302, Default, function() {
    EndIf(ThisEvent());
    SetEventFlag(12101402, ON);
    WaitFor(ThisEvent());
    EventValueOperation(12104030, 1, 1, 0, 1, CalculationType.Assign);
    DirectlyGivePlayerItem(ItemType.Weapon, 2010000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 4010000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 5010000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 5110000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 7010000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 7110000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 8010000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 8110000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 9010000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 10010000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 10110000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 11010000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 12010000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 13010000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 22010000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 23010000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 24010000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 25010000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 26010000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 27010000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 28010000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 29010000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 30010000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 31010000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 32010000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 38010000, 12104030, 1);
    if (EventFlag(12101301) && EventFlag(12101303)) {
        SetEventFlag(12101300, ON);
    }
    SetEventFlag(12101402, OFF);
});

// acquire all lost trick weapons
$Event(12101303, Default, function() {
    EndIf(ThisEvent());
    SetEventFlag(12101403, ON);
    WaitFor(ThisEvent());
    EventValueOperation(12104030, 1, 1, 0, 1, CalculationType.Assign);
    DirectlyGivePlayerItem(ItemType.Weapon, 2020000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 4020000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 5020000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 5120000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 7020000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 7120000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 8020000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 8120000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 9020000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 10020000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 10120000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 11020000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 12020000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 13020000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 22020000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 23020000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 24020000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 25020000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 26020000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 27020000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 28020000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 29020000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 30020000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 31020000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 32020000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 38020000, 12104030, 1);
    if (EventFlag(12101301) && EventFlag(12101302)) {
        SetEventFlag(12101300, ON);
    }
    SetEventFlag(12101403, OFF);
});

// acquire all secondary weapons
$Event(12101310, Default, function() {
    EndIf(ThisEvent());
    SetEventFlag(12101410, ON);
    WaitFor(ThisEvent());
    EventValueOperation(12104030, 1, 1, 0, 1, CalculationType.Assign);
    DirectlyGivePlayerItem(ItemType.Weapon, 15000000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 35000000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 14100000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 34000000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 18100000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 33000000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 20000000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 19100000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 6100000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 36000000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 14200000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 18000000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 20100000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 19000000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 6000000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 14000000, 12104030, 1);
    SetEventFlag(12101410, OFF);
});

// acquire all hunter tools
$Event(12101320, Default, function() {
    EndIf(ThisEvent());
    SetEventFlag(12101420, ON);
    WaitFor(ThisEvent());
    EventValueOperation(12104030, 1, 1, 0, 1, CalculationType.Assign);
    DirectlyGivePlayerItem(ItemType.Goods, 2010, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 2130, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 2000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 2020, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 2120, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 2050, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 1310, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 2080, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 2140, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 2110, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 2060, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 2070, 12104030, 1);
    SetEventFlag(12101420, OFF);
});

// acquire all armor pieces
$Event(12101330, Default, function() {
    EndIf(ThisEvent());
    SetEventFlag(12101430, ON);
    WaitFor(ThisEvent());
    SetEventFlag(12101331, ON);
    SetEventFlag(12101332, ON);
    SetEventFlag(12101333, ON);
    SetEventFlag(12101334, ON);
    SetEventFlag(12101430, OFF);
});
    
// acquire all head pieces
$Event(12101331, Default, function() {
    EndIf(ThisEvent());
    SetEventFlag(12101431, ON);
    WaitFor(ThisEvent());
    EventValueOperation(12104030, 1, 1, 0, 1, CalculationType.Assign);
    DirectlyGivePlayerItem(ItemType.Armor, 180000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 110000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 230000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 20000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 120000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 60000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 40000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 390000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 330000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 100000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 250000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 220000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 430000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 130000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 200000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 150000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 30000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 10000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 340000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 50000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 70000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 270000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 80000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 210000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 370000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 260000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 190000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 350000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 360000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 380000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 320000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 140000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 280000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 290000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 400000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 90000, 12104030, 1);
    if (EventFlag(12101332) && EventFlag(12101333) && EventFlag(12101334)) {
        SetEventFlag(12101330, ON);
    }
    SetEventFlag(12101431, OFF);
});

// acquire all torse pieces
$Event(12101332, Default, function() {
    EndIf(ThisEvent());
    SetEventFlag(12101432, ON);
    WaitFor(ThisEvent());
    EventValueOperation(12104030, 1, 1, 0, 1, CalculationType.Assign);
    DirectlyGivePlayerItem(ItemType.Armor, 241000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 391000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 111000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 331000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 41000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 101000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 11000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 121000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 381000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 181000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 361000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 221000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 151000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 231000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 131000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 201000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 31000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 341000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 51000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 281000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 71000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 71000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 401000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 81000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 211000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 371000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 311000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 351000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 191000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 301000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 321000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 141000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 291000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 21000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 61000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 91000, 12104030, 1);
    if (EventFlag(12101331) && EventFlag(12101333) && EventFlag(12101334)) {
        SetEventFlag(12101330, ON);
    }
    SetEventFlag(12101432, OFF);
});

// acquire all hand pieces
$Event(12101333, Default, function() {
    EndIf(ThisEvent());
    SetEventFlag(12101433, ON);
    WaitFor(ThisEvent());
    EventValueOperation(12104030, 1, 1, 0, 1, CalculationType.Assign);
    DirectlyGivePlayerItem(ItemType.Armor, 242000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 392000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 42000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 332000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 102000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 12000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 122000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 182000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 222000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 152000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 132000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 32000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 342000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 52000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 72000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 82000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 212000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 372000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 402000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 352000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 232000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 112000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 142000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 22000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 62000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 382000, 12104030, 1);
    if (EventFlag(12101331) && EventFlag(12101332) && EventFlag(12101334)) {
        SetEventFlag(12101330, ON);
    }
    SetEventFlag(12101433, OFF);
});

// acquire all leg pieces
$Event(12101334, Default, function() {
    EndIf(ThisEvent());
    SetEventFlag(12101434, ON);
    WaitFor(ThisEvent());
    EventValueOperation(12104030, 1, 1, 0, 1, CalculationType.Assign);
    DirectlyGivePlayerItem(ItemType.Armor, 313000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 243000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 113000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 393000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 43000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 333000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 103000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 13000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 123000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 383000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 183000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 363000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 223000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 153000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 233000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 133000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 203000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 33000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 343000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 53000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 73000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 83000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 213000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 373000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 353000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 193000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 143000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 403000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 293000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 23000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 63000, 12104030, 1);
    if (EventFlag(12101331) && EventFlag(12101332) && EventFlag(12101333)) {
        SetEventFlag(12101330, ON);
    }
    SetEventFlag(12101434, OFF);
});

// acquire all chalices
$Event(12101340, Default, function() {
    EndIf(ThisEvent());
    SetEventFlag(12101440, ON);
    WaitFor(ThisEvent());
    EventValueOperation(12104030, 1, 1, 0, 1, CalculationType.Assign);
    DirectlyGivePlayerItem(ItemType.Goods, 6100, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 6109, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 6200, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 6209, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 6210, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 6219, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 6300, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 6302, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 6309, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 6310, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 6312, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 6319, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 6401, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 6409, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 6420, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 6429, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 6500, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 6502, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 6509, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 6520, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 6522, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 6529, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 6530, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 6532, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 6539, 12104030, 1);
    SetEventFlag(12101440, OFF);
});

// fill upgrade materials
$Event(12101360, Default, function() {
    SetEventFlag(12101360, ON);
    WaitFor(!ThisEvent());
    
    EventValueOperation(12104030, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 3000, 12104020, 8);
    EventValueOperation(12104030, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 3000, 12104030, 8);
    
    EventValueOperation(12104030, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 3010, 12104020, 8);
    EventValueOperation(12104030, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 3010, 12104030, 8);
    
    EventValueOperation(12104030, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 3020, 12104020, 8);
    EventValueOperation(12104030, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 3020, 12104030, 8);
    
    EventValueOperation(12104030, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 3030, 12104020, 8);
    EventValueOperation(12104030, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 3030, 12104030, 8);
    
    RestartEvent();
});

// fill chalice materials
$Event(12101361, Default, function() {
    SetEventFlag(12101361, ON);
    WaitFor(!ThisEvent());
    
    EventValueOperation(12104030, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 7000, 12104020, 8);
    EventValueOperation(12104030, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 7000, 12104030, 8);
    
    EventValueOperation(12104030, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 7001, 12104020, 8);
    EventValueOperation(12104030, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 7001, 12104030, 8);
    
    EventValueOperation(12104030, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 7002, 12104020, 8);
    EventValueOperation(12104030, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 7002, 12104030, 8);
    
    EventValueOperation(12104030, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 7003, 12104020, 8);
    EventValueOperation(12104030, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 7003, 12104030, 8);
    
    EventValueOperation(12104030, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 7004, 12104020, 8);
    EventValueOperation(12104030, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 7004, 12104030, 8);
    
    EventValueOperation(12104030, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 7012, 12104020, 8);
    EventValueOperation(12104030, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 7012, 12104030, 8);
    
    EventValueOperation(12104030, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 7013, 12104020, 8);
    EventValueOperation(12104030, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 7013, 12104030, 8);
    
    EventValueOperation(12104030, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 7014, 12104020, 8);
    EventValueOperation(12104030, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 7014, 12104030, 8);
    
    EventValueOperation(12104030, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 7020, 12104020, 8);
    EventValueOperation(12104030, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 7020, 12104030, 8);
    
    EventValueOperation(12104030, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 7021, 12104020, 8);
    EventValueOperation(12104030, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 7021, 12104030, 8);
    
    EventValueOperation(12104030, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 7022, 12104020, 8);
    EventValueOperation(12104030, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 7022, 12104030, 8);
    
    EventValueOperation(12104030, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 7023, 12104020, 8);
    EventValueOperation(12104030, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 7023, 12104030, 8);
    
    EventValueOperation(12104030, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 7024, 12104020, 8);
    EventValueOperation(12104030, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 7024, 12104030, 8);
    
    EventValueOperation(12104030, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 7050, 12104020, 8);
    EventValueOperation(12104030, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 7050, 12104030, 8);
    
    EventValueOperation(12104030, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 7100, 12104020, 8);
    EventValueOperation(12104030, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 7100, 12104030, 8);
    
    EventValueOperation(12104030, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 7110, 12104020, 8);
    EventValueOperation(12104030, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 7110, 12104030, 8);
    
    EventValueOperation(12104030, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 7120, 12104020, 8);
    EventValueOperation(12104030, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 7120, 12104030, 8);
    
    EventValueOperation(12104030, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 7121, 12104020, 8);
    EventValueOperation(12104030, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 7121, 12104030, 8);
    
    EventValueOperation(12104030, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 7130, 12104020, 8);
    EventValueOperation(12104030, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 7130, 12104030, 8);
    
    EventValueOperation(12104030, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 7131, 12104020, 8);
    EventValueOperation(12104030, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 7131, 12104030, 8);
    
    EventValueOperation(12104030, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 7140, 12104020, 8);
    EventValueOperation(12104030, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 7140, 12104030, 8);
    
    EventValueOperation(12104030, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 7150, 12104020, 8);
    EventValueOperation(12104030, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 7150, 12104030, 8);
    
    EventValueOperation(12104030, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 7200, 12104020, 8);
    EventValueOperation(12104030, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 7200, 12104030, 8);
    
    RestartEvent();
});

// Buy/Sell Messenger_Lineup Expansion_Time Zone Flag
$Event(12101010, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(!CharacterType(10000, TargetType.Alive));
    if (EventFlag(9800)) {
        SetEventFlag(5900, ON);
    }
    if (EventFlag(9801)) {
        SetEventFlag(5901, ON);
    }
    if (EventFlag(9802)) {
        SetEventFlag(5902, ON);
    }
    if (EventFlag(12801800)) {
        SetEventFlag(5903, ON);
    }
    if (EventFlag(12601800)) {
        SetEventFlag(5904, ON);
    }
    if (EventFlag(6603)) {
        BatchSetEventFlags(5900, 5904, ON);
    }
});

// Item Possession Judgment_XX
$Event(12100020, Default, function(X0_4, X4_4, X8_4) {
    SetNetworkSyncState(Disabled);
    EndIf(!CharacterType(10000, TargetType.Alive));
    if (X8_4 != 0) {
        SetEventFlag(X4_4, OFF);
    }
    WaitFor(PlayerHasItem(ItemType.Goods, X0_4));
    SetEventFlag(X4_4, ON);
});

// dress-up messenger_flag control_naked only
$Event(12105060, Restart, function() {
    SetNetworkSyncState(Disabled);
    EndIf(!CharacterType(10000, TargetType.Alive));
    SetEventFlag(12105061, OFF);
    WaitFor(EventFlag(72100140));
    SetEventFlag(12105061, ON);
    SetEventFlag(72100140, OFF);
    BatchSetEventFlags(6011, 6025, OFF);
    RotateCharacter(10000, 2100218, 101310, false);
    WaitFixedTimeSeconds(1);
    ForceAnimationPlayback(2100218, 7003, false, false, false);
    WaitFixedTimeFrames(39);
    ChangeCharacterDispmask(2100218, 20, OFF);
    ChangeCharacterDispmask(2100218, 21, OFF);
    ChangeCharacterDispmask(2100218, 22, OFF);
    ChangeCharacterDispmask(2100218, 23, OFF);
    ChangeCharacterDispmask(2100218, 24, OFF);
    ChangeCharacterDispmask(2100218, 25, OFF);
    ChangeCharacterDispmask(2100218, 26, OFF);
    ChangeCharacterDispmask(2100218, 27, OFF);
    ChangeCharacterDispmask(2100218, 28, OFF);
    ForceAnimationPlayback(2100218, 7004, false, false, false);
    WaitFixedTimeFrames(49);
    ForceAnimationPlayback(2100218, 7001, true, false, false);
    RestartEvent();
});

// Dress-up Messenger_Determine if you have at least one item
$Event(12105062, Default, function() {
    SetNetworkSyncState(Disabled);
    if (!EventFlag(12105063)) {
        ForceAnimationPlayback(2100218, 0, true, false, false);
        EndIf(!CharacterType(10000, TargetType.Alive));
        if (EventFlag(6011)) {
            ChangeCharacterDispmask(2100218, 20, ON);
        }
        if (EventFlag(6012)) {
            ChangeCharacterDispmask(2100218, 21, ON);
        }
        if (EventFlag(6013)) {
            ChangeCharacterDispmask(2100218, 22, ON);
        }
        if (EventFlag(6014)) {
            ChangeCharacterDispmask(2100218, 23, ON);
        }
        if (EventFlag(6015)) {
            ChangeCharacterDispmask(2100218, 24, ON);
        }
        if (EventFlag(6016)) {
            ChangeCharacterDispmask(2100218, 25, ON);
        }
        if (EventFlag(6017)) {
            ChangeCharacterDispmask(2100218, 26, ON);
        }
        if (EventFlag(6018)) {
            ChangeCharacterDispmask(2100218, 27, ON);
        }
        if (EventFlag(6019)) {
            ChangeCharacterDispmask(2100218, 28, ON);
        }
        WaitFor(
            EventFlag(6071)
                || EventFlag(6072)
                || EventFlag(6073)
                || EventFlag(6074)
                || EventFlag(6075)
                || EventFlag(6076)
                || EventFlag(6077)
                || EventFlag(6078)
                || EventFlag(6079)
                || EventFlag(6080)
                || EventFlag(6081)
                || EventFlag(6082)
                || EventFlag(6083)
                || EventFlag(6084)
                || EventFlag(6085));
        ForceAnimationPlayback(2100218, 7004, false, false, false);
        WaitFixedTimeFrames(89);
    }
L0:
    ForceAnimationPlayback(2100218, 7001, true, false, false);
    EndIf(!CharacterType(10000, TargetType.Alive));
    SetEventFlag(12105063, ON);
    WaitFor(
        !(EventFlag(6071)
            || EventFlag(6072)
            || EventFlag(6073)
            || EventFlag(6074)
            || EventFlag(6075)
            || EventFlag(6076)
            || EventFlag(6077)
            || EventFlag(6078)
            || EventFlag(6079)
            || EventFlag(6080)
            || EventFlag(6081)
            || EventFlag(6082)
            || EventFlag(6083)
            || EventFlag(6084)
            || EventFlag(6085)));
    SetEventFlag(12105063, OFF);
    ForceAnimationPlayback(2100218, 7003, false, false, false);
    WaitFixedTimeFrames(39);
    RestartEvent();
});

// Kisekae messenger_DLC validity judgment
$Event(12105064, Default, function() {
    SetNetworkSyncState(Disabled);
    ForceAnimationPlayback(2100232, 7053, true, false, false);
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(
        (EventFlag(6900) && !EventFlag(6071))
            || (EventFlag(6901) && !EventFlag(6072))
            || (EventFlag(6902) && !EventFlag(6073)));
    ForceAnimationPlayback(2100232, 7054, false, false, false);
    WaitFixedTimeFrames(30);
    WaitFixedTimeFrames(79);
    ForceAnimationPlayback(2100232, 7051, true, false, false);
    WaitFor(CharacterType(10000, TargetType.Alive) && ActionButtonInArea(6025, 2100232));
    GotoIf(S0, EventFlag(6071));
    GotoIf(S0, !EventFlag(6900));
    AwardItemLot(2100900);
    SetEventFlag(6071, ON);
S0:
    GotoIf(S1, EventFlag(6072));
    GotoIf(S1, !EventFlag(6901));
    AwardItemLot(2100910);
    SetEventFlag(6072, ON);
S1:
    GotoIf(S2, EventFlag(6073));
    GotoIf(S2, !EventFlag(6902));
    AwardItemLot(2100920);
    SetEventFlag(6073, ON);
S2:
    ForceAnimationPlayback(2100232, 7052, false, false, false);
    WaitFixedTimeFrames(74);
L0:
    ChangeCharacterEnableState(2100232, Disabled);
});

// dress-up messenger_flag control_other than naked
$Event(12105070, Restart, function(X0_4, X4_4, X8_1) {
    SetNetworkSyncState(Disabled);
    EndIf(!CharacterType(10000, TargetType.Alive));
    SetEventFlag(12105061, OFF);
    WaitFor(EventFlag(X0_4));
    SetEventFlag(12105061, ON);
    SetEventFlag(X0_4, OFF);
    BatchSetEventFlags(6011, 6025, OFF);
    RotateCharacter(10000, 2100218, 101310, false);
    WaitFixedTimeSeconds(1);
    ForceAnimationPlayback(2100218, 7003, false, false, false);
    WaitFixedTimeFrames(39);
    SetEventFlag(X4_4, ON);
    ChangeCharacterDispmask(2100218, 20, OFF);
    ChangeCharacterDispmask(2100218, 21, OFF);
    ChangeCharacterDispmask(2100218, 22, OFF);
    ChangeCharacterDispmask(2100218, 23, OFF);
    ChangeCharacterDispmask(2100218, 24, OFF);
    ChangeCharacterDispmask(2100218, 25, OFF);
    ChangeCharacterDispmask(2100218, 26, OFF);
    ChangeCharacterDispmask(2100218, 27, OFF);
    ChangeCharacterDispmask(2100218, 28, OFF);
    ChangeCharacterDispmask(2100218, X8_1, ON);
    ForceAnimationPlayback(2100218, 7004, false, false, false);
    WaitFixedTimeFrames(49);
    ForceAnimationPlayback(2100218, 7001, true, false, false);
    RestartEvent();
});

// Headstone warp function (warp to a lamp)
$Event(12107000, Default, function(X0_4, X4_4, X8_4) {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(EventFlag(X0_4));
    if (EventFlag(12100761)) {
        SpawnOneshotSFX(TargetEntityType.Character, 10000, 236, 140);
        WaitFixedTimeSeconds(2);
    }
    else {
        RotateCharacter(10000, X4_4, 101164, false);
        WaitFixedTimeSeconds(4);
    }
    // WarpPlayerToRespawnPoint(X8_4);
    SetPlayerRespawnPoint(X8_4);
    SetSpEffect(10000, 2101, false);
});

// Warp OBJ_Warp to Dungeon_First Half_XX
$Event(12107100, Default, function(X0_4, X4_4, X8_4) {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(EventFlag(X0_4));
    if (EventFlag(12100761)) {
        SpawnOneshotSFX(TargetEntityType.Character, 10000, 236, 140);
        WaitFixedTimeSeconds(2);
    }
    else {
        RotateCharacter(10000, X4_4, 101164, false);
        WaitFixedTimeSeconds(4);
    }
    SetEventFlag(9020, OFF);
    SetEventFlag(9021, OFF);
    SetEventFlag(9022, OFF);
    SetEventFlag(9023, OFF);
    SetEventFlag(9024, OFF);
    SetEventFlag(9025, OFF);
    SetEventFlag(9026, OFF);
    SetEventFlag(X8_4, ON);
    SetEventFlag(X0_4, OFF);
    EndEvent();
});

// Warp OBJ_Warp to Dungeon_Late_XX
$Event(12107200, Default, function(X0_4, X4_4, X8_4) {
    WaitFor(EventFlag(X0_4));
    SetEventFlag(X0_4, OFF);
    WarpPlayerToRespawnPoint(X4_4);
    SetEventFlag(X8_4, ON);
});

// Remove DLC_XX
$Event(3500, Default, function(X0_4, X4_4, X8_4, X12_4) {
    SetNetworkSyncState(Disabled);
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(!EventFlag(X4_4));
    RemoveItemFromPlayer(ItemType.Goods, X0_4, 99);
    SetEventFlag(X8_4, OFF);
    SetEventFlag(X12_4, OFF);
});

// Remove DLC_03
$Event(3503, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(!EventFlag(6899));
    RemoveItemFromPlayer(ItemType.Goods, 4311, 99);
    SetEventFlag(50000100, OFF);
    SetEventFlag(12101029, OFF);
    SetEventFlag(13407810, OFF);
    SetEventFlag(13407830, OFF);
    SetEventFlag(13407850, OFF);
    SetEventFlag(13407870, OFF);
    SetEventFlag(13507810, OFF);
    SetEventFlag(13507830, OFF);
    SetEventFlag(13507850, OFF);
    SetEventFlag(13607810, OFF);
    SetEventFlag(13607830, OFF);
    SetEventFlag(13607850, OFF);
    SetEventFlag(73400200, OFF);
    SetEventFlag(73400201, OFF);
    SetEventFlag(73400202, OFF);
    SetEventFlag(73400203, OFF);
    SetEventFlag(73500200, OFF);
    SetEventFlag(73500201, OFF);
    SetEventFlag(73500202, OFF);
    SetEventFlag(73600200, OFF);
    SetEventFlag(73600201, OFF);
    SetEventFlag(73600202, OFF);
    WaitFor(PlayerInMap(34, 0) || PlayerInMap(35, 0) || PlayerInMap(36, 0));
    WarpPlayerToRespawnPoint(2102961);
});

// always raised, never raised flag
$Event(6002, Restart, function() {
    SetEventFlag(6000, ON);
    SetEventFlag(6001, OFF);
});

// Trading messenger_reflect dungeon shop purchases in base shop sales_XX
$Event(5500, Restart, function(X0_4) {
    SetNetworkSyncState(Disabled);
    EndIf(!CharacterType(10000, TargetType.Alive));
    EndIf(ThisEventSlot());
    WaitFor(PlayerHasItem(ItemType.Weapon, X0_4));
    WaitFixedTimeSeconds(0);
});

// Buy/Sell Messenger_Lineup Expansion_Beast Claw
$Event(6680, Default, function() {
    SetNetworkSyncState(Disabled);
    if (CharacterType(10000, TargetType.Alive)) {
        EndIf(EventFlag(6680));
        WaitFor(
            PlayerHasItemIncludingBBox(ItemType.Weapon, 9000000)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 9000100)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 9000200)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 9000300)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 9000400)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 9000500)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 9000600)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 9000700)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 9000800)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 9000900)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 9001000));
        SetEventFlag(6680, ON);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(6001));
    WaitFixedTimeSeconds(0);
});

// Trading messenger_Lineup expansion_Cannon
$Event(6681, Default, function() {
    SetNetworkSyncState(Disabled);
    if (CharacterType(10000, TargetType.Alive)) {
        EndIf(EventFlag(6681));
        WaitFor(
            PlayerHasItemIncludingBBox(ItemType.Weapon, 15000000)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 15000100)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 15000200)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 15000300)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 15000400)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 15000500)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 15000600)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 15000700)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 15000800)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 15000900)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 15001000));
        SetEventFlag(6681, ON);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(6001));
    WaitFixedTimeSeconds(0);
});

// Buy/Sell Messenger_Lineup Expansion_Beast Hunting Torch
$Event(6682, Default, function() {
    SetNetworkSyncState(Disabled);
    if (CharacterType(10000, TargetType.Alive)) {
        EndIf(EventFlag(6682));
        WaitFor(
            PlayerHasItemIncludingBBox(ItemType.Weapon, 20000000)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 20000100)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 20000200)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 20000300)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 20000400)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 20000500)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 20000600)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 20000700)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 20000800)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 20000900)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 20001000));
        SetEventFlag(6682, ON);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(6001));
    WaitFixedTimeSeconds(0);
});

// Buy/Sell Messenger_Lineup Expansion_Beast Hunting Curved Sword
$Event(6683, Default, function() {
    SetNetworkSyncState(Disabled);
    if (CharacterType(10000, TargetType.Alive)) {
        EndIf(EventFlag(6683));
        WaitFor(
            PlayerHasItemIncludingBBox(ItemType.Weapon, 23000000)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 23000100)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 23000200)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 23000300)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 23000400)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 23000500)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 23000600)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 23000700)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 23000800)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 23000900)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 23001000));
        SetEventFlag(6683, ON);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(6001));
    WaitFixedTimeSeconds(0);
});

// Trading messenger_Expansion of line-up_Beast cut
$Event(6684, Default, function() {
    SetNetworkSyncState(Disabled);
    if (CharacterType(10000, TargetType.Alive)) {
        EndIf(EventFlag(6684));
        WaitFor(
            PlayerHasItemIncludingBBox(ItemType.Weapon, 24000000)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 24000100)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 24000200)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 24000300)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 24000400)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 24000500)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 24000600)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 24000700)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 24000800)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 24000900)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 24001000));
        SetEventFlag(6684, ON);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(6001));
    WaitFixedTimeSeconds(0);
});

// Buy/Sell Messenger_Lineup Expansion_Church Stake
$Event(6685, Default, function() {
    SetNetworkSyncState(Disabled);
    if (CharacterType(10000, TargetType.Alive)) {
        EndIf(EventFlag(6685));
        WaitFor(
            PlayerHasItemIncludingBBox(ItemType.Weapon, 30000000)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 30000100)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 30000200)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 30000300)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 30000400)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 30000500)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 30000600)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 30000700)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 30000800)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 30000900)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 30001000));
        SetEventFlag(6685, ON);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(6001));
    WaitFixedTimeSeconds(0);
});

// Trading messenger_Lineup expansion_Simon's bow sword
$Event(6686, Default, function() {
    SetNetworkSyncState(Disabled);
    if (CharacterType(10000, TargetType.Alive)) {
        EndIf(EventFlag(6686));
        WaitFor(
            PlayerHasItemIncludingBBox(ItemType.Weapon, 32000000)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 32000100)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 32000200)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 32000300)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 32000400)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 32000500)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 32000600)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 32000700)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 32000800)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 32000900)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 32001000));
        SetEventFlag(6686, ON);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(6001));
    WaitFixedTimeSeconds(0);
});

// Trading messenger_Lineup expansion_Sacred sword of moonlight
$Event(6687, Default, function() {
    SetNetworkSyncState(Disabled);
    if (CharacterType(10000, TargetType.Alive)) {
        EndIf(EventFlag(6687));
        WaitFor(
            PlayerHasItemIncludingBBox(ItemType.Weapon, 26000000)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 26000100)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 26000200)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 26000300)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 26000400)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 26000500)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 26000600)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 26000700)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 26000800)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 26000900)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 26001000));
        SetEventFlag(6687, ON);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(6001));
    WaitFixedTimeSeconds(0);
});

// Buy/Sell Messenger_Expansion Lineup_Falling Leaves
$Event(6688, Default, function() {
    SetNetworkSyncState(Disabled);
    if (CharacterType(10000, TargetType.Alive)) {
        EndIf(EventFlag(6688));
        WaitFor(
            PlayerHasItemIncludingBBox(ItemType.Weapon, 27000000)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 27000100)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 27000200)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 27000300)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 27000400)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 27000500)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 27000600)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 27000700)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 27000800)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 27000900)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 27001000));
        SetEventFlag(6688, ON);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(6001));
    WaitFixedTimeSeconds(0);
});

// Trading messenger_Lineup expansion_Rotating saw
$Event(6689, Default, function() {
    SetNetworkSyncState(Disabled);
    if (CharacterType(10000, TargetType.Alive)) {
        EndIf(EventFlag(6689));
        WaitFor(
            PlayerHasItemIncludingBBox(ItemType.Weapon, 31000000)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 31000100)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 31000200)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 31000300)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 31000400)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 31000500)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 31000600)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 31000700)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 31000800)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 31000900)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 31001000));
        SetEventFlag(6689, ON);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(6001));
    WaitFixedTimeSeconds(0);
});

// Buy/Sell Messenger_Lineup Expansion_Explosive Hammer
$Event(6690, Default, function() {
    SetNetworkSyncState(Disabled);
    if (CharacterType(10000, TargetType.Alive)) {
        EndIf(EventFlag(6690));
        WaitFor(
            PlayerHasItemIncludingBBox(ItemType.Weapon, 28000000)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 28000100)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 28000200)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 28000300)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 28000400)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 28000500)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 28000600)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 28000700)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 28000800)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 28000900)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 28001000));
        SetEventFlag(6690, ON);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(6001));
    WaitFixedTimeSeconds(0);
});

// Buy/Sell Messenger_Lineup Expansion_Bloodletting Hammer
$Event(6691, Default, function() {
    SetNetworkSyncState(Disabled);
    if (CharacterType(10000, TargetType.Alive)) {
        EndIf(EventFlag(6691));
        WaitFor(
            PlayerHasItemIncludingBBox(ItemType.Weapon, 29000000)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 29000100)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 29000200)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 29000300)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 29000400)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 29000500)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 29000600)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 29000700)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 29000800)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 29000900)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 29001000));
        SetEventFlag(6691, ON);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(6001));
    WaitFixedTimeSeconds(0);
});

// Trading messenger_Lineup expansion_Small Amen arm
$Event(6692, Default, function() {
    SetNetworkSyncState(Disabled);
    if (CharacterType(10000, TargetType.Alive)) {
        EndIf(EventFlag(6692));
        WaitFor(
            PlayerHasItemIncludingBBox(ItemType.Weapon, 25000000)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 25000100)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 25000200)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 25000300)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 25000400)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 25000500)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 25000600)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 25000700)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 25000800)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 25000900)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 25001000));
        SetEventFlag(6692, ON);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(6001));
    WaitFixedTimeSeconds(0);
});

// Buy/Sell Messenger_Lineup Expansion_Gose's Parasite
$Event(6693, Default, function() {
    SetNetworkSyncState(Disabled);
    if (CharacterType(10000, TargetType.Alive)) {
        EndIf(EventFlag(6693));
        WaitFor(
            PlayerHasItemIncludingBBox(ItemType.Weapon, 38000000)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 38000100)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 38000200)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 38000300)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 38000400)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 38000500)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 38000600)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 38000700)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 38000800)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 38000900)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 38001000));
        SetEventFlag(6693, ON);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(6001));
    WaitFixedTimeSeconds(0);
});

// Trading messenger_Lineup expansion_Gatling gun
$Event(6694, Default, function() {
    SetNetworkSyncState(Disabled);
    if (CharacterType(10000, TargetType.Alive)) {
        EndIf(EventFlag(6694));
        WaitFor(
            PlayerHasItemIncludingBBox(ItemType.Weapon, 33000000)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 33000100)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 33000200)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 33000300)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 33000400)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 33000500)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 33000600)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 33000700)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 33000800)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 33000900)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 33001000));
        SetEventFlag(6694, ON);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(6001));
    WaitFixedTimeSeconds(0);
});

// Trading messenger_Lineup expansion_Church cannon
$Event(6695, Default, function() {
    SetNetworkSyncState(Disabled);
    if (CharacterType(10000, TargetType.Alive)) {
        EndIf(EventFlag(6695));
        WaitFor(
            PlayerHasItemIncludingBBox(ItemType.Weapon, 35000000)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 35000100)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 35000200)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 35000300)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 35000400)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 35000500)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 35000600)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 35000700)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 35000800)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 35000900)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 35001000));
        SetEventFlag(6695, ON);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(6001));
    WaitFixedTimeSeconds(0);
});

// Buy/Sell Messenger_Lineup Expansion_Garasha's Fist
$Event(6696, Default, function() {
    SetNetworkSyncState(Disabled);
    if (CharacterType(10000, TargetType.Alive)) {
        EndIf(EventFlag(6696));
        WaitFor(
            PlayerHasItemIncludingBBox(ItemType.Weapon, 34000000)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 34000100)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 34000200)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 34000300)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 34000400)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 34000500)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 34000600)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 34000700)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 34000800)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 34000900)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 34001000));
        SetEventFlag(6696, ON);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(6001));
    WaitFixedTimeSeconds(0);
});

// Buy/Sell Messenger_Lineup Expansion_Lake Shield
$Event(6697, Default, function() {
    SetNetworkSyncState(Disabled);
    if (CharacterType(10000, TargetType.Alive)) {
        EndIf(EventFlag(6697));
        WaitFor(
            PlayerHasItemIncludingBBox(ItemType.Weapon, 19100000)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 19100100)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 19100200)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 19100300)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 19100400)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 19100500)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 19100600)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 19100700)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 19100800)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 19100900)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 19101000));
        SetEventFlag(6697, ON);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(6001));
    WaitFixedTimeSeconds(0);
});

// Alliance_item use 1
$Event(6788, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(CharacterHasSpEffect(10000, 6141));
    StoreItemAmountHeldInEventValue(ItemType.Goods, 1700, 6780, 8);
    WaitFixedTimeSeconds(0.1);
    RestartEvent();
});

// Federation_item use 2
$Event(6789, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(CharacterHasSpEffect(10000, 6143));
    StoreItemAmountHeldInEventValue(ItemType.Goods, 1700, 6790, 8);
    EventValueOperation(6780, 8, 0, 6790, 8, CalculationType.Sub);
    EventValueOperation(6800, 9, 0, 6780, 8, CalculationType.Add);
    if (EventValue(6800, 9) >= 255) {
        EventValueOperation(6800, 9, 255, 0, 1, CalculationType.Assign);
    }
    WaitFixedTimeSeconds(0.1);
    RestartEvent();
});

// Alliance_item usage X or more
$Event(6809, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(EventValue(6800, 9) >= 1);
    SetEventFlag(6810, ON);
    WaitFor(EventValue(6800, 9) >= 2);
    SetEventFlag(6811, ON);
    WaitFor(EventValue(6800, 9) >= 5);
    SetEventFlag(6812, ON);
});

// special effect when becoming the federation_master
$Event(6815, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(EventFlag(6813) && CharacterHasSpEffect(10000, 6142));
    SetSpEffect(10000, 6150, false);
    WaitFor(!EventFlag(6813) || !CharacterHasSpEffect(10000, 6142));
    ClearSpEffect(10000, 6150);
    RestartEvent();
});

// Federation_special effect after obtaining a staff
$Event(6816, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(EventFlag(6814) && CharacterHasSpEffect(10000, 6142));
    SetSpEffect(10000, 6140, false);
    WaitFor(!EventFlag(6814) || !CharacterHasSpEffect(10000, 6142));
    ClearSpEffect(10000, 6140);
    RestartEvent();
});

// Warp OBJ_Registration_XX
// InitializeEvent(5, 7000, 2300950, 2301950, 999, 12307800, -1);
$Event(7000, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    SetNetworkSyncState(Disabled);
    ChangeCharacterEnableState(X0_4, Disabled);
    DeactivateObject(X4_4, Disabled);
    WaitFor(CharacterBackreadStatus(X0_4));
    if (!EventFlag(X8_4)) {
        ChangeCharacterEnableState(X0_4, Disabled);
        DeactivateObject(X4_4, Disabled);
        WaitFor(EventFlag(X8_4) && !EventFlag(X16_4));
        DeactivateObject(X4_4, Enabled);
        ChangeCharacterEnableState(X0_4, Enabled);
        SpawnOneshotSFX(TargetEntityType.Object, X4_4, 100, 100330);
    }
L0: 
    DeactivateObject(X4_4, Enabled);
    ChangeCharacterEnableState(X0_4, Enabled);
    if (!EventFlag(12102200)) {
        RegisterHealingFountain(X12_4, X4_4, 0, 0, 0, 0);
    }
    else {
        RegisterHealingFountain(999, X4_4, 0, 0, 0, 0);
    }
});

// Warp OBJ_Start_XX
$Event(7100, Default, function(X0_4, X4_4) {
    EndIf(EventFlag(X0_4));
    WaitFor(EventFlag(X0_4));
    RotateCharacter(10000, X4_4, 101170, false);
    WaitFixedTimeFrames(32);
    InitializeWarpObject(X4_4);
    EndIf(EventFlag(6715));
    WaitFixedTimeFrames(58);
    SetEventFlag(70000030, ON);
    EndIf(!CharacterType(10000, TargetType.Alive));
    SetEventFlag(6715, ON);
});

// Warp OBJ_Warp to Base_XX
$Event(7200, Default, function(X0_4, X4_4, X8_4) {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(EventFlag(X0_4));
    SetEventFlag(X0_4, OFF);
    if (!EventFlag(12100761)) {
        RotateCharacter(10000, X4_4, 101160, false);
        WaitFixedTimeSeconds(1);
        SpawnOneshotSFX(TargetEntityType.Object, X4_4, 100, 100320);
        SpawnOneshotSFX(TargetEntityType.Character, 10000, 236, 140);
        WaitFixedTimeSeconds(3);
    }
    else {
        SpawnOneshotSFX(TargetEntityType.Object, X4_4, 100, 100320);
        SpawnOneshotSFX(TargetEntityType.Character, 10000, 236, 140);
        WaitFixedTimeSeconds(2);
    }
    if (EventFlag(9401)) {
        // WarpPlayerToRespawnPoint(X8_4);
        SetPlayerRespawnPoint(X8_4);
        SetSpEffect(10000, 2101, false);
        EndEvent();
    }
    WarpPlayerToRespawnPoint(2102962);
});

// Warp OBJ_Warp from Base_XX
$Event(7300, Default, function(X0_4, X4_4) {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(EventFlag(X0_4));
    WaitFixedTimeFrames(1);
    SpawnOneshotSFX(TargetEntityType.Object, X4_4, 100, 100321);
    InitializeWarpObject(X4_4);
    SetEventFlag(X0_4, OFF);
});

// move bloodstain for rematches
$Event(7500, Default, function(X0_4, X4_4) {
    WaitFixedTimeSeconds(1);
    MoveBloodstainAndDroppedItems(X0_4, X4_4);
});

// Multi Confinement Wall_XX
$Event(7600, Default, function(X0_4, X4_4) {
    SetNetworkSyncState(Disabled);
    DeactivateObject(X0_4, Disabled);
    DeleteMapSFX(X4_4, true);
    WaitFor(
        HasMultiplayerState(MultiplayerState.ConnectingtoMultiplayer)
            || HasMultiplayerState(MultiplayerState.Multiplayer));
    DeactivateObject(X0_4, Enabled);
    SpawnMapSFX(X4_4);
    WaitFor(
        !(HasMultiplayerState(MultiplayerState.ConnectingtoMultiplayer)
            || HasMultiplayerState(MultiplayerState.Multiplayer)));
    RestartEvent();
});

const effect_id = 1000030;

// rematch boss triggered
$Event(7700, Default, function(X0_4, X4_4, X8_4, X12_4) { // event_flag_11, event_flag_12, spawn_point, fog_effect
    WaitFor(EventFlag(X0_4));
    SetEventFlag(X0_4, OFF);
    SetEventFlag(X4_4, ON);
    SetSpEffect(10000, 4681, false);
    RequestCharacterAnimationReset(10000, Interpolation.Interpolated);
    ForceAnimationPlayback(10000, 101161, false, false, false);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 236, X12_4);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 240, X12_4);
    WaitFixedTimeFrames(59);
    // WarpPlayerToRespawnPoint(X8_4);
    SetPlayerRespawnPoint(X8_4);
    SetSpEffect(10000, 2101, false);
});

// rematch victory
$Event(7800, Default, function(X0_4, X4_4) {
    RequestCharacterAnimationReset(10000, Interpolation.Interpolated);
    ForceAnimationPlayback(10000, 101161, false, false, false);
    
    // 15: super fx
    // 240: centered, subtle
    // 236 or 243?: ground
    // PlaySE(10000, SoundType.sSFX, 7012);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 236, X4_4);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 240, X4_4);
    // SpawnOneshotSFX(TargetEntityType.Character, 10000, 240, 928028);
    // SpawnOneshotSFX(TargetEntityType.Character, 10000, 15, effect_id);
    
    WaitFixedTimeFrames(59);
    
    if (EventFlag(12100750) && EventFlag(12100963)) { // rematch started from broken lamp and return to dream enabled
        WarpPlayerToRespawnPoint(2102969);
    }
    else {
        // WarpPlayerToRespawnPoint(X0_4);
        SetPlayerRespawnPoint(X0_4);
        SetSpEffect(10000, 2101, false);
    }
});

// return/quick warp to boss
$Event(7900, Default, function(X0_4, X4_4, X8_1, X12_1, X16_4) {
    WaitFor(EventFlag(X0_4)); // 12801899
    SetEventFlag(X0_4, OFF);
    SetEventFlag(7999, ON);
    WaitFixedTimeFrames(1);
    SetEventFlag(X16_4, OFF); // 8540
    
    if (!AnyBatchEventFlags(8500, 8599)) {
        ForceAnimationPlayback(10000, 101170, false, false, false);
        WaitFixedTimeSeconds(2);
    }
    else {
        WaitFixedTimeSeconds(0.5);
    }
    DummyPlayCutsceneAndWarpPlayer(X4_4, X8_1, X12_1);
    SetCharacterAnimationState(10000, Enabled);
    SetCharacterTeamType(10000, TeamType.Host);
    ActivateHit(10000, Enabled);
    ForceAnimationPlayback(10000, 101282, false, false, false);
    RestartEvent();
});

// kindle
// this_event_slot, lamp_kindle_flag (12121100)
$Event(8100, Default, function(X0_4, X4_4) {
    const this_event_slot = X0_4;
    const lamp_kindle_flag = X4_4;
    SetEventFlag(this_event_slot, OFF);
    WaitFor(ThisEventSlot());
    if (PlayerInsightAmount() == 0) {
        // no insight
        DisplayGenericDialog(200175, PromptType.OKCANCEL, NumberofOptions.OneButton, 10000, 3);
        RestartEvent();
    }
    if (EventValue(lamp_kindle_flag, 2) == 3) {
        // already maxed
        DisplayGenericDialog(200171, PromptType.OKCANCEL, NumberofOptions.OneButton, 10000, 3);
    }
    else {
        if (EventValue(lamp_kindle_flag, 2) == 1 && !PlayerHasItemIncludingBBox(ItemType.Goods, 4002)) {
            // need rite of kindling
            DisplayGenericDialog(200169, PromptType.OKCANCEL, NumberofOptions.OneButton, 10000, 3);
        }
        else {
            SetSpEffect(10000, 4681, false); // take insight
            IncrementEventValue(lamp_kindle_flag, 2, 3);
            if (EventValue(lamp_kindle_flag, 2) == 3) {
                // max kindling reached
                DisplayGenericDialog(200171, PromptType.OKCANCEL, NumberofOptions.OneButton, 10000, 3);
            }
            else {
                // increased
                DisplayGenericDialog(200170, PromptType.OKCANCEL, NumberofOptions.OneButton, 10000, 3);
            }
        }
    }
    RestartEvent();
});

// reset statuses (poison, etc.) and restock bullets and vials
$Event(8300, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    const spawn_checker_region = X0_4;
    const bypass_spawn_checker = X4_4;
    const lamp_kindle_flag = X8_4;
    const hidden_region = X12_4;
    const hunt_region = X16_4;
    const kindling_enabled_flag = 12100851;
    const hunt_enabled_flag = 12100855;
    const restock_enabled_flag = 12100862;
    kindling_enabled = EventFlag(kindling_enabled_flag);
    hunt_enabled = EventFlag(hunt_enabled_flag);
    restock_enabled = EventFlag(restock_enabled_flag);
    
    WaitFor(InArea(10000, spawn_checker_region) || EventFlag(1509) || EventFlag(bypass_spawn_checker));
    if (EventFlag(1509)) {
        EndEvent();
    }
    SetEventFlag(1509, ON);
    SetSpEffect(10000, 110, false);
    SetSpEffect(10000, 111, false);
    SetSpEffect(10000, 112, false);
    SetSpEffect(10000, 113, false);
    SetSpEffect(10000, 114, false);
    SetSpEffect(10000, 115, false);
    SetSpEffect(10000, 116, false);
    
    if (restock_enabled.Passed) {
        
        // EventValueOperation stores value in baseEventFlagId, the operand is only used if baseEventFlagIdOperand = 0
        // baseEventFlagIdOperand or operand is applied to baseEventFlagId, e.g.
        //     EventValueOperation(<10>, 8, 0, <2>, 8, CalculationType.Sub) == 8;
        
        if (!EventFlag(kindling_enabled_flag) || EventValue(lamp_kindle_flag, 2) == 3) { // kindling disabled or full kindle
            MoveBloodstainAndDroppedItems(spawn_checker_region, hunt_region);
            RemoveItemFromPlayer(ItemType.Goods, 900, 255);
            RemoveItemFromPlayer(ItemType.Goods, 1000, 255);
            EventValueOperation(12104050, 8, 1, 0, 0, CalculationType.Assign);
            DirectlyGivePlayerItem(ItemType.Goods, 900, 12104050, 8);
            DirectlyGivePlayerItem(ItemType.Goods, 1000, 12104050, 8);
            EventValueOperation(12104050, 8, 255, 0, 0, CalculationType.Assign);
            DirectlyGivePlayerItem(ItemType.Goods, 900, 12104050, 8);
            DirectlyGivePlayerItem(ItemType.Goods, 1000, 12104050, 8);
            MoveBloodstainAndDroppedItems(spawn_checker_region, hidden_region);
            MoveBloodstainAndDroppedItems(hunt_region, spawn_checker_region);
        }
        else { // kindling enabled and not full kindle
            StoreItemAmountHeldInEventValue(ItemType.Goods, 900, 12104030, 8);
            StoreItemAmountHeldInEventValue(ItemType.Goods, 1000, 12104040, 8);
            
            if (EventValue(lamp_kindle_flag, 2) == 0 && EventValue(12104030, 8) < 5) {
                EventValueOperation(12104050, 8, 5, 0, 0, CalculationType.Assign);
                EventValueOperation(12104050, 8, 0, 12104030, 8, CalculationType.Sub);
                DirectlyGivePlayerItem(ItemType.Goods, 900, 12104050, 8);
            }
            else if (EventValue(lamp_kindle_flag, 2) == 1 && EventValue(12104030, 8) < 10) {
                EventValueOperation(12104050, 8, 10, 0, 0, CalculationType.Assign);
                EventValueOperation(12104050, 8, 0, 12104030, 8, CalculationType.Sub);
                DirectlyGivePlayerItem(ItemType.Goods, 900, 12104050, 8);
            }
            else if (EventValue(lamp_kindle_flag, 2) == 2 && EventValue(12104030, 8) < 15) {
                EventValueOperation(12104050, 8, 15, 0, 0, CalculationType.Assign);
                EventValueOperation(12104050, 8, 0, 12104030, 8, CalculationType.Sub);
                DirectlyGivePlayerItem(ItemType.Goods, 900, 12104050, 8);
            }
            
            if (EventValue(lamp_kindle_flag, 2) == 0 && EventValue(12104040, 8) < 5) {
                EventValueOperation(12104050, 8, 5, 0, 0, CalculationType.Assign);
                EventValueOperation(12104050, 8, 0, 12104040, 8, CalculationType.Sub);
                DirectlyGivePlayerItem(ItemType.Goods, 1000, 12104050, 8);
            }
            else if (EventValue(lamp_kindle_flag, 2) == 1 && EventValue(12104040, 8) < 10) {
                EventValueOperation(12104050, 8, 10, 0, 0, CalculationType.Assign);
                EventValueOperation(12104050, 8, 0, 12104040, 8, CalculationType.Sub);
                DirectlyGivePlayerItem(ItemType.Goods, 1000, 12104050, 8);
            }
            else if (EventValue(lamp_kindle_flag, 2) == 2 && EventValue(12104040, 8) < 15) {
                EventValueOperation(12104050, 8, 15, 0, 0, CalculationType.Assign);
                EventValueOperation(12104050, 8, 0, 12104040, 8, CalculationType.Sub);
                DirectlyGivePlayerItem(ItemType.Goods, 1000, 12104050, 8);
            }
        }
    }
});

// rest
$Event(8500, Default, function(X0_4, X4_4, X8_4) {
    SetEventFlag(X0_4, OFF); // this event slot
    WaitFixedTimeFrames(1);
    if (EventFlag(1510)) { // a chalice menu has been opened
        WaitFixedTimeSeconds(0.5);
        SetEventFlag(1510, OFF);
        SetEventFlag(X0_4, ON);
    }
    WaitFor(ThisEventSlot()); // menu opened, trigger animation
    RotateCharacter(10000, X4_4, 101280, false);
    PlaySE(10000, SoundType.sSFX, 777777774);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 236, 140);
    SetCharacterAnimationState(10000, Disabled);
    SetCharacterTeamType(10000, TeamType.Baby);
    ActivateHit(10000, Disabled);
    WaitFor(!ThisEventSlot()); // wait for menu closed (8540)
    if (EventFlag(7999)) {
        SetEventFlag(7999, OFF);
        RestartEvent();
    }
    if (EventFlag(1510) ) {
        RestartEvent();
    }
    InitializeEvent(0, 8600, 0);
    SetEventFlag(X8_4, ON);
    RestartEvent();
});

// fade
$Event(8600, Default, function(){
    WaitFixedTimeSeconds(1);
    DisplayBanner(TextBannerType.StadiumLoss);
});

// Disable restock after spawn
$Event(8700, Default, function() {
    WaitFixedTimeSeconds(1);
    SetEventFlag(1509, ON);
});

// hide lamp during rematch
$Event(8800, Default, function(X0_4, X4_4, X8_4, X12_4) {
    WaitFor(EventFlag(X0_4));
    ChangeCharacterEnableState(X4_4, Disabled);
    DeactivateObject(X8_4, Disabled);
    WaitFixedTimeFrames(1);
    CharacterWarpRequest(X4_4, TargetEntityType.Area, X12_4, -1);
});

// EventFlag(12100964) // rematch on death is on
// InitializeEvent(cleric_beast_offset, 8900, cleric_beast_defeat-1, cleric_beast_lamp_id+1000, cleric_beast_defeat-2, 0, 0, cleric_beast_lamp_id+5000, area_id, block_id);
// Auto restart rematch if dead + move player to rematch point
$Event(8900, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_1, X28_1) {
    const auto_rematch_flag = X0_4;
    const lamp_spawn_point = X4_4;
    const rematch_death_occurred = X8_4;
    const distorted_in_progress = X12_4;
    const distorted_trigger = X16_4;
    const rematch_start_region = X20_4;
    const area_id = X24_1;
    const block_id = X28_1;
    EndIf(!ThisEventSlot()); // game's state is not in rematch mode
    DummyPlayCutsceneAndWarpPlayer(rematch_start_region, area_id, block_id);
    WaitFor(HPRatio(10000) <= 0);
    SetEventFlag(rematch_death_occurred, ON); // used for moving bloodstain
    if (EventFlag(12100864)) { // auto rematch enabled
        if (distorted_in_progress != 0 && EventFlag(distorted_in_progress)) { // if distorted memory
            SetEventFlag(distorted_trigger, ON);
        }
        SetEventFlag(auto_rematch_flag, ON);
        if (EventFlag(12100750) && EventFlag(12100963)) { // initiated from dream and death respawn location is dream
            SetEventFlag(12100850, ON); // flag to set respawn location back to dream
        }
        SetPlayerRespawnPoint(lamp_spawn_point);
        SetEventFlag(8950, ON);
    } // auto rematch disabled
    else {
        EndIf(!EventFlag(12100650));
        if (EventFlag(12100859)) { // death respawn location is boss lamp
            SetPlayerRespawnPoint(lamp_spawn_point);
        }
        else {
            SetPlayerRespawnPoint(2102969); // respawn at broken lamp
        }
    }
});

// Covenant BJ Unique Effect_XX
$Event(9030, Default, function(X0_4, X4_4) {
    SetNetworkSyncState(Disabled);
    WaitFor(CharacterHasSpEffect(10000, X0_4));
    SetSpEffect(10000, X4_4, false);
    WaitFor(!CharacterHasSpEffect(10000, X0_4));
    ClearSpEffect(10000, X4_4);
    RestartEvent();
});

// Pledge BJ Unique Effect_Cooperative Guests Only_XX
$Event(9035, Default, function(X0_4, X4_4) {
    SetNetworkSyncState(Disabled);
    WaitFor(CharacterHasSpEffect(10000, X0_4) && CharacterType(10000, TargetType.WhitePhantom));
    SetSpEffect(10000, X4_4, false);
    WaitFor(!(CharacterHasSpEffect(10000, X0_4) && CharacterType(10000, TargetType.WhitePhantom)));
    ClearSpEffect(10000, X4_4);
    RestartEvent();
});

// Get NPC item_XX
$Event(9040, Default, function(X0_4, X4_4) {
    EndIf(EventFlag(X0_4));
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(EventFlag(X0_4));
    AwardItemLot(X4_4);
});

// Obtain NPC item_any number of times_XX
$Event(9100, Default, function(X0_4, X4_4) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(EventFlag(X0_4));
    SetEventFlag(X0_4, OFF);
    AwardItemLot(X4_4);
    RestartEvent();
});

// Get NPC item_Circulation change_XX
$Event(9110, Default, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(EventFlag(X0_4));
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(EventFlag(X0_4));
    if (!EventFlag(X12_4)) {
        AwardItemLot(X4_4);
    } else {
        AwardItemLot(X8_4);
    }
});

// Return Enlightenment 1
$Event(9181, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(NumberOfClientsOfType(ClientType.Coop) >= 1);
    SetEventFlag(9185, OFF);
    WaitFor(!CharacterHasSpEffect(10000, 9000));
    RestartEvent();
});

// Return Enlightenment 2
$Event(9182, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    SetEventFlag(9184, OFF);
    WaitFor(
        HasMultiplayerState(MultiplayerState.ConnectingtoMultiplayer)
            && !HasMultiplayerState(MultiplayerState.Multiplayer));
    SetEventFlag(9184, ON);
    WaitFor(
        !HasMultiplayerState(MultiplayerState.ConnectingtoMultiplayer)
            || HasMultiplayerState(MultiplayerState.Multiplayer));
    RestartEvent();
});

// Return Enlightenment 3
$Event(9183, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(!CharacterHasSpEffect(10000, 9000) && EventFlag(9185) && !EventFlag(9184));
    SetSpEffect(10000, 4680, false);
    SetEventFlag(9185, OFF);
    WaitFixedTimeSeconds(2.5);
    DisplayMessage(100300, 0);
    RestartEvent();
});

// Determine if NPC summoning can be executed
$Event(9186, Default, function() {
    SetNetworkSyncState(Disabled);
    SetEventFlag(9187, ON);
    EndIf(!chrFlag);
    SetEventFlag(9187, ON);
    chrFlag = CharacterType(10000, TargetType.Alive) && PlayerInsightAmount() >= 1 && !EventFlag(6009);
    WaitFor(chrFlag);
    SetEventFlag(9187, OFF);
    WaitFor(!(PlayerInsightAmount() >= 1 && !EventFlag(6009)));
    RestartEvent();
});

// Special effects during host play
$Event(9190, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(HasMultiplayerState(MultiplayerState.Multiplayer) && HasMultiplayerState(MultiplayerState.Host));
    SetSpEffect(10000, 9001, false);
    WaitFor(!(HasMultiplayerState(MultiplayerState.Multiplayer) && HasMultiplayerState(MultiplayerState.Host)));
    ClearSpEffect(10000, 9001);
    RestartEvent();
});

// Multi-time zone unlock flag control_host
$Event(9191, Default, function() {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    if (!(PlayerInMap(29, 0) || PlayerInMap(26, 0) || PlayerInMap(33, 0))) {
        SetEventFlag(6500, ON);
        WaitFor(EventFlag(9800));
        SetEventFlag(6501, ON);
        WaitFor(EventFlag(9801));
        SetEventFlag(6502, ON);
        WaitFor(EventFlag(9802));
        SetEventFlag(6503, ON);
        EndEvent();
    }
L0:
    BatchSetEventFlags(6500, 6503, ON);
    EndEvent();
});

// Multi-time zone unlock flag control_guest
$Event(9192, Default, function() {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    SetEventFlag(6400, ON);
    WaitFor(EventFlag(9800));
    SetEventFlag(6401, ON);
    WaitFor(EventFlag(9801));
    SetEventFlag(6402, ON);
    WaitFor(EventFlag(9802));
    SetEventFlag(6403, ON);
});

// blood-drunk hunter
$Event(9193, Default, function() {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(EventFlag(6006));
    SetSpEffect(10000, 6130, false);
    WaitFor(!EventFlag(6006));
    ClearSpEffect(10000, 6130);
    RestartEvent();
});

// Use the hunter's bell Msg
$Event(9198, Default, function() {
    if (!EventFlag(9199)) {
        WaitFor(CharacterType(10000, TargetType.Alive) && CharacterHasSpEffect(10000, 9000));
        SetEventFlag(9185, ON);
        WaitFor(ElapsedSeconds(5));
        DisplayMessage(100001, 0);
        SetEventFlag(9199, ON);
    }
L0:
    WaitFor(CharacterType(10000, TargetType.Alive) && !CharacterHasSpEffect(10000, 9000));
    SetEventFlag(9199, OFF);
    RestartEvent();
});

// Auditory hallucinations with SAN values ​​_XX
$Event(9200, Default, function(X0_4) {
    SetNetworkSyncState(Disabled);
    SetMapSoundState(X0_4, Disabled);
    WaitFor(
        (PlayerInsightAmount() >= 60 || EventFlag(9802)) && !EventFlag(9180) && !EventFlag(9462) && !PlayerInMap(26, 0));
    SetMapSoundState(X0_4, Enabled);
    WaitFor(
        !((PlayerInsightAmount() >= 60 || EventFlag(9802))
            && !EventFlag(9180)
            && !EventFlag(9462)
            && !PlayerInMap(26, 0)));
    RestartEvent();
});

// Hear the killer's bell at the fishing village or clock tower
$Event(9215, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(EventFlag(9468) && !EventFlag(1730) && (PlayerInMap(35, 0) || PlayerInMap(36, 0)));
    WaitRandomTimeSeconds(60, 120);
    PlaySE(10000, SoundType.sSFX, 10307);
    WaitRandomTimeSeconds(2, 4);
    PlaySE(10000, SoundType.sSFX, 10307);
    RestartEvent();
});

// Appearance Widow_Appearance_XX
$Event(9220, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_1, X17_1) {
    if (EventFlag(X8_4)) {
        SetCharacterAIState(X0_4, Disabled);
        ForceAnimationPlayback(X0_4, 7010, false, false, false);
        EndEvent();
    }
L0:
    EndIf(EventFlag(X4_4));
    SetCharacterAIState(X0_4, Disabled);
    ForceAnimationPlayback(X0_4, 7010, true, false, false);
    WaitFor(
        IsOnline()
            && !EventFlag(X8_4)
            && !CharacterDead(X0_4)
            && !EventFlag(X12_4)
            && PlayerInMap(X16_1, X17_1)
            && ((CharacterType(10000, TargetType.Alive)
                && PlayersSoulLevel() >= 30
                && NumberOfClientsOfType(ClientType.Coop) >= 1)
                || CharacterHasSpEffect(10000, 9025)));
    WaitFor(RandomElapsedSeconds(10, 10));
    DisplayMessage(109000, 0);
    ForceAnimationPlayback(X0_4, 7011, false, false, false);
    WaitFixedTimeFrames(59);
    SetCharacterAIState(X0_4, Enabled);
    SetEventFlag(X4_4, ON);
});

// Appearance Widow_Ring Bell_XX
$Event(9240, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_1, X17_1) {
    EndIf(EventFlag(X8_4));
    WaitFor(
        EventFlag(X4_4)
            && !EventFlag(X12_4)
            && !EventFlag(X8_4)
            && PlayerInMap(X16_1, X17_1)
            && NumberOfClientsOfType(ClientType.Invader) == 0);
    WaitFor(CharacterType(10000, TargetType.Alive) && RandomElapsedSeconds(10, 10));
    SetSpEffect(10000, 9020, false);
    SetSpEffect(X0_4, 9100, false);
    RequestCharacterAIReplan(X0_4);
    SetEventFlag(X12_4, ON);
    DisplayMessage(100002, 0);
    RestartEvent();
});

// Appearing Widow_Stop Bell_XX
$Event(9260, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_1, X17_1) {
    EndIf(EventFlag(X8_4));
    WaitFor(
        EventFlag(X4_4)
            && EventFlag(X12_4)
            && (EventFlag(X8_4) || NumberOfClientsOfType(ClientType.Invader) >= 1 || !PlayerInMap(X16_1, X17_1)));
    WaitFor(CharacterType(10000, TargetType.Alive));
    ClearSpEffect(10000, 9020);
    ClearSpEffect(X0_4, 9100);
    RequestCharacterAIReplan(X0_4);
    SetEventFlag(X12_4, OFF);
    RestartEvent();
});

// Appearing Widow_Disappearing_XX
$Event(9280, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_1, X21_1) {
    EndIf(EventFlag(X8_4) || EventFlag(X12_4) || EventFlag(X16_4));
    hp = HPRatio(X0_4) == 0;
    flag = EventFlag(X16_4);
    WaitFor(EventFlag(X4_4) && PlayerInMap(X20_1, X21_1) && (hp || flag));
    SetEventFlag(X8_4, ON);
    if (!flag.Passed) {
        WaitFixedTimeSeconds(5);
        DisplayMessage(109001, 0);
        EndEvent();
    }
L0:
    SetCharacterAIState(X0_4, Disabled);
    ForceAnimationPlayback(X0_4, 7012, false, false, false);
    WaitFixedTimeFrames(88);
    ForceAnimationPlayback(X0_4, 7010, false, false, false);
});

// get SAN value
$Event(9350, Default, function(X0_4) {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    if (X0_4 != 1) {
        if (X0_4 != 2) {
            if (X0_4 != 3) {
                if (X0_4 != 4) {
                    if (X0_4 != 5) {
                        if (X0_4 != 6) {
                            if (X0_4 != 7) {
                                if (X0_4 != 8) {
                                    if (X0_4 != 9) {
                                        EndEvent();
                                    }
L9:
                                    SetSpEffect(10000, 4680, false);
                                    WaitFixedTimeFrames(10);
                                }
L8:
                                SetSpEffect(10000, 4680, false);
                                WaitFixedTimeFrames(10);
                            }
L7:
                            SetSpEffect(10000, 4680, false);
                            WaitFixedTimeFrames(10);
                        }
L6:
                        SetSpEffect(10000, 4680, false);
                        WaitFixedTimeFrames(10);
                    }
L5:
                    SetSpEffect(10000, 4680, false);
                    WaitFixedTimeFrames(10);
                }
L4:
                SetSpEffect(10000, 4680, false);
                WaitFixedTimeFrames(10);
            }
L3:
            SetSpEffect(10000, 4680, false);
            WaitFixedTimeFrames(10);
        }
L2:
        SetSpEffect(10000, 4680, false);
        WaitFixedTimeFrames(10);
    }
L1:
    SetSpEffect(10000, 4680, false);
    WaitFixedTimeFrames(10);
});

// Kill NPC with bloodline BJ_XX
$Event(9360, Default, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(ThisEventSlot());
    EndIf(EventFlag(X0_4));
    EndIf(EventFlag(X4_4));
    EndIf(EventFlag(X8_4));
    flag = EventFlag(X0_4) || EventFlag(X4_4) || EventFlag(X8_4);
    flag2 = EventFlag(X12_4);
    WaitFor(flag || flag2);
    EndIf(flag2.Passed);
    EndIf(
        !((CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && CharacterHasSpEffect(10000, 6100)));
    AwardItemsIncludingClients(5520);
});

// First death to base
$Event(9400, Default, function() {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    EndIf(EventFlag(12410999));
    EndIf(EventFlag(9401));
    if (!EventFlag(9402)) {
        WaitFor(PlayerInMap(24, 1));
    }
    SetEventFlag(9402, ON);
    WaitFor(CharacterDead(10000));
    SetPlayerRespawnPoint(2102962);
});

// First death with a SAN value of 1 or higher
$Event(9404, Default, function() {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    EndIf(ThisEvent());
    WaitFor(EventFlag(9401) && PlayerInsightAmount() >= 1 && CharacterDead(10000));
    SetPlayerRespawnPoint(2102961);
});

// Sacrifice warp_item when clearing university
$Event(9410, Default, function() {
    EndIf(ThisEvent());
    WaitFor(EventFlag(13201803) && CharacterType(10000, TargetType.Alive) && InArea(10000, 2802010));
    WaitFixedTimeSeconds(0);
    AwardItemLot(3200800);
});

// First Sacrifice_00
$Event(9421, Default, function() {
    EndIf(EventFlag(9423));
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(EventFlag(9420));
    SetPlayerRespawnPoint(2802959);
    SetEventFlag(9420, OFF);
});

// First Sacrifice_01
$Event(9422, Default, function() {
    EndIf(EventFlag(9423));
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    EndIf(!(EventFlag(9421) && PlayerInMap(28, 0)));
    SetEventFlag(9180, ON);
    PlayCutsceneToPlayer(28000010, CutscenePlayMode.SkippableWithFadeOut, 10000);
    WaitFixedTimeFrames(1);
    SetEventFlag(9180, OFF);
    SetEventFlag(9423, ON);
    SetSpEffect(10000, 4680, false);
});

// Get Covenant Body Gem_XX
$Event(9440, Default, function(X0_4, X4_4) {
    SetNetworkSyncState(Disabled);
    EndIf(ThisEventSlot());
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(EventFlag(X0_4));
    AwardItemLot(X4_4);
});

// Kill NPC with bloodline BJ 2_XX
$Event(9480, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(ThisEventSlot());
    EndIf(EventFlag(X0_4));
    EndIf(EventFlag(X4_4));
    EndIf(EventFlag(X8_4));
    flag = EventFlag(X0_4) || EventFlag(X4_4) || EventFlag(X8_4) || EventFlag(X12_4);
    flag2 = EventFlag(X16_4);
    WaitFor(flag || flag2);
    EndIf(flag2.Passed);
    EndIf(
        !((CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && CharacterHasSpEffect(10000, 6100)));
    AwardItemsIncludingClients(5520);
});

// Magic stone used_XX
$Event(9500, Default, function(X0_4, X4_4) {
    SetNetworkSyncState(Disabled);
    WaitFor(CharacterHasSpEffect(10000, X0_4));
    AwardItemsIncludingClients(X4_4);
    WaitFixedTimeSeconds(0.1);
    RestartEvent();
});

// base old man_random doze 2
$Event(9700, Default, function(X0_4, X4_4) {
    WaitFor(EventFlag(1021) && EventFlag(72100121) && !PlayerInMap(21, 0));
    BatchSetEventFlags(X0_4, X4_4, OFF);
    SetEventFlag(1022, ON);
});

// base old man_random doze 3
$Event(9701, Default, function(X0_4, X4_4) {
    WaitFor(EventFlag(1023) && EventFlag(72100123) && !PlayerInMap(21, 0));
    BatchSetEventFlags(X0_4, X4_4, OFF);
    SetEventFlag(1024, ON);
});

// base old man_random doze 4
$Event(9702, Default, function(X0_4, X4_4) {
    WaitFor(EventFlag(1025) && EventFlag(72100125) && !PlayerInMap(21, 0));
    BatchSetEventFlags(X0_4, X4_4, OFF);
    SetEventFlag(1026, ON);
});

// base old man_random doze 5
$Event(9703, Default, function(X0_4, X4_4) {
    WaitFor(EventFlag(1026) && EventFlag(9802) && EventFlag(72100128) && !PlayerInMap(21, 0));
    BatchSetEventFlags(X0_4, X4_4, OFF);
    SetEventFlag(1027, ON);
});

// doll heroine_welcome home
$Event(9710, Default, function(X0_4, X4_4) {
    WaitFor(EventFlag(1000) && EventFlag(72100110) && !PlayerInMap(21, 0));
    BatchSetEventFlags(X0_4, X4_4, OFF);
    SetEventFlag(1001, ON);
});

// Avenger_Warp OBJ usage limit_Gascoin room
$Event(9720, Default, function() {
    GotoIf(L0, ThisEvent());
    GotoIf(L0, EventFlag(12410810));
    GotoIf(L0, EventFlag(9467));
    flagMap = EventFlag(1362) && EventFlag(72400520) && PlayerInMap(21, 0);
    flag = EventFlag(1363);
    flag2 = (EventFlag(1701) || EventFlag(1702)) && (EventFlag(1368) || EventFlag(1369));
    flag3 = EventFlag(12410810) || EventFlag(9467);
    WaitFor(flagMap || flag || flag2 || flag3);
    GotoIf(L0, flag3.Passed);
    SetEventFlag(70002413, ON);
    WaitFor(EventFlag(12410810) || EventFlag(9467));
L0:
    SetEventFlag(70002413, OFF);
});

// Revenge_Warp OBJ usage restriction_Saint Beast room
$Event(9721, Default, function() {
    if (!ThisEvent()) {
        WaitFor(EventFlag(1371) || (EventFlag(1705) && CharacterDead(2400902)));
    }
L0:
    SetEventFlag(70002401, OFF);
});

// Avenger_Energy
$Event(9722, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(EventFlag(1373) && EventFlag(9802));
    BatchSetEventFlags(1360, 1379, OFF);
    SetEventFlag(1370, ON);
    SetEventFlag(70002401, ON);
});

// Avenger_Darkness
$Event(9723, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(EventFlag(1374) && EventFlag(9802));
    BatchSetEventFlags(1360, 1379, OFF);
    SetEventFlag(1372, ON);
    SetEventFlag(70002401, ON);
});

// Infected beggar_other NPC killing count_ground
$Event(9755, Default, function() {
    WaitFor(
        (EventFlag(1205) || EventFlag(1207))
            && EventFlag(72400360)
            && (EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 12201800)
                || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 12301800)
                || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 12301700)
                || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 12401800)
                || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 12411800)
                || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 12411700)
                || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 12421800)
                || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 12421700)
                || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 12501800)
                || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 12601800)
                || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 12601850)
                || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 12701800)
                || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 12801800)
                || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 13201800)
                || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 13301800)));
    IncrementEventValue(70000200, 3, 7);
    RestartEvent();
});

// Infected Beggar_Other NPC Killing Count_Dungeon
$Event(9756, Default, function() {
    WaitFor(
        (EventFlag(1205) || EventFlag(1207))
            && EventFlag(72400360)
            && PlayerInMap(29, 0)
            && (EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 12901800)
                || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 12901801)
                || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 12901802)
                || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 12901803)));
    IncrementEventValue(70000200, 3, 7);
    RestartEvent();
});

// Bloodline Hunting_Moved outside the old castle
$Event(9770, Default, function() {
    WaitFor(EventFlag(1351) && !PlayerInMap(25, 0));
    SetEventFlag(72500359, ON);
});

// Spider-man patch_in the dungeon
$Event(9780, Default, function() {
    WaitFor(EventFlag(1422) && !PlayerInMap(32, 0) && EventFlag(73200326));
    BatchSetEventFlags(1420, 1437, OFF);
    SetEventFlag(1423, ON);
});

// Spider-Man Patch_Take over the inhabitants as they reached the forest
$Event(9781, Default, function() {
    EndIf(ThisEvent());
    WaitFor(CharacterType(10000, TargetType.Alive) && PlayerInMap(27, 0));
    EndIf(EventFlag(1438));
    SetEventFlag(1439, ON);
    SetEventFlag(72410382, ON);
});

// Spider-Man_(listening to story & went to base or died) or Spider-Man died so hijacking ended
$Event(9782, Default, function() {
    WaitFor((PlayerHasItem(ItemType.Goods, 4310) && (PlayerInMap(21, 0) || CharacterDead(10000))) || EventFlag(1431));
    SetEventFlag(1438, ON);
    SetEventFlag(1439, OFF);
});

// C end branch_decision
$Event(9909, Default, function() {
    EndIf(EventFlag(9900));
    WaitFor(EventValue(9901, 4) >= 3);
    SetEventFlag(9900, ON);
});

// C end branch_3rd umbilical cord usage count_XX
$Event(9905, Default, function(X0_4) {
    EndIf(ThisEventSlot());
    WaitFor(CharacterHasSpEffect(10000, X0_4));
    IncrementEventValue(9901, 4, 4);
});

// Crunchy flag control
$Event(9910, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(!CharacterType(10000, TargetType.Alive));
    EndIf(ThisEvent());
    if (!EventFlag(6300)) {
        SetEventFlag(50000400, OFF);
        SetEventFlag(50000405, ON);
    } else {
        SetEventFlag(50000400, ON);
        SetEventFlag(50000405, OFF);
    }
    if (!EventFlag(6301)) {
        SetEventFlag(50000600, OFF);
        SetEventFlag(50000605, ON);
    } else {
        SetEventFlag(50000600, ON);
        SetEventFlag(50000605, OFF);
    }
    if (!EventFlag(6302)) {
        SetEventFlag(50000800, OFF);
        SetEventFlag(50000801, ON);
    } else {
        SetEventFlag(50000800, ON);
        SetEventFlag(50000801, OFF);
    }
    if (!EventFlag(6303)) {
        SetEventFlag(50001100, OFF);
        SetEventFlag(50001105, ON);
    } else {
        SetEventFlag(50001100, ON);
        SetEventFlag(50001105, OFF);
    }
    if (!EventFlag(6304)) {
        SetEventFlag(50001300, OFF);
        SetEventFlag(50001301, ON);
    } else {
        SetEventFlag(50001300, ON);
        SetEventFlag(50001301, OFF);
    }
    if (!EventFlag(6305)) {
        SetEventFlag(50001610, OFF);
        SetEventFlag(50001611, ON);
    } else {
        SetEventFlag(50001610, ON);
        SetEventFlag(50001611, OFF);
    }
    if (!EventFlag(6306)) {
        SetEventFlag(50002110, OFF);
        SetEventFlag(50002115, ON);
    } else {
        SetEventFlag(50002110, ON);
        SetEventFlag(50002115, OFF);
    }
    if (!EventFlag(6307)) {
        SetEventFlag(50003400, OFF);
        SetEventFlag(50003405, ON);
    } else {
        SetEventFlag(50003400, ON);
        SetEventFlag(50003405, OFF);
    }
    if (!EventFlag(6308)) {
        SetEventFlag(50003500, OFF);
        SetEventFlag(50003505, ON);
    } else {
        SetEventFlag(50003500, ON);
        SetEventFlag(50003505, OFF);
    }
    if (!EventFlag(6340)) {
        SetEventFlag(50000200, OFF);
        SetEventFlag(50000205, OFF);
        SetEventFlag(50000210, ON);
    } else {
        SetEventFlag(50000200, ON);
        SetEventFlag(50000205, ON);
        SetEventFlag(50000210, OFF);
    }
    if (!EventFlag(6341)) {
        SetEventFlag(50001820, OFF);
        SetEventFlag(50001825, ON);
    } else {
        SetEventFlag(50001820, ON);
        SetEventFlag(50001825, OFF);
    }
    if (!EventFlag(6342)) {
        SetEventFlag(50001910, OFF);
        SetEventFlag(50001915, ON);
        SetEventFlag(50001900, OFF);
        SetEventFlag(50001905, ON);
    } else {
        SetEventFlag(50001910, ON);
        SetEventFlag(50001915, OFF);
        SetEventFlag(50001900, OFF);
        SetEventFlag(50001905, ON);
    }
    if (!EventFlag(6334)) {
        SetEventFlag(50003100, OFF);
        SetEventFlag(50003105, ON);
    } else {
        SetEventFlag(50003100, ON);
        SetEventFlag(50003105, OFF);
    }
    if (!EventFlag(6335)) {
        SetEventFlag(50001500, OFF);
        SetEventFlag(50001505, ON);
    } else {
        SetEventFlag(50001500, ON);
        SetEventFlag(50001505, OFF);
    }
    if (!EventFlag(6641)) {
        SetEventFlag(50001700, OFF);
        SetEventFlag(50001701, ON);
    } else {
        SetEventFlag(50001700, ON);
        SetEventFlag(50001701, OFF);
    }
    if (!EventFlag(6643)) {
        SetEventFlag(50001900, OFF);
        SetEventFlag(50001905, ON);
    } else {
        SetEventFlag(50001900, ON);
        SetEventFlag(50001905, OFF);
    }
    if (!EventFlag(6647)) {
        SetEventFlag(50001810, OFF);
        SetEventFlag(50001805, ON);
    } else {
        SetEventFlag(50001810, ON);
        SetEventFlag(50001805, OFF);
    }
    if (!EventFlag(6649)) {
        SetEventFlag(50000205, OFF);
        SetEventFlag(50000210, ON);
    } else {
        SetEventFlag(50000205, ON);
        SetEventFlag(50000210, OFF);
    }
    if (!EventFlag(6677)) {
        SetEventFlag(50002260, OFF);
        SetEventFlag(50002261, ON);
    } else {
        SetEventFlag(50002260, ON);
        SetEventFlag(50002261, OFF);
    }
});
