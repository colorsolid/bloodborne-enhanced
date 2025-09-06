# -*- coding: utf-8 -*-
def t210691_1():
    """State 0"""
    while True:
        """State 1"""
        call = t210691_x3()
        assert IsClientPlayer() == 1
        """State 2"""
        call = t210691_x4()
        assert not IsClientPlayer()

# bath messengers

def t210691_x0(actionbutton1=6013, flag1=6000, flag2=6001, flag3=6001, flag4=6001, flag5=6001, flag6=6001,
               flag7=6001):
    """State 0"""
    while True:
        """State 1"""
        assert (not GetOneLineHelpStatus() and not IsTalkingToSomeoneElse() and not IsClientPlayer()
                and not IsPlayerDead() and not IsCharacterDisabled())
        """State 3"""
        assert (GetEventStatus(flag1) == 1 or GetEventStatus(flag2) == 1 or GetEventStatus(flag3) ==
                1 or GetEventStatus(flag4) == 1 or GetEventStatus(flag5) == 1 or GetEventStatus(flag6)
                == 1 or GetEventStatus(flag7) == 1)
        """State 2"""
        def ExitPause():
            SetTalkTime(0.5)
        if (not GetEventStatus(flag1) and not GetEventStatus(flag2) and not GetEventStatus(flag3) and
            not GetEventStatus(flag4) and not GetEventStatus(flag5) and not GetEventStatus(flag6) and
            not GetEventStatus(flag7)):
            pass
        elif CheckActionButtonArea(actionbutton1):
            break
        elif (not (not GetOneLineHelpStatus() and not IsTalkingToSomeoneElse() and not IsClientPlayer()
              and not IsPlayerDead() and not IsCharacterDisabled())):
            pass
    """State 4"""
    return 0

def t210691_x1():
    """State 0"""
    if GetEventStatus(6710) == 1:
        pass
    else:
        """State 10"""
        OpenGenericDialog(1, 10011160, 1, 0, 1)
        """State 11"""
        SetEventState(6710, 1)
        SetTalkTime(0.33)
        assert not IsGenericDialogOpen()
    while True:
        """State 2"""
        ClearTalkListData()
        """State 3"""
        AddTalkListData(1, 15000140, -1)
        AddTalkListData(2, 15000141, -1)
        AddTalkListData(3, 200036, 12100871)
        AddTalkListData(4, 200096, 12100871)
        AddTalkListData(50, 15000005, -1)
        """State 9"""
        SetEventState(12105041, 1)
        """State 4"""
        ShowShopMessage(0, 0, 0)
        def WhilePaused():
            SetTalkTime(0.33)
        if (not GetTalkListEntryResult() or GetTalkListEntryResult() == 50 or not CheckSpecificPersonMenuIsOpen(300,
            0)):
            break
        elif GetTalkListEntryResult() == 1: # buy shop
            """State 6"""
            DebugEvent('購入')
            if GetEventStatus(6603) == 1: # ng +
                """State 179"""
                if GetEventStatus(12100848):
                    OpenRegularShop(140000, 149999)
                else:
                    OpenRegularShop(140000, 149983)
                def WhilePaused():
                    SetTalkTime(0.33)
                assert not CheckSpecificPersonMenuIsOpen(11, 0)
            elif GetEventStatus(9802) == 1: # after rom
                """State 180"""
                if GetEventStatus(12100848):
                    OpenRegularShop(130000, 139999)
                else:
                    OpenRegularShop(130000, 139983)
                def WhilePaused():
                    SetTalkTime(0.33)
                assert not CheckSpecificPersonMenuIsOpen(11, 0)
            elif GetEventStatus(9801) == 1: # after amelia
                """State 181"""
                if GetEventStatus(12100848):
                    OpenRegularShop(120000, 129999)
                else:
                    OpenRegularShop(120000, 129983)
                def WhilePaused():
                    SetTalkTime(0.33)
                assert not CheckSpecificPersonMenuIsOpen(11, 0)
            elif GetEventStatus(9800) == 1: # after gascoigne
                """State 182"""
                if GetEventStatus(12100848):
                    OpenRegularShop(110000, 119999)
                else:
                    OpenRegularShop(110000, 119983)
                def WhilePaused():
                    SetTalkTime(0.33)
                assert not CheckSpecificPersonMenuIsOpen(11, 0)
            else:
                """State 183"""
                if GetEventStatus(12100848):
                    OpenRegularShop(100000, 109999)
                else:
                    OpenRegularShop(100000, 109983)
                def WhilePaused():
                    SetTalkTime(0.33)
                assert not CheckSpecificPersonMenuIsOpen(11, 0)
        elif GetTalkListEntryResult() == 2: # sell shop
            """State 5"""
            DebugEvent('売却')
            """State 8"""
            OpenSellShop(-1, -1)
            def WhilePaused():
                SetTalkTime(0.33)
            assert not CheckSpecificPersonMenuIsOpen(64, 0)
        elif GetTalkListEntryResult() == 3: # stocked shop
            OpenRegularShop(170000, 179999)
            def WhilePaused():
                SetTalkTime(0.33)
            assert not CheckSpecificPersonMenuIsOpen(11, 0)
        elif GetTalkListEntryResult() == 4: # specialty shop
            call = t210691_x5()
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                return 0
    """State 7"""
    DebugEvent('立ち去る')
    """State 16"""
    return 0

def t210691_x2():
    """State 0,1"""
    ForceCloseMenu()
    """State 2"""
    return 0

def t210691_x3():
    """State 0"""
    while True:
        """State 3"""
        assert (t210691_x0(actionbutton1=6013, flag1=6000, flag2=6001, flag3=6001, flag4=6001, flag5=6001,
                flag6=6001, flag7=6001))
        """State 1"""
        call = t210691_x1()
        def ExitPause():
            SetEventState(12105041, 0)
        if call.Done():
            pass
        elif GetDistanceToPlayer() > 3:
            """State 2"""
            assert t210691_x2()
    """Unused"""
    """State 4"""
    return 0

def t210691_x4():
    """State 0,1"""
    DebugEvent('ゲスト待機')
    Quit()
    """Unused"""
    """State 2"""
    return 0

def t210691_x5():
    while True:
        ClearTalkListData()
        AddTalkListData(1, 200082, 12101400) # all trick weapons
        AddTalkListData(2, 200088, 12101401) # all standard trick weapons
        AddTalkListData(3, 200089, 12101402) # all uncanny trick weapons
        AddTalkListData(4, 200090, 12101403) # all lost trick weapons
        AddTalkListData(5, 200140, -1) # rune list
        AddTalkListData(10, 200083, 12101410) # secondary weapons
        AddTalkListData(20, 200091, 12101420) # hunter's tools
        AddTalkListData(30, 200084, 12101430) # all armors
        AddTalkListData(31, 200092, 12101431) # all head pieces
        AddTalkListData(32, 200093, 12101432) # all torse pieces
        AddTalkListData(33, 200094, 12101433) # all hand pieces
        AddTalkListData(34, 200095, 12101434) # all leg pieces
        AddTalkListData(40, 200085, 12101440) # chalices
        AddTalkListData(60, 200109, -1) # fill upgrade materials
        AddTalkListData(61, 200110, -1) # fill chalice materials
        ShowShopMessage(0, 0, 0)
        def WhilePaused():
            SetTalkTime(0.33)
        if not GetTalkListEntryResult() or not IsTalkExclusiveMenuOpen():
            return 1
        elif GetTalkListEntryResult() == 1: # all trick weapons
            SetEventState(12101300, 1)
            OpenGenericDialog(1, 200097, 1, 0, 1)
            def WhilePaused():
                SetTalkTime(0.33)
            assert not IsGenericDialogOpen()
        elif GetTalkListEntryResult() == 2: # all standard trick weapons
            SetEventState(12101301, 1)
            OpenGenericDialog(1, 200101, 1, 0, 1)
            def WhilePaused():
                SetTalkTime(0.33)
            assert not IsGenericDialogOpen()
        elif GetTalkListEntryResult() == 3: # all uncanny trick weapons
            SetEventState(12101302, 1)
            OpenGenericDialog(1, 200102, 1, 0, 1)
            def WhilePaused():
                SetTalkTime(0.33)
            assert not IsGenericDialogOpen()
        elif GetTalkListEntryResult() == 4: # all lost trick weapons
            SetEventState(12101303, 1)
            OpenGenericDialog(1, 200103, 1, 0, 1)
            def WhilePaused():
                SetTalkTime(0.33)
        elif GetTalkListEntryResult() == 5: # rune list
            call = t210691_x6()
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                return 0
            assert not IsGenericDialogOpen()
        elif GetTalkListEntryResult() == 10: # all secondary weapons
            SetEventState(12101310, 1)
            OpenGenericDialog(1, 200098, 1, 0, 1)
            def WhilePaused():
                SetTalkTime(0.33)
            assert not IsGenericDialogOpen()
        elif GetTalkListEntryResult() == 20: # all hunter's tools
            SetEventState(12101320, 1)
            OpenGenericDialog(1, 200104, 1, 0, 1)
            def WhilePaused():
                SetTalkTime(0.33)
            assert not IsGenericDialogOpen()
        elif GetTalkListEntryResult() == 30: # all armors
            SetEventState(12101330, 1)
            OpenGenericDialog(1, 200099, 1, 0, 1)
            def WhilePaused():
                SetTalkTime(0.33)
            assert not IsGenericDialogOpen()
        elif GetTalkListEntryResult() == 31: # all head pieces
            SetEventState(12101331, 1)
            OpenGenericDialog(1, 200105, 1, 0, 1)
            def WhilePaused():
                SetTalkTime(0.33)
            assert not IsGenericDialogOpen()
        elif GetTalkListEntryResult() == 32: # all torse pieces
            SetEventState(12101332, 1)
            OpenGenericDialog(1, 200106, 1, 0, 1)
            def WhilePaused():
                SetTalkTime(0.33)
            assert not IsGenericDialogOpen()
        elif GetTalkListEntryResult() == 33: # all hand pieces
            SetEventState(12101333, 1)
            OpenGenericDialog(1, 200107, 1, 0, 1)
            def WhilePaused():
                SetTalkTime(0.33)
            assert not IsGenericDialogOpen()
        elif GetTalkListEntryResult() == 34: # all leg pieces
            SetEventState(12101334, 1)
            OpenGenericDialog(1, 200108, 1, 0, 1)
            def WhilePaused():
                SetTalkTime(0.33)
            assert not IsGenericDialogOpen()
        elif GetTalkListEntryResult() == 40: # all chalices
            SetEventState(12101340, 1)
            OpenGenericDialog(1, 200100, 1, 0, 1)
            def WhilePaused():
                SetTalkTime(0.33)
            assert not IsGenericDialogOpen()
        elif GetTalkListEntryResult() == 60: # fill upgrade materials
            SetEventState(12101360, 0)
            OpenGenericDialog(1, 200111, 1, 0, 1)
            def WhilePaused():
                SetTalkTime(0.33)
            assert not IsGenericDialogOpen()
        elif GetTalkListEntryResult() == 61: # fill chalice materials
            SetEventState(12101361, 0)
            OpenGenericDialog(1, 200112, 1, 0, 1)
            def WhilePaused():
                SetTalkTime(0.33)
            assert not IsGenericDialogOpen()

def t210691_x6():
    while True:
        ClearTalkListData()
        AddTalkListData(1, 200141, -1) # all runes
        AddTalkListData(50, 200037, 12100870) # beast
        AddTalkListData(51, 200038, 12100869) # milkweed        
        ShowShopMessage(0, 0, 0)
        def WhilePaused():
            SetTalkTime(0.33)
        if not GetTalkListEntryResult() or not IsTalkExclusiveMenuOpen():
            return 1
        elif GetTalkListEntryResult() == 1: # all runes
            SetEventState(12100006, 1)
            OpenGenericDialog(1, 200142, 1, 0, 1)            
            def WhilePaused():
                SetTalkTime(0.33)
            assert not IsGenericDialogOpen()
            return 1
        elif GetTalkListEntryResult() == 50: # beast
            SetEventState(12100770, 1)
        elif GetTalkListEntryResult() == 51: # milkweed
            SetEventState(12100769, 1)