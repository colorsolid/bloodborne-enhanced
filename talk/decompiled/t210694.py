# -*- coding: utf-8 -*-
def t210694_1():
    """State 0"""
    while True:
        """State 1"""
        call = t210694_x2()
        assert IsClientPlayer()
        """State 2"""
        call = t210694_x3()
        assert not IsClientPlayer()

def t210694_x0(z1=99999, z2=99999, z3=99999, z4=99999):
    """State 0,1"""
    DebugEvent('会話判定')
    if not CheckSpecificPersonTalkHasEnded(0):
        """State 7"""
        ClearTalkProgressData()
        StopEventAnimWithoutForcingConversationEnd(0)
        """State 6"""
        ReportConversationEndToHavokBehavior()
    else:
        pass
    """State 2"""
    DebugEvent('汎用ダイアログ判定')
    if IsGenericDialogOpen():
        """State 3"""
        ForceCloseGenericDialog()
    else:
        pass
    """State 4"""
    DebugEvent('メニュー判定')
    if (CheckSpecificPersonMenuIsOpen(z1, 0) or CheckSpecificPersonMenuIsOpen(z2, 0) or CheckSpecificPersonMenuIsOpen(z3,
        0) or CheckSpecificPersonMenuIsOpen(z4, 0)):
        """State 5"""
        ForceCloseMenu()
    else:
        pass
    """State 8"""
    return 0

def t210694_x1(actionbutton1=6014, flag1=6000, flag2=6001, flag3=6001, flag4=6001, flag5=6001, flag6=6001, flag7=6001):
    """State 0"""
    while True:
        """State 1"""
        assert (not GetOneLineHelpStatus() and not IsTalkingToSomeoneElse() and not IsClientPlayer() and not IsPlayerDead()
                and not IsCharacterDisabled())
        """State 3"""
        assert (GetEventFlag(flag1) or GetEventFlag(flag2) or GetEventFlag(flag3) or GetEventFlag(flag4) or GetEventFlag(flag5)
                or GetEventFlag(flag6) or GetEventFlag(flag7))
        """State 2"""
        def ExitPause():
            SetTalkTime(0.5)
        if (not GetEventFlag(flag1) and not GetEventFlag(flag2) and not GetEventFlag(flag3) and not GetEventFlag(flag4)
            and not GetEventFlag(flag5) and not GetEventFlag(flag6) and not GetEventFlag(flag7)):
            pass
        elif CheckActionButtonArea(actionbutton1):
            break
        elif (not (not GetOneLineHelpStatus() and not IsTalkingToSomeoneElse() and not IsClientPlayer() and not
              IsPlayerDead() and not IsCharacterDisabled())):
            pass
    """State 4"""
    return 0

def t210694_x2():
    """State 0"""
    if GetEventFlag(12101020):
        pass
    elif GetEventFlag(12105050):
        """State 1"""
        while True:
            """State 5"""
            call = t210694_x1(actionbutton1=6014, flag1=6000, flag2=6001, flag3=6001, flag4=6001, flag5=6001, flag6=6001,
                              flag7=6001)
            if call.Done():
                """State 2"""
                if GetEventFlag(12100892):
                    # alternate shop
                    call = t210694_x7()
                    if call.Get() == 1:
                        pass
                    elif IsPlayerDead():
                        break
                    elif GetDistanceToPlayer() > 3:
                        call = t210694_x6()
                        if call.Done():
                            pass
                        elif IsPlayerDead():
                            break
                else:
                    # main shop
                    call = t210694_x4()
                    if call.Done():
                        pass
                    elif IsPlayerDead():
                        break
                    elif GetDistanceToPlayer() > 3:
                        """State 4"""
                        call = t210694_x6()
                        if call.Done():
                            pass
                        elif IsPlayerDead():
                            break
            elif IsPlayerDead():
                break
            elif GetEventFlag(12101020):
                Goto('L0')
        """State 3"""
        t210694_x5()
        Quit()
    """State 6"""
    Label('L0')
    return 0

def t210694_x3():
    """State 0,1"""
    Quit()
    """Unused"""
    """State 2"""
    return 0

# main shop
def t210694_x4():
    """State 0"""
    if GetEventFlag(6713):
        pass
    else:
        """State 2"""
        # action:10011220:"The messengers offer you a trick weapon. Choose one.\nTrick weapons are wielded with the right hand,\nand employed in beast hunting."
        OpenGenericDialog(DialogBoxType.CenterMiddleDimScreen1, 10011220, DialogResult.Left, DialogBoxStyle.OrnateNoOptions,
                          1)
        """State 3"""
        SetEventFlag(6713, FlagState.On)
        def WhilePaused():
            SetTalkTime(0.33)
        assert not IsGenericDialogOpen()
    """State 1"""
    OpenStartingGiftMenu1()
    def WhilePaused():
        SetTalkTime(0.33)
    assert not CheckSpecificPersonMenuIsOpen(350, 0)
    """State 4"""
    return 0

def t210694_x5():
    """State 0,1"""
    ForceCloseMenu()
    CloseShopMessage()
    ForceCloseGenericDialog()
    ReportConversationEndToHavokBehavior()
    """State 2"""
    Quit()
    """Unused"""
    """State 3"""
    return 0

def t210694_x6():
    """State 0,1"""
    assert t210694_x0(z1=99999, z2=99999, z3=99999, z4=99999)
    """State 2"""
    return 0

# alternate shop
def t210694_x7():
    """State 0"""
    while True:
        """State 2"""
        ClearTalkListData()
        """State 3"""
        AddTalkListData(1, 200036, -1)
        AddTalkListData(2, 200096, -1)
        AddTalkListData(50, 15000005, -1)
        """State 4"""
        ShowShopMessage(0, 0, 0)
        def WhilePaused():
            SetTalkTime(0.33)
        if (not GetTalkListEntryResult() or GetTalkListEntryResult() == 50 or not CheckSpecificPersonMenuIsOpen(300,
            0)):
            break
        elif GetTalkListEntryResult() == 1: # stocked shop
            OpenRegularShop(170000, 179999)
            def WhilePaused():
                SetTalkTime(0.33)
            assert not CheckSpecificPersonMenuIsOpen(11, 0)
        elif GetTalkListEntryResult() == 2: # specialty shop
            call = t210694_x8()
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                return 0
    """State 7"""
    DebugEvent('立ち去る')
    """State 16"""
    return 1

def t210694_x8():
    while True:
        ClearTalkListData()
        AddTalkListData(1, 200082, 12101400) # all trick weapons
        AddTalkListData(2, 200088, 12101401) # all standard trick weapons
        AddTalkListData(3, 200089, 12101402) # all uncanny trick weapons
        AddTalkListData(4, 200090, 12101403) # all lost trick weapons
        AddTalkListData(5, 200141, 12109000) # all runes
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
        AddTalkListData(62, 14000050, -1) # gestures
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
        elif GetTalkListEntryResult() == 5: # all runes
            SetEventState(12100005, 1)
            OpenGenericDialog(1, 200142, 1, 0, 1)
            def WhilePaused():
                SetTalkTime(0.33)
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
        elif GetTalkListEntryResult() == 62: # gestures
            call = t210694_x9()
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                return 0
            assert not IsGenericDialogOpen()

# gestures
def t210694_x9():
    while True:
        ClearTalkListData()
        AddTalkListData(1, 200301, -1) # approval
        AddTalkListData(2, 200302, -1) # beg for life
        AddTalkListData(3, 200303, -1) # brush off dust
        AddTalkListData(4, 200304, -1) # church bow (female)
        AddTalkListData(5, 200305, -1) # church bow (male)
        AddTalkListData(6, 200306, -1) # curtsy
        AddTalkListData(7, 200307, -1) # deep respect
        AddTalkListData(8, 200308, -1) # league oath
        AddTalkListData(9, 200309, -1) # make contact
        AddTalkListData(10, 200310, -1) # pray
        AddTalkListData(11, 200311, -1) # respect
        AddTalkListData(12, 200312, -1) # roar
        AddTalkListData(13, 200313, -1) # shake off cape
        AddTalkListData(14, 200314, -1) # shh!
        AddTalkListData(15, 200315, -1) # triumph
        AddTalkListData(16, 200316, -1) # wait
        ShowShopMessage(0, 0, 0)
        def WhilePaused():
            SetTalkTime(0.33)
        if not GetTalkListEntryResult() or not IsTalkExclusiveMenuOpen():
            return 1
        elif GetTalkListEntryResult() == 1: # approval
            OpenItemAcquisitionMenu(ItemType.Goods, 814, 1)
            AcquireGesture(14)
            assert not IsMenuOpen(MenuType.Bonfire)
        elif GetTalkListEntryResult() == 2: # beg for life 
            OpenItemAcquisitionMenu(ItemType.Goods, 816, 1)
            AcquireGesture(16)
            assert not IsMenuOpen(MenuType.Bonfire)
        elif GetTalkListEntryResult() == 3: # brush off dust
            OpenItemAcquisitionMenu(ItemType.Goods, 817, 1)
            AcquireGesture(17)
            assert not IsMenuOpen(MenuType.Bonfire)
        elif GetTalkListEntryResult() == 4: # church bow (female)
            OpenItemAcquisitionMenu(ItemType.Goods, 807, 1)
            AcquireGesture(7)
            assert not IsMenuOpen(MenuType.Bonfire)
        elif GetTalkListEntryResult() == 5: # church bow (male) 
            OpenItemAcquisitionMenu(ItemType.Goods, 805, 1)
            AcquireGesture(5)
            assert not IsMenuOpen(MenuType.Bonfire)
        elif GetTalkListEntryResult() == 6: # curtsy
            OpenItemAcquisitionMenu(ItemType.Goods, 806, 1)
            AcquireGesture(6)
            assert not IsMenuOpen(MenuType.Bonfire)
        elif GetTalkListEntryResult() == 7: # deep respect
            OpenItemAcquisitionMenu(ItemType.Goods, 819, 1)
            AcquireGesture(19)
            assert not IsMenuOpen(MenuType.Bonfire)
        elif GetTalkListEntryResult() == 8: # league oath
            OpenItemAcquisitionMenu(ItemType.Goods, 822, 1)
            AcquireGesture(22)
            assert not IsMenuOpen(MenuType.Bonfire)
        elif GetTalkListEntryResult() == 9: # make contact
            OpenItemAcquisitionMenu(ItemType.Goods, 820, 1)
            AcquireGesture(20)
            assert not IsMenuOpen(MenuType.Bonfire)
        elif GetTalkListEntryResult() == 10: # pray 
            OpenItemAcquisitionMenu(ItemType.Goods, 809, 1)
            AcquireGesture(9)
            assert not IsMenuOpen(MenuType.Bonfire)
        elif GetTalkListEntryResult() == 11: # respect
            OpenItemAcquisitionMenu(ItemType.Goods, 818, 1)
            AcquireGesture(18)
            assert not IsMenuOpen(MenuType.Bonfire)
        elif GetTalkListEntryResult() == 12: # roar
            OpenItemAcquisitionMenu(ItemType.Goods, 815, 1)
            AcquireGesture(15)
            assert not IsMenuOpen(MenuType.Bonfire)
        elif GetTalkListEntryResult() == 13: # shake off cape
            OpenItemAcquisitionMenu(ItemType.Goods, 804, 1)
            AcquireGesture(4)
            assert not IsMenuOpen(MenuType.Bonfire)
        elif GetTalkListEntryResult() == 14: # shh!
            OpenItemAcquisitionMenu(ItemType.Goods, 811, 1)
            AcquireGesture(11)
            assert not IsMenuOpen(MenuType.Bonfire)
        elif GetTalkListEntryResult() == 15: # triumph
            OpenItemAcquisitionMenu(ItemType.Goods, 813, 1)
            AcquireGesture(13)
            assert not IsMenuOpen(MenuType.Bonfire)
        elif GetTalkListEntryResult() == 16: # wait
            OpenItemAcquisitionMenu(ItemType.Goods, 810, 1)
            AcquireGesture(10)
            assert not IsMenuOpen(MenuType.Bonfire)